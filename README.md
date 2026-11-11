# Kronika Zawodów — KCD2 RP

Publiczny, **tylko do odczytu** panel profesji, inspirowany wizualnie średniowiecznym światem Kingdom Come: Deliverance II.

## Otwórz stronę

**Adres GitHub Pages:** https://hogcraft2-cpu.github.io/kronika-zawodow/

**Adres Cloudflare Pages (po wdrożeniu projektu):** https://kronika-zawodow.pages.dev/

## Uruchomienie GitHub Pages (ważne!)

Repozytorium zawiera własny proces publikacji: `.github/workflows/deploy-pages.yml`.

1. Otwórz **Settings → Pages** w tym repozytorium.
2. W sekcji **Build and deployment** zmień **Source** z `Deploy from a branch` na **GitHub Actions**.
3. Przejdź do **Actions → Publikacja Kroniki Zawodów**.
4. Jeśli nie uruchomi się samoczynnie, wybierz **Run workflow → Run workflow**.
5. Gdy zadanie zakończy się sukcesem, witryna będzie dostępna pod powyższym adresem.

Wybór źródła **GitHub Actions** jest istotny dla dołączonego workflow. Jeżeli akcje są zablokowane przez ustawienia repozytorium, włącz ich wykonywanie w **Settings → Actions → General**.

## Jak działa panel

- Gracze mogą przeglądać dostępne profesje z menu po lewej.
- Aktualnie opracowany jest **Kowal**: XP, surowce, narzędzia, stanowisko pracy, naprawy oraz FAQ.
- FAQ ma wyszukiwarkę, a menu umożliwia przechodzenie między rozdziałami.
- Pozostałe profesje: **Zielarz, Kusznik, Karczmarz, Złotnik, Płatnerz** — wszystkie oznaczone **W trakcie prac**.
- Każdy zawód ma własną ikonę SVG w średniowiecznym stylu; wygląd panelu nawiązuje do księgi cechowej.
- Nie ma panelu administratora, logowania, zapisywania zmian, przycisków edycji ani formularzy dodawania treści.

## Struktura projektu

```text
index.html                     szkielet interfejsu
styles.css                     układ i stylizacja
app.js                         wyświetlanie danych, nawigacja i FAQ
data/professions.js            treści opisów zawodów (źródło danych)
assets/crest.svg               autorski herb
assets/kowal-rycina.svg        autorska grafika kowala
assets/icons/*.svg            autorskie ilustracje sześciu zawodów
.nojekyll                      pominięcie przetwarzania Jekyll
.github/workflows/deploy-pages.yml  publikacja w GitHub Actions
```

## Dodawanie profesji i grafik w przyszłości

Dane profesji są zapisane w `data/professions.js`. Przy rozbudowie można dodać kolejne obiekty o statusie `published` i uzupełnić ich treść. Obrazy można umieszczać w `assets/`.

Publikacja treści odbywa się poprzez zmiany w repozytorium, **nie przez odwiedzających stronę**. Do późniejszego stworzenia oddzielnego panelu redakcyjnego potrzebny będzie osobny mechanizm autoryzacji i zapisu danych.

## Uruchomienie lokalne

Otwórz `index.html` w przeglądarce. Nie wymaga instalacji zależności ani serwera backendowego.

## Uwaga

Projekt jest niezależnym poradnikiem społeczności. Inspiracja stylem średniowiecznym nie oznacza powiązania z wydawcą gry.
