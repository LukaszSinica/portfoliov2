"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, SendHorizonal } from "lucide-react";
import LocaleText from "../ui/localeText";
import { useTranslation } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  console.log(errors.name)
  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input placeholder={t('email_form.your_name')} {...register("name")} />
            {errors.name && <p className="text-red-500 text-sm">{t(`email_form.errors.${errors.name.message}`)}</p>}
          </div>

          <div>
            <Input type="email" placeholder={t('email_form.your_email')} {...register("email")} />
            {errors.email && <p className="text-red-500 text-sm">{t(`email_form.errors.${errors.email.message}`)}</p>}
          </div>

          <div>
            <Textarea placeholder={t('email_form.your_message')} {...register("message")} />
            {errors.message && <p className="text-red-500 text-sm">{t(`email_form.errors.${errors.message.message}`)}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={status === "loading"}>
            {status === "loading" ? 
                <Loader2 className="animate-spin" size={18} /> : 
                <div className="flex justify-center items-center gap-2">                  
                    <LocaleText name="send_email" styles="font-medium"/>
                    <SendHorizonal className="" size={24} />
                </div>
                }
          </Button>

          {status === "success" && <p className="text-green-500 text-center text-sm">{t("form.responses.success")}</p>}
          {status === "error" && <p className="text-red-500 text-center text-sm">{t("form.responses.error")}</p>}
        </form>
  );
}