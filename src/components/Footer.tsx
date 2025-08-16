import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-600 text-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">CleanAir</h3>
            <p>에어컨 청소의 표준, 클린에어</p>
            <p>신뢰와 기술력으로 보답하겠습니다.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">바로가기</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-blue-600">서비스 소개</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-600">가격 안내</Link></li>
              <li><Link href="/booking" className="hover:text-blue-600">예약 문의</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">업체 정보</h3>
            <p>상호명: 클린에어 (CleanAir)</p>
            <p>대표: 홍길동</p>
            <p>사업자등록번호: 123-45-67890</p>
            <p>주소: 서울특별시 강남구 테헤란로 123</p>
            <p>이메일: contact@cleanair.shop</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p>&copy; {currentYear} CleanAir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
