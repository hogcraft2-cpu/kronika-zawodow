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
    summary: "Kowal zajmuje się wytwarzaniem przedmiotów i narzędzi, pozyskiwaniem potrzebnych surowców oraz naprawą wyposażenia innych mieszkańców królestwa. Rozwija swoje umiejętności poprzez codzienną pracę przy kowadle.",
    introduction: "Nie sam miecz czyni dobrego kowala. Liczą się także cierpliwość, umiejętność zdobywania materiałów oraz odpowiednio rozwinięty warsztat. Poniżej opisano zasady pracy w tej profesji.",
    quickFacts: [
      { label: "Rozwój", value: "XP za każdy wyrób" },
      { label: "Surowce", value: "Ruda i drewno" },
      { label: "Warsztat", value: "Wymagany poziom" },
      { label: "Usługi", value: "Naprawa przedmiotów" }
    ],
    steps: [
      { title: "Poszukaj surowców", text: "Odnajdź na mapie miejsca pozyskiwania rudy lub drewna. Nie są zaznaczone na głównej mapie." },
      { title: "Przygotuj narzędzia", text: "Kowal może sam wytwarzać narzędzia potrzebne do pozyskiwania surowców." },
      { title: "Pracuj przy stanowisku", text: "Wykonuj przedmioty odpowiadające Twoim możliwościom i poziomowi stanowiska." },
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
        id: "warsztat",
        mark: "⚒",
        chapter: "Rozdział III",
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
        chapter: "Rozdział IV",
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
      { q: "Dlaczego nie mogę stworzyć danego przedmiotu?", a: "Niektóre wyroby wymagają stanowiska kowalskiego na odpowiednio wysokim poziomie. Warto sprawdzić jego poziom i omówić potrzebne ulepszenia z rządcą miasta." },
      { q: "Kto powinien ulepszać stanowisko kowalskie?", a: "O rozwój stanowiska powinien dbać rządca miasta. Dzięki temu kowale zyskują dostęp do możliwości wytwarzania bardziej wymagających przedmiotów." },
      { q: "Gdzie można naprawiać przedmioty innych graczy?", a: "Kowal może świadczyć usługi naprawcze przy specjalnych stacjach napraw, które znajdują się w miastach." }
    ]
  },
  { id: "zielarz", name: "Zielarz", symbol: "❧", category: "Zbieractwo", status: "coming", statusLabel: "W przygotowaniu" },
  { id: "ciesla", name: "Cieśla", symbol: "🪓", category: "Rzemiosło", status: "coming", statusLabel: "W przygotowaniu" },
  { id: "piekarz", name: "Piekarz", symbol: "♨", category: "Rzemiosło", status: "coming", statusLabel: "W przygotowaniu" }
];
