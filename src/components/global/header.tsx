'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/our-talent', label: 'Our Talent' },
    { href: '/our-studio', label: 'Our Studio' },
    { href: '#contact', label: 'Contact Us' },
]

export default function Header() {
    const pathname = usePathname()

    return (
        <div className="absolute left-0 top-0 w-full h-auto pt-12 z-2">
            <div className="bg-white max-w-5xl h-auto mx-auto px-8 py-6 rounded-full flex justify-between">
                <div className="flex items-center">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <Button
                                variant='link'
                                className={cn('rounded-xl text-[#AC8210] uppercase', pathname === item.href && 'font-bold')}
                            >
                                {item.label}
                            </Button>
                        </Link>
                    ))}
                </div>
                <Button className="rounded-full bg-[#ffc934] hover:bg-[#ffc934]/50">Kirim Usaha Anda</Button>
            </div>
        </div>
    )
}