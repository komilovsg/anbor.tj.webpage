'use client';
import { menu } from '@/shared/constants';
import Image from 'next/image';
import { Button, Drawer } from '@/shared/ui';
import Link from 'next/link';
import { CloseIcon, MenuIcon } from '@/shared/icons';
import { useState } from 'react';
import { contacts } from '@/shared/types';

export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <>
      <nav className="bg-image fixed z-50 w-full">
        <div className="container flex items-center justify-between !py-5">
          <Link href="/">
            <Image
              className="md:w-[140px]"
              src="/logo.png"
              alt="logo"
              width={130}
              height={20}
            />
          </Link>
          <div className="flex gap-6 md:hidden">
            {menu.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-blue text-[16px] leading-[24px] text-black transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <Link href="https://dev.anbor.tj/auth/login">
              <Button
                color="secondary"
                className="hover:bg-blue !px-4 !text-sm hover:text-white"
              >
                Вход
              </Button>
            </Link>
          </div>
          <MenuIcon
            onClick={() => setIsOpenMenu(true)}
            className="hidden h-7 w-7 text-white md:block"
          />
        </div>
      </nav>
      <Drawer isOpen={isOpenMenu} handleClose={() => setIsOpenMenu(false)}>
        <div className="container flex h-full flex-col justify-between gap-10">
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between">
              <Image
                className="md:w-[140px]"
                src="/logo.svg"
                alt="logo"
                width={197}
                height={40}
              />
              <CloseIcon
                onClick={() => setIsOpenMenu(false)}
                className="h-7 w-7 text-white"
              />
            </div>
            <div className="flex flex-col gap-6">
              {menu.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpenMenu(false)}
                  className="text-[16px] leading-[24px] text-white/90 transition-colors hover:text-white/80"
                >
                  {link.title}
                </Link>
              ))}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <div className="flex list-none flex-col gap-4 text-sm">
                    {contacts.map((contact, index) => (
                      <li
                        key={index}
                        className="flex cursor-pointer items-center gap-2"
                      >
                        {contact.icon}{' '}
                        <a
                          href={contact.href}
                          className="text-white/70 hover:text-white/90"
                        >
                          {contact.title}
                        </a>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            onClick={() => setIsOpenMenu(false)}
            className="w-full"
            href="https://dev.anbor.tj/auth/login"
          >
            <Button className="w-full">Войти</Button>
          </Link>
        </div>
      </Drawer>
    </>
  );
};
