import clsx from "clsx"

interface ClockButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  small?: boolean;
}

export default function ClockButton({ children, className, small, ...rest }: ClockButtonProps) {
  return (
    <button
      className={
        clsx("p-[.125rem] flex justify-end items-center absolute z-0 clock-button aspect-square",
          small ? 'h-[15%] left-[calc(100%-1.5rem)]' : 'h-[20%] left-[calc(100%-1.5rem)]',
          className
        )
      }
      {...rest}
    >
      {children}
    </button>
  )
}