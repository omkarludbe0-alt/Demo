import { useState, useEffect, useId } from 'react';
import { Send, CheckCircle2, MessageCircle, Phone, Mail, MapPin, Calendar, Clock, AlertCircle } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';

interface EnquirySectionProps {
  initialProjectName?: string;
  mortgageEstimateNote?: string;
}

export function EnquirySection({ initialProjectName, mortgageEstimateNote }: EnquirySectionProps) {
  const fullNameInputId = useId();
  const phoneInputId = useId();
  const emailInputId = useId();
  const projectSelectId = useId();
  const budgetSelectId = useId();
  const visitDateInputId = useId();
  const messageInputId = useId();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    project: initialProjectName || 'Aurevia Grand (Worli, Mumbai)',
    investmentBudget: '₹15 Cr – ₹30 Cr',
    preferredDate: '',
    visitSlot: 'Twilight Viewing (5:00 PM – 7:00 PM)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialProjectName) {
      setFormData((prev) => ({ ...prev, project: initialProjectName }));
    }
  }, [initialProjectName]);

  useEffect(() => {
    if (mortgageEstimateNote) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n[Financial Note: ${mortgageEstimateNote}]` : `[Financial Note: ${mortgageEstimateNote}]`
      }));
    }
  }, [mortgageEstimateNote]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate luxury CRM submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  // WhatsApp click-to-chat with pre-filled enquiry
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hello Aurevia Developers,\n\nI am interested in scheduling a private architectural consultation for *${formData.project}*.\nName: ${formData.fullName || 'Prospective Client'}\nBudget: ${formData.investmentBudget}\n\nPlease share the detailed brochure and schedule.`
    );
    // Demo Indian WhatsApp number
    window.open(`https://wa.me/919820012345?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#181B19] text-[#F6F3ED] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B89B68]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Relationship Contacts & Office Locations */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4BE92] mb-3">
                <span>Private Consultation</span>
                <span className="text-neutral-500">/</span>
                <span>Exclusive Representation</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#F6F3ED] mb-6 [text-wrap:balance]">
                Begin Your Journey With <br />
                <span className="italic font-normal text-[#D4BE92]">Aurevia Developers</span>
              </h2>

              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-8">
                Whether you seek an extraordinary coastal sky mansion, a private hillside estate, or corporate headquarters in BKC, our Senior Relationship Partners are at your service for discreet consultations.
              </p>

              {/* Direct Communication Channels */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5 p-3.5 rounded bg-white/5 border border-white/10">
                  <Phone className="w-4 h-4 text-[#B89B68] shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Direct Concierge Desk</span>
                    <a href="tel:+912268904000" className="text-sm font-serif text-[#F6F3ED] hover:text-[#D4BE92] transition-colors">
                      +91 22 6890 4000 / +91 98200 12345
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded bg-white/5 border border-white/10">
                  <Mail className="w-4 h-4 text-[#B89B68] shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Private Client Email</span>
                    <a href="mailto:enquiries@aureviadevelopers.com" className="text-sm text-[#F6F3ED] hover:text-[#D4BE92] transition-colors">
                      enquiries@aureviadevelopers.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Maharashtra Presence */}
              <div className="pt-6 border-t border-white/10 space-y-4 text-xs text-neutral-400">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B89B68] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-200 block text-xs">Mumbai Corporate Headquarters:</strong>
                    <span>Level 28, Aurevia Tower, Free Press Journal Marg, Nariman Point, Mumbai 400021</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B89B68] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-200 block text-xs">Pune Regional Office:</strong>
                    <span>Aurevia House, Plot 14, Lane 5, Koregaon Park, Pune 411001</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Quick Action */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full py-3 px-4 rounded bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Enquiry Desk (+91 98200 12345)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#202321] p-6 sm:p-10 rounded-lg border border-white/15 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#B89B68]/20 border border-[#B89B68] mx-auto flex items-center justify-center text-[#D4BE92]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-light text-[#F6F3ED]">
                    Enquiry Registered Successfully
                  </h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#D4BE92]">{formData.fullName}</strong>. A dedicated Senior Portfolio Director will reach out to you within two business hours to coordinate your confidential architectural viewing.
                  </p>
                  <div className="p-4 rounded bg-white/5 border border-white/10 max-w-sm mx-auto text-xs text-left text-neutral-300">
                    <p className="font-medium text-[#D4BE92]">Selected Development:</p>
                    <p>{formData.project}</p>
                    <p className="font-medium text-[#D4BE92] mt-2">Preferred Slot:</p>
                    <p>{formData.preferredDate || 'Earliest available date'} ({formData.visitSlot})</p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        project: 'Aurevia Grand (Worli, Mumbai)',
                        investmentBudget: '₹15 Cr – ₹30 Cr',
                        preferredDate: '',
                        visitSlot: 'Twilight Viewing (5:00 PM – 7:00 PM)',
                        message: ''
                      });
                    }}
                    className="text-xs uppercase tracking-wider text-[#D4BE92] hover:text-white underline cursor-pointer pt-4 block mx-auto"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-6">
                    <h3 className="font-serif text-2xl text-[#F6F3ED] font-light">
                      Schedule a Private Site Tour & Briefing
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Please enter your contact parameters. Our private office preserves strict client confidentiality.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={fullNameInputId} className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                        Full Name *
                      </label>
                      <input
                        id={fullNameInputId}
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Vikramaditya Singhal"
                        className={`w-full px-3.5 py-2.5 rounded bg-black/40 border text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#B89B68] transition-colors ${
                          errors.fullName ? 'border-rose-500' : 'border-white/15'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor={phoneInputId} className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                        Mobile Number *
                      </label>
                      <input
                        id={phoneInputId}
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98200 XXXXX"
                        className={`w-full px-3.5 py-2.5 rounded bg-black/40 border text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#B89B68] transition-colors ${
                          errors.phone ? 'border-rose-500' : 'border-white/15'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Project Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={emailInputId} className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                        Email Address *
                      </label>
                      <input
                        id={emailInputId}
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.com"
                        className={`w-full px-3.5 py-2.5 rounded bg-black/40 border text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#B89B68] transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-white/15'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor={projectSelectId} className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                        Interested Development
                      </label>
                      <select
                        id={projectSelectId}
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-black/40 border border-white/15 text-xs text-white focus:outline-none focus:border-[#B89B68] transition-colors"
                      >
                        {PROJECTS_DATA.map((p) => (
                          <option key={p.id} value={p.name} className="bg-[#181B19] text-white">
                            {p.name} ({p.location})
                          </option>
                        ))}
                        <option value="General Builder & Masterplan Consultation" className="bg-[#181B19] text-white">
                          General Builder & Masterplan Consultation
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Budget & Visit Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor={budgetSelectId} className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                        Investment Horizon
                      </label>
                      <select
                        id={budgetSelectId}
                        value={formData.investmentBudget}
                        onChange={(e) => setFormData({ ...formData, investmentBudget: e.target.value })}
                        className="w-full px-3 py-2.5 rounded bg-black/40 border border-white/15 text-xs text-white focus:outline-none focus:border-[#B89B68] transition-colors"
                      >
                        <option value="₹2.5 Cr – ₹5 Cr" className="bg-[#181B19] text-white">₹2.5 Cr – ₹5 Cr</option>
                        <option value="₹5 Cr – ₹15 Cr" className="bg-[#181B19] text-white">₹5 Cr – ₹15 Cr</option>
                        <option value="₹15 Cr – ₹30 Cr" className="bg-[#181B19] text-white">₹15 Cr – ₹30 Cr</option>
                        <option value="₹30 Cr+ Signature Sky Mansion" className="bg-[#181B19] text-white">₹30 Cr+ Signature Sky Mansion</option>
                        <option value="Corporate / Grade-A Commercial" className="bg-[#181B19] text-white">Corporate / Grade-A Commercial</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor={visitDateInputId} className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                        Preferred Date
                      </label>
                      <input
                        id={visitDateInputId}
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3 py-2.5 rounded bg-black/40 border border-white/15 text-xs text-white focus:outline-none focus:border-[#B89B68] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                        Viewing Window
                      </label>
                      <select
                        value={formData.visitSlot}
                        onChange={(e) => setFormData({ ...formData, visitSlot: e.target.value })}
                        className="w-full px-3 py-2.5 rounded bg-black/40 border border-white/15 text-xs text-white focus:outline-none focus:border-[#B89B68] transition-colors"
                      >
                        <option value="Morning (10:00 AM – 1:00 PM)" className="bg-[#181B19] text-white">Morning (10am–1pm)</option>
                        <option value="Afternoon (2:00 PM – 5:00 PM)" className="bg-[#181B19] text-white">Afternoon (2pm–5pm)</option>
                        <option value="Twilight Viewing (5:00 PM – 7:00 PM)" className="bg-[#181B19] text-white">Twilight (5pm–7pm)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor={messageInputId} className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Special Spatial Requirements or Notes
                    </label>
                    <textarea
                      id={messageInputId}
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Inquiring for sea-facing 4 BHK floorplate with duplex terrace or corporate floor leasing inquiries..."
                      className="w-full px-3.5 py-2.5 rounded bg-black/40 border border-white/15 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#B89B68] transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded bg-[#B89B68] hover:bg-[#D4BE92] text-[#141715] font-semibold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Confirming Schedule...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Private Consultation Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-neutral-500 pt-2">
                    Fictional Demonstration Desk by SP VisionWorks. Submissions trigger frontend demo confirmations.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
