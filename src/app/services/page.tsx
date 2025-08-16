import Image from 'next/image';

const ServicePage = () => {

  const cleaningSteps = [
    {
      step: 1,
      title: '기기 작동 상태 점검',
      description: '청소 전 에어컨의 전반적인 작동 상태와 냉방 성능을 꼼꼼하게 확인합니다.',
      equipment: '원격 온도 측정기, 풍속계',
      beforeImg: '/placeholder.svg',
      afterImg: '/placeholder.svg'
    },
    {
      step: 2,
      title: '부품 분해 및 보양 작업',
      description: '오염에 취약한 부품을 보호하기 위해 주변 가구와 전자제품에 커버를 씌우는 보양 작업을 진행합니다.',
      equipment: '전용 커버, 보양 비닐',
      beforeImg: '/placeholder.svg',
      afterImg: '/placeholder.svg'
    },
    {
      step: 3,
      title: '냉각핀 및 필터 세척',
      description: '고압 세척기를 사용하여 냉각핀 깊숙한 곳의 먼지와 곰팡이를 제거하고, 필터의 오염을 세척합니다.',
      equipment: '고압 세척기, 친환경 세척제',
      beforeImg: '/placeholder.svg',
      afterImg: '/placeholder.svg'
    },
    {
      step: 4,
      title: '부품 건조 및 조립',
      description: '세척이 완료된 부품들을 완벽하게 건조시킨 후, 원래 상태로 정확하게 재조립합니다.',
      equipment: '송풍기, 극세사 타월',
      beforeImg: '/placeholder.svg',
      afterImg: '/placeholder.svg'
    },
    {
      step: 5,
      title: '최종 점검 및 현장 정리',
      description: '에어컨을 다시 작동시켜 성능을 최종 확인하고, 주변 정리정돈으로 마무리합니다.',
      equipment: '소음 측정기, 열화상 카메라',
      beforeImg: '/placeholder.svg',
      afterImg: '/placeholder.svg'
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-800">서비스 소개</h1>
          <p className="text-lg text-gray-600 mt-2">클린에어는 보이지 않는 곳까지 깨끗하게, 건강한 바람을 선물합니다.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Service Sections */}
        <div id="residential" className="mb-16 scroll-mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">가정용 에어컨 청소</h2>
          <p className="text-gray-600 leading-relaxed">가족의 건강을 위해 1년에 한 번, 정기적인 에어컨 청소는 필수입니다. 벽걸이, 스탠드, 시스템 에어컨 등 모든 기종을 완벽하게 분해하여 세척합니다.</p>
        </div>

        <div id="commercial" className="mb-16 scroll-mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">업소용 에어컨 청소</h2>
          <p className="text-gray-600 leading-relaxed">쾌적한 비즈니스 환경은 업무 효율을 높입니다. 사무실, 상가, 병원, 학교 등 다중이용시설의 냉난방기를 정기적으로 관리하여 항상 최상의 상태를 유지해 드립니다.</p>
        </div>

        <div id="maintenance" className="mb-16 scroll-mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">정기 관리 서비스</h2>
          <p className="text-gray-600 leading-relaxed">매년 청소 시기를 놓치거나 번거로우신 고객님들을 위한 맞춤 서비스입니다. 정기 계약을 통해 할인된 가격과 우선 예약 혜택을 누리세요.</p>
        </div>

        {/* Cleaning Process Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">클린에어의 청소 과정</h2>
          <div className="space-y-12">
            {cleaningSteps.map((item) => (
              <div key={item.step} className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Step {item.step}: {item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-sm text-gray-500 mb-6"><span className="font-bold">사용 장비:</span> {item.equipment}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-center mb-2">Before</h4>
                    <div className="relative w-full h-64 bg-gray-200 rounded">
                      <Image src={item.beforeImg} alt={`${item.title} Before`} layout="fill" objectFit="cover" className="rounded" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-center mb-2">After</h4>
                    <div className="relative w-full h-64 bg-green-200 rounded">
                       <Image src={item.afterImg} alt={`${item.title} After`} layout="fill" objectFit="cover" className="rounded" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
