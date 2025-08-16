import Image from 'next/image';

const PortfolioPage = () => {
  // Placeholder data for the gallery. Replace with actual data.
  const galleryItems = [
    { id: 1, src: '/placeholder.svg', alt: '시공사례 1', title: '강남구 아파트 벽걸이 에어컨', category: '가정용' },
    { id: 2, src: '/placeholder.svg', alt: '시공사례 2', title: '서초구 사무실 시스템 에어컨', category: '업소용' },
    { id: 3, src: '/placeholder.svg', alt: '시공사례 3', title: '송파구 스탠드 에어컨', category: '가정용' },
    { id: 4, src: '/placeholder.svg', alt: '시공사례 4', title: '분당 학원 4-way 시스템 에어컨', category: '업소용' },
    { id: 5, src: '/placeholder.svg', alt: '시공사례 5', title: '용산구 오피스텔 2-in-1', category: '가정용' },
    { id: 6, src: '/placeholder.svg', alt: '시공사례 6', title: '마포구 카페 원형 시스템 에어컨', category: '업소용' },
    { id: 7, src: '/placeholder.svg', alt: '시공사례 7', title: '인천 빌라 벽걸이 에어컨', category: '가정용' },
    { id: 8, src: '/placeholder.svg', alt: '시공사례 8', title: '수원 병원 시스템 에어컨', category: '업소용' },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-800">시공 사례</h1>
          <p className="text-lg text-gray-600 mt-2">클린에어의 전문적인 시공 현장을 사진으로 확인하세요.</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden group">
              <div className="relative w-full h-64">
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  layout="fill" 
                  objectFit="cover" 
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-blue-600">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
