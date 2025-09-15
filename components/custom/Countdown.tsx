"use client";
import { useState } from "react";
import * as React from "react";

type Props = {
  endDate: string;
  className?: string;
};

const Countdown = ({ endDate }: Props) => {
  const [time, setTime] = useState("");
  // Set the date we're counting down to
  const countDownDate = new Date(endDate).getTime();

  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();
    // const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes: number = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds: number = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    setTime(days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s ");

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      setTime("TIME EXPIRED");
    }
  }, 1000);

  return <div>{time}</div>;
};

export default Countdown;
