import Image from 'next/image';
import { ICardProps } from './types';

export const ChatBotCard = ({ title, description }: ICardProps) => {
  return (
    <div className="bg-blue/20 flex h-[151px] w-full items-center justify-between gap-8 rounded-[32px] p-8 xl:gap-5 xl:p-6 md:h-auto md:flex-col md:gap-4">
      <div className="flex flex-col gap-6 xl:gap-3">
        <h3 className="text-[32px] leading-[42px] text-black/80 xl:text-xl">
          {title}
        </h3>
        <Image
          className="mx-auto my-4 hidden md:block"
          src="/static/images/work-with/chat-bot.png"
          alt="img"
          width={111}
          height={165}
        />
        <p className="text-[18px] leading-[22px] text-black/75 xl:text-sm lg:text-sm">
          {description}
        </p>
      </div>
      <Image
        className="md:hidden"
        src="/static/images/work-with/chat-bot.png"
        alt="img"
        width={111}
        height={165}
      />
    </div>
  );
};
