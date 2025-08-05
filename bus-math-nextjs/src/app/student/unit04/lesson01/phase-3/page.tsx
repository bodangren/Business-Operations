
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit04Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart } from "@/components/charts/BarChart";

export default function Phase3Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 3)!

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit04Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
        <Card className="mb-8 bg-orange-50 border-orange-200">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-800">Guided Practice: Making Sense of the Data</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Now that you understand the challenge, let's start working with the data. The first step in any data analysis project is to get a feel for the numbers. We'll use some basic statistical measures to understand the café's sales patterns. This is called descriptive statistics.
            </p>
            <p>
              Let's focus on the Pastry Inventory Management problem. Imagine your team has the following data for weekend croissant sales over the past four weeks:
            </p>
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b p-2">Week</th>
                    <th className="border-b p-2">Saturday Sales</th>
                    <th className="border-b p-2">Sunday Sales</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b p-2">1</td>
                    <td className="border-b p-2">120</td>
                    <td className="border-b p-2">85</td>
                  </tr>
                  <tr>
                    <td className="border-b p-2">2</td>
                    <td className="border-b p-2">110</td>
                    <td className="border-b p-2">80</td>
                  </tr>
                  <tr>
                    <td className="border-b p-2">3</td>
                    <td className="border-b p-2">135</td>
                    <td className="border-b p-2">90</td>
                  </tr>
                  <tr>
                    <td className="border-b p-2">4</td>
                    <td className="border-b p-2">125</td>
                    <td className="border-b p-2">88</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="mt-6">Turn and Talk</h3>
            <p>
              With your partner, discuss the following questions:
            </p>
            <ul className="list-disc pl-6">
              <li>Looking at the numbers, on which day would you say the café sells more croissants?</li>
              <li>How could you calculate the average number of croissants sold on a Saturday? On a Sunday?</li>
              <li>What challenges might arise from just looking at these averages to decide how many croissants to bake?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Visualizing the Data</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Let's visualize this data to make it easier to understand. A bar chart is a great way to compare sales on different days.</p>
            <div className="h-80">
            <BarChart 
              data={{
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                  {
                    label: 'Saturday',
                    data: [120, 110, 135, 125],
                    backgroundColor: '#fb923c',
                  },
                  {
                    label: 'Sunday',
                    data: [85, 80, 90, 88],
                    backgroundColor: '#f97316',
                  },
                ],
              }}
            />
            </div>
          </CardContent>
        </Card>
        </div>

        <PhaseFooter
          lesson={lesson01Data}
          unit={unit04Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}
