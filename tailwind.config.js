/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(10px)" },
        },
        pulseScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.8)" },
        },
        fireGlow: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.8))",
            transform: "scale(1)",
          },
          "50%": {
            filter: "drop-shadow(0 0 20px rgba(234, 179, 8, 1))",
            transform: "scale(1.15)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        spin3d: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        particle: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(-100px) scale(0)", opacity: "0" },
        },
        confetti: {
          "0%": { transform: "translateY(0) rotateZ(0deg)", opacity: "1" },
          "100%": {
            transform: "translateY(600px) rotateZ(360deg)",
            opacity: "0",
          },
        },
        tada: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "10%, 20%": {
            transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },
          "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
        popIn: {
          "0%": { transform: "scale(0.5) rotate(-10deg)", opacity: "0" },
          "60%": { transform: "scale(1.2) rotate(10deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        rotateIn: {
          "0%": { transform: "rotate(-200deg) scale(0)", opacity: "0" },
          "100%": { transform: "rotate(0) scale(1)", opacity: "1" },
        },
        countUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        shake: "shake 0.5s cubic-bezier(.36,.07,.19,.97) both",
        pulseScale: "pulseScale 0.3s ease-in-out",
        bounceIn: "bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        slideUp: "slideUp 0.4s ease-out",
        slideDown: "slideDown 0.4s ease-out",
        glow: "glow 2s ease-in-out infinite",
        fireGlow: "fireGlow 0.8s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        wiggle: "wiggle 0.5s ease-in-out infinite",
        spin3d: "spin3d 2s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        ripple: "ripple 0.6s ease-out",
        particle: "particle 1s ease-out forwards",
        confetti: "confetti 3s ease-out forwards",
        tada: "tada 1s ease-in-out",
        popIn: "popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        slideInRight: "slideInRight 0.5s ease-out",
        slideInLeft: "slideInLeft 0.5s ease-out",
        rotateIn: "rotateIn 0.6s ease-out",
        countUp: "countUp 0.5s ease-out",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
