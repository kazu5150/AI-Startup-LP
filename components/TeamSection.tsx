import Image from 'next/image';

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-t from-yellow-400 to-white bg-clip-text text-transparent">
          私たちのスタッフ紹介
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Image src="/images/daisuke-iwai.jpg" alt="Daisuke Iwai" width={150} height={150} className="rounded-full mb-4" />
            <h3 className="text-xl font-bold mb-2">最高経営責任者</h3>
            <p className="text-lg mb-2">Daisuke Iwai</p>
            <p className="text-gray-300 text-center mb-4">Daisukeは、AIソリューションズのビジョンを牽引し、革新的な戦略を通じて企業の成長を推進しています。</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Image src="/images/kazuhiro-matsuzawa.jpg" alt="Kazuhiro Matsuzawa" width={150} height={150} className="rounded-full mb-4" />
            <h3 className="text-xl font-bold mb-2">最高システム責任者</h3>
            <p className="text-lg mb-2">Kazuhiro Matsuzawa</p>
            <p className="text-gray-300 text-center mb-4">Kazuhiroは、最先端の技術を駆使して、AIソリューションズの技術基盤を強化し、顧客に最適なソリューションを提供しています。</p>
          </div>
        </div>
      </div>
    </section>
  );
} 