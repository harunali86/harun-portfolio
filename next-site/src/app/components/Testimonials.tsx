"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  { name: "Aisha Patel", role: "Client", text: "Harun delivered beyond expectations—clean code, timely delivery, and great communication.", avatar: "https://avatars.githubusercontent.com/u/1?v=4" },
  { name: "Rahul Mehta", role: "Mentor", text: "Strong problem-solving and attention to detail. A pleasure to mentor.", avatar: "https://avatars.githubusercontent.com/u/2?v=4" },
  { name: "Sara Lee", role: "Teammate", text: "Great collaborator—reliable, proactive, and always helpful.", avatar: "https://avatars.githubusercontent.com/u/3?v=4" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto px-6 py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold">Testimonials</h2>
      <div className="mt-6 overflow-x-auto [scroll-snap-type:x_mandatory] hide-scrollbar">
        <div className="flex gap-6 min-w-full pr-6">
          {testimonials.map((t, idx) => (
            <motion.article key={t.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="w-80 flex-shrink-0 [scroll-snap-align:start] rounded-xl border bg-white/60 dark:bg-black/40 backdrop-blur-md p-5 hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <Image src={t.avatar} alt={t.name} width={40} height={40} className="rounded-full" />
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs opacity-70">{t.role}</p>
                </div>
              </div>
              <p className="mt-3 text-sm opacity-90">“{t.text}”</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

