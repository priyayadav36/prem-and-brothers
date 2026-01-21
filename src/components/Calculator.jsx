"use client";
import { useState, useEffect } from "react";

export default function Calculator() {
  const [capacity, setCapacity] = useState(1);
  const [centralSubsidy, setCentralSubsidy] = useState(30000);
  const [stateSubsidy, setStateSubsidy] = useState(15000);
  const [totalSubsidy, setTotalSubsidy] = useState(45000);

  const subsidyData = {
    1: { central: 30000, state: 15000 },
    2: { central: 60000, state: 30000 },
    3: { central: 78000, state: 30000 },
    4: { central: 78000, state: 30000 },
  };

  useEffect(() => {
    const data = subsidyData[capacity] || subsidyData[4];
    setCentralSubsidy(data.central);
    setStateSubsidy(data.state);
    setTotalSubsidy(data.central + data.state);
  }, [capacity]);

  const formatCurrency = (value) => `₹${value.toLocaleString("en-IN")}`;

  return (
    <div className=" bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* LEFT – CALCULATOR */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
            <h1 className="text-xl sm:text-2xl font-bold text-center text-indigo-900 mb-4">
              SOLAR SUBSIDY CALCULATOR
            </h1>

            {/* Slider */}
            <div className="mb-5">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Capacity</span>
                <span className="font-bold text-indigo-600">{capacity} kW</span>
              </div>

              <input
                type="range"
                min="1"
                max="4"
                step="1"
                value={capacity}
                onChange={(e) => setCapacity(+e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${
                    ((capacity - 1) / 3) * 100
                  }%, #e5e7eb ${((capacity - 1) / 3) * 100}%)`,
                }}
              />

              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1kW</span>
                <span>2kW</span>
                <span>3kW</span>
                <span>4kW+</span>
              </div>
            </div>

            {/* Subsidy Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700">Central</p>
                <p className="font-bold text-blue-900">
                  {formatCurrency(centralSubsidy)}
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-xs text-green-700">State</p>
                <p className="font-bold text-green-900">
                  {formatCurrency(stateSubsidy)}
                </p>
              </div>

              <div className="bg-indigo-50 border border-indigo-300 rounded-lg p-3">
                <p className="text-xs text-indigo-700">Total</p>
                <p className="font-bold text-indigo-900">
                  {formatCurrency(totalSubsidy)}
                </p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-3">
                Subsidy Breakdown
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Capacity</span>
                  <span className="font-medium">{capacity} kW</span>
                </div>
                <div className="flex justify-between">
                  <span>Central</span>
                  <span className="font-medium text-blue-800">
                    {formatCurrency(centralSubsidy)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>State</span>
                  <span className="font-medium text-green-800">
                    {formatCurrency(stateSubsidy)}
                  </span>
                </div>
                <div className="flex justify-between bg-indigo-100 rounded-md px-3 py-2 font-bold">
                  <span>Total</span>
                  <span>{formatCurrency(totalSubsidy)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – INFO */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-4">
              ABOUT SOLAR SUBSIDY
            </h2>

            <div className="space-y-3 text-sm flex-grow">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h3 className="font-semibold text-blue-900 mb-1">
                  Central Scheme
                </h3>
                <p>
                  MNRE provides subsidy for rooftop solar up to 3kW to reduce
                  electricity bills.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <h3 className="font-semibold text-green-900 mb-1">
                  State Benefits
                </h3>
                <p>
                  Additional state subsidies further reduce overall installation
                  cost.
                </p>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
                <h3 className="font-semibold text-indigo-900 mb-1">
                  Key Highlights
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Up to ₹78,000 central subsidy</li>
                  <li>₹30,000 additional state subsidy</li>
                  <li>25+ years panel life</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <h3 className="font-semibold text-orange-900 mb-1">
                  How to Apply
                </h3>
                <p>
                  Apply via National Rooftop Solar Portal or authorized vendors.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
