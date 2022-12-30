import clsx from "clsx"

interface ClockButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  small?: boolean;
}

export default function ClockButton({ children, className, small, ...rest }: ClockButtonProps) {
  return (
    <button
      className={
        clsx("p-[.125rem] flex justify-end items-center absolute z-0 clock-button",
          small ? 'h-4 w-4 right-[-.5rem]' : 'h-6 w-6 right-[-1rem]',
          className
        )
      }
      {...rest}
    >
      {children}
    </button>
  )
}