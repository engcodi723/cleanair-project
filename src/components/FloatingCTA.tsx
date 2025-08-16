
"use client";

import Link from 'next/link';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center space-y-3">
      {/* Tel Button */}
      <a href="tel:010-1234-5678" className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
      {/* Booking Button */}
      <Link href="/booking" className="bg-green-500 text-white px-4 py-3 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110">
        <span className="text-sm font-bold">온라인 예약</span>
      </Link>
    </div>
  );
};

export default FloatingCTA;
