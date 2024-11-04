import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  return (
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
  );
} 