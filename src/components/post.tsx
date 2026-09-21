import type { Post as PostType } from '../types/post'

// Props contract: <<(PostList will pass one post)
interface PostProps {
  post: PostType
  isNew?: boolean 
}
const Post = ({ post, isNew = false }: PostProps) => (
  <article className={`post post--${post.author.toLowerCase().replace(/\s+/g, '-')}`}>
    <div className="post-header-row">
      <h2>{post.title}</h2>
      {isNew && <span className="badge">NEW!</span>}
    </div>
    <div className="post-author-row">
      <img
        className="author-avatar"
        src={`https://i.pravatar.cc/48?u=${encodeURIComponent(post.author)}`}
        alt={post.author}
      />
      <span className="author-name">By {post.author}</span>
    </div>
    <p className="preview">{post.content}</p>
    <div className="post-date">{post.publishedAt.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
  </article>
)
export default Post