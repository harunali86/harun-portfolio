"use client";
import { motion } from "framer-motion";
import ContactScene from "./ContactScene";
import confetti from "canvas-confetti";
import { useState } from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import MagneticButton from "./MagneticButton";
import VoiceInput from "./VoiceInput";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setLoading(false);
      setError("Please fill all fields with a valid email.");
      form.classList.remove("shake");
      void form.offsetWidth; // reflow
      form.classList.add("shake");
      return;
    }
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSuccess(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    form.reset();
  };

  return (
    <section id="contact" className="relative container mx-auto px-6 py-24">
      <ContactScene />
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
        Let’s Build Something Amazing Together 🚀
      </motion.h2>
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="mt-10 mx-auto max-w-3xl rounded-2xl border border-white/20 dark:border-white/10 bg-white/5 dark:bg-black/10 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.15)]">
        <div className="p-[1px] rounded-2xl bg-[conic-gradient(at_20%_20%,rgba(34,211,238,0.5),transparent_30%,rgba(168,85,247,0.5)_70%)]">
          <div className="rounded-2xl bg-white/10 dark:bg-black/30 p-6 sm:p-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input name="name" className="w-full rounded-md border bg-white/70 dark:bg-black/40 px-3 py-2 outline-none transition focus:border-cyan-400 focus:ring-[3px] focus:ring-cyan-400/30" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input name="email" type="email" className="w-full rounded-md border bg-white/70 dark:bg-black/40 px-3 py-2 outline-none transition focus:border-cyan-400 focus:ring-[3px] focus:ring-cyan-400/30" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea name="message" rows={4} className="w-full rounded-md border bg-white/70 dark:bg-black/40 px-3 py-2 outline-none transition focus:border-cyan-400 focus:ring-[3px] focus:ring-cyan-400/30" placeholder="Tell me about your project..." />
              </div>
              {error ? <p className="text-sm text-red-500">{error}</p> : null}
              {success ? <p className="text-sm text-green-500">Thanks! I will get back to you shortly.</p> : null}
              <div className="flex items-center gap-3">
                <MagneticButton disabled={loading} className="group border-cyan-500/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                  {loading ? "Sending..." : "Send Message"}
                </MagneticButton>
                <a href="/Harun-Shaikh-Resume.pdf" className="rounded-md border px-5 py-2.5 text-sm hover:bg-white/10 dark:hover:bg-white/5 transition">Download Resume</a>
                <VoiceInput onResult={(t)=>{
                  const ta = document.querySelector<HTMLTextAreaElement>('textarea[name="message"]');
                  if (ta) ta.value = (ta.value + ' ' + t).trim();
                }} />
              </div>
            </form>

            <div className="mt-8 flex items-center gap-4">
              <a href="https://github.com/harunali86" target="_blank" className="inline-flex h-10 w-10 items-center justify-center rounded-full border hover:scale-110 hover:rotate-3 transition" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/harun-shaikh-0947751ba" target="_blank" className="inline-flex h-10 w-10 items-center justify-center rounded-full border hover:scale-110 hover:-rotate-3 transition" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:Harun.ilahi.shaikh@gmail.com" className="inline-flex h-10 w-10 items-center justify-center rounded-full border hover:scale-110 transition" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx global>{`
        .shake { animation: shake 320ms ease-in-out; }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-3px); }
          40% { transform: translateX(3px); }
          60% { transform: translateX(-2px); }
          80% { transform: translateX(2px); }
        }
      `}</style>
    </section>
  );
}

