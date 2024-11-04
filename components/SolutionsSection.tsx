import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

export function SolutionsSection() {
  return (
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
  );
} 