import {
  ShieldCheck,
  IndianRupee,
  Cpu,
  TrendingUp,
} from "lucide-react";

export default function Choose() {
  return (
    <section className="w-full bg-blue-200 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* HEADING (NO LINE BELOW) */}
        <h2 className="text-center text-3xl md:text-5xl font-bold text-blue-950 mb-14">
          WHY <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">CHOOSE US</span>
        </h2>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] p-8 flex gap-6">
            <ShieldCheck className="w-10 h-10 md:w-14 md:h-14 text-orange-500 flex-shrink-0" />
            <div>
              <h3 className="text-lg md:text-2xl text-blue-800 mb-3">
                Quality
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                At Prem And Brothers , we provide cutting-edge solar solutions with
                expert installation and advanced technology. Our commitment to
                efficiency and sustainability ensures maximum savings and a
                greener future for homes and businesses.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] p-8 flex gap-6">
            <IndianRupee className="w-10 h-10 md:w-14 md:h-14 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg md:text-2xl text-blue-800 mb-3">
                Bankability
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                At Prem And Brothers, our reliable and bankable solar solutions ensure
                maximum returns and energy savings. With competitive interest
                rates, we make solar a trusted and smart investment for a
                sustainable future.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] p-8 flex gap-6">
            <Cpu className="w-10 h-10 md:w-14 md:h-14 text-sky-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg md:text-2xl font-semibold text-blue-800 mb-3">
                Technology
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                At Prem And Brothers, we don't just maximize—we OPTIMIZE. Constantly
                innovating, we embrace cutting-edge technology to deliver
                smarter, more efficient solar solutions for a sustainable
                future.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] p-8 flex gap-6">
            <TrendingUp className="w-10 h-10 md:w-14 md:h-14 text-orange-500 flex-shrink-0" />
            <div>
              <h3 className="text-lg md:text-2xl text-blue-800 mb-3">
                Scalability
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                From solar rooftops to utility-scale projects, Yamira Solar
                provides a seamless, end-to-end experience, ensuring expertise
                and reliability at every stage of your solar journey.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}