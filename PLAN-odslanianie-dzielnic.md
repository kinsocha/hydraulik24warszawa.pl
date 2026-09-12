# Plan odsłaniania podstron dzielnicowych — hydraulik24warszawa.pl

Utworzony: 12.09.2026. Fakty SPRAWDZONE tego dnia (kod, dist, live przez curl).
Gdy właściciel powie „dodaj kolejną podstronę" — brać PIERWSZĄ w tabeli ze statusem `ukryta`
i wykonać procedurę z sekcji 3. Po wykonaniu zmienić status na `widoczna DD.MM.RRRR`.

---

## 1. Stan wyjściowy (po zmianach z 12.09.2026)

- 19 podstron istnieje w `src/pages/`, buduje się i FIZYCZNIE LEŻY NA SERWERZE (zwracają 200).
  Nie ma do nich ścieżki: brak linków z index, navbaru, layoutu i udrażniania; sitemap zawiera
  tylko `/` i `/udraznianie-rur-warszawa`; stare adresy `home,NN,...html` dają 404 (nie 301).
- Podstrony linkują TYLKO między sobą (sekcja `#pobliskie`, klasa `.nearby-list`, 2–4 linki).
- **Telefon**: 12.09.2026 podmieniony na docelowy **880 308 067** na WSZYSTKICH stronach
  (index, 19 podstron, udrażnianie, 404). `grep -r 123456789 src` = 0.
- **Adresy BEZ ukośnika na końcu** (od 12.09.2026, zgodnie z globalną regułą 5d):
  `trailingSlash: 'never'` w `astro.config.mjs`, wszystkie linki wewnętrzne bez `/` na końcu,
  canonical bez `/`, `public/.htaccess` wg wzorca i-hydraulik.pl (www→bez www, http→https,
  `/x/`→301→`/x`, wewnętrzny rewrite `/x`→`/x/index.html`, `ErrorDocument 404 /404.html`),
  strona `src/pages/404.astro` z `noindex`. Stary adres `/udraznianie-rur-warszawa/` dostaje
  301 na `/udraznianie-rur-warszawa` z reguły ogólnej.
- **Deploy DZIAŁA**: push do `main` = wdrożenie na serwer (workflow GitHub Actions → FTP).
- **Bez schema Plumber na podstronach dzielnicowych** (decyzja właściciela 12.09.2026).

---

## 2. Kolejność odsłaniania (ZATWIERDZONA przez właściciela 12.09.2026)

Kryteria (w tej kolejności): (a) każda nowa podstrona ma co najmniej jednego JUŻ WIDOCZNEGO
sąsiada z własnej listy „pobliskich"; (b) wśród równych — najpierw dzielnice z żywymi adresami
z wersji 2019 (Bemowo, Praga-Północ, Śródmieście, Ursynów, Wawer, Wilanów); (c) większe dzielnice
wcześniej. Wolumeny z Ahrefs NIE były dostępne (plan konta odrzucił zapytanie).

Tempo (zatwierdzone): jedna dzielnica co 5–7 dni, kolejna dopiero gdy poprzednia jest
zindeksowana (GSC → Sprawdzanie adresu URL). Właściciel steruje komendą „dodaj kolejną podstronę".

