import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">AIソリューションズ</h3>
            <p>〒100-0001 東京都千代田区千代田1-1</p>
            <p>TEL: 03-1234-5678</p>
            <p>Email: info@ai-solutions.jp</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">リンク</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-200 hover:text-yellow-400">会社概要</Link></li>
              <li><Link href="/privacy" className="text-gray-200 hover:text-yellow-400">プライバシーポリシー</Link></li>
              <li><Link href="/terms" className="text-gray-200 hover:text-yellow-400">利用規約</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">フォローする</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-yellow-400"><Facebook className="w-6 h-6" /></Link>
              <Link href="#" className="hover:text-yellow-400"><Twitter className="w-6 h-6" /></Link>
              <Link href="#" className="hover:text-yellow-400"><Linkedin className="w-6 h-6" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 AIソリューションズ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 