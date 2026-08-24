# hydraulik24warszawa.pl — stan projektu

## Karta marki

- **Domena**: hydraulik24warszawa.pl — KUPIONA (właściciel potwierdził 23.08.2026). Historia domeny od
  06.2014 (Wayback: 3 generacje strony, ostatnia martwa od ~05.2022; stare URL-e m.in.
  `/hydraulik-warszawa-bemowo/`, `home,32,hydraulik_warszawa_mokotow.html`, `/udraznianie-rur-warszawa/`)
- **Tematyka**: hydraulika (usługi hydrauliczne, awarie, pogotowie 24h) + podstrona udrażniania rur
- **Lokalizacja**: Warszawa
- **Telefon**: JESZCZE NIE PODANY. Na stronie stoi TYMCZASOWY numer **123456789** (wstawiony na życzenie właściciela do testów wyglądu) — PODMIENIĆ na docelowy przed publikacją. Zakaz użycia numerów innych marek: 510 733 300, 511 323 123, 660 360 170, 888 806 921
- **Design**: karta firmowa na wzór zrzutu z niemieckiego portalu (granat #1b3252 + pomarańcz #f7941e, tło #f4f4f2, PT Sans); zaokrąglony navbar z odstępem od boków (NIE sticky), CAŁA treść w jednej białej karcie (page-card)

## Deploy (RÓŻNICA vs inne marki)

- **DEPLOY ZAMROŻONY (24.08.2026, polecenie właściciela)**: workflow `deploy.yml` WYŁĄCZONY na GitHubie
  (Actions → workflow „Deploy hydraulik24warszawa.pl" → stan disabled_manually), bo na stronie jest
  tymczasowy numer 123456789. NIE włączać i NIE deployować, dopóki właściciel nie poda docelowego
  numeru telefonu i nie zostanie on podmieniony. Włączenie: przycisk „Enable workflow" w zakładce
  Actions albo API. Pierwszy deploy 24.08.2026 PRZESZEDŁ — strona z numerem 123456789 JEST na serwerze.

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
- **/udraznianie-rur-warszawa/ (udrażnianie)**: w treści NIE używać słów „hydraulik / hydraulika /
  usługi hydrauliczne". Wyjątek: nazwa marki „Hydraulik 24 Warszawa" w navbarze i stopce.

## Podstrony dzielnicowe — reguły (decyzja właściciela 23.08.2026)

- **Slugi ORYGINALNE ze starej domeny** (z Wayback), czyli ZE słowem „warszawa", np.
  `/hydraulik-warszawa-targowek/`, `/hydraulik-warszawa-mokotow/`, `/hydraulik-piaseczno/`,
  `/hydraulik-pruszkow/` (Piaseczno i Pruszków były bez „warszawa" w slugu).
- **ALE w `<title>` i H1 podstrony NIE dawać słowa „Warszawa"** — np. title/H1 „Hydraulik Targówek",
  mimo że slug to `/hydraulik-warszawa-targowek/`. Reguła dotyczy TEGO projektu (hydraulik24warszawa.pl),
  NIE przenosić jej na udraznianiekanalizacji.eu ani inne marki.
- Reszta standardowo: unikalna treść per dzielnica, tylko tematyka hydraulik (bez słów udrażnianiowych),
  FAQ + JSON-LD FAQPage na każdej, jedna dzielnica = jedna strona (bez wymieniania innych dzielnic w treści).

## Co jest zrobione (stan 23.08.2026)

Strona główna kompletna: navbar (Usługi / O nas / Obszar działania), karta z panelem 24h
„Pogotowie hydrauliczne" + pomarańczowy pasek „Zadzwoń 123456789" (klikalny tel:, zaokrąglenie 5px,
cień, odsunięty 5px od góry i lewej), prawa kolumna z H1 i przyciskami (padding-left 115px),
lista 30 usług w 3 kolumnach z ptaszkami, O nas, Obszar działania (bez dzielnic), cennik 12 pozycji
(ceny 1:1 z i-hydraulik.pl: większość „od 350 zł", montaż wanny/kabiny/nagła awaria „do uzgodnienia"),
3 recenzje (pełne imiona i nazwiska, daty dd.mm.rrrr), FAQ 5 pytań + JSON-LD FAQPage, box Wycena.

Podstrona **/udraznianie-rur-warszawa/** (23.08.2026, w OBU projektach): hero jak na index
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
- Navbar (wszystkie strony): `/#uslugi`, `/udraznianie-rur-warszawa/`, `/#o-nas`, `/#obszar-dzialania`;
  logo → `/`
- Index → `/udraznianie-rur-warszawa/` (pozycja „udrażnianie rur" w cenniku)
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

**STAN UKRYCIA (decyzja właściciela 23.08.2026):** 19 podstron lokalnych ISTNIEJE w kodzie
i się buduje, ale ścieżki do nich są ODCIĘTE: (1) z index usunięta lista linków dzielnic
(`dzielnice-links` w Obszarze działania), (2) sitemap ma filtr w `astro.config.mjs` wykluczający
`/hydraulik-warszawa-*`, `/hydraulik-piaseczno`, `/hydraulik-pruszkow`, (3) z `public/.htaccess`
usunięte 301 `home,NN` celujące w podstrony (zostały tylko 301 → `/`). Podstrony to wyspa
połączona wyłącznie własnymi sekcjami „pobliskich".

**Jak ODSŁANIAĆ dzielnicę (kolejno, gdy właściciel poleci):**
1. dodać link na index (sekcja Obszar działania),
2. usunąć jej slug z filtra sitemap w `astro.config.mjs`,
3. przywrócić w `public/.htaccess` jej 301 (wzór w `PLAN-podstrony-dzielnicowe.md`).

## Nierozstrzygnięte / czeka na właściciela

- [x] Zakup domeny hydraulik24warszawa.pl — KUPIONA (23.08.2026)
- [ ] Docelowy numer telefonu → podmienić 123456789 w OBU projektach + dodać do FAQ i schema
- [x] „Udrażnianie rur" — decyzja właściciela 23.08.2026: ODBLOKOWANE (pozycja w cenniku index +
      podstrona /udraznianie-rur-warszawa/ z linkiem w navbarze, w obu projektach)
- [ ] Po wdrożeniu na serwer: przekierowania 301 ze starych URL-i domeny (Wayback: wzorce
      `home,NN,hydraulik_warszawa_X.html`, `/hydraulik-warszawa-X/`, `/pogotowie-hydrauliczne*`)
      na nowe odpowiedniki; stary `/udraznianie-rur-warszawa/` odzyskuje się sam (ten sam slug)
- [ ] Duplikat w cenniku: ogólna „naprawa spłuczki" obok „kompaktowej" i „podtynkowej" — właściciel
      nie potwierdził usunięcia
- [x] Który projekt idzie na produkcję — ASTRO (23.08.2026); wersja HTML skasowana
- [x] Podstrony dzielnicowe ODTWORZONE (23.08.2026): wszystkie 19 (17 dzielnic + Piaseczno,
      Pruszków) wg planu w `PLAN-podstrony-dzielnicowe.md`; wspólny CSS `src/styles/podstrona.css`;
      przekierowania 301 w `public/.htaccess`; lista linków dzielnic na index w sekcji Obszar działania
- [ ] Repo GitHub + konto FTP Seohost + deploy.yml (po zakupie domeny)
- [x] Schema na index: **Plumber** (decyzja właściciela 23.08.2026) — name, url, telephone
      (+48123456789 TYMCZASOWY, podmienić razem z resztą), description, areaServed Warszawa,
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
