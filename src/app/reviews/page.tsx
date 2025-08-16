'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';

// Define the type for a single review
interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  image?: string; // URL of the uploaded image
  date: string;
}

// Placeholder data for initial reviews
const initialReviews: Review[] = [
  {
    id: 1,
    author: '김민준',
    rating: 5,
    text: '정말 꼼꼼하게 잘해주셨어요. 에어컨에서 상쾌한 바람이 나와서 너무 좋습니다!',
    image: '/placeholder.svg',
    date: '2024-07-15'
  },
  {
    id: 2,
    author: '이서연',
    rating: 5,
    text: '사장님이 친절하시고, 작업 과정도 하나하나 설명해주셔서 믿음이 갔습니다. 강추합니다.',
    date: '2024-07-12'
  },
];

const ReviewsPage = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [newReview, setNewReview] = useState({ author: '', rating: 5, text: '' });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (newRating: number) => {
    setNewReview(prev => ({ ...prev, rating: newRating }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual image upload to a storage service (e.g., S3)
    // and persist the review to a database via an API call.
    
    const newReviewEntry: Review = {
      id: Date.now(),
      ...newReview,
      image: imageFile ? URL.createObjectURL(imageFile) : undefined,
      date: new Date().toISOString().split('T')[0],
    };

    setReviews([newReviewEntry, ...reviews]);

    // Reset form
    setNewReview({ author: '', rating: 5, text: '' });
    setImageFile(null);
    alert('소중한 후기를 남겨주셔서 감사합니다!');
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-800">고객 후기</h1>
          <p className="text-lg text-gray-600 mt-2">클린에어를 이용해주신 고객님들의 생생한 후기입니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Reviews List */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">전체 후기</h2>
          <div className="space-y-8">
            {reviews.map(review => (
              <div key={review.id} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="font-bold text-lg text-gray-800">{review.author}</div>
                  <div className="ml-auto flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                {review.image && (
                  <div className="relative w-full h-48 rounded-md overflow-hidden">
                     <Image src={review.image} alt={`후기 이미지 - ${review.author}`} layout="fill" objectFit="cover" />
                  </div>
                )}
                 <p className="text-xs text-gray-400 text-right mt-2">{review.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Review Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">후기 작성</h2>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-4">
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700">작성자명</label>
                <input type="text" name="author" id="author" value={newReview.author} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">별점</label>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <button type="button" key={i} onClick={() => handleRatingChange(i + 1)} className={`w-7 h-7 ${i < newReview.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                      <svg fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="text" className="block text-sm font-medium text-gray-700">후기 내용</label>
                <textarea name="text" id="text" value={newReview.text} onChange={handleInputChange} required rows={5} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">사진 첨부</label>
                <input type="file" name="image" id="image" onChange={handleImageChange} accept="image/*" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 font-semibold">후기 등록하기</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
