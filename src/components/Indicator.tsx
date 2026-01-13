const Indicator = () => {
  return (
    <div className="w-full z-50 fixed top-0 left-0 h-1.5 bg-md-surface-variant/30 backdrop-blur">
      <div
        className="h-full rounded-r-full bg-md-primary shadow-[0_0_15px_rgba(208,188,255,0.7)]"
        id="indicator"
      ></div>
    </div>
  );
};

export default Indicator;
