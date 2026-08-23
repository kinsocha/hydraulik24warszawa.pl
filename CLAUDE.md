# hydraulik24warszawa.pl — stan projektu

## Karta marki

- **Domena**: hydraulik24warszawa.pl — KUPIONA (właściciel potwierdził 23.08.2026). Historia domeny od
  06.2014 (Wayback: 3 generacje strony, ostatnia martwa od ~05.2022; stare URL-e m.in.
  `/hydraulik-warszawa-bemowo/`, `home,32,hydraulik_warszawa_mokotow.html`, `/udraznianie-rur-warszawa/`)
- **Tematyka**: hydraulika (usługi hydrauliczne, awarie, pogotowie 24h) + podstrona udrażniania rur
- **Lokalizacja**: Warszawa
- **Telefon**: JESZCZE NIE PODANY. Na stronie stoi TYMCZASOWY numer **123456789** (wstawiony na życzenie właściciela do testów wyglądu) — PODMIENIĆ na docelowy przed publikacją. Zakaz użycia numerów innych marek: 510 733 300, 511 323 123, 660 360 170, 888 806 921
- **Design**: karta firmowa na wzór zrzutu z niemieckiego portalu (granat #1b3252 + pomarańcz #f7941e, tło #f4f4f2, PT Sans); zaokrąglony navbar z odstępem od boków (NIE sticky), CAŁA treść w jednej białej karcie (page-card)

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
- [x] Schema CreativeWorkSeries + aggregateRating (gwiazdki) — DODANE na index 23.08.2026
      (ratingValue 5.0, ratingCount 3 = zgodnie z 3 widocznymi recenzjami; podbijać ratingCount
      przy dodawaniu kolejnych recenzji). Na podstronach dzielnicowych CELOWO brak aggregateRating —
      nie mają widocznych opinii, a schema ocen bez opinii na stronie łamie wytyczne Google
      (ryzyko utraty gwiazdek dla całej domeny). Jeśli mają dostać gwiazdki → najpierw dodać
      sekcje opinii na te podstrony

## Notatki techniczne (Astro 7 — nowości vs Astro 5)

- Projekt na **Astro 7.2** (npm create astro, template minimal) + @astrojs/mdx + @astrojs/sitemap
- `npx astro dev` DAEMONIZUJE się (komenda wraca od razu; sterowanie: `astro dev stop/status/logs`)
- Bundler rolldown NIE rozwiązuje `extends` w tsconfig.json → tsconfig ma opcje wpisane WPROST
  (bez `"extends": "astro/tsconfigs/strict"`); nie przywracać extends
- Build psuł też zabłąkany `C:\Users\lenovo\tsconfig.json` (rolldown szuka tsconfig w górę katalogów)
  — plik skasowany 22.08.2026 za zgodą właściciela; gdyby wrócił, znów wywali build
- Podgląd dev: port 4322 (4321 zajmuje udraznianiekanalizacji.eu)
