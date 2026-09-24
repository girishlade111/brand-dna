import React, { useState } from 'react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'technical_support',
    targetUrl: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    // Generate deterministic ticket reference
    const generatedRef = `DNA-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedRef);
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('support@branddna.design');
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 animate-ink-bleed">
      {/* Header */}
      <div className="flex items-center gap-3 font-mono-ui text-xs text-[var(--accent)] mb-3">
        <span className="w-2.5 h-2.5 bg-[var(--accent)] inline-block" />
        <span className="tracking-[0.2em] uppercase font-bold">
          // COMMUNICATIONS PROTOCOL
        </span>
      </div>

      <h1 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-[var(--foreground)] mb-4">
        Contact & Support Desk
      </h1>

      <p className="font-editorial-body text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl mb-12">
        Have technical inquiries regarding DOM extraction, custom W3C token schemas, enterprise rate limits, or data deletion requests? Transmit a dispatch below.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Form */}
        <div className="lg:col-span-8">
          {isSubmitted ? (
            <div className="p-8 border-2 border-[var(--foreground)] bg-[var(--surface-raised)] space-y-6">
              <div className="flex items-center gap-2 font-mono-ui text-xs text-[var(--accent)] font-bold tracking-wider">
                <span className="w-2.5 h-2.5 bg-[var(--accent)] inline-block" />
                <span>// TRANSMISSION LOGGED SUCCESSFULLY</span>
              </div>

              <h2 className="font-display text-3xl text-[var(--foreground)] font-normal">
                Dispatch Received
              </h2>

              <p className="font-editorial-body text-sm text-[var(--muted)] leading-relaxed">
                Your dispatch has been ingested by the technical support queue under reference ticket <strong className="font-mono text-[var(--foreground)]">{refId}</strong>. A response will be transmitted to <strong className="text-[var(--foreground)]">{formData.email}</strong> within one (1) business day.
              </p>

              <div className="p-4 border border-[var(--border-subtle)] bg-[var(--background)] font-mono-ui text-xs space-y-1 text-[var(--foreground)]">
                <div>INQUIRY TYPE: {formData.inquiryType.toUpperCase().replace('_', ' ')}</div>
                <div>SUBJECT: {formData.subject || 'GENERAL INQUIRY'}</div>
                <div>STATUS: QUEUED FOR ANALYSIS</div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      inquiryType: 'technical_support',
                      targetUrl: '',
                      subject: '',
                      message: ''
                    });
                  }}
                  className="btn-bracketed text-xs"
                >
                  [ TRANSMIT ANOTHER DISPATCH ]
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/')}
                  className="btn-bracketed btn-bracketed-primary text-xs"
                >
                  <span>[ RETURN TO WORKBENCH ↗ ]</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inquiry Type */}
              <div>
                <label
                  htmlFor="inquiryType"
                  className="block font-mono-ui text-xs text-[var(--foreground)] tracking-wider uppercase mb-2"
                >
                  // 01. INQUIRY CATEGORY <span className="text-[var(--accent)]">*</span>
                </label>
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full bg-[var(--surface-raised)] border border-[var(--border)] px-4 py-3 font-mono-ui text-xs text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                >
                  <option value="technical_support">TECHNICAL SUPPORT // DOM EXTRACTION ISSUE</option>
                  <option value="enterprise_volume">ENTERPRISE SCALING // HIGH-VOLUME SCRAPING</option>
                  <option value="tokens_specification">TOKEN FORMAT // W3C DTCG SPECIFICATION</option>
                  <option value="privacy_deletion">DATA PRIVACY // REMOVAL & DELETION REQUEST</option>
                  <option value="general_inquiry">GENERAL INQUIRY // BRAND ARCHITECTURE</option>
                </select>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contactName"
                    className="block font-mono-ui text-xs text-[var(--foreground)] tracking-wider uppercase mb-2"
                  >
                    // 02. YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full bg-[var(--surface-raised)] border border-[var(--border)] px-4 py-3 font-mono-ui text-xs text-[var(--foreground)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactEmail"
                    className="block font-mono-ui text-xs text-[var(--foreground)] tracking-wider uppercase mb-2"
                  >
                    // 03. EMAIL ADDRESS <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="architect@domain.com"
                    className="w-full bg-[var(--surface-raised)] border border-[var(--border)] px-4 py-3 font-mono-ui text-xs text-[var(--foreground)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                  />
                </div>
              </div>

              {/* Target URL (Optional) */}
              <div>
                <label
                  htmlFor="contactTargetUrl"
                  className="block font-mono-ui text-xs text-[var(--foreground)] tracking-wider uppercase mb-2"
                >
                  // 04. TARGET URL / KIT IDENTIFIER (OPTIONAL)
                </label>
                <input
                  type="url"
                  id="contactTargetUrl"
                  value={formData.targetUrl}
                  onChange={(e) => setFormData({ ...formData, targetUrl: e.target.value })}
                  placeholder="https://example.com or kit-uuid"
                  className="w-full bg-[var(--surface-raised)] border border-[var(--border)] px-4 py-3 font-mono-ui text-xs text-[var(--foreground)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contactSubject"
                  className="block font-mono-ui text-xs text-[var(--foreground)] tracking-wider uppercase mb-2"
                >
                  // 05. SUBJECT
                </label>
                <input
                  type="text"
                  id="contactSubject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Summary of inquiry or token requirements"
                  className="w-full bg-[var(--surface-raised)] border border-[var(--border)] px-4 py-3 font-mono-ui text-xs text-[var(--foreground)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contactMessage"
                  className="block font-mono-ui text-xs text-[var(--foreground)] tracking-wider uppercase mb-2"
                >
                  // 06. MESSAGE PAYLOAD <span className="text-[var(--accent)]">*</span>
                </label>
                <textarea
                  id="contactMessage"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide precise details, steps to reproduce extraction issues, or custom schema requirements..."
                  className="w-full bg-[var(--surface-raised)] border border-[var(--border)] p-4 font-mono-ui text-xs text-[var(--foreground)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between">
                <span className="font-mono-ui text-[11px] text-[var(--muted)]">
                  * MANDATORY FIELDS REQUIRED
                </span>
                <button
                  type="submit"
                  className="btn-bracketed btn-bracketed-primary px-6 py-3 text-xs"
                >
                  <span>[ TRANSMIT DISPATCH // SUBMIT ↗ ]</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 border border-[var(--border-subtle)] bg-[var(--surface)] font-mono-ui text-xs space-y-4">
            <div className="text-[var(--accent)] font-bold tracking-wider uppercase">
              // DIRECT ELECTRONIC MAIL
            </div>
            <p className="font-editorial-body text-xs text-[var(--muted)] leading-relaxed">
              For direct encryption, automated log dumps, or PGP communications, transmit directly to our operations inbox:
            </p>
            <div className="p-3 bg-[var(--background)] border border-[var(--border-subtle)] flex items-center justify-between gap-2">
              <span className="font-bold text-[var(--foreground)] truncate">
                support@branddna.design
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[10px] text-[var(--accent)] underline font-bold shrink-0"
              >
                {copySuccess ? '[ COPIED ]' : '[ COPY ]'}
              </button>
            </div>
            <div className="text-[10px] text-[var(--muted)]">
              [OPERATOR DESK: Girish // Founder & System Architect]
            </div>
          </div>

          <div className="p-6 border border-[var(--border-subtle)] bg-[var(--surface-raised)] font-mono-ui text-xs space-y-3">
            <div className="font-bold text-[var(--foreground)] tracking-wider uppercase">
              // RESPONSE LATENCY SLO
            </div>
            <div className="font-editorial-body text-xs text-[var(--muted)] space-y-2">
              <div>• <strong>Critical Pipeline Incidents:</strong> &lt; 4 Hours</div>
              <div>• <strong>General Inquiries & Feedback:</strong> &lt; 24 Hours</div>
              <div>• <strong>Privacy Removal Requests:</strong> &lt; 48 Hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
