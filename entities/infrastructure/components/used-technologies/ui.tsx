import { icons, DefaultIcon, stacks } from '@/shared/constants';
import { Ecllips116Icon, Ecllips117Icon, Ecllips118Icon } from '@/shared/icons';

export const UsedTechnologies = () => {
  return (
    <section className="body-font relative bg-[#00030C] py-24">
      <Ecllips116Icon className="absolute right-0 top-0 opacity-45" />
      <div className="container mx-auto flex flex-col gap-10 px-5">
        <div className="flex w-full flex-col flex-wrap items-start text-start">
          <h1 className="title-font mb-2 text-2xl font-medium text-white sm:text-3xl">
            Используемые технологии
          </h1>
        </div>
        {stacks.map((stack) => (
          <div key={stack.type} className="z-10 -m-4 flex flex-col">
            <div className="w-full p-4">
              <div className="flex flex-wrap items-start justify-between rounded-lg bg-[#131A2E] p-6">
                <p className="font-[CoFo Sans] decoration-skip-none w-[40%] text-left text-2xl font-medium leading-[45.36px] text-white md:w-full">
                  {stack.type}
                </p>
                <div className="flex w-[60%] flex-wrap items-center justify-start gap-3 text-xs md:w-full">
                  {stack.technologies.map((tech) => {
                    const IconComponent = icons[tech.icon] || DefaultIcon;
                    return (
                      <div
                        key={tech.title}
                        className="flex h-11 items-center justify-center gap-1 rounded-lg bg-white p-2"
                      >
                        <IconComponent />
                        <p>{tech.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
        <Ecllips117Icon className="absolute bottom-16 left-0 opacity-45" />
        <Ecllips118Icon className="absolute bottom-5 right-0 opacity-45" />
      </div>
    </section>
  );
};
