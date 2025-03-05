import { IInfrastructure } from '../../../work-with/types';
import Image from 'next/image';

export const Card = (data: IInfrastructure) => {
  return (
    <div className="border-l-blue/10 border-r-blue/30 border-t-blue/20 relative flex min-w-[90%] flex-col gap-6 overflow-hidden rounded-[32px] border-l-2 border-r-2 border-t-2 p-8 xl:gap-4 xl:p-6">
      <div className="bg-blue/20 absolute -right-20 -top-20 h-[50%] w-[70%] rounded-full blur-2xl backdrop-blur-2xl" />
      <Image
        src={`/static/images/infrastructure/${data.icon}.svg`}
        alt="img"
        width={46}
        height={46}
        className="xl:h-[80px] xl:w-[80px] md:h-[55px] md:w-[55px]"
      />
      <p className="text-[32px] leading-[40px] text-black xl:text-xl">
        {data.title}
      </p>
      <span className="text-black/70 md:text-sm">{data.description}</span>
      <div className="bg-blue/20 absolute -bottom-[125px] -left-[100px] h-[50%] w-[70%] rounded-full blur-2xl backdrop-blur-2xl" />
    </div>
  );
};
