'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function DemoPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('フォームデータ:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-t from-yellow-400 to-white bg-clip-text text-transparent">
          無料デモを申し込む
        </h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">お名前</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">メールアドレス</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">メッセージ</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 text-white"
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full mb-4">
            送信
          </Button>
          <Link href="/" className="text-yellow-400 hover:text-yellow-300 text-center block">
            ホームに戻る
          </Link>
        </form>
      </div>
    </div>
  );
}