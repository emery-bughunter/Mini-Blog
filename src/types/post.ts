// The shape of a single blog post and Reddit-style replies
export interface Reply {
  id: number
  author: string
  content: string
  score: number
  timeAgo: string
}

export interface Post {
  id: number          
  title: string
  author: string
  content: string
  publishedAt: Date   
  replies?: Reply[]
}
