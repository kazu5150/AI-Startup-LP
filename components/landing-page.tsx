'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, ChevronUp, CheckCircle, Shield, ArrowRight, Facebook, Twitter, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
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
              <li><Link href="#contact" className="text-gray-200 hover:text-yellow-400">お問い合わせ</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* ヒーローセクション */}
        <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-t from-yellow-400 to-white bg-clip-text text-transparent">
                AIを活用して業務の生産性を飛躍的に向上
              </h1>
              <p className="text-xl mb-8">生成AIの力で、あなたのビジネスを次のレベルへ</p>
              <Button asChild>
                <Link href="#contact">
                  デモを申し込む
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image src="/image1.webp" alt="AI業務効率化イメージ" width={600} height={400} className="rounded-lg shadow-xl" />
            </div>
          </div>
        </section>

        {/* ソリューション説明 */}
        <section id="solutions" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-t from-yellow-400 to-white bg-clip-text text-transparent">
              生成AIによる業務効率化のメリット
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: '時間の大幅削減', description: 'ルーチンタスクの自動化により、創造的な業務に集中できます。' },
                { title: 'コスト削減', description: '人的リソースの最適化により、運営コストを削減します。' },
                { title: '精度の向上', description: 'AIによる高精度な分析と予測で、意思決定をサポートします。' },
              ].map((item, index) => (
                <Card key={index} className="bg-gray-700 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-yellow-400 mr-2" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 機能の詳細 */}
        <section id="features" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-t from-yellow-400 to-white bg-clip-text text-transparent">
              主な機能
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'ドキュメント自動生成', description: '会議議事録や報告書を自動で作成し、文書作成の時間を大幅に削減します。' },
                { title: 'タスク管理の最適化', description: 'AIがタスクの優先順位を分析し、最適なスケジュールを提案します。' },
                { title: 'データ分析支援', description: '大量のデータから重要な洞察を抽出し、ビジネス戦略の立案をサポートします。' },
              ].map((feature, index) => (
                <Card key={index} className="bg-gray-700 text-white">
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 顧客の声 */}
        <section id="testimonials" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-t from-yellow-400 to-white bg-clip-text text-transparent">
              お客様の声
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: '山田太郎', company: 'テック株式会社', comment: '導入後、業務効率が30%向上しました。特にドキュメント作成の時間が大幅に削減され、戦略的な業務に集中できるようになりました。' },
                { name: '佐藤花子', company: '未来商事', comment: 'AIによるデータ分析支援のおかげで、市場トレンドをいち早く把握し、的確な意思決定ができるようになりました。' },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-gray-700 text-white">
                  <CardContent className="pt-6">
                    <p className="mb-4">"{testimonial.comment}"</p>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-200">{testimonial.company}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-t from-yellow-400 to-white bg-clip-text text-transparent">
              よくある質問
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { question: '導入にどのくらいの時間がかかりますか？', answer: '通常、1〜2週間程度で導入が完了します。お客様の環境に合わせて、柔軟に対応いたします。' },
                { question: 'データのセキュリティは大丈夫ですか？', answer: '最新の暗号化技術を使用し、データの安全性を確保しています。また、定期的なセキュリティ監査も実施しています。' },
                { question: 'カスタマイズは可能ですか？', answer: 'はい、お客様のニーズに合わせたカスタマイズが可能です。詳細については、お問い合わせください。' },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* セキュリティ説明 */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-t from-yellow-400 to-white bg-clip-text text-transparent">
              セキュリティへの取り組み
            </h2>
            <Card className="bg-gray-700 text-white">
              <CardContent className="flex items-center justify-center p-6">
                <Shield className="w-16 h-16 text-yellow-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">最高水準のセキュリティ対策を実施</h3>
                  <p className="text-gray-200">データの暗号化、定期的なセキュリティ監査、アクセス制御など、<br />多層的なセキュリティ対策でお客様のデータを守ります。</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-t from-yellow-400 to-white bg-clip-text text-transparent">
              AIの力で、ビジネスを変革しませんか？
            </h2>
            <p className="text-xl mb-8">まずは無料デモをお試しください</p>
            <Button asChild size="lg">
              <Link href="#contact" className="inline-flex items-center">
                デモを申し込む
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

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
    </div>
  )
}