| # | Dzielnica | Slug | Linia do dopisania w `public/.htaccess` (sekcja 0c) | Sąsiedzi z listy (linkować dopiero gdy widoczni) | Status |
|---|---|---|---|---|---|
| 1 | Śródmieście | `/hydraulik-warszawa-srodmiescie` | `RewriteRule ^home,36,hydraulik_warszawa_srodmiescie\.html$ /hydraulik-warszawa-srodmiescie [R=301,L]` | wola, ochota, mokotow, zoliborz | ukryta |
| 2 | Mokotów | `/hydraulik-warszawa-mokotow` | `RewriteRule ^home,32,hydraulik_warszawa_mokotow\.html$ /hydraulik-warszawa-mokotow [R=301,L]` | srodmiescie, ochota, ursynow, wilanow | ukryta |
| 3 | Wola | `/hydraulik-warszawa-wola` | `RewriteRule ^home,44,hydraulik_warszawa_wola\.html$ /hydraulik-warszawa-wola [R=301,L]` | srodmiescie, ochota, bemowo, zoliborz | ukryta |
| 4 | Ursynów | `/hydraulik-warszawa-ursynow` | `RewriteRule ^home,39,hydraulik_warszawa_ursynow\.html$ /hydraulik-warszawa-ursynow [R=301,L]` | mokotow, wilanow, wlochy, piaseczno | ukryta |
| 5 | Bemowo | `/hydraulik-warszawa-bemowo` | `RewriteRule ^home,29,hydraulik_warszawa_bemowo\.html$ /hydraulik-warszawa-bemowo [R=301,L]` | wola, bielany, wlochy, ursus | ukryta |
| 6 | Wilanów | `/hydraulik-warszawa-wilanow` | `RewriteRule ^home,42,hydraulik_warszawa_wilanow\.html$ /hydraulik-warszawa-wilanow [R=301,L]` | mokotow, ursynow, piaseczno | ukryta |
| 7 | Praga-Północ | `/hydraulik-warszawa-praga-polnoc` | `RewriteRule ^home,34,hydraulik_warszawa_praga\.html$ /hydraulik-warszawa-praga-polnoc [R=301,L]` | targowek, bialoleka, srodmiescie, zoliborz | ukryta |
| 8 | Wawer | `/hydraulik-warszawa-wawer` | `RewriteRule ^home,40,hydraulik_warszawa_wawer\.html$ /hydraulik-warszawa-wawer [R=301,L]` | wesola, rembertow, wilanow | ukryta |
| 9 | Białołęka | `/hydraulik-warszawa-bialoleka` | `RewriteRule ^home,30,hydraulik_warszawa_bialoleka\.html$ /hydraulik-warszawa-bialoleka [R=301,L]` | targowek, praga-polnoc, bielany | ukryta |
| 10 | Targówek | `/hydraulik-warszawa-targowek` | `RewriteRule ^home,37,hydraulik_warszawa_targowek\.html$ /hydraulik-warszawa-targowek [R=301,L]` | praga-polnoc, bialoleka, rembertow | ukryta |
| 11 | Bielany | `/hydraulik-warszawa-bielany` | `RewriteRule ^home,31,hydraulik_warszawa_bielany\.html$ /hydraulik-warszawa-bielany [R=301,L]` | zoliborz, bemowo, bialoleka, wola | ukryta |
| 12 | Żoliborz | `/hydraulik-warszawa-zoliborz` | `RewriteRule ^home,45,hydraulik_warszawa_zoliborz\.html$ /hydraulik-warszawa-zoliborz [R=301,L]` | bielany, wola, srodmiescie, praga-polnoc | ukryta |
| 13 | Ochota | `/hydraulik-warszawa-ochota` | `RewriteRule ^home,33,hydraulik_warszawa_ochota\.html$ /hydraulik-warszawa-ochota [R=301,L]` | wola, srodmiescie, mokotow, wlochy | ukryta |
| 14 | Włochy | `/hydraulik-warszawa-wlochy` | `RewriteRule ^home,43,hydraulik_warszawa_wlochy\.html$ /hydraulik-warszawa-wlochy [R=301,L]` | ochota, ursus, bemowo | ukryta |
| 15 | Ursus | `/hydraulik-warszawa-ursus` | `RewriteRule ^home,38,hydraulik_warszawa_ursus\.html$ /hydraulik-warszawa-ursus [R=301,L]` | wlochy, bemowo, pruszkow | ukryta |
| 16 | Rembertów | `/hydraulik-warszawa-rembertow` | `RewriteRule ^home,35,hydraulik_warszawa_rembertow\.html$ /hydraulik-warszawa-rembertow [R=301,L]` | wesola, wawer, targowek | ukryta |
| 17 | Wesoła | `/hydraulik-warszawa-wesola` | `RewriteRule ^home,41,hydraulik_warszawa_wesola\.html$ /hydraulik-warszawa-wesola [R=301,L]` | wawer, rembertow | ukryta |
| 18 | Piaseczno | `/hydraulik-piaseczno` | `RewriteRule ^home,26,hydraulik_piaseczno\.html$ /hydraulik-piaseczno [R=301,L]` | ursynow, wilanow | ukryta |
| 19 | Pruszków | `/hydraulik-pruszkow` | `RewriteRule ^home,27,hydraulik_pruszkow\.html$ /hydraulik-pruszkow [R=301,L]` | ursus, wlochy | ukryta |

Stare adresy (`home,NN,...html`) wzięte 1:1 z commitu ukrycia (23.08.2026) — nie zgadywane.
Dodatkowo pozycje 1–8 minus Mokotów/Wola (czyli Śródmieście, Ursynów, Bemowo, Wilanów,
Praga-Północ, Wawer) miały w 2019 adresy `/hydraulik-warszawa-X/` — te wracają same przez
regułę `/x/`→301→`/x`, bez osobnej linii.

---

## 3. Procedura „dodaj kolejną podstronę" (checklist, wykonać w całości)

