import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="bg-gradient-to-b from-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-t from-yellow-400 to-white bg-clip-text text-transparent">
              AIを活用して業務の生産性を飛躍的に向上
            </h1>
            <p className="text-xl mb-6 text-gray-300">
              生成AIの力で、あなたのビジネスを次のレベルへ。
            </p>
            <Button asChild>
              <Link href="#contact">
                無料デモを申し込む
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image src="/image1.webp" alt="AI業務効率化イメージ" width={600} height={400} className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}