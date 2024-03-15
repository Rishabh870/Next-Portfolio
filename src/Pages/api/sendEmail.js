import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "testworking760@gmail.com",
          pass: "kmnmhwjcarusalyk",
        },
      });

      const formData = req.body;
      console.log(formData);
      const mailOption = {
        from: "moses87@ethereal.email",
        to: "choudharyrishabh870@gmail.com",
        subject: "Email Verification Code",
        text: `name:${formData.name}\nemail:${formData.email}\ncontent:${formData.content}`,
      };

      const info = await transporter.sendMail(mailOption);

      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Email sent" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
