import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          AIソリューションズ
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#solutions" className="text-gray-200 hover:text-yellow-400">ソリューション</Link></li>
            <li><Link href="#features" className="text-gray-200 hover:text-yellow-400">機能</Link></li>
            <li><Link href="#testimonials" className="text-gray-200 hover:text-yellow-400">お客様の声</Link></li>
            <li><Link href="#team" className="text-gray-200 hover:text-yellow-400">私たちのスタッフ紹介</Link></li>
            <li><Link href="#contact" className="text-gray-200 hover:text-yellow-400">お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}