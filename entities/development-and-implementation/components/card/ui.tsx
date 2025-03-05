import { ICardProps } from './types';

export const Card = ({ title, description, icon: Icon }: ICardProps) => {
  return (
    <div className="flex flex-col gap-8 rounded-[32px] bg-[#F2F2F4] p-8 xl:gap-5 xl:p-6 md:gap-4">
      <i className="flex h-[36px] w-[36px] place-content-center items-center justify-center rounded-full bg-primary">
        {Icon}
      </i>
      <h3 className="text-[24px] leading-[34px] text-black/80 xl:text-xl">
        {title}
      </h3>
      <p className="text-[18px] leading-[22px] text-black/75 xl:text-sm lg:text-sm">
        {description}
      </p>
    </div>
  );
};
