export interface TourDay {
  day: number
  title: string
  description: string
  highlights: string[]
}

export interface Tour {
  id: string
  name: string
  subtitle: string
  duration: string
  price: string
  image: string
  description: string
  highlights: string[]
  itinerary: TourDay[]
}

export const tours: Tour[] = [
  {
    id: "rajasthan-taj-mahal",
    name: "Rajasthan & Taj Mahal Circuit",
    subtitle: "Discover the treasures of Agra and the heart of Rajasthan",
    duration: "15 days / 14 nights",
    price: "from €1,400 / person",
    image: "/rajasthan-palace-with-intricate-architecture-and-v.jpg",
    description:
      "Discover the treasures of Agra: Sikandra, the famous Taj Mahal and the Red Fort, then dive into the heart of Rajasthan, between impregnable fortresses, sacred lakes, remarkable architecture and Indian colors...",
    highlights: ["New Delhi", "Taj Mahal", "Rajasthan - Land of Kings", "A magnificent circuit!"],
    itinerary: [
      {
        day: 1,
        title: "France / New Delhi",
        description:
          "Welcome at New Delhi airport by our representative and transfer to your hotel. You dive directly into the atmosphere by discovering Delhi, effervescent, noisy, fragrant and lively capital!",
        highlights: ["Airport transfer", "Delhi discovery", "Hotel check-in"],
      },
      {
        day: 2,
        title: "New Delhi Visit",
        description:
          "Breakfast at the hotel then visit of Delhi (old and new districts) including the Red Fort, Jama Masjid, Humayun's Tomb, Lotus Temple and Lodi Gardens.",
        highlights: ["Red Fort", "Jama Masjid", "Humayun's Tomb", "Lotus Temple", "Akshardham Temple"],
      },
      {
        day: 3,
        title: "New Delhi / Agra",
        description:
          "Arriving in Agra, you meet your French-speaking guide and organize your next visits. You will visit the Baby Taj and end the day at Mehtab Bagh gardens for the best photos of the famous Taj Mahal.",
        highlights: ["French-speaking guide", "Baby Taj", "Mehtab Bagh gardens", "Taj Mahal views"],
      },
      {
        day: 4,
        title: "Agra and the Taj Mahal",
        description:
          "This morning at dawn you visit the famous TAJ MAHAL! In the morning mists and before the crowds, you discover the stone giant with your French-speaking guide. Then visit the imposing Red Fort.",
        highlights: ["Taj Mahal at sunrise", "Red Fort", "Mughal history", "Shah Jahan's story"],
      },
      {
        day: 5,
        title: "Agra / Jaipur",
        description:
          "A last visit before entering the Rajasthan region: Fatehpur Sikri or the ghost town! Built by Emperor Akbar in 1571, this beautiful city was ephemeral, abandoned after just 14 years.",
        highlights: ["Fatehpur Sikri", "Ghost city", "Red sandstone buildings", "Journey to Jaipur"],
      },
    ],
  },
  {
    id: "northern-triangle",
    name: "Northern Triangle Circuit",
    subtitle: "Amritsar's Golden Temple, Shimla and peaceful Rishikesh",
    duration: "12 days / 11 nights",
    price: "from €1,100 / person",
    image: "/golden-temple-amritsar-with-reflection-in-sacred.jpg",
    description:
      "Discover our northern triangle: follow the traces of the Sikh religion and its sublime Golden Temple of Amritsar, take some altitude in Shimla, British mountain station and end your stay in Rishikesh, capital of Yoga with such a peaceful atmosphere!",
    highlights: [
      "3 atypical sites",
      "Amritsar and its Golden Temple",
      "Shimla and its mountain landscapes",
      "Rishikesh for its zen atmosphere",
    ],
    itinerary: [
      {
        day: 1,
        title: "France / New Delhi",
        description:
          "Welcome at New Delhi airport and transfer to your hotel. Discover Delhi, fascinating capital that combines tradition and modernity.",
        highlights: ["Airport transfer", "Delhi discovery", "Hotel check-in"],
      },
      {
        day: 2,
        title: "New Delhi Visit",
        description:
          "Visit of Delhi including Red Fort, Jama Masjid, Gandhi's cremation site, Humayun's Tomb, Lotus Temple and Akshardham Temple.",
        highlights: ["Red Fort", "Jama Masjid", "Humayun's Tomb", "Lotus Temple", "Akshardham Temple"],
      },
      {
        day: 3,
        title: "Delhi - Amritsar",
        description:
          "Local flight to Amritsar, capital of Punjab. In the evening, discover the famous Golden Temple, the most important temple in India for Sikh people.",
        highlights: ["Flight to Amritsar", "Golden Temple", "Sacred lake", "Evening visit"],
      },
      {
        day: 4,
        title: "Amritsar",
        description:
          "Return to the Golden Temple to admire it in full sunlight. Visit the Partition Museum and walk through the old city streets.",
        highlights: ["Golden Temple daylight", "Partition Museum", "Old city exploration", "Sikh culture"],
      },
    ],
  },
  {
    id: "ganges-valley",
    name: "Ganges Valley Circuit",
    subtitle: "Along the mythical Ganges river through sacred cities",
    duration: "14 days / 13 nights",
    price: "from €1,200 / person",
    image: "/varanasi-ghats-at-sunrise-with-pilgrims-performi.jpg",
    description:
      "Discover the treasures of the Ganges Valley along this mythical river! Start with Varanasi (former Benares) and its famous ghats, then Bodhgaya where Buddha received enlightenment under a sacred banyan tree and finish in intellectual Calcutta...",
    highlights: ["Along the Ganga river", "3 mythical cities", "Varanasi (Benares)", "Bodhgaya and Calcutta"],
    itinerary: [
      {
        day: 1,
        title: "France / New Delhi",
        description:
          "Welcome at New Delhi airport and transfer to your hotel. Discover New Delhi, effervescent capital combining tradition and modernity.",
        highlights: ["Airport transfer", "Delhi discovery", "Hotel check-in"],
      },
      {
        day: 2,
        title: "New Delhi Visit",
        description:
          "Visit of Delhi including Red Fort, Jama Masjid, Gandhi's site, Humayun Tomb, Lotus Temple and grand Akshardham Temple.",
        highlights: ["Red Fort", "Jama Masjid", "Humayun Tomb", "Lotus Temple", "Akshardham Temple"],
      },
      {
        day: 3,
        title: "New Delhi - Varanasi",
        description:
          "Local flight to Varanasi in the evening. Your driver takes you to your hotel in this mystical city.",
        highlights: ["Flight to Varanasi", "Hotel transfer", "Sacred city arrival"],
      },
      {
        day: 4,
        title: "Varanasi",
        description:
          "At dawn, boat trip on the sacred Ganges to the famous ghats. Discover Indian life at sunrise between ablutions and prayers. Visit cremation ghats and old quarter.",
        highlights: ["Ganges boat trip", "Sacred ghats", "Cremation ghats", "Old quarter walk"],
      },
    ],
  },
  {
    id: "rajasthan-treasures",
    name: "Treasures of Rajasthan Circuit",
    subtitle: "Complete tour of Rajasthan, the Land of Kings",
    duration: "19 days / 18 nights",
    price: "from €1,600 / person",
    image: "/rajasthan-palace-with-intricate-architecture-and-v.jpg",
    description:
      "Discover the treasures of Rajasthan, the land of Kings! Rajasthan offers the splendor and opulence of its numerous palaces and citadels, of its beautiful and proud people, with colorful saris and infinite turbans...",
    highlights: [
      "Complete Rajasthan tour",
      "Discovery of main tourist sites",
      "Palaces and citadels",
      "Cultural immersion",
    ],
    itinerary: [
      {
        day: 1,
        title: "France / New Delhi",
        description:
          "Welcome at New Delhi airport and transfer to your hotel. Dive into the atmosphere of Delhi, effervescent, noisy, fragrant and lively capital!",
        highlights: ["Airport transfer", "Delhi discovery", "Hotel check-in"],
      },
      {
        day: 2,
        title: "New Delhi Visit",
        description:
          "Visit of Delhi including Red Fort, Jama Masjid, Gandhi's cremation site, Humayun's Tomb, Lotus Temple and Lodi Gardens.",
        highlights: ["Red Fort", "Jama Masjid", "Humayun's Tomb", "Lotus Temple", "Akshardham Temple"],
      },
    ],
  },
]

export function getTourById(id: string): Tour | undefined {
  return tours.find((tour) => tour.id === id)
}
