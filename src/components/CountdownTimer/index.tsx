import React, { useEffect, useState } from "react";

interface CountDownTimerProps {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer: React.FC<CountDownTimerProps> = ({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
}: CountDownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days,
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const updatedTime = { ...prev };
        if (updatedTime.seconds > 0) {
          updatedTime.seconds -= 1;
        } else if (updatedTime.minutes > 0) {
          updatedTime.minutes -= 1;
          updatedTime.seconds = 59;
        } else if (updatedTime.hours > 0) {
          updatedTime.hours -= 1;
          updatedTime.minutes = 59;
          updatedTime.seconds = 59;
        } else if (updatedTime.days > 0) {
          updatedTime.days -= 1;
          updatedTime.hours = 23;
          updatedTime.minutes = 59;
          updatedTime.seconds = 59;
        }
        return updatedTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const shortNames = {
    days: "days",
    hours: "hrs",
    minutes: "mins",
    seconds: "secs",
  };

  const formatTime = (value: number) => String(value).padStart(2, "0");

  return (
    <div className="flex bg-red-600 text-white text-center rounded-md shadow-md px-4 py-2">
      {Object.entries(timeLeft).map(([key, value], index) => (
        <div
          key={key}
          className={`flex gap-1 items-center ${
            index !== Object.keys(timeLeft).length - 1 ? "mr-3" : ""
          }`}
        >
          <span className="text-sm md:text-md font-bold">
            {formatTime(value)}
          </span>
          <span className="uppercase text-xs font-light">
            {shortNames[key as keyof typeof shortNames]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
