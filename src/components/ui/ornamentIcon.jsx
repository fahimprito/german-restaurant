export default function Ornament({ className = "" }) {
    return (
        <svg
            viewBox="0 0 200 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <line x1="0" y1="8" x2="70" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            <line x1="130" y1="8" x2="200" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            <path
                d="M80 8 C85 2, 90 2, 95 8 C100 14, 105 14, 110 8 C105 2, 100 2, 95 8 C90 14, 85 14, 80 8Z"
                stroke="currentColor"
                strokeWidth="0.7"
                fill="none"
                opacity="0.6"
            />
            <circle cx="75" cy="8" r="1.5" fill="currentColor" opacity="0.4" />
            <circle cx="125" cy="8" r="1.5" fill="currentColor" opacity="0.4" />
            <path d="M88 8 L95 4 L102 8 L95 12Z" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.35" />
            <path d="M98 8 L105 4 L112 8 L105 12Z" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.35" />
        </svg>
    );
}