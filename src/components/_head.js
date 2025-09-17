import * as React from "react";

const HeadContent = ({ title = "Deploy/this - Victor Hernandez", description = "Creative Technologist and Frontend Developer bridging technical execution with strategic vision" }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}

export default HeadContent;
