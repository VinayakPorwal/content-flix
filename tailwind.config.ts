
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				agency: {
					blue: '#0062FF',
					navy: '#192048',
					black: '#121212',
					gray: '#F8F8F8',
					'light-blue': '#E6F0FF',
					'off-white': '#FAFAFA',
					'purple': '#8B5CF6',
					'pink': '#D946EF',
					'gold': '#F8BD59',
					'orange': '#fa5421',
					'light-orange': '#FEC6A1',
					'cream': '#FEF7CD',
					'magenta': '#FF3EA5',
					'cyan': '#0EA5E9',
					'dark': '#0F0F0F',
				}
			},
			fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Inter', 'sans-serif']
            },
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'blur-in': {
					'0%': { 
						opacity: '0',
						filter: 'blur(10px)'
					},
					'100%': {
						opacity: '1',
						filter: 'blur(0)'
					},
				},
				'scale-in': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1)'
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(1.2)'
					},
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' },
				},
				'marquee': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				'gradient-xy': {
					'0%, 100%': {
						'background-size': '400% 400%',
						'background-position': 'left top'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right bottom'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 0.7s ease-out forwards',
				'fade-in': 'fade-in 1s ease-out forwards',
				'blur-in': 'blur-in 0.7s ease-out forwards',
				'scale-in': 'scale-in 0.7s ease-out forwards',
				'float': 'float 5s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'shimmer': 'shimmer 2s infinite linear',
				'marquee': 'marquee 25s linear infinite',
				'gradient-xy': 'gradient-xy 10s ease infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-gradient': 'linear-gradient(90deg, rgba(11,10,36,1) 0%, rgba(35,10,89,1) 50%, rgba(20,10,56,1) 100%)',
				'card-gradient': 'linear-gradient(90deg, rgba(139,92,246,0.1) 0%, rgba(217,70,239,0.1) 100%)',
				'glow-gradient': 'linear-gradient(90deg, #8B5CF6 0%, #D946EF 50%, #F97316 100%)',
				'shimmer-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%)',
				'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(277, 75%, 84%, 1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(222, 79%, 78%, 1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(282, 70%, 70%, 1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(234, 80%, 60%, 1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(297, 70%, 70%, 1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(342, 70%, 70%, 1) 0px, transparent 50%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
