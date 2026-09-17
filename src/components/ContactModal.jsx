import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Copy, ArrowRight, Loader2 } from 'lucide-react';

export const ContactModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Venture Partnership',
    message: '',
  });

  const email = 'hello@yshandco.com';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || loading) return;

    setLoading(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[YSH&CO Inquiry] ${formData.scope} - ${formData.name}`,
          scope: formData.scope,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (!response.ok) {
        throw new Error('Transmission request unsuccessful');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', scope: 'Venture Partnership', message: '' });
      }, 3500);
    } catch (err) {
      console.warn('Direct HTTP dispatch fallback triggered:', err);
      const subject = encodeURIComponent(`[Inquiry - ${formData.scope}] from ${formData.name || 'Website Visitor'}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Scope: ${formData.scope}\n\n` +
        `Message / Brief:\n${formData.message}`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', scope: 'Venture Partnership', message: '' });
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-graphite border border-white/10 p-6 sm:p-10 md:p-12 text-white shadow-2xl z-10"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-8">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                  COMMUNICATION CHANNEL
                </span>
                <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white">
                  Initiate Discussion
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-white border border-white/10 hover:border-white transition-colors"
                aria-label="Close dialog"
                data-cursor="hover"
              >
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full border border-white/20 mx-auto flex items-center justify-center text-white">
                  <Check size={24} />
                </div>
                <h4 className="text-xl font-medium tracking-tight">Transmission Received</h4>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto font-light">
                  Your dispatch has been delivered directly to <span className="text-white font-mono">{email}</span>. We review all incoming inquiries directly.
                </p>
              </div>
            ) : (
              <div>
                {/* Direct Channel Box */}
                <div className="bg-black/60 border border-white/[0.06] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block">
                      DIRECT DESK DISPATCH
                    </span>
                    <span className="font-mono text-sm sm:text-base text-zinc-200">
                      {email}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 text-xs font-mono tracking-wider text-zinc-300 hover:text-white px-3 py-2 border border-white/15 hover:border-white transition-all w-fit"
                    data-cursor="hover"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-white" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>COPY ADDRESS</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-2">
                        NAME / PRINCIPAL
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-2">
                        ELECTRONIC MAIL
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-2">
                      INQUIRY SCOPE
                    </label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors font-sans"
                    >
                      <option value="Venture Partnership" className="bg-graphite">Venture Partnership / Idea</option>
                      <option value="Product Collaboration" className="bg-graphite">Product Collaboration</option>
                      <option value="Growth Desk Service" className="bg-graphite">Growth Desk Service</option>
                      <option value="Talent & Engineering" className="bg-graphite">Talent & Engineering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-2">
                      BRIEF / MESSAGE
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline the problem or concept..."
                      className="w-full bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 py-3.5 bg-white text-black font-semibold text-xs tracking-[0.2em] uppercase hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                    data-cursor="hover"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>DISPATCHING...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT DISPATCH</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
