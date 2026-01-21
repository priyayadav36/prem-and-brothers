"use client";

import {
  FaHome,
  FaSolarPanel,
  FaLightbulb,
  FaWater,
} from "react-icons/fa";

export default function OurSolutions() {
  return (
    <section className="w-full bg-gradient-to-b from-[#061b3a] to-[#031026] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            OUR <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">SOLUTIONS</span>
          </h2>
          <p className="mt-4 text-gray-300 tracking-wide">
           Prem And Brothers  have specialized solar system in various categories
          </p>
        </div>

        {/* WHITE CARD */}
        <div className="bg-white rounded-sm shadow-lg px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 text-center">

            {/* ITEM 1 */}
            <div>
              <FaHome className="text-[#3a4e63] text-6xl mx-auto mb-6" />
              <h3 className="text-lg font-serif tracking-wide mb-4">
                ROOFTOP PROJECTS
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Electrosol provides a wide range of customized solar PV
                installation from concept and design to commissioning for
                residential and commercial application. These installations can
                be designed based on the need of the customer and installed at
                site by our experts.
              </p>
            </div>

            {/* ITEM 2 */}
            <div>
              <FaSolarPanel className="text-[#3a4e63] text-6xl mx-auto mb-6" />
              <h3 className="text-lg font-serif tracking-wide mb-4">
                SOLAR PUMP
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are providing a large variety of solar pumping systems from
                agriculture to water distribution systems. These systems have
                no running cost and very long and hassle free operation.
              </p>
            </div>

            {/* ITEM 3 */}
            <div>
              <FaLightbulb className="text-[#3a4e63] text-6xl mx-auto mb-6" />
              <h3 className="text-lg font-serif tracking-wide mb-4">
                STREET LIGHT
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                LED based street light is the most efficient and long lasting
                lighting solution. Key features include high efficient solar
                charge controller, automatic dawn dusk operation, short circuit
                protection.
              </p>
            </div>

            {/* ITEM 4 */}
            <div>
              <FaWater className="text-[#3a4e63] text-6xl mx-auto mb-6" />
              <h3 className="text-lg font-serif tracking-wide mb-4">
                SOLAR WATER HEATER
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are providing both ETC and FPC solar water heating solution
                for domestic to commercial purposes. These system are coming
                with free installation and 60 months on-site warranty.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
