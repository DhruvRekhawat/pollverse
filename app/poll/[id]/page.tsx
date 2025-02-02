import Layout from '@/components/molecules/layout/layout'
import { PollDetails } from './poll-details'
import { DiscussionForum } from './discussion-forum'

export default function PollPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the poll data based on the ID
  const pollData = {
    id: params.id,
    question: "What's your favorite programming language?",
    options: ['JavaScript', 'Python', 'Java', 'C++'],
    votes: [150, 120, 80, 50],
    totalVotes: 400,
    createdBy: "John Doe",
    createdAt: "2025-01-09T12:00:00Z"
  }

  return (
    <Layout>
      <div className="space-y-6">
        <PollDetails poll={pollData} />
        <DiscussionForum pollId={params.id} />
      </div>
    </Layout>
  )
}

