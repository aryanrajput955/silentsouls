"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          // Reset success message after 10 seconds
          setTimeout(() => setSubmitSuccess(false), 10000);
        } else {
          setErrors({ submit: result.error || "Failed to send message. Please try again." });
        }
      } catch (error) {
        setErrors({ submit: "An error occurred. Please check your connection." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="text-emerald-600 font-semibold tracking-wider uppercase mb-3 block">
            Get In Touch
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Connect With SilentSouls
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed">
            Have questions about our Sacred Dhara project, want to volunteer, or simply wish to say hello? We’d love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform cursor-default">
                  <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-600 text-sm md:text-base">Haridwar, Uttarakhand</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform cursor-default">
                  <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      <a href="mailto:connect@silentsouls.org" className="hover:text-emerald-600 transition-colors">connect@silentsouls.org</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform cursor-default">
                  <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      <a href="tel:+918433023265" className="hover:text-emerald-600 transition-colors">91 84330 23265</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Operating Hours</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Monday to Saturday<br/>
                  9:00 AM - 6:00 PM (IST)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-emerald-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
              
              {submitSuccess ? (
                <div className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl flex items-center gap-4 border border-emerald-200">
                  <div className="bg-emerald-500 text-white p-3 rounded-full shrink-0">
                    <Send className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Thank you for Reaching Out!</h4>
                    <p className="text-emerald-700 mt-1">Your message has been safely received. We will get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errors.submit && (
                    <div className="bg-red-50 text-red-800 p-4 rounded-xl border border-red-200 mb-6 text-sm">
                      {errors.submit}
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-emerald-500 focus:border-emerald-500'} bg-gray-50/50 focus:bg-white transition-colors outline-none ring-1 ring-transparent focus:ring-2`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-emerald-500 focus:border-emerald-500'} bg-gray-50/50 focus:bg-white transition-colors outline-none ring-1 ring-transparent focus:ring-2`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.subject ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-emerald-500 focus:border-emerald-500'} bg-gray-50/50 focus:bg-white transition-colors outline-none ring-1 ring-transparent focus:ring-2`}
                      placeholder="How can we help you?"
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-emerald-500 focus:border-emerald-500'} bg-gray-50/50 focus:bg-white transition-colors outline-none ring-1 ring-transparent focus:ring-2 resize-none`}
                      placeholder="Write your message here..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
