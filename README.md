# Domidomi Energie – lokální vývoj

Jedná se o React/Vite projekt, který používá kód vygenerovaný z Figma Make. Výsledná stránka vizuálně odpovídá návrhu a běží čistě na frontendu (žádné volání API).

## Požadavky

- Node.js (doporučeně aktuální LTS, např. 20.x)
- npm nebo jiný Node package manager

## Instalace závislostí

V terminálu:

```bash
cd /Users/jantyc/domidomi-energie
npm install
```

Instalace může chvíli trvat, protože projekt používá více UI knihoven (Radix UI, lucide-react, Tailwind v4 atd.).

## Spuštění vývojového serveru

```bash
cd /Users/jantyc/domidomi-energie
npm run dev
```

V konzoli uvidíš adresu (typicky `http://localhost:5173`). Otevři ji v prohlížeči.

## Co uvidíš

- Kompletní landing page Domidomi Energie podle Figma návrhu (header, hero, sekce, kalkulačka, sticky bar, footer…).
- Kalkulačku/„formulář“, která:
  - vede uživatele v několika krocích,
  - po úspěšném dokončení zobrazí děkovací obrazovku,
  - **zatím nic neposílá na žádné API** (žádný POST request).

Až budeš chtít formulář napojit na backend/API:

- stačí upřesnit URL endpointu a požadovaný JSON payload,
- upravíme implementaci tak, aby místo čistě lokálního „submitu“ posílala data na tvoje API a po úspěchu zobrazila stejnou děkovací obrazovku.
