'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Mock data - in a real app, this would be fetched from an API
const mockBookings = [
  { id: 1, name: '박서준', date: '2024-08-20', service: '가정용 2-in-1', status: '확인 전' },
  { id: 2, name: '최유리', date: '2024-08-21', service: '시스템 에어컨 (4-way)', status: '확인 완료' },
  { id: 3, name: '정현우', date: '2024-08-22', service: '가정용 스탠드', status: '확인 전' },
];

const mockReviews = [
  { id: 1, author: '김민준', rating: 5, text: '정말 꼼꼼하게 잘해주셨어요...' },
  { id: 2, author: '이서연', rating: 5, text: '사장님이 친절하시고, 작업 과정도...' },
];

const AdminDashboardPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('isAdminAuthenticated');
    if (isAuthenticated !== 'true') {
      router.replace('/admin');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminAuthenticated');
    router.replace('/admin');
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">관리자 대시보드</h1>
          <button 
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          >
            로그아웃
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bookings Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">최근 예약 문의</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="p-2">이름</th>
                    <th className="p-2">희망 날짜</th>
                    <th className="p-2">서비스</th>
                    <th className="p-2">상태</th>
                  </tr>
                </thead>
                <tbody>
                  {mockBookings.map(b => (
                    <tr key={b.id} className="border-t">
                      <td className="p-2 font-semibold">{b.name}</td>
                      <td className="p-2">{b.date}</td>
                      <td className="p-2">{b.service}</td>
                      <td className={`p-2 font-bold ${b.status === '확인 전' ? 'text-red-500' : 'text-green-500'}`}>{b.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">최신 고객 후기</h2>
            <div className="space-y-4">
              {mockReviews.map(r => (
                <div key={r.id} className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{r.author}</p>
                    <p className="text-yellow-500">{'★'.repeat(r.rating)}</p>
                  </div>
                  <p className="text-gray-600 truncate">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
