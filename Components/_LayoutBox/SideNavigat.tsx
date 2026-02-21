"use client";
import { listitems } from './type';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from "react-i18next";

interface IsClose {
  onClose: () => void;
}

export default function SideNavigat({ onClose }: IsClose) {
  const pathname = usePathname();
  const { t } = useTranslation(); // hook الترجمة

  return (
    <nav>
      <ul className="mt-8 flex flex-col gap-3">
        {listitems.map((item) => {
          const isActive = pathname === item.link;

          return (
            <li key={item.id} onClick={onClose}>
              <Link
                href={item.link}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-2 pl-5 py-2 rounded transition-all my-2
                  ${isActive
                      ? "bg-[rgba(75,192,192,0.3)] font-semibold"
                      : "hover:bg-[rgba(75,192,192,0.3)] transition-all duration-300"
                  }`}
              >
                {item.icon}
                {/* الترجمة هنا */}
                {t(item.title)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}