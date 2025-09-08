export interface TourDay {
  day: number;
  title: string;
  description: string;
  highlights: string[];
}

export interface Tour {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  highlights: string[];
  itinerary: TourDay[];
}

export const tours: Tour[] = [
  {
    id: "rajasthan-taj-mahal",
    name: "Rajasthan & Taj Mahal Circuit",
    subtitle: "Découvrez les trésors d’Agra et plongez au cœur du Rajasthan",
    duration: "15 jours / 14 nuits",
    price: "à partir de 1 400 € / personne",
    image: "/rajasthan-palace-with-intricate-architecture-and-v.jpg",
    description:
      "Découvrez les trésors d’Agra : Sikandra, le célèbre Taj Mahal et le Red Fort, puis plongez au cœur du Rajasthan, entre forteresses imprenables, lacs sacrés, architecture remarquable et couleurs indiennes…",
    highlights: [
      "New Delhi",
      "Taj Mahal",
      "Jaipur et la ville rose",
      "Rajasthan – Terre des Rois",
    ],
    itinerary: [
      {
        day: 1,
        title: "France / New Delhi",
        description:
          "Accueil à l’aéroport de New Delhi par notre représentant et transfert à votre hôtel. Vous plongez directement dans l’ambiance en découvrant Delhi, capitale effervescente, bruyante, odorante et animée ! Un endroit fascinant qui allie à la fois tradition et modernité, à découvrir au plus vite : New Delhi (la ville moderne) et Old Delhi (la vieille ville historique).",
        highlights: ["Arrivée à Delhi", "Transfert hôtel", "Découverte ambiance locale"],
      },
      {
        day: 2,
        title: "Visite de New Delhi",
        description:
          "Petit-déjeuner à l’hôtel puis visite de Delhi (anciens et nouveaux quartiers) incluant : le « Red Fort », la « Jama Masjid », l’endroit où Mahatma Gandhi a été incinéré, la « Tombe de Humayun », le « temple du Lotus » et les « jardins de Lodi ». En fin de journée, possibilité de visiter le temple d’Akshardham.",
        highlights: ["Red Fort", "Jama Masjid", "Tombe de Humayun", "Lotus Temple", "Lodi Gardens", "Temple Akshardham"],
      },
      {
        day: 3,
        title: "New Delhi / Agra",
        description:
          "En arrivant à Agra, vous faites connaissance avec votre guide francophone et organisez vos prochaines visites. Vous visiterez le « Baby Taj », et enfin de journée, les jardins de Mehtab Bagh pour les meilleures photos du célèbre Taj Mahal.",
        highlights: ["Baby Taj", "Mehtab Bagh", "Vue sur le Taj Mahal"],
      },
      {
        day: 4,
        title: "Agra et le Taj Mahal",
        description:
          "À l’aube, visite du célèbre TAJ MAHAL ! Dans les brumes matinales et avant la foule, vous découvrez le géant de pierre en compagnie de votre guide francophone, qui vous racontera 1001 anecdotes. Ensuite, visite du Red Fort, résidence des Empereurs Moghols.",
        highlights: ["Taj Mahal", "Red Fort", "Histoire moghole"],
      },
      {
        day: 5,
        title: "Agra / Jaipur",
        description:
          "Une dernière visite avant d’entrer au Rajasthan : Fatehpur Sikri, la ville fantôme construite par Akbar en 1571 et abandonnée après 14 ans. Admirez les bâtiments en grès rouge et la majestueuse mosquée avant de rejoindre Jaipur.",
        highlights: ["Fatehpur Sikri", "Mosquée", "Route vers Jaipur"],
      },
      {
        day: 6,
        title: "Jaipur",
        description:
          "Découverte de la ville rose : Amber Fort, un baoli (puits à escaliers), le Lake Palace, puis le Palais des vents. Balade dans les bazars ou visite de l’Albert Hall Museum.",
        highlights: ["Amber Fort", "Palais des vents", "Bazars", "Albert Hall Museum"],
      },
      {
        day: 7,
        title: "Pushkar",
        description:
          "Ville sacrée des hindous, autour d’un lac sacré. Atmosphère envoutante au coucher du soleil. Seule ville d’Inde avec un temple de Brahma. Foire aux chameaux célèbre en automne.",
        highlights: ["Lac sacré", "Temple de Brahma", "Foire aux chameaux"],
      },
      {
        day: 8,
        title: "Bundi",
        description:
          "Petite ville authentique avec le Garh Palace et ses fresques, le Raniji-ki-Baori (puits de la Reine). Marché coloré et ambiance paisible.",
        highlights: ["Garh Palace", "Peintures murales", "Raniji-ki-Baori"],
      },
      {
        day: 9,
        title: "Chittorgarh",
        description:
          "Étape historique : guerres sanglantes et héros rajpoutes. Visite de la célèbre Victory Tower (Vijaya Stamba) et temples.",
        highlights: ["Chittorgarh", "Victory Tower", "Histoire rajpoute"],
      },
      {
        day: 10,
        title: "Udaipur",
        description:
          "Arrivée à la romantique Udaipur. Installation et soirée face au lac scintillant. Balade dans la vieille ville.",
        highlights: ["Lac Pichola", "Vieille ville", "Ambiance romantique"],
      },
      {
        day: 11,
        title: "Visite d’Udaipur",
        description:
          "Visite du City Palace, croisière vers Jag Mandir, promenade dans les ruelles étroites, peinture miniature et spectacle de danses traditionnelles au Bagor Ki Haveli.",
        highlights: ["City Palace", "Croisière", "Jag Mandir", "Bagor Ki Haveli"],
      },
      {
        day: 12,
        title: "Ranakpur / Jodhpur",
        description:
          "Route vers Jodhpur via les Monts Aravalli. Arrêt au temple jaïn de Ranakpur (1444 piliers en marbre sculpté). Arrivée à Jodhpur, la ville bleue.",
        highlights: ["Temple de Ranakpur", "Monts Aravalli", "Jodhpur"],
      },
      {
        day: 13,
        title: "Jodhpur",
        description:
          "Visite du fort de Mehrangarh, promenade dans les ruelles bleues. Possibilité de visiter Jaswant Thada ou admirer le coucher de soleil.",
        highlights: ["Mehrangarh", "Maisons bleues", "Jaswant Thada"],
      },
      {
        day: 14,
        title: "Retour à New Delhi",
        description:
          "Vol local vers Delhi. Possibilité de visiter des sites touristiques selon l’heure.",
        highlights: ["Vol retour", "Delhi libre"],
      },
      {
        day: 15,
        title: "Retour vers la France",
        description:
          "Transfert à l’aéroport de New Delhi selon l’horaire de votre vol retour. Fin des prestations.",
        highlights: ["Transfert aéroport", "Vol retour"],
      },
    ],
  },

  // Northern Triangle Circuit (12 days / 11 nights)
  {
    id: "northern-triangle",
    name: "Circuit Le Triangle du Nord",
    subtitle: "Amritsar, Shimla et Rishikesh",
    duration: "12 jours / 11 nuits",
    price: "à partir de 1 100 € / personne",
    image: "/golden-temple-amritsar-with-reflection-in-sacred.jpg",
    description:
      "Découvrez notre triangle du nord : partez sur les traces de la religion Sikh et de son sublime Golden Temple, prenez de l’altitude à Shimla et terminez par Rishikesh, capitale du Yoga.",
    highlights: [
      "Amritsar et son Golden Temple",
      "Shimla station de montagne",
      "Rishikesh et son atmosphère zen",
    ],
    itinerary: [
      { day: 1, title: "France / New Delhi", description: "Accueil à l’aéroport et transfert à l’hôtel. Découverte de Delhi.", highlights: ["Arrivée", "Transfert", "Découverte Delhi"] },
      { day: 2, title: "Visite de New Delhi", description: "Visite du Red Fort, Jama Masjid, Tombe de Humayun, Lotus Temple, jardins de Lodi et temple d’Akshardham.", highlights: ["Red Fort", "Jama Masjid", "Humayun", "Lotus Temple"] },
      { day: 3, title: "Delhi – Amritsar", description: "Vol local vers Amritsar. Découverte du Golden Temple de nuit.", highlights: ["Vol Amritsar", "Golden Temple"] },
      { day: 4, title: "Amritsar", description: "Retour au Golden Temple de jour, visite du Partition Museum et balade en vieille ville.", highlights: ["Golden Temple", "Partition Museum"] },
      { day: 5, title: "Amritsar – Chandigarh", description: "Route vers Chandigarh, ville moderne conçue par Le Corbusier. Visite du Capitol Center et du Rock Garden.", highlights: ["Chandigarh", "Rock Garden", "Capitol Center"] },
      { day: 6, title: "Chandigarh – Shimla", description: "Route vers Shimla. Trajet en Toy Train jusqu’au centre-ville.", highlights: ["Shimla", "Toy Train"] },
      { day: 7, title: "Shimla", description: "Promenade sur The Mall, montée à The Ridge et temple Hanuman.", highlights: ["The Mall", "The Ridge", "Temple Hanuman"] },
      { day: 8, title: "Shimla – Rishikesh", description: "Longue route vers Rishikesh. Installation à l’hôtel.", highlights: ["Route", "Arrivée Rishikesh"] },
      { day: 9, title: "Rishikesh", description: "Balade dans Swargashram et Lakshman Jhula. Cérémonie des lumières sur les ghâts de Parmath.", highlights: ["Yoga", "Cérémonie Aarti"] },
      { day: 10, title: "Rishikesh", description: "Randonnée dans les forêts et visite du Maharishi Mahesh Yogi Ashram.", highlights: ["Randonnée", "Ashram Beatles"] },
      { day: 11, title: "Rishikesh – New Delhi", description: "Route vers New Delhi. Temps libre pour derniers achats.", highlights: ["Retour Delhi"] },
      { day: 12, title: "Retour vers l’Europe", description: "Transfert à l’aéroport international pour vol retour.", highlights: ["Transfert", "Vol retour"] },
    ],
  },

  // Ganges Valley Circuit (14 days / 13 nights)
  {
    id: "ganges-valley",
    name: "Circuit Vallée du Gange",
    subtitle: "Au fil du fleuve sacré, de Varanasi à Calcutta",
    duration: "14 jours / 13 nuits",
    price: "à partir de 1 200 € / personne",
    image: "/varanasi-ghats-at-sunrise-with-pilgrims-performi.jpg",
    description:
      "Découvrez les trésors de la Vallée du Gange : Varanasi, Bodhgaya et Calcutta.",
    highlights: ["Varanasi", "Bodhgaya", "Calcutta"],
    itinerary: [
      { day: 1, title: "France / New Delhi", description: "Accueil à Delhi et transfert à l’hôtel.", highlights: ["Arrivée", "Delhi"] },
      { day: 2, title: "Visite de New Delhi", description: "Visite du Red Fort, Jama Masjid, Humayun, Lotus Temple et temple d’Akshardham.", highlights: ["Red Fort", "Lotus Temple", "Akshardham"] },
      { day: 3, title: "New Delhi – Varanasi", description: "Vol local vers Varanasi. Arrivée en soirée.", highlights: ["Vol Varanasi"] },
      { day: 4, title: "Varanasi", description: "Barque sur le Gange à l’aube. Visite des ghâts et vieille ville.", highlights: ["Gange", "Ghâts", "Vieille ville"] },
      { day: 5, title: "Varanasi", description: "Visite du temple Vishwanath. Soirée Ganga Aarti.", highlights: ["Temple Vishwanath", "Ganga Aarti"] },
      { day: 6, title: "Varanasi – Bodhgaya", description: "Route vers Bodhgaya (~6h). Arrivée et repos.", highlights: ["Route", "Bodhgaya"] },
      { day: 7, title: "Bodhgaya", description: "Visite du Mahabodhi Temple et du Bodhi Tree.", highlights: ["Mahabodhi", "Bodhi Tree"] },
      { day: 8, title: "Bodhgaya", description: "Journée libre : cours de cuisine, yoga ou méditation.", highlights: ["Cours de cuisine", "Yoga", "Méditation"] },
      { day: 9, title: "Bodhgaya – Calcutta", description: "Vol local vers Calcutta.", highlights: ["Vol Calcutta"] },
      { day: 10, title: "Calcutta", description: "Visite du Flower Market, Indian Museum et maison de Tagore.", highlights: ["Flower Market", "Indian Museum", "Tagore"] },
      { day: 11, title: "Calcutta", description: "Visite du Maidan, Victoria Memorial et Kalighat Temple.", highlights: ["Victoria Memorial", "Kalighat Temple"] },
      { day: 12, title: "Calcutta", description: "Visite de Kumartuli, temples jaïns et Mère Teresa.", highlights: ["Kumartuli", "Temple jaïn", "Mère Teresa"] },
      { day: 13, title: "Calcutta – New Delhi", description: "Vol local retour vers Delhi.", highlights: ["Vol retour"] },
      { day: 14, title: "Retour vers l’Europe", description: "Transfert à l’aéroport international pour vol retour.", highlights: ["Vol Europe"] },
    ],
  },

  // Treasures of Rajasthan (19 days / 18 nights)
  {
    id: "rajasthan-treasures",
    name: "Trésors du Rajasthan",
    subtitle: "Circuit complet du Rajasthan, Terre des Rois",
    duration: "19 jours / 18 nuits",
    price: "à partir de 1 600 € / personne",
    image: "/rajasthan-palace-with-intricate-architecture-and-v.jpg",
    description:
      "Découvrez le faste et l’opulence du Rajasthan, ses citadelles, ses palais et son peuple haut en couleurs.",
    highlights: ["Circuit complet Rajasthan", "Palais et citadelles", "Culture et immersion"],
    itinerary: [
      { day: 1, title: "France / New Delhi", description: "Accueil à Delhi et transfert hôtel. Découverte de Delhi moderne et ancienne.", highlights: ["Arrivée", "Delhi"] },
      { day: 2, title: "Visite de New Delhi", description: "Visite du Red Fort, Jama Masjid, Tombe de Humayun, Lotus Temple, Lodi Gardens et temple Akshardham.", highlights: ["Red Fort", "Jama Masjid", "Humayun", "Akshardham"] },
      { day: 3, title: "New Delhi / Agra", description: "Route vers Agra. Visite du Baby Taj et Mehtab Bagh.", highlights: ["Baby Taj", "Mehtab Bagh"] },
      { day: 4, title: "Agra et le Taj Mahal", description: "Visite du Taj Mahal à l’aube et du Red Fort.", highlights: ["Taj Mahal", "Red Fort"] },
      { day: 5, title: "Agra / Jaipur", description: "Visite de Fatehpur Sikri puis route vers Jaipur.", highlights: ["Fatehpur Sikri", "Route Jaipur"] },
      { day: 6, title: "Jaipur", description: "Visite de l’Amber Fort, Palais des vents, bazars et Albert Hall Museum.", highlights: ["Amber Fort", "Palais des vents"] },
      { day: 7, title: "Pushkar", description: "Ville sacrée autour d’un lac. Temple de Brahma et ambiance spirituelle.", highlights: ["Pushkar", "Temple Brahma"] },
      { day: 8, title: "Bundi", description: "Découverte du Garh Palace et Raniji-ki-Baori.", highlights: ["Garh Palace", "Raniji-ki-Baori"] },
      { day: 9, title: "Chittorgarh", description: "Visite de la Victory Tower et temples.", highlights: ["Chittorgarh", "Victory Tower"] },
      { day: 10, title: "Udaipur", description: "Arrivée à Udaipur. Soirée face au lac scintillant.", highlights: ["Udaipur", "Lac Pichola"] },
      { day: 11, title: "Visite d’Udaipur", description: "City Palace, croisière Jag Mandir, peinture miniature et spectacle au Bagor Ki Haveli.", highlights: ["City Palace", "Jag Mandir"] },
      { day: 12, title: "Ranakpur / Jodhpur", description: "Arrêt au temple jaïn de Ranakpur puis arrivée à Jodhpur.", highlights: ["Temple Ranakpur", "Jodhpur"] },
      { day: 13, title: "Jodhpur", description: "Visite du fort Mehrangarh et Jaswant Thada.", highlights: ["Mehrangarh", "Jaswant Thada"] },
      { day: 14, title: "Jodhpur / Jaisalmer", description: "Route vers Jaisalmer. Nuit dans le désert à Khuri.", highlights: ["Route Jaisalmer", "Désert Khuri"] },
      { day: 15, title: "Jaisalmer", description: "Visite de la citadelle, Havelis et Bada Bagh.", highlights: ["Citadelle", "Havelis", "Bada Bagh"] },
      { day: 16, title: "Jaisalmer / Bikaner", description: "Route vers Bikaner. Visite du Junagarth Fort et temple jaïn.", highlights: ["Bikaner", "Junagarth Fort"] },
      { day: 17, title: "Bikaner / Nawalgarh", description: "Découverte du Shekhawati et Nawalgarh.", highlights: ["Shekhawati", "Nawalgarh"] },
      { day: 18, title: "Retour à New Delhi", description: "Vol retour vers Delhi. Visites possibles selon horaire.", highlights: ["Vol retour", "Delhi"] },
      { day: 19, title: "Retour vers la France", description: "Transfert à l’aéroport pour votre vol retour.", highlights: ["Transfert", "Vol retour"] },
    ],
  },
];

export function getAllTours(): Tour[] {
  return tours;
}

export function getTourById(id: string): Tour | undefined {
  return tours.find((tour) => tour.id === id);
}
