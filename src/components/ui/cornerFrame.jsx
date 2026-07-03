export default function CornerFrame({ position = "top-left" }) {
    const rotations = {
        "top-left": "",
        "top-right": "scale(-1,1)",
        "bottom-left": "scale(1,-1)",
        "bottom-right": "scale(-1,-1)",
    };

    const positions = {
        "top-left": "top-6 left-6 sm:top-10 sm:left-10",
        "top-right": "top-6 right-6 sm:top-10 sm:right-10",
        "bottom-left": "bottom-6 left-6 sm:bottom-10 sm:left-10",
        "bottom-right": "bottom-6 right-6 sm:bottom-10 sm:right-10",
    };

    return (
        <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute h-12 w-12 text-(--color-gold) opacity-30 sm:h-16 sm:w-16 ${positions[position]}`}
            style={{ transform: rotations[position] }}
            aria-hidden="true"
        >
            <path d="M0 40 L0 4 C0 1.8 1.8 0 4 0 L40 0" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M0 24 L0 8 C0 3.6 3.6 0 8 0 L24 0" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
            <circle cx="4" cy="4" r="2" fill="currentColor" opacity="0.4" />
        </svg>
    );
}