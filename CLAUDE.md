# hydraulik24warszawa.pl — stan projektu

## Karta marki

- **Domena**: hydraulik24warszawa.pl — KUPIONA (właściciel potwierdził 23.08.2026). Historia domeny od
  06.2014 (Wayback: 3 generacje strony, ostatnia martwa od ~05.2022; stare URL-e m.in.
  `/hydraulik-warszawa-bemowo/`, `home,32,hydraulik_warszawa_mokotow.html`, `/udraznianie-rur-warszawa/`)
- **Tematyka**: hydraulika (usługi hydrauliczne, awarie, pogotowie 24h) + podstrona udrażniania rur
- **Lokalizacja**: Warszawa
- **Telefon**: **880 308 067** (docelowy, potwierdzony przez właściciela; na index od 30.08.2026, na wszystkich pozostałych stronach od 12.09.2026 — tymczasowy 123456789 już nigdzie nie występuje, `grep -r 123456789 src` = 0). Zakaz użycia numerów innych marek: 510 733 300, 511 323 123, 660 360 170, 888 806 921
- **Adresy BEZ ukośnika na końcu** (od 12.09.2026, globalna reguła 5d): `trailingSlash: 'never'`, linki wewnętrzne i canonical bez `/`, `public/.htaccess` wg wzorca i-hydraulik.pl (www→bez www, http→https, `/x/`→301→`/x`, `ErrorDocument 404 /404.html`), strona `src/pages/404.astro` z noindex. Po każdym buildzie `grep -rhoE 'href="/[^"#]+/"' dist --include=*.html` ma dać 0.
- **Design**: karta firmowa na wzór zrzutu z niemieckiego portalu (granat #1b3252 + pomarańcz #f7941e, tło #f4f4f2, PT Sans); zaokrąglony navbar z odstępem od boków (NIE sticky), CAŁA treść w jednej białej karcie (page-card)

## Deploy (RÓŻNICA vs inne marki)

- **DEPLOY DZIAŁA**: push do `main` = wdrożenie (workflow GitHub Actions → FTP). Zamrożenie z 24.08.2026
  (workflow wyłączony z powodu tymczasowego numeru 123456789) zostało zdjęte — live index ma numer
  880 308 067 z commitu 30.08.2026 (sprawdzone curl 12.09.2026), a 12.09.2026 numer podmieniono na
  pozostałych stronach.

- Konto FTP na Seohost dla tej domeny ma ścieżkę **`/domains/hydraulik24warszawa.pl/public_html/`**
  (właściciel utworzył je tak 24.08.2026 — z `public_html` W ŚRODKU ścieżki konta, inaczej niż
  w przepisie z globalnego CLAUDE.md, gdzie konto wskazuje `/domains/[domena].pl/`).
- Dlatego w `deploy.yml` jest **`server-dir: ./`** — NIE zmieniać na `./public_html/`, bo pliki
  wylądują w `public_html/public_html/`.
- Sekrety w repo GitHub: `REMOTE_HOST=h50.seohost.pl`,
  **`REMOTE_USER=githubhydraulik24warszawa@srv78381.seohost.com.pl`** (Seohost dokleił tu domenę
  SERWERA `srv78381.seohost.com.pl`, NIE domenę strony — potwierdzone zrzutem z panelu 24.08.2026),
  `REMOTE_PASSWORD`.

## Rozdzielność tematyczna (per podstrona)

- **Index (hydraulika)**: w treści NIE używać słów z tematyki udrażniania (udrażnianie, udrożnienie,
  przepychanie, przetykanie, odtykanie, czyszczenie rur, niedrożn*, zapchane, zator). WYJĄTKI świadome
  (decyzja właściciela 23.08.2026): link „Udrażnianie rur" w navbarze + pozycja „udrażnianie rur" w cenniku
  (linkuje do podstrony). „Kamerowanie rur" dozwolone (jest w cenniku).
- **/udraznianie-rur-warszawa (udrażnianie)**: w treści NIE używać słów „hydraulik / hydraulika /
  usługi hydrauliczne". Wyjątek: nazwa marki „Hydraulik 24 Warszawa" w navbarze i stopce.

## Podstrony dzielnicowe — reguły (decyzja właściciela 23.08.2026)

- **Slugi ORYGINALNE ze starej domeny** (z Wayback), czyli ZE słowem „warszawa", np.
  `/hydraulik-warszawa-targowek`, `/hydraulik-warszawa-mokotow`, `/hydraulik-piaseczno`,
  `/hydraulik-pruszkow` (Piaseczno i Pruszków były bez „warszawa" w slugu). Od 12.09.2026 BEZ ukośnika na końcu (stara forma z `/` dostaje 301).
- **ALE w `<title>` i H1 podstrony NIE dawać słowa „Warszawa"** — np. title/H1 „Hydraulik Targówek",
  mimo że slug to `/hydraulik-warszawa-targowek`. Reguła dotyczy TEGO projektu (hydraulik24warszawa.pl),
  NIE przenosić jej na udraznianiekanalizacji.eu ani inne marki.
- Reszta standardowo: unikalna treść per dzielnica, tylko tematyka hydraulik (bez słów udrażnianiowych),
  FAQ + JSON-LD FAQPage na każdej, jedna dzielnica = jedna strona (bez wymieniania innych dzielnic w treści).

## Co jest zrobione (stan 23.08.2026)

Strona główna kompletna: navbar (Usługi / O nas / Obszar działania), karta z panelem 24h
„Pogotowie hydrauliczne" + pomarańczowy pasek „Zadzwoń 880 308 067" (klikalny tel:; do 30.08.2026 stał tymczasowy 123456789, zaokrąglenie 5px,
cień, odsunięty 5px od góry i lewej), prawa kolumna z H1 i przyciskami (padding-left 115px),
lista 30 usług w 3 kolumnach z ptaszkami, O nas, Obszar działania (bez dzielnic), cennik 12 pozycji
(ceny 1:1 z i-hydraulik.pl: większość „od 350 zł", montaż wanny/kabiny/nagła awaria „do uzgodnienia"),
3 recenzje (pełne imiona i nazwiska, daty dd.mm.rrrr), FAQ 5 pytań + JSON-LD FAQPage, box Wycena.

Podstrona **/udraznianie-rur-warszawa** (23.08.2026, w OBU projektach): hero jak na index
(panel 24h „Udrażnianie rur" + pasek tel), H1 „Udrażnianie Rur Warszawa", zakres 15 usług,
sekcja metod (sprężyna elektryczna wewnątrz / WUKO na zewnątrz / kamera z nagraniem), cennik
6 pozycji (od 350 zł, WUKO do uzgodnienia), sekcja o przyczynach zatorów, FAQ 5 pytań + JSON-LD
FAQPage (telefon w 1. odpowiedzi), CTA. Slug = 1:1 stary URL z 2019 (Wayback). Link w navbarze
i w cenniku index (pozycja „udrażnianie rur — od 350 zł"). System jednorazowych kodów do opinii
USUNIĘTY (23.08.2026) z obu projektów na polecenie właściciela.

## Wersja bliźniacza bez Astro — USUNIĘTA

Projekt `C:\Users\lenovo\hydraulik24warszawa-html\` (czysty HTML, bliźniak wizualny) skasowany
w całości 23.08.2026 na polecenie właściciela. NA PRODUKCJĘ IDZIE WERSJA ASTRO (ten projekt).

## Inwentarz podstron i linków wewnętrznych + STOPNIOWE ODSŁANIANIE (stan 23.08.2026)

**Strony w `src/pages/` (21):** `index`, `udraznianie-rur-warszawa` oraz 19 lokalnych:
`hydraulik-warszawa-` + bemowo, bialoleka, bielany, mokotow, ochota, praga-polnoc, rembertow,
srodmiescie, targowek, ursus, ursynow, wawer, wesola, wlochy, wola, zoliborz + `hydraulik-piaseczno`,
`hydraulik-pruszkow`. Tabela slug ↔ stare URL-e 301 → `PLAN-podstrony-dzielnicowe.md`.

**Linki wewnętrzne:**
- Navbar (wszystkie strony): `/#uslugi`, `/udraznianie-rur-warszawa`, `/#o-nas`, `/#obszar-dzialania`;
  logo → `/`
- Index → `/udraznianie-rur-warszawa` (pozycja „udrażnianie rur" w cenniku)
- Sekcje „pobliskie dzielnice" (2–4 linki, TYLKO między podstronami lokalnymi):
  bemowo→wola,bielany,wlochy,ursus · praga→targowek,bialoleka,srodmiescie,zoliborz ·
  srodmiescie→wola,ochota,mokotow,zoliborz · ursynow→mokotow,wilanow,wlochy,piaseczno ·
  wawer→wesola,rembertow,wilanow · wilanow→mokotow,ursynow,piaseczno ·
  bialoleka→targowek,praga,bielany · bielany→zoliborz,bemowo,bialoleka,wola ·
  mokotow→srodmiescie,ochota,ursynow,wilanow · ochota→wola,srodmiescie,mokotow,wlochy ·
  rembertow→wesola,wawer,targowek · targowek→praga,bialoleka,rembertow ·
  ursus→wlochy,bemowo,pruszkow · wesola→wawer,rembertow · wlochy→ochota,ursus,bemowo ·
  wola→srodmiescie,ochota,bemowo,zoliborz · zoliborz→bielany,wola,srodmiescie,praga ·
  piaseczno→ursynow,wilanow · pruszkow→ursus,wlochy

**STAN UKRYCIA (decyzja właściciela 23.08.2026, od 12.09.2026 stopniowo zdejmowany — patrz plan):** 19 podstron lokalnych ISTNIEJE w kodzie
i się buduje, ale ścieżki do nich są ODCIĘTE: (1) z index usunięta lista linków dzielnic
(`dzielnice-links` w Obszarze działania), (2) sitemap ma filtr w `astro.config.mjs` wykluczający
`/hydraulik-warszawa-*`, `/hydraulik-piaseczno`, `/hydraulik-pruszkow`, (3) z `public/.htaccess`
usunięte 301 `home,NN` celujące w podstrony (zostały tylko 301 → `/`). Podstrony to wyspa
połączona wyłącznie własnymi sekcjami „pobliskich".

**Jak ODSŁANIAĆ dzielnicę — PEŁNY PLAN: `PLAN-odslanianie-dzielnic.md`** (12.09.2026):
kolejność 19 dzielnic z tabelą (slug, linia 301, sąsiedzi, status), checklist 9 kroków
Stan: 1 z 19 widoczna (Śródmieście, 12.09.2026), 18 ukrytych. 7 decyzji właściciela z 12.09.2026 (zamknięte: wariant A „pobliskich", kolejność, tempo 5–7 dni, bez Plumber). Na komendę „dodaj kolejną podstronę" brać pierwszą
ze statusem `ukryta` w tej tabeli. Skrót kroków: link na index →
slug z filtra sitemap → DOPISAĆ 301 w `.htaccess` (dziś stare adresy dzielnic dają 404) →
„pobliskie" tylko do widocznych → build + grep → commit/push → curl po deployu → status w tabeli.
Stan 12.09.2026 (sprawdzone): 0 z 19 odsłoniętych; index ma numer 880 308 067 (kod i live),
numer 880 308 067 od 12.09.2026 na wszystkich stronach; deploy działa (notatka o zamrożeniu
poprawiona 12.09.2026).

## Nierozstrzygnięte / czeka na właściciela

- [x] Zakup domeny hydraulik24warszawa.pl — KUPIONA (23.08.2026)
- [x] Docelowy numer telefonu 880 308 067 — podmieniony na index 30.08.2026, na pozostałych 20 stronach 12.09.2026
- [x] „Udrażnianie rur" — decyzja właściciela 23.08.2026: ODBLOKOWANE (pozycja w cenniku index +
      podstrona /udraznianie-rur-warszawa z linkiem w navbarze, w obu projektach)
- [ ] Po wdrożeniu na serwer: przekierowania 301 ze starych URL-i domeny (Wayback: wzorce
      `home,NN,hydraulik_warszawa_X.html`, `/hydraulik-warszawa-X/`, `/pogotowie-hydrauliczne*`)
      na nowe odpowiedniki; stary `/udraznianie-rur-warszawa/` → 301 na `/udraznianie-rur-warszawa` (reguła ogólna w .htaccess)
- [ ] Duplikat w cenniku: ogólna „naprawa spłuczki" obok „kompaktowej" i „podtynkowej" — właściciel
      nie potwierdził usunięcia
- [x] Który projekt idzie na produkcję — ASTRO (23.08.2026); wersja HTML skasowana
- [x] Podstrony dzielnicowe ODTWORZONE (23.08.2026): wszystkie 19 (17 dzielnic + Piaseczno,
      Pruszków) wg planu w `PLAN-podstrony-dzielnicowe.md`; wspólny CSS `src/styles/podstrona.css`;
      przekierowania 301 w `public/.htaccess`; lista linków dzielnic na index w sekcji Obszar działania
- [ ] Repo GitHub + konto FTP Seohost + deploy.yml (po zakupie domeny)
- [x] Schema na index: **Plumber** (decyzja właściciela 23.08.2026) — name, url, telephone
      (+48880308067, docelowy), description, areaServed Warszawa,
      openingHours 24/7. CreativeWorkSeries + aggregateRating było dodane i USUNIĘTE na polecenie
      właściciela tego samego dnia — nie przywracać bez jego decyzji. BEZ adresu pocztowego w schema
      (marka nie ma ustalonego adresu; nie wstawiać adresu innych marek). Na podstronach
      dzielnicowych na razie bez schema firmowego

## Notatki techniczne (Astro 7 — nowości vs Astro 5)

- Projekt na **Astro 7.2** (npm create astro, template minimal) + @astrojs/mdx + @astrojs/sitemap
- `npx astro dev` DAEMONIZUJE się (komenda wraca od razu; sterowanie: `astro dev stop/status/logs`)
- Bundler rolldown NIE rozwiązuje `extends` w tsconfig.json → tsconfig ma opcje wpisane WPROST
  (bez `"extends": "astro/tsconfigs/strict"`); nie przywracać extends
- Build psuł też zabłąkany `C:\Users\lenovo\tsconfig.json` (rolldown szuka tsconfig w górę katalogów)
  — plik skasowany 22.08.2026 za zgodą właściciela; gdyby wrócił, znów wywali build
- Podgląd dev: port 4322 (4321 zajmuje udraznianiekanalizacji.eu)
