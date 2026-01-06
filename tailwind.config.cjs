module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,html}'
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: 'hsl(var(--card))',
                'card-foreground': 'hsl(var(--card-foreground))',
                popover: 'hsl(var(--popover))',
                'popover-foreground': 'hsl(var(--popover-foreground))',
                primary: 'hsl(var(--primary))',
                'primary-foreground': 'hsl(var(--primary-foreground))',
                muted: 'hsl(var(--muted))',
                'muted-foreground': 'hsl(var(--muted-foreground))',
                border: 'hsl(var(--border))'
            }
        }
    },
    plugins: [
        require('tailwindcss-animate')
    ]
}
