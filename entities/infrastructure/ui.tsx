import { model } from './constants';
import { Card } from './components';

export const AboutUS = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="z-50 mx-auto max-w-[1260px] !py-[100px] xl:!py-[80px]">
        <h1 className="px-[30px] text-[64px] leading-[80px] text-black xl:text-[54px] xl:leading-[70px] lg:text-[44px] md:text-3xl">
          О нас
        </h1>
        <p className="px-[30px] text-[24px]">
          Мы — команда профессионалов, создающая удобные и надёжные инструменты
          для бизнеса. <br /> Наша цель — упростить управление финансами и
          автоматизировать процессы, чтобы вы могли сосредоточиться на развитии
          компании.
        </p>
        {/* <h1 className="px-[30px] text-[64px] leading-[80px] text-black xl:text-[54px] xl:leading-[70px] lg:text-[44px] md:text-3xl">
          Как работает CRM
        </h1>
        <div className="hide-scroll mt-[60px] grid grid-cols-2 gap-6 px-[30px] xl:mt-[50px] md:mt-[30px] md:flex md:grid-cols-1 md:gap-3 md:gap-y-8 md:overflow-x-scroll">
          {model.map((model) => (
            <Card key={model.icon} {...model} />
          ))}
        </div> */}
      </div>
    </section>
  );
};
