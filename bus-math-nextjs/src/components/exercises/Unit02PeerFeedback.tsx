'use client'

import { useEffect, useId, useState } from 'react'
import { Button } from '@/components/ui/button'

const CRITERIA = ['Accounting accuracy', 'Formula and control checks', 'Evidence for the recommendation', 'Risk and assumptions', 'Clarity of explanation']
interface Draft { peer: string; ratings: number[]; strength: string; revision: string; evidence: string }
const EMPTY: Draft = { peer: '', ratings: [0, 0, 0, 0, 0], strength: '', revision: '', evidence: '' }

/**
 * Collect a Unit 2 peer audit that can be saved locally and exported.
 * @param props - The lesson audit title and optional peer label.
 * @returns The feedback form with draft and file export controls.
 */
export default function Unit02PeerFeedback({ projectTitle, peerName = '', unitNumber: _unitNumber }: { projectTitle: string; peerName?: string; unitNumber?: number }) {
  const id = useId()
  const key = 'unit02:peer-feedback:' + projectTitle
  const [draft, setDraft] = useState<Draft>({ ...EMPTY, peer: peerName })
  const [status, setStatus] = useState('')
  const complete = draft.ratings.every(rating => rating > 0) && !!draft.strength.trim() && !!draft.revision.trim() && !!draft.evidence.trim()
  useEffect(() => {
    try {
      const saved = localStorage.getItem(key)
      if (!saved) return
      const value: unknown = JSON.parse(saved)
      if (!value || typeof value !== 'object') return
      const candidate = value as Partial<Draft>
      if (typeof candidate.peer === 'string' && typeof candidate.strength === 'string' && typeof candidate.revision === 'string' && typeof candidate.evidence === 'string' && Array.isArray(candidate.ratings) && candidate.ratings.length === 5 && candidate.ratings.every(rating => Number.isInteger(rating) && rating >= 0 && rating <= 5)) {
        setDraft(candidate as Draft)
        setStatus('Saved draft restored from this browser.')
      }
    } catch { setStatus('The saved draft could not be opened. You can enter feedback and export it.') }
  }, [key])
  const save = () => {
    try { localStorage.setItem(key, JSON.stringify(draft)); setStatus('Saved in this browser. Export a copy to keep with your project.') }
    catch { setStatus('Local saving failed. Export a file to keep your feedback.') }
  }
  const exportFeedback = () => {
    const text = ['# ' + projectTitle, 'Status: ' + (complete ? 'Complete audit' : 'Draft audit'), 'Reviewed group: ' + draft.peer, 'Date: ' + new Date().toISOString().slice(0, 10), '', ...CRITERIA.map((criterion, index) => criterion + ': ' + (draft.ratings[index] || 'Not rated') + '/5'), '', 'Specific strength: ' + draft.strength, 'Revision target: ' + draft.revision, 'Workbook evidence: ' + draft.evidence].join('\n')
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }))
    const anchor = document.createElement('a')
    anchor.href = url; anchor.download = 'unit02-peer-feedback.txt'
    document.body.append(anchor); anchor.click(); anchor.remove()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    setStatus('Feedback exported. Share the file through your class submission method.')
  }
  return <div className="space-y-4 rounded border p-4">
    <h3 className="text-lg font-semibold">{projectTitle}</h3>
    <p className="text-sm">Rate each criterion from 1 (needs work) to 5 (ready). Cite a sheet and cell for each claim. This form saves in this browser. Export the file for your partner and project records.</p>
    <label htmlFor={id + '-peer'} className="block">Reviewed group
      <input id={id + '-peer'} value={draft.peer} onChange={event => setDraft({ ...draft, peer: event.target.value })} className="mt-1 block w-full rounded border p-2" />
    </label>
    {CRITERIA.map((criterion, index) => <label key={criterion} htmlFor={id + '-rating-' + index} className="block">{criterion}
      <select id={id + '-rating-' + index} value={draft.ratings[index]} onChange={event => setDraft({ ...draft, ratings: draft.ratings.map((rating, i) => i === index ? Number(event.target.value) : rating) })} className="ml-2 rounded border p-2">
        <option value={0}>Not rated</option>{[1, 2, 3, 4, 5].map(rating => <option key={rating} value={rating}>{rating}/5</option>)}
      </select>
    </label>)}
    {([['strength', 'Specific strength'], ['revision', 'Revision target'], ['evidence', 'Workbook evidence']] as const).map(([field, label]) => <label key={field} htmlFor={id + '-' + field} className="block">{label}
      <textarea id={id + '-' + field} value={draft[field]} onChange={event => setDraft({ ...draft, [field]: event.target.value })} className="mt-1 block w-full rounded border p-2" />
    </label>)}
    <p className="text-sm">{complete ? 'All audit fields are complete.' : 'You can save or export a draft before every field is complete.'}</p>
    <div className="flex flex-wrap gap-2"><Button onClick={save}>Save draft</Button><Button variant="outline" onClick={exportFeedback}>Export feedback</Button></div>
    <p role="status" className="text-sm">{status}</p>
  </div>
}
