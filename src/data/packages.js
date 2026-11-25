const packages = [
  {
    id: 'kerala-backwaters',
    name: 'Kerala Backwater Escape',
    destination: 'Alappuzha, Kerala',
    category: 'Nature',
    duration: 3,
    price: 7999,
    rating: 4.8,
    reviews: 124,
    image: '/images/destinations/kerala-backwaters.jpg',
    description:
      'Experience the peaceful beauty of Kerala backwaters, traditional houseboats, lush landscapes and unforgettable sunsets.',
    highlights: [
      'Houseboat experience',
      'Backwater cruise',
      'Kerala traditional cuisine',
      'Sunset views',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Alappuzha',
        description:
          'Arrival, hotel check-in, explore the local surroundings and enjoy the evening.',
      },
      {
        day: 2,
        title: 'Backwater Experience',
        description:
          'Enjoy a backwater cruise, village exploration and Kerala cuisine.',
      },
      {
        day: 3,
        title: 'Departure',
        description:
          'Enjoy breakfast and depart with memorable experiences.',
      },
    ],
    inclusions: [
      '2 nights accommodation',
      'Breakfast',
      'Backwater cruise',
      'Local sightseeing',
    ],
    exclusions: [
      'Personal expenses',
      'Travel to Alappuzha',
      'Additional activities',
    ],
  },

  {
    id: 'manali-adventure',
    name: 'Himalayan Adventure',
    destination: 'Manali, Himachal Pradesh',
    category: 'Adventure',
    duration: 5,
    price: 14999,
    rating: 4.9,
    reviews: 210,
    image: '/images/destinations/manali-adventure.jpg',
    description:
      'Explore the majestic Himalayas with mountain views, scenic valleys, adventure activities and beautiful winter landscapes.',
    highlights: [
      'Mountain sightseeing',
      'Solang Valley',
      'Snow activities',
      'Himalayan landscapes',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Manali',
        description:
          'Arrival, check-in and explore the local market.',
      },
      {
        day: 2,
        title: 'Solang Valley',
        description:
          'Enjoy mountain views and optional adventure activities.',
      },
      {
        day: 3,
        title: 'Local Exploration',
        description:
          'Visit popular attractions and enjoy the beauty of Manali.',
      },
      {
        day: 4,
        title: 'Mountain Experience',
        description:
          'Explore nearby mountain destinations and scenic viewpoints.',
      },
      {
        day: 5,
        title: 'Departure',
        description:
          'Breakfast and departure.',
      },
    ],
    inclusions: [
      '4 nights accommodation',
      'Breakfast',
      'Local sightseeing',
      'Transportation for itinerary',
    ],
    exclusions: [
      'Airfare or train fare',
      'Adventure activities',
      'Personal expenses',
    ],
  },

  {
    id: 'goa-beach',
    name: 'Goa Beach Holiday',
    destination: 'North Goa, Goa',
    category: 'Beach',
    duration: 4,
    price: 11999,
    rating: 4.7,
    reviews: 186,
    image: '/images/destinations/goa-beach.jpg',
    description:
      'Relax on beautiful beaches, explore Portuguese heritage, discover local markets and experience Goa at your own pace.',
    highlights: [
      'Beach exploration',
      'Fort Aguada',
      'Local markets',
      'Coastal sunsets',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Goa',
        description:
          'Check-in and enjoy the nearby beach.',
      },
      {
        day: 2,
        title: 'North Goa Exploration',
        description:
          'Visit popular beaches and explore coastal attractions.',
      },
      {
        day: 3,
        title: 'Heritage and Leisure',
        description:
          'Explore historic locations and local markets.',
      },
      {
        day: 4,
        title: 'Departure',
        description:
          'Breakfast and departure.',
      },
    ],
    inclusions: [
      '3 nights accommodation',
      'Breakfast',
      'Selected sightseeing',
    ],
    exclusions: [
      'Flights or train tickets',
      'Water sports',
      'Personal expenses',
    ],
  },

  {
    id: 'rajasthan-royal',
    name: 'Royal Rajasthan',
    destination: 'Jaipur, Rajasthan',
    category: 'Culture',
    duration: 4,
    price: 13999,
    rating: 4.8,
    reviews: 156,
    image: '/images/destinations/rajasthan-royal.jpg',
    description:
      'Discover royal palaces, historic forts, colourful markets and the rich heritage of Rajasthan.',
    highlights: [
      'Amber Fort',
      'Hawa Mahal',
      'City Palace',
      'Traditional markets',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jaipur',
        description:
          'Arrival and explore the Pink City.',
      },
      {
        day: 2,
        title: 'Royal Forts',
        description:
          'Visit Amber Fort and other historic attractions.',
      },
      {
        day: 3,
        title: 'City Heritage',
        description:
          'Explore Hawa Mahal, City Palace and local markets.',
      },
      {
        day: 4,
        title: 'Departure',
        description:
          'Breakfast and departure.',
      },
    ],
    inclusions: [
      '3 nights accommodation',
      'Breakfast',
      'Heritage sightseeing',
    ],
    exclusions: [
      'Flights',
      'Entry fees unless specified',
      'Personal expenses',
    ],
  },

  {
    id: 'kashmir-paradise',
    name: 'Kashmir Paradise',
    destination: 'Srinagar, Kashmir',
    category: 'Nature',
    duration: 5,
    price: 18999,
    rating: 4.9,
    reviews: 243,
    image: '/images/destinations/kashmir-paradise.jpg',
    description:
      'Discover snow-capped mountains, beautiful valleys, peaceful lakes and the breathtaking landscapes of Kashmir.',
    highlights: [
      'Dal Lake',
      'Shikara ride',
      'Mountain views',
      'Valley exploration',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar',
        description:
          'Arrival, check-in and explore the lake surroundings.',
      },
      {
        day: 2,
        title: 'Dal Lake',
        description:
          'Enjoy a Shikara ride and lake views.',
      },
      {
        day: 3,
        title: 'Valley Exploration',
        description:
          'Explore nearby scenic valleys.',
      },
      {
        day: 4,
        title: 'Mountain Experience',
        description:
          'Enjoy nature, landscapes and local attractions.',
      },
      {
        day: 5,
        title: 'Departure',
        description:
          'Breakfast and departure.',
      },
    ],
    inclusions: [
      '4 nights accommodation',
      'Breakfast',
      'Shikara ride',
      'Local sightseeing',
    ],
    exclusions: [
      'Flights',
      'Adventure activities',
      'Personal expenses',
    ],
  },

  {
    id: 'munnar-hills',
    name: 'Munnar Hill Retreat',
    destination: 'Munnar, Kerala',
    category: 'Nature',
    duration: 3,
    price: 6999,
    rating: 4.6,
    reviews: 98,
    image: '/images/destinations/munnar-hills.jpg',
    description:
      'Escape into the misty hills of Munnar, surrounded by tea plantations, mountain views and peaceful nature.',
    highlights: [
      'Tea plantations',
      'Mountain viewpoints',
      'Eravikulam region',
      'Nature walks',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Munnar',
        description:
          'Arrival and relaxation among the hills.',
      },
      {
        day: 2,
        title: 'Tea Garden Exploration',
        description:
          'Explore tea plantations and scenic viewpoints.',
      },
      {
        day: 3,
        title: 'Departure',
        description:
          'Breakfast and departure.',
      },
    ],
    inclusions: [
      '2 nights accommodation',
      'Breakfast',
      'Selected sightseeing',
    ],
    exclusions: [
      'Travel to Munnar',
      'Entry fees',
      'Personal expenses',
    ],
  },

  {
    id: 'andaman-islands',
    name: 'Andaman Island Escape',
    destination: 'Port Blair, Andaman Islands',
    category: 'Beach',
    duration: 6,
    price: 24999,
    rating: 4.9,
    reviews: 176,
    image: '/images/destinations/andaman-islands.jpg',
    description:
      'Experience tropical islands, turquoise waters, white sandy beaches and the peaceful beauty of the Andaman Islands.',
    highlights: [
      'Island exploration',
      'Beach relaxation',
      'Crystal-clear water',
      'Marine landscapes',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Port Blair',
        description:
          'Arrival and island orientation.',
      },
      {
        day: 2,
        title: 'Island Exploration',
        description:
          'Explore the surrounding island attractions.',
      },
      {
        day: 3,
        title: 'Beach Experience',
        description:
          'Enjoy a relaxing beach day.',
      },
      {
        day: 4,
        title: 'Island Adventure',
        description:
          'Discover more island destinations.',
      },
      {
        day: 5,
        title: 'Leisure Day',
        description:
          'Enjoy free time and scenic surroundings.',
      },
      {
        day: 6,
        title: 'Departure',
        description:
          'Breakfast and departure.',
      },
    ],
    inclusions: [
      '5 nights accommodation',
      'Breakfast',
      'Selected island transfers',
    ],
    exclusions: [
      'Flights',
      'Water sports',
      'Personal expenses',
    ],
  },

  {
    id: 'dubai-luxury',
    name: 'Dubai City Experience',
    destination: 'Dubai, UAE',
    category: 'City',
    duration: 5,
    price: 32999,
    rating: 4.8,
    reviews: 267,
    image: '/images/destinations/dubai-luxury.jpg',
    description:
      'Experience futuristic architecture, modern attractions, desert landscapes and the luxury lifestyle of Dubai.',
    highlights: [
      'Burj Khalifa',
      'Dubai Marina',
      'Desert experience',
      'City sightseeing',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dubai',
        description:
          'Arrival, hotel check-in and city exploration.',
      },
      {
        day: 2,
        title: 'Modern Dubai',
        description:
          'Explore the city and its iconic architecture.',
      },
      {
        day: 3,
        title: 'Desert Experience',
        description:
          'Enjoy a desert excursion.',
      },
      {
        day: 4,
        title: 'Shopping and Leisure',
        description:
          'Explore shopping destinations and attractions.',
      },
      {
        day: 5,
        title: 'Departure',
        description:
          'Breakfast and departure.',
      },
    ],
    inclusions: [
      '4 nights accommodation',
      'Breakfast',
      'Selected sightseeing',
    ],
    exclusions: [
      'Flights',
      'Shopping',
      'Optional attractions',
    ],
  },

  {
    id: 'ooty-escape',
    name: 'Ooty Mountain Escape',
    destination: 'Ooty, Tamil Nadu',
    category: 'Nature',
    duration: 3,
    price: 8499,
    rating: 4.5,
    reviews: 87,
    image: '/images/destinations/ooty-escape.jpg',
    description:
      'Enjoy cool weather, green landscapes, scenic mountain railways and the charm of the Nilgiri hills.',
    highlights: [
      'Nilgiri hills',
      'Tea gardens',
      'Scenic viewpoints',
      'Local exploration',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Ooty',
        description:
          'Arrival and explore the town.',
      },
      {
        day: 2,
        title: 'Nilgiri Exploration',
        description:
          'Explore scenic viewpoints and tea gardens.',
      },
      {
        day: 3,
        title: 'Departure',
        description:
          'Breakfast and departure.',
      },
    ],
    inclusions: [
      '2 nights accommodation',
      'Breakfast',
      'Local sightseeing',
    ],
    exclusions: [
      'Train tickets',
      'Entry fees',
      'Personal expenses',
    ],
  },

  {
    id: 'coorg-nature',
    name: 'Coorg Nature Retreat',
    destination: 'Coorg, Karnataka',
    category: 'Nature',
    duration: 3,
    price: 8999,
    rating: 4.7,
    reviews: 113,
    image: '/images/destinations/coorg-nature.jpg',
    description:
      'Discover misty forests, coffee plantations, waterfalls and peaceful mountain scenery in Coorg.',
    highlights: [
      'Coffee plantations',
      'Waterfalls',
      'Forest exploration',
      'Mountain views',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Coorg',
        description:
          'Arrival and relax at your nature retreat.',
      },
      {
        day: 2,
        title: 'Nature Exploration',
        description:
          'Explore coffee plantations and nearby waterfalls.',
      },
      {
        day: 3,
        title: 'Departure',
        description:
          'Breakfast and departure.',
      },
    ],
    inclusions: [
      '2 nights accommodation',
      'Breakfast',
      'Selected sightseeing',
    ],
    exclusions: [
      'Travel to Coorg',
      'Adventure activities',
      'Personal expenses',
    ],
  },

  {
    id: 'varanasi-spiritual',
    name: 'Spiritual Varanasi',
    destination: 'Varanasi, Uttar Pradesh',
    category: 'Culture',
    duration: 3,
    price: 9999,
    rating: 4.8,
    reviews: 194,
    image: '/images/destinations/varanasi-spiritual.jpg',
    description:
      'Explore the ancient city of Varanasi, its riverfront ghats, historic streets, spiritual traditions and vibrant culture.',
    highlights: [
      'Ganga riverfront',
      'Morning boat experience',
      'Historic temples',
      'Cultural exploration',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Varanasi',
        description:
          'Arrival and explore the historic surroundings.',
      },
      {
        day: 2,
        title: 'Riverfront Experience',
        description:
          'Explore the ghats and experience the city culture.',
      },
      {
        day: 3,
        title: 'Departure',
        description:
          'Breakfast and departure.',
      },
    ],
    inclusions: [
      '2 nights accommodation',
      'Breakfast',
      'Selected sightseeing',
    ],
    exclusions: [
      'Flights',
      'Temple donations',
      'Personal expenses',
    ],
  },

  {
    id: 'meghalaya-explorer',
    name: 'Meghalaya Explorer',
    destination: 'Shillong, Meghalaya',
    category: 'Adventure',
    duration: 5,
    price: 16999,
    rating: 4.9,
    reviews: 142,
    image: '/images/destinations/meghalaya-explorer.jpg',
    description:
      'Explore Meghalaya with dramatic waterfalls, lush forests, living root bridges and mist-covered mountains.',
    highlights: [
      'Living root bridges',
      'Waterfalls',
      'Mountain landscapes',
      'Nature trails',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Shillong',
        description:
          'Arrival and explore Shillong.',
      },
      {
        day: 2,
        title: 'Waterfall Exploration',
        description:
          'Visit scenic waterfalls and nature destinations.',
      },
      {
        day: 3,
        title: 'Root Bridge Experience',
        description:
          'Explore the living root bridges.',
      },
      {
        day: 4,
        title: 'Mountain and Forests',
        description:
          'Discover Meghalaya landscapes.',
      },
      {
        day: 5,
        title: 'Departure',
        description:
          'Breakfast and departure.',
      },
    ],
    inclusions: [
      '4 nights accommodation',
      'Breakfast',
      'Selected sightseeing',
    ],
    exclusions: [
      'Flights',
      'Entry fees',
      'Personal expenses',
    ],
  },
]

export default packages

