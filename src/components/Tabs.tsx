'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import classNames from 'classnames'

const navigation = [
    { name: '차트', href: '#' },
    { name: 'Whook', href: '#' },
    { name: '이벤트', href: '#' },
    { name: '뉴스', href: '#' },
    { name: '스토어', href: '#' },
    { name: '충전소', href: '#' },
]

export default function Tabs() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [selectedTab, setSelectedTab] = useState<string>('차트')

    return (
        <header className="bg-[#FFD1D8] border-b border-[#FFD1D8] fixed top-0 left-0 right-0 z-50">
            {/* 모바일용 햄버거 메뉴 버튼 */}
            <div className="flex justify-end items-center p-6 lg:hidden">
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
            </div>

            {/* PC용 내비게이션 메뉴 */}
            <nav
                aria-label="Global"
                className="relative mx-auto hidden max-w-7xl items-center justify-center p-6 lg:flex lg:px-8"
            >
                <div className="flex gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setSelectedTab(item.name)}
                            className={classNames(
                                'text-sm font-semibold',
                                selectedTab === item.name ? 'text-white' : 'text-black'
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* 모바일 메뉴 (슬라이드 패널) */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#FFD1D8] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-black"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => {
                                            setSelectedTab(item.name)
                                            setMobileMenuOpen(false)
                                        }}
                                        className={classNames(
                                            '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold',
                                            selectedTab === item.name ? 'text-white' : 'text-black'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
