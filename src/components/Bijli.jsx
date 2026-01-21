import Image from "next/image";

export default function SubsidySection() {
  return (
    <section className="w-full bg-white  py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-blue-950 font-bold text-4xl md:text-6xl leading-tight">
            Avail Subsidy
            Upto ₹1.08 
            Lakhs for 
            solar in Uttar 
            Pradesh
          </h1>

          <p className="mt-6 text-black italic text-lg leading-relaxed">
            At Prem & Brothers, we specialize in providing innovative
            power solutions, ensuring reliable energy for homes and
            businesses with our top-quality inverter batteries and solar panels.
          </p>

          {/* TABLE */}
          <div className="mt-10 overflow-x-auto">
            <table className="border border-gray-700 bg-white">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="border px-4 py-2">Capacity</th>
                  <th className="border px-4 py-2">Central Subsidy</th>
                  <th className="border px-4 py-2">State Subsidy</th>
                  <th className="border px-4 py-2">Total Subsidy</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="border px-4 py-2">1 kW</td>
                  <td className="border px-4 py-2">₹30,000</td>
                  <td className="border px-4 py-2">₹15,000</td>
                  <td className="border px-4 py-2 font-bold text-blue-900">
                    ₹45,000
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2 kW</td>
                  <td className="border px-4 py-2">₹60,000</td>
                  <td className="border px-4 py-2">₹30,000</td>
                  <td className="border px-4 py-2 font-bold text-blue-900">
                    ₹90,000
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">3 kW</td>
                  <td className="border px-4 py-2">₹78,000</td>
                  <td className="border px-4 py-2">₹30,000</td>
                  <td className="border px-4 py-2 font-bold text-blue-900">
                    ₹1,08,000
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Above 3 kW</td>
                  <td className="border px-4 py-2">₹78,000</td>
                  <td className="border px-4 py-2">₹30,000</td>
                  <td className="border px-4 py-2 font-bold text-blue-900">
                    ₹1,08,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT IMAGE WITH TEXT OVERLAY */}
        <div className="relative w-full  rounded-2xl ">
          <img
            src="https://i.pinimg.com/1200x/41/9c/e6/419ce6f5041e2200924e22dfe2afd15c.jpg"   // 👉 image public folder me rakho
            alt="PM Modi Solar Scheme"
            className="object-cover object-center rounded-2xl rounded-br-2xl"
  
          />

          {/* TEXT ON IMAGE */}
          <div className="absolute inset-0 flex flex-col justify-start p-6">
            <h2 className="text-4xl font-extrabold text-black drop-shadow-lg">
            
            </h2>
            <p className="text-xl font-semibold text-black mt-2">
             
            </p>
          </div>

        </div>
        
        
      </div>
      
    </section>
  );
}
