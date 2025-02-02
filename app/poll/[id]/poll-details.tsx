'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface PollData {
  id: string
  question: string
  options: string[]
  votes: number[]
  totalVotes: number
  createdBy: string
  createdAt: string
}

export function PollDetails({ poll }: { poll: PollData }) {
  const chartData = poll.options.map((option, index) => ({
    option,
    votes: poll.votes[index],
    percentage: (poll.votes[index] / poll.totalVotes) * 100
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>{poll.question}</CardTitle>
        <div className="flex items-center mt-2 text-sm text-muted-foreground">
          <Avatar className="h-6 w-6 mr-2">
            <AvatarImage src="/placeholder.svg?height=24&width=24" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span>{poll.createdBy}</span>
          <span className="mx-2">•</span>
          <span>{new Date(poll.createdAt).toLocaleDateString()}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            votes: {
              label: "Votes",
              color: "hsl(var(--primary))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="option" />
              <YAxis />
              <Bar dataKey="votes" fill="var(--color-votes)" radius={[4, 4, 0, 0]} />
              <ChartTooltip content={<ChartTooltipContent />} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 space-y-2">
          {chartData.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>{item.option}</span>
              <span className="font-medium">{item.votes} votes ({item.percentage.toFixed(1)}%)</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          Total votes: {poll.totalVotes}
        </div>
      </CardContent>
    </Card>
  )
}

