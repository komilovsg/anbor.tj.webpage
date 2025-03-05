'use client';
import { Button } from '@/shared/ui';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export const Banner = () => {
  return (
    <header className="bg-image h-screen w-full bg-fixed">
      <div className="container flex h-screen flex-col items-start justify-center gap-8 md:gap-6">
        <div className="w-[80%] max-w-[80%] md:w-full md:max-w-full">
          <TypeAnimation
            sequence={[
              'Ваш партнер в мире\n' + 'автоматизации бизнеса',
              1000,
              'Автоматизируйте финансы и управление бизнесом легко и удобно!',
              1000,
            ]}
            wrapper="h1"
            speed={50}
            className="!text-[72px] !leading-[72px] !text-black xl:!text-[62px] xl:!leading-[62px] md:!text-4xl"
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <p className="text-2xl text-black xl:text-xl">
          Наша CRM-система поможет вам контролировать доходы и расходы, <br />
          управлять товарами и финансами, вести учёт контрагентов и
          автоматизировать бизнес-процессы. <br /> Всё в одном месте — удобно,
          надёжно и эффективно.
        </p>
        <Link href="https://dev.anbor.tj/auth/register">
          <Button className="bg-blue/70 hover:bg-blue mt-5 px-6 py-4 xl:mt-3 xl:px-4 xl:py-3">
            Регистрация
          </Button>
        </Link>
      </div>
    </header>
  );
};
