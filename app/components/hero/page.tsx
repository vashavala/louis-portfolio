export default function Hero() {
  return (
    <section className="min-h-screen min-w-full flex items-center justify-center gap-20" id="Hero">
      <div className="w-64 aspect-square bg-[url('/selfie.jpg')] bg-no-repeat bg-contain rounded-full"></div>
      <div className="text-7xl font-black mb-10">Software developer</div>
      <div>
        <div className="text-2xl">+ 5 years experience</div>
        <div className="text-2xl">+ reliable, conscientious, efficient </div>
        <div className="text-2xl">+ performance optimization, clean code, scalability </div>
      </div>
    </section>
  );
}