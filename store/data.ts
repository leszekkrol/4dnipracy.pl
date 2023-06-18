// store/data.ts
import { defineStore } from 'pinia'

export const useDataStore = defineStore({
  id: 'data-store',
  state: () => {
    return {
      about: [
        {
          description: "Czy znużyła Cię ta sama stara rutyna, dzień po dniu? Szukasz zmiany, która nie tylko Tobie przyniesie korzyści, ale także światu wokół Ciebie? Nie szukaj dalej niż nasza kampania na rzecz czterodniowego, 32-godzinnego tygodnia pracy bez utraty wynagrodzenia." 
        },
        {
          description: "Tradycyjny harmonogram pracy 9-5, przez 5 dni w tygodniu, jest przestarzały i nie odpowiada już dzisiejszym wymaganiom. Wprowadziliśmy weekend ponad wiek temu i nadszedł czas, aby wprowadzić nowoczesne rozwiązania w kwestii czasu pracy. Dlatego staramy się o nowy sposób pracy, który będzie korzystny dla wszystkich zaangażowanych." 
        },
        {
          description: "Wyobraź sobie, że masz dodatkowy dzień wolny w tygodniu, aby spędzać czas z bliskimi, realizować swoje zainteresowania lub po prostu odpocząć i naładować baterie. Dzięki czterodniowemu tygodniowi pracy będziesz miał więcej czasu na cieszenie się życiem i mniej czasu na stres związany z pracą." 
        },
        {
          description: "Ale korzyści nie kończą się na tym. Pracodawcy zobaczą wzrost produktywności, zmniejszenie absencji oraz bardziej zadowolonych i zaangażowanych pracowników. Gospodarka odnotuje wzrost wydatków, gdyż ludzie będą mieli więcej wolnego czasu, aby cieszyć się życiem. Nasze społeczeństwo stanie się bardziej zrównoważone i sprawiedliwe, gdy ludzie będą mieli więcej czasu na opiekę nad rodziną i udział w życiu społecznym. Nasze środowisko skorzysta z mniejszej emisji węgla i mniejszego czasu spędzonego na dojazdach." 
        },
        {
          description: "Razem możemy stworzyć społeczeństwo, w którym pracujemy, aby żyć, a nie żyjemy, aby pracować. Dołącz do naszej kampanii na rzecz czterodniowego, 32-godzinnego tygodnia pracy bez utraty wynagrodzenia i stwórzmy lepszą przyszłość dla wszystkich." 
        }
      ],
      faq: [
        {
          title: "Czym jest praca zdalna?",
          description: "Czym jest praca zdalna? Praca zdalna to forma pracy, która umożliwia wykonywanie zadań z dowolnego miejsca, dzięki wykorzystaniu technologii internetowych. Zazwyczaj wymaga korzystania z komputera i dostępu do sieci."
        },
        {
          title: "Czy praca zdalna jest dla każdego?",
          description: "Praca zdalna wymaga samodyscypliny, umiejętności planowania czasu i organizacji pracy. Osoby, które potrafią pracować samodzielnie, są w stanie radzić sobie z pracą zdalną."
        },
        {
          title: "Jakie korzyści wynikają z pracy zdalnej?",
          description: "Praca zdalna pozwala na większą elastyczność i dostosowanie pracy do własnych potrzeb. Dzięki temu można łatwiej pogodzić pracę z życiem prywatnym. Zmniejsza się również potrzeba dojazdów do pracy, co wpływa pozytywnie na środowisko i oszczędza czas i koszty związane z dojazdem."
        },
        {
          title: "Jakie umiejętności są potrzebne do pracy zdalnej?",
          description: "Osoba pracująca zdalnie powinna posiadać dobre umiejętności komunikacyjne, aby móc skutecznie porozumiewać się z zespołem. Ważne są także umiejętności techniczne, ponieważ praca zdalna opiera się na korzystaniu z narzędzi internetowych i oprogramowania."
        },
        {
          title: "Jakie narzędzia są potrzebne do pracy zdalnej?",
          description: "Do pracy zdalnej potrzebne są przede wszystkim komputer i szybkie połączenie internetowe. Oprócz tego mogą być potrzebne narzędzia do pracy zespołowej, takie jak komunikator internetowy czy narzędzia do współdzielenia plików."
        },
        {
          title: "Jakie są godziny pracy w przypadku pracy zdalnej?",
          description: "Godziny pracy w przypadku pracy zdalnej są zazwyczaj elastyczne i dostosowane do indywidualnych potrzeb pracownika. W niektórych przypadkach może być wymagane dostosowanie się do określonych godzin pracy,"
        }
      ],
    }
  },
  getters: {
    aboutList: state => state.about,
    faqList: state => state.faq,
  },
})