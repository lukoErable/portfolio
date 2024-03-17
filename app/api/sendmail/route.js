// pages/api/sendmail.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
      // Exemple avec Gmail
      service: 'Gmail',
      auth: {
        user: 'lucasfabregoule@gmail.com',
        pass: 'Marioluigi18$*$*$',
      },
    });

    // Options de l'email
    const mailOptions = {
      from: email,
      to: 'lucasfabregoule@gmail.com',
      subject: `New message from ${name}`,
      text: message,
    };

    try {
      const result = await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true, result });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    // Gère les méthodes non autorisées
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
