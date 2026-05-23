import * as React from 'react'

const HeadContent = ({
  title = 'Deploy/this - Victor Hernandez',
  description = 'Creative Technologist and Frontend Developer bridging technical execution with strategic vision',
  pathname = '/',
  siteUrl = 'https://www.deploythis.co',
  siteName = 'Deploy/this',
  image = '/icons/icon-512x512.png',
}) => {
  const canonicalUrl = new URL(pathname, siteUrl).toString()
  const imageUrl = new URL(image, siteUrl).toString()

  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  )
}

export default HeadContent
