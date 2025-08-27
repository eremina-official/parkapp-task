import React from 'react';

const OUTLINED = 'outlined';
const ROUND = 'round';

type variants = typeof OUTLINED | typeof ROUND;

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: variants;
  text?: string;
  icon?: React.ReactElement;
  customClassName?: string;
  selected?: boolean;
}

const variantStyles: Record<variants, string> = {
  [OUTLINED]: 'rounded-(--border-radius) w-[218px] p-[10px]',
  [ROUND]: 'w-[40px] h-[40px] rounded-full',
};

const buttonSelectedStyle: string =
  'hover:bg-(--color-blue-3) hover:text-white aria-selected:bg-(--color-blue-3) aria-selected:text-white hover:**:fill-white';

const Button = ({
  text,
  icon,
  customClassName,
  variant = OUTLINED,
  selected = false,
  ...rest
}: Props): React.JSX.Element => {
  const selectedVariant = variantStyles[variant];

  return (
    <button
      aria-selected={selected}
      className={`flex flex-[0_0_auto] cursor-pointer items-center justify-center border-2 border-(--color-blue-3) bg-transparent text-(--color-blue-3) ${selectedVariant} ${customClassName ?? ''} ${buttonSelectedStyle}`}
      {...rest}
    >
      {icon ?? null}
      {text ?? null}
    </button>
  );
};

export default Button;
