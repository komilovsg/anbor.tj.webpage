import { model } from './constants';
import { Card } from './components';

export const DevelopmentAndImplementation = () => {
  return (
    <section className="mx-auto -mt-10 rounded-[40px_40px_0px_0px] bg-white py-[80px] lg:py-5">
      <div className="container">
        <h1 className="text-[64px] leading-[80px] text-black xl:text-[54px] xl:leading-[70px] lg:text-[44px] md:text-3xl">
          Преимущества
        </h1>
        <div className="mt-[60px] grid grid-cols-4 gap-6 xl:mt-[50px] xl:grid-cols-2 md:mt-[30px] md:grid-cols-1 md:gap-y-5">
          {model.map((el) => {
            return (
              <Card
                key={el.title}
                icon={el.icon}
                title={el.title}
                description={el.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
