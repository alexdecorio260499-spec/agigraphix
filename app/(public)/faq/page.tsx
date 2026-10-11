"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "Do you offer installation?",
    answer: "Yes, our team handles professional installation across Mauritius for all our signage, display, and event products. We ensure safe and precise mounting tailored to your location."
  },
  {
    question: "Can you manufacture custom designs?",
    answer: "Absolutely. Bespoke fabrication is our specialty. We work with various materials including acrylic, metal, PVC, and wood to create custom shapes, letters, and displays based on your requirements."
  },
  {
    question: "Can I provide my own design?",
    answer: "Yes, you can supply your own ready-to-print or ready-to-manufacture designs. Our technical team will review the files to ensure they meet the production specifications."
  },
  {
    question: "What file formats do you accept?",
    answer: "We prefer vector files (AI, EPS, PDF, SVG) for signage and cutting jobs to ensure clean edges. For large-format printing, high-resolution PDFs or TIFFs are recommended."
  },
  {
    question: "Do you work on large-scale projects?",
    answer: "Yes, we have the capacity and experience to handle large-scale corporate rollouts, hotel rebranding, shopping mall signage, and major event installations."
  },
  {
    question: "How long does a project take?",
    answer: "Timelines vary depending on the complexity, scale, and material availability. Simple printing might take a few days, while bespoke illuminated signage or large event setups require proper planning and production lead times. We provide a timeline estimate with every quote."
  }
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-agigraphix-black mb-16 text-center">
          FAQ
        </h1>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className="border border-gray-200 rounded overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                onClick={() => toggleOpen(i)}
              >
                <span className="text-xl font-bold text-agigraphix-black pr-8">{faq.question}</span>
                {openIndex === i ? (
                  <Minus className="text-agigraphix-red w-6 h-6 flex-shrink-0" />
                ) : (
                  <Plus className="text-agigraphix-black w-6 h-6 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
