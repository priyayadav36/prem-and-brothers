import Image from "next/image";

export default function SolarSubsidyUP() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      {/* MAIN HEADING */}
      <h1 className="text-center text-3xl md:text-5xl font-extrabold text-blue-800 mb-16">
        Solar Subsidy in Uttar Pradesh (UP) for Residential Users
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://i.pinimg.com/1200x/59/4f/d3/594fd3032b45976aa239a5aba52b3597.jpg"   // 👈 image public folder me rakho
              alt="PM Surya Ghar Yojana UP"
              width={450}
              height={550}
              className="object-cover h-130"
             
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-lg md:text-xl italic text-blue-700 leading-relaxed mb-10">
            Subsidy bhi milegi, savings bhi badhegi – Solar system se UP walon ki life set ho jayegi!
            <br />
            Here is the suitable rooftop solar plant capacity for households:
          </p>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full border border-black bg-white">
              <thead>
                <tr className="bg-indigo-800 text-white text-left">
                  <th className="border border-black px-4 py-3">
                    Average Monthly Electricity Consumption (units)
                  </th>
                  <th className="border border-black px-4 py-3">
                    Suitable Rooftop Solar Plant Capacity
                  </th>
                  <th className="border border-black px-4 py-3">
                    Total Subsidy
                  </th>
                </tr>
              </thead>

              <tbody className="text-black">
                <tr>
                  <td className="border border-black px-4 py-3">0–150</td>
                  <td className="border border-black px-4 py-3">1–2 kW</td>
                  <td className="border border-black px-4 py-3 font-semibold text-blue-700">
                    ₹45,000–90,000
                  </td>
                </tr>

                <tr>
                  <td className="border border-black px-4 py-3">150–300</td>
                  <td className="border border-black px-4 py-3">2–3 kW</td>
                  <td className="border border-black px-4 py-3 font-semibold text-blue-700">
                    ₹90,000–1,08,000
                  </td>
                </tr>

                <tr>
                  <td className="border border-black px-4 py-3">&gt;300</td>
                  <td className="border border-black px-4 py-3">Above 3 kW</td>
                  <td className="border border-black px-4 py-3 font-semibold text-blue-700">
                    ₹1,08,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* BUTTON */}
          
        </div>
      </div>
      <section className="w-full bg-white py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="text-blue-700">
      <p className="text-2xl leading-relaxed mb-8">
        India is moving rapidly towards a greener, more sustainable future.
        One of the biggest steps in this direction is the{" "}
        <span className="font-semibold">
          PM Surya Ghar Muft Bijli Yojana
        </span>{" "}
        – a transformative scheme launched by the Government of India to
        provide free electricity to households by encouraging rooftop solar
        panel installation.
      </p>

      <p className="text-2xl mb-6">
        In this blog, we will cover everything you need to know:
      </p>

      <ul className="list-disc ml-6 space-y-3 text-2xl">
        <li>What is PM Surya Ghar Muft Bijli Yojana?</li>
        <li>Benefits of the Scheme.</li>
        <li>Step-by-Step Registration Process.</li>
        <li>Documents Required.</li>
        <li>
          Why{" "}
          <span className="italic font-semibold">
            Prem and Brothers
          </span>{" "}
          is the Best Vendor for Installation.
        </li>
      </ul>
    </div>

    {/* RIGHT CARD */}
    <div className="flex justify-center">
      <div className="bg-white rounded-[40px] shadow-2xl p-8 w-full max-w-md">

        {/* TITLE */}
        <div className="text-center mb-6">
          <h2 className="text-4xl text-blue-950 font-extrabold">
            Solar = Saving ☀️
          </h2>
          <p className="text-blue-700 mt-4">
            Switch to Solar, Save More!
          </p>
        </div>

        {/* IMAGE (direct, no wrapper div) */}
        <img
          src="https://i.pinimg.com/736x/4e/1c/c7/4e1cc7391bcdb10ac0dc7bc8c4d0aefe.jpg"
          alt="Solar Panels"
          className="w-full object-contain my-6"
        />

        {/* FOOTER TEXT */}
        <p className="text-center font-semibold text-blue-700">
          Solar Energy Solutions
        </p>
      </div>
    </div>

  </div>
</section>

    </section>
   
  );
}
