"use client";
import { useEffect, useRef, useState } from "react";

type RecognitionEvent = { results: ArrayLike<ArrayLike<{ transcript: string }>> };
type SpeechRecognitionCtor = new () => {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: (e: RecognitionEvent) => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
};

export default function VoiceInput({ onResult }: { onResult: (text: string) => void }) {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<InstanceType<SpeechRecognitionCtor> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const anyWindow = window as unknown as { webkitSpeechRecognition?: SpeechRecognitionCtor; SpeechRecognition?: SpeechRecognitionCtor };
    const SpeechRecognition = anyWindow.webkitSpeechRecognition || anyWindow.SpeechRecognition;
    if (!SpeechRecognition) return;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (e: RecognitionEvent) => {
      const transcript = e.results[0][0].transcript;
      onResult(transcript);
      setListening(false);
    };
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition as InstanceType<SpeechRecognitionCtor>;
  }, [onResult]);

  const toggle = () => {
    const r = recognitionRef.current;
    if (!r) return;
    if (listening) { r.stop(); setListening(false); } else { r.start(); setListening(true); }
  };

  if (!recognitionRef.current) return null;
  return (
    <button type="button" onClick={toggle} className={`rounded-md border px-3 py-2 text-xs ${listening ? "bg-green-500/20 border-green-400" : "hover:bg-white/10"}`}>
      {listening ? "Listening..." : "Voice input"}
    </button>
  );
}

