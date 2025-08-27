import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Section({ id, title, children }: { id: string; title?: string; children: ReactNode }) {
  return (
    <section id={id} className="container mx-auto px-6 py-20">
      {title ? (
        <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
      ) : null}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        {children}
      </motion.div>
    </section>
  );
}

