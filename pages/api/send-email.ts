import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Nodemailerの設定
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com', // 送信元のメールアドレス
        pass: 'your-email-password', // 送信元のメールアドレスのパスワード
      },
    });

    const mailOptions = {
      from: email,
      to: 'kazu.nextiteration1984@gmail.com',
      subject: `デモ申し込み: ${name}`,
      text: `名前: ${name}\nメール: ${email}\nメッセージ: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'メールが送信されました' });
    } catch (error) {
      res.status(500).json({ error: 'メールの送信に失敗しました' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 