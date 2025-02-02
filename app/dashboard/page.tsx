import Layout from '@/components/molecules/layout/layout'
import Feed from '@/components/molecules/layout/feed'

const mockPolls = [
  {
    id: '1',
    question: 'What\'s your favorite programming language?',
    options: ['JavaScript', 'Python', 'Java', 'C++'],
    votes: [150, 120, 80, 50]
  },
  {
    id: '2',
    question: 'Which frontend framework do you prefer?',
    options: ['React', 'Vue', 'Angular', 'Svelte'],
    votes: [200, 80, 70, 50]
  },
  {
    id: '3',
    question: 'What\'s your preferred method of learning?',
    options: ['Online Courses', 'Books', 'Tutorials', 'Bootcamps'],
    votes: [180, 90, 130, 60]
  }
]

export default function Home() {
  return (
    <Layout>
      <Feed polls={mockPolls} />
    </Layout>
  )
}

