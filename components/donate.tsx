import { CreditCard, Heart, Smartphone } from "lucide-react";

const paymentOptions = [
  {
    label: "M-Pesa Paybill",
    value: "522533",
    icon: Smartphone,
  },
  {
    label: "Vooma App",
    value: "Dial *844#",
    icon: Smartphone,
  },
  {
    label: "Airtel Paybill",
    value: "522533",
    icon: Smartphone,
  },
  {
    label: "T-Kash",
    value: "Dial *334#",
    icon: Smartphone,
  },
];

export function Donate() {
  return (
    <section
      id="donate"
      aria-labelledby="donate-heading"
      className="relative mt-16 overflow-hidden rounded-4xl bg-deep-green px-6 py-8 text-white shadow-sm sm:px-10 sm:py-10 lg:px-14"
    >
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border-22 border-bright-gold/20" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-leaf-green/15 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
        <div>
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-bright-gold text-deep-green">
            <Heart className="h-5 w-5 fill-current" aria-hidden="true" />
          </div>
          <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-bright-gold">
            Support the work
          </p>
          <h2 id="donate-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Every contribution helps <em>good work grow.</em>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
            Feel free to support INUKA 34 through the payment options below. Your contribution helps strengthen community-led climate action, livelihoods, and practical opportunity.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {paymentOptions.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-white/65">
                <Icon className="h-4 w-4 text-bright-gold" aria-hidden="true" />
                {label}
              </div>
              <p className="mt-2 text-xl font-semibold text-white">{value}</p>
            </div>
          ))}
          <div className="sm:col-span-2 grid gap-3 rounded-2xl border border-bright-gold/35 bg-bright-gold px-4 py-4 text-deep-green sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <CreditCard className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-deep-green/65">KCB account number</p>
                <p className="mt-1 text-2xl font-bold tracking-wide">8058957</p>
              </div>
            </div>
            <div className="border-t border-deep-green/15 pt-3 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-deep-green/65">Business name</p>
              <p className="mt-1 text-lg font-bold">Inuka 034 Initiative</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
