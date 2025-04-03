import { Gallery } from "components/pages/Gallery";
import { fetchCMSContent } from "lib/fetchCMSContent";

export async function getStaticProps() {
  try {
    const galleries = await fetchCMSContent("galleries");
    if (!galleries) {
      throw new Error("No galleries found");
    }
    return {
      props: {
        galleries,
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
export default Gallery;
