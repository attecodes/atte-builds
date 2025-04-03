import { NextApiRequest, NextApiResponse } from "next";

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  // Sendgrid
  const msg = {
    to: "atte.myllykoski@gmail.com",
    from: "datinguniversitybypete@gmail.com",
    subject: "New client inquiry ♟️",
    text: `Name: ${body.fullName} \n Email: ${body.email} \n Phone Number: ${body.mobileNumber} \n Brief Description: ${body.briefDescription} \n \n`,
  };

  try {
    console.log(msg);
    await sgMail.send(msg);
    return res.status(200).json({ status: "ok" });
  } catch (error: any) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export default handler;
