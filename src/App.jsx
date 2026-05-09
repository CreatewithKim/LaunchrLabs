import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight, Menu, X, Play } from 'lucide-react';

export default function LaunchrlabsLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Load Calendly script
  useEffect(() => {
    // Don't load if already loaded
    if (window.Calendly) {
       return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      console.log('Calendly script loaded successfully');
    };
    script.onerror = () => {
      console.error('Failed to load Calendly widget');
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleLeadCapture = (e) => {
    e.preventDefault();
    
    // Here you would normally send the lead data to your backend
    console.log('Lead captured:', leadData);
    
    // Close lead capture and open Calendly
    setShowLeadCapture(false);
    setShowCalendly(true);
    
    // Reset form
    setLeadData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeadData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const openBookingFlow = () => {
    setShowLeadCapture(true);
  };

  const closeModals = () => {
    setShowLeadCapture(false);
    setShowCalendly(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .gradient-text {
          background: linear-gradient(135deg, #1DB954 0%, #1ed760 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-spotify {
          background: #1DB954;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 24px;
        }

        .btn-spotify:hover {
          background: #1ed760;
          transform: scale(1.05);
        }

        .btn-spotify:active {
          transform: scale(0.98);
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          border-color: #1DB954;
          background: rgba(29, 185, 84, 0.05);
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          filter: blur(40px);
        }

        .fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

        .pulse-ring {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .modal-overlay {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          animation: slideUp 0.3s ease-out;
        }

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

        input, textarea {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        input:focus, textarea:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.15);
          border-color: #1DB954;
          box-shadow: 0 0 0 3px rgba(29, 185, 84, 0.1);
        }

        input::placeholder, textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .calendly-embed {
          min-height: 600px;
          width: 100%;
        }
      `}</style>

      {/* Lead Capture Modal */}
      {showLeadCapture && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 modal-overlay">
          <div className="glass-effect rounded-3xl p-6 sm:p-8 max-w-md w-full modal-content border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black">Get Your Audit</h3>
              <button
                onClick={closeModals}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-gray-300 mb-6">
              Tell us a bit about your business. We'll schedule your free system audit.
            </p>

            <form onSubmit={handleLeadCapture} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={leadData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={leadData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={leadData.company}
                  onChange={handleInputChange}
                  placeholder="Your company"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tell us about your biggest challenge</label>
                <textarea
                  name="message"
                  value={leadData.message}
                  onChange={handleInputChange}
                  placeholder="e.g., Manual processes, scattered tools, team inefficiency..."
                  rows="3"
                  className="w-full resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-spotify w-full py-3 text-black font-bold flex items-center justify-center gap-2 mt-6"
              >
                Continue to Calendar
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              We respect your privacy. No spam, just audit insights.
            </p>
          </div>
        </div>
      )}

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 modal-overlay">
          <div className="glass-effect rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto modal-content border border-gray-700">
            <div className="flex items-center justify-between p-6 border-b border-gray-700 sticky top-0 bg-black/50">
              <h3 className="text-2xl font-black">Schedule Your Audit</h3>
              <button
                onClick={closeModals}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div
                className="calendly-embed"
                data-url="https://calendly.com/serveiqafrica/30min"
                style={{minHeight: "600px"}}
              ></div>

              {/* Fallback: Direct link if widget fails */}
              <div className="mt-6 text-center">
                <p className="text-gray-400 mb-3">Having trouble loading the calendar?</p>
                <a
                  href="https://calendly.com/serveiqafrica/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-spotify inline-flex px-6 py-3 text-black font-bold text-sm rounded-full"
                >
                  Schedule Your Audit
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="blob w-96 h-96 bg-green-500 top-20 left-10" />
        <div className="blob w-80 h-80 bg-emerald-600 bottom-40 right-20" style={{animationDelay: '2s'}} />
      </div>

      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 ${
          isScrolled ? 'glass-effect' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <div className="w-8 md:w-10 h-8 md:h-10 bg-gradient-text rounded-full flex items-center justify-center font-black text-xs md:text-base">
              ▶
            </div>
            <span className="font-black text-base md:text-xl">Launchr</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-sm lg:text-base hover:text-green-400 transition-colors"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('how')}
              className="text-sm lg:text-base hover:text-green-400 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('audit')}
              className="text-sm lg:text-base hover:text-green-400 transition-colors"
            >
              Audit
            </button>
            <button className="btn-spotify px-5 lg:px-6 py-2 text-black font-bold text-xs lg:text-sm flex items-center gap-2 rounded-full" onClick={openBookingFlow}>
              Book Audit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-effect mt-4 rounded-2xl p-4 space-y-3">
            <button
              onClick={() => scrollToSection('solutions')}
              className="block w-full text-left px-4 py-2 text-sm hover:text-green-400 transition-colors rounded-lg hover:bg-white/5"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('how')}
              className="block w-full text-left px-4 py-2 text-sm hover:text-green-400 transition-colors rounded-lg hover:bg-white/5"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('audit')}
              className="block w-full text-left px-4 py-2 text-sm hover:text-green-400 transition-colors rounded-lg hover:bg-white/5"
            >
              Audit
            </button>
            <button className="btn-spotify w-full px-4 py-3 text-black font-bold text-sm rounded-full mt-2" onClick={openBookingFlow}>
              Book Audit
            </button>
          </div>
        )}
      </nav>

      {/* 1. HERO SECTION */}
      <section id="hero" className="pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="fade-in order-2 md:order-1">
              <div className="inline-block mb-4 sm:mb-6 glass-effect px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-green-400">
                ✨ Stop leaving revenue on the table
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 sm:mb-6">
                Systems That Scale
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-xl">
                Deploy operational systems that automate workflows, eliminate chaos, and help your business scale without breaking.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <button className="btn-spotify px-6 sm:px-8 py-3 sm:py-4 text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 rounded-full" onClick={openBookingFlow}>
                  Book System Audit
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
                <button
                  onClick={() => scrollToSection('how')}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-700 hover:border-green-400 font-bold text-sm sm:text-base rounded-full transition-all"
                >
                  See How It Works
                </button>
              </div>

              {/* Trust Elements */}
              <div className="space-y-2 sm:space-y-3">
                {['Free initial audit', 'No hidden fees', 'Results in 30 days'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual - Animated Dashboard */}
            <div className="relative h-64 sm:h-80 md:h-96 fade-in stagger-2 order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-3xl blur-3xl" />
              
              <div className="relative glass-effect rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-3 bg-green-500/20 rounded-full w-1/3" />
                  <div className="space-y-2">
                    <div className="h-2 bg-green-500/10 rounded-full w-full" />
                    <div className="h-2 bg-green-500/10 rounded-full w-5/6" />
                    <div className="h-2 bg-green-500/10 rounded-full w-4/5" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Status</p>
                    <p className="text-green-400 font-bold text-base sm:text-lg">Active</p>
                  </div>
                  <Play className="w-8 sm:w-12 h-8 sm:h-12 text-green-400 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4">
              Your Business Is Growing
              <br />
              <span className="gradient-text">Your Systems Aren't</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: 'Leads slip through the cracks', icon: '📊' },
              { title: 'Manual processes drain time', icon: '⏱️' },
              { title: 'No visibility into operations', icon: '👁️' },
              { title: 'Disconnected tools everywhere', icon: '🔗' },
            ].map((item, i) => (
              <div key={i} className="card-hover glass-effect p-6 sm:p-8 rounded-2xl border border-gray-800">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">Your data lives in silos. Your team wastes time.</p>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-green-500/10 to-transparent p-6 sm:p-8 rounded-2xl border border-green-500/30">
            <p className="text-xl sm:text-2xl font-black">
              This isn't a staffing problem.
              <br />
              <span className="gradient-text">It's a systems problem.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section id="solutions" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4">
              We Build Systems
              <br />
              <span className="gradient-text">That Run Your Business</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400">Not random software. Structured systems for scale.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {[
              { 
                title: 'Sales Systems', 
                desc: 'Pipeline automation, lead tracking, deal acceleration',
                icon: '📈'
              },
              { 
                title: 'Operations Systems', 
                desc: 'Process automation, workflow orchestration, efficiency',
                icon: '⚙️'
              },
              { 
                title: 'Marketing Systems', 
                desc: 'Campaign automation, content workflows, dashboards',
                icon: '📢'
              },
              { 
                title: 'Customer Experience Systems', 
                desc: 'Omnichannel engagement, support automation, retention',
                icon: '😊'
              },
            ].map((system, i) => (
              <div key={i} className="card-hover glass-effect p-6 sm:p-8 rounded-2xl border border-gray-800 group">
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform">{system.icon}</div>
                <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">{system.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{system.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-center mb-12 sm:mb-16">
            How It Works
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { num: '01', title: 'Audit', desc: 'We analyze operations and identify bottlenecks', color: 'from-green-500' },
              { num: '02', title: 'Design', desc: 'Custom systems built for your business', color: 'from-green-400' },
              { num: '03', title: 'Deploy', desc: 'Fast implementation, minimal disruption', color: 'from-emerald-500' },
              { num: '04', title: 'Optimize', desc: 'Continuous refinement for maximum ROI', color: 'from-emerald-400' },
            ].map((step, i) => (
              <div key={i} className="card-hover relative">
                {/* Connector */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-12 left-[55%] w-12 lg:w-24 h-0.5 bg-gradient-to-r from-green-500/50 to-transparent" />
                )}
                
                <div className="glass-effect p-6 sm:p-8 rounded-2xl border border-gray-800 h-full flex flex-col">
                  <div className={`text-3xl sm:text-5xl font-black bg-gradient-to-r ${step.color} to-transparent bg-clip-text text-transparent mb-3 sm:mb-4`}>
                    {step.num}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base flex-grow">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <button className="btn-spotify px-6 sm:px-8 py-3 sm:py-4 text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 mx-auto rounded-full" onClick={openBookingFlow}>
              Start with an Audit
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. AUDIT OFFER */}
      <section id="audit" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-block mb-4 sm:mb-6 glass-effect px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-green-400">
                ⭐ Most Popular
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
                Launchr Audit™
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
                Your roadmap to fixing operational inefficiencies and scaling without chaos.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  'Bottleneck analysis across operations',
                  'System recommendations with ROI',
                  'Automation opportunities identified',
                  'Implementation roadmap included',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle2 className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <button className="btn-spotify px-6 sm:px-8 py-3 sm:py-4 text-black font-bold text-sm sm:text-base flex items-center gap-2 rounded-full" onClick={openBookingFlow}>
                Book Your Audit
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>

              <p className="text-gray-500 text-xs sm:text-sm mt-4">Delivered in 5 business days</p>
            </div>

            {/* Visual */}
            <div className="relative h-64 sm:h-80 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 via-transparent to-transparent rounded-3xl blur-3xl" />
              
              <div className="relative glass-effect rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-center items-center">
                <div className="text-5xl sm:text-6xl font-black gradient-text mb-4">📊</div>
                <p className="text-lg sm:text-xl font-bold text-center mb-2">System Audit Report</p>
                <p className="text-gray-400 text-center text-xs sm:text-sm">Comprehensive analysis and roadmap</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROOF */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-center mb-12 sm:mb-16">
            Real Results
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              { metric: '6h → 5min', desc: 'Response time via WhatsApp automation' },
              { metric: '340% ROI', desc: 'In first 90 days with sales system' },
              { metric: '12 hrs/week', desc: 'Automated from manual workflows' },
              { metric: '45% growth', desc: 'Revenue increase after deployment' },
            ].map((result, i) => (
              <div key={i} className="card-hover glass-effect p-6 sm:p-8 rounded-2xl border border-gray-800">
                <div className="text-4xl sm:text-5xl font-black gradient-text mb-3">
                  {result.metric}
                </div>
                <p className="text-gray-300 text-sm sm:text-base">{result.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. IDEAL CLIENT */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4">
              Who We Work With
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400">
              Ambitious businesses with operational complexity
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {[
              { icon: '🏨', title: 'Hospitality Brands', desc: 'Hotels, tours, events scaling operations' },
              { icon: '🛍️', title: 'E-commerce Brands', desc: 'Online stores building fulfillment systems' },
              { icon: '🔧', title: 'Service Companies', desc: 'HVAC, plumbing, consulting managing teams' },
              { icon: '📱', title: 'SaaS & Tech', desc: 'Tech companies building success systems' },
            ].map((client, i) => (
              <div key={i} className="card-hover glass-effect p-6 sm:p-8 rounded-2xl border border-gray-800">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{client.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{client.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="blob w-64 sm:w-96 h-64 sm:h-96 bg-green-500 top-0 left-1/4 opacity-20" />
          <div className="blob w-64 sm:w-96 h-64 sm:h-96 bg-emerald-600 bottom-0 right-1/4 opacity-20" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight">
            Your Business
            <br />
            <span className="gradient-text">Needs Better Systems</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop guessing. Start with a Launchr Audit™ and get a clear roadmap for scaling without chaos.
          </p>

          <button className="btn-spotify px-6 sm:px-10 py-4 sm:py-5 text-black font-black text-base sm:text-lg flex items-center justify-center gap-2 mx-auto rounded-full" onClick={openBookingFlow}>
            Book a System Audit
            <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>

          <p className="text-gray-500 mt-6 sm:mt-8 text-xs sm:text-sm">
            Limited audit slots per month • Free initial consultation
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 mb-8 sm:mb-12">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 mb-3 sm:mb-4 font-black text-sm sm:text-base">
                <div className="w-6 sm:w-8 h-6 sm:h-8 gradient-text">▶</div>
                <span>Launchr</span>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm">Systems that scale businesses.</p>
            </div>
            {[
              { title: 'Product', links: ['Audit', 'Solutions', 'How It Works'] },
              { title: 'Company', links: ['About', 'Contact', 'Blog'] },
              { title: 'Legal', links: ['Privacy', 'Terms'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold mb-2 sm:mb-4 text-sm sm:text-base">{col.title}</h4>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-500">
                  {col.links.map((link, j) => (
                    <li key={j}><a href="#" className="hover:text-green-400 transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-900 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm gap-3 sm:gap-4">
            <p>© 2024 Launchr Labs. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-green-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-green-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-green-400 transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}