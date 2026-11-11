/**
 * JAWNA BAZA WIEDZY SERWERA — wyłącznie dane do odczytu.
 *
 * Aby dodać zawód w przyszłości, utwórz kolejny wpis obiektu
 * w professions. Na stronie nie ma formularza ani edytora.
 */
window.KRONIKA_PROFESSIONS = [
  {
    id: "kowal",
    name: "Kowal",
    symbol: "⚒",
    category: "Rzemiosło",
    status: "published",
    statusLabel: "Dostępny poradnik",
    rank: "ZAWÓD RZEMIEŚLNICZY",
    subtitle: "Mistrz ognia, żelaza i ciężkiej pracy",
    summary: "Kowal wytwarza przedmioty i narzędzia, pozyskuje materiały, przygotowuje sztabki metali w miejskich kuźniach oraz naprawia wyposażenie innych mieszkańców królestwa. Rozwija swoje umiejętności poprzez codzienną pracę.",
    introduction: "Nie sam miecz czyni dobrego kowala. Rzemieślnik musi odnaleźć surowce, przygotować z nich sztabki potrzebnych metali, a następnie skorzystać z odpowiedniego stanowiska. Liczą się także cierpliwość i rozwijanie warsztatu. Poniżej opisano zasady pracy w tej profesji.",
    quickFacts: [
      { label: "Rozwój", value: "XP za każdy wyrób" },
      { label: "Surowce", value: "Ruda i drewno" },
      { label: "Przetwarzanie", value: "Sztabki różnych metali" },
      { label: "Warsztat", value: "Wymagany poziom" },
      { label: "Usługi", value: "Naprawa przedmiotów" }
    ],
    steps: [
      { title: "Poszukaj surowców", text: "Odnajdź na mapie miejsca pozyskiwania rudy lub drewna. Nie są zaznaczone na głównej mapie." },
      { title: "Wytwórz sztabki metalu", text: "Odwiedź kuźnię w jednym z miast, które ją posiadają, i przygotuj sztabki różnych metali potrzebne do dalszej produkcji." },
      { title: "Wykuj przedmioty i narzędzia", text: "Korzystaj z odpowiedniego stanowiska. Możesz także wykonywać narzędzia do wydobywania surowców." },
      { title: "Rozwijaj profesję", text: "Za każdy wykonany przedmiot zdobywasz doświadczenie. Z czasem możesz realizować trudniejsze prace." }
    ],
    chapters: [
      {
        id: "doswiadczenie",
        mark: "✦",
        chapter: "Rozdział I",
        title: "Doświadczenie i rozwój",
        paragraphs: [
          "Każda wytworzona rzecz zapewnia kowalowi punkty doświadczenia (XP). Nie jest więc konieczne wykonywanie jednej, konkretnej receptury — liczy się regularna praca i dobór przedmiotów.",
          "Istotny jest poziom tworzonego wyrobu. Im bliżej Twojego aktualnego poziomu profesji znajduje się poziom przedmiotu, tym więcej doświadczenia możesz otrzymać."
        ],
        rows: [
          { icon: "◈", title: "Każdy przedmiot daje XP", text: "Praca kowala jest nagradzana doświadczeniem po wytworzeniu każdej rzeczy." },
          { icon: "✧", title: "Dobieraj poziom wyrobów", text: "Przedmioty o poziomie zbliżonym do Twojego zapewniają większą ilość doświadczenia." }
        ],
        note: "Rada dla czeladnika: zamiast ciągle tworzyć najprostsze wyroby, zwracaj uwagę na poziom przedmiotów dostępnych na obecnym etapie rozwoju."
      },
      {
        id: "surowce",
        mark: "⛏",
        chapter: "Rozdział II",
        title: "Surowce i wydobycie",
        paragraphs: [
          "Bez materiałów nie ma pracy w kuźni. Do wytwarzania przedmiotów kowal musi zgromadzić odpowiednie zasoby, w tym rudę oraz drewno.",
          "Miejsca pozyskiwania surowców pojawiają się w świecie gry, lecz nie są oznaczone na głównej mapie. Trzeba je samodzielnie odkrywać podczas podróży i eksploracji."
        ],
        rows: [
          { icon: "⛏", title: "Ruda", text: "Pozyskiwana przez wydobycie z odnalezionych miejsc występowania surowców." },
          { icon: "♣", title: "Drewno", text: "Zbierane w świecie gry i wykorzystywane jako materiał potrzebny do pracy." },
          { icon: "⚒", title: "Narzędzia wydobywcze", text: "Kowal może wytworzyć narzędzia umożliwiające pozyskiwanie potrzebnych minerałów i materiałów." }
        ],
        note: "Ważne: brak oznaczenia na głównej mapie nie oznacza braku surowców. Poszukuj ich samodzielnie w świecie gry."
      },
      {
        id: "kuznie",
        mark: "♨",
        chapter: "Rozdział III",
        title: "Kuźnie i wytwarzanie sztabek",
        paragraphs: [
          "W niektórych miastach znajdują się kuźnie, w których można wytwarzać sztabki różnych metali. To ważny etap przygotowania materiałów do dalszej pracy kowala.",
          "Wydobyta ruda jest surowcem, ale do wykonania kolejnych przedmiotów potrzebne są również odpowiednie sztabki. Warto więc pamiętać o odwiedzeniu miejskiej kuźni, zanim przystąpi się do wyrobu bardziej złożonego wyposażenia.",
          "Nie każde miasto musi posiadać taką kuźnię. Gracz powinien odnaleźć miejscowość, w której dostępna jest możliwość przygotowania potrzebnych sztabek."
        ],
        rows: [
          { icon: "⌂", title: "Kuźnie w wybranych miastach", text: "Wytwarzanie sztabek jest dostępne w kuźniach znajdujących się w niektórych miejscowościach." },
          { icon: "▣", title: "Sztabki różnych metali", text: "W kuźni możesz przygotować sztabki metali niezbędne do produkcji kolejnych przedmiotów." },
          { icon: "⚒", title: "Dalsze wytwarzanie", text: "Po zdobyciu właściwych sztabek wykorzystaj je jako materiały do wykonywania wyrobów kowalskich." }
        ],
        note: "Zapamiętaj drogę materiałów: odkryj miejsce wydobycia → zdobądź rudę → wytwórz sztabki w miejskiej kuźni → wykorzystaj je do stworzenia przedmiotów."
      },
      {
        id: "warsztat",
        mark: "⚒",
        chapter: "Rozdział IV",
        title: "Stanowisko kowalskie",
        paragraphs: [
          "Kowal korzysta z właściwego stanowiska pracy, jednak nie każda kuźnia pozwala przygotować wszystkie dostępne przedmioty. Część wyrobów wymaga stanowiska o wyższym poziomie.",
          "Za rozwój takiego miejsca powinien odpowiadać rządca miasta. Ulepszanie warsztatu daje lokalnym rzemieślnikom możliwość wykonywania bardziej wymagających zleceń."
        ],
        rows: [
          { icon: "Ⅰ", title: "Poziom stanowiska", text: "Stanowisko musi spełniać wymagania przedmiotu, który chcesz wytworzyć." },
          { icon: "♜", title: "Rola rządcy", text: "Rządca miasta powinien zadbać o ulepszenia, które zwiększą możliwości lokalnej kuźni." }
        ],
        note: "Jeżeli wyrobu nie można przygotować, sprawdź także wymagany poziom stanowiska. Sam rozwój postaci nie zawsze wystarczy."
      },
      {
        id: "naprawy",
        mark: "✚",
        chapter: "Rozdział V",
        title: "Naprawianie wyposażenia",
        paragraphs: [
          "Kowal nie musi zajmować się jedynie wytwarzaniem nowych rzeczy. Może również pomagać innym graczom, naprawiając ich przedmioty.",
          "Do tego celu służą specjalne stacje napraw dostępne w miastach. Napraw nie wykonuje się w dowolnym miejscu — trzeba skorzystać z odpowiednio przeznaczonego stanowiska."
        ],
        rows: [
          { icon: "✚", title: "Usługi dla graczy", text: "Kowal może przywracać sprawność przedmiotom należącym do innych postaci." },
          { icon: "⌂", title: "Stacja napraw", text: "Specjalne stanowiska naprawcze znajdują się na terenie miast." }
        ],
        note: "Pamiętaj: do napraw używaj specjalnej stacji napraw, a nie zwykłego miejsca wytwarzania."
      }
    ],
    faq: [
      { q: "W jaki sposób kowal zdobywa XP?", a: "Za każdą wytworzoną rzecz kowal otrzymuje doświadczenie. Ilość XP zależy od relacji poziomu przedmiotu do aktualnego poziomu profesji — im bliższe sobie poziomy, tym więcej doświadczenia można zdobyć." },
      { q: "Czy każdy wytworzony przedmiot daje doświadczenie?", a: "Tak. Za każdy wykonany przedmiot kowal otrzymuje punkty doświadczenia, choć ich ilość może się różnić." },
      { q: "Gdzie zdobyć rudę i drewno?", a: "Należy znaleźć w świecie gry miejsca wydobycia rudy i pozyskiwania drewna. Surowce pojawiają się na mapie świata, ale ich lokalizacje nie są wskazane na głównej mapie." },
      { q: "Czy miejsca surowców są zaznaczone na mapie?", a: "Nie. Gracz musi odkrywać je samodzielnie w trakcie eksploracji." },
      { q: "Czy kowal może wykonać narzędzia do wydobycia?", a: "Tak. Kowal może tworzyć narzędzia przydatne przy pozyskiwaniu minerałów i innych potrzebnych materiałów." },
      { q: "Gdzie można wytworzyć sztabki metali?", a: "Sztabki różnych metali wytwarza się w kuźniach dostępnych w niektórych miastach. Nie każda miejscowość posiada taką kuźnię." },
      { q: "Po co kowalowi sztabki metali?", a: "Sztabki stanowią materiały potrzebne do wykonywania kolejnych przedmiotów. Po pozyskaniu surowców można przygotować sztabki w miejskiej kuźni i wykorzystać je w dalszej produkcji." },
      { q: "Dlaczego nie mogę stworzyć danego przedmiotu?", a: "Niektóre wyroby wymagają stanowiska kowalskiego na odpowiednio wysokim poziomie. Warto sprawdzić jego poziom i omówić potrzebne ulepszenia z rządcą miasta." },
      { q: "Kto powinien ulepszać stanowisko kowalskie?", a: "O rozwój stanowiska powinien dbać rządca miasta. Dzięki temu kowale zyskują dostęp do możliwości wytwarzania bardziej wymagających przedmiotów." },
      { q: "Gdzie można naprawiać przedmioty innych graczy?", a: "Kowal może świadczyć usługi naprawcze przy specjalnych stacjach napraw, które znajdują się w miastach." }
    ]
  },
  { id: "zielarz", name: "Zielarz", symbol: "❧", category: "Zbieractwo", status: "coming", statusLabel: "W przygotowaniu" },
  { id: "ciesla", name: "Cieśla", symbol: "🪓", category: "Rzemiosło", status: "coming", statusLabel: "W przygotowaniu" },
  { id: "piekarz", name: "Piekarz", symbol: "♨", category: "Rzemiosło", status: "coming", statusLabel: "W przygotowaniu" }
];
