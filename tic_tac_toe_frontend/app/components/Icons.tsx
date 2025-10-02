type IconProps = {
  className?: string;
  title?: string;
};

/**
 * PUBLIC_INTERFACE
 * KnightIcon
 * This component renders a chess knight SVG icon.
 * - Color: Ocean Professional primary blue (#2563EB)
 * - Responsive: scales with parent via Tailwind classes or width/height
 * - Accessibility: includes role="img", aria-label, and optional <title>
 */
export function KnightIcon({ className, title = "Knight" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      {/* Outline-based knight for clarity at small sizes */}
      <path
        d="M6 19h12v2H6v-2Zm11-9c.55-1.67.5-3.1-.15-4.28C15.74 3.17 13.62 2 10.5 2c-.33 0-.64.02-.94.05-.4.03-.73.31-.83.7-.09.38.06.78.38 1.01 1.06.77 1.76 1.67 2.06 2.65.13.41-.18.83-.61.83H8.75c-.31 0-.59.18-.71.47l-1.3 3.09c-.06.15-.09.31-.09.47v2.23c0 .55.45 1 1 1H16c.47 0 .88-.33.98-.79L17 13c.3-1.12.7-2.04 1-3Zm-9.5-.5c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1Z"
        fill="#2563EB"
      />
      <path
        d="M17 10c-.3.96-.66 1.82-.94 2.81-.1.35-.42.59-.78.59H7.65c-.36 0-.65-.29-.65-.65V11.1c0-.1.02-.2.05-.29l1.2-2.86c.12-.29.4-.47.71-.47h2.31c.43 0 .74-.42.61-.83-.3-.98-1-1.88-2.06-2.65-.32-.23-.47-.63-.38-1.01.1-.39.43-.67.83-.7.3-.03.61-.05.94-.05 3.12 0 5.24 1.17 6.41 3.72.65 1.18.7 2.61.15 4.28Z"
        fill="#1e55c7"
        opacity="0.25"
      />
    </svg>
  );
}

/**
 * PUBLIC_INTERFACE
 * QueenIcon
 * This component renders a chess queen SVG icon.
 * - Color: Ocean Professional amber/gold (#F59E0B) with a subtle darker accent
 * - Responsive and accessible like KnightIcon
 */
export function QueenIcon({ className, title = "Queen" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      {/* Crown base */}
      <path
        d="M5 20h14v2H5v-2Zm1.5-3.5h11l.5-6.5-2.8 2.1-2.2-5.2-2.2 5.2L6 10l.5 6.5Z"
        fill="#F59E0B"
      />
      {/* Crown details */}
      <path
        d="M12 3.5a1.5 1.5 0 1 0 0 3.001A1.5 1.5 0 0 0 12 3.5Zm-5 1A1.5 1.5 0 1 0 7 8a1.5 1.5 0 0 0 0-3.5Zm10 0A1.5 1.5 0 1 0 17 8a1.5 1.5 0 0 0 0-3.5Z"
        fill="#d48806"
      />
      {/* Inner shading for depth */}
      <path
        d="M7 16.5h10l.27-3.5-1.72 1.28a1 1 0 0 1-1.52-.48L12.5 10l-1.53 3.8a1 1 0 0 1-1.52.48L7.74 13l-.27 3.5Z"
        fill="#b87405"
        opacity="0.25"
      />
    </svg>
  );
}
