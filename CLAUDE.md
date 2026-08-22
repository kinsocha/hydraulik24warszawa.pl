# hydraulik24warszawa.pl — stan projektu

## Karta marki

- **Domena**: hydraulik24warszawa.pl (stan 23.08.2026: JESZCZE NIEKUPIONA)
- **Tematyka**: hydraulika (usługi hydrauliczne, awarie, pogotowie 24h)
- **Lokalizacja**: Warszawa
- **Telefon**: JESZCZE NIE PODANY. Na stronie stoi TYMCZASOWY numer **123456789** (wstawiony na życzenie właściciela do testów wyglądu) — PODMIENIĆ na docelowy przed publikacją. Zakaz użycia numerów innych marek: 510 733 300, 511 323 123, 660 360 170, 888 806 921
- **Design**: karta firmowa na wzór zrzutu z niemieckiego portalu (granat #1b3252 + pomarańcz #f7941e, tło #f4f4f2, PT Sans); zaokrąglony navbar z odstępem od boków (NIE sticky), CAŁA treść w jednej białej karcie (page-card)

## Rozdzielność tematyczna

Strona czysto hydrauliczna — w treściach NIE używać słów z tematyki udrażniania:
udrażnianie, udrożnienie, przepychanie, przetykanie, odtykanie, czyszczenie rur, niedrożn*, zapchane, zator.
„Kamerowanie rur" jest dozwolone (jest w cenniku).

## Co jest zrobione (stan 23.08.2026)

Strona główna kompletna: navbar (Usługi / O nas / Obszar działania), karta z panelem 24h
„Pogotowie hydrauliczne" + pomarańczowy pasek „Zadzwoń 123456789" (klikalny tel:, zaokrąglenie 5px,
cień, odsunięty 5px od góry i lewej), prawa kolumna z H1 i przyciskami (padding-left 115px),
lista 30 usług w 3 kolumnach z ptaszkami, O nas, Obszar działania (bez dzielnic), cennik 12 pozycji
(ceny 1:1 z i-hydraulik.pl: większość „od 350 zł", montaż wanny/kabiny/nagła awaria „do uzgodnienia"),
3 recenzje (pełne imiona i nazwiska, daty dd.mm.rrrr), FAQ 5 pytań + JSON-LD FAQPage, box Wycena.

## Wersja bliźniacza bez Astro

`C:\Users\lenovo\hydraulik24warszawa-html\` — ten sam wygląd i treści jako czysty index.html
+ css/style.css; kod wzorowany strukturalnie na starym hydraulikmokotow.pl (#container, #header,
#nav, #main-content, sekcje z prostymi id, .left/.right), ale HTML5 i responsywny (4 progi @media).
Osobne repo git. Docelowa domena tej wersji NIEUSTALONA. Nie przeniesiono ze wzoru: textarea
z ulicami (stary trik SEO), stopki z frazami, martwego Analyticsa UA.

## Nierozstrzygnięte / czeka na właściciela

- [ ] Zakup domeny hydraulik24warszawa.pl (Seohost)
- [ ] Docelowy numer telefonu → podmienić 123456789 w OBU projektach + dodać do FAQ i schema
- [ ] „Udrażnianie rur" w cenniku — właściciel prosił, Claude wstrzymał (kolizja z rozdzielnością
      tematyczną: kanibalizacja domen udrażnianiowych); decyzja NIE zapadła, dopytać zanim się doda
- [ ] Duplikat w cenniku: ogólna „naprawa spłuczki" obok „kompaktowej" i „podtynkowej" — właściciel
      nie potwierdził usunięcia
- [ ] Który projekt (Astro czy czysty HTML) idzie na produkcję — nieustalone
- [ ] Repo GitHub + konto FTP Seohost + deploy.yml (po zakupie domeny)
- [ ] Schema CreativeWorkSeries + aggregateRating (gwiazdki) — do dodania przy dopracowaniu SEO

## Notatki techniczne (Astro 7 — nowości vs Astro 5)

- Projekt na **Astro 7.2** (npm create astro, template minimal) + @astrojs/mdx + @astrojs/sitemap
- `npx astro dev` DAEMONIZUJE się (komenda wraca od razu; sterowanie: `astro dev stop/status/logs`)
- Bundler rolldown NIE rozwiązuje `extends` w tsconfig.json → tsconfig ma opcje wpisane WPROST
  (bez `"extends": "astro/tsconfigs/strict"`); nie przywracać extends
- Build psuł też zabłąkany `C:\Users\lenovo\tsconfig.json` (rolldown szuka tsconfig w górę katalogów)
  — plik skasowany 22.08.2026 za zgodą właściciela; gdyby wrócił, znów wywali build
- Podgląd dev: port 4322 (4321 zajmuje udraznianiekanalizacji.eu)
