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
				// Updated color scheme for Superbet/UEFA
				superbet: {
					navy: '#0A1034',     // Dark navy blue
					blue: '#1B3FA0',     // Royal blue
					gold: '#C8A951',     // Gold accent
					red: '#E30613',      // Superbet red
					purple: '#6A4ACF',   // Soft purple
					'electric-blue': '#4C6FFF', // Electric blue
					background: '#F8F9FA', // Light background
					white: '#FFFFFF',    // White
					gray: '#8A8A8A',     // Medium gray
					lightGray: '#EFEFEF', // Light gray
				}
			},
			backgroundImage: {
				'hero-pattern': "url('/src/assets/ucl-bg.jpg')",
				'teal-gradient': 'linear-gradient(102.3deg, rgba(8,110,125,1) 5.9%, rgba(27,181,190,1) 64%, rgba(240,247,248,1) 89%)',
				'uefa-gradient': 'linear-gradient(90deg, #0A1034 0%, #1B3FA0 50%, #5F1BBF 100%)',
				'uefa-accent-gradient': 'linear-gradient(90deg, #1B3FA0 0%, #5F1BBF 50%, #4C6FFF 100%)',
				'subtle-blue': 'linear-gradient(135deg, #F8F9FA 0%, #E5EEFF 100%)',
				'subtle-purple': 'linear-gradient(135deg, #F8F9FA 0%, #E5DEFF 100%)',
			},
			boxShadow: {
				'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-slow': {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.8 },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'rubik': ['Rubik', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
