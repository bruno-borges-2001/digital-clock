import clsx from "clsx"
import Led from "./Led";

interface ColonProps {
  size?: string;
}

export default function Colon({ size }: ColonProps) {
  return (
    <div style={{ width: size }} className={clsx(
      'aspect-[1/10] grid grid-cols-colon grid-rows-digit relative',
      {
        'h-20': !size
      }
    )}>
      <Led on vertical className="col-start-1 col-span-2 row-start-[12] row-end-[15]" />
      <Led on vertical className="col-start-1 col-span-2 row-start-[-12] row-end-[-9]" />
    </div>
  )
}