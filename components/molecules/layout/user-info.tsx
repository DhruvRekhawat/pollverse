import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserInfoProps {
  name: string
  username: string
  avatarUrl: string
}

export default function UserInfo({ name, username, avatarUrl }: UserInfoProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-background shadow">
      <Avatar>
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="font-semibold">{name}</h2>
        <p className="text-sm text-muted-foreground">@{username}</p>
      </div>
    </div>
  )
}

