import { Package, PackageSummary } from "@/types/package";
import type { PackageFilters } from "@/types/packageFilters";

const packageData: Package[] = [
  // 1. Goa Beach Package
  {
    id: "1",
    title: "Goa Beach Escape",
    tagline: "Sun, Sand & Serenity",
    shortDescription:
      "Experience the best of Goa with pristine beaches, vibrant nightlife, and delicious cuisine.",
    longDescription:
      "This Goa Beach Escape package offers a perfect blend of relaxation and adventure. Enjoy sunbathing on golden sands, water sports, and exploring the vibrant Goan culture. Stay at a luxury beachfront resort, savor local delicacies, and make memories that last a lifetime.",
    slug: "goa-beach-escape",
    isPublished: true,
    departureCity: ["Mumbai", "Delhi", "Bengaluru"],
    destination: { cityName: "Goa", stateName: "Goa", countryName: "India" },
    themes: ["Beach", "Nightlife", "Adventure"],
    packageType: ["Couple Tour", "Group Tour"],
    price: { originalAmount: 35000, discountedAmount: 28999, currency: "INR" },
    duration: { days: 5, nights: 4 },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Beach Leisure",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Check-in & Relax",
            description:
              "Arrive in Goa, transfer to your hotel, and relax by the beach.",
          },
          {
            timeOfDay: "Evening",
            title: "Welcome Dinner",
            description:
              "Enjoy a welcome dinner with Goan cuisine at the resort.",
          },
        ],
      },
      {
        day: 2,
        title: "North Goa Sightseeing",
        events: [
          {
            timeOfDay: "Morning",
            title: "Fort Aguada Visit",
            description: "Explore the historic Fort Aguada and nearby beaches.",
          },
          {
            timeOfDay: "Afternoon",
            title: "Calangute & Baga Beach",
            description: "Enjoy water sports and beach activities.",
          },
        ],
      },
      {
        day: 3,
        title: "South Goa Serenity",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Palolem & Colva Beach",
            description:
              "Visit the serene beaches of South Goa and enjoy a quiet day.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Goa Beach Resort",
          rating: "4",
          roomType: "Deluxe Sea View",
          imageUrl:
            "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
          amenities: ["WiFi", "Pool", "Spa", "Breakfast"],
        },
      ],
      transfers: [
        {
          vehicleName: "Sedan",
          type: "Private",
          imageUrl:
            "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
          features: ["AC", "Music System"],
        },
      ],
      activities: [
        {
          title: "Water Sports",
          type: "Adventure",
          imageUrl:
            "https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg",
          isRefundable: false,
          highlights: ["Jet Ski", "Banana Boat", "Parasailing"],
        },
      ],
      meals: ["Breakfast", "Dinner"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg",
      "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    ],
    suggestedFlights: [
      {
        airline: "IndiGo",
        departureTime: "10:00",
        arrivalTime: "12:30",
        stops: 0,
      },
      {
        airline: "Air India",
        departureTime: "15:00",
        arrivalTime: "17:30",
        stops: 1,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // 2. Kerala Backwaters Honeymoon
  {
    id: "2",
    title: "Kerala Backwaters Honeymoon",
    tagline: "Romance in God's Own Country",
    shortDescription:
      "A romantic getaway through the tranquil backwaters of Kerala, staying in a traditional houseboat.",
    longDescription:
      "Celebrate your love amidst the serene backwaters of Alleppey. This package includes a private houseboat stay, authentic Kerala cuisine prepared onboard, and visits to quaint villages along the canals. It's the perfect escape for couples seeking peace and romance.",
    slug: "kerala-backwaters-honeymoon",
    isPublished: true,
    departureCity: ["Chennai", "Bengaluru", "Hyderabad"],
    destination: {
      cityName: "Alleppey",
      stateName: "Kerala",
      countryName: "India",
    },
    themes: ["Honeymoon", "Backwaters", "Relaxation", "Nature"],
    packageType: ["Couple Tour"],
    price: { originalAmount: 42000, discountedAmount: 36499, currency: "INR" },
    duration: { days: 4, nights: 3 },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cochin & Transfer to Alleppey",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Houseboat Check-in",
            description:
              "Arrive in Cochin, transfer to Alleppey and check into your private houseboat.",
          },
          {
            timeOfDay: "Evening",
            title: "Sunset Cruise",
            description:
              "Enjoy a mesmerizing sunset cruise on the Vembanad Lake.",
          },
        ],
      },
      {
        day: 2,
        title: "Exploring the Backwaters",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Village Tour & Canoe Ride",
            description:
              "Cruise through narrow canals, visit local villages, and enjoy a traditional canoe ride.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Premium Houseboat",
          rating: "5",
          roomType: "Private Suite",
          imageUrl:
            "https://images.pexels.com/photos/1543419/pexels-photo-1543419.jpeg",
          amenities: ["AC Bedroom", "Private Chef", "Sun Deck"],
        },
      ],
      transfers: [
        {
          vehicleName: "Innova",
          type: "Private Airport Transfer",
          imageUrl:
            "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
          features: ["AC"],
        },
      ],
      activities: [
        {
          title: "Canoe Expedition",
          type: "Relaxation",
          imageUrl:
            "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg",
          isRefundable: true,
          highlights: ["Bird Watching", "Local Life Experience"],
        },
      ],
      meals: ["All Meals on Houseboat"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/1484435/pexels-photo-1484435.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
      "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg",
    ],
    suggestedFlights: [
      {
        airline: "Vistara",
        departureTime: "08:30",
        arrivalTime: "10:00",
        stops: 0,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // 3. Majestic Rajasthan Forts & Palaces
  {
    id: "3",
    title: "Majestic Rajasthan Forts & Palaces",
    tagline: "A Royal Journey Through Time",
    shortDescription:
      "Explore the royal heritage of Rajasthan with visits to Jaipur, Udaipur, and Jodhpur.",
    longDescription:
      "Step into the era of kings and queens with our Majestic Rajasthan tour. Witness the grandeur of Amber Fort, the beauty of Lake Pichola in Udaipur, and the imposing Mehrangarh Fort in Jodhpur. This journey is a vibrant tapestry of history, culture, and Rajput hospitality.",
    slug: "majestic-rajasthan-forts-palaces",
    isPublished: true,
    departureCity: ["Delhi", "Mumbai", "Kolkata"],
    destination: {
      cityName: "Jaipur",
      stateName: "Rajasthan",
      countryName: "India",
    },
    themes: ["Heritage", "Royal", "Cultural", "Desert"],
    packageType: ["Group Tour", "Couple Tour"],
    price: { originalAmount: 55000, discountedAmount: 47999, currency: "INR" },
    duration: { days: 8, nights: 7 },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Check-in & Chokhi Dhani",
            description:
              "Arrive in the Pink City, check into your hotel. Evening visit to Chokhi Dhani for a cultural experience.",
          },
        ],
      },
      {
        day: 2,
        title: "Jaipur Sightseeing",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Amber Fort & City Palace",
            description:
              "Explore Amber Fort, Hawa Mahal, and the City Palace complex.",
          },
        ],
      },
      {
        day: 3,
        title: "Journey to Udaipur",
        events: [
          {
            timeOfDay: "Morning",
            title: "Travel to the City of Lakes",
            description: "Drive to Udaipur and check into your hotel.",
          },
          {
            timeOfDay: "Evening",
            title: "Boat Ride on Lake Pichola",
            description: "Enjoy a scenic boat ride during sunset.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "The Raj Palace",
          rating: "5",
          roomType: "Heritage Room",
          imageUrl:
            "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
          amenities: ["WiFi", "Pool", "Royal Decor"],
        },
      ],
      transfers: [
        {
          vehicleName: "SUV",
          type: "Inter-city & Sightseeing",
          imageUrl:
            "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg",
          features: ["AC", "Spacious"],
        },
      ],
      activities: [
        {
          title: "Elephant Ride at Amber Fort",
          type: "Cultural",
          imageUrl:
            "https://images.pexels.com/photos/1624600/pexels-photo-1624600.jpeg",
          isRefundable: false,
          highlights: ["Royal Experience", "Fort Views"],
        },
      ],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/356612/pexels-photo-356612.jpeg",
      "https://images.pexels.com/photos/2404044/pexels-photo-2404044.jpeg",
    ],
    suggestedFlights: [
      {
        airline: "SpiceJet",
        departureTime: "11:00",
        arrivalTime: "12:00",
        stops: 0,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // 4. Himalayan Adventure in Manali
  {
    id: "4",
    title: "Himalayan Adventure in Manali",
    tagline: "Conquer the Peaks",
    shortDescription:
      "An action-packed trip to Manali with trekking, paragliding, and stunning mountain views.",
    longDescription:
      "For the thrill-seeker in you, this Manali adventure offers an adrenaline rush amidst the mighty Himalayas. Trek through lush valleys, experience the thrill of paragliding in Solang Valley, and drive up the scenic Rohtang Pass. A perfect blend of adventure and natural beauty.",
    slug: "himalayan-adventure-manali",
    isPublished: true,
    departureCity: ["Delhi", "Chandigarh"],
    destination: {
      cityName: "Manali",
      stateName: "Himachal Pradesh",
      countryName: "India",
    },
    themes: ["Adventure", "Mountains", "Trekking", "Nature"],
    packageType: ["Group Tour", "Solo Tour"],
    price: { originalAmount: 28000, discountedAmount: 22500, currency: "INR" },
    duration: { days: 6, nights: 5 },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Hotel Check-in & Mall Road",
            description:
              "Arrive in Manali and explore the local market on Mall Road.",
          },
        ],
      },
      {
        day: 2,
        title: "Solang Valley Excursion",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Paragliding & Zorbing",
            description:
              "Enjoy a full day of adventure sports in the beautiful Solang Valley.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Himalayan Heights",
          rating: "4",
          roomType: "Mountain View Room",
          imageUrl:
            "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
          amenities: ["Heater", "WiFi", "Bonfire"],
        },
      ],
      transfers: [
        {
          vehicleName: "Volvo Bus",
          type: "Overnight from Delhi",
          imageUrl:
            "https://images.pexels.com/photos/3732669/pexels-photo-3732669.jpeg",
          features: ["Reclining Seats"],
        },
      ],
      activities: [
        {
          title: "Paragliding",
          type: "Adventure",
          imageUrl:
            "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg",
          isRefundable: false,
          highlights: ["Aerial View", "Adrenaline Rush"],
        },
      ],
      meals: ["Breakfast", "Dinner"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg",
      "https://images.pexels.com/photos/3934003/pexels-photo-3934003.jpeg",
    ],
    suggestedFlights: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // 5. Spiritual Journey to Varanasi
  {
    id: "5",
    title: "Spiritual Journey to Varanasi",
    tagline: "Ganges, Ghats & Divinity",
    shortDescription:
      "A soulful trip to the ancient city of Varanasi to witness the Ganga Aarti and explore its spiritual heart.",
    longDescription:
      "Embark on a spiritual quest in Varanasi, one of the world's oldest living cities. Participate in the mesmerizing evening Ganga Aarti, take a holy dip in the Ganges, and walk through the narrow lanes filled with history and devotion. This journey offers a profound sense of peace and connection.",
    slug: "spiritual-journey-varanasi",
    isPublished: true,
    departureCity: ["Kolkata", "Delhi", "Mumbai"],
    destination: {
      cityName: "Varanasi",
      stateName: "Uttar Pradesh",
      countryName: "India",
    },
    themes: ["Spiritual", "Cultural", "Heritage", "Religious"],
    packageType: ["Solo Tour", "Group Tour"],
    price: { originalAmount: 22000, discountedAmount: 17999, currency: "INR" },
    duration: { days: 4, nights: 3 },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Evening Aarti",
        events: [
          {
            timeOfDay: "Evening",
            title: "Ganga Aarti at Dashashwamedh Ghat",
            description:
              "Witness the grand evening prayer ceremony on the banks of the Ganges.",
          },
        ],
      },
      {
        day: 2,
        title: "Sunrise Boat Ride & Sarnath",
        events: [
          {
            timeOfDay: "Morning",
            title: "Boat ride on the Ganges",
            description:
              "Experience a serene boat ride at sunrise to see the ghats.",
          },
          {
            timeOfDay: "Afternoon",
            title: "Visit Sarnath",
            description:
              "Explore the place where Buddha gave his first sermon.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Ganges View Hotel",
          rating: "4",
          roomType: "Standard Room",
          imageUrl:
            "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
          amenities: ["WiFi", "Vegetarian Restaurant"],
        },
      ],
      transfers: [
        {
          vehicleName: "Sedan",
          type: "Private",
          imageUrl:
            "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg",
          features: ["AC"],
        },
      ],
      activities: [
        {
          title: "Ganga Aarti Ceremony",
          type: "Spiritual",
          imageUrl:
            "https://images.pexels.com/photos/3889874/pexels-photo-3889874.jpeg",
          isRefundable: true,
          highlights: ["Devotional Music", "Spiritual Atmosphere"],
        },
      ],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/2088019/pexels-photo-2088019.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/3998144/pexels-photo-3998144.jpeg",
      "https://images.pexels.com/photos/791810/pexels-photo-791810.jpeg",
    ],
    suggestedFlights: [
      {
        airline: "IndiGo",
        departureTime: "14:00",
        arrivalTime: "15:30",
        stops: 0,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // 6. Ladakh Bike Expedition
  {
    id: "6",
    title: "Ladakh Bike Expedition",
    tagline: "Ride to the Roof of the World",
    shortDescription:
      "An epic motorcycle journey through Ladakh's high-altitude passes, serene lakes, and ancient monasteries.",
    longDescription:
      "This is not just a trip; it's an expedition. Ride your Royal Enfield through the challenging yet breathtaking landscapes of Ladakh. Conquer Khardung La, witness the stunning Pangong Tso, and find peace at Thiksey Monastery. This tour is for the brave and the adventurous.",
    slug: "ladakh-bike-expedition",
    isPublished: true,
    departureCity: ["Delhi", "Manali"],
    destination: { cityName: "Leh", stateName: "Ladakh", countryName: "India" },
    themes: ["Adventure", "Biking", "Mountains", "Spiritual"],
    packageType: ["Group Tour", "Solo Tour"],
    price: { originalAmount: 65000, discountedAmount: 59999, currency: "INR" },
    duration: { days: 10, nights: 9 },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh & Acclimatization",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Rest and Acclimatize",
            description:
              "Arrive in Leh and rest to acclimatize to the high altitude.",
          },
        ],
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Visit Shanti Stupa & Leh Palace",
            description:
              "Explore local landmarks and get used to riding in the terrain.",
          },
        ],
      },
      {
        day: 3,
        title: "Ride to Nubra Valley via Khardung La",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Conquer Khardung La",
            description:
              "Ride over the world's highest motorable pass to reach the beautiful Nubra Valley.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "The Grand Dragon Ladakh",
          rating: "4",
          roomType: "Deluxe Room",
          imageUrl:
            "https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg",
          amenities: ["Heated Rooms", "Oxygen Supply", "WiFi"],
        },
      ],
      transfers: [
        {
          vehicleName: "Royal Enfield Himalayan",
          type: "Self-ride Motorcycle",
          imageUrl:
            "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
          features: ["Backup Vehicle", "Mechanic Support"],
        },
      ],
      activities: [
        {
          title: "Bactrian Camel Ride",
          type: "Adventure",
          imageUrl:
            "https://images.pexels.com/photos/4353618/pexels-photo-4353618.jpeg",
          isRefundable: false,
          highlights: ["Double-humped Camels", "Sand Dunes"],
        },
      ],
      meals: ["Breakfast", "Dinner"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/1666012/pexels-photo-1666012.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/259501/pexels-photo-259501.jpeg",
      "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [
      {
        airline: "GoFirst",
        departureTime: "06:00",
        arrivalTime: "07:30",
        stops: 0,
      },
    ],
  },
  // 7. Andaman Island Hopping
  {
    id: "7",
    title: "Andaman Island Hopping",
    tagline: "Emerald Isles & Azure Waters",
    shortDescription:
      "Discover the pristine beauty of the Andaman Islands, from cellular jail history to stunning coral reefs.",
    longDescription:
      "Dive into a paradise of clear blue waters and white sandy beaches. This package takes you from the historical Cellular Jail in Port Blair to the world-famous Radhanagar Beach in Havelock and the natural rock bridge at Neil Island. Perfect for both relaxation and exploration.",
    slug: "andaman-island-hopping",
    isPublished: true,
    departureCity: ["Chennai", "Kolkata", "Bengaluru"],
    destination: {
      cityName: "Port Blair",
      stateName: "Andaman and Nicobar Islands",
      countryName: "India",
    },
    themes: ["Beach", "Honeymoon", "Adventure", "Scuba Diving"],
    packageType: ["Couple Tour", "Group Tour"],
    price: { originalAmount: 48000, discountedAmount: 41500, currency: "INR" },
    duration: { days: 7, nights: 6 },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Port Blair",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Visit Cellular Jail",
            description:
              "Arrive and visit the historic Cellular Jail, followed by the Light & Sound show.",
          },
        ],
      },
      {
        day: 2,
        title: "Havelock Island (Swaraj Dweep)",
        events: [
          {
            timeOfDay: "Morning",
            title: "Ferry to Havelock",
            description: "Take a high-speed ferry to Havelock Island.",
          },
          {
            timeOfDay: "Afternoon",
            title: "Radhanagar Beach",
            description:
              "Visit one of Asia's best beaches, Radhanagar Beach, for a spectacular sunset.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Sea Shell Havelock",
          rating: "4",
          roomType: "Lagoon Villa",
          imageUrl:
            "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg",
          amenities: ["WiFi", "Pool", "Beach Access"],
        },
      ],
      transfers: [
        {
          vehicleName: "Private Ferry",
          type: "Inter-island",
          imageUrl:
            "https://images.pexels.com/photos/163036/pexels-photo-163036.jpeg",
          features: ["AC Seating"],
        },
      ],
      activities: [
        {
          title: "Scuba Diving",
          type: "Adventure",
          imageUrl:
            "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg",
          isRefundable: false,
          highlights: ["Coral Reefs", "Marine Life", "PADI Certified"],
        },
      ],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg",
      "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg",
    ],
    suggestedFlights: [
      {
        airline: "Vistara",
        departureTime: "09:00",
        arrivalTime: "11:15",
        stops: 0,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // 8. Munnar Tea Gardens Retreat
  {
    id: "8",
    title: "Munnar Tea Gardens Retreat",
    tagline: "Verdant Hills & Aromatic Air",
    shortDescription:
      "A refreshing trip to the lush green tea plantations of Munnar, perfect for nature lovers.",
    longDescription:
      "Escape to the rolling hills of Munnar, carpeted with emerald-green tea plantations. This retreat is designed for ultimate relaxation. Walk through the tea gardens, visit the Tata Tea Museum, and enjoy the cool, misty weather. It's a perfect detox from city life.",
    slug: "munnar-tea-gardens-retreat",
    isPublished: false,
    departureCity: ["Kochi", "Coimbatore"],
    destination: {
      cityName: "Munnar",
      stateName: "Kerala",
      countryName: "India",
    },
    themes: ["Nature", "Relaxation", "Hills", "Honeymoon"],
    packageType: ["Couple Tour", "Group Tour"],
    price: { originalAmount: 25000, discountedAmount: 19999, currency: "INR" },
    duration: { days: 4, nights: 3 },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Munnar",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Check-in & Leisure",
            description:
              "Arrive in Munnar and check into your resort amidst the tea gardens.",
          },
        ],
      },
      {
        day: 2,
        title: "Exploring the Gardens",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Tea Museum & Eravikulam National Park",
            description:
              "Visit the Tata Tea Museum to learn about tea processing and explore Eravikulam National Park.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "The Fog Munnar",
          rating: "5",
          roomType: "Valley View Cottage",
          imageUrl:
            "https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg",
          amenities: ["Infinity Pool", "Spa", "Balcony"],
        },
      ],
      transfers: [
        {
          vehicleName: "Sedan",
          type: "Private",
          imageUrl:
            "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg",
          features: ["AC"],
        },
      ],
      activities: [
        {
          title: "Tea Garden Walk",
          type: "Relaxation",
          imageUrl:
            "https://images.pexels.com/photos/158607/cairns-fog-mist-mountain-158607.jpeg",
          isRefundable: true,
          highlights: ["Nature Photography", "Fresh Air"],
        },
      ],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg",
      "https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg",
    ],
    suggestedFlights: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // 9. Rishikesh Yoga & Rafting
  {
    id: "9",
    title: "Rishikesh Yoga & Rafting",
    tagline: "Peace and Adrenaline by the Ganges",
    shortDescription:
      "Find your balance with serene yoga sessions and thrilling river rafting in the adventure capital, Rishikesh.",
    longDescription:
      "This unique package combines the spiritual tranquility of yoga with the high-energy thrill of white-water rafting. Start your days with yoga and meditation by the Ganges, and in the afternoons, conquer the rapids. An experience that rejuvenates both mind and body.",
    slug: "rishikesh-yoga-rafting",
    isPublished: true,
    departureCity: ["Delhi"],
    destination: {
      cityName: "Rishikesh",
      stateName: "Uttarakhand",
      countryName: "India",
    },
    themes: ["Adventure", "Spiritual", "Yoga", "Wellness"],
    packageType: ["Solo Tour", "Group Tour"],
    price: { originalAmount: 18000, discountedAmount: 14500, currency: "INR" },
    duration: { days: 3, nights: 2 },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Evening Yoga",
        events: [
          {
            timeOfDay: "Evening",
            title: "Yoga & Meditation Session",
            description:
              "Check into your riverside camp and join an evening yoga session.",
          },
        ],
      },
      {
        day: 2,
        title: "River Rafting Adventure",
        events: [
          {
            timeOfDay: "Morning",
            title: "White Water Rafting",
            description: "Experience a thrilling 16 km river rafting stretch.",
          },
          {
            timeOfDay: "Evening",
            title: "Campfire & Music",
            description: "Relax by the campfire in the evening.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Riverside Camp",
          rating: "3",
          roomType: "Deluxe Tent",
          imageUrl:
            "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg",
          amenities: ["Attached Washroom", "Bonfire", "Buffet Meals"],
        },
      ],
      transfers: [],
      activities: [
        {
          title: "River Rafting",
          type: "Adventure",
          imageUrl:
            "https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg",
          isRefundable: false,
          highlights: ["Grade III Rapids", "Cliff Jumping"],
        },
      ],
      meals: ["All Meals at Camp"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/3822623/pexels-photo-3822623.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/3822276/pexels-photo-3822276.jpeg",
      "https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
  // 10. Golden Temple Getaway
  {
    id: "10",
    title: "Golden Temple Getaway",
    tagline: "Divinity, History & Flavour",
    shortDescription:
      "A short trip to Amritsar to visit the serene Golden Temple and the historic Jallianwala Bagh.",
    longDescription:
      "Experience the profound peace of the Golden Temple, the world's most revered Sikh shrine. This trip also takes you through the poignant history of Jallianwala Bagh and the patriotic fervor of the Wagah Border ceremony. A journey that touches the soul and explores the heart of Punjab.",
    slug: "golden-temple-getaway",
    isPublished: true,
    departureCity: ["Delhi", "Mumbai"],
    destination: {
      cityName: "Amritsar",
      stateName: "Punjab",
      countryName: "India",
    },
    themes: ["Spiritual", "Religious", "Cultural", "Historical"],
    packageType: ["Group Tour", "Solo Tour", "Couple Tour"],
    price: { originalAmount: 15000, discountedAmount: 11999, currency: "INR" },
    duration: { days: 3, nights: 2 },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Golden Temple Visit",
        events: [
          {
            timeOfDay: "Evening",
            title: "Visit the Golden Temple by Night",
            description:
              "Witness the stunning beauty of the illuminated Golden Temple.",
          },
        ],
      },
      {
        day: 2,
        title: "History & Patriotism",
        events: [
          {
            timeOfDay: "Morning",
            title: "Jallianwala Bagh",
            description: "Pay homage at the historic Jallianwala Bagh.",
          },
          {
            timeOfDay: "Evening",
            title: "Wagah Border Ceremony",
            description:
              "Witness the energetic Beating Retreat ceremony at the Wagah-Attari Border.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Hyatt Regency Amritsar",
          rating: "5",
          roomType: "Standard Room",
          imageUrl:
            "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg",
          amenities: ["WiFi", "Pool", "Gym"],
        },
      ],
      transfers: [
        {
          vehicleName: "Sedan",
          type: "Private",
          imageUrl:
            "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
          features: ["AC"],
        },
      ],
      activities: [
        {
          title: "Wagah Border Ceremony",
          type: "Cultural",
          imageUrl:
            "https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg",
          isRefundable: true,
          highlights: ["Patriotic Fervor", "Unique Ceremony"],
        },
      ],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/2187604/pexels-photo-2187604.jpeg",
      "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [
      {
        airline: "Air India",
        departureTime: "12:00",
        arrivalTime: "13:15",
        stops: 0,
      },
    ],
  },

  // 11. Wildlife Safari at Jim Corbett
  {
    id: "11",
    title: "Wildlife Safari at Jim Corbett",
    tagline: "Into the Tiger's Domain",
    shortDescription:
      "An exciting wildlife adventure in India's oldest national park, Jim Corbett, searching for the elusive Bengal tiger.",
    longDescription:
      "Embark on a thrilling journey into the wilds of Jim Corbett National Park. With multiple jeep safaris, you'll have ample opportunity to spot diverse wildlife, including tigers, elephants, and hundreds of bird species. Stay in a rustic jungle lodge for an authentic experience.",
    slug: "wildlife-safari-jim-corbett",
    isPublished: true,
    departureCity: ["Delhi", "Lucknow"],
    destination: {
      cityName: "Ramnagar",
      stateName: "Uttarakhand",
      countryName: "India",
    },
    themes: ["Wildlife", "Adventure", "Nature", "Safari"],
    packageType: ["Group Tour"],
    price: { originalAmount: 24000, discountedAmount: 19500, currency: "INR" },
    duration: { days: 4, nights: 3 },
    itinerary: [
      {
        day: 1,
        title: "Arrival at Ramnagar & Resort Check-in",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Leisure at the Jungle Lodge",
            description:
              "Arrive and check into your lodge. Spend the afternoon at leisure.",
          },
        ],
      },
      {
        day: 2,
        title: "Morning & Evening Safaris",
        events: [
          {
            timeOfDay: "Morning",
            title: "Jeep Safari in Bijrani Zone",
            description:
              "Venture into the park for your first chance to spot wildlife.",
          },
          {
            timeOfDay: "Evening",
            title: "Dhikala Zone Safari",
            description:
              "Explore another zone of the park for more wildlife sightings.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "The Riverview Retreat",
          rating: "4",
          roomType: "Jungle Cottage",
          imageUrl:
            "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg",
          amenities: ["Pool", "Nature Trails", "Restaurant"],
        },
      ],
      transfers: [
        {
          vehicleName: "Jeep",
          type: "Safari Vehicle",
          imageUrl:
            "https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg",
          features: ["Open-top", "4x4"],
        },
      ],
      activities: [
        {
          title: "Jeep Safari",
          type: "Wildlife",
          imageUrl:
            "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg",
          isRefundable: false,
          highlights: ["Tiger Spotting", "Bird Watching"],
        },
      ],
      meals: ["All Meals"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/259881/pexels-photo-259881.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/403567/pexels-photo-403567.jpeg",
      "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
  // 12. Darjeeling Toy Train & Tea
  {
    id: "12",
    title: "Darjeeling Toy Train & Tea",
    tagline: "Queen of the Hills",
    shortDescription:
      "Experience the charm of Darjeeling with a ride on the UNESCO World Heritage Toy Train and visits to lush tea estates.",
    longDescription:
      "Discover the colonial charm and breathtaking vistas of Darjeeling. The highlight is a ride on the historic Toy Train, offering stunning views of the Himalayas. Visit famous tea gardens, watch the sunrise over Kanchenjunga from Tiger Hill, and enjoy the pleasant climate.",
    slug: "darjeeling-toy-train-tea",
    isPublished: true,
    departureCity: ["Kolkata", "Bagdogra"],
    destination: {
      cityName: "Darjeeling",
      stateName: "West Bengal",
      countryName: "India",
    },
    themes: ["Hills", "Nature", "Heritage", "Relaxation"],
    packageType: ["Couple Tour", "Group Tour"],
    price: { originalAmount: 30000, discountedAmount: 25999, currency: "INR" },
    duration: { days: 5, nights: 4 },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Mall Road",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Explore Darjeeling Mall",
            description:
              "Arrive at NJP/Bagdogra and transfer to Darjeeling. Evening stroll on the Mall Road.",
          },
        ],
      },
      {
        day: 2,
        title: "Tiger Hill Sunrise & Toy Train",
        events: [
          {
            timeOfDay: "Morning",
            title: "Sunrise over Kanchenjunga",
            description:
              "Early morning trip to Tiger Hill for a spectacular sunrise.",
          },
          {
            timeOfDay: "Afternoon",
            title: "Himalayan Railway Ride",
            description:
              "Enjoy a memorable ride on the Darjeeling Himalayan Railway (Toy Train).",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Mayfair Darjeeling",
          rating: "5",
          roomType: "Heritage Room",
          imageUrl:
            "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg",
          amenities: ["Fireplace", "Library", "Spa"],
        },
      ],
      transfers: [
        {
          vehicleName: "Innova",
          type: "Private",
          imageUrl:
            "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg",
          features: ["AC", "Hill-expert Driver"],
        },
      ],
      activities: [
        {
          title: "Toy Train Ride",
          type: "Heritage",
          imageUrl:
            "https://images.pexels.com/photos/258385/pexels-photo-258385.jpeg",
          isRefundable: true,
          highlights: ["UNESCO Site", "Scenic Views"],
        },
      ],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/189857/pexels-photo-189857.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/1834398/pexels-photo-1834398.jpeg",
      "https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg",
    ],
    suggestedFlights: [
      {
        airline: "SpiceJet",
        departureTime: "10:00",
        arrivalTime: "11:00",
        stops: 0,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // 13. Hampi's Boulders & Ruins
  {
    id: "13",
    title: "Hampi's Boulders & Ruins",
    tagline: "Explore the Forgotten Empire",
    shortDescription:
      "Journey back in time to the glorious Vijayanagara Empire with a trip to the UNESCO World Heritage site of Hampi.",
    longDescription:
      "Hampi's otherworldly landscape of giant boulders and ancient ruins is a history lover's paradise. Explore stunning temples, royal enclosures, and the iconic Stone Chariot. Cross the Tungabhadra river to the 'hippie' side for a different, more relaxed vibe.",
    slug: "hampi-boulders-ruins",
    isPublished: true,
    departureCity: ["Bengaluru", "Hyderabad"],
    destination: {
      cityName: "Hampi",
      stateName: "Karnataka",
      countryName: "India",
    },
    themes: ["Heritage", "Historical", "Backpacking", "Cultural"],
    packageType: ["Solo Tour", "Group Tour", "Couple Tour"],
    price: { originalAmount: 19000, discountedAmount: 16500, currency: "INR" },
    duration: { days: 3, nights: 2 },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Hospet & Hampi Exploration",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Virupaksha Temple & Hemakuta Hill",
            description:
              "Arrive in Hospet, transfer to Hampi and visit the main temple. Enjoy sunset from Hemakuta Hill.",
          },
        ],
      },
      {
        day: 2,
        title: "Royal Centre & Vittala Temple",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Explore the Royal Enclosures",
            description:
              "Visit the Royal Centre, Queen's Bath, and the magnificent Vittala Temple with its Stone Chariot.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Evolve Back Hampi",
          rating: "5",
          roomType: "Palace Suite",
          imageUrl:
            "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
          amenities: ["Private Pool", "Spa", "Fine Dining"],
        },
      ],
      transfers: [
        {
          vehicleName: "Bus",
          type: "Overnight from Bengaluru",
          imageUrl:
            "https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg",
          features: ["AC Sleeper"],
        },
      ],
      activities: [
        {
          title: "Coracle Ride",
          type: "Relaxation",
          imageUrl:
            "https://images.pexels.com/photos/159844/cellular-automata-rule-30-rule-30-world-159844.jpeg",
          isRefundable: true,
          highlights: ["River Crossing", "Unique Boat"],
        },
      ],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
      "https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg",
    ],
    suggestedFlights: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // 14. Ooty & Kodaikanal Twin Hills
  {
    id: "14",
    title: "Ooty & Kodaikanal Twin Hills",
    tagline: "Romance of the Southern Hills",
    shortDescription:
      "A serene journey covering the two most popular hill stations of Tamil Nadu - Ooty and Kodaikanal.",
    longDescription:
      "Escape the heat with a tour of Ooty, the 'Queen of Hill Stations', and Kodaikanal, the 'Princess of Hill Stations'. Enjoy boating on picturesque lakes, stroll through botanical gardens, and admire the views from Dolphin's Nose. A perfect family or couple's retreat.",
    slug: "ooty-kodaikanal-twin-hills",
    isPublished: true,
    departureCity: ["Chennai", "Coimbatore", "Bengaluru"],
    destination: {
      cityName: "Ooty",
      stateName: "Tamil Nadu",
      countryName: "India",
    },
    themes: ["Hills", "Nature", "Honeymoon", "Family"],
    packageType: ["Group Tour", "Couple Tour"],
    price: { originalAmount: 32000, discountedAmount: 27500, currency: "INR" },
    duration: { days: 6, nights: 5 },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Coimbatore & Transfer to Ooty",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Check-in & Ooty Lake",
            description:
              "Arrive in Coimbatore, drive to Ooty, and enjoy an evening boat ride on Ooty Lake.",
          },
        ],
      },
      {
        day: 2,
        title: "Ooty Sightseeing",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Botanical Gardens & Doddabetta Peak",
            description:
              "Visit the famous Botanical Gardens and get a panoramic view from Doddabetta Peak.",
          },
        ],
      },
      {
        day: 3,
        title: "Travel to Kodaikanal",
        events: [
          {
            timeOfDay: "Morning",
            title: "Scenic Drive to Kodaikanal",
            description:
              "Enjoy a beautiful drive from Ooty to Kodaikanal and check into your hotel.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Sterling Ooty Fern Hill",
          rating: "4",
          roomType: "Classic Room",
          imageUrl:
            "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg",
          amenities: ["Restaurant", "Activity Center"],
        },
      ],
      transfers: [
        {
          vehicleName: "Sedan",
          type: "Private Inter-city",
          imageUrl:
            "https://images.pexels.com/photos/951233/pexels-photo-951233.jpeg",
          features: ["AC"],
        },
      ],
      activities: [
        {
          title: "Nilgiri Mountain Railway",
          type: "Heritage",
          imageUrl:
            "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg",
          isRefundable: false,
          highlights: ["UNESCO Site", "Steam Engine"],
        },
      ],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg",
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
  // 15. The Great Rann of Kutch
  {
    id: "15",
    title: "The Great Rann of Kutch",
    tagline: "White Desert & Vibrant Culture",
    shortDescription:
      "Experience the magic of the Rann Utsav in the vast white salt desert of Kutch, Gujarat.",
    longDescription:
      "Witness a surreal landscape under the full moon at the Rann of Kutch. This package coincides with the Rann Utsav, a carnival of music, dance, and crafts. Stay in a traditional tent city and immerse yourself in the vibrant culture of Gujarat.",
    slug: "great-rann-of-kutch",
    isPublished: true,
    departureCity: ["Mumbai", "Ahmedabad"],
    destination: {
      cityName: "Dhordo",
      stateName: "Gujarat",
      countryName: "India",
    },
    themes: ["Cultural", "Festival", "Desert", "Unique"],
    packageType: ["Couple Tour", "Group Tour"],
    price: { originalAmount: 26000, discountedAmount: 22999, currency: "INR" },
    duration: { days: 3, nights: 2 },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bhuj & Transfer to Tent City",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Check-in to Tent City",
            description:
              "Arrive in Bhuj and transfer to the Dhordo Tent City. Enjoy cultural programs in the evening.",
          },
        ],
      },
      {
        day: 2,
        title: "White Desert Experience",
        events: [
          {
            timeOfDay: "Morning",
            title: "Kalo Dungar Visit",
            description:
              "Visit Kalo Dungar (Black Hill) for a panoramic view of the Rann.",
          },
          {
            timeOfDay: "Evening",
            title: "Sunset at the White Rann",
            description:
              "Witness a breathtaking sunset over the white salt flats.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Rann Utsav Tent City",
          rating: "4",
          roomType: "Premium Tent",
          imageUrl:
            "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg",
          amenities: ["AC", "Cultural Activities"],
        },
      ],
      transfers: [
        {
          vehicleName: "AC Coach",
          type: "Shared Transfers from Bhuj",
          imageUrl:
            "https://images.pexels.com/photos/1367272/pexels-photo-1367272.jpeg",
          features: ["Comfortable"],
        },
      ],
      activities: [
        {
          title: "Rann Utsav",
          type: "Festival",
          imageUrl:
            "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
          isRefundable: true,
          highlights: ["Folk Music & Dance", "Handicrafts"],
        },
      ],
      meals: ["All Meals"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg",
      "https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [
      {
        airline: "IndiGo",
        departureTime: "07:00",
        arrivalTime: "08:30",
        stops: 0,
      },
    ],
  },

  // 16. Spiti Valley Winter Expedition
  {
    id: "16",
    title: "Spiti Valley Winter Expedition",
    tagline: "The White Wonderland",
    shortDescription:
      "A challenging winter expedition to Spiti Valley to witness its snow-covered landscapes and spot the elusive Snow Leopard.",
    longDescription:
      "For the ultimate adventurer, this winter trip to Spiti is a test of endurance and a feast for the eyes. Drive through snow-covered roads, visit ancient monasteries like Key and Tabo, and experience the stark, surreal beauty of the valley in winter. This is a journey for the seasoned traveler.",
    slug: "spiti-valley-winter-expedition",
    isPublished: true,
    departureCity: ["Delhi", "Shimla"],
    destination: {
      cityName: "Kaza",
      stateName: "Himachal Pradesh",
      countryName: "India",
    },
    themes: ["Adventure", "Mountains", "Winter", "Expedition"],
    packageType: ["Group Tour", "Solo Tour"],
    price: { originalAmount: 45000, discountedAmount: 39999, currency: "INR" },
    duration: { days: 9, nights: 8 },
    itinerary: [
      {
        day: 1,
        title: "Journey from Shimla to Narkanda",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Start the Expedition",
            description:
              "Begin the scenic and challenging drive from Shimla towards Spiti Valley.",
          },
        ],
      },
      {
        day: 2,
        title: "Drive to Kalpa",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Kinnaur Valley",
            description:
              "Travel through the beautiful Kinnaur valley, with views of the Kinnaur Kailash range.",
          },
        ],
      },
      {
        day: 3,
        title: "Enter Spiti Valley - Tabo",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Visit Tabo Monastery",
            description:
              "Enter the Spiti Valley and visit the ancient Tabo Monastery, a UNESCO heritage site.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Local Homestays",
          rating: "3",
          roomType: "Basic Heated Room",
          imageUrl:
            "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg",
          amenities: ["Heater", "Home-cooked meals"],
        },
      ],
      transfers: [
        {
          vehicleName: "4x4 SUV (Innova/Scorpio)",
          type: "Expedition Vehicle",
          imageUrl:
            "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
          features: ["4x4 Capability", "Experienced Driver"],
        },
      ],
      activities: [
        {
          title: "Snow Leopard Spotting",
          type: "Wildlife",
          imageUrl:
            "https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg",
          isRefundable: false,
          highlights: ["Rare Wildlife", "High-altitude trek"],
        },
      ],
      meals: ["Breakfast", "Dinner"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg",
      "https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
  {
    id: "31",
    title: "Ranthambore Tiger Safari",
    tagline: "In the Realm of the Royal Bengal",
    shortDescription:
      "A thrilling wildlife expedition to Ranthambore National Park, one of the best places in India to spot tigers.",
    longDescription:
      "Join us on an adventurous safari in Ranthambore, the former hunting grounds of the Maharajas of Jaipur. With its majestic fort overlooking the park, Ranthambore offers a unique blend of nature, wildlife, and history. Our expert guides will help you track tigers and other incredible fauna.",
    slug: "ranthambore-tiger-safari",
    isPublished: true,
    departureCity: ["Delhi", "Jaipur"],
    destination: {
      cityName: "Sawai Madhopur",
      stateName: "Rajasthan",
      countryName: "India",
    },
    themes: ["Wildlife", "Safari", "Adventure", "Nature"],
    packageType: ["Group Tour", "Couple Tour"],
    price: { originalAmount: 28000, discountedAmount: 23500, currency: "INR" },
    duration: { days: 4, nights: 3 },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Leisure",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Check into Wildlife Resort",
            description:
              "Arrive at Sawai Madhopur, check into your resort and relax.",
          },
        ],
      },
      {
        day: 2,
        title: "Jungle Safaris",
        events: [
          {
            timeOfDay: "Morning",
            title: "Morning Canter Safari",
            description:
              "Embark on an early morning safari to track tigers and other animals.",
          },
          {
            timeOfDay: "Evening",
            title: "Evening Jeep Safari",
            description:
              "Another safari in a different zone to maximize wildlife sighting opportunities.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "The Tigress Ranthambore",
          rating: "5",
          roomType: "Royal Villa",
          imageUrl:
            "https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg",
          amenities: ["Pool", "Spa", "Wildlife Library"],
        },
      ],
      transfers: [
        {
          vehicleName: "Gypsy/Canter",
          type: "Safari Vehicle",
          imageUrl:
            "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg",
          features: ["Open-top", "Guided"],
        },
      ],
      activities: [
        {
          title: "Ranthambore Fort Visit",
          type: "Historical",
          imageUrl:
            "https://images.pexels.com/photos/2363353/pexels-photo-2363353.jpeg",
          isRefundable: true,
          highlights: ["Panoramic Views", "UNESCO Site"],
        },
      ],
      meals: ["Breakfast", "Lunch", "Dinner"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/1485637/pexels-photo-1485637.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg",
      "https://images.pexels.com/photos/70746/tiger-wild-animal-dangerous-70746.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
  // 17. Meghalaya's Living Root Bridges
  {
    id: "17",
    title: "Meghalaya's Living Root Bridges",
    tagline: "Journey into the Abode of Clouds",
    shortDescription:
      "An offbeat adventure to Meghalaya to witness the man-made natural wonders of Living Root Bridges and stunning waterfalls.",
    longDescription:
      "Explore the magical landscapes of Meghalaya. Trek to the double-decker living root bridge in Cherrapunji, swim in the turquoise waters of Krang Suri waterfalls, and sail on the crystal-clear Umngot river in Dawki. This is a journey for the soul that loves nature in its purest form.",
    slug: "meghalaya-living-root-bridges",
    isPublished: true,
    departureCity: ["Guwahati", "Kolkata"],
    destination: {
      cityName: "Shillong",
      stateName: "Meghalaya",
      countryName: "India",
    },
    themes: ["Nature", "Adventure", "Trekking", "Offbeat"],
    packageType: ["Group Tour", "Solo Tour", "Couple Tour"],
    price: { originalAmount: 38000, discountedAmount: 33999, currency: "INR" },
    duration: { days: 7, nights: 6 },
    itinerary: [
      {
        day: 1,
        title: "Guwahati to Shillong",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Umiam Lake",
            description:
              "Arrive in Guwahati, drive to Shillong. Stop at the majestic Umiam Lake en route.",
          },
        ],
      },
      {
        day: 2,
        title: "Journey to Cherrapunji",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Waterfalls & Caves",
            description:
              "Visit Nohkalikai Falls, Seven Sisters Falls, and the Mawsmai Caves.",
          },
        ],
      },
      {
        day: 3,
        title: "Double Decker Root Bridge Trek",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Trek to Nongriat",
            description:
              "A challenging but rewarding trek down to the famous double-decker living root bridge.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Polo Orchid Resort, Cherrapunji",
          rating: "4",
          roomType: "Log Hut",
          imageUrl:
            "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg",
          amenities: ["Scenic Views", "Bonfire", "Restaurant"],
        },
      ],
      transfers: [
        {
          vehicleName: "SUV",
          type: "Private",
          imageUrl:
            "https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg",
          features: ["AC", "Local Driver"],
        },
      ],
      activities: [
        {
          title: "Boating in Dawki",
          type: "Nature",
          imageUrl:
            "https://images.pexels.com/photos/3727196/pexels-photo-3727196.jpeg",
          isRefundable: true,
          highlights: ["Crystal Clear Water", "Indo-Bangladesh Border"],
        },
      ],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/286951/pexels-photo-286951.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg",
      "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [
      {
        airline: "IndiGo",
        departureTime: "08:00",
        arrivalTime: "09:00",
        stops: 0,
      },
    ],
  },
  // 18. Serene Sikkim & Gangtok
  {
    id: "18",
    title: "Serene Sikkim & Gangtok",
    tagline: "Himalayan Vistas & Monastic Peace",
    shortDescription:
      "A peaceful journey through Sikkim, visiting the vibrant capital Gangtok, the serene Tsomgo Lake, and historic monasteries.",
    longDescription:
      "Nestled in the Himalayas, Sikkim is a land of pristine beauty and spiritual calm. This tour covers the bustling markets of Gangtok, the breathtakingly beautiful Tsomgo Lake near the Nathu La Pass, and the revered Rumtek Monastery. It's an ideal escape for peace and nature lovers.",
    slug: "serene-sikkim-gangtok",
    isPublished: true,
    departureCity: ["Bagdogra", "Kolkata"],
    destination: {
      cityName: "Gangtok",
      stateName: "Sikkim",
      countryName: "India",
    },
    themes: ["Mountains", "Nature", "Spiritual", "Relaxation"],
    packageType: ["Couple Tour"],
    price: { originalAmount: 31000, discountedAmount: 26500, currency: "INR" },
    duration: { days: 5, nights: 4 },
    itinerary: [
      {
        day: 1,
        title: "Arrival and Transfer to Gangtok",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Scenic Drive to Capital",
            description:
              "Arrive at NJP/Bagdogra and enjoy a scenic transfer to Gangtok. Check-in and relax.",
          },
        ],
      },
      {
        day: 2,
        title: "Tsomgo Lake & Baba Mandir",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Excursion to Glacial Lake",
            description:
              "A day trip to the high-altitude Tsomgo Lake and the holy Baba Harbhajan Singh Mandir.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Mayfair Spa Resort & Casino",
          rating: "5",
          roomType: "Deluxe Forest View",
          imageUrl:
            "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
          amenities: ["Casino", "Spa", "Pool", "WiFi"],
        },
      ],
      transfers: [
        {
          vehicleName: "SUV (Innova/Xylo)",
          type: "Private",
          imageUrl:
            "https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg",
          features: ["Mountain Roads Expert Driver"],
        },
      ],
      activities: [
        {
          title: "Gangtok Ropeway",
          type: "Relaxation",
          imageUrl:
            "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg",
          isRefundable: true,
          highlights: ["City Views", "Thrilling Ride"],
        },
      ],
      meals: ["Breakfast", "Dinner"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg",
      "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
  // 19. Ajanta & Ellora Caves Discovery
  {
    id: "19",
    title: "Ajanta & Ellora Caves Discovery",
    tagline: "A Masterpiece Carved in Rock",
    shortDescription:
      "Explore the magnificent rock-cut caves of Ajanta and Ellora, a UNESCO World Heritage site showcasing ancient Indian art and architecture.",
    longDescription:
      "This historical tour takes you to the stunning caves near Aurangabad. Marvel at the intricate paintings of Ajanta, depicting tales from Jataka, and the monolithic rock-cut Kailasa Temple at Ellora, a testament to extraordinary craftsmanship. A truly awe-inspiring journey into the past.",
    slug: "ajanta-ellora-caves-discovery",
    isPublished: true,
    departureCity: ["Mumbai", "Pune"],
    destination: {
      cityName: "Aurangabad",
      stateName: "Maharashtra",
      countryName: "India",
    },
    themes: ["Historical", "Heritage", "Cultural", "Art"],
    packageType: ["Group Tour", "Solo Tour"],
    price: { originalAmount: 20000, discountedAmount: 17500, currency: "INR" },
    duration: { days: 3, nights: 2 },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Aurangabad",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Bibi Ka Maqbara",
            description:
              "Arrive in Aurangabad, check in, and visit the Bibi Ka Maqbara, also known as the 'Mini Taj'.",
          },
        ],
      },
      {
        day: 2,
        title: "Excursion to Ajanta Caves",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Ancient Buddhist Art",
            description:
              "A full-day trip to the Ajanta Caves to witness the beautiful frescoes and rock-cut sculptures. (Note: Ajanta is closed on Mondays).",
          },
        ],
      },
      {
        day: 3,
        title: "Ellora Caves & Departure",
        events: [
          {
            timeOfDay: "Morning",
            title: "Kailasa Temple",
            description:
              "Visit the Ellora Caves, focusing on the incredible Kailasa Temple, before departing.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Vivanta Aurangabad",
          rating: "5",
          roomType: "Superior Charm",
          imageUrl:
            "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
          amenities: ["Pool", "Restaurant", "Fitness Center"],
        },
      ],
      transfers: [
        {
          vehicleName: "Sedan",
          type: "Private AC Car",
          imageUrl:
            "https://images.pexels.com/photos/977080/pexels-photo-977080.jpeg",
          features: ["Comfortable", "Local Guide"],
        },
      ],
      activities: [],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg",
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [
      {
        airline: "IndiGo",
        departureTime: "12:00",
        arrivalTime: "13:00",
        stops: 0,
      },
    ],
  },
  // 20. Pondicherry's French Charm
  {
    id: "20",
    title: "Pondicherry's French Charm",
    tagline: "A Slice of France in India",
    shortDescription:
      "Stroll through the charming French Quarter of Pondicherry, relax at its serene beaches, and visit the spiritual Auroville.",
    longDescription:
      "Experience the unique blend of French colonial heritage and Indian culture in Pondicherry. Walk along the cobblestone streets of the White Town, admire the vibrant bougainvillea-laden villas, savor French cuisine, and find tranquility at the Matrimandir in Auroville.",
    slug: "pondicherry-french-charm",
    isPublished: true,
    departureCity: ["Chennai", "Bengaluru"],
    destination: {
      cityName: "Puducherry",
      stateName: "Puducherry",
      countryName: "India",
    },
    themes: ["Relaxation", "Cultural", "Beach", "Spiritual"],
    packageType: ["Couple Tour", "Solo Tour", "Group Tour"],
    price: { originalAmount: 21000, discountedAmount: 18500, currency: "INR" },
    duration: { days: 4, nights: 3 },
    itinerary: [
      {
        day: 1,
        title: "Arrival and French Quarter Walk",
        events: [
          {
            timeOfDay: "Evening",
            title: "Promenade Beach Walk",
            description:
              "Arrive from Chennai, check in, and enjoy a leisurely walk along the Promenade Beach and through the French Quarter.",
          },
        ],
      },
      {
        day: 2,
        title: "Auroville & Spiritual Quest",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Visit Auroville",
            description:
              "Spend the day exploring Auroville and visiting the Matrimandir viewing point.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Palais de Mahe",
          rating: "5",
          roomType: "Deluxe Room",
          imageUrl:
            "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg",
          amenities: ["Pool", "Rooftop Restaurant", "Colonial Architecture"],
        },
      ],
      transfers: [
        {
          vehicleName: "Sedan",
          type: "Private",
          imageUrl:
            "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg",
          features: ["AC"],
        },
      ],
      activities: [
        {
          title: "Cycle Tour of White Town",
          type: "Cultural",
          imageUrl:
            "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg",
          isRefundable: true,
          highlights: ["Heritage buildings", "Photography"],
        },
      ],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      "https://images.pexels.com/photos/2225499/pexels-photo-2225499.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
  // 21. Coorg Coffee Plantations
  {
    id: "21",
    title: "Coorg Coffee Plantations",
    tagline: "The Scotland of India",
    shortDescription:
      "A refreshing escape to the misty hills and aromatic coffee plantations of Coorg, Karnataka.",
    longDescription:
      "Rejuvenate your senses in the lush landscapes of Coorg. This trip includes stays within a coffee estate, guided plantation walks, visits to Abbey Falls and Raja's Seat, and a chance to experience the unique Kodava culture. It's the perfect getaway for nature and coffee lovers.",
    slug: "coorg-coffee-plantations",
    isPublished: true,
    departureCity: ["Bengaluru", "Mysuru"],
    destination: {
      cityName: "Madikeri",
      stateName: "Karnataka",
      countryName: "India",
    },
    themes: ["Nature", "Relaxation", "Hills", "Coffee"],
    packageType: ["Couple Tour", "Group Tour"],
    price: { originalAmount: 23000, discountedAmount: 19999, currency: "INR" },
    duration: { days: 3, nights: 2 },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Coorg",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Plantation Stay Check-in",
            description:
              "Drive from Bengaluru to Coorg, check into your estate resort and breathe in the fresh air.",
          },
        ],
      },
      {
        day: 2,
        title: "Coorg Sightseeing",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Abbey Falls, Raja's Seat & Dubare",
            description:
              "Visit the main sights of Coorg, including the Dubare Elephant Camp.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Evolve Back Coorg",
          rating: "5",
          roomType: "Lily Pool Villa",
          imageUrl:
            "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg",
          amenities: ["Private Pool", "Coffee Plantation Views", "Fine Dining"],
        },
      ],
      transfers: [
        {
          vehicleName: "SUV",
          type: "Private",
          imageUrl:
            "https://images.pexels.com/photos/10394781/pexels-photo-10394781.jpeg",
          features: ["AC", "Spacious"],
        },
      ],
      activities: [
        {
          title: "Coffee Plantation Tour",
          type: "Nature",
          imageUrl:
            "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg",
          isRefundable: true,
          highlights: ["Bean to Cup Process", "Coffee Tasting"],
        },
      ],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg",
      "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
  // 22. Mumbai City of Dreams Tour
  {
    id: "22",
    title: "Mumbai City of Dreams Tour",
    tagline: "Experience the Maximum City",
    shortDescription:
      "A whirlwind tour of Mumbai, covering everything from colonial architecture and Bollywood to vibrant street food.",
    longDescription:
      "Get a taste of the fast-paced life in Mumbai. This tour covers iconic landmarks like the Gateway of India, Marine Drive, and Dhobi Ghat. We also offer a glimpse into the world of Bollywood and a chance to savor the city's famous street food. Feel the pulse of the city that never sleeps.",
    slug: "mumbai-city-of-dreams-tour",
    isPublished: true,
    departureCity: ["Delhi", "Bengaluru", "Chennai"],
    destination: {
      cityName: "Mumbai",
      stateName: "Maharashtra",
      countryName: "India",
    },
    themes: ["City Break", "Cultural", "Food", "Bollywood"],
    packageType: ["Solo Tour", "Group Tour"],
    price: { originalAmount: 16000, discountedAmount: 13500, currency: "INR" },
    duration: { days: 3, nights: 2 },
    itinerary: [
      {
        day: 1,
        title: "South Mumbai Heritage Walk",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Gateway of India & Colaba",
            description:
              "Arrive in Mumbai, check in, and take a heritage walk around the iconic landmarks of South Mumbai.",
          },
        ],
      },
      {
        day: 2,
        title: "Mumbai's Diverse Cultures",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Dharavi & Bollywood Tour",
            description:
              "An insightful tour of Dharavi followed by a glimpse into the magic of Bollywood with a studio tour.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "The Taj Mahal Palace",
          rating: "5",
          roomType: "Luxury Grande Room",
          imageUrl:
            "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg",
          amenities: ["Sea View", "Pool", "Jiva Spa"],
        },
      ],
      transfers: [
        {
          vehicleName: "AC Cab",
          type: "Private",
          imageUrl:
            "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg",
          features: ["Local Driver"],
        },
      ],
      activities: [
        {
          title: "Street Food Tour",
          type: "Food",
          imageUrl:
            "https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg",
          isRefundable: false,
          highlights: ["Vada Pav", "Pav Bhaji", "Bhel Puri"],
        },
      ],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/3889987/pexels-photo-3889987.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg",
      "https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [
      {
        airline: "Vistara",
        departureTime: "10:00",
        arrivalTime: "12:00",
        stops: 0,
      },
    ],
  },
  // 23. Kaziranga Rhino Safari
  {
    id: "23",
    title: "Kaziranga Rhino Safari",
    tagline: "Land of the One-Horned Rhino",
    shortDescription:
      "A unique wildlife safari in Kaziranga National Park, Assam, home to two-thirds of the world's great one-horned rhinoceroses.",
    longDescription:
      "Journey to the grasslands of Assam for an unforgettable encounter with the Indian one-horned rhinoceros. Kaziranga is a conservation success story and a UNESCO World Heritage Site. Enjoy both elephant and jeep safaris to get close to the incredible wildlife.",
    slug: "kaziranga-rhino-safari",
    isPublished: true,
    departureCity: ["Guwahati", "Kolkata"],
    destination: {
      cityName: "Kaziranga",
      stateName: "Assam",
      countryName: "India",
    },
    themes: ["Wildlife", "Safari", "Nature", "Unique"],
    packageType: ["Group Tour"],
    price: { originalAmount: 33000, discountedAmount: 28500, currency: "INR" },
    duration: { days: 4, nights: 3 },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Guwahati and transfer to Kaziranga",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Check-in to Jungle Lodge",
            description:
              "Arrive in Guwahati and take a scenic drive to your lodge in Kaziranga.",
          },
        ],
      },
      {
        day: 2,
        title: "Elephant & Jeep Safaris",
        events: [
          {
            timeOfDay: "Morning",
            title: "Elephant Safari",
            description:
              "An early morning elephant-back safari for close-up views of rhinos.",
          },
          {
            timeOfDay: "Afternoon",
            title: "Jeep Safari in Western Range",
            description:
              "Explore the park's western range, known for its water bodies and birdlife.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "IORA - The Retreat",
          rating: "4",
          roomType: "Deluxe Room",
          imageUrl:
            "https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg",
          amenities: ["Pool", "Spa", "Restaurant"],
        },
      ],
      transfers: [
        {
          vehicleName: "Jeep/Elephant",
          type: "Safari",
          imageUrl:
            "https://images.pexels.com/photos/39571/gorilla-silverback-animal-silberr-cken-39571.jpeg",
          features: ["Guided"],
        },
      ],
      activities: [
        {
          title: "Tea Garden Visit",
          type: "Nature",
          imageUrl:
            "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
          isRefundable: true,
          highlights: ["Assam Tea", "Local Culture"],
        },
      ],
      meals: ["All Meals"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg",
      "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
  // 24. Auli Skiing Adventure
  {
    id: "24",
    title: "Auli Skiing Adventure",
    tagline: "Skiing on Himalayan Slopes",
    shortDescription:
      "An exhilarating skiing trip to Auli, Uttarakhand, known for its pristine slopes, clean environment, and panoramic Himalayan views.",
    longDescription:
      "Whether you're a beginner or a pro, Auli offers one of the best skiing experiences in India. This package includes skiing lessons, equipment rental, and breathtaking cable car rides. Enjoy the stunning views of Nanda Devi and other snow-capped peaks as you glide down the slopes.",
    slug: "auli-skiing-adventure",
    isPublished: true,
    departureCity: ["Delhi", "Dehradun"],
    destination: {
      cityName: "Auli",
      stateName: "Uttarakhand",
      countryName: "India",
    },
    themes: ["Adventure", "Skiing", "Winter", "Mountains"],
    packageType: ["Group Tour", "Solo Tour"],
    price: { originalAmount: 35000, discountedAmount: 31000, currency: "INR" },
    duration: { days: 6, nights: 5 },
    itinerary: [
      {
        day: 1,
        title: "Delhi to Rishikesh",
        events: [
          {
            timeOfDay: "Full Day",
            title: "First leg of the journey",
            description: "Overnight journey or drive from Delhi to Rishikesh.",
          },
        ],
      },
      {
        day: 2,
        title: "Rishikesh to Joshimath",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Drive to Base Camp",
            description:
              "A long and scenic drive along the Ganga and Alaknanda rivers to Joshimath.",
          },
        ],
      },
      {
        day: 3,
        title: "Gondola Ride to Auli & Skiing",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Skiing Session 1",
            description:
              "Take the cable car to Auli. Check in and have your first skiing lesson on the bunny slopes.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Clifftop Club Auli",
          rating: "4",
          roomType: "Studio Room",
          imageUrl:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg",
          amenities: ["Heated Rooms", "Ski-in/Ski-out Access"],
        },
      ],
      transfers: [
        {
          vehicleName: "Tempo Traveller",
          type: "Group Transport",
          imageUrl:
            "https://images.pexels.com/photos/2449600/pexels-photo-2449600.jpeg",
          features: ["Comfortable for long journey"],
        },
      ],
      activities: [
        {
          title: "Skiing Lessons",
          type: "Adventure",
          imageUrl:
            "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg",
          isRefundable: false,
          highlights: ["Certified Instructor", "All Equipment Included"],
        },
      ],
      meals: ["Breakfast", "Dinner"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg",
      "https://images.pexels.com/photos/273935/pexels-photo-273935.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
  // 25. Tirupati Balaji Darshan
  {
    id: "25",
    title: "Tirupati Balaji Darshan",
    tagline: "A Divine Pilgrimage",
    shortDescription:
      "A spiritual package for a hassle-free darshan of Lord Venkateswara at Tirumala, one of the most visited holy places on Earth.",
    longDescription:
      "This pilgrimage tour is designed for your comfort and spiritual fulfillment. We arrange for your transport, accommodation, and the Special Entry Darshan tickets, allowing you to have a peaceful darshan without waiting in long queues. The package also includes visits to other important temples in the vicinity.",
    slug: "tirupati-balaji-darshan",
    isPublished: true,
    departureCity: ["Chennai", "Bengaluru", "Hyderabad"],
    destination: {
      cityName: "Tirupati",
      stateName: "Andhra Pradesh",
      countryName: "India",
    },
    themes: ["Spiritual", "Religious", "Pilgrimage"],
    packageType: ["Group Tour"],
    price: { originalAmount: 14000, discountedAmount: 11500, currency: "INR" },
    duration: { days: 2, nights: 1 },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tirupati & Local Temples",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Padmavathi Temple",
            description:
              "Arrive in Tirupati, check in, and visit the Sri Padmavathi Ammavari Temple.",
          },
        ],
      },
      {
        day: 2,
        title: "Tirumala Darshan & Departure",
        events: [
          {
            timeOfDay: "Morning",
            title: "Lord Venkateswara Darshan",
            description:
              "Early morning transfer to Tirumala for the Special Entry Darshan of Lord Balaji, followed by departure.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Marasa Sarovar Premiere",
          rating: "5",
          roomType: "Deluxe Room",
          imageUrl:
            "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg",
          amenities: ["Vegetarian Restaurant", "Pool", "WiFi"],
        },
      ],
      transfers: [
        {
          vehicleName: "AC Sedan",
          type: "Private",
          imageUrl:
            "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
          features: ["Comfortable"],
        },
      ],
      activities: [
        {
          title: "Special Entry Darshan",
          type: "Spiritual",
          imageUrl:
            "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
          isRefundable: false,
          highlights: ["Quick Darshan", "Laddu Prasadam Included"],
        },
      ],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
      "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
  // 26. Madurai & Rameshwaram Temple Tour
  {
    id: "26",
    title: "Madurai & Rameshwaram Temple Tour",
    tagline: "Journey Through Dravidian Grandeur",
    shortDescription:
      "A divine tour covering the architectural marvels of Meenakshi Amman Temple in Madurai and the sacred Ramanathaswamy Temple in Rameshwaram.",
    longDescription:
      "Explore the spiritual heart of Tamil Nadu with this temple tour. Witness the grandeur of the Meenakshi Temple in Madurai, a masterpiece of Dravidian architecture. Then, travel to the island of Rameshwaram to visit one of the twelve Jyotirlingas and take a holy dip at Agnitheertham.",
    slug: "madurai-rameshwaram-temple-tour",
    isPublished: true,
    departureCity: ["Chennai", "Madurai"],
    destination: {
      cityName: "Madurai",
      stateName: "Tamil Nadu",
      countryName: "India",
    },
    themes: ["Religious", "Spiritual", "Heritage", "Cultural"],
    packageType: ["Group Tour"],
    price: { originalAmount: 22000, discountedAmount: 18999, currency: "INR" },
    duration: { days: 4, nights: 3 },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Madurai",
        events: [
          {
            timeOfDay: "Evening",
            title: "Meenakshi Amman Temple",
            description:
              "Arrive in Madurai, check in, and visit the magnificent Meenakshi Temple for the evening ceremony.",
          },
        ],
      },
      {
        day: 2,
        title: "Madurai to Rameshwaram",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Pamban Bridge & Arrival",
            description:
              "Drive to Rameshwaram, crossing the iconic Pamban Bridge.",
          },
        ],
      },
      {
        day: 3,
        title: "Rameshwaram Temple Darshan",
        events: [
          {
            timeOfDay: "Morning",
            title: "Ramanathaswamy Temple",
            description:
              "Take a holy dip and perform rituals at the Ramanathaswamy Temple, one of the Char Dhams.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Heritage Madurai",
          rating: "5",
          roomType: "Luxury Villa",
          imageUrl:
            "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
          amenities: ["Pool", "Historical Building", "Spa"],
        },
      ],
      transfers: [
        {
          vehicleName: "AC Innova",
          type: "Private",
          imageUrl:
            "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg",
          features: ["Comfortable"],
        },
      ],
      activities: [],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/3384693/pexels-photo-3384693.jpeg",
      "https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
  // 27. Sundarbans Mangrove Cruise
  {
    id: "27",
    title: "Sundarbans Mangrove Cruise",
    tagline: "Home of the Royal Bengal Tiger",
    shortDescription:
      "A unique boat cruise through the dense mangrove forests of the Sundarbans, a UNESCO World Heritage Site and a tiger reserve.",
    longDescription:
      "Embark on an adventurous cruise into the world's largest mangrove forest. Navigate through a labyrinth of rivers and creeks, keeping an eye out for the elusive Royal Bengal Tiger, crocodiles, and various bird species. This is a thrilling experience for wildlife enthusiasts and nature lovers.",
    slug: "sundarbans-mangrove-cruise",
    isPublished: true,
    departureCity: ["Kolkata"],
    destination: {
      cityName: "Sundarbans",
      stateName: "West Bengal",
      countryName: "India",
    },
    themes: ["Wildlife", "Nature", "Boating", "Adventure"],
    packageType: ["Group Tour"],
    price: { originalAmount: 18000, discountedAmount: 15500, currency: "INR" },
    duration: { days: 3, nights: 2 },
    itinerary: [
      {
        day: 1,
        title: "Kolkata to Sundarbans",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Board the River Cruise",
            description:
              "Drive from Kolkata to Godkhali, and board your boat. Cruise to your jungle resort.",
          },
        ],
      },
      {
        day: 2,
        title: "Full Day Mangrove Exploration",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Cruise and Watchtowers",
            description:
              "Spend the day cruising through narrow creeks and visiting watchtowers like Sajnekhali and Sudhanyakhali for wildlife spotting.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Sundarban Jungle Camp",
          rating: "3",
          roomType: "Eco Cottage",
          imageUrl:
            "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg",
          amenities: ["Eco-friendly", "Guided Walks"],
        },
      ],
      transfers: [
        {
          vehicleName: "Motorized River Boat",
          type: "Cruise",
          imageUrl:
            "https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg",
          features: ["Onboard Naturalist", "Safety Equipment"],
        },
      ],
      activities: [
        {
          title: "Village Walk",
          type: "Cultural",
          imageUrl:
            "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg",
          isRefundable: true,
          highlights: ["Local lifestyle", "Honey collection process"],
        },
      ],
      meals: ["All Meals"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/259646/pexels-photo-259646.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
      "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
  // 28. Golden Chariot Luxury Train
  {
    id: "28",
    title: "Golden Chariot Luxury Train",
    tagline: "A Palace on Wheels in South India",
    shortDescription:
      "An opulent journey across South India aboard the Golden Chariot, a luxury train offering unparalleled comfort and service.",
    longDescription:
      "Experience the charm of South India in the lap of luxury. The Golden Chariot train journey covers key destinations in Karnataka, Kerala, and Tamil Nadu. Enjoy gourmet meals, exquisite cabins, and guided off-train excursions, all while being treated like royalty.",
    slug: "golden-chariot-luxury-train",
    isPublished: true,
    departureCity: ["Bengaluru"],
    destination: {
      cityName: "Bengaluru",
      stateName: "Karnataka",
      countryName: "India",
    },
    themes: ["Luxury", "Royal", "Heritage", "Unique"],
    packageType: ["Couple Tour", "Group Tour"],
    price: {
      originalAmount: 450000,
      discountedAmount: 425000,
      currency: "INR",
    },
    duration: { days: 7, nights: 6 },
    itinerary: [
      {
        day: 1,
        title: "Boarding at Bengaluru",
        events: [
          {
            timeOfDay: "Evening",
            title: "Welcome Aboard",
            description:
              "Receive a royal welcome and board the Golden Chariot. The train departs in the evening.",
          },
        ],
      },
      {
        day: 2,
        title: "Mysore & Kabini",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Palace and Safari",
            description:
              "Visit the opulent Mysore Palace, followed by an evening jungle safari at Kabini.",
          },
        ],
      },
      {
        day: 3,
        title: "Halebidu & Chikmagalur",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Temples and Coffee",
            description:
              "Explore the ancient temples of Halebidu and Belur, followed by a visit to a coffee plantation in Chikmagalur.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "The Golden Chariot",
          rating: "5",
          roomType: "Deluxe Cabin",
          imageUrl:
            "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg",
          amenities: ["Butler Service", "En-suite Bathroom", "Bar & Lounge"],
        },
      ],
      transfers: [
        {
          vehicleName: "Luxury AC Coach",
          type: "Off-train Excursions",
          imageUrl:
            "https://images.pexels.com/photos/3732659/pexels-photo-3732659.jpeg",
          features: ["Guided"],
        },
      ],
      activities: [],
      meals: ["All International & Indian Cuisine"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/2832061/pexels-photo-2832061.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg",
      "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
  // 29. Mysore Dasara Festival
  {
    id: "29",
    title: "Mysore Dasara Festival",
    tagline: "Witness the Royal Spectacle",
    shortDescription:
      "A special tour to witness the world-famous Mysore Dasara, a 10-day festival culminating in a grand procession.",
    longDescription:
      "Immerse yourself in the grandeur of the Mysore Dasara, a tradition that is over 400 years old. See the illuminated Mysore Palace, watch cultural performances, and witness the spectacular Jumboo Savari (Elephant Procession) on Vijayadashami day. This is a cultural extravaganza like no other.",
    slug: "mysore-dasara-festival",
    isPublished: true,
    departureCity: ["Bengaluru", "Chennai"],
    destination: {
      cityName: "Mysuru",
      stateName: "Karnataka",
      countryName: "India",
    },
    themes: ["Festival", "Cultural", "Royal", "Heritage"],
    packageType: ["Group Tour", "Couple Tour"],
    price: { originalAmount: 29000, discountedAmount: 25500, currency: "INR" },
    duration: { days: 4, nights: 3 },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Mysore",
        events: [
          {
            timeOfDay: "Evening",
            title: "Illuminated Mysore Palace",
            description:
              "Arrive in Mysore and witness the palace lit up with thousands of bulbs.",
          },
        ],
      },
      {
        day: 2,
        title: "Cultural Exploration",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Chamundi Hills & Local Sights",
            description:
              "Visit Chamundi Hills, St. Philomena's Church, and explore the Dasara exhibition.",
          },
        ],
      },
      {
        day: 3,
        title: "The Grand Procession",
        events: [
          {
            timeOfDay: "Afternoon",
            title: "Jumboo Savari",
            description:
              "Get a prime spot to watch the grand procession featuring elephants, dance troupes, and tableaux.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Grand Mercure Mysore",
          rating: "5",
          roomType: "Deluxe Room",
          imageUrl:
            "https://images.pexels.com/photos/1879061/pexels-photo-1879061.jpeg",
          amenities: ["Rooftop Pool", "Restaurant", "Spa"],
        },
      ],
      transfers: [
        {
          vehicleName: "Sedan",
          type: "Private",
          imageUrl:
            "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg",
          features: ["AC"],
        },
      ],
      activities: [
        {
          title: "Reserved Seating for Procession",
          type: "Cultural",
          imageUrl:
            "https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg",
          isRefundable: false,
          highlights: ["Best Views", "Hassle-free"],
        },
      ],
      meals: ["Breakfast"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/161294/incense-sandalwood-incense-sticks-scented-161294.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/163185/old-retro-rv-163185.jpeg",
      "https://images.pexels.com/photos/326240/pexels-photo-326240.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
  // 30. Spiti Valley Winter Expedition
  {
    id: "30",
    title: "Spiti Valley Winter Expedition",
    tagline: "The White Wonderland",
    shortDescription:
      "A challenging winter expedition to Spiti Valley to witness its snow-covered landscapes and spot the elusive Snow Leopard.",
    longDescription:
      "For the ultimate adventurer, this winter trip to Spiti is a test of endurance and a feast for the eyes. Drive through snow-covered roads, visit ancient monasteries like Key and Tabo, and experience the stark, surreal beauty of the valley in winter. This is a journey for the seasoned traveler.",
    slug: "spiti-valley-winter-expedition",
    isPublished: true,
    departureCity: ["Delhi", "Shimla"],
    destination: {
      cityName: "Kaza",
      stateName: "Himachal Pradesh",
      countryName: "India",
    },
    themes: ["Adventure", "Mountains", "Winter", "Expedition"],
    packageType: ["Group Tour", "Solo Tour"],
    price: { originalAmount: 45000, discountedAmount: 39999, currency: "INR" },
    duration: { days: 9, nights: 8 },
    itinerary: [
      {
        day: 1,
        title: "Journey from Shimla to Narkanda",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Start the Expedition",
            description:
              "Begin the scenic and challenging drive from Shimla towards Spiti Valley.",
          },
        ],
      },
      {
        day: 2,
        title: "Drive to Kalpa",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Kinnaur Valley",
            description:
              "Travel through the beautiful Kinnaur valley, with views of the Kinnaur Kailash range.",
          },
        ],
      },
      {
        day: 3,
        title: "Enter Spiti Valley - Tabo",
        events: [
          {
            timeOfDay: "Full Day",
            title: "Visit Tabo Monastery",
            description:
              "Enter the Spiti Valley and visit the ancient Tabo Monastery, a UNESCO heritage site.",
          },
        ],
      },
    ],
    inclusions: {
      accommodation: [
        {
          hotelName: "Local Homestays",
          rating: "3",
          roomType: "Basic Heated Room",
          imageUrl:
            "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg",
          amenities: ["Heater", "Home-cooked meals"],
        },
      ],
      transfers: [
        {
          vehicleName: "4x4 SUV (Innova/Scorpio)",
          type: "Expedition Vehicle",
          imageUrl:
            "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
          features: ["4x4 Capability", "Experienced Driver"],
        },
      ],
      activities: [
        {
          title: "Snow Leopard Spotting",
          type: "Wildlife",
          imageUrl:
            "https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg",
          isRefundable: false,
          highlights: ["Rare Wildlife", "High-altitude trek"],
        },
      ],
      meals: ["Breakfast", "Dinner"],
    },
    mainImageUrl:
      "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg",
    galleryImages: [
      "https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg",
      "https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    suggestedFlights: [],
  },
];

