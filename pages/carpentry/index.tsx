import { Carpentry } from "components/pages/Carpentry";
import { fetchCMSContent } from "lib/fetchCMSContent";

export async function getStaticProps() {
  try {
    const carpentryProjects = await fetchCMSContent("carpentryProjects");
    if (!carpentryProjects) {
      throw new Error("No carpentry projects found");
    }
    return {
      props: {
        carpentryProjects,
      },
      revalidate: 120,
    };
  } catch (e) {
    return {
      notFound: true,
      revalidate: 120,
    };
  }
}

export default Carpentry;
