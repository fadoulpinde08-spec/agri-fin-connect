import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/merci")({
  head: () => ({
    meta: [
      { title: "Merci — NafaPay" },
      { name: "description", content: "Votre pré-inscription à NafaPay a bien été enregistrée." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: MerciPage,
});

function MerciPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-sable px-4 py-16">
      <div className="max-w-lg text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sahel text-sable">
          <Check className="h-8 w-8" strokeWidth={2.5} />
        </div>
        <h1 className="mt-6 text-4xl font-display font-semibold text-encre">
          Barka ! Merci pour votre confiance.
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Votre pré-inscription est enregistrée. Notre équipe vous contactera dès l'ouverture
          de NafaPay dans votre province. En attendant, parlez-en autour de vous —
          chaque producteur compte.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
