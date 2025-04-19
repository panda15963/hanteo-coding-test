'use client';

import Tabs from '@/components/Tabs';
import BannerSlider from '@/components/BannerSlider';
import InfiniteScrollList from '@/components/CategorySlider';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      {/* 탭 메뉴 */}
      <div className="sticky top-0 bg-white z-10 h-12">
        <Tabs />
      </div>

      {/* 배너 슬라이더 */}
      <div className="mt-12">
        <BannerSlider />
      </div>

      {/* 콘텐츠 리스트 */}
      <main className="flex-1 px-4 py-4">
        <InfiniteScrollList />
      </main>

      {/* 푸터 */}
      <div className="sticky bottom-0 z-10">
        <Footer />
      </div>
    </div>
  );
}
