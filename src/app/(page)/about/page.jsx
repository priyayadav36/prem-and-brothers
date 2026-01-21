"use client"

export default function AffordableSolar() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
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
              <h2 className="font-bold text-white text-xl mb-3 flex items-center gap-2">
                <span className="text-orange-400">◆</span> Our Vision
              </h2>
              <p className="text-blue-50 text-lg leading-relaxed">
                To install systems to the highest engineering standards while making
                the switch to future energy solutions simple for our customers
                thereby revolutionizing the energy landscape of India. We envision a sustainable tomorrow where
               clean, accessible energy
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

        {/* Know More Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border-t-4 border-orange-500">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
              GET TO KNOW MORE
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-blue-800 max-w-5xl mx-auto">

            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
              <p>
                <span className="font-bold text-blue-950">Prem and Brothers</span>, based in
                Moradabad, is a name synonymous with trust and reliability in the
                power backup and solar energy sector. With over{" "}
                <span className="font-bold text-orange-600">30 years of experience</span>, we
                have been consistently delivering high-quality power solutions to
                homes, businesses, and institutions across the region.
              </p>
            </div>

            <p>
              We are proud to be an{" "}
              <span className="font-bold text-blue-950">
                Authorised Dealer of Luminous and Sukam
              </span>{" "}
              – two of the most trusted brands in inverters, solar systems, and
              batteries. Our product range includes everything from basic home
              inverters to advanced solar power systems, tailored to meet a wide
              range of energy needs.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <p>
                In addition, Prem and Brothers is an{" "}
                <span className="font-bold text-blue-950">
                  Authorised Vendor for the PM Surya Ghar Muft Bijli Yojana
                </span>
                , a prestigious government initiative aimed at providing free
                electricity to households through rooftop solar installations.
                As part of this mission, we help families transition to clean,
                sustainable energy while significantly reducing their electricity
                bills.
              </p>
            </div>

            <p>
              With a strong focus on quality, customer satisfaction, and
              after-sales service, we have built a loyal customer base over three
              decades. Our expert team ensures smooth installation, reliable
              maintenance, and continued support, making the shift to backup and
              solar power simple and stress-free.
            </p>

            <div className="text-center mt-10 p-6 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl shadow-xl">
              <p className="font-bold text-xl text-white">
                When it comes to dependable power solutions in Moradabad, Prem and
                Brothers is the name you can count on.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}