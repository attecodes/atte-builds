import { NextApiRequest, NextApiResponse } from "next";

import { fetchCMSContent } from "lib/fetchCMSContent";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const googleReviews = await fetchCMSContent("googleReviews");
    if (!googleReviews) {
      throw new Error("Could not fetch Google Reviews");
    }
    res.json(googleReviews);
  } catch (e) {
    console.error("Failed to generate", e);
    res.status(500).json({ error: "Error fetching reviews" });
  }
};

export default handler;
