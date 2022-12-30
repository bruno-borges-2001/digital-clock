import clsx from "clsx"

interface LedProps extends React.HTMLAttributes<HTMLDivElement> {
  on?: boolean;
  vertical?: boolean;
};

export default function Led({ on, vertical, className, ...rest }: LedProps) {
  return (
    <div className={clsx(
      "h-full w-full border-none absolute flex flex-1",
      className,
      on ? 'bg-red-700' : 'bg-red-100 opacity-20',
      vertical ? 'clip-vertical' : 'clip-horizontal'
    )} {...rest} />
  )
}