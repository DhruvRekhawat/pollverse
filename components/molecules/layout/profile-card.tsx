import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileCard() {
  return (
    <Card className=" overflow-clip">
      <div className="relative h-20 bg-gradient-to-r from-primary to-primary/60">
        <Avatar className="absolute -bottom-6 left-4 h-16 w-16 border-4 border-background">
          <AvatarImage src="/placeholder.svg?height=64&width=64" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
      <CardHeader className="pt-8">
        <h2 className="text-lg font-semibold">John Doe</h2>
        <p className="text-sm text-muted-foreground">@johndoe</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-sm">
            <span className="font-medium">238</span> polls created
          </div>
          <div className="text-sm">
            <span className="font-medium">1,024</span> votes received
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

