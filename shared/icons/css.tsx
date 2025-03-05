import { SVGProps } from 'react';

export const CssIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.03918 1.33325L4.72238 20.3562L12.6392 22.6666L20.6051 20.3573L22.2392 1.33325H3.03918ZM17.2259 17.0367L12.6467 18.321H12.6392L8.05572 17.0367L7.73892 13.6586H9.98745L10.1475 15.2863L12.6381 15.9679L15.1341 15.2853L15.3955 12.0319H7.64079L7.44132 9.89219H15.5907L15.7763 7.75245H7.22478L7.03705 5.61272H18.2435L17.2259 17.0367Z"
        fill="#1A1A1A"
      />
    </svg>
  );
};
