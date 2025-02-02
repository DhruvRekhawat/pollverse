import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ImageIcon, BarChart2, PenLine } from 'lucide-react'

export function CreatePollCard() {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button variant="outline" className="w-full justify-start text-muted-foreground">
            Start a poll, try writing with AI...
          </Button>
        </div>
        <div className="flex items-center gap-2 mt-4 pt-4 border-t">
          <Button variant="ghost" size="sm" className="flex-1">
            <ImageIcon className="mr-2 h-4 w-4" />
            Media
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            <BarChart2 className="mr-2 h-4 w-4" />
            Poll
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            <PenLine className="mr-2 h-4 w-4" />
            Write
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

