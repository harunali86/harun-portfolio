declare module "canvas-confetti" {
  type Options = {
    particleCount?: number;
    spread?: number;
    origin?: { x?: number; y?: number };
    angle?: number;
    startVelocity?: number;
    decay?: number;
    scalar?: number;
    ticks?: number;
    colors?: string[];
  };
  export default function confetti(opts?: Options): void;
}