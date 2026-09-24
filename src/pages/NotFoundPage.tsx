import React from 'react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
  reason?: 'route' | 'share_token' | 'kit_id';
  identifier?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigate,
  reason = 'route',
  identifier
}) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-[#0A0A0A] text-[#F4EFE6] selection:bg-[#F4EFE6] selection:text-[#0A0A0A] animate-ink-bleed">
      <div className="max-w-2xl w-full p-8 sm:p-12 border-2 border-[#F4EFE6]/30 bg-[#141414] space-y-8">
        {/* Status Line */}
        <div className="flex items-center justify-between border-b border-[#F4EFE6]/20 pb-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-[#C0392B] font-bold tracking-[0.2em] uppercase">
            <span className="w-2.5 h-2.5 bg-[#C0392B] inline-block" />
            <span>
              {reason === 'share_token'
                ? '// TOKEN NOT RESOLVED'
                : reason === 'kit_id'
                ? '// KIT IDENTIFIER EXPIRED'
                : '// 404 — SIGNAL NOT FOUND'}
            </span>
          </div>
          <span className="text-[#F4EFE6]/50 tracking-wider">HTTP 404 // NULL_RESPONSE</span>
        </div>

        {/* Display Headline */}
        <div>
          <h1 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-[#F4EFE6] mb-4 leading-none">
            {reason === 'share_token'
              ? 'Invalid Share Token'
              : reason === 'kit_id'
              ? 'Kit Record Expired'
              : 'Signal Not Found'}
          </h1>
          <p className="font-editorial-body text-base text-[#F4EFE6]/70 leading-relaxed">
            {reason === 'share_token'
              ? `The public share token "${identifier || 'null'}" could not be resolved in the Supabase cache. Public links expire after 30 days of inactivity or may have been revoked by the creator.`
              : reason === 'kit_id'
              ? `The requested kit ID "${identifier || 'null'}" is no longer active in memory or has been purged according to our 30-day anonymous retention policy.`
              : 'The requested route or document node does not exist within the Brand DNA execution space. The crawler encountered an unmapped endpoint.'}
          </p>
        </div>

        {/* Diagnostic Specimen */}
        <div className="p-4 border border-[#F4EFE6]/20 bg-[#0A0A0A] font-mono text-xs text-[#F4EFE6]/80 space-y-1">
          <div>ENDPOINT: {window.location.pathname}</div>
          <div>STATUS: ROUTE_UNRESOLVED</div>
          <div>TIMESTAMP: {new Date().toISOString()}</div>
          <div>SUGGESTION: VERIFY TARGET URI OR INITIALIZE NEW EXTRACTION</div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="w-full sm:w-auto font-mono text-xs font-bold uppercase tracking-[0.16em] px-6 py-3 border border-[#F4EFE6] bg-[#F4EFE6] text-[#0A0A0A] hover:bg-[#C0392B] hover:border-[#C0392B] hover:text-[#0A0A0A] transition-colors"
          >
            [ RETURN TO RUNTIME // ROOT ↗ ]
          </button>
          <button
            type="button"
            onClick={() => onNavigate('/contact')}
            className="w-full sm:w-auto font-mono text-xs font-bold uppercase tracking-[0.16em] px-6 py-3 border border-[#F4EFE6]/40 text-[#F4EFE6] hover:bg-[#F4EFE6]/10 transition-colors"
          >
            [ REPORT SYSTEM ANOMALY ]
          </button>
        </div>
      </div>
    </div>
  );
};
