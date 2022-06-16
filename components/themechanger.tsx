import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const themes = [{ name: 'IBM' }, { name: 'ZX' }]

export default function ThemeChanger() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div>
            Current theme: {theme}. Choose theme:
            <select
              name="theme"
              id="theme-select"
              onChange={(e) => setTheme(e.currentTarget.value)}
              value={theme}
            >
              <option value="">Select Theme</option>
              {themes.map((t) => (
                <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
                  {t.name}
                </option>
              ))}
            </select>
        </div>
    )
}
