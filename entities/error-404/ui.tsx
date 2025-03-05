'use client';
import { Button } from '@/shared/ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const Error404 = () => {
  const { push } = useRouter();

  const handleRedirect = () => {
    push('/');
  };

  return (
    <section className="container overflow-hidden">
      <div className="flex h-screen items-center justify-center md:flex-col">
        <Image
          className="w-[50%] scale-125 md:w-full"
          src="/static/images/error-404/error-404.png"
          alt="img"
          width={1018}
          height={695}
        />
        <div className="flex w-[50%] flex-col gap-8 text-white md:w-full md:gap-6 md:text-center">
          <h1 className="text-[48px] leading-[48px] xl:text-[32px] xl:leading-[40px]">
            Страница не найдена
          </h1>
          <p className="text-[16px]">
            Страница, которую вы ищете, не найдена. Возможно, она была
            перемещена, удалена или временно недоступна.
          </p>
          <Button
            onClick={handleRedirect}
            className="mt-8 w-[30%] px-8 py-3 md:mx-auto md:w-[60%]"
          >
            На главную
          </Button>
        </div>
      </div>
    </section>
  );
};