1. **Wybór**: pierwsza pozycja tabeli ze statusem `ukryta`. Nazwać ją w odpowiedzi.
2. **Link na index** (`src/pages/index.astro`, sekcja `#obszar-dzialania`, w `.obszar-left`
   pod akapitem `.onas-text`, przed `.cta-box`): przy PIERWSZEJ dzielnicy przywrócić
   `<ul class="dzielnice-links">` i CSS `.dzielnice-links` (columns: 3 / 2 / 1 — wzorzec
   w commicie ukrycia z 23.08.2026: `git show <hash> -- src/pages/index.astro`, linki BEZ
   ukośnika); przy każdej kolejnej dopisać `<li><a href="/slug">Hydraulik Dzielnica</a></li>`
   na końcu listy.
3. **Sitemap** (`astro.config.mjs`): obecny filtr wyklucza WZORCEM (`/hydraulik-warszawa-`),
   więc przy pierwszej dzielnicy przepisać go na jawną tablicę ukrytych slugów
   (`const HIDDEN = ['/hydraulik-warszawa-mokotow', ...]; filter: (page) => !HIDDEN.some(s => page.endsWith(s))`),
   a potem przy każdej dzielnicy USUWAĆ jej slug z tablicy.
4. **Przekierowanie 301** (`public/.htaccess`, sekcja `0c`): DOPISAĆ linię z tabeli. Dziś stare
   adresy dzielnic dają 404 — nic nie usuwamy, tylko dopisujemy. Linia musi stać PRZED regułą
   ogólną `^(.+)/$`.
5. **Sekcja „pobliskie"** (WARIANT A, zatwierdzony 12.09.2026): na odsłanianej stronie zostawić
   w `.nearby-list` tylko linki do dzielnic już `widocznych` (jeśli zero — usunąć całą
   `<section id="pobliskie">` i przywrócić ją, gdy pojawi się pierwszy widoczny sąsiad);
   na każdej JUŻ WIDOCZNEJ stronie, która ma nową dzielnicę na swojej liście, dopisać do niej link.
6. **Build + weryfikacja** (`npx astro build`), wszystkie muszą przejść:
   - `grep -c '<loc>https://hydraulik24warszawa.pl/slug</loc>' dist/sitemap-0.xml` = 1
   - `grep -c 'href="/slug"' dist/index.html` ≥ 1
   - `grep -rhoE 'href="/[^"#]+/"' dist --include=*.html` = 0 wyników (żadnych ukośników)
   - canonical w `dist/slug/index.html` = `https://hydraulik24warszawa.pl/slug`
   - żadna WIDOCZNA strona nie linkuje do UKRYTEJ: dla każdej widocznej
     `grep -oE 'href="/hydraulik-[^"]+"' dist/<widoczna>/index.html` daje tylko slugi widoczne
7. **Commit + push** (push = deploy). Treść commita po polsku, np.
   `odsloniecie podstrony /hydraulik-warszawa-srodmiescie: link na index, sitemap, 301 home,36, pobliskie`.
   W odpowiedzi ZACYTOWAĆ treść commita.
8. **Po deployu (curl, ok. 2–3 min po push)**:
   - `https://hydraulik24warszawa.pl/slug` → 200, w HTML `880 308 067`
   - `https://hydraulik24warszawa.pl/slug/` → 301 na `/slug`
   - `https://hydraulik24warszawa.pl/home,NN,....html` → 301 na `/slug` jednym skokiem
   - `https://hydraulik24warszawa.pl/sitemap-0.xml` zawiera slug
   - `https://hydraulik24warszawa.pl/` zawiera link do slug
9. **Aktualizacja stanu**: w tej tabeli status → `widoczna DD.MM.RRRR`; w `CLAUDE.md`
   liczba widocznych/ukrytych. Właściciel zgłasza adres w Google Search Console
   (GSC → Sprawdzanie adresu URL → Poproś o zindeksowanie).

---

## 4. Decyzje właściciela z 12.09.2026 (zamknięte)

1. Numer 880 308 067 docelowy dla całej domeny — podmieniony wszędzie. ZROBIONE.
2. „Pobliskie" — wariant A (tylko widoczne dzielnice). PRZYJĘTE, obowiązuje w kroku 5.
3. Kolejność z sekcji 2 — ZATWIERDZONA.
4. Adresy bez ukośnika — cały projekt przestawiony. ZROBIONE.
5. Schema Plumber na podstronach dzielnicowych — NIE (tylko index ją ma).
6. Tempo: jedna dzielnica co 5–7 dni, po zindeksowaniu poprzedniej. PRZYJĘTE.
7. `CLAUDE.md` poprawiony (deploy działa, numer 880 308 067). ZROBIONE.
