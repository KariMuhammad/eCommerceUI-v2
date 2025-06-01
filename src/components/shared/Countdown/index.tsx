const Countdown = ({ section, className }) => {
  return (
    <div className={`${section}-countdown ${className}`}>
      <div className="remain">17 Days</div>
      <div className="date-countdown">
        <div className="rounded-circle hours">05</div>
        <div className="rounded-circle minutes">23</div>
        <div className="rounded-circle seconds">49</div>
      </div>
    </div>
  );
};

export default Countdown;
