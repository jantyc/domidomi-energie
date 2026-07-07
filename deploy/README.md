# Deploy snapshot — domidomi.cz/energie (2026-07-07)

Obsah této složky jsou **hotové produkční soubory** nasazované na Hostinger do
`/home/u337125391/domains/domidomi.cz/public_html/energie/`.

Pozor: živý web byl sestaven z novější verze zdrojáků, než je v tomto repozitáři
(bundle `index-D8t_9Dfi.js` z 16. 6. 2026 obsahuje jiné patičky/komponenty než `src/`).
Soubor `assets/index-Cx7Kfe2a.js` je kopie živého bundle s těmito úpravami (7. 7. 2026):

- telefon v patičce: `+420 800 123 456` → `226 223 819` (`tel:+420226223819`)
- adresa v patičce: `Praha, Česká republika` → `Kaprova 42/14, Staré Město, 110 00 Praha`
- odkazy „Dokumenty" v patičce vedou na skutečná PDF v `/energie/legal/` místo mrtvých kotev
- souhlas GDPR v kalkulačce odkazuje na `/energie/legal/gdpr.pdf`

`legal/gdpr.pdf` = „Informace o zpracování osobních údajů" (zdroj: Google Drive,
složka s web dokumenty, soubor od tomas.trnik@schlieger.cz). Ostatní PDF byla už na serveru.

Stejné úpravy jsou promítnuté i do zdrojáků (`src/assets/src/app/components/Footer.tsx`,
`Calculator.tsx`) a PDF jsou v `public/legal/`, aby je příští build Vite zkopíroval do distu.
