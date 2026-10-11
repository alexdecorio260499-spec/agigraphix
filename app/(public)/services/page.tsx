import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MOCK_SERVICES } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6 max-w-7xl mb-24">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-agigraphix-black mb-6">
          WHAT WE MAKE.
        </h1>
        <p className="text-lg md:text-xl text-agigraphix-charcoal max-w-2xl">
          From high-impact signage to bespoke displays and complete event installations.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="space-y-24">
          {MOCK_SERVICES.map((service, i) => (
            <div key={service.id} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2 aspect-video relative rounded overflow-hidden shadow-lg">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-agigraphix-black mb-6">
                  {service.name}
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.capabilities.slice(0, 6).map((cap, j) => (
                    <li key={j} className="flex items-center text-sm font-medium text-gray-700">
                      <div className="w-1.5 h-1.5 bg-agigraphix-red rounded-full mr-3" />
                      {cap}
                    </li>
                  ))}
                </ul>
                <div>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="inline-flex items-center font-bold text-agigraphix-black hover:text-agigraphix-red transition-colors group"
                  >
                    View {service.name} Details <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
