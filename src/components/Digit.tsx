import clsx from "clsx"
import Led from "./Led";

const MUX = [
  [true, true, true, true, true, true, false], // 0
  [true, true, false, false, false, false, false], // 1
  [true, false, true, true, false, true, true], // 2
  [true, true, true, false, false, true, true], // 3
  [true, true, false, false, true, false, true], // 4
  [false, true, true, false, true, true, true], // 5
  [false, true, true, true, true, true, true], // 6
  [true, true, false, false, false, true, false], // 7
  [true, true, true, true, true, true, true], // 8
  [true, true, false, false, true, true, true], // 9
  [false, false, false, false, false, false, false] // NONE
]

interface DigitProps {
  number?: number;
  size?: string;
}

export default function Digit({ number, size }: DigitProps) {

  const digit = number === undefined || number < 0 || number > 9 ? MUX[10] : MUX[number]

  return (
    <div style={{ height: size }} className={clsx(
      'aspect-[1/2] grid grid-cols-digit grid-rows-digit relative min-h-[160px]',
      {
        'h-20': !size
      }
    )}>
      <Led on={digit[0]} vertical className="col-start-[-3] col-span-2 row-start-2 row-end-[16]" />
      <Led on={digit[1]} vertical className="col-start-[-3] col-span-2 row-start-[16] row-end-[-2]" />
      <Led on={digit[2]} className="col-start-[2] col-end-[-2] row-start-[-3] row-span-2" />
      <Led on={digit[3]} vertical className="col-start-[1] col-span-2 row-start-[16] row-end-[-2]" />
      <Led on={digit[4]} vertical className="col-start-[1] col-span-2 row-start-2 row-end-[16]" />
      <Led on={digit[5]} className="col-start-[2] col-end-[-2] row-start-1 row-span-2" />
      <Led on={digit[6]} className="col-start-[2] col-end-[-2] row-start-[15] row-span-2" />
    </div>
  )
}