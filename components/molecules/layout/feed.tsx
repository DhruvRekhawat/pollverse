'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface Poll {
  id: string
  question: string
  options: string[]
  votes: number[]
}

interface FeedProps {
  polls: Poll[]
}

export default function Feed({ polls }: FeedProps) {
  return (
    <div className="space-y-6 p-4 flex flex-col gap-4">
      {polls.map((poll) => (
        <Link href={`/poll/${poll.id}`} key={poll.id}>
          <Card className="w-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>{poll.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  votes: {
                    label: "Votes",
                    color: "hsl(var(--primary))",
                  },
                }}
                className="h-[200px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={poll.options.map((option, index) => ({ option, votes: poll.votes[index] }))}>
                    <XAxis dataKey="option" />
                    <YAxis />
                    <Bar dataKey="votes" fill="var(--color-votes)" radius={[4, 4, 0, 0]} />
                    <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <ul className="mt-4 space-y-2">
                {poll.options.map((option, index) => (
                  <li key={index} className="flex justify-between text-sm">
                    <span>{option}</span>
                    <span className="font-medium">{poll.votes[index]} votes</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

