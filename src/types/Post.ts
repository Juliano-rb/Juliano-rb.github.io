export type PostMetadata = {
    title: string,
    publishedAt: string,
    excerpt: string,
    cover_image: string
}

export type Post = PostMetadata&{
    slug: string,
    readingTime: string,
}
