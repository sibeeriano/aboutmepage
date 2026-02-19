export function FolderIcon({ className = "size-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        d="M4 10h18l4 4h18v24H4V10z"
        fill="currentColor"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
}

export function CodeIcon({ className = "size-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <rect x="4" y="8" width="40" height="32" fill="currentColor" stroke="black" strokeWidth="2" />
      <path d="M18 20l-4 4 4 4M30 20l4 4-4 4M26 16l-4 16" stroke="black" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function BriefcaseIcon({ className = "size-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <rect x="6" y="16" width="36" height="26" fill="currentColor" stroke="black" strokeWidth="2" />
      <path d="M14 16V12a6 6 0 0112 0v4M6 24h36" stroke="black" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function GraduationIcon({ className = "size-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        d="M24 6L2 18l22 12 22-12L24 6z"
        fill="currentColor"
        stroke="black"
        strokeWidth="2"
      />
      <path d="M2 18v14l22 12 22-12V18" fill="none" stroke="black" strokeWidth="2" />
    </svg>
  );
}

export function ContactIcon({ className = "size-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <rect x="8" y="8" width="32" height="32" fill="currentColor" stroke="black" strokeWidth="2" />
      <path d="M16 20h16M16 26h12M16 32h8" stroke="black" strokeWidth="2" fill="none" />
    </svg>
  );
}
