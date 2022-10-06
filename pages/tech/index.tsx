import { Tech } from "components/pages/Tech";
import { fetchCMSContent } from "lib/fetchCMSContent";

export async function getStaticProps() {
  try {
    const techProjects = await fetchCMSContent("techProjects");
    if (!techProjects) {
      throw new Error("No tech projects found");
    }
    return {
      props: {
        techProjects,
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

export default Tech;
