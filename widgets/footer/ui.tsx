import Image from 'next/image';
import {
  InstagramIcon,
  FacebookIcon,
  TelegramIcon,
  LinkedInIcon,
} from '@/shared/icons';
import { menu, rulesAndPolicies } from '@/shared/constants';
import { contacts } from '@/shared/types';

export const Footer = () => {
  return (
    <footer className="body-font bg-black">
      <div className="container mx-auto flex flex-wrap items-start justify-between gap-7 !pt-[110px] md:flex-col md:!py-[60px]">
        <div className="flex w-[337px] flex-col items-start justify-start gap-4">
          <a className="title-font flex items-center justify-center gap-4">
            <Image
              className="bg-none md:w-[200px]"
              src="/logo_dark.png"
              alt="logo"
              width={77}
              height={10}
            />
          </a>
          <p className="text-base text-white/70 md:mt-2 md:text-sm">
            Наша CRM автоматизирует учет, контроль склада и управление
            клиентами, помогая бизнесу работать эффективнее и расти быстрее.
          </p>
          <div className="mt-3 flex items-center justify-center gap-5">
            <a className="" href="#">
              <InstagramIcon />
            </a>
            <a className="" href="#">
              <FacebookIcon />
            </a>
            <a className="" href="#">
              <TelegramIcon />
            </a>
            <a className="" href="#">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="title-font text-sm font-medium tracking-widest text-white">
              Контакты
            </h2>
            <div className="flex list-none flex-col gap-2 text-sm">
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
        <div className="flex flex-col gap-2">
          <h2 className="title-font text-sm font-medium tracking-widest text-white">
            Навигация
          </h2>
          <div className="flex list-none flex-col gap-2 text-sm">
            {menu.map((item) => (
              <li
                key={item.href}
                className="flex cursor-pointer items-center gap-2"
              >
                <a
                  href={item.href}
                  className="text-white/70 hover:text-white/90"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex list-none flex-col gap-2 text-sm">
            {rulesAndPolicies.map((item) => (
              <li
                key={item.href}
                className="flex cursor-pointer items-center gap-2"
              >
                <a
                  href={item.href}
                  className="text-white/70 hover:text-white/90"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
