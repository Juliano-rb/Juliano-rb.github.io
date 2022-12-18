import { Post } from '../../types/Post'
import Image from 'next/image'
import * as S from './styles'

type Props ={
    post: Post
}

export default function PostItem ({ post }: Props) {
  return (<S.PostItem>
    <S.PostCover>
      <Image width={120} height={120}
             src={post.cover_image}
             alt="Capa do artigo" />
    </S.PostCover>
    <div>
      <h3>{post.title}</h3>
      <p>
        {post.excerpt}
      </p>
    </div>
  </S.PostItem>)
}
