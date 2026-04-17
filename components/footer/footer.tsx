import { BOOK } from '@/utils/book';

import Image from 'next/image';

import { Link } from '../../components/ui/link';
import { MAIN_MENU_ITEMS } from '../header/constants';
import { SOCIALS } from './constants';

export const Footer = () => {
  return (
    <footer className="font-inter bg-[#F3F4F6]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Logo */}
        <div className="mb-10">
          <Link href={BOOK.home} variant="text">
            <Image
              src="/images/logo.png"
              width={112}
              height={32}
              alt="Логотип Черкаського інституту міста"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Навігація */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-900 uppercase">Навігація</p>
            <div className="mt-4 flex flex-col gap-3">
              <Link href={BOOK.trainings} className="text-sm text-[#374151]!">
                Вишколи
              </Link>
              <Link href={BOOK.heraldChim} className="text-sm text-[#374151]!">
                Вісник ЧІМ
              </Link>
              <Link href={BOOK.reports} className="text-sm text-[#374151]!">
                Звіти
              </Link>
            </div>
          </div>

          {/* Напрями роботи */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-900 uppercase">Напрями роботи</p>
            <div className="mt-4 flex flex-col gap-3">
              {MAIN_MENU_ITEMS.map((item) =>
                item.href ? (
                  <Link key={item.id} href={item.href} className="text-sm text-[#374151]!">
                    {item.name}
                  </Link>
                ) : (
                  <div key={item.id}>
                    <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                    {item.subItems && (
                      <div className="mt-2 flex flex-col gap-2 pl-3">
                        {item.subItems.map((sub) => (
                          <Link key={sub.name} href={sub.href} className="text-sm text-[#374151]">
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Наші контакти */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-900 uppercase">Наші контакти</p>
            <div className="mt-4 flex flex-col gap-3 text-[#374151]!">
              <a href="mailto:cherkasyurban.institute@gmail.com" className="text-sm">
                cherkasyurban.institute@gmail.com
              </a>
              <a href="tel:+380974950707" className="text-sm text-[#374151]">
                +380 97 495 0707
              </a>
            </div>
            <p className="mt-6 text-xs font-semibold tracking-widest text-gray-900 uppercase">Соціальні мережі</p>
            <div className="mt-4 flex gap-4">
              {SOCIALS.map((social) => (
                <Link key={social.id} href={social.href} target="_blank" variant="text">
                  <social.icon />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Підтримайте ЧІМ */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-900 uppercase">Підтримайте ЧІМ</p>
            <p className="mt-4 text-sm text-[#374151]!">Кожен внесок наближає реальні зміни.</p>
            <Link
              href={BOOK.charity}
              className="mt-4 inline-block rounded-lg bg-[#155dfc]! px-4 py-2 text-sm font-semibold text-white"
            >
              Стати благодійником
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-6 sm:flex-row sm:items-center lg:px-8">
          <p className="text-sm text-[#6A7282]">© 2015 - 2026. Усі права захищені.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-[#6A7282]!">
              Політика конфіденційності
            </Link>
            <Link href="#" className="text-sm text-[#6A7282]!">
              Умови використання
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
