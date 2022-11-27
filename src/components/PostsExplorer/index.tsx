import { Post } from '../../types/Post'
import { uniqueId } from 'lodash'
import PostItem from '../PostItem'
import * as S from './styles'

type Props ={
    posts: Post[]
}

export default function PostsExplorer ({ posts }: Props) {
  console.log(posts)
  return (<S.PostExplorer>
    { posts.map(post => <PostItem key={uniqueId()} post={post} />)}
  </S.PostExplorer>)
}
