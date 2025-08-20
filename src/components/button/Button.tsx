import React from 'react';

const OUTLINED = 'outlined';
const ROUND = 'round';

type variants = typeof OUTLINED | typeof ROUND;

interface Props {
  variant?: variants;
  text?: string;
  icon?: React.ReactElement;
  customClassName?: string;
}

const variantStyles: Record<variants, string> = {
  [OUTLINED]: '',
  [ROUND]: 'w-[40px] h-[40px] rounded-full',
};

const Button = ({
  text,
  icon,
  customClassName,
  variant = OUTLINED,
}: Props): React.JSX.Element => {
  const selectedVariant = variantStyles[variant];

  return (
    <button
      className={`flex cursor-pointer items-center justify-center border-2 border-(--color-blue-3) bg-transparent ${selectedVariant} ${customClassName ?? ''}`}
    >
      {icon ?? null}
      {text ?? null}
    </button>
  );
};

export default Button;