export async function getFilteredPackages(
  filters: PackageFilters
): Promise<PackageSummary[]> {
  const filteredPackages = packageData.filter((pkg) => {
    if (!pkg.isPublished) return false;

    if (
      filters.stateName?.length &&
      !filters.stateName.includes(pkg.destination.stateName)
    ) {
      return false;
    }

    if (
      filters.cityName?.length &&
      !filters.cityName.includes(pkg.destination.cityName)
    ) {
      return false;
    }

    if (
      filters.countryName?.length &&
      !filters.countryName.includes(pkg.destination.countryName)
    ) {
      return false;
    }

    if (filters.minPrice && pkg.price.discountedAmount < filters.minPrice) {
      return false;
    }

    if (filters.maxPrice && pkg.price.discountedAmount > filters.maxPrice) {
      return false;
    }

    if (filters.themes?.length) {
      const hasMatchingTheme = filters.themes.some((theme) =>
        pkg.themes.includes(theme)
      );
      if (!hasMatchingTheme) return false;
    }

    if (filters.packageTypes?.length) {
      const hasMatchingType = filters.packageTypes.some((type) =>
        pkg.packageType.includes(type)
      );
      if (!hasMatchingType) return false;
    }

    if (filters.minDays && pkg.duration.days < filters.minDays) {
      return false;
    }

    if (filters.maxDays && pkg.duration.days > filters.maxDays) {
      return false;
    }

    if (filters.departureCity?.length) {
      const hasMatchingDeparture = filters.departureCity.some((city) =>
        pkg.departureCity.includes(city)
      );
      if (!hasMatchingDeparture) return false;
    }

    return true;
  });

  // Return summary data (lighter payload for listings)
  return filteredPackages.map((pkg) => ({
    id: pkg.id,
    title: pkg.title,
    tagline: pkg.tagline,
    shortDescription: pkg.shortDescription,
    slug: pkg.slug,
    destination: pkg.destination,
    themes: pkg.themes,
    packageType: pkg.packageType,
    price: pkg.price,
    duration: pkg.duration,
    mainImageUrl: pkg.mainImageUrl,
    inclusions: {
      meals: pkg.inclusions.meals,
    },
  }));
}

export async function getPackageBySlug(slug: string): Promise<Package | null> {
  const pkg = packageData.find((p) => p.slug === slug && p.isPublished);
  return pkg || null;
}

// Export the raw data for development
export { packageData };
