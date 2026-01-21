"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[30vh] md:h-[85vh] overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://v1.pinimg.com/videos/iht/expMp4/bc/44/b5/bc44b53f84bf3680c5ce610acfe11585_720w.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content on Video */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16">
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Powering the Future <br /> From Space to Earth
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Clean energy, global vision & advanced technology
          </p>
        </div>
      </div>

      {/* Blue Strip */}
      

      {/* Yellow Strip */}
     

    </section>
  );
}
