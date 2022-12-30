import { useEffect, useState } from "react";

import { AiOutlineClockCircle, } from 'react-icons/ai'
import { VscDebugRestart } from 'react-icons/vsc'
import { BiPlay, BiPause } from 'react-icons/bi'

import Colon from "./Colon";
import Digit from "./Digit";
import ClockButton from "./ClockButton";

enum ClockMode {
  STOPPED,
  TIMER,
  CLOCK
}

let updateTimerInterval: number;

function formatDigits(n: number) {
  return n.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  }).split('').map(el => Number(el))
}

function updateTime(clockMode: ClockMode, count?: number) {
  switch (clockMode) {
    case ClockMode.STOPPED:
      break;
    case ClockMode.CLOCK: {
      const hours = formatDigits(new Date().getHours());
      const minutes = formatDigits(new Date().getMinutes());
      const seconds = formatDigits(new Date().getSeconds());
      return [hours[0], hours[1], minutes[0], minutes[1], seconds[0], seconds[1]]
    }
    case ClockMode.TIMER: {
      let timeDiff = count!;
      const parsedHours = Math.floor(timeDiff / (60 * 60))
      const hours = formatDigits(parsedHours)
      timeDiff -= parsedHours * 60 * 60
      const parsedMinutes = Math.floor(timeDiff / (60))
      const minutes = formatDigits(parsedMinutes)
      timeDiff -= parsedMinutes * 60
      const seconds = formatDigits(Math.floor(timeDiff))
      return [hours[0], hours[1], minutes[0], minutes[1], seconds[0], seconds[1]]
    }
  }
}

export default function Clock() {
  const [clockMode, setClockMode] = useState<ClockMode>(ClockMode.CLOCK)

  const [timerCount, setTimerCount] = useState(0);

  const [timeDigits, setTimeDigits] = useState(updateTime(clockMode, timerCount) ?? [0, 0, 0, 0, 0, 0])

  useEffect(() => {
    clearTimeout(updateTimerInterval)

    updateTimerInterval = setTimeout(() => {
      if (clockMode === ClockMode.STOPPED) return;
      setTimeDigits(prev => updateTime(clockMode, timerCount) ?? prev)
      setTimerCount(prev => prev + 1)
    }, clockMode === ClockMode.TIMER ? 1000 : 500)
  }, [clockMode, timeDigits])

  function toggleClockMode(mode: ClockMode) {
    setClockMode(mode)
    setTimeDigits([0, 0, 0, 0, 0, 0])
    if (mode === ClockMode.TIMER) {
      setTimeDigits([0, 0, 0, 0, 0, 0])
      setTimerCount(1)
    } else {
      setTimeDigits(prev => updateTime(mode) ?? prev)
    }
  }


  return (
    <div className="relative w-fit">
      <div className="p-5 flex flex-grow-0 flex-row gap-2 border-clock bg-slate-900 z-[999] w-fit">
        <Digit number={timeDigits[0]} />
        <Digit number={timeDigits[1]} />
        <Colon />
        <Digit number={timeDigits[2]} />
        <Digit number={timeDigits[3]} />
        <Colon />
        <Digit number={timeDigits[4]} />
        <Digit number={timeDigits[5]} />
      </div>
      <ClockButton
        onClick={() => toggleClockMode(clockMode === ClockMode.TIMER ? ClockMode.CLOCK : ClockMode.TIMER)}
        className="bg-red-500 top-[2rem] clock-button">
        <AiOutlineClockCircle fill="white" />
      </ClockButton>

      <ClockButton
        small
        onClick={() => clockMode !== ClockMode.CLOCK && setClockMode(prev => prev === ClockMode.TIMER ? ClockMode.STOPPED : ClockMode.TIMER)}
        className="bg-slate-600 top-[4rem] clock-button"
      >
        {
          clockMode === ClockMode.STOPPED ? <BiPlay size={8} fill="white" /> : <BiPause size={8} fill="white" />
        }
      </ClockButton>
      <ClockButton
        small
        onClick={() => clockMode !== ClockMode.CLOCK && toggleClockMode(ClockMode.TIMER)}
        className="bg-slate-600 top-[5.5rem] clock-button"
      >
        <VscDebugRestart size={8} style={{ rotate: '65deg' }} fill="white" />
      </ClockButton>
    </ div>
  )
}