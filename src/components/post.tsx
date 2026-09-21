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
      {/* Reddit User Header */}
      <div className="post-header">
        <img
          className="author-avatar"
          src={`https://i.pravatar.cc/48?u=${encodeURIComponent(post.author)}`}
          alt={post.author}
        />
        <div className="post-meta">
          <span className="reddit-username">u/{post.author.toLowerCase().replace(/\s+/g, '')}</span>
          <span className="reddit-dot">•</span>
          <span className="reddit-time">2d ago</span>
        </div>
        {isNew && <span className="badge">NEW!</span>}
      </div>

      {/* Post Title & Content */}
      <h2 className="reddit-title">{post.title}</h2>
      <p className="preview">{post.content}</p>

      {/* Reddit Action Bar (Upvote & Replies toggle) */}
      <div className="reddit-actions">
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

      {/* Collapsible Reddit Comments Section */}
      {showReplies && post.replies && (
        <div className="reddit-thread">
          {post.replies.map((reply) => (
            <div key={reply.id} className="reddit-comment">
              <div className="comment-content-wrap">
                <div className="post-header">
                  <img
                    className="author-avatar small"
                    src={`https://i.pravatar.cc/48?u=${encodeURIComponent(reply.author)}`}
                    alt={reply.author}
                  />
                  <span className="reddit-username">u/{reply.author}</span>
                  <span className="reddit-dot">•</span>
                  <span className="reddit-time">{reply.timeAgo}</span>
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
