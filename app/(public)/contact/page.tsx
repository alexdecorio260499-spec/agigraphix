import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Left Column - Info */}
          <div className="w-full md:w-1/3">
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-agigraphix-black mb-6 leading-none">
              START A <br /><span className="text-agigraphix-red">PROJECT</span>
            </h1>
            <p className="text-lg text-agigraphix-charcoal mb-12">
              Have something in mind? Tell us about your project and we'll help turn the idea into reality.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-agigraphix-red mr-4 mt-1" />
                <div>
                  <h3 className="font-bold uppercase tracking-wide text-agigraphix-black mb-1">Visit Us</h3>
                  <p className="text-gray-600">6 Wellington Street<br />Rose-Hill, Mauritius</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-agigraphix-red mr-4 mt-1" />
                <div>
                  <h3 className="font-bold uppercase tracking-wide text-agigraphix-black mb-1">Call Us</h3>
                  <p className="text-gray-600">+230 465 1111</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-agigraphix-red mr-4 mt-1" />
                <div>
                  <h3 className="font-bold uppercase tracking-wide text-agigraphix-black mb-1">Email Us</h3>
                  <p className="text-gray-600">hello@agigraphix.mu</p>
                </div>
              </div>
            </div>
            
            {/* Dummy Map Area */}
            <div className="mt-12 w-full h-48 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-gray-400 font-medium">
              Interactive Map Placeholder
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full md:w-2/3 bg-agigraphix-soft-white p-8 md:p-12 rounded shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wide text-agigraphix-black mb-2">Name</label>
                  <input type="text" id="name" className="w-full p-4 border border-gray-200 rounded focus:border-agigraphix-red focus:ring-1 focus:ring-agigraphix-red outline-none transition-all bg-white" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-bold uppercase tracking-wide text-agigraphix-black mb-2">Company</label>
                  <input type="text" id="company" className="w-full p-4 border border-gray-200 rounded focus:border-agigraphix-red focus:ring-1 focus:ring-agigraphix-red outline-none transition-all bg-white" placeholder="Company Name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wide text-agigraphix-black mb-2">Email</label>
                  <input type="email" id="email" className="w-full p-4 border border-gray-200 rounded focus:border-agigraphix-red focus:ring-1 focus:ring-agigraphix-red outline-none transition-all bg-white" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wide text-agigraphix-black mb-2">Phone</label>
                  <input type="tel" id="phone" className="w-full p-4 border border-gray-200 rounded focus:border-agigraphix-red focus:ring-1 focus:ring-agigraphix-red outline-none transition-all bg-white" placeholder="+230 5000 0000" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold uppercase tracking-wide text-agigraphix-black mb-2">Service Required</label>
                <select id="service" className="w-full p-4 border border-gray-200 rounded focus:border-agigraphix-red focus:ring-1 focus:ring-agigraphix-red outline-none transition-all bg-white appearance-none">
                  <option value="">Select a service...</option>
                  <option value="signage">Signage</option>
                  <option value="printing">Large Format Printing</option>
                  <option value="displays">Displays & Fabrication</option>
                  <option value="events">Events & Exhibitions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-bold uppercase tracking-wide text-agigraphix-black mb-2">Timeline</label>
                <input type="text" id="timeline" className="w-full p-4 border border-gray-200 rounded focus:border-agigraphix-red focus:ring-1 focus:ring-agigraphix-red outline-none transition-all bg-white" placeholder="e.g., ASAP, next month, Q3" />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-bold uppercase tracking-wide text-agigraphix-black mb-2">Project Description</label>
                <textarea id="description" rows={5} className="w-full p-4 border border-gray-200 rounded focus:border-agigraphix-red focus:ring-1 focus:ring-agigraphix-red outline-none transition-all bg-white resize-none" placeholder="Tell us about your project requirements..." />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide text-agigraphix-black mb-2">File Upload (Optional)</label>
                <div className="w-full p-8 border-2 border-dashed border-gray-300 rounded text-center hover:border-agigraphix-red transition-colors cursor-pointer bg-white">
                  <p className="text-gray-500 font-medium">Click to upload files or drag and drop</p>
                  <p className="text-xs text-gray-400 mt-2">PDF, JPG, PNG up to 10MB</p>
                </div>
              </div>

              <button type="button" className="w-full bg-agigraphix-black text-white font-bold py-5 rounded uppercase tracking-widest hover:bg-agigraphix-red hover:text-agigraphix-black transition-colors text-lg mt-4">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
