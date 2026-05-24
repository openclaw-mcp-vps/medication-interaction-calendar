export default function Page() {
  const faqs = [
    {
      q: "How does the interaction checker work?",
      a: "MedCal cross-references your medication list against a curated database of known drug-drug and drug-food interactions, flagging conflicts in real time."
    },
    {
      q: "Can caregivers manage multiple patients?",
      a: "Yes. Each subscription supports multiple medication profiles so caregivers can track schedules for everyone in their care from one dashboard."
    },
    {
      q: "Is my health data private?",
      a: "All data is encrypted at rest and in transit. We never sell or share your information with third parties."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Health Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Medication Timing<br />&amp; Interactions
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          MedCal warns you about drug interactions, food conflicts, and optimal dosing windows — all in one clean dashboard built for patients, caregivers, and chronic-condition management.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $11 / mo
        </a>
        <ul className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#8b949e]">
          {["Drug–drug interaction alerts", "Food conflict warnings", "Optimal timing reminders", "Multiple patient profiles"].map((f) => (
            <li key={f} className="flex items-center gap-1">
              <span className="text-[#58a6ff]">✓</span> {f}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$11</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited medications",
              "Real-time interaction checker",
              "Food & supplement conflict alerts",
              "Daily schedule reminders",
              "Up to 5 patient profiles",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} MedCal. All rights reserved.
      </footer>
    </main>
  );
}
