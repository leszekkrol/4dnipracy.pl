// store/data.ts
import { defineStore } from 'pinia'

export const useDataStore = defineStore({
  id: 'data-store',
  state: () => {
    return {
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
    faqList: state => state.faq,
  },
})