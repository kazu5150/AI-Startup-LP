import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturesSection() {
  return (
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
  );
} 