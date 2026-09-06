import { useState } from "react";
import { ChevronDown, ArrowRight, Briefcase, Utensils, GraduationCap, ShoppingBag, Truck, Factory, Home, Shield, Plane, Heart, Ghost, Scale, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu: string) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="w-full relative z-[100] bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <nav 
        className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between relative"
        onMouseLeave={handleMouseLeave}
      >
        <a href="/" className="flex items-center">
          <img src="/logo.jpg" alt="Sanestix" className="h-10 lg:h-12 w-auto mix-blend-multiply dark:hidden" />
          <img src="/logo-dark.jpg" alt="Sanestix" className="h-14 lg:h-16 w-auto mix-blend-screen hidden dark:block" />
        </a>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-800 dark:text-slate-200 relative z-20">
          {/* SERVICES */}
          <div className="group py-4" onMouseEnter={() => handleMouseEnter('services')}>
            <a href="#" className="flex items-center gap-1 hover:text-[#00bfff] dark:hover:text-[#00bfff] transition-colors">
              Services {activeMenu === 'services' ? <ChevronDown className="w-3 h-3 rotate-180 transition-transform" /> : <ChevronDown className="w-3 h-3 transition-transform" />}
            </a>
          </div>

          {/* SOLUTIONS */}
          <div className="group py-4" onMouseEnter={() => handleMouseEnter('expertise')}>
            <a href="#" className="flex items-center gap-1 hover:text-[#00bfff] transition-colors">
              Solutions {activeMenu === 'expertise' ? <ChevronDown className="w-3 h-3 rotate-180 transition-transform" /> : <ChevronDown className="w-3 h-3 transition-transform" />}
            </a>
          </div>

          {/* INDUSTRIES */}
          <div className="group py-4" onMouseEnter={() => handleMouseEnter('industries')}>
            <a href="#" className="flex items-center gap-1 hover:text-[#00bfff] transition-colors">
              Industries {activeMenu === 'industries' ? <ChevronDown className="w-3 h-3 rotate-180 transition-transform" /> : <ChevronDown className="w-3 h-3 transition-transform" />}
            </a>
          </div>

          {/* COMPANY */}
          <div className="group py-4" onMouseEnter={() => handleMouseEnter('company')}>
            <a href="#" className="flex items-center gap-1 hover:text-[#00bfff] transition-colors">
              Company {activeMenu === 'company' ? <ChevronDown className="w-3 h-3 rotate-180 transition-transform" /> : <ChevronDown className="w-3 h-3 transition-transform" />}
            </a>
          </div>

          {/* RESOURCES */}
          <div className="group py-4" onMouseEnter={() => handleMouseEnter('insights')}>
            <a href="#" className="flex items-center gap-1 hover:text-[#00bfff] transition-colors">
              Resources {activeMenu === 'insights' ? <ChevronDown className="w-3 h-3 rotate-180 transition-transform" /> : <ChevronDown className="w-3 h-3 transition-transform" />}
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4 relative z-20">
          <ThemeToggle />
          <a href="/contact" className="hidden md:flex">
            <Button className="bg-[#0a0f1c] hover:bg-black text-white rounded-lg px-6 text-sm h-10 font-semibold">
              Book a Free Call <ArrowRight className="ml-2 w-4 h-4 text-white/70" />
            </Button>
          </a>
          <button onClick={toggleMobileMenu} className="lg:hidden w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <Menu className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 shadow-2xl z-[100] lg:hidden flex flex-col p-6 overflow-y-auto transition-colors duration-300" style={{ maxHeight: 'calc(100vh - 80px)' }}>
            
            <details className="group border-b border-slate-100 dark:border-slate-800 py-2">
              <summary className="flex items-center justify-between text-lg font-bold text-slate-900 dark:text-white py-3 cursor-pointer list-none">
                Services <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="flex flex-col gap-3 pb-4 pl-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                <a href="/services/ai-agents" className="hover:text-[#00bfff] transition-colors py-1">AI Agents</a>
                <a href="/services/custom-workflows" className="hover:text-[#00bfff] transition-colors py-1">Automation</a>
                <a href="/services/custom-software-development" className="hover:text-[#00bfff] transition-colors py-1">Custom Software</a>
                <a href="/services/ai-integration-services" className="hover:text-[#00bfff] transition-colors py-1">Integrations</a>
              </div>
            </details>

            <details className="group border-b border-slate-100 dark:border-slate-800 py-2">
              <summary className="flex items-center justify-between text-lg font-bold text-slate-900 dark:text-white py-3 cursor-pointer list-none">
                Solutions <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="flex flex-col gap-3 pb-4 pl-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                <a href="/solutions/lead-capture" className="hover:text-[#00bfff] transition-colors py-1">Lead Capture</a>
                <a href="/solutions/customer-support" className="hover:text-[#00bfff] transition-colors py-1">Customer Support</a>
                <a href="/solutions/onboarding" className="hover:text-[#00bfff] transition-colors py-1">Client Onboarding</a>
                <a href="/solutions/data-entry" className="hover:text-[#00bfff] transition-colors py-1">Data Entry</a>
              </div>
            </details>

            <details className="group border-b border-slate-100 dark:border-slate-800 py-2">
              <summary className="flex items-center justify-between text-lg font-bold text-slate-900 dark:text-white py-3 cursor-pointer list-none">
                Industries <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="flex flex-col gap-3 pb-4 pl-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                <a href="/industries/b2b-services" className="hover:text-[#00bfff] transition-colors py-1">B2B Services</a>
                <a href="/industries/healthcare" className="hover:text-[#00bfff] transition-colors py-1">Healthcare</a>
                <a href="/industries/real-estate" className="hover:text-[#00bfff] transition-colors py-1">Real Estate</a>
                <a href="/industries/fashion-retail" className="hover:text-[#00bfff] transition-colors py-1">Fashion & Retail</a>
              </div>
            </details>

            <details className="group border-b border-slate-100 dark:border-slate-800 py-2">
              <summary className="flex items-center justify-between text-lg font-bold text-slate-900 dark:text-white py-3 cursor-pointer list-none">
                Company <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="flex flex-col gap-3 pb-4 pl-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                <a href="/about-us" className="hover:text-[#00bfff] transition-colors py-1">About Us</a>
                <a href="/team" className="hover:text-[#00bfff] transition-colors py-1">Team</a>
                <a href="/careers" className="hover:text-[#00bfff] transition-colors py-1">Careers</a>
                <a href="/contact" className="hover:text-[#00bfff] transition-colors py-1">Contact</a>
              </div>
            </details>

            <details className="group border-b border-slate-100 dark:border-slate-800 py-2">
              <summary className="flex items-center justify-between text-lg font-bold text-slate-900 dark:text-white py-3 cursor-pointer list-none">
                Resources <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="flex flex-col gap-3 pb-4 pl-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                <a href="/blog" className="hover:text-[#00bfff] transition-colors py-1">Blog</a>
                <a href="/case-studies" className="hover:text-[#00bfff] transition-colors py-1">Case Studies</a>
                <a href="/guides" className="hover:text-[#00bfff] transition-colors py-1">Guides</a>
              </div>
            </details>

            <a href="/contact" className="mt-8 mb-4">
              <Button className="w-full bg-[#0a0f1c] dark:bg-white hover:bg-black dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-xl py-6 text-base font-bold shadow-lg">
                Book a Free Call
              </Button>
            </a>
          </div>
        )}

        {/* MEGA MENUS */}
        <div className={`hidden lg:block absolute top-full left-0 w-full pt-4 transition-all duration-300 origin-top ${activeMenu ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
          <div className="bg-[#0a0c10] rounded-2xl border border-white/5 shadow-2xl overflow-hidden mx-6 lg:mx-12 max-w-[1600px] xl:mx-auto">
          
          {/* SERVICES MENU */}
          {activeMenu === 'services' && (
            <div className="flex">
              {/* Left Panel */}
              <div className="w-[30%] p-10 border-r border-white/5 flex flex-col items-start">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#00bfff]"></div>
                  <span className="text-xs font-bold text-[#00bfff] tracking-widest uppercase">Services</span>
                </div>
                <h3 className="text-white font-bold text-2xl leading-tight mb-4">
                  Build intelligent systems that sell, support, and scale.
                </h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Explore Sanestix services by outcome, platform, and automation layer.
                </p>
                <Button variant="outline" className="mt-auto rounded-lg border-white/10 text-white hover:bg-white/5 hover:text-white bg-transparent h-10">
                  View all services <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              {/* Right Panel */}
              <div className="w-[70%] p-10 grid grid-cols-3 gap-8">
                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-slate-300 text-sm mb-4">AI Solutions</h4>
                    <ul className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                      <li><a href="/services/custom-ai-development" className="hover:text-white transition-colors">Custom AI Development</a></li>
                      <li><a href="/services/machine-learning-solutions" className="hover:text-white transition-colors">Machine Learning Solutions</a></li>
                      <li><a href="/services/computer-vision" className="hover:text-white transition-colors">Computer Vision</a></li>
                      <li><a href="/services/ai-integration-services" className="hover:text-white transition-colors">AI Integration Services</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-slate-300 text-sm mb-4">Mobile App Development</h4>
                    <ul className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                      <li><a href="/services/android-application" className="hover:text-white transition-colors">Android Application</a></li>
                      <li><a href="/services/ios-application" className="hover:text-white transition-colors">iOS Application</a></li>
                      <li><a href="/services/cross-platform-apps" className="hover:text-white transition-colors">Cross-Platform Apps</a></li>
                      <li><a href="/services/flutter-development" className="hover:text-white transition-colors">Flutter Development</a></li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-slate-300 text-sm mb-4">Generative & Agentic AI</h4>
                    <ul className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                      <li><a href="/services/generative-ai-development" className="hover:text-white transition-colors">Generative AI Development</a></li>
                      <li><a href="/services/ai-agents" className="hover:text-white transition-colors">AI Agents</a></li>
                      <li><a href="/services/llm-integration" className="hover:text-white transition-colors">LLM Integration</a></li>
                      <li><a href="/services/rag-knowledge-systems" className="hover:text-white transition-colors">RAG & Knowledge Systems</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-slate-300 text-sm mb-4">Web Development</h4>
                    <ul className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                      <li><a href="/services/custom-websites" className="hover:text-white transition-colors">Custom Websites</a></li>
                      <li><a href="/services/wordpress-development" className="hover:text-white transition-colors">WordPress Development</a></li>
                      <li><a href="/services/shopify-development" className="hover:text-white transition-colors">Shopify Development</a></li>
                      <li><a href="/services/web-application-development" className="hover:text-white transition-colors">Web Application Development</a></li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-slate-300 text-sm mb-4">Software Development</h4>
                    <ul className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                      <li><a href="/services/custom-software-development" className="hover:text-white transition-colors">Custom Software Development</a></li>
                      <li><a href="/services/saas-development" className="hover:text-white transition-colors">SaaS Development</a></li>
                      <li><a href="/services/mvp-development" className="hover:text-white transition-colors">MVP Development</a></li>
                      <li><a href="/services/legacy-application-modernization" className="hover:text-white transition-colors">Legacy Application Modernization</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-slate-300 text-sm mb-4">Automation Solutions</h4>
                    <ul className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                      <li><a href="/services/ai-calling-agent" className="hover:text-white transition-colors">AI Calling Agent</a></li>
                      <li><a href="/services/ai-website-development" className="hover:text-white transition-colors">AI Website Development</a></li>
                      <li><a href="/services/smart-chatbot-integration" className="hover:text-white transition-colors">Smart Chatbot Integration</a></li>
                      <li><a href="/services/whatsapp-automation" className="hover:text-white transition-colors">WhatsApp Automation</a></li>
                      <li><a href="/services/instagram-automation" className="hover:text-white transition-colors">Instagram Automation</a></li>
                      <li><a href="/services/crm-integration" className="hover:text-white transition-colors">CRM Integration</a></li>
                      <li><a href="/services/e-commerce-automation" className="hover:text-white transition-colors">E-Commerce Automation</a></li>
                      <li><a href="/services/lead-generation-systems" className="hover:text-white transition-colors">Lead Generation Systems</a></li>
                      <li><a href="/services/custom-workflows" className="hover:text-white transition-colors">Custom Workflows</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EXPERTISE MENU */}
          {activeMenu === 'expertise' && (
            <div className="flex min-h-[300px]">
              <div className="w-[30%] p-10 border-r border-white/5 flex flex-col items-start">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#00bfff]"></div>
                  <span className="text-xs font-bold text-[#00bfff] tracking-widest uppercase">Expertise</span>
                </div>
                <h3 className="text-white font-bold text-2xl leading-tight mb-4">
                  Specialized AI execution for growth-focused teams.
                </h3>
                <Button variant="outline" className="mt-auto rounded-lg border-white/10 text-white hover:bg-white/5 hover:text-white bg-transparent h-10">
                  See live AI demo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="w-[70%] p-10 grid grid-cols-2 gap-8 items-start content-start">
                  <ul className="flex flex-col gap-6 text-[15px] text-white font-semibold">
                    <li><a href="/services/ai-calling-agent" className="hover:text-[#00bfff] transition-colors block">AI Calling Agent</a></li>
                    <li><a href="/services/ai-automation" className="hover:text-[#00bfff] transition-colors block">AI Automation</a></li>
                    <li><a href="/services/ai-website-development" className="hover:text-[#00bfff] transition-colors block">AI Website Development</a></li>
                    <li><a href="/services/smart-chatbot-integration" className="hover:text-[#00bfff] transition-colors block">Smart Chatbot Integration</a></li>
                  </ul>
                  <ul className="flex flex-col gap-6 text-[15px] text-white font-semibold">
                    <li><a href="/services/whatsapp-automation" className="hover:text-[#00bfff] transition-colors block">WhatsApp Automation</a></li>
                    <li><a href="/services/instagram-automation" className="hover:text-[#00bfff] transition-colors block">Instagram Automation</a></li>
                    <li><a href="/services/crm-integration" className="hover:text-[#00bfff] transition-colors block">CRM Integration</a></li>
                    <li><a href="/services/e-commerce-automation" className="hover:text-[#00bfff] transition-colors block">E-Commerce Automation</a></li>
                  </ul>
              </div>
            </div>
          )}

          {/* INDUSTRIES MENU */}
          {activeMenu === 'industries' && (
            <div className="flex min-h-[300px]">
              <div className="w-[25%] p-10 border-r border-white/5 flex flex-col items-start">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#00bfff]"></div>
                  <span className="text-xs font-bold text-[#00bfff] tracking-widest uppercase">Industries</span>
                </div>
                <h3 className="text-white font-bold text-2xl leading-tight mb-4">
                  Automation playbooks by vertical.
                </h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Built around the real conversations your customers already have.
                </p>
              </div>
              <div className="w-[75%] p-10 grid grid-cols-4 gap-8">
                <div className="flex flex-col gap-8 text-[13px] text-white font-semibold">
                  <a href="/industries/b2b-services" className="flex items-center gap-3 hover:text-[#00bfff] transition-colors"><Briefcase className="w-5 h-5 text-[#00bfff]" /> B2B Services</a>
                  <a href="/industries/food-restaurants" className="flex items-center gap-3 hover:text-[#00bfff] transition-colors"><Utensils className="w-5 h-5 text-[#00bfff]" /> Food & Restaurants</a>
                  <a href="/industries/education" className="flex items-center gap-3 hover:text-[#00bfff] transition-colors"><GraduationCap className="w-5 h-5 text-[#00bfff]" /> Education</a>
                </div>
                <div className="flex flex-col gap-8 text-[13px] text-white font-semibold">
                  <a href="/industries/fashion-retail" className="flex items-center gap-3 hover:text-[#00bfff] transition-colors"><ShoppingBag className="w-5 h-5 text-[#00bfff]" /> Fashion & Retail</a>
                  <a href="/industries/logistics" className="flex items-center gap-3 hover:text-[#00bfff] transition-colors"><Truck className="w-5 h-5 text-[#00bfff]" /> Logistics</a>
                  <a href="/industries/manufacturing" className="flex items-center gap-3 hover:text-[#00bfff] transition-colors"><Factory className="w-5 h-5 text-[#00bfff]" /> Manufacturing</a>
                </div>
                <div className="flex flex-col gap-8 text-[13px] text-white font-semibold">
                  <a href="/industries/real-estate" className="flex items-center gap-3 hover:text-[#00bfff] transition-colors"><Home className="w-5 h-5 text-[#00bfff]" /> Real Estate</a>
                  <a href="/industries/finance-insurance" className="flex items-center gap-3 hover:text-[#00bfff] transition-colors"><Shield className="w-5 h-5 text-[#00bfff]" /> Finance & Insurance</a>
                  <a href="/industries/travel" className="flex items-center gap-3 hover:text-[#00bfff] transition-colors"><Plane className="w-5 h-5 text-[#00bfff]" /> Travel</a>
                </div>
                <div className="flex flex-col gap-8 text-[13px] text-white font-semibold">
                  <a href="/industries/healthcare" className="flex items-center gap-3 hover:text-[#00bfff] transition-colors"><Heart className="w-5 h-5 text-[#00bfff]" /> Healthcare</a>
                  <a href="/industries/death-care" className="flex items-center gap-3 hover:text-[#00bfff] transition-colors"><Ghost className="w-5 h-5 text-[#00bfff]" /> Death Care</a>
                  <a href="/industries/legal-finance" className="flex items-center gap-3 hover:text-[#00bfff] transition-colors"><Scale className="w-5 h-5 text-[#00bfff]" /> Legal & Finance</a>
                </div>
              </div>
            </div>
          )}

          {/* COMPANY MENU */}
          {activeMenu === 'company' && (
            <div className="flex min-h-[250px]">
              <div className="w-[25%] p-10 border-r border-white/5 flex flex-col items-start justify-center">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#00bfff]"></div>
                  <span className="text-xs font-bold text-[#00bfff] tracking-widest uppercase">Company</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Meet the team and the operating system behind Sanestix delivery.
                </p>
              </div>
                <div className="w-[75%] p-10 flex items-center justify-between px-16">
                  <a href="/about-us" className="text-white font-bold text-lg hover:text-[#00bfff] transition-colors">About Us</a>
                  <a href="/testimonials" className="text-white font-bold text-lg hover:text-[#00bfff] transition-colors">Testimonials</a>
                  <a href="/process" className="text-white font-bold text-lg hover:text-[#00bfff] transition-colors">Process</a>
                  <a href="/team" className="text-white font-bold text-lg hover:text-[#00bfff] transition-colors">Team</a>
                  <a href="/contact" className="text-white font-bold text-lg hover:text-[#00bfff] transition-colors">Contact</a>
                </div>
            </div>
          )}

          {/* INSIGHTS MENU */}
          {activeMenu === 'insights' && (
            <div className="flex min-h-[250px]">
              <div className="w-[25%] p-10 border-r border-white/5 flex flex-col items-start justify-center">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#00bfff]"></div>
                  <span className="text-xs font-bold text-[#00bfff] tracking-widest uppercase">Insights</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Useful thinking, product updates, and ways to work with Sanestix.
                </p>
              </div>
                <div className="w-[75%] p-10 flex items-center justify-between px-16">
                  <a href="/academy" className="text-white font-bold text-lg hover:text-[#00bfff] transition-colors">Academy</a>
                  <a href="/careers" className="text-white font-bold text-lg hover:text-[#00bfff] transition-colors">Careers</a>
                  <a href="/vision" className="text-white font-bold text-lg hover:text-[#00bfff] transition-colors">Vision</a>
                  <a href="/faq" className="text-white font-bold text-lg hover:text-[#00bfff] transition-colors">FAQ</a>
                  <a href="/flow-product" className="text-white font-bold text-lg hover:text-[#00bfff] transition-colors">Flow Product</a>
                </div>
            </div>
          )}
          </div>
        </div>
      </nav>
    </div>
  );
}
