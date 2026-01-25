export const products = [
  {
    id: 1,
    translationKey: 'covers',
    name: 'LTŽ pokrovi',
    details: 'Litoželezni okrogli in kvadratni kanalski pokrovi, izdelani v zahtevanih standardih SIST EN 124.',
    image: '/images/products/cover.jpg',
    longDescription: 'Litoželezni okrogli in kvadratni kanalski pokrovi so izdelani v skladu z zahtevnimi standardi SIST EN 124. Namenjeni so za vgradnjo na različna območja glede na obremenitev (B 125, C 250, D 400). Vsi pokrovi so antikorozijsko zaščiteni s črno barvo in omogočajo različne napise (Kanalizacija, Vodovod, Telefon, Elektrika ali brez napisa).',
    stats: {
      'Standard': 'SIST EN 124',
      'Razredi obremenitve': 'B 125, C 250, D 400',
      'Material': 'Litina',
      'Zaščita': 'Antikorozijska črna barva'
    },
    variants: [
      { id: 101, size: 'B 125 (150KN)', material: 'Litina', description: 'Pločniki, pešpoti, parkirišča za osebna vozila' },
      { id: 102, size: 'C 250 (250KN)', material: 'Litina', description: 'Bankine, pločniki, stranski pasovi cest, parkirišča za tovorna vozila' },
      { id: 103, size: 'D 400 (400KN)', material: 'Litina', description: 'Ceste, ulice, bankine in parkirišča s težjim tovornim prometom' }
    ]
  },
  {
    id: 2,
    translationKey: 'grates',
    name: 'LTŽ rešetke',
    details: 'Litoželezne rešetke za odvodnjo, odporne in zanesljive za različne namene.',
    image: '/images/products/drain.jpg',
    longDescription: 'Litoželezne rešetke za odvodnjo so zasnovane za dolgotrajno uporabo v različnih pogojih. Izdelane so v skladu s standardi za odvodnjavanje in primerne za vgradnjo na območjih z različnimi obremenitvami. Odlikuje jih odlična vzdržljivost in zmogljivost.',
    stats: {
      'Standard': 'SIST EN 124',
      'Material': 'Litina',
      'Uporaba': 'Odvodnjavanja',
      'Zaščita': 'Antikorozijska črna barva'
    },
    variants: [
      { id: 201, size: 'Standard B 125', material: 'Litina', description: 'Lažje obremenitve' },
      { id: 202, size: 'Standard C 250', material: 'Litina', description: 'Srednje obremenitve' },
      { id: 203, size: 'Standard D 400', material: 'Litina', description: 'Težke obremenitve' }
    ]
  },
  {
    id: 3,
    translationKey: 'channels',
    name: 'Kanalete',
    details: 'Različne vrste kanalet za odvodnjo vode in drugih tekočin.',
    image: '/images/products/line_drain.jpg',
    longDescription: 'Kanalete so zasnovane za učinkovito odvodnjo vode in drugih tekočin. Na voljo so v različnih velikostih in materialih, primerni za različne aplikacije in namene. Omogočajo enostavno vgradnjo in vzdrževanje.',
    stats: {
      'Material': 'Beton, Plastika',
      'Uporaba': 'Linijsko odvodnavanje',
      'Prednosti': 'Enostavna montaža in vzdrževanje'
    },
    variants: [
      { id: 301, size: 'Različne velikosti', material: 'Beton', description: 'Za večje obremenitve' },
      { id: 302, size: 'Različne velikosti', material: 'Plastika', description: 'Za lažje obremenitve' }
    ]
  },
  {
    id: 4,
    translationKey: 'roadCaps',
    name: 'Cestne kape',
    details: 'Cestne kape za zunanji vodovod in plin, izdelane iz kakovostnih materialov.',
    image: '/images/products/road_cap.jpg',
    longDescription: 'Cestne kape so namenjene za dostop do ventilov in zasunov na vodovodnih in plinskih omrežjih. Izdelane so iz litine ali plastike in zagotavljajo enostaven dostop ter zaščito pred zunanjimi vplivi. Primerne so za vgradnjo na različnih prometnih površinah.',
    stats: {
      'Material': 'Litina, Plastika',
      'Uporaba': 'Vodovod, Plin',
      'Zaščita': 'Protikorozijska zaščita'
    },
    variants: [
      { id: 401, size: 'DN 80-100', material: 'Litina', description: 'Za vodovodne ventile' },
      { id: 402, size: 'DN 50-80', material: 'Litina', description: 'Za plinske ventile' },
      { id: 403, size: 'Različne velikosti', material: 'Plastika', description: 'Za lažje obremenitve' }
    ]
  },
  {
    id: 5,
    translationKey: 'concreteRings',
    name: 'Betonski prstani',
    details: 'Betonski prstani za jaške in revizijske komore komunalne infrastrukture.',
    image: '/images/products/concrete_ring.jpg',
    longDescription: 'Betonski prstani so ključni elementi za gradnjo jaškov in revizijskih komor v komunalni infrastrukturi. Izdelani so iz armiranega betona visoke kakovosti, ki zagotavlja dolgotrajnost in odpornost proti zunanjim vplivom. Na voljo so v različnih premerih in višinah.',
    stats: {
      'Material': 'Armirani beton',
      'Uporaba': 'Jaški, revizijske komore',
      'Prednosti': 'Visoka nosilnost in trajnost'
    },
    variants: [
      { id: 501, size: 'DN 600', material: 'Beton', description: 'Manjši jaški' },
      { id: 502, size: 'DN 800', material: 'Beton', description: 'Srednji jaški' },
      { id: 503, size: 'DN 1000', material: 'Beton', description: 'Veliki jaški in komore' }
    ]
  },
  {
    id: 6,
    translationKey: 'gullyPots',
    name: 'Požiralniki',
    details: 'Cestni požiralniki za odvodnjo meteorne vode s cest in parkirišč.',
    image: '/images/products/gully_pot.jpg',
    longDescription: 'Požiralniki so namenjeni zbiranju in odvajanju meteorne vode s cestišč, parkirišč in drugih utrjenih površin. Opremljeni so z usedalnikom za pesek in nečistoče ter priključkom za odvodno cev. Izdelani so iz betona ali plastike in so na voljo v različnih izvedbah.',
    stats: {
      'Material': 'Beton, Plastika',
      'Uporaba': 'Odvodnavanje cest',
      'Prednosti': 'Enostavno čiščenje in vzdrževanje'
    },
    variants: [
      { id: 601, size: '400x400 mm', material: 'Beton', description: 'Standardni cestni požiralnik' },
      { id: 602, size: '300x300 mm', material: 'Plastika', description: 'Manjši požiralnik za dvorišča' },
      { id: 603, size: '500x500 mm', material: 'Beton', description: 'Veliki požiralnik za večje pretoke' }
    ]
  }
]
