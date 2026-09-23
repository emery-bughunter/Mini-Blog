import { useState } from 'react'
import type { Post as PostType } from '../types/post'

interface PostProps {
  post: PostType
  isNew?: boolean 
}

const Post = ({ post, isNew = false }: PostProps) => {
  const [showReplies, setShowReplies] = useState(false)
  const [upvotes, setUpvotes] = useState(100 + (post.id * 37) % 90)
  const [hasUpvoted, setHasUpvoted] = useState(false)

  const handleUpvote = () => {
    if (hasUpvoted) {
      setUpvotes(upvotes - 1)
      setHasUpvoted(false)
    } else {
      setUpvotes(upvotes + 1)
      setHasUpvoted(true)
      
    }
  }

  return (
    <article className="post">
      {}
      <div className="post-header">
        <img
          className="author-avatar"
          src={`https://i.pravatar.cc/48?u=${encodeURIComponent(post.author)}`}
          alt={post.author}
        />
        <div className="post-meta">
          <span className="author-handle">u/{post.author.toLowerCase().replace(/\s+/g, '')}</span>
          <span className="separator">•</span>
          <span className="post-time">2d ago</span>
        </div>
        {isNew && <span className="badge">NEW!</span>}
      </div>

      {/* Post Title & Content */}
      <h2 className="post-title">{post.title}</h2>
      <p className="preview">{post.content}</p>

      {}
      <div className="post-actions">
        <button 
          className={`vote-btn ${hasUpvoted ? 'voted' : ''}`} 
          onClick={handleUpvote}
          aria-label="Upvote"
        >
          ▲ {upvotes}
        </button>

        {post.replies && post.replies.length > 0 && (
          <button 
            className="reply-toggle-btn"
            onClick={() => setShowReplies(!showReplies)}
          >
            💬 {post.replies.length} {post.replies.length === 1 ? 'reply' : 'replies'} {showReplies ? '▲' : '▼'}
          </button>
        )}
      </div>
      {showReplies && post.replies && (
        <div className="reddit-thread">
          {post.replies.map((reply) => (
            <div key={reply.id} className="comment-box">
              <div className="comment-content-wrap">
                <div className="post-header">
                  <img
                    className="author-avatar small"
                    src={`https://i.pravatar.cc/48?u=${encodeURIComponent(reply.author)}`}
                    alt={reply.author}
                  />
                  <span className="author-handle">u/{reply.author}</span>
                  <span className="separator">•</span>
                  <span className="post-time">{reply.timeAgo}</span>
                </div>
                <p className="comment-text">{reply.content}</p>
                <div className="comment-score">▲ {reply.score}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  )
}

export default Post
