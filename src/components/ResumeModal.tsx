import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useMedia } from '../hooks/useMedia';
import { EASE } from './fx';
import { ResumeSheet } from './ResumeViewer';

/** Full-screen Resume viewer with interactive sheet and PDF support. */
export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const small = useMedia('(max-width: 767px)');
  const [viewPdf, setViewPdf] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3 pt-[env(safe-area-inset-top)]">
        <div className="flex items-center gap-3">
          <p className="truncate font-display text-2xl tracking-wide text-bone">The Full Story</p>
          {!small && (
            <button
              type="button"
              onClick={() => setViewPdf(!viewPdf)}
              className="rounded-full border border-white/20 px-3 py-1 text-xs text-mist hover:border-white/50 hover:text-bone"
            >
              {viewPdf ? 'View Designed Sheet' : 'View PDF Document'}
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={profile.resumePdf}
            download="Vishnu_Prasath_V_Resume.pdf"
            className="rounded-md bg-bone px-4 py-2 text-xs font-bold text-ink hover:bg-white"
          >
            ⤓ Download
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume"
            data-cursor="close"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      </div>
      <motion.div
        className="gutter flex-1 pb-6"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {small || !viewPdf ? (
          <div data-lenis-prevent className="h-full overflow-y-auto pr-1">
            <ResumeSheet />
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="glass mt-4 flex min-h-12 items-center justify-center rounded-md text-sm font-semibold text-bone hover:bg-white/15"
            >
              Open original PDF ↗
            </a>
          </div>
        ) : (
          <iframe
            title="Vishnu Prasath V resume (PDF)"
            src={`${profile.resumePdf}#view=FitH`}
            className="h-full w-full rounded-xl bg-white"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
