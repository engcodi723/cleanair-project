const PricingPage = () => {
  const priceData = {
    residential: [
      { type: '벽걸이', model: '가정용 (7평 이하)', price: '70,000원' },
      { type: '벽걸이', model: '가정용 (8평 이상)', price: '80,000원' },
      { type: '스탠드', model: '가정용 (15평 이하)', price: '110,000원' },
      { type: '스탠드', model: '가정용 (16평 이상)', price: '120,000원' },
      { type: '2-in-1', model: '벽걸이 + 스탠드', price: '160,000원' },
    ],
    system: [
      { type: '시스템 (1-way)', model: '가정용/상업용', price: '90,000원' },
      { type: '시스템 (2-way)', model: '가정용/상업용', price: '110,000원' },
      { type: '시스템 (4-way)', model: '가정용/상업용', price: '130,000원' },
      { type: '시스템 (원형)', model: '가정용/상업용', price: '150,000원' },
    ],
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-800">가격 안내</h1>
          <p className="text-lg text-gray-600 mt-2">투명하고 합리적인 가격으로 최상의 서비스를 제공합니다.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Residential Pricing Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">가정용 에어컨</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 text-center">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 border-b">구분</th>
                  <th className="py-3 px-4 border-b">세부 모델</th>
                  <th className="py-3 px-4 border-b">가격</th>
                </tr>
              </thead>
              <tbody>
                {priceData.residential.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold text-blue-600">{item.type}</td>
                    <td className="py-3 px-4 border-b">{item.model}</td>
                    <td className="py-3 px-4 border-b font-bold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System AC Pricing Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">시스템 에어컨</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 text-center">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 border-b">구분</th>
                  <th className="py-3 px-4 border-b">세부 모델</th>
                  <th className="py-3 px-4 border-b">가격</th>
                </tr>
              </thead>
              <tbody>
                {priceData.system.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-semibold text-blue-600">{item.type}</td>
                    <td className="py-3 px-4 border-b">{item.model}</td>
                    <td className="py-3 px-4 border-b font-bold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">참고 사항</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>모든 가격은 부가세(VAT) 별도입니다.</li>
            <li>에어컨의 오염 상태나 설치 환경에 따라 추가 비용이 발생할 수 있습니다.</li>
            <li>2대 이상 신청 시 또는 정기 관리 계약 시 할인 혜택이 제공됩니다.</li>
            <li>자세한 내용은 전화 또는 온라인으로 문의해주세요.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
