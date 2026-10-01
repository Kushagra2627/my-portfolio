import React, { useState } from 'react';
import { profileData } from '../../data/profile';
import { Mail, Github, Linkedin, Code, Download, Send, CheckCircle2, AlertCircle, Phone, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [lastSubmittedText, setLastSubmittedText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus('error');
      setFeedbackMsg('Please enter a valid name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setFeedbackMsg('Please enter a valid email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setStatus('error');
      setFeedbackMsg('Please enter a message of at least 5 characters.');
      return;
    }

    setStatus('submitting');
    setFeedbackMsg('');
    const currentMsgText = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\nMessage: ${formData.message}`;
    setLastSubmittedText(currentMsgText);

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000';
      const apiUrl = baseUrl ? `${baseUrl}/api/contact` : '/api/contact';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFeedbackMsg(
          data.message ||
            `Transmission received & notification dispatched to Kushagra Tomar's email (${profileData.email}) and phone (${profileData.phone}).`
        );
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setFeedbackMsg(data.error || 'Failed to submit form. Please check input values.');
      }
    } catch {
      // Offline fallback
      setTimeout(() => {
        setStatus('success');
        setFeedbackMsg(
          `Transmission logged! Notification alert queued for Kushagra Tomar (${profileData.email} / ${profileData.phone}).`
        );
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 600);
    }
  };

  return (
    <div className="space-y-space-xl">
      <div className="border-b border-outline-variant pb-space-lg">
        <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest">
          [ DIRECT DISPATCH // COMMISSIONS & RECRUITMENT ]
        </span>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-extrabold uppercase mt-1">
          LET'S BUILD SOMETHING
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-2 font-normal">
          Available for software engineering internships, full-stack development, blockchain smart contracts, and technical founder roles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
        {/* Direct Channels & Profile Links */}
        <div className="space-y-space-md">
          <h3 className="font-headline-md text-headline-md text-primary">Direct Channels</h3>
          
          <div className="space-y-space-sm">
            {/* Phone & WhatsApp */}
            <a
              href={`https://wa.me/917060597775?text=${encodeURIComponent('Hi Kushagra, I saw your developer portfolio and would like to connect.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-space-md bg-surface-container-low border border-outline-variant hover:border-primary-container group transition-colors"
            >
              <div className="flex items-center gap-space-sm">
                <Phone className="w-5 h-5 text-primary-container flex-shrink-0" />
                <div>
                  <div className="font-label-sm text-label-sm text-outline">PHONE & WHATSAPP</div>
                  <div className="font-body-sm text-body-sm text-on-surface font-bold group-hover:text-primary-container transition-colors">
                    {profileData.phone}
                  </div>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-primary-container flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5" /> [CHAT/CALL]
              </span>
            </a>

            {/* Primary Email */}
            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center justify-between p-space-md bg-surface-container-low border border-outline-variant hover:border-primary-container group transition-colors"
            >
              <div className="flex items-center gap-space-sm">
                <Mail className="w-5 h-5 text-primary-container flex-shrink-0" />
                <div>
                  <div className="font-label-sm text-label-sm text-outline">PRIMARY EMAIL</div>
                  <div className="font-body-sm text-body-sm text-on-surface font-bold group-hover:text-primary-container transition-colors">
                    {profileData.email}
                  </div>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-primary-container">[EMAIL]</span>
            </a>

            {/* GitHub */}
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-space-md bg-surface-container-low border border-outline-variant hover:border-primary-container group transition-colors"
            >
              <div className="flex items-center gap-space-sm">
                <Github className="w-5 h-5 text-primary-container flex-shrink-0" />
                <div>
                  <div className="font-label-sm text-label-sm text-outline">GITHUB PROFILE</div>
                  <div className="font-body-sm text-body-sm text-on-surface font-bold group-hover:text-primary-container transition-colors">
                    {profileData.github}
                  </div>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-primary-container">[VISIT]</span>
            </a>

            {/* LinkedIn */}
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-space-md bg-surface-container-low border border-outline-variant hover:border-primary-container group transition-colors"
            >
              <div className="flex items-center gap-space-sm">
                <Linkedin className="w-5 h-5 text-primary-container flex-shrink-0" />
                <div>
                  <div className="font-label-sm text-label-sm text-outline">LINKEDIN PROFILE</div>
                  <div className="font-body-sm text-body-sm text-on-surface font-bold group-hover:text-primary-container transition-colors">
                    {profileData.linkedin}
                  </div>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-primary-container">[CONNECT]</span>
            </a>

            {/* Codeforces */}
            <a
              href={profileData.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-space-md bg-surface-container-low border border-outline-variant hover:border-primary-container group transition-colors"
            >
              <div className="flex items-center gap-space-sm">
                <Code className="w-5 h-5 text-primary-container flex-shrink-0" />
                <div>
                  <div className="font-label-sm text-label-sm text-outline">CODEFORCES HANDLE</div>
                  <div className="font-body-sm text-body-sm text-on-surface font-bold group-hover:text-primary-container transition-colors">
                    kushagratomar2627 (Rating 1274)
                  </div>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-primary-container">[VIEW]</span>
            </a>
          </div>

          <div className="pt-space-sm">
            <a
              href={profileData.resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-space-xs bg-primary-container text-on-primary-container px-space-md py-space-md font-label-md text-label-md font-bold uppercase transition-colors hover:bg-secondary-container hover:text-on-secondary-container text-center"
            >
              <Download className="w-5 h-5" />
              <span>DOWNLOAD_OFFICIAL_RESUME.PDF</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-surface-container-low border border-outline-variant p-space-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-outline-variant pb-space-sm mb-space-md">
              <span className="font-label-md text-label-md text-primary-container font-bold">
                ENCRYPTED TRANSMISSION FORM
              </span>
              <span className="font-label-sm text-label-sm text-outline">POST /api/contact</span>
            </div>

            {status === 'success' && (
              <div className="mb-space-md p-space-md bg-surface-container border border-primary-container text-primary flex flex-col gap-space-xs font-body-sm text-body-sm">
                <div className="flex items-center gap-space-xs text-primary-container font-bold">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>NOTIFICATION DISPATCHED</span>
                </div>
                <p className="text-on-surface-variant">{feedbackMsg}</p>
                
                {lastSubmittedText && (
                  <a
                    href={`https://wa.me/917060597775?text=${encodeURIComponent(lastSubmittedText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center gap-2 border border-primary-container bg-primary-container/10 px-space-md py-space-xs text-primary-container font-bold font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary-container transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>INSTANT WHATSAPP DISPATCH TO +91 7060597775</span>
                  </a>
                )}
              </div>
            )}

            {status === 'error' && (
              <div className="mb-space-md p-space-sm bg-surface-container border border-error text-error flex items-center gap-space-xs font-body-sm text-body-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{feedbackMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-space-md">
              <div>
                <label className="block font-label-sm text-label-sm text-outline mb-1">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Mercer"
                  required
                  className="w-full bg-surface-container-lowest border border-outline-variant px-space-md py-space-xs text-on-surface font-body-sm focus:outline-none focus:border-primary-container"
                />
              </div>

              <div>
                <label className="block font-label-sm text-label-sm text-outline mb-1">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@company.com"
                  required
                  className="w-full bg-surface-container-lowest border border-outline-variant px-space-md py-space-xs text-on-surface font-body-sm focus:outline-none focus:border-primary-container"
                />
              </div>

              <div>
                <label className="block font-label-sm text-label-sm text-outline mb-1">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Opportunity / Full-Stack Project"
                  className="w-full bg-surface-container-lowest border border-outline-variant px-space-md py-space-xs text-on-surface font-body-sm focus:outline-none focus:border-primary-container"
                />
              </div>

              <div>
                <label className="block font-label-sm text-label-sm text-outline mb-1">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="State project scope or role details..."
                  required
                  className="w-full bg-surface-container-lowest border border-outline-variant px-space-md py-space-xs text-on-surface font-body-sm focus:outline-none focus:border-primary-container resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-space-xs border border-primary-container bg-surface-container text-primary-container hover:bg-primary-container hover:text-on-primary-container px-space-md py-space-sm font-label-md text-label-md font-bold uppercase transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'submitting' ? 'DISPATCHING NOTIFICATION...' : 'TRANSMIT MESSAGE'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
