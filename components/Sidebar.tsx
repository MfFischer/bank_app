'use client'

import Link from 'next/link';
import Image from 'next/image';
import { ITEMS, sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  user: any; // Update this type as per your actual user object
}

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname(); // Call the hook to get the current pathname

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="w-8 h-8" // Corrected class names
          />
          <h1 className="sidebar-logo">Fintegrate</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <div className='relative size-6'>
                <Image src={item.imgURL}
                alt={item.label}
                fill
                className={cn({
                  'brightness-[3] invert-0':
                  isActive
                })}/>

              </div>
              <p className={cn('sidebar-label')}>
                {item.label}
              </p>
            </Link>
          );
        })}
       USER
      </nav>

       FOOTER
    </section>
  );
};

export default Sidebar;
