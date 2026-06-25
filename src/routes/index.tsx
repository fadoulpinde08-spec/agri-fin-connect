import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import {
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Wallet,
  Users,
  Sprout,
  Building2,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

import heroFarmer from "@/assets/hero-farmer.jpg";
import marketScene from "@/assets/market-scene.jpg";
import fasoPattern from "@/assets/faso-pattern.jpg";
import { joinWaitlist } from "@/lib/waitlist.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NafaPay — Le paiement mobile fait pour l'agriculteur burkinabè" },
      {
        name: "description",
        content:
          "Recevez vos paiements de récoltes en sécurité, payez vos intrants et bâtissez votre historique financier. Compatible Orange Money, Moov Money, Coris Money.",
      },
      { property: "og:title", content: "NafaPay — Paiements agricoles, Burkina Faso" },
      {
        property: "og:description",
        content:
          "La solution de paiement mobile pensée pour les producteurs du Burkina Faso. Sécurité, simplicité, historique financier.",
      },
      { property: "og:image", content: heroFarmer },
      { name: "twitter:image", content: heroFarmer },
    ],
  }),
  component: LandingPage,
});

const provinces = [
  "Boucle du Mouhoun", "Cascades", "Centre", "Centre-Est", "Centre-Nord",
  "Centre-Ouest", "Centre-Sud", "Est", "Hauts-Bassins", "Nord",
  "Plateau-Central", "Sahel", "Sud-Ouest",
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <PatternBand />
        <Problem />
        <HowItWorks />
        <ForWho />
        <Crops />
        <WhyBurkina />
        <Faq />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-baseline gap-1">
          <span className="font-display text-2xl font-bold text-terre">Nafa</span>
          <span className="font-display text-2xl font-bold text-ocre">Pay</span>
        </a>
        <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
          <a href="#fonctionnement" className="hover:text-foreground">Fonctionnement</a>
          <a href="#pour-qui" className="hover:text-foreground">Pour qui</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <a
          href="#inscription"
          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Pré-inscription <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:gap-16 md:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-ocre/30 bg-mil/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-terre">
            <span className="h-1.5 w-1.5 rounded-full bg-ocre" /> Burkina Faso · Lancement 2026
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-encre md:text-6xl">
            Votre récolte mérite{" "}
            <span className="italic text-ocre">d'être payée en sécurité.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            <span className="font-medium text-foreground">Nafa</span> — le profit, en dioula.
            NafaPay permet aux agriculteurs burkinabè de recevoir leurs paiements,
            d'acheter leurs intrants et de bâtir un historique financier qui ouvre l'accès
            au crédit campagne.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#inscription"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Rejoindre la liste d'attente <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#fonctionnement"
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-accent/30"
            >
              Comment ça marche
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-sahel" /> Sécurisé</span>
            <span className="flex items-center gap-1.5"><Smartphone className="h-4 w-4 text-sahel" /> Smartphone non requis</span>
            <span className="flex items-center gap-1.5"><Wallet className="h-4 w-4 text-sahel" /> Orange · Moov · Coris</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 hidden h-32 w-32 rounded-full bg-mil/30 blur-2xl md:block" />
          <div className="absolute -bottom-8 -right-6 hidden h-40 w-40 rounded-full bg-ocre/20 blur-3xl md:block" />
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
            <img
              src={heroFarmer}
              alt="Producteur de mil burkinabè souriant avec un téléphone au coucher du soleil"
              width={1536}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-encre/80 px-4 py-3 text-sable backdrop-blur-sm">
              <p className="font-display text-sm italic">
                « Bãngre — le savoir, c'est aussi savoir ce qu'on gagne. »
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-mil/90">
                Proverbe mooré
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PatternBand() {
  return (
    <div
      aria-hidden
      className="h-6 w-full md:h-8"
      style={{
        backgroundImage: `url(${fasoPattern})`,
        backgroundSize: "auto 100%",
        backgroundRepeat: "repeat-x",
      }}
    />
  );
}

function Problem() {
  const stats = [
    { value: "80%", label: "des Burkinabè vivent de l'agriculture", source: "FAO" },
    { value: "1 sur 3", label: "adultes a un compte financier formel", source: "Findex" },
    { value: "< 10%", label: "des petits producteurs accèdent au crédit campagne", source: "BCEAO" },
  ];
  return (
    <section className="bg-sable">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ocre">Le problème</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-encre md:text-4xl">
              Trop de récoltes, trop de risques, pas assez d'outils.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Le producteur burkinabè vend encore largement en liquide : risque de vol,
              prix négocié à la baisse, aucune trace de la vente. Sans historique financier,
              impossible de demander un crédit pour la campagne suivante.
            </p>
          </div>
          <dl className="grid gap-5 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-5">
                <dt className="font-display text-3xl font-semibold text-terre">{s.value}</dt>
                <dd className="mt-2 text-sm text-foreground">{s.label}</dd>
                <p className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">
                  Source : {s.source}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: Wallet,
      title: "Vendez votre récolte",
      desc: "Acheteur, coopérative ou commerçant : il scanne votre QR ou compose un code USSD pour vous payer.",
    },
    {
      icon: ShieldCheck,
      title: "Recevez en sécurité",
      desc: "L'argent arrive directement sur votre compte NafaPay, sans liquide. Vous gardez la preuve.",
    },
    {
      icon: TrendingUp,
      title: "Réinvestissez sereinement",
      desc: "Payez vos intrants, épargnez pour la prochaine campagne, construisez votre historique de crédit.",
    },
  ];
  return (
    <section id="fonctionnement" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-ocre">Comment ça marche</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-encre md:text-4xl">
            Trois étapes. Aucun guichet. Aucune file d'attente.
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-border bg-card p-6">
              <span className="absolute -top-3 left-6 inline-flex h-7 items-center justify-center rounded-full bg-encre px-3 font-display text-xs font-semibold text-mil">
                Étape {i + 1}
              </span>
              <s.icon className="h-9 w-9 text-ocre" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-xl font-semibold text-encre">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ForWho() {
  const personas = [
    {
      icon: Sprout,
      title: "Agriculteurs",
      desc: "Recevez chaque vente en sécurité. Construisez l'historique qui ouvrira le crédit campagne.",
    },
    {
      icon: Users,
      title: "Coopératives",
      desc: "Centralisez les paiements aux membres, suivez les volumes par culture, simplifiez la comptabilité.",
    },
    {
      icon: Building2,
      title: "Acheteurs & Offtakers",
      desc: "Payez 100 producteurs en un clic. Tracez l'origine, justifiez vos achats, gagnez du temps.",
    },
  ];
  return (
    <section id="pour-qui" className="relative bg-encre text-sable">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-mil">Pour qui</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            Un outil, trois acteurs de la chaîne de valeur agricole.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {personas.map((p) => (
            <div key={p.title} className="rounded-2xl border border-mil/20 bg-white/[0.04] p-6">
              <p.icon className="h-9 w-9 text-mil" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-sable/75">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Crops() {
  const crops = [
    { name: "Coton", emoji: "🌱" },
    { name: "Sorgho", emoji: "🌾" },
    { name: "Mil", emoji: "🌾" },
    { name: "Maïs", emoji: "🌽" },
    { name: "Sésame", emoji: "✨" },
    { name: "Niébé", emoji: "🫘" },
    { name: "Karité", emoji: "🌰" },
  ];
  return (
    <section className="bg-sable">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={marketScene}
              alt="Marché de céréales au Burkina Faso, sacs de sorgho, mil et sésame"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ocre">Cultures couvertes</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-encre md:text-4xl">
              Les filières du Faso, sans exception.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Que vous cultiviez pour le marché local, l'export ou la transformation,
              NafaPay s'adapte à votre filière.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {crops.map((c) => (
                <li
                  key={c.name}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
                >
                  <span aria-hidden>{c.emoji}</span> {c.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyBurkina() {
  const pillars = [
    { title: "Ancrage local", desc: "Une équipe basée à Ouagadougou, qui parle français, mooré et dioula." },
    { title: "Réseau d'agents", desc: "Des points relais dans les marchés ruraux pour aider à l'inscription et au dépôt." },
    { title: "Partenariats financiers", desc: "Collaboration avec institutions de microfinance et ONG agricoles du Sahel." },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ocre">Pourquoi le Burkina</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-encre md:text-4xl">
              Construit ici, pour ici.
            </h2>
            <p className="mt-4 text-muted-foreground">
              NafaPay n'est pas une copie d'une solution étrangère. C'est une réponse
              pensée pour les réalités du producteur burkinabè : connectivité variable,
              alphabétisation diverse, paiement en plusieurs réseaux.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-display text-lg font-semibold text-terre">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    {
      q: "Faut-il un smartphone ?",
      a: "Non. NafaPay fonctionne aussi avec un téléphone classique grâce à un code USSD (*xxx#). Le smartphone donne accès à plus de fonctionnalités, mais n'est pas obligatoire.",
    },
    {
      q: "Quels sont les frais ?",
      a: "Pour l'agriculteur, recevoir un paiement est gratuit. Les frais sont supportés par l'acheteur ou la coopérative, et restent inférieurs aux pratiques actuelles du mobile money.",
    },
    {
      q: "Mon argent est-il en sécurité ?",
      a: "Oui. Les fonds sont conservés auprès d'un partenaire bancaire agréé au Burkina Faso et protégés par un code secret personnel. En cas de perte de téléphone, votre compte reste protégé.",
    },
    {
      q: "Dans quelles langues ?",
      a: "L'application sera disponible en français, mooré et dioula dès le lancement, avec un support audio pour les utilisateurs qui préfèrent.",
    },
    {
      q: "Comment m'inscrire si je suis loin d'une ville ?",
      a: "Nous déployons un réseau d'agents de proximité dans les marchés ruraux et chez les coopératives partenaires. Pré-inscrivez-vous : nous viendrons à vous.",
    },
  ];
  return (
    <section id="faq" className="bg-sable">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-ocre">Questions fréquentes</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-encre md:text-4xl">
          Ce que les producteurs nous demandent.
        </h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-encre">
                {f.q}
                <span className="text-2xl text-ocre transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaitlistForm() {
  const navigate = useNavigate();
  const submit = useServerFn(joinWaitlist);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const fd = new FormData(e.currentTarget);
    try {
      await submit({
        data: {
          full_name: String(fd.get("full_name") || ""),
          phone: String(fd.get("phone") || ""),
          province: String(fd.get("province") || ""),
          role: String(fd.get("role") || "agriculteur") as
            | "agriculteur" | "cooperative" | "acheteur" | "autre",
          crops: String(fd.get("crops") || ""),
          notes: String(fd.get("notes") || ""),
        },
      });
      navigate({ to: "/merci" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Une erreur est survenue.";
      setError(message);
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ocre focus:outline-none focus:ring-2 focus:ring-ocre/30";
  const label = "block text-sm font-medium text-encre";

  return (
    <section id="inscription" className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-6"
        style={{
          backgroundImage: `url(${fasoPattern})`,
          backgroundSize: "auto 100%",
          backgroundRepeat: "repeat-x",
        }}
      />
      <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-ocre">Pré-inscription</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-encre md:text-5xl">
            Soyez parmi les premiers servis.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Renseignez-vous en deux minutes. Nous vous contactons dès l'ouverture de NafaPay
            dans votre province — sans engagement.
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="full_name" className={label}>Nom complet</label>
              <input id="full_name" name="full_name" required maxLength={120} className={`${field} mt-1.5`} placeholder="Ex : Salif Ouédraogo" />
            </div>
            <div>
              <label htmlFor="phone" className={label}>Numéro de téléphone</label>
              <input id="phone" name="phone" required maxLength={30} inputMode="tel" className={`${field} mt-1.5`} placeholder="+226 70 00 00 00" />
            </div>
            <div>
              <label htmlFor="province" className={label}>Province</label>
              <select id="province" name="province" required className={`${field} mt-1.5`} defaultValue="">
                <option value="" disabled>Choisir une province…</option>
                {provinces.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="role" className={label}>Vous êtes…</label>
              <select id="role" name="role" required className={`${field} mt-1.5`} defaultValue="agriculteur">
                <option value="agriculteur">Agriculteur</option>
                <option value="cooperative">Coopérative</option>
                <option value="acheteur">Acheteur / Offtaker</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="crops" className={label}>
                Cultures principales <span className="text-muted-foreground">(facultatif)</span>
              </label>
              <input id="crops" name="crops" maxLength={300} className={`${field} mt-1.5`} placeholder="Ex : sorgho, sésame, niébé" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="notes" className={label}>
                Un mot pour nous <span className="text-muted-foreground">(facultatif)</span>
              </label>
              <textarea id="notes" name="notes" maxLength={500} rows={3} className={`${field} mt-1.5 resize-none`} placeholder="Ce qui vous bloque aujourd'hui, ce dont vous auriez besoin…" />
            </div>
          </div>

          {error && (
            <p className="mt-5 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </p>
          )}

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              Vos données sont confidentielles et ne seront utilisées que pour vous contacter.
            </p>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Enregistrement…" : "Rejoindre la liste"}
              {status !== "loading" && <ArrowRight className="h-4 w-4" />}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-encre text-sable/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-2xl font-bold text-mil">Nafa</span>
            <span className="font-display text-2xl font-bold text-ocre">Pay</span>
          </div>
          <p className="mt-3 text-sm text-sable/70">
            Le paiement mobile pensé pour les producteurs du Burkina Faso.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-display text-base font-semibold text-sable">Contact</p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-mil" /> +226 00 00 00 00</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-mil" /> hello@nafapay.bf</li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-display text-base font-semibold text-sable">Navigation</p>
          <ul className="mt-3 space-y-2">
            <li><a href="#fonctionnement" className="hover:text-sable">Fonctionnement</a></li>
            <li><a href="#pour-qui" className="hover:text-sable">Pour qui</a></li>
            <li><a href="#faq" className="hover:text-sable">FAQ</a></li>
            <li><a href="#inscription" className="hover:text-sable">Pré-inscription</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-mil/10 py-5 text-center text-xs text-sable/50">
        © {new Date().getFullYear()} NafaPay · Ouagadougou, Burkina Faso
      </div>
    </footer>
  );
}
