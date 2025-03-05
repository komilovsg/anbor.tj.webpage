'use client';
import { Button } from '@/shared/ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const Error500 = () => {
  const { push } = useRouter();

  const handleRedirect = () => {
    push('/');
  };

  return (
    <section className="container overflow-hidden">
      <div className="flex h-screen items-center justify-center md:flex-col">
        <Image
          className="w-[50%] scale-125 md:w-full"
          src="/static/images/error-500/error-500.png"
          alt="img"
          width={1018}
          height={695}
        />
        <div className="flex w-[50%] flex-col gap-8 text-white md:w-full md:gap-6 md:text-center">
          <h1 className="text-[48px] leading-[48px] xl:text-[32px] xl:leading-[40px]">
            Что-то пошло не так!
          </h1>
          <p className="text-[16px]">
            Кажется, на сервере возникла ошибка, из-за которой мы не смогли
            обработать ваш запрос. Не волнуйтесь, мы уже в курсе проблемы и
            работаем над ее устранением.
          </p>
          <p className="text-[16px]">
            Спасибо за ваше терпение и извините за неудобства! Надеемся скоро
            увидеть вас снова.
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
