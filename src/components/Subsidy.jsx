import Image from "next/image";

export default function Subsidy() {
  return (
    <section className="w-full bg-blue-200 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-2 relative">
                AFFORDABLE
              
              </h2>
            </div>
            <h3 className="text-2xl tracking-widest text-orange-500 font-semibold">
              SOLAR POWER SYSTEM
            </h3>

         

            <p className="text-blue-800 text-lg leading-relaxed">
              <span className="font-bold text-blue-950">Prem And Brothers</span> is a Future
              Energy Solutions company led by a team of entrepreneurs having an
              indepth understanding of consumer behavior across multi-dimensional
              backgrounds.
            </p>

            <p className="text-blue-800 text-lg leading-relaxed">
              <span className="font-bold text-blue-950">Prem And Brothers</span> is constantly
              working to keep pace with rapid technological evolution and deliver
              quality product and service.
            </p>

            <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-6 rounded-2xl shadow-xl mt-8">
              <h2 className="font-bold text-white text-xl mb-3 flex items-center gap-1">
                <span className="text-orange-400">◆</span> Our Vision
              </h2>
              <p className="text-blue-50 text-lg leading-relaxed">
                To install systems to the highest engineering standards while making
                the switch to future energy solutions simple for our customers
                thereby revolutionizing the energy landscape of India.
                We envision a sustainable tomorrow where clean, accessible energy
              empowers every home and business.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://i.pinimg.com/736x/71/d3/d2/71d3d24e33a65e94cd2caf1830569198.jpg"
                alt="Solar Engineer"
                className="object-cover w-full h-80"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://i.pinimg.com/736x/ee/49/f0/ee49f05e749f46cf9e2b2d1a2465b973.jpg"
                alt="Solar Panels"
                className="object-cover w-full h-64"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://i.pinimg.com/1200x/ca/97/dd/ca97dd67d0e3ab4d1b8213050366a0b4.jpg"
                alt="Thermal System"
                className="object-cover w-full h-64"
              />
            </div>
            </div>
       
      </div>
    </section>
  );
}
