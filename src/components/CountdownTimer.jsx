import { useEffect, useState } from "react";
import "../components/Temp.css";
import '../components/normalize.css'


const CountdownTimer = () => {

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const countDownDate = new Date(2024, 5, 22).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="time" id="time">
      <h1>Calendario-Dias Restantes</h1>
      <div className='container'>
        <div className='days block'>{timeLeft.days}<br />Dias</div>
        <div className='hours block'>{timeLeft.hours}<br />Horas</div>
        <div className='minutes block'>{timeLeft.minutes}<br />Minutos</div>
        <div className='seconds block'>{timeLeft.seconds}<br />Segundos</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
