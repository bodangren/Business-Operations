import type { LocalStudyData } from "./storage-schema"
import { STORAGE_ROOT_KEY, STORAGE_SCHEMA_VERSION, createEmptyLocalData } from "./storage-schema"

// ---------------------------------------------------------------------------
// Typed Local Storage Utilities
// ---------------------------------------------------------------------------

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined"
}

/**
 * Read the full study data payload from localStorage.
 * Returns a fresh empty payload if nothing is stored or data is corrupted.
 */
export function loadStudyData(): LocalStudyData {
  if (!isBrowser()) return createEmptyLocalData()

  try {
    const raw = window.localStorage.getItem(STORAGE_ROOT_KEY)
    if (!raw) return createEmptyLocalData()

    const parsed = JSON.parse(raw) as Record<string, unknown>

    if (parsed.schema_version !== STORAGE_SCHEMA_VERSION) {
      return migrate(parsed) ?? createEmptyLocalData()
    }

    if (
      typeof parsed !== "object" ||
      parsed === null ||
      !Array.isArray(parsed.sessions) ||
      !Array.isArray(parsed.reflections) ||
      typeof parsed.study_state !== "object"
    ) {
      return createEmptyLocalData()
    }

    return parsed as unknown as LocalStudyData
  } catch {
    return createEmptyLocalData()
  }
}

/**
 * Persist the full study data payload to localStorage.
 * Silently ignores failures (incognito mode, quota exceeded, etc.).
 */
export function saveStudyData(data: LocalStudyData): boolean {
  if (!isBrowser()) return false

  try {
    data.last_updated_at = new Date().toISOString()
    window.localStorage.setItem(STORAGE_ROOT_KEY, JSON.stringify(data))
    return true
  } catch {
    return false
  }
}

/**
 * Reset all study data to defaults.
 */
export function resetStudyData(): LocalStudyData {
  const fresh = createEmptyLocalData()
  saveStudyData(fresh)
  return fresh
}

/**
 * Remove the study data key entirely from localStorage.
 */
export function clearStudyData(): void {
  if (!isBrowser()) return
  window.localStorage.removeItem(STORAGE_ROOT_KEY)
}

/**
 * Attempt to migrate an older schema version to the current version.
 * Returns null if migration is not possible.
 */
export function migrate(
  raw: Record<string, unknown>
): LocalStudyData | null {
  const version = raw.schema_version as string | undefined

  if (!version) return null

  // Major version mismatch — cannot migrate
  const [major] = version.split(".")
  if (major && major !== "1") return null

  // Minor version migration (v1.0.x → v1.0.0)
  const current = createEmptyLocalData()

  // Shallow merge known fields, ignoring unknown ones
  if (typeof raw.student === "object" && raw.student !== null) {
    current.student = { ...current.student, ...(raw.student as Record<string, string>) }
  }
  if (typeof raw.preferences === "object" && raw.preferences !== null) {
    current.preferences = { ...current.preferences, ...(raw.preferences as Record<string, unknown>) } as typeof current.preferences
  }
  if (Array.isArray(raw.sessions)) {
    current.sessions = raw.sessions as typeof current.sessions
  }
  if (Array.isArray(raw.reflections)) {
    current.reflections = raw.reflections as typeof current.reflections
  }
  if (Array.isArray(raw.export_history)) {
    current.export_history = raw.export_history as typeof current.export_history
  }

  current.schema_version = STORAGE_SCHEMA_VERSION
  return current
}

/**
 * Get the ISO timestamp of the last successful save, or null if never saved.
 */
export function getLastUpdated(): string | null {
  if (!isBrowser()) return null
  try {
    const raw = window.localStorage.getItem(STORAGE_ROOT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Record<string, unknown>
    return (parsed.last_updated_at as string) ?? null
  } catch {
    return null
  }
}
