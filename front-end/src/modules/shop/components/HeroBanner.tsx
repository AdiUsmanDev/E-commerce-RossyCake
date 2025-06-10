const HeroBanner = () => (
  <div className="mb-8 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 p-8 md:p-12 text-white shadow-lg flex items-center justify-between">
    <div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
        Kue Lezat Untuk Setiap Momen
      </h1>
      <p className="mt-2 md:mt-4 text-lg text-amber-100 max-w-xl">
        Temukan aneka kue berkualitas premium, dibuat dengan cinta dan
        bahan-bahan terbaik untuk hari spesial Anda.
      </p>
    </div>
    <div className="hidden md:block">
      <img
        src="https://placehold.co/200x200/FFFFFF/F97316?text=Rossi+Cake"
        alt="Featured Cake"
        className="rounded-full border-4 border-white/50"
      />
    </div>
  </div>
);
export default HeroBanner;
