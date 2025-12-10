import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info } from "lucide-react"

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
})

export interface TaxBracket {
  rate: number
  range: {
    min: number
    max: number | null
  }
  baseTax: number
  description: string
}

interface TaxBracketTableProps {
  title: string
  filingStatusLabel: string
  brackets: TaxBracket[]
  highlightIncome?: number
  note?: string
}

export function TaxBracketTable({
  title,
  filingStatusLabel,
  brackets,
  highlightIncome,
  note
}: TaxBracketTableProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-slate-900 flex items-center justify-between gap-2">
          {title}
          <Badge className="bg-slate-100 text-slate-800 border border-slate-200">
            {filingStatusLabel}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-600">
                <th className="py-2 pr-4 font-semibold">Rate</th>
                <th className="py-2 pr-4 font-semibold">Taxable income range</th>
                <th className="py-2 pr-4 font-semibold">IRS formula</th>
              </tr>
            </thead>
            <tbody>
              {brackets.map((bracket, index) => {
                const isHighlighted =
                  typeof highlightIncome === "number" &&
                  highlightIncome >= bracket.range.min &&
                  (bracket.range.max === null || highlightIncome <= bracket.range.max)
                return (
                  <tr
                    key={`${bracket.rate}-${index}`}
                    className={`border-t border-slate-100 ${
                      isHighlighted ? "bg-amber-50/80" : "bg-white"
                    }`}
                  >
                    <td className="py-2 pr-4 font-semibold text-slate-900">
                      {(bracket.rate * 100).toFixed(0)}%
                    </td>
                    <td className="py-2 pr-4 text-slate-800">
                      {currency.format(bracket.range.min)} – {" "}
                      {bracket.range.max ? currency.format(bracket.range.max) : "and up"}
                    </td>
                    <td className="py-2 pr-4 text-slate-800">{bracket.description}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {note && (
          <div className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800">
            <Info className="h-4 w-4 text-slate-600 mt-0.5" />
            <p>{note}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
