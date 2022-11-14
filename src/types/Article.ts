export type Article = {
    content: string;
    frontmatter: {
        slug: string,
        excerpt: string,
        title: string,
        publishedAt: string,
        readingTime: string
    }
}
