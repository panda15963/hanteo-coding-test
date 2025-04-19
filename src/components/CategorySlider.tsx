import { useEffect, useRef, useState } from 'react';

const generateItems = (start: number, count: number) => {
    return Array.from({ length: count }, (_, i) => `Item ${start + i + 1}`);
};

export default function Home() {
    const [items, setItems] = useState<string[]>(() => generateItems(0, 10));
    const [isFetching, setIsFetching] = useState(false);
    const loaderRef = useRef<HTMLDivElement | null>(null);

    // 무한 스크롤 감지
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting && !isFetching) {
                    setIsFetching(true);
                }
            },
            { threshold: 1 }
        );

        const currentLoader = loaderRef.current;
        if (currentLoader) observer.observe(currentLoader);
        return () => {
            if (currentLoader) observer.unobserve(currentLoader);
        };
    }, [isFetching]);

    // 아이템 추가
    useEffect(() => {
        if (!isFetching) return;

        const timer = setTimeout(() => {
            setItems((prev) => [...prev, ...generateItems(prev.length, 10)]);
            setIsFetching(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [isFetching]);

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h2 className="text-lg font-semibold mb-4">콘텐츠 큐레이션 제목</h2>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="bg-white p-4 shadow rounded">
                        {item}
                    </li>
                ))}
            </ul>

            <div ref={loaderRef} className="py-10 text-center text-gray-500">
                {isFetching ? '불러오는 중...' : '스크롤하면 더 나옵니다'}
            </div>
        </div>
    );
}
