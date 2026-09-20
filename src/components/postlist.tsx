import { samplePosts } from '../data/samplePosts'
import Post from './post'

const PostList = () => (
  <section className="post-list">
    {samplePosts.map((post) => (
    
    //unique key
      <Post key={post.id} post={post} />
    ))}
  </section>
)

export default PostList