export default function Screen1Hero() {
  return (
    <div className="screen1-hero" aria-hidden="true">
      <svg viewBox="0 0 120 140" className="screen1-hero-svg" role="img">
        <title>Спокойный пользователь с телефоном</title>
        <ellipse cx="60" cy="128" rx="44" ry="8" fill="var(--light-gray)" />
        <path
          d="M40 118 C38 88 42 52 60 48 C78 52 82 88 80 118 Z"
          fill="#E8ECF0"
          stroke="#D5DCE3"
          strokeWidth="1.5"
        />
        <circle cx="60" cy="34" r="22" fill="#F0E6E4" stroke="#E5D4D1" strokeWidth="1.5" />
        <ellipse cx="60" cy="36" rx="8" ry="5" fill="#C8D4E0" />
        <rect x="68" y="70" width="28" height="44" rx="6" fill="#2C3036" />
        <rect x="72" y="76" width="20" height="28" rx="2" fill="#5C6BC0" opacity="0.35" />
        <rect x="78" y="108" width="8" height="3" rx="1" fill="#888" />
      </svg>
    </div>
  )
}
