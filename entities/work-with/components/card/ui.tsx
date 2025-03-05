import { ICardProps } from './types';

export const Card = ({ title, description }: ICardProps) => {
  return (
    <div className="border-l-blue/10 border-r-blue/30 border-t-blue/20 relative flex min-w-[90%] flex-col gap-6 overflow-hidden rounded-[32px] border-l-2 border-r-2 border-t-2 p-8 xl:gap-4 xl:p-6">
      <div className="bg-blue/20 absolute -right-20 -top-20 h-[50%] w-[70%] rounded-full blur-2xl backdrop-blur-2xl" />
      <h3 className="text-[32px] leading-[42px] text-black/80 xl:text-xl">
        {title}
      </h3>
      <p className="text-[18px] leading-[22px] text-black/75 xl:text-sm lg:text-sm">
        {description}
      </p>
      <div className="bg-blue/20 absolute -bottom-[125px] -left-[100px] h-[50%] w-[70%] rounded-full blur-2xl backdrop-blur-2xl" />
    </div>
  );
};
