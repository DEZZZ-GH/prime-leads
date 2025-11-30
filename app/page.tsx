// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1120] text-neutral-100 antialiased">

      {/* HEADER */}
      <header className="flex flex-col items-center pt-4">
        <Link href="/">
          <img 
            src="/logo.png" 
            alt="PrimeLeads Logo" 
            className="h-20 w-20 rounded-full"
          />
        </Link>
      </header>

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pt-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>

            <p className="text-base tracking-widest text-[#D4AF37] font-bold mb-2 border-b border-[#D4AF37]/40 inline-block pb-1">
              PRIME LEADS
            </p>

            <h1 className="mt-3 text-4xl font-semibold md:text-6xl text-neutral-100">
              Forex & Recovery Lead Engine
            </h1>

            <p className="mt-4 max-w-xl text-neutral-300">
              High-intent, SMS-verified leads for Forex brokers, investment brands, complaints and recovery teams — with no middlemen.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-[#D4AF37] text-black px-5 py-3 font-medium hover:bg-[#E6C769] transition focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60"
              >
                Get Your Discounted Test Pack
              </a>

              <a
                href="#who"
                className="rounded-xl border border-neutral-700 px-5 py-3 hover:border-neutral-500 transition focus:outline-none focus:ring-2 focus:ring-neutral-500/40"
              >
                Who It’s For
              </a>
            </div>
          </div>

          {/* HERO IMAGE WRAPPER */}
          <div className="relative">
            <div className="rounded-2xl border border-neutral-800 bg-[#0E162A] p-3">
              <img
                src="/cover.png"
                alt="PrimeLeads Preview"
                className="w-full max-w-sm mx-auto rounded-xl shadow-lg cursor-pointer transition hover:opacity-90"
              />
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-[#D4AF37]/20 blur-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= WHO IT’S FOR ================= */}
      <section
        id="who"
        className="mx-auto max-w-6xl px-6 py-20 border-t border-[#1A2333] text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block">
          Who it’s for
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#D4AF37]"></div>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-neutral-400">
          This service is built for teams who need consistent, qualified leads — not random databases.
        </p>

        <ul className="mt-12 grid gap-8 text-neutral-300 md:grid-cols-2 lg:grid-cols-3">

          <Li icon={<IconCheck />}>
            Forex & CFD brokers who want <b className="text-neutral-100">fresh, in-house leads</b>, not recycled lists.
          </Li>

          <Li icon={<IconCheck />}>
            Investment brands looking for <b className="text-neutral-100">funding-ready leads</b> in specific geos.
          </Li>

          <Li icon={<IconCheck />}>
            Complaints / chargeback services needing <b className="text-neutral-100">active users seeking help</b>, not cold names.
          </Li>

          <Li icon={<IconCheck />}>
            Legal / recovery teams working on <b className="text-neutral-100">high-value cases</b> requiring stronger qualification.
          </Li>

          <Li icon={<IconCheck />}>
            Performance marketers demanding <b className="text-neutral-100">clear KPIs, clean data & transparency</b>.
          </Li>

          <Li icon={<IconCheck />}>
            Teams ready to <b className="text-neutral-100">test, measure and scale</b> with a serious partner.
          </Li>

        </ul>
      </section>

      {/* ================= WHAT YOU’LL GET ================= */}
      <section
        id="benefits"
        className="mx-auto max-w-6xl px-6 py-20 border-t border-[#1A2333] text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block">
          What you’ll get
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#D4AF37]"></div>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-neutral-400">
          Core outcomes you get when you plug Prime Leads into your funnel.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <Benefit
            icon={<IconEye />}
            title="High-intent leads"
            text="Real people actively searching for Forex, investment, complaints or recovery solutions — filtered by geo, language and funnel stage."
          />

          <Benefit
            icon={<IconControl />}
            title="Clean, SMS-verified data"
            text="Phone numbers validated via SMS so your team spends time on conversations, not chasing fake or invalid contacts."
          />

          <Benefit
            icon={<IconBolt />}
            title="Scalable traffic engine"
            text="Once KPIs are confirmed, campaigns scale across GCC, EU-Arab audiences, LATAM and major MENA markets."
          />

        </div>
      </section>

      {/* ================= INSIDE THE SERVICE ================= */}
      <section
        id="inside"
        className="mx-auto max-w-6xl px-6 py-20 border-t border-[#1A2333] text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block">
          Inside the service
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#D4AF37]"></div>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-neutral-400">
          Direct. Performance-driven. No resold data.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3 text-left">

          <Card
            icon={<IconGears />}
            title="Targeting & Traffic"
            bullets={[
              "Multi-channel campaigns on Google, social and native.",
              "Geo, language and device targeting tailored to your brand and compliance rules."
            ]}
          />

          <Card
            icon={<IconMind />}
            title="Funnels & Filters"
            bullets={[
              "Custom funnels per lead type: Forex, investment, complaints, recovery.",
              "Basic compliance and intent filters applied before delivery."
            ]}
          />

          <Card
            icon={<IconNoise />}
            title="Delivery & Reporting"
            bullets={[
              "Real-time delivery via API, CRM, sheets or secure files.",
              "Simple performance metrics showing cost, volume and quality clearly."
            ]}
          />

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section
        id="faq"
        className="mx-auto max-w-6xl px-6 py-20 border-t border-[#1A2333] text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block">
          FAQ
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#D4AF37]"></div>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-neutral-400">
          Quick answers to the most common questions.
        </p>

        <div className="mt-6 space-y-3">
          <Faq q="Are these shared or exclusive leads?"
               a="All leads are generated in-house from our own campaigns. No reselling of third-party databases or bulk lists." />

          <Faq q="Which geos do you cover?"
               a="GCC, Arab communities in Europe, LATAM, and selected MENA markets including Iraq, Libya, Morocco and Egypt." />

          <Faq q="How do we start?"
               a="You begin with a discounted Test Pack to validate lead quality, CPL and conversion before scaling." />

          <Faq q="Do you handle calling or closing?"
               a="You keep full control of sales and closing. Prime Leads focuses solely on high-intent generation." />
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-20 border-t border-[#1A2333]"
      >
        <div className="rounded-3xl border border-neutral-800 bg-[#0E162A]/70 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Ready to scale with Prime Leads?
          </h3>

          <p className="mt-3 text-neutral-300">
            Get your discounted Test Pack. Verify quality. Scale with confidence.
          </p>

          <a
            href="#"
            className="mt-6 inline-block rounded-xl bg-[#D4AF37] text-black px-6 py-3 font-medium hover:bg-[#E6C769] transition focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60"
          >
            Contact Us
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Prime Leads — All rights reserved.
        </p>
      </section>

    </main>
  );
}

/* ---------- COMPONENTS (unchanged except colors) ---------- */

function Li({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-neutral-800 bg-[#0E162A]/60 p-4">
      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4AF37]/20 text-[#D4AF37]">
        {icon}
      </span>
      <span>{children}</span>
    </li>
  );
}

function Card({
  icon,
  title,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
}) {
  return (
    <div className="h-full rounded-2xl border border-neutral-800 bg-[#0E162A]/60 p-5">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#D4AF37]/20 text-[#D4AF37]">
          {icon}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-neutral-300">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#D4AF37]/80"></span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Benefit({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-[#0E162A]/60 p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/20 text-[#D4AF37]">
          {icon}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-neutral-300">{text}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border border-neutral-800 bg-[#0E162A]/60 p-4 open:bg-[#0E162A]/80">
      <summary className="cursor-pointer list-none text-base font-medium [&::-webkit-details-marker]:hidden">
        <div className="flex items-center justify-between gap-4">
          <span>{q}</span>
          <span aria-hidden className="text-neutral-500">+</span>
        </div>
      </summary>
      <p className="mt-3 text-neutral-300">{a}</p>
    </details>
  );
}

/* ---------- ICONS (unchanged) ---------- */

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 12a5 5 0 1 1 0-10 5 0 0 1 0 10Z" />
    </svg>
  );
}

function IconControl() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M4 6h16v2H4zM4 11h10v2H4zM4 16h6v2H4z" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M11 21h-1l1-7H7l6-11h1l-1 7h4l-6 11Z" />
    </svg>
  );
}

function IconGears() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 8a4 4 0 1 0 .001 8.001A4 4 0 0 0 12 8Zm9 4a1 1 0 0 0-.76-.97l-1.89-.5a7.97 7.97 0 0 0-.64-1.55l1.12-1.6a1 1 0 0 0-.1-1.28l-1.42-1.42a1 1 0 0 0-1.28-.1l-1.6 1.12a7.97 7.97 0 0 0-1.55-.64l-.5-1.89A1 1 0 0 0 12 3h-2a1 1 0 0 0-.97.76l-.5 1.89c-.54.16-1.06.38-1.55.64L5.38 5.17a1 1 0 0 0-1.28.1L2.68 6.69a1 1 0 0 0-.1 1.28l1.12 1.6c-.26.49-.48 1.01-.64 1.55l-1.89.5A1 1 0 0 0 1 12v2c0 .46.31.86.76.97l1.89.5c.16.54.38 1.06.64 1.55l-1.12 1.6a1 1 0 0 0 .1 1.28l1.42 1.42c.36.36.92.4 1.28.1l1.6-1.12c.49.26 1.01.48 1.55.64l.5 1.89c.11.45.51.76.97.76h2c.46 0 .86-.31.97-.76l.5-1.89c.54-.16 1.06-.38 1.55-.64l1.6 1.12c.36.3.92.26 1.28-.1l1.42-1.42a1 1 0 0 0 .1-1.28l-1.12-1.6c.26-.49.48-1.01.64-1.55l1.89-.5c.45-.11.76-.51.76-.97v-2Z" />
    </svg>
  );
}

function IconMind() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2a8 8 0 0 0-8 8v8h5v4h6v-4h3a2 2 0 0 0 2-2V9a7 7 0 0 0-7-7h-1Z" />
    </svg>
  );
}

function IconNoise() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z" />
    </svg>
  );
}
