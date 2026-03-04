'use client';

import React, { useState } from 'react';
import {
  AcademicCapIcon,
  FireIcon,
  BugAntIcon,
  ShieldCheckIcon,
  ChevronRightIcon,
  UserGroupIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { CurrencyDollarIcon, PhoneIcon } from '@heroicons/react/20/solid';

const SUB_ITEMS = [
  {
    name: 'Ветеранські політики',
    icon: UserGroupIcon,
    description: 'Підтримка ветеранів та їх сімей',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    hoverBg: 'group-hover/sub:bg-amber-100',
    dotColor: 'bg-amber-500',
  },
  {
    name: '«Культурна громада»',
    icon: SparklesIcon,
    description: 'Культурні ініціативи',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    hoverBg: 'group-hover/sub:bg-rose-100',
    dotColor: 'bg-rose-500',
  },
];

/* ── Current (Before) Dropdown ── */
function CurrentDropdown() {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-md rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
      <div className="p-4">
        {/* Parent items */}
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <FireIcon className="size-6 text-gray-600" />
          </div>
          <p className="font-semibold text-gray-900">{'Школа FPV «Черкаський рій»'}</p>
        </div>
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <BugAntIcon className="size-6 text-gray-600" />
          </div>
          <p className="font-semibold text-gray-900">Вишколи для цивільних</p>
        </div>
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <ShieldCheckIcon className="size-6 text-gray-600" />
          </div>
          <p className="font-semibold text-gray-900">{'ІПСОлогія'}</p>
        </div>

        {/* Mega-project with OLD sub-items */}
        <div
          className="group relative flex cursor-pointer items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
          onClick={() => setOpen(!open)}
        >
          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <AcademicCapIcon className="size-6 text-gray-600" />
          </div>
          <p className="font-semibold text-gray-900">{'Мегапроект «Вдома»:'}</p>
        </div>

        {open && (
          <div className="overflow-hidden">
            <a href="#" className="block py-1 pl-20 text-sm font-semibold text-gray-900 hover:bg-gray-50">
              Ветеранські політики
            </a>
            <a href="#" className="block py-1 pl-20 text-sm font-semibold text-gray-900 hover:bg-gray-50">
              {'«Культурна громада»'}
            </a>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
        <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900">
          <CurrencyDollarIcon className="size-5 flex-none text-gray-400" />
          Підтримка ЧІМ
        </a>
        <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900">
          <PhoneIcon className="size-5 flex-none text-gray-400" />
          {"Зворотній зв'язок"}
        </a>
      </div>
    </div>
  );
}

/* ── Option A: Indented Cards with Icons ── */
function OptionADropdown() {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-md rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
      <div className="p-4">
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <FireIcon className="size-6 text-gray-600" />
          </div>
          <p className="font-semibold text-gray-900">{'Школа FPV «Черкаський рій»'}</p>
        </div>
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <BugAntIcon className="size-6 text-gray-600" />
          </div>
          <p className="font-semibold text-gray-900">Вишколи для цивільних</p>
        </div>
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <ShieldCheckIcon className="size-6 text-gray-600" />
          </div>
          <p className="font-semibold text-gray-900">{'ІПСОлогія'}</p>
        </div>

        {/* Mega-project parent */}
        <div
          className="group relative flex cursor-pointer items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
          onClick={() => setOpen(!open)}
        >
          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <AcademicCapIcon className="size-6 text-gray-600" />
          </div>
          <div className="flex flex-1 items-center justify-between">
            <p className="font-semibold text-gray-900">{'Мегапроект «Вдома»:'}</p>
            <ChevronDownIcon
              className={`size-4 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </div>
        </div>

        {/* OPTION A: Sub-items with individual icons and colored accents */}
        {open && (
          <div className="ml-9 border-l-2 border-gray-100 py-1 pl-4">
            {SUB_ITEMS.map((item) => (
              <a
                key={item.name}
                href="#"
                className="group/sub flex items-center gap-x-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-gray-50"
              >
                <div
                  className={`flex size-8 flex-none items-center justify-center rounded-md ${item.bgColor} ${item.hoverBg} transition-colors duration-150`}
                >
                  <item.icon className={`size-4 ${item.color}`} />
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 group-hover/sub:text-gray-900">{item.name}</span>
                  <ChevronRightIcon className="size-3.5 text-gray-300 opacity-0 transition-opacity duration-150 group-hover/sub:opacity-100" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
        <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900">
          <CurrencyDollarIcon className="size-5 flex-none text-gray-400" />
          Підтримка ЧІМ
        </a>
        <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900">
          <PhoneIcon className="size-5 flex-none text-gray-400" />
          {"Зворотній зв'язок"}
        </a>
      </div>
    </div>
  );
}

/* ── Main Design Spec Page ── */
export default function DesignSpecPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">Design Spec</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Редизайн суб-елементів дропдауну навігації
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-600">
            {
              'Поточні дочірні елементи під «Мегапроект Вдома» виглядають як простий текст без візуального оформлення. Нижче представлено поточний стан та затверджений варіант редизайну.'
            }
          </p>
        </div>

        {/* Problem Statement */}
        <section className="mb-16 rounded-2xl border border-red-200 bg-red-50 p-8">
          <h2 className="text-lg font-semibold text-red-900">Проблема</h2>
          <ul className="mt-3 space-y-2 text-sm text-red-800">
            <li className="flex items-start gap-x-2">
              <span className="mt-0.5 size-1.5 flex-none rounded-full bg-red-400" />
              Суб-елементи не мають іконок, на відміну від батьківських пунктів меню
            </li>
            <li className="flex items-start gap-x-2">
              <span className="mt-0.5 size-1.5 flex-none rounded-full bg-red-400" />
              Відсутня візуальна ієрархія -- немає зв'язку з батьківським елементом
            </li>
            <li className="flex items-start gap-x-2">
              <span className="mt-0.5 size-1.5 flex-none rounded-full bg-red-400" />
              Ховер ефект мінімальний (тільки bg-gray-50), не відповідає загальному стилю
            </li>
            <li className="flex items-start gap-x-2">
              <span className="mt-0.5 size-1.5 flex-none rounded-full bg-red-400" />
              {'Жорстко встановлений pl-20 створює великий відступ без візуального "якоря"'}
            </li>
          </ul>
        </section>

        {/* Current vs. Options */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* CURRENT */}
          <div>
            <div className="mb-4 flex items-center gap-x-3">
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
                Поточний стан
              </span>
            </div>
            <p className="mb-6 text-sm text-gray-500">
              Простий текст з великим відступом зліва. Немає іконок, описів чи візуального зв'язку.
            </p>
            <CurrentDropdown />
          </div>

          {/* OPTION A -- Затверджений */}
          <div>
            <div className="mb-4 flex items-center gap-x-3">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
                Затверджений варіант
              </span>
            </div>
            <p className="mb-6 text-sm text-gray-500">
              Карточки з індивідуальними іконками та кольоровими акцентами. Ліва лінія показує зв'язок з батьком.
            </p>
            <OptionADropdown />
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Деталі імплементації
              </p>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li>
                  {'border-l-2 border-gray-100 на контейнері для візуальної ієрархії'}
                </li>
                <li>
                  {'Кожен суб-елемент має іконку 8x8 (size-8) з кольоровим фоном (bg-amber-50, bg-emerald-50, ...)'}
                </li>
                <li>
                  {'ChevronRightIcon з opacity-0 -> group-hover:opacity-100 для інтерактивності'}
                </li>
                <li>
                  {'ChevronDownIcon на батьківському елементі з rotate-180 при відкритті'}
                </li>
                <li>
                  {'Нові іконки: UserGroupIcon, ShieldExclamationIcon, BanknotesIcon, SparklesIcon'}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Notes for Developers */}
        <section className="mt-16 rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-lg font-semibold text-gray-900">Технічні нотатки для розробника</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-700">Файли для зміни</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-gray-600">
                <li className="font-mono text-xs">components/header/constants.tsx</li>
                <li className="font-mono text-xs">components/header/header.tsx</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700">Що потрібно змінити</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-gray-600">
                <li>1. Додати іконку та колір до кожного суб-елемента в типі SubmenuItem</li>
                <li>2. Оновити масив content у MAIN_MENU_ITEMS</li>
                <li>3. Оновити рендер суб-елементів в header.tsx (desktop + mobile)</li>
                <li>{'4. Додати ChevronDownIcon індикатор на «Мегапроект Вдома» батьківський елемент'}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700">Нові залежності іконок</h3>
              <ul className="mt-2 space-y-1.5 font-mono text-xs text-gray-600">
                <li>{'@heroicons/react/24/outline: UserGroupIcon'}</li>
                <li>{'@heroicons/react/24/outline: SparklesIcon'}</li>
                <li>{'@heroicons/react/24/outline: ChevronRightIcon'}</li>
                <li>{'@heroicons/react/20/solid: ChevronDownIcon'}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700">Зміни в типах</h3>
              <div className="mt-2 rounded-lg bg-gray-50 p-3 font-mono text-xs text-gray-700">
                <pre>{`type SubmenuItem = {
  name: string;
  link?: string;
  icon?: HeroIcon;      // NEW
  description?: string; // NEW
  color?: string;       // NEW
  bgColor?: string;     // NEW
};`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Color Tokens Reference */}
        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-lg font-semibold text-gray-900">Кольорові токени суб-елементів</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {SUB_ITEMS.map((item) => (
              <div key={item.name} className="rounded-xl border border-gray-100 p-4">
                <div className="flex items-center gap-x-2">
                  <span className={`size-4 rounded-full ${item.dotColor}`} />
                  <span className="text-xs font-semibold text-gray-700">{item.name}</span>
                </div>
                <div className="mt-3 space-y-1 text-xs text-gray-500">
                  <div className="flex items-center gap-x-2">
                    <span className={`inline-block size-3 rounded ${item.bgColor}`} />
                    {item.bgColor}
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className={`inline-block size-3 rounded ${item.dotColor}`} />
                    {item.dotColor}
                  </div>
                  <div className={`${item.color}`}>{item.color}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <p className="mt-12 text-center text-xs text-gray-400">
          Design Spec by v0 -- Черкаський Інститут Міста
        </p>
      </div>
    </div>
  );
}
