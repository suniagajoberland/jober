tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        dark: {
                            bg: '#0a0c14',
                            card: 'rgba(18, 22, 36, 0.65)',
                            border: 'rgba(255, 255, 255, 0.08)',
                            hover: 'rgba(255, 255, 255, 0.05)',
                        },
                        neon: {
                            cyan: '#00f3ff',
                            purple: '#b026ff',
                            blue: '#0066ff',
                            emerald: '#00ffaa'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    },
                    boxShadow: {
                        'neon-cyan': '0 0 15px rgba(0, 243, 255, 0.25)',
                        'neon-purple': '0 0 15px rgba(176, 38, 255, 0.25)',
                        'neon-emerald': '0 0 15px rgba(0, 255, 170, 0.25)',
                        'glow-subtle': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                    }
                }
            }
        }
