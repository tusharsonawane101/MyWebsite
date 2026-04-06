import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  DollarSign, 
  Globe, 
  Zap, 
  Mail, 
  ShieldCheck, 
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const FEATURE_CARDS = [
  {
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    title: "US-Based Opportunities",
    description: "Exclusively curated web development projects from organizations based in the United States."
  },
  {
    icon: <DollarSign className="w-6 h-6 text-emerald-500" />,
    title: "$20k+ Minimum Value",
    description: "Most opportunities shared are valued at $20,000 USD or more. No low-ball offers."
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    title: "Low Barrier to Entry",
    description: "We focus on active opportunities that don't require complex RFP processes or years of history."
  }
];

const FAQS = [
  {
    question: "How often do you send the newsletter?",
    answer: "We send curated opportunities twice a week—every Tuesday and Thursday—to ensure you have fresh leads without cluttering your inbox."
  },
  {
    question: "Are these full-time jobs or freelance projects?",
    answer: "We focus primarily on high-value contract and freelance web development projects, though we occasionally share unique full-time roles."
  },
  {
    question: "Is there a cost to join?",
    answer: "The basic newsletter is completely free. We believe in making high-value opportunities accessible to all talented developers."
  }
];

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
    }, 1500);
  };

  return (
    <div className="min-h-screen selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Plainsight<span className="text-blue-600">Deals</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#benefits" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Benefits</a>
              <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">FAQ</a>
              <button 
                onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm"
              >
                Join Newsletter
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#benefits" className="block text-lg font-medium text-slate-900" onClick={() => setMobileMenuOpen(false)}>Benefits</a>
                <a href="#faq" className="block text-lg font-medium text-slate-900" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
                >
                  Join Newsletter
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-[120px] opacity-60" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified US Opportunities
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]">
                Get <span className="text-blue-600">$20k+</span> Web Dev <br className="hidden md:block" />
                Opportunities in Your Inbox
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                We share active web development projects from US organizations with minimum barrier to entry. High value, low friction, zero noise.
              </p>

              <div id="signup" className="max-w-md mx-auto">
                {isSuccess ? (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl text-emerald-800 flex flex-col items-center"
                  >
                    <CheckCircle2 className="w-12 h-12 mb-3 text-emerald-500" />
                    <h3 className="text-xl font-bold mb-1">You're on the list!</h3>
                    <p className="text-sm opacity-90">Check your inbox for the first batch of deals.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative group">
                    <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 transition-all focus-within:ring-2 focus-within:ring-blue-500/20">
                      <div className="flex-1 flex items-center px-4">
                        <Mail className="w-5 h-5 text-slate-400 mr-3" />
                        <input 
                          type="email" 
                          placeholder="Enter your email address" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full py-3 bg-transparent outline-none text-slate-900 placeholder:text-slate-400 font-medium"
                        />
                      </div>
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? 'Joining...' : 'Get Opportunities'}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="mt-4 text-xs text-slate-400 font-medium">
                      Join 5,000+ developers. No spam, ever. Unsubscribe anytime.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Plainsight Deals?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We filter through thousands of postings to find the ones that actually matter to professional developers.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {FEATURE_CARDS.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats/Proof */}
        <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">$240M+</div>
                <div className="text-blue-300 font-medium uppercase tracking-widest text-xs">Total Deal Value Shared</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">5,200+</div>
                <div className="text-blue-300 font-medium uppercase tracking-widest text-xs">Active Subscribers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-blue-300 font-medium uppercase tracking-widest text-xs">US-Based Organizations</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-brand-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-slate-900">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-5"
                      >
                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Ready to land your next <br /> high-value project?
            </h2>
            <button 
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Join Plainsight Deals Free
            </button>
            <p className="mt-6 text-slate-500 font-medium">No credit card required. Ever.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Plainsight<span className="text-blue-600">Deals</span>
              </span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="mailto:hello@plainsightdeals.com" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} PlainsightDeals.com. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
