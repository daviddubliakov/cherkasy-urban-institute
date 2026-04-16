'use client';

import React from 'react';

import { BOOK } from '@/utils/book';

import { useState } from 'react';

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
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
    <header className="bg-gray-100">
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
                      <React.Fragment key={item.id}>
     
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
                        {item?.content && (
                          <div>{item.content}</div>
                        )}
                    
                      </React.Fragment>
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
          <Link href={BOOK.charity} fontSize="sm/6" fontWeight="semibold">
            СТАТИ БЛАГОДІЙНИКОМ <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={BOOK.home} className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Відкрити головне меню</span>
              <Image
                src="/images/logo.png"
                width={112}
                height={32}
                priority
                className="h-8 w-auto"
                alt="Логотип Черксього інституту міста"
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
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Напрямки Роботи
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>

                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...MAIN_MENU_ITEMS].map((item) =>
                      item.href ? (
                        <DisclosureButton
                          key={item.id}
                          as={Link}
                          href={item.href}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </DisclosureButton>
                      ) : (
                        <div key={item.id}>
                          <p className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900">
                            {item.name}
                          </p>
                          {item?.content && <div>{item.content}</div>}
                        </div>
                      ),
                    )}
                  </DisclosurePanel>
                </Disclosure>

                <Link
                  href={BOOK.trainings}
                  fontWeight="semibold"
                  fontSize="base/7"
                  className="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Вишколи
                </Link>

                <Link
                  href={BOOK.heraldChim}
                  fontWeight="semibold"
                  fontSize="base/7"
                  className="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Вісник ЧІМ
                </Link>

                <Link
                  href={BOOK.reports}
                  fontWeight="semibold"
                  fontSize="base/7"
                  className="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Звіти
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href={BOOK.charity}
                  fontWeight="semibold"
                  fontSize="base/7"
                  className="-mx-3 block rounded-lg px-3 py-2.5 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  СТАТИ БЛАГОДІЙНИКОМ <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
