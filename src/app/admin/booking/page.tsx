'use client';

import { useState, useEffect } from 'react';

interface Booking {
  id: number;
  createdAt: string;
  name: string;
  contact: string;
  date: string;
  address: string;
  serviceType: string;
  notes: string | null;
}

const AdminBookingPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/bookings');
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        const data = await response.json();
        setBookings(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
      hour12: false
    };
    return new Date(dateString).toLocaleString('ko-KR', options);
  };

  if (loading) return <div className="text-center py-10">로딩 중...</div>;
  if (error) return <div className="text-center py-10 text-red-500">오류 발생: {error}</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">예약 관리</h1>
          <p className="text-gray-600 mt-1">접수된 예약 문의 목록입니다.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          {bookings.length === 0 ? (
            <p className="text-center py-20 text-gray-500">접수된 예약이 없습니다.</p>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">요청일</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">고객명</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">연락처</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">희망 날짜</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주소</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">서비스</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">문의사항</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{formatDate(booking.createdAt)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">{booking.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.contact}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{formatDate(booking.date)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.address}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.serviceType}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{booking.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminBookingPage;
