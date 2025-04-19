'use client';

import { FaArrowUp } from 'react-icons/fa';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드럽게 이동
    });
  };

  return (
    <footer className="bg-gray-200 text-center py-4 text-sm font-medium">
      최하단 푸터 영역
      <div className="text-xl mt-1">
        <button onClick={scrollToTop} aria-label="맨 위로 이동" className="hover:text-blue-600 transition">
          <FaArrowUp className="inline-block" />
        </button>
      </div>
    </footer>
  );
}
