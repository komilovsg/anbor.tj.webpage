import { model } from '../infrastructure/constants';
import { Card, ChatBotCard } from './components';

export const WorkWith = () => {
  return (
    <section className="mx-auto -mt-10 bg-white py-[80px] xl:mt-0 lg:py-5">
      <div className="container !p-0">
        <h1 className="px-[30px] text-[64px] leading-[80px] text-black xl:text-[54px] xl:leading-[70px] lg:text-[44px] md:text-3xl">
          Как работает CRM
        </h1>
        <div className="hide-scroll mt-[60px] grid grid-cols-2 gap-6 px-[30px] xl:mt-[50px] md:mt-[30px] md:flex md:grid-cols-1 md:gap-3 md:gap-y-8 md:overflow-x-scroll">
          {model.map((model) => (
            <Card key={model.icon} {...model} />
          ))}
        </div>
        <div className="grid gap-6 md:gap-y-5">
          <div className="p-[30px]">
            <ChatBotCard
              title="Автоматизация и поддержка"
              description="CRM оптимизирует бизнес-процессы, снижает рутину и предоставляет доступ к информации и справке по системе."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
