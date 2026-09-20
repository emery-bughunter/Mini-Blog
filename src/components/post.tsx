import type { Post as PostType } from '../types/post'

// Props contract: <<(PostList will pass one post)
interface PostProps {
  post: PostType
  isNew?: boolean 
}
const Post = ({ post, isNew = false }: PostProps) => (
  <article className="post-card">
    <h2>{post.title}</h2>
    {isNew && <span className="badge">New!</span>}
    <p className="meta">
      By {post.author} · {post.publishedAt.toLocaleDateString()}
    </p>
    {/* Preview = first 120 chars */}
    <p className="preview">
      {post.content.length > 120
        ? `${post.content.slice(0, 120)}…`
        : post.content}
    </p>
  </article>
)
export default Post