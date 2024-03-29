type SEOTagsProps = {
  title: string;
  description: string;
  image: string;
};

export default function SEOTags ({ title, description, image }: SEOTagsProps) {
  return (
    <>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yourname" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  )
}
