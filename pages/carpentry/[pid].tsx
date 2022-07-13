import { GetStaticProps } from "next";

import { fetchCMSContent } from "lib/fetchCMSContent";

import { ProjectPage } from "components/pages/Carpentry/Project";

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const carpentryProject = await fetchCMSContent("carpentryProject", {
      slug: ctx.params?.pid,
    });
    if (!carpentryProject) {
      throw new Error("No content found");
    }
    return {
      props: {
        carpentryProject,
      },
      revalidate: 120,
    };
  } catch (e) {
    console.error("Failed to generate", e);
    return {
      notFound: true,
      revalidate: 120,
    };
  }
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default ProjectPage;
