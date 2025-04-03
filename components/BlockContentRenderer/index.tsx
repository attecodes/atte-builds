import React, { FC } from "react";
import Image from "next/image";

import BlockContent, {
  BlockContentProps,
} from "@sanity/block-content-to-react";

import { ButtonPrimary, Text } from "components";

import * as styles from "./styles";

interface BlockContentRendererProps {
  blocks: {
    children: {
      text: string;
    }[];
  }[];
}

const BlockRenderer = (params: {
  node: { style: "h1" | "h2" | "h3" | "h4" | "normal" | "blockquote" };
  children: React.ReactNode;
}) => {
  const { style } = params.node;
  if (style === "h1") {
    return (
      <Text t="h3" as="h2" className={styles.heading}>
        {params.children}
      </Text>
    );
  }
  if (style === "h2" || style === "h3" || style === "h4") {
    return (
      <Text t="h4" as="h3" className={styles.heading}>
        {params.children}
      </Text>
    );
  }
  if (style === "normal") {
    return (
      <Text t="body2" className={styles.paragraph}>
        {params.children}
      </Text>
    );
  }
  if (style === "blockquote") {
    return (
      <Text t="body2" className={styles.blockQuote}>
        {params.children}
      </Text>
    );
  }
  // Fall back to default handling https://www.sanity.io/docs/portable-text-to-react#customizing-the-default-serializer-for
  return BlockContent.defaultSerializers.types.block(params);
};

const serializers: BlockContentProps["serializers"] = {
  list: (params) => {
    const { type, level } = params;
    if (type === "bullet") {
      return (
        <ul className={level === 2 ? styles.nestedUl : styles.ul}>
          {/* @ts-ignore */}
          {params.children}
        </ul>
      );
    }
    return (
      <ol className={level === 2 ? styles.nestedOl : styles.ol}>
        {/* @ts-ignore */}
        {params.children}
      </ol>
    );
  },
  listItem: (params) => {
    /* @ts-ignore */
    return <li className={styles.li}>{params.children}</li>;
  },
  marks: {
    link: ({ children, mark }) => {
      const { href, button } = mark;
      if (button) {
        return (
          <ButtonPrimary
            className={styles.button}
            href={href}
            label={children}
          />
        );
      } else
        return (
          <a className={styles.link} href={href}>
            {children}
          </a>
        );
    },
    internalLink: ({ children, mark }) => {
      const { href } = mark;
      return (
        <a className={styles.link} href={href}>
          {children}
        </a>
      );
    },
  },
  types: {
    block: BlockRenderer,
    image: (params: {
      node: { asset: { url: string; width: number; height: number } };
    }) => {
      return (
        <div className={styles.inlineImage}>
          <Image
            src={params.node.asset.url}
            alt="inline image"
            objectFit="contain"
            layout="responsive"
            width={params.node.asset.width}
            height={params.node.asset.height}
          />
        </div>
      );
    },
  },
};

export const BlockContentRenderer: FC<BlockContentRendererProps> = (props) => {
  return (
    /* @ts-ignore */
    <BlockContent {...(props as BlockContentProps)} serializers={serializers} />
  );
};

export default BlockContentRenderer;
