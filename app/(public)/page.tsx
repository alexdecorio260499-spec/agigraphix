import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-agigraphix-black">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-agigraphix-black/60 to-agigraphix-black" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            We Make <br />
            Brands <span className="text-agigraphix-red">Visible.</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium tracking-widest text-white/80 uppercase mb-8">
            Signage &middot; Displays &middot; Printing &middot; Events
          </p>
          <p className="max-w-2xl mx-auto text-white/70 text-lg md:text-xl mb-12">
            From bespoke signage and large-format printing to displays and branded environments, we turn ideas into physical experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/work" 
              className="px-8 py-4 bg-white text-agigraphix-black font-bold rounded hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Explore Our Work <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-agigraphix-red text-white font-bold rounded hover:bg-red-700 transition-colors inline-flex items-center"
            >
              Start a Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
          <span className="text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Scroll</span>
          <ArrowRight className="w-4 h-4 text-white/50 rotate-90" />
        </div>
      </section>

      {/* 2. SELECTED WORK */}
      <section className="min-h-screen flex flex-col justify-center py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-agigraphix-black">Selected Work</h2>
              <p className="text-agigraphix-charcoal text-lg">A selection of projects brought to life by Agigraphix.</p>
            </div>
            <Link href="/work" className="hidden md:inline-flex items-center font-bold text-agigraphix-black hover:text-agigraphix-red transition-colors group">
              View All Projects <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Hotel Signage", category: "Hospitality", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop" },
              { title: "Retail Branding", category: "Retail", image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop" },
              { title: "Corporate HQ", category: "Corporate", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
              { title: "Event Setup", category: "Events", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" },
            ].map((work, i) => (
              <Link href={`/work/placeholder-${i}`} key={i} className="group cursor-pointer block overflow-hidden rounded bg-gray-100 relative aspect-[3/4]">
                <div className="absolute inset-0">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${work.image}')` }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
                  <p className="text-agigraphix-red text-xs font-bold uppercase tracking-widest mb-1">{work.category}</p>
                  <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">{work.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 md:hidden">
            <Link href="/work" className="inline-flex items-center font-bold text-agigraphix-black w-full justify-center py-4 border border-gray-200 rounded">
              View All Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3 & 4. SERVICES AND STATS */}
      <section className="min-h-screen flex flex-col justify-center py-16 relative bg-agigraphix-black text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-10 grayscale mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 z-0 bg-agigraphix-black/90" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
              Built for brands <br />
              <span className="text-agigraphix-red">that want to be seen.</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl">
              From high-impact signage to bespoke displays and complete event installations, we create physical brand experiences built around your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {[
              { title: "SIGNAGE", desc: "Make your brand impossible to miss.", link: "/services/signage", img: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1974&auto=format&fit=crop" },
              { title: "LARGE FORMAT PRINTING", desc: "Big ideas deserve to be seen.", link: "/services/large-format-printing", img: "https://images.unsplash.com/photo-1626784215001-3832c3e1e2d4?q=80&w=2070&auto=format&fit=crop" },
              { title: "DISPLAYS & FABRICATION", desc: "Custom displays built around your brand.", link: "/services/displays-fabrication", img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974&auto=format&fit=crop" },
              { title: "EVENTS & EXHIBITIONS", desc: "Turn an empty space into a branded experience.", link: "/services/events", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop" },
            ].map((service, i) => (
              <Link href={service.link} key={i} className="group relative rounded overflow-hidden aspect-video md:aspect-[4/3] flex flex-col justify-end p-5">
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${service.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 z-10 opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-20 mt-auto">
                  <h3 className="text-lg font-bold uppercase tracking-wide mb-1 group-hover:text-agigraphix-red transition-colors">{service.title}</h3>
                  <p className="text-xs text-white/90 mb-3">{service.desc}</p>
                  <div className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-white/70 group-hover:text-agigraphix-red transition-colors">
                    Explore <ArrowRight className="ml-2 w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="border-t border-white/20 pt-8 mt-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6 text-center md:text-left">Trusted by brands across Mauritius.</h2>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-12 opacity-50 grayscale">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="text-xl font-black text-white uppercase tracking-tighter">
                  CLIENT {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* 6. INDUSTRIES */}
      <section id="industries" className="min-h-screen flex flex-col justify-center py-8 md:py-12 bg-agigraphix-soft-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 md:mb-8 text-agigraphix-black text-center md:text-left">
            Built for different spaces.
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {[
              { name: "Corporate", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
              { name: "Retail", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" },
              { name: "Hospitality", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" },
              { name: "Events", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" },
              { name: "Commercial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
              { name: "Public Spaces", img: "https://images.unsplash.com/photo-1521735438841-382a93b4e94b?q=80&w=2070&auto=format&fit=crop" },
            ].map((industry, i) => (
              <div key={i} className="group relative rounded overflow-hidden aspect-[16/9] md:aspect-[16/8] lg:aspect-[16/7] bg-agigraphix-black cursor-pointer">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${industry.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center z-20">
                  <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wide group-hover:-translate-y-1 transition-transform duration-300">
                    {industry.name}
                  </h3>
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-20">
                  <ArrowRight className="text-agigraphix-red w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA & STATS */}
      <section className="relative min-h-screen flex flex-col justify-center items-center py-8 md:py-12 bg-agigraphix-black text-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-agigraphix-black to-transparent" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center justify-center">
          <div className="mb-8 md:mb-10 w-full max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-3 md:mb-4 leading-tight">
              Have a project <br /> in mind?
            </h2>
            <p className="text-base md:text-lg font-medium text-white/80 mb-6 md:mb-8">Let's make it visible.</p>
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-agigraphix-red text-white font-bold rounded text-base hover:bg-red-700 transition-colors inline-flex items-center shadow-lg"
            >
              Start a Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="w-full border-t border-white/20 pt-8 md:pt-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
              {[
                { stat: "25+ YEARS", desc: "Industry experience" },
                { stat: "BESPOKE", desc: "Tailored to your project" },
                { stat: "IN-HOUSE PRODUCTION", desc: "From concept to finished product" },
                { stat: "PRECISION", desc: "Modern equipment & techniques" },
              ].map((item, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="w-8 md:w-10 h-1 bg-agigraphix-red mb-2 md:mb-3 mx-auto md:mx-0" />
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide mb-1 text-white">{item.stat}</h3>
                  <p className="text-xs md:text-sm text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
