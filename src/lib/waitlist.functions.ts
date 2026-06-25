import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const waitlistSchema = z.object({
  full_name: z.string().trim().min(2, "Nom trop court").max(120),
  phone: z.string().trim().min(6, "Numéro invalide").max(30),
  province: z.string().trim().min(2).max(80),
  role: z.enum(["agriculteur", "cooperative", "acheteur", "autre"]),
  crops: z.string().trim().max(300).optional().or(z.literal("")),
  notes: z.string().trim().max(500).optional().or(z.literal("")),
});

export const joinWaitlist = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => waitlistSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = createClient<Database>(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      {
        auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
      },
    );

    const { error } = await supabase.from("waitlist").insert({
      full_name: data.full_name,
      phone: data.phone,
      province: data.province,
      role: data.role,
      crops: data.crops || null,
      notes: data.notes || null,
    });

    if (error) {
      console.error("waitlist insert error", error);
      throw new Error("Impossible d'enregistrer votre inscription. Réessayez.");
    }

    return { ok: true };
  });
