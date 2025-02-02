import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TrendingCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Trending Polls</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            {
              title: "Best Programming Language 2025",
              votes: "1,822 votes",
              time: "8h ago"
            },
            {
              title: "Future of AI Development",
              votes: "1,548 votes",
              time: "8h ago"
            },
            {
              title: "Most Popular Framework",
              votes: "618 votes",
              time: "8h ago"
            }
          ].map((item, index) => (
            <div key={index} className="space-y-1">
              <h3 className="font-medium hover:text-primary cursor-pointer">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.votes} • {item.time}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

