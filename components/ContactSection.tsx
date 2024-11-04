import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-t from-yellow-400 to-white bg-clip-text text-transparent">
          AIの力で、ビジネスを変革しませんか？
        </h2>
        <p className="text-xl mb-8">まずは無料デモをお試しください</p>
        <Button asChild size="lg">
          <Link href="/demo" className="inline-flex items-center">
            デモを申し込む
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
} 