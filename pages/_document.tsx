import React from "react";

import Document, {
  Html,
  Main,
  NextScript,
  Head,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

import createEmotionServer from "@emotion/server/create-instance";
import { cache } from "@emotion/css";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const page = await ctx.renderPage();
    const { css, ids } = await renderStatic(page.html);
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      // @ts-ignore
      styles: (
        <React.Fragment>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </React.Fragment>
      ),
    };
  }
  render() {
    return (
      <Html lang="en" className="theme-dark">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// From emotion docs and nextjs repo example. Injects classnames in server-rendered html tags.
const renderStatic = async (html?: string) => {
  if (html === undefined) {
    throw new Error("did you forget to return html from renderToString?");
  }
  const { extractCritical } = createEmotionServer(cache);
  const { ids, css } = extractCritical(html);

  return { html, ids, css };
};
