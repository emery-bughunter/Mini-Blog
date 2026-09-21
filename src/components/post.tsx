import type { Post as PostType } from '../types/post'

// Props contract: <<(PostList will pass one post)
interface PostProps {
  post: PostType
  isNew?: boolean 
}
const Post = ({ post, isNew = false }: PostProps) => (
  <article className={`post post--${post.author.toLowerCase().replace(/\s+/g, '-')}`}>
    <h2>{post.title}</h2>
     {isNew && <span className="badge">New!</span>}
    <p className="meta"></p>
    <img
      className="author-avatar"
      src={`https://i.pravatar.cc/48?u=${encodeURIComponent(post.author)}`}
      alt=""
    />
    <p className="meta">By {post.author} · {post.publishedAt.toLocaleDateString()}</p>
    <p className="preview">{post.content}</p>
  </article>
)
export default Post