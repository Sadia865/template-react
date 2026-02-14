export default function Marquee() {
  const logos = ["GlobalBank", "Luminous", "Nietzsche", "Interlock", "Segment"];
  
  return (
    <div className="py-20 border-y border-white/5 bg-background overflow-hidden flex">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <span key={i} className="mx-12 text-2xl font-bold text-gray-600 uppercase tracking-widest">
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}