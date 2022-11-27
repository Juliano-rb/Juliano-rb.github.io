import { Post } from '../../types/Post'
import * as S from './styles'

type Props ={
    post: Post
}

export default function PostItem ({ post }: Props) {
  return (<S.PostItem>
    <div></div>
    <div>
      <h3>{post.title}</h3>
      <p>
        {post.excerpt}
      </p>
    </div>
  </S.PostItem>)
}
