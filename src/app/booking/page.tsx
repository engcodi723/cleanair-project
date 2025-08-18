'use client';

import { useState } from 'react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    date: '',
    address: '',
    serviceType: '가정용 벽걸이',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'booking',
        ...formData
      }).toString()
    });

    if (response.ok) {
      alert('예약 요청이 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
      setFormData({
        name: '',
        contact: '',
        date: '',
        address: '',
        serviceType: '가정용 벽걸이',
        notes: ''
      });
    } else {
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-800">예약 문의</h1>
          <p className="text-lg text-gray-600 mt-2">아래 양식을 작성해주시면, 담당자가 확인 후 신속하게 연락드립니다.</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
          <form name="booking" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden input for Netlify */}
            <input type="hidden" name="form-name" value="booking" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">고객명</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">연락처</label>
              <input type="tel" name="contact" id="contact" value={formData.contact} onChange={handleChange} required placeholder="010-1234-5678" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">서비스 희망 날짜</label>
              <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">주소</label>
              <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">서비스 종류</label>
              <select name="serviceType" id="serviceType" value={formData.serviceType} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option>가정용 벽걸이</option>
                <option>가정용 스탠드</option>
                <option>가정용 2-in-1</option>
                <option>시스템 에어컨 (1-way)</option>
                <option>시스템 에어컨 (2-way)</option>
                <option>시스템 에어컨 (4-way)</option>
                <option>시스템 에어컨 (원형)</option>
                <option>기타 (문의사항에 기재)</option>
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">추가 문의사항</label>
              <textarea name="notes" id="notes" value={formData.notes} onChange={handleChange} rows={4} placeholder="에어컨 모델명, 특이사항 등을 기재해주시면 더 정확한 상담이 가능합니다." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                예약 요청하기
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
