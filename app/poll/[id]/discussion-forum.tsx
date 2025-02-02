'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUpIcon, ArrowDownIcon, MessageSquare } from 'lucide-react'

interface Comment {
  id: string
  author: string
  content: string
  votes: number
  createdAt: string
  replies: Comment[]
}

export function DiscussionForum({ pollId }: { pollId: string }) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Alice',
      content: 'I think JavaScript is the best because of its versatility and wide adoption.',
      votes: 5,
      createdAt: '2025-01-09T13:00:00Z',
      replies: [
        {
          id: '2',
          author: 'Bob',
          content: 'I agree, but Python is catching up quickly in terms of popularity.',
          votes: 3,
          createdAt: '2025-01-09T14:00:00Z',
          replies: []
        }
      ]
    },
    {
      id: '3',
      author: 'Charlie',
      content: 'Java still has its place in enterprise applications.',
      votes: 2,
      createdAt: '2025-01-09T15:00:00Z',
      replies: []
    }
  ])

  const [newComment, setNewComment] = useState('')

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: Date.now().toString(),
        author: 'Current User',
        content: newComment,
        votes: 0,
        createdAt: new Date().toISOString(),
        replies: []
      }
      setComments([newCommentObj, ...comments])
      setNewComment('')
    }
  }

  const renderComment = (comment: Comment, depth = 0) => (
    <div key={comment.id} className={`mt-4 ${depth > 0 ? 'ml-6' : ''}`}>
      <div className="flex items-start space-x-4">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback>{comment.author[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">{comment.author}</span>
            <span className="text-sm text-muted-foreground">
              {new Date(comment.createdAt).toLocaleDateString()}
            </span>
          </div>
          <p className="mt-1">{comment.content}</p>
          <div className="flex items-center space-x-4 mt-2">
            <Button variant="ghost" size="sm">
              <ArrowUpIcon className="h-4 w-4 mr-1" />
              {comment.votes}
            </Button>
            <Button variant="ghost" size="sm">
              <ArrowDownIcon className="h-4 w-4 mr-1" />
            </Button>
            <Button variant="ghost" size="sm">
              <MessageSquare className="h-4 w-4 mr-1" />
              Reply
            </Button>
          </div>
        </div>
      </div>
      {comment.replies.map(reply => renderComment(reply, depth + 1))}
    </div>
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Discussion</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Textarea
            placeholder="What are your thoughts on this poll?"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={3}
          />
          <Button className="mt-2" onClick={handleSubmitComment}>
            Post Comment
          </Button>
        </div>
        <div className="space-y-4">
          {comments.map(comment => renderComment(comment))}
        </div>
      </CardContent>
    </Card>
  )
}

