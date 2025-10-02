import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type NarrativeBlock } from "@/types/lesson-scenarios"
import { cn } from "@/lib/utils"
import { AlertTriangle, HelpCircle, Lightbulb, MessageCircle, Star } from "lucide-react"

interface ScenarioNarrativeProps {
  blocks: NarrativeBlock[]
  proseClassName?: string
}

type CalloutIntent = Extract<NarrativeBlock, { type: "callout" }> ["intent"]

const CALLOUT_CONFIG: Record<CalloutIntent, { titleColor: string; cardClasses: string; icon: React.ReactNode }> = {
  tip: {
    titleColor: "text-emerald-800",
    cardClasses: "border-emerald-200 bg-emerald-50 dark:bg-emerald-950/10",
    icon: <Lightbulb className="h-5 w-5 text-emerald-600" />
  },
  warning: {
    titleColor: "text-red-800",
    cardClasses: "border-red-200 bg-red-50 dark:bg-red-950/10",
    icon: <AlertTriangle className="h-5 w-5 text-red-600" />
  },
  whyItMatters: {
    titleColor: "text-blue-900",
    cardClasses: "border-blue-200 bg-blue-50 dark:bg-blue-950/10",
    icon: <Star className="h-5 w-5 text-blue-700" />
  },
  story: {
    titleColor: "text-purple-900",
    cardClasses: "border-purple-200 bg-purple-50 dark:bg-purple-950/10",
    icon: <MessageCircle className="h-5 w-5 text-purple-700" />
  },
  question: {
    titleColor: "text-indigo-900",
    cardClasses: "border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10",
    icon: <HelpCircle className="h-5 w-5 text-indigo-700" />
  }
}

export function ScenarioNarrative({ blocks, proseClassName }: ScenarioNarrativeProps) {
  return (
    <div className={cn("prose prose-lg max-w-none", proseClassName)}>
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index} className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              {block.text}
            </p>
          )
        }

        if (block.type === "heading") {
          const HeadingTag = `h${block.level}` as const
          return (
            <HeadingTag key={index} className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {block.text}
            </HeadingTag>
          )
        }

        if (block.type === "list") {
          const ListTag = block.style === "ordered" ? "ol" : "ul"
          return (
            <ListTag key={index} className="space-y-2 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ListTag>
          )
        }

        if (block.type === "callout") {
          const config = CALLOUT_CONFIG[block.intent]
          return (
            <Card key={index} className={config.cardClasses}>
              <CardHeader className="flex flex-row items-center gap-2">
                {config.icon}
                <CardTitle className={cn("text-lg", config.titleColor)}>{block.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-base text-gray-800 dark:text-gray-100">{block.body}</p>
                {block.bullets && block.bullets.length > 0 && (
                  <ul className="list-disc pl-6 space-y-1 text-base text-gray-800 dark:text-gray-200">
                    {block.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          )
        }

        return null
      })}
    </div>
  )
}
