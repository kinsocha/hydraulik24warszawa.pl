# Plan odtworzenia podstron dzielnicowych — hydraulik24warszawa.pl

Data: 23.08.2026. Źródła (sprawdzone): Wayback Machine CDX (pełna lista URL-i domeny; sitemap.xml
NIGDY nie została zarchiwizowana — zero wyników), menu zarchiwizowanej strony z 2019 (WordPress),
lista „miasta" z wersji 2021–22 (CMS z adresami `home,NN,....html`).

## Ustalenia właściciela

- Slugi ORYGINALNE ze starej domeny (ze słowem „warszawa"; Piaseczno i Pruszków bez — tak było).
- W `<title>` i H1 podstron BEZ słowa „Warszawa" (np. „Hydraulik Targówek").
- Tylko projekt Astro (wersja HTML skasowana).

## Historyczne generacje adresów

1. **2014–2016**: `/hydraulik-warszawa.html`, `/pogotowie-hydrauliczne.html`, `/instalacje-hydrauliczne.html`, `/montaz-i-naprawy.html` — bez podstron dzielnicowych.
2. **2019 (WordPress)**: ładne slugi. Zarchiwizowanych 6 dzielnic: bemowo, praga-polnoc, srodmiescie, ursynow, wawer, wilanow + strony usługowe (pogotowie/instalacje/naprawy/udraznianie-rur-warszawa).
3. **2021–22 (CMS)**: `home,NN,hydraulik_warszawa_X.html` — pełna lista 17 dzielnic + Piaseczno + Pruszków + ogólna `hydraulik_warszawa` + `miasta`, `kontakt`, `oferta`.

## Podstrony do zbudowania (19) — slug → title/H1 → 301 ze starych adresów

| # | Slug (oryginalny) | Title zaczyna się od / H1 | 301 z |
|---|---|---|---|
| 1 | /hydraulik-warszawa-bemowo/ | Hydraulik Bemowo | home,29 |
| 2 | /hydraulik-warszawa-praga-polnoc/ | Hydraulik Praga-Północ | home,34 (praga) |
| 3 | /hydraulik-warszawa-srodmiescie/ | Hydraulik Śródmieście | home,36 |
| 4 | /hydraulik-warszawa-ursynow/ | Hydraulik Ursynów | home,39 |
| 5 | /hydraulik-warszawa-wawer/ | Hydraulik Wawer | home,40 |
| 6 | /hydraulik-warszawa-wilanow/ | Hydraulik Wilanów | home,42 |
| 7 | /hydraulik-warszawa-bialoleka/ | Hydraulik Białołęka | home,30 |
| 8 | /hydraulik-warszawa-bielany/ | Hydraulik Bielany | home,31 |
| 9 | /hydraulik-warszawa-mokotow/ | Hydraulik Mokotów | home,32 |
| 10 | /hydraulik-warszawa-ochota/ | Hydraulik Ochota | home,33 |
| 11 | /hydraulik-warszawa-rembertow/ | Hydraulik Rembertów | home,35 |
| 12 | /hydraulik-warszawa-targowek/ | Hydraulik Targówek | home,37 |
| 13 | /hydraulik-warszawa-ursus/ | Hydraulik Ursus | home,38 |
| 14 | /hydraulik-warszawa-wesola/ | Hydraulik Wesoła | home,41 |
| 15 | /hydraulik-warszawa-wlochy/ | Hydraulik Włochy | home,43 |
| 16 | /hydraulik-warszawa-wola/ | Hydraulik Wola | home,44 |
| 17 | /hydraulik-warszawa-zoliborz/ | Hydraulik Żoliborz | home,45 |
| 18 | /hydraulik-piaseczno/ | Hydraulik Piaseczno | home,26 |
| 19 | /hydraulik-pruszkow/ | Hydraulik Pruszków | home,27 |

Pozycje 1–6 mają dodatkowo IDENTYCZNE adresy jak zarchiwizowana wersja 2019 — te URL-e
odzyskują się same, bez przekierowania. Praga: w 2019 slug `praga-polnoc` (zarchiwizowany),
w 2021 tylko `praga` — bierzemy oryginał 2019, a `home,34` dostaje 301.

## Strony, których NIE odtwarzamy (301 na stronę główną)

`home,1` (strona główna), `home,3` (kontakt), `home,4` (oferta), `home,25` (miasta),
`home,28` (hydraulik_warszawa — fraza indexu), `/hydraulik-warszawa.html`,
`/pogotowie-hydrauliczne.html`, `/pogotowie-hydrauliczne-warszawa/`,
`/instalacje-hydrauliczne.html`, `/instalacje-hydrauliczne-warszawa/`,
`/naprawy-hydrauliczne-warszawa/`, `/montaz-i-naprawy.html`, `/feed/`.
Powód: to frazy, na które walczy index — osobne strony by go kanibalizowały.
`/udraznianie-rur-warszawa/` już istnieje (slug 1:1).

## Zasady treści każdej podstrony

- Title + H1: „Hydraulik [Dzielnica]" — bez „Warszawa" (także w description i treści; nazwa marki
  „Hydraulik 24 Warszawa" w navbarze/stopce to wyjątek).
- Tylko tematyka hydraulik — zero słów udrażnianiowych.
- Unikalna treść: własny lead, własny dobór usług z listy (podzbiór ~16–18, inna kolejność),
  2 akapity tekstu z dzielnicą w odmianie, FAQ 5 pytań (rotowane tematy, inne sformułowania)
  + JSON-LD FAQPage z telefonem w co najmniej 1 odpowiedzi, CTA.
- Inne dzielnice wyłącznie w sekcji „Hydraulik w pobliskich dzielnicach" (max 4 linki).
- Telefon: tymczasowy 123456789 (podmiana przed publikacją — jak wszędzie).

## Technicznie

- Wspólny arkusz `src/styles/podstrona.css` (import w każdej podstronie) zamiast kopiowania
  bloku `<style>` 19 razy.
- `public/.htaccess` z przekierowaniami 301 (mod_alias, Seohost = Apache) — trafia do dist/ przy buildzie.
- Na index, w sekcji „Obszar działania": lista linków do wszystkich 19 podstron (odpowiednik
  dawnej strony „miasta" — żeby Google miał ścieżkę dojścia).

## Kolejność budowy

Najpierw 6 dzielnic z żywymi URL-ami z 2019 (Bemowo, Praga-Północ, Śródmieście, Ursynów, Wawer,
Wilanów), potem pozostałe 11 dzielnic alfabetycznie, na końcu Piaseczno i Pruszków.
