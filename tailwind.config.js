/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                // Creates the fluid "breathing" size effect
                morph: {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.1)' },
                    '100%': { transform: 'scale(1)' },
                },
                // Rotates the entire galaxy clockwise
                'spin-galaxy': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                // Rotates inner elements counter-clockwise for friction effect
                'spin-reverse': {
                    '0%': { transform: 'rotate(360deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
                // 3D rotation on all axes - slow orbit
                'rotate-3d-slow': {
                    '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
                    '100%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)' },
                },
                // 3D rotation - medium speed, different axis emphasis
                'rotate-3d-medium': {
                    '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
                    '100%': { transform: 'rotateX(-360deg) rotateY(360deg) rotateZ(-180deg)' },
                },
                // 3D rotation - fast core spin
                'rotate-3d-fast': {
                    '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
                    '100%': { transform: 'rotateX(360deg) rotateY(-360deg) rotateZ(360deg)' },
                },
                // Blob morphing - organic wave-like bubble shape
                'blob-morph-1': {
                    '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                    '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
                    '50%': { borderRadius: '50% 60% 30% 60% / 30% 40% 70% 60%' },
                    '75%': { borderRadius: '40% 60% 50% 40% / 60% 50% 40% 60%' },
                },
                'blob-morph-2': {
                    '0%, 100%': { borderRadius: '40% 60% 60% 40% / 70% 30% 60% 40%' },
                    '25%': { borderRadius: '50% 50% 40% 60% / 40% 60% 50% 50%' },
                    '50%': { borderRadius: '70% 30% 50% 50% / 60% 40% 30% 70%' },
                    '75%': { borderRadius: '30% 70% 60% 40% / 50% 50% 60% 40%' },
                },
                'blob-morph-3': {
                    '0%, 100%': { borderRadius: '50% 50% 40% 60% / 40% 60% 50% 50%' },
                    '33%': { borderRadius: '60% 40% 50% 50% / 50% 50% 40% 60%' },
                    '66%': { borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%' },
                },
            },
            animation: {
                "morph-slow": "morph 4s ease-in-out infinite",
                "spin-slow": "spin-galaxy 15s linear infinite",     // Base rotation
                "spin-medium": "spin-galaxy 8s linear infinite",    // Middle layer
                "spin-fast": "spin-galaxy 3s linear infinite",      // Fast core
                "spin-reverse-slow": "spin-reverse 12s linear infinite",
                // 3D rotation animations
                "rotate-3d-slow": "rotate-3d-slow 20s linear infinite",
                "rotate-3d-medium": "rotate-3d-medium 12s linear infinite",
                "rotate-3d-fast": "rotate-3d-fast 6s linear infinite",
                // Blob morphing animations - organic bubble movement
                "blob-1": "blob-morph-1 8s ease-in-out infinite",
                "blob-2": "blob-morph-2 10s ease-in-out infinite",
                "blob-3": "blob-morph-3 6s ease-in-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}