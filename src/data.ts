export interface MenuItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'gulasze' | 'tradycyjne' | 'azjatyckie' | 'wege';
  categoryLabel: string;
  tags: string[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'odzachuri',
    title: 'Odżachuri',
    description: 'Gruziński gulasz z karkówki z ziemniakami, świeżą surówką i orzeźwiającą domową lemoniadą estragonową.',
    image: 'https://i.ibb.co/DD364nkp/699010371-122212149914375601-3206478650981954949-n.jpg',
    category: 'gulasze',
    categoryLabel: 'Kuchnia Gruzińska & Gulasze',
    tags: ['Karkówka', 'Ziemniaki', 'Lemoniada', 'Gruzińskie']
  },
  {
    id: 'smalec',
    title: 'Domowy smalec z boczkiem',
    description: 'Tradycyjny domowy smalec z chrupiącym boczkiem, podawany z własnoręcznie pieczonym chlebem pszennym i tradycyjnymi domowymi ogóreczkami.',
    image: 'https://i.ibb.co/LzSD5M2P/524142003-122176915256375601-3971851207692124314-n.jpg',
    category: 'tradycyjne',
    categoryLabel: 'Tradycyjne i Przekąski',
    tags: ['Smalec', 'Domowy Chleb', 'Ogórki Kiszone']
  },
  {
    id: 'gulasz-wegierski',
    title: 'Gulasz węgierski z kluskami kładzionymi',
    description: 'Aromatyczny, wolno gotowany gulasz węgierski z mięciutkim mięsem, podawany z tradycyjnymi domowymi kluskami kładzionymi.',
    image: 'https://i.ibb.co/ksdq5MGD/524923266-122176913144375601-1170082324160823505-n.jpg',
    category: 'gulasze',
    categoryLabel: 'Kuchnia Gruzińska & Gulasze',
    tags: ['Gulasz Węgierski', 'Kluski Kładzione', 'Klasyka']
  },
  {
    id: 'makaron-koreanski',
    title: 'Smażony makaron z kurczakiem',
    description: 'Smażony makaron z soczystym kurczakiem i świeżymi chrupiącymi warzywami w oryginalnym słodkim sosie koreańskim.',
    image: 'https://i.ibb.co/tTSGGgK4/522512996-122176489010375601-4880879380703209617-n.jpg',
    category: 'azjatyckie',
    categoryLabel: 'Inspiracje Azjatyckie',
    tags: ['Kurczak', 'Sos Koreański', 'Makaron Wok']
  },
  {
    id: 'kotlet-sojowy',
    title: 'Kotlet sojowy z batatami',
    description: 'Chrupiący kotlet sojowy, słodkie pieczone bataty, pyszna kapusta zasmażana przygotowana na olejach roślinnych oraz świeża sałatka z papryki, cebuli i czarnych oliwek.',
    image: 'https://i.ibb.co/Df9dXDB4/475425356-122149583486375601-672159970397547005-n-1.jpg',
    category: 'wege',
    categoryLabel: 'Dania Wegetariańskie',
    tags: ['Wege', 'Bataty', 'Kapusta Zasmażana', 'Oliwki']
  },
  {
    id: 'ryz-azjatycki',
    title: 'Smażony ryż z pałkami kurczaka',
    description: 'Smażony ryż z kolorowymi warzywami, aromatyczne pałki z kurczaka w pikantnej, ostrej marynacie oraz ostra sałatka azjatycka z kapusty pekińskiej, ogórka i papryki na ostro.',
    image: 'https://i.ibb.co/spnjRV9D/481028355-122153132684375601-3548162589650234328-n.jpg',
    category: 'azjatyckie',
    categoryLabel: 'Inspiracje Azjatyckie',
    tags: ['Ryż z Warzywami', 'Pałki z Kurczaka', 'Ostra Marynata', 'Sałatka Azjatycka']
  },
  {
    id: 'placki-cukinii',
    title: 'Placki z cukinii i mozzarelli',
    description: 'Chrupiące placki z tartej cukinii, słodkiej marchewki, ziemniaka, czerwonej cebuli i ciągnącej się sera mozzarella.',
    image: 'https://i.ibb.co/W4tPvhBN/524361229-122176492292375601-4247211645080682196-n.jpg',
    category: 'wege',
    categoryLabel: 'Dania Wegetariańskie',
    tags: ['Cukinia', 'Marchew', 'Mozzarella', 'Wege']
  }
];
