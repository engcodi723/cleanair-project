import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative flex items-center justify-center h-[60vh] text-white bg-blue-500"
        style={{
          // Placeholder background - replace with a real image
          backgroundImage: 'linear-gradient(to right, rgba(37, 99, 235, 0.8), rgba(59, 130, 246, 0.7)), url(/placeholder-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            에어컨 청소의 표준을 제시합니다
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            숙련된 전문가의 차별화된 기술력으로 보이지 않는 곳까지 완벽하게 케어하여 가족의 건강을 지켜드립니다.
          </p>
          <Link href="/booking" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition-colors text-lg">
            지금 바로 예약하기
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">왜 클린에어를 선택해야 할까요?</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">최고의 장비, 검증된 기술력, 그리고 고객을 생각하는 마음으로 최상의 서비스를 제공합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600">전문가 팀</h3>
              <p className="text-gray-600">수년간의 경험을 갖춘 숙련된 엔지니어가 직접 방문하여 시공합니다.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600">친환경 세척</h3>
              <p className="text-gray-600">인체에 무해한 친환경 약품만을 사용하여 안심하고 맡기실 수 있습니다.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600">철저한 A/S</h3>
              <p className="text-gray-600">시공 후 3개월간 무상 A/S를 보장하여 끝까지 책임집니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Preview Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">클린에어의 서비스</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">가정용 에어컨</h3>
              <p className="text-gray-600 mb-4">벽걸이, 스탠드, 시스템 에어컨 등 모든 종류의 가정용 에어컨을 완벽 분해 세척합니다.</p>
              <Link href="/services#residential" className="text-blue-600 font-semibold hover:underline">더 알아보기 &rarr;</Link>
            </div>
             {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">업소용 에어컨</h3>
              <p className="text-gray-600 mb-4">사무실, 상가, 학교 등 대용량 냉난방기를 정기적으로 관리하여 쾌적한 환경을 유지합니다.</p>
              <Link href="/services#commercial" className="text-blue-600 font-semibold hover:underline">더 알아보기 &rarr;</Link>
            </div>
             {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">정기 관리</h3>
              <p className="text-gray-600 mb-4">정기적인 방문 케어로 에어컨의 수명과 효율을 높여 전기료 절감 효과까지 드립니다.</p>
              <Link href="/services#maintenance" className="text-blue-600 font-semibold hover:underline">더 알아보기 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
