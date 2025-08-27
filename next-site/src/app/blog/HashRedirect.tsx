"use client";
import { useEffect } from "react";

const valid = new Set(["hero","about","skills","projects","experience","testimonials","contact"]);

export default function HashRedirect() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const { hash, pathname } = window.location;
    const h = (hash || "").replace(/^#/, "");
    if (valid.has(h)) {
      const parts = pathname.split("/");
      const base = ["", parts[1]].join("/"); // e.g. "/harun-portfolio"
      window.location.replace(`${base}/#${h}`);
    }
  }, []);
  return null;
}

