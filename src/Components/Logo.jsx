export default function Logo() {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="flex items-center">
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight"
          style={{
            fontFamily: "Lucida Handwriting, Lucida Calligraphy, cursive",
            letterSpacing: "0.01em",
          }}
        >
          <span style={{ color: "#EF4444" }}>event</span>
          <span style={{ color: "#000", fontWeight: 700 }}>Pro</span>
        </h1>
      </div>
      <span className="text-sm md:text-base font-bold text-black pl-12 md:pl-16 mt-0.5 tracking-wide">
        Celebrate Every Moment
      </span>
    </div>
  );
}
