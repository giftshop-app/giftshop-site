import styles from "./coming-soon.module.css";

type DecorItem = {
  emoji: string;
  top: string;
  left?: string;
  right?: string;
  size: string;
  rotate: number;
  delay: string;
  opacity?: number;
};

const DESKTOP_ITEMS: DecorItem[] = [
  { emoji: "🎁", top: "12%", left: "8%",  size: "56px", rotate: -12, delay: "0s",   opacity: 0.9 },
  { emoji: "🎀", top: "18%", right: "10%", size: "62px", rotate: 16,  delay: "0.4s", opacity: 0.9 },
  { emoji: "✨", top: "48%", left: "5%",  size: "42px", rotate: -22, delay: "0.8s", opacity: 0.8 },
  { emoji: "✨", top: "45%", right: "6%", size: "48px", rotate: 20,  delay: "1.2s", opacity: 0.8 },
  { emoji: "🎁", top: "75%", left: "18%", size: "66px", rotate: 12,  delay: "1.6s", opacity: 0.9 },
  { emoji: "🎀", top: "78%", right: "15%", size: "58px", rotate: -14, delay: "2.0s", opacity: 0.9 },
  { emoji: "✨", top: "30%", left: "45%", size: "28px", rotate: 8,   delay: "2.4s", opacity: 0.5 },
];

const MOBILE_ITEMS: DecorItem[] = [
  { emoji: "🎁", top: "14%", left: "4%",  size: "40px", rotate: -12, delay: "0s",   opacity: 0.9 },
  { emoji: "🎀", top: "18%", right: "6%", size: "44px", rotate: 16,  delay: "0.4s", opacity: 0.9 },
  { emoji: "🎁", top: "72%", left: "6%",  size: "44px", rotate: 12,  delay: "1.2s", opacity: 0.9 },
  { emoji: "🎀", top: "76%", right: "6%", size: "40px", rotate: -14, delay: "1.6s", opacity: 0.9 },
];

function renderItem(item: DecorItem, idx: number, key: string) {
  const baseTransform = `rotate(${item.rotate}deg)`;
  return (
    <span
      key={`${key}-${idx}`}
      aria-hidden="true"
      className={styles.decor}
      style={{
        position: "absolute",
        top: item.top,
        left: item.left,
        right: item.right,
        fontSize: item.size,
        opacity: item.opacity ?? 1,
        animationDelay: item.delay,
        ["--base-transform" as string]: baseTransform,
        transform: baseTransform,
        userSelect: "none",
      }}
    >
      {item.emoji}
    </span>
  );
}

export function Decor() {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
        {DESKTOP_ITEMS.map((item, idx) => renderItem(item, idx, "d"))}
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 md:hidden">
        {MOBILE_ITEMS.map((item, idx) => renderItem(item, idx, "m"))}
      </div>
    </>
  );
}
