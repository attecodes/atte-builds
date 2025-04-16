import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { IS_PRODUCTION } from "lib/constants";

export interface PageHeadProps {
  /** <title> tag */
  title: string;
  /** og:title */
  mediaTitle: string;
  /** og:description */
  metaDescription: string;
  doNotIndex?: boolean;
  mediaImageSrc?: string;
}

export const PageHead = (props: PageHeadProps) => {
  const noRobots = props.doNotIndex || !IS_PRODUCTION;
  const router = useRouter();
  const relativePath = router.asPath.split(/[#,?]/)[0];
  // const canonicalUrl = `https://www.attebuilds.com${relativePath}`;
  return (
    <Head>
      {noRobots && <meta name="robots" content="noindex" />}
      <title>{props.title}</title>
      <meta property="og:title" content={props.mediaTitle} />

      <meta name="description" content={props.metaDescription} />
      <meta property="og:description" content={props.metaDescription} />

      {/* <meta
        property="og:image"
        content={
          props.mediaImageSrc || "https://attebuilds.com/og_media.png"
        }
      /> */}
      <meta property="og:type" content="article" />

      {/* <meta property="og:url" content={canonicalUrl} />
      <link rel="canonical" href={canonicalUrl} /> */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content="Atte Builds" />
      <meta name="theme-color" content="#004aad" />
      {/* 
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      <link rel="manifest" href="/site.webmanifest" /> */}
    </Head>
  );
};
