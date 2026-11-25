/** Stable, single-render statistics. Keeping the value static avoids duplicated-looking layers during hydration. */
export function CountUp({ value, decimals = 0, suffix = '', className }: { value: number; decimals?: number; suffix?: string; duration?: number; className?: string }) {
  return <span className={`tabular-nums ${className ?? ''}`}>{value.toFixed(decimals)}{suffix}</span>;
}

/** Display strings such as "17", "4.7" or "690+" without layered duplicate text. */
export function StatNumber({ text }: { text: string }) {
  return <span className="tabular-nums">{text}</span>;
}
