import { motion } from 'framer-motion';
import { education, profile } from '../data/portfolio';
import { Counter, EASE, SectionHeading, Tilt } from './fx';

export default function About() {
  const metrics = [
    { label: 'CGPA', val: 7.43, decimals: 2, sub: 'B.Tech IT (2023-2027)' },
    { label: 'LeetCode Rank', val: 444, suffix: 'k+', sub: 'Global Ranking' },
    { label: 'Platform Dev I', val: 91, suffix: '%', sub: 'Salesforce Certified' },
    { label: 'PostgreSQL Score', val: 90, suffix: '%', sub: 'IIT Bombay Certified' },
  ];

  const facts = [
    { k: 'Education', v: 'B.Tech in IT', s: `${education[0].school} · CGPA ${education[0].score}` },
    { k: 'Target Role', v: 'Data Scientist', s: 'Blue Yonder' },
    { k: 'Primary Focus', v: 'RDBMS & Java', s: 'PostgreSQL, SQL, Apex & SOQL' },
    { k: 'Based in', v: profile.location, s: 'Tamil Nadu, India' },
  ];

  return (
    <>
      <SectionHeading kicker="The Pilot" title="About Me" />
      <div className="gutter grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <motion.div
          className="mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <Tilt max={6} className="sheen-card group rounded-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10 transition-shadow duration-500 group-hover:ring-crimson-2/40 group-hover:shadow-[0_25px_60px_-15px_rgba(229,19,43,0.3)]">
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,#5a0b1b,#14060a_60%,#07070a)]" />
              <div className="absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_28px)]" />
              <img
                src={profile.portrait.src}
                srcSet={profile.portrait.srcSet}
                sizes="(max-width: 1024px) 90vw, 40vw"
                alt={profile.portrait.alt}
                loading="lazy"
                className="absolute bottom-0 left-1/2 h-[92%] w-auto max-w-none -translate-x-[48%] object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-crimson-2">STARRING</p>
                  <p className="font-display text-3xl leading-none text-bone">{profile.displayName}</p>
                </div>
                <span className="rounded border border-white/30 px-1.5 py-0.5 text-[10px] font-bold text-bone">2023–2027</span>
              </div>
            </div>
          </Tilt>
        </motion.div>

        <div>
          <motion.p
            className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] italic leading-[1.2] text-bone"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
          >
            “{profile.intro}”
          </motion.p>
          <p className="mt-4 text-sm text-mist">— {profile.fullName}</p>

          {/* Live Animated Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="glass sheen-card rounded-xl p-3.5 ring-1 ring-white/10 transition-all duration-300 hover:border-white/25 hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)]">
                <p className="font-display text-2xl tracking-wide text-bone sm:text-3xl">
                  <Counter value={m.val} suffix={m.suffix} decimals={m.decimals || 0} />
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-crimson-2">{m.label}</p>
                <p className="text-[10px] text-smoke">{m.sub}</p>
              </div>
            ))}
          </div>

          <motion.dl
            className="mt-6 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >
            {facts.map((f) => (
              <motion.div
                key={f.k}
                className="bg-ink-2 p-5 transition-colors hover:bg-ink-3"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">{f.k}</dt>
                <dd className="mt-2 text-base font-semibold text-bone">{f.v}</dd>
                <dd className="mt-0.5 text-xs text-mist">{f.s}</dd>
              </motion.div>
            ))}
          </motion.dl>

          <div className="mt-8">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">Interests & Focus Areas</p>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((i) => (
                <span key={i} className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-bone transition-transform duration-300 hover:scale-105 hover:border-white/30 cursor-default">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
