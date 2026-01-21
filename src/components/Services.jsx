'use client';
import Link from 'next/link';

import { useState } from 'react';
import { Sun, Zap, Home, Battery, Users, TrendingUp, Shield, Wrench } from 'lucide-react';

const services = [
  {
    icon: Sun,
    title: 'Solar Panel Installation',
    description: 'Professional installation of high-efficiency solar panels tailored to your energy needs.',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Battery,
    title: 'Battery Storage',
    description: 'Advanced energy storage solutions to power your home day and night.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Home,
    title: 'Residential Solar',
    description: 'Custom solar solutions designed specifically for your home and lifestyle.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Commercial Solar',
    description: 'Scalable solar systems to reduce operating costs for businesses.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repair',
    description: 'Expert maintenance services to keep your solar system running optimally.',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: TrendingUp,
    title: 'Energy Monitoring',
    description: 'Real-time tracking and analytics to maximize your energy efficiency.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Shield,
    title: 'Warranty & Support',
    description: 'Comprehensive warranty coverage and 24/7 customer support services.',
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: Users,
    title: 'Consultation',
    description: 'Free expert consultation to design the perfect solar solution for you.',
    color: 'from-yellow-500 to-amber-500'
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl  font-bold text-white mb-4 tracking-tight">
            OUR <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">SOLAR SERVICES</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Empowering your future with clean, renewable energy solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 transition-all duration-300 hover:border-slate-600 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-b-2xl transition-all duration-300 ${hoveredIndex === index ? 'w-full' : 'w-0'}`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link href="/contact">
  <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105">
    <span className="relative z-10">Get Started Today</span>
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </button>
</Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}} />
    </div>
  );
}