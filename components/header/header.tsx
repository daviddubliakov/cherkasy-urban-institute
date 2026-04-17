'use client';

import { BOOK } from '@/utils/book';

import { useState } from 'react';

import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import { Link } from '../../components/ui/link';
import { MAIN_MENU_ITEMS } from './constants';


export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 font-inter">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link variant="text" href={BOOK.home} className="-m-1.5 p-1.5">
            <span className="sr-only">Черкаський інститут міста</span>
            <Image
              src="/images/logo.png"
              width={112}
              height={32}
              priority
              className="h-8 w-auto"
              alt="Логотип Черксього інституту міста"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Відкрити головне меню</span>
            <Bars3Icon aria-hidden="true" className="size-6 cursor-pointer" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex cursor-pointer items-center gap-x-1 text-sm/6 font-semibold text-gray-900 focus-within:outline-none">
              Напрямки Роботи
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-[12px] bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              {({ close }) => (
                <>
                  <div className=" flex flex-col gap-4 p-6">
                    {MAIN_MENU_ITEMS.map((item) => (
                      <div key={item.id}>
                        <div
                          className="relative flex items-center gap-x-4 rounded-lg text-sm/6"
                        >
                          <div className="flex size-9 flex-none items-center justify-center rounded-lg bg-[#F3F4F6]">
                            <item.icon aria-hidden="true" className="size-6 text-gray-600" />
                          </div>
                          <div className="flex-auto">
                            {item.href ? (
                              <Link href={item.href} fontWeight="semibold" className="block" onClick={() => close()}>
                                {item.name}
                                <span className="absolute inset-0" />
                              </Link>
                            ) : (
                              <p className="block cursor-pointer bg-transparent text-sm font-semibold text-gray-900">
                                {item.name}
                              </p>
                            )}
                            {item?.description && <p className="mt-1 text-gray-600">{item.description}</p>}
                          </div>
                        </div>
                        {item.subItems && (
                          <div className="flex flex-col">
                            {item.subItems.map((sub) => (
                              <Link key={sub.name} href={sub.href} className="w-fit py-1 pl-[52px] text-sm font-normal text-[#101828]!" onClick={() => close()}>
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </PopoverPanel>
          </Popover>

          <Link href={BOOK.trainings} fontSize="sm/6" fontWeight="semibold">
            Вишколи
          </Link>

          <Link href={BOOK.heraldChim} fontSize="sm/6" fontWeight="semibold">
            Вісник ЧІМ
          </Link>

          <Link href={BOOK.reports} fontSize="sm/6" fontWeight="semibold">
            Звіти
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={BOOK.charity}
            className="rounded-lg bg-[#155dfc]! px-4 py-2 text-sm font-normal text-white font-inter"
          >
            Стати благодійником
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 font-inter sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={BOOK.home} className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Черкаський інститут міста</span>
              <Image
                src="/images/logo.png"
                width={112}
                height={32}
                priority
                className="h-8 w-auto"
                alt="Логотип Черкаського інституту міста"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Закрити меню</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            {/* Напрями роботи */}
            <div>
              <p className="text-[32px] font-medium leading-[150%] text-gray-900">Напрями роботи</p>
              <div className="mt-3 flex flex-col gap-2">
                {MAIN_MENU_ITEMS.map((item) =>
                  item.href ? (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="text-[18px] font-normal! text-[#6A7282]!"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div key={item.id}>
                      <p className="text-[18px] font-medium text-[#101828]">{item.name}</p>
                      {item.subItems && (
                        <div className="mt-1 flex flex-col gap-1 pl-6">
                          {item.subItems.map((sub) => (
                            <Link key={sub.name} href={sub.href} className="text-[18px] font-normal text-[#6A7282]!" onClick={() => setMobileMenuOpen(false)}>
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

            {/* Головна навігація */}
            <div className="flex flex-col ">
              <Link href={BOOK.trainings} className="text-[32px] font-medium leading-[150%] text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                Вишколи
              </Link>
              <Link href={BOOK.heraldChim} className="text-[32px] font-medium leading-[150%] text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                Вісник ЧІМ
              </Link>
              <Link href={BOOK.reports} className="text-[32px] font-medium leading-[150%] text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                Звіти
              </Link>
              <Link href={BOOK.charity} className="text-[32px] font-medium leading-[150%] text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                Стати благодійником
              </Link>
            </div>

            {/* Слідкуйте за нами */}
            <div>
              <p className="text-[18px] font-medium text-[#101828]">Слідкуйте за нами</p>
              <div className="mt-2 flex flex-col gap-1">
                <Link href="https://www.instagram.com/cherkasyurban.institute/" className="text-[18px] font-normal text-[#6A7282]!">Instagram</Link>
                <Link href="https://www.facebook.com/cherkasyurban.institute/" className="text-[18px] font-normal text-[#6A7282]!">Facebook</Link>
                <Link href="https://www.youtube.com/channel/UCqTdo4yBnO7FlZnfF8uA31Q" className="text-[18px] font-normal text-[#6A7282]!">Youtube</Link>
              </div>
            </div>

            {/* Наші контакти */}
            <div>
              <p className="text-[18px] font-medium text-[#101828]">Наші контакти</p>
              <div className="mt-2 flex flex-col gap-1">
                <a href="mailto:cherkasyurban.institute@gmail.com" className="text-[18px] font-normal text-[#6A7282]">cherkasyurban.institute@gmail.com</a>
                <a href="tel:+380974950707" className="text-[18px] font-normal text-[#6A7282]">+380 97 495 0707</a>
              </div>
            </div>

            {/* Адреса */}
            <div>
              <p className="text-[18px] font-medium text-[#101828]">Адреса</p>
              <p className="mt-2 text-[18px] font-normal text-[#6A7282]">18001, м. Черкаси, вул. Симоненка, будинок 5</p>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
