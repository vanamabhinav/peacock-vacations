import { getFilteredPackagesFromDb } from "@/lib/services/packageService";
import { PackageListingPageData } from "@/types/packages/package";
import { extractFilterOptions } from "@/lib/utils/extractFilters";

const plpData: PackageListingPageData[] = [
  // 1. Telangana (State)
  {
    plpUrl: "/india/c",
    backgroundImage:
      "https://images.pexels.com/photos/11993433/pexels-photo-11993433.jpeg",
    bigHeading: "India Tour Packages",
    shortDescription:
      "Explore the heart of the Deccan with its rich history, grand monuments, and vibrant culture.",
    longDescription:
      "<p>From the bustling metropolis of Hyderabad to the ancient temples of Warangal, Telangana offers a unique blend of tradition and modernity. Discover the legacy of the Kakatiya and Nizami dynasties, savor world-famous cuisine, and explore the state's beautiful natural landscapes. Our packages cover the very best of this historic land.</p><ul><li>Hello</li><li>Hi</li></ul>",
    packageFilters: {
      countryName: ["India"],
      isPublished: true,
    },
  },
  {
    plpUrl: "/india/telangana-tour-packages/s",
    backgroundImage:
      "https://images.pexels.com/photos/11993433/pexels-photo-11993433.jpeg",
    bigHeading: "Telangana Tour Packages",
    shortDescription:
      "Explore the heart of the Deccan with its rich history, grand monuments, and vibrant culture.",
    longDescription:
      "<p>From the bustling metropolis of Hyderabad to the ancient temples of Warangal, Telangana offers a unique blend of tradition and modernity. Discover the legacy of the Kakatiya and Nizami dynasties, savor world-famous cuisine, and explore the state's beautiful natural landscapes. Our packages cover the very best of this historic land.</p><ul><li>Hello</li><li>Hi</li></ul>",
    packageFilters: {
      stateName: ["Telangana"],
      isPublished: true,
    },
  },

  // 2. Hyderabad (City)
  {
    plpUrl: "/india/telangana/hyderabad-tour-packages/ct",
    backgroundImage:
      "https://images.pexels.com/photos/1643914/pexels-photo-1643914.jpeg",
    bigHeading: "Hyderabad City Tour Packages",
    shortDescription:
      "Discover the City of Pearls, a place where Nizami grandeur meets the modern world of IT.",
    longDescription:
      "Hyderabad is a city of contrasts. Explore iconic landmarks like the Charminar and Golconda Fort, wander through the bustling lanes of the old city, and indulge in the legendary Hyderabadi Biryani. Our tours offer a deep dive into the city's culture, food, and history.",
    packageFilters: {
      cityName: ["Hyderabad"],
      isPublished: true,
    },
  },

  // 3. Kerala (State)
  {
    plpUrl: "/india/kerala-tour-packages/s",
    backgroundImage:
      "https://images.pexels.com/photos/1484435/pexels-photo-1484435.jpeg",
    bigHeading: "Kerala Tour Packages",
    shortDescription:
      "Experience 'God's Own Country' with tours through serene backwaters, lush tea gardens, and pristine beaches.",
    longDescription:
      "Let the serene beauty of Kerala enchant you. Whether you seek a romantic houseboat stay in Alleppey, a refreshing retreat in the tea plantations of Munnar, or a relaxing beach holiday in Kovalam, our Kerala packages offer something for every traveler. Immerse yourself in the unique culture and nature of this beautiful state.",
    packageFilters: {
      stateName: ["Kerala"],
      isPublished: true,
    },
  },

  // 4. Munnar (City)
  {
    plpUrl: "/india/munnar-tour-packages/ct",
    backgroundImage:
      "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
    bigHeading: "Munnar Tour Packages",
    shortDescription:
      "Escape to the rolling hills of Munnar, carpeted with emerald-green tea plantations and misty landscapes.",
    longDescription:
      "Breathe in the fresh, aromatic air of Munnar. This collection of tours focuses on the verdant beauty of Kerala's premier hill station. Walk through tea gardens, visit the Tata Tea Museum, and enjoy the cool weather. It's a perfect detox from city life and a haven for nature lovers.",
    packageFilters: {
      cityName: ["Munnar"],
      themes: ["Nature", "Hills", "Relaxation"],
      isPublished: true,
    },
  },

  // 5. Goa (State)
  {
    plpUrl: "/india/goa-tour-packages/ct",
    backgroundImage:
      "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg",
    bigHeading: "Goa Tour Packages",
    shortDescription:
      "Discover sun-kissed beaches, vibrant nightlife, and Portuguese heritage in India's party capital.",
    longDescription:
      "Whether you want to relax on the serene beaches of the South or party the night away in the bustling North, our Goa packages have you covered. Explore charming churches, indulge in delicious seafood, and soak up the unique susegad vibe of this coastal paradise.",
    packageFilters: {
      stateName: ["Goa"],
      isPublished: true,
    },
  },

  // 6. Rajasthan (State)
  {
    plpUrl: "/india/rajasthan-tour-packages/s",
    backgroundImage:
      "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg",
    bigHeading: "Rajasthan Tour Packages",
    shortDescription:
      "Experience the land of kings with tours covering majestic forts, opulent palaces, and vibrant desert culture.",
    longDescription:
      "Journey through the royal state of Rajasthan. Explore the Pink City of Jaipur, the City of Lakes Udaipur, and the Blue City of Jodhpur. Our packages are designed to give you a taste of Rajputana hospitality and a deep dive into the region's rich history and culture.",
    packageFilters: {
      stateName: ["Rajasthan"],
      themes: ["Heritage", "Royal", "Cultural", "Desert"],
      isPublished: true,
    },
  },

  // 7. Jaipur (City)
  {
    plpUrl: "/india/jaipur-tour-packages/ct",
    backgroundImage:
      "https://images.pexels.com/photos/356612/pexels-photo-356612.jpeg",
    bigHeading: "Jaipur Tour Packages",
    shortDescription:
      "Explore the Pink City, the vibrant capital of Rajasthan, with its stunning forts and bustling bazaars.",
    longDescription:
      "Discover the rich history of Jaipur, from the commanding heights of Amber Fort to the intricate facade of the Hawa Mahal. Our city tours cover all major landmarks, offer opportunities for local shopping, and provide a taste of authentic Rajasthani cuisine.",
    packageFilters: {
      cityName: ["Jaipur"],
      isPublished: true,
    },
  },

  // 8. Himachal Pradesh (State)
  {
    plpUrl: "/india/himachal-tour-packages/s",
    backgroundImage:
      "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg",
    bigHeading: "Himachal Pradesh Tour Packages",
    shortDescription:
      "Explore the pristine beauty of the Himalayas with trips to Shimla, Manali, Dharamshala, and more.",
    longDescription:
      "Nestled in the lap of the Himalayas, Himachal Pradesh is a paradise for nature lovers and adventure enthusiasts alike. From the colonial charm of Shimla to the adventurous valleys of Manali, our packages cover the best of this beautiful state.",
    packageFilters: {
      stateName: ["Himachal Pradesh"],
      isPublished: true,
    },
  },

  // 9. Uttarakhand (State)
  {
    plpUrl: "/india/uttarakhand-tour-packages/s",
    backgroundImage:
      "https://images.pexels.com/photos/3822623/pexels-photo-3822623.jpeg",
    bigHeading: "Uttarakhand Tour Packages",
    shortDescription:
      "Discover the 'Land of the Gods', from the spiritual banks of the Ganges to thrilling wildlife adventures.",
    longDescription:
      "Uttarakhand offers a dual experience of divinity and adventure. Find peace in the yoga capital of Rishikesh, witness the grand Ganga Aarti in Haridwar, or track tigers in Jim Corbett National Park. Our tours capture the essence of this spiritually rich and naturally beautiful state.",
    packageFilters: {
      stateName: ["Uttarakhand"],
      themes: ["Spiritual", "Adventure", "Nature", "Wildlife"],
      isPublished: true,
    },
  },

  // 10. Andaman & Nicobar Islands (UT)
  {
    plpUrl: "/india/andaman-tour-packages/ut",
    backgroundImage:
      "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg",
    bigHeading: "Andaman & Nicobar Tour Packages",
    shortDescription:
      "Escape to a paradise of emerald islands, azure waters, and pristine coral reefs.",
    longDescription:
      "Discover the breathtaking beauty of the Andaman Islands. From the historical Cellular Jail in Port Blair to the world-famous Radhanagar Beach in Havelock, our packages cover the best of this tropical haven. Ideal for honeymooners, families, and scuba diving enthusiasts.",
    packageFilters: {
      stateName: ["Andaman and Nicobar Islands"],
      isPublished: true,
    },
  },

  // 11. Karnataka (State)
  {
    plpUrl: "/india/karnataka-tour-packages/s",
    backgroundImage:
      "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg",
    bigHeading: "Karnataka Tour Packages",
    shortDescription:
      "Explore a state of diverse landscapes, from the ancient ruins of Hampi to the misty hills of Coorg.",
    longDescription:
      "Karnataka is a treasure trove of experiences. This collection features tours to the UNESCO World Heritage site of Hampi, the aromatic coffee plantations of Coorg, the royal city of Mysore, and the bustling tech hub of Bengaluru. Discover the rich heritage and natural beauty of Karnataka.",
    packageFilters: {
      stateName: ["Karnataka"],
      isPublished: true,
    },
  },

  // 12. Uttar Pradesh (State)
  {
    plpUrl: "/india/uttar-pradesh-tour-packages/s",
    backgroundImage:
      "https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg",
    bigHeading: "Uttar Pradesh Tour Packages",
    shortDescription:
      "Journey through the heartland of India, home to the iconic Taj Mahal and the sacred city of Varanasi.",
    longDescription:
      "Our Uttar Pradesh tours cover the state's most profound landmarks. Witness the timeless beauty of the Taj Mahal in Agra, experience the spiritual intensity of Varanasi's ghats, and explore the confluence of history and faith. These packages offer a deep dive into the cultural core of India.",
    packageFilters: {
      stateName: ["Uttar Pradesh"],
      themes: ["Heritage", "Spiritual", "Historical"],
      isPublished: true,
    },
  },

  // 13. North India (Region)
  {
    plpUrl: "/india/north-india-tour-packages/r",
    backgroundImage:
      "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    bigHeading: "North India Tour Packages",
    shortDescription: "Explore the majestic Himalayas and the rich cultural heritage of Northern India.",
    longDescription: "From the snow-capped peaks of Himachal and Kashmir to the spiritual banks of the Ganges in Uttarakhand, North India is a land of diverse landscapes and ancient traditions.",
    packageFilters: {
      region: ["North India"],
      isPublished: true,
    },
  },

  // 14. South India (Region)
  {
    plpUrl: "/india/south-india-tour-packages/r",
    backgroundImage:
      "https://images.pexels.com/photos/16166132/pexels-photo-16166132.jpeg",
    bigHeading: "South India Tour Packages",
    shortDescription: "Discover the tropical paradise, ancient temples, and serene backwaters of South India.",
    longDescription: "Experience the unique charm of the southern peninsula, where lush greenery meets historic architecture and coastal beauty.",
    packageFilters: {
      region: ["South India"],
      isPublished: true,
    },
  },

  // 15. West India (Region)
  {
    plpUrl: "/india/west-india-tour-packages/r",
    backgroundImage:
      "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg",
    bigHeading: "West India Tour Packages",
    shortDescription: "Explore the vibrant culture, sun-kissed beaches, and royal heritage of Western India.",
    longDescription: "From the deserts of Rajasthan to the beaches of Goa and the bustling energy of Mumbai, West India offers a kaleidoscope of experiences.",
    packageFilters: {
      region: ["West India"],
      isPublished: true,
    },
  },

  // 16. East India (Region)
  {
    plpUrl: "/india/east-india-tour-packages/r",
    backgroundImage:
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    bigHeading: "East India Tour Packages",
    shortDescription: "Discover the untouched beauty and cultural richness of Eastern India.",
    longDescription: "Experience the tea gardens of Darjeeling, the spiritual essence of Puri, and the natural wonders of the Sundarbans.",
    packageFilters: {
      region: ["East India"],
      isPublished: true,
    },
  },

  // 17. North East India (Region)
  {
    plpUrl: "/india/north-east-india-tour-packages/r",
    backgroundImage:
      "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg",
    bigHeading: "North East India Tour Packages",
    shortDescription: "Explore the 'Seven Sisters' and the hidden gems of North East India.",
    longDescription: "Discover the mist-covered hills, vibrant tribal cultures, and pristine wildlife sanctuaries of India's most mystical region.",
    packageFilters: {
      region: ["North East India"],
      isPublished: true,
    },
  },

  // 18. Rishikesh (District)
  {
    plpUrl: "/india/uttarakhand/rishikesh-tour-packages/d",
    backgroundImage:
      "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg",
    bigHeading: "Rishikesh Tour Packages",
    shortDescription: "Experience adventure and spirituality in the Yoga Capital of the World.",
    longDescription: "Located in the Dehradun district of Uttarakhand, Rishikesh offers a unique blend of white-water rafting, bungee jumping, and serene spiritual retreats along the Ganges.",
    packageFilters: {
      district: ["Dehradun"],
      cityName: ["Rishikesh"],
      isPublished: true,
    },
  },

  // 19. Mumbai (City)
  {
    plpUrl: "/india/maharashtra/mumbai-tour-packages/ct",
    backgroundImage:
      "https://images.pexels.com/photos/358443/pexels-photo-358443.jpeg",
    bigHeading: "Mumbai Tour Packages",
    shortDescription: "Discover the City of Dreams, where glamour meets history.",
    longDescription: "Explore the bustling streets of Mumbai, from the Gateway of India to the vibrant markets and coastal drives.",
    packageFilters: {
      cityName: ["Mumbai"],
      isPublished: true,
    },
  },
  // 20. Honeymoon (Theme)
  {
    plpUrl: "/india/honeymoon-tour-packages/t",
    backgroundImage:
      "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg",
    bigHeading: "Honeymoon Tour Packages",
    shortDescription: "Create unforgettable memories with our specially curated romantic getaways.",
    longDescription: "From the beaches of Goa to the snow-capped mountains of Kashmir, discover the perfect destination for your dream honeymoon.",
    packageFilters: {
      themes: ["Honeymoon"],
      isPublished: true,
    },
  },

  // 21. Adventure (Theme)
  {
    plpUrl: "/india/adventure-tour-packages/t",
    backgroundImage:
      "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    bigHeading: "Adventure Tour Packages",
    shortDescription: "Get your heart racing with our thrilling adventure tours across India.",
    longDescription: "Experience white-water rafting, mountain trekking, and jungle safaris designed for the ultimate adventure seeker.",
    packageFilters: {
      themes: ["Adventure"],
      isPublished: true,
    },
  },

  // 22. Nature (Theme)
  {
    plpUrl: "/india/nature-tour-packages/t",
    backgroundImage:
      "https://images.pexels.com/photos/16166132/pexels-photo-16166132.jpeg",
    bigHeading: "Nature Tour Packages",
    shortDescription: "Reconnect with nature in India's most pristine landscapes.",
    longDescription: "Explore lush forests, serene lakes, and breathtaking mountain views with our nature-focused tour packages.",
    packageFilters: {
      themes: ["Nature"],
      isPublished: true,
    },
  },

  // 23. Beach (Theme)
  {
    plpUrl: "/india/beach-tour-packages/t",
    backgroundImage:
      "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg",
    bigHeading: "Beach Tour Packages",
    shortDescription: "Sun, sand, and serenity on India's most beautiful coastlines.",
    longDescription: "From the vibrant beaches of Goa to the pristine shores of Andaman, find your perfect coastal escape.",
    packageFilters: {
      themes: ["Beach"],
      isPublished: true,
    },
  },

  // 24. Luxury (Theme)
  {
    plpUrl: "/india/luxury-tour-packages/t",
    backgroundImage:
      "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg",
    bigHeading: "Luxury Tour Packages",
    shortDescription: "Experience the ultimate in comfort, elegance, and premium service.",
    longDescription: "Indulge in royal palace stays, private tours, and 5-star experiences tailored for the discerning traveler.",
    packageFilters: {
      themes: ["Luxury"],
      isPublished: true,
    },
  },

  // 25. Pilgrimage (Theme)
  {
    plpUrl: "/india/pilgrimage-tour-packages/t",
    backgroundImage:
      "https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg",
    bigHeading: "Pilgrimage Tour Packages",
    shortDescription: "Embark on a spiritual journey to India's most sacred destinations.",
    longDescription: "Explore the ancient temples of Varanasi, the holy banks of the Ganges, and the divine energy of India's spiritual heartland.",
    packageFilters: {
      themes: ["Pilgrimage", "Spiritual"],
      isPublished: true,
    },
  },

  // 26. Solo Travel (Theme)
  {
    plpUrl: "/india/solo-travel-tour-packages/t",
    backgroundImage:
      "https://images.pexels.com/photos/14392872/pexels-photo-14392872.jpeg",
    bigHeading: "Solo Travel Tour Packages",
    shortDescription: "Discover self-growth and adventure with our curated solo traveler experiences.",
    longDescription: "Safe, engaging, and flexible tours designed specifically for those who love to explore the world on their own terms.",
    packageFilters: {
      themes: ["Solo Travel"],
      isPublished: true,
    },
  },

  // 27. Resort (Theme)
  {
    plpUrl: "/india/resort-tour-packages/t",
    backgroundImage:
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    bigHeading: "Resort Stay Tour Packages",
    shortDescription: "Relax and rejuvenate in India's finest luxury resorts.",
    longDescription: "From mountain retreats to beachfront stays, enjoy world-class amenities and unparalleled hospitality.",
    packageFilters: {
      themes: ["Resort"],
      isPublished: true,
    },
  },

  // --- CITIES & DESTINATIONS ---

  // 28. Auli (City)
  {
    plpUrl: "/india/uttarakhand/auli-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/14392872/pexels-photo-14392872.jpeg",
    bigHeading: "Auli Tour Packages",
    shortDescription: "Skiing and snowy adventures in the Garhwal Himalayas.",
    longDescription: "Auli is a premier ski destination in India, offering breathtaking views of Nanda Devi and thrill-filled winter sports.",
    packageFilters: {
      cityName: ["Auli"],
      isPublished: true,
    },
  },

  // 29. Kashmir (State/Region)
  {
    plpUrl: "/india/jammu-and-kashmir/kashmir-tour-packages/st",
    backgroundImage: "https://images.pexels.com/photos/10975803/pexels-photo-10975803.jpeg",
    bigHeading: "Kashmir Tour Packages",
    shortDescription: "Experience 'Heaven on Earth' with its serene lakes and snowy peaks.",
    longDescription: "Discover the beauty of Srinagar, Gulmarg, and Pahalgam. Enjoy shikara rides on Dal Lake and the magic of the valley.",
    packageFilters: {
      stateName: ["Jammu and Kashmir"],
      isPublished: true,
    },
  },

  // 30. Varanasi (City)
  {
    plpUrl: "/india/uttar-pradesh/varanasi-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg",
    bigHeading: "Varanasi Tour Packages",
    shortDescription: "The spiritual capital of India on the banks of the Ganges.",
    longDescription: "Witness the grand Ganga Aarti, explore ancient temples, and experience the timeless spiritual flow of Kashi.",
    packageFilters: {
      cityName: ["Varanasi"],
      isPublished: true,
    },
  },

  // 31. Shimla (City)
  {
    plpUrl: "/india/himachal-pradesh/shimla-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg",
    bigHeading: "Shimla Tour Packages",
    shortDescription: "The 'Queen of Hills' with its colonial charm and mountain views.",
    longDescription: "Explore the Mall Road, Jakhu Temple, and the scenic Ridge in the capital of Himachal Pradesh.",
    packageFilters: {
      cityName: ["Shimla"],
      isPublished: true,
    },
  },

  // 32. Manali (City)
  {
    plpUrl: "/india/himachal-pradesh/manali-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    bigHeading: "Manali Tour Packages",
    shortDescription: "Adventure and natural beauty in the heart of the Himalayas.",
    longDescription: "Visit Solang Valley, Rohtang Pass, and enjoy trekking, paragliding, and more in this popular hill station.",
    packageFilters: {
      cityName: ["Manali"],
      isPublished: true,
    },
  },

  // 33. Dehradun (City)
  {
    plpUrl: "/india/uttarakhand/dehradun-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/16166132/pexels-photo-16166132.jpeg",
    bigHeading: "Dehradun Tour Packages",
    shortDescription: "The capital of Uttarakhand, a gateway to the mountains.",
    longDescription: "Explore the Robber's Cave, Sahastradhara, and the scenic beauty of the Doon Valley.",
    packageFilters: {
      cityName: ["Dehradun"],
      isPublished: true,
    },
  },

  // 34. Rishikesh (City - Standardized Route)
  {
    plpUrl: "/india/uttarakhand/rishikesh-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg",
    bigHeading: "Rishikesh Tour Packages",
    shortDescription: "Spirituality and adventure combined in the Yoga Capital.",
    longDescription: "Experience the Ganga Aarti, river rafting, and meditation in the peaceful atmosphere of Rishikesh.",
    packageFilters: {
      cityName: ["Rishikesh"],
      isPublished: true,
    },
  },

  // 35. Munnar (City - Standardized Route)
  {
    plpUrl: "/india/kerala/munnar-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/16166132/pexels-photo-16166132.jpeg",
    bigHeading: "Munnar Tour Packages",
    shortDescription: "Verdant tea gardens and misty hills of Kerala.",
    longDescription: "Walk through emerald tea plantations, visit the Tea Museum, and enjoy the cool hills of Munnar.",
    packageFilters: {
      cityName: ["Munnar"],
      isPublished: true,
    },
  },

  // 36. Alleppey (City)
  {
    plpUrl: "/india/kerala/alleppey-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/1484435/pexels-photo-1484435.jpeg",
    bigHeading: "Alleppey Tour Packages",
    shortDescription: "The 'Venice of the East' with its beautiful backwaters.",
    longDescription: "Enjoy a houseboat stay, serene canal cruises, and the unique culture of Kerala's backwaters.",
    packageFilters: {
      cityName: ["Alleppey"],
      isPublished: true,
    },
  },

  // 37. Wayanad (City)
  {
    plpUrl: "/india/kerala/wayanad-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/16166132/pexels-photo-16166132.jpeg",
    bigHeading: "Wayanad Tour Packages",
    shortDescription: "Untouched nature and spice plantations in Kerala.",
    longDescription: "Explore the waterfalls, caves, and lush green forests of Wayanad.",
    packageFilters: {
      cityName: ["Wayanad"],
      isPublished: true,
    },
  },

  // 38. Coorg (City)
  {
    plpUrl: "/india/karnataka/coorg-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/982021/pexels-photo-982021.jpeg",
    bigHeading: "Coorg Tour Packages",
    shortDescription: "The 'Scotland of India' with its coffee trails and mist.",
    longDescription: "Breathe in the aroma of fresh coffee, visit Abbey Falls, and enjoy the highland beauty of Kodagu.",
    packageFilters: {
      cityName: ["Coorg"],
      isPublished: true,
    },
  },

  // 39. Jaipur (City)
  {
    plpUrl: "/india/rajasthan/jaipur-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg",
    bigHeading: "Jaipur Tour Packages",
    shortDescription: "The 'Pink City' of India, rich in royal heritage.",
    longDescription: "Explore the Amber Fort, Hawa Mahal, and the vibrant markets of Rajasthan's capital.",
    packageFilters: {
      cityName: ["Jaipur"],
      isPublished: true,
    },
  },

  // 40. Udaipur (City)
  {
    plpUrl: "/india/rajasthan/udaipur-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg",
    bigHeading: "Udaipur Tour Packages",
    shortDescription: "The 'City of Lakes' and romantic sunsets.",
    longDescription: "Enjoy boat rides on Lake Pichola, visit the City Palace, and experience the royal charm of Udaipur.",
    packageFilters: {
      cityName: ["Udaipur"],
      isPublished: true,
    },
  },

  // 41. Mumbai (City)
  {
    plpUrl: "/india/maharashtra/mumbai-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/358443/pexels-photo-358443.jpeg",
    bigHeading: "Mumbai Tour Packages",
    shortDescription: "The 'City of Dreams' and India's financial heart.",
    longDescription: "Visit the Gateway of India, Marine Drive, and experience the vibrant energy of Mumbai.",
    packageFilters: {
      cityName: ["Mumbai"],
      isPublished: true,
    },
  },

  // 42. Goa (City/State)
  {
    plpUrl: "/india/goa/goa-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg",
    bigHeading: "Goa Tour Packages",
    shortDescription: "Sun, sand, and the ultimate beach holiday destination.",
    longDescription: "Explore North and South Goa's beaches, historic churches, and vibrant local culture.",
    packageFilters: {
      cityName: ["Goa"],
      isPublished: true,
    },
  },

  // 43. Delhi (City)
  {
    plpUrl: "/india/delhi/delhi-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/1543419/pexels-photo-1543419.jpeg",
    bigHeading: "Delhi Tour Packages",
    shortDescription: "India's capital, where ancient history meets modern life.",
    longDescription: "Explore the Red Fort, Qutub Minar, and the bustling markets of Old Delhi.",
    packageFilters: {
      cityName: ["Delhi"],
      isPublished: true,
    },
  },

  // 44. Amritsar (City)
  {
    plpUrl: "/india/punjab/amritsar-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg",
    bigHeading: "Amritsar Tour Packages",
    shortDescription: "The holy city of Punjab, home to the Golden Temple.",
    longDescription: "Experience the divinity of the Golden Temple and the patriotic fervor of the Wagah Border.",
    packageFilters: {
      cityName: ["Amritsar"],
      isPublished: true,
    },
  },

  // 45. Darjeeling (City)
  {
    plpUrl: "/india/west-bengal/darjeeling-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/189857/pexels-photo-189857.jpeg",
    bigHeading: "Darjeeling Tour Packages",
    shortDescription: "The 'Queen of Hills' with its tea gardens and toy train.",
    longDescription: "Enjoy the Himalayan views, tea plantations, and the colonial charm of Darjeeling.",
    packageFilters: {
      cityName: ["Darjeeling"],
      isPublished: true,
    },
  },

  // 46. Hampi (City)
  {
    plpUrl: "/india/karnataka/hampi-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg",
    bigHeading: "Hampi Tour Packages",
    shortDescription: "The ruins of the Vijayanagara Empire, a UNESCO World Heritage site.",
    longDescription: "Explore the ancient temples, royal structures, and the unique landscape of Hampi.",
    packageFilters: {
      cityName: ["Hampi"],
      isPublished: true,
    },
  },

  // 47. Ooty (City)
  {
    plpUrl: "/india/tamil-nadu/ooty-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg",
    bigHeading: "Ooty Tour Packages",
    shortDescription: "The most popular hill station in South India.",
    longDescription: "Enjoy the botanical gardens, Ooty Lake, and the pleasant climate of the Nilgiris.",
    packageFilters: {
      cityName: ["Ooty"],
      isPublished: true,
    },
  },

  // 48. Kodaikanal (City)
  {
    plpUrl: "/india/tamil-nadu/kodaikanal-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    bigHeading: "Kodaikanal Tour Packages",
    shortDescription: "The 'Princess of Hill Stations' in Tamil Nadu.",
    longDescription: "Discover the Kodaikanal Lake, Pillar Rocks, and the serene beauty of the Palani Hills.",
    packageFilters: {
      cityName: ["Kodaikanal"],
      isPublished: true,
    },
  },

  // 49. Kutch (District/Region)
  {
    plpUrl: "/india/gujarat/kutch-tour-packages/d",
    backgroundImage: "https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg",
    bigHeading: "Kutch Tour Packages",
    shortDescription: "The white salt desert and vibrant cultural heritage of Gujarat.",
    longDescription: "Experience the Rann Utsav, traditional handicrafts, and the surreal landscapes of Kutch.",
    packageFilters: {
      district: ["Kutch"],
      isPublished: true,
    },
  },

  // 50. Spiti Valley (District/Region)
  {
    plpUrl: "/india/himachal-pradesh/spiti-valley-tour-packages/d",
    backgroundImage: "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg",
    bigHeading: "Spiti Valley Tour Packages",
    shortDescription: "Remote high-altitude adventure in a lunar-like landscape.",
    longDescription: "Explore ancient monasteries, high passes, and the stark beauty of the Spiti Valley.",
    packageFilters: {
      district: ["Lahaul and Spiti"],
      isPublished: true,
    },
  },

  // 51. Ladakh (State/Region)
  {
    plpUrl: "/india/ladakh/ladakh-tour-packages/st",
    backgroundImage: "https://images.pexels.com/photos/1666012/pexels-photo-1666012.jpeg",
    bigHeading: "Ladakh Tour Packages",
    shortDescription: "The 'Land of High Passes' with its unique culture and terrain.",
    longDescription: "Experience the beauty of Pangong Lake, Nubra Valley, and the spiritual aura of Leh's monasteries.",
    packageFilters: {
      stateName: ["Ladakh"],
      isPublished: true,
    },
  },

  // 52. Puri (City)
  {
    plpUrl: "/india/puri-tour-packages/ct",
    backgroundImage: "https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg",
    bigHeading: "Puri Tour Packages",
    shortDescription: "Spiritual retreats and seaside serenity in Odisha.",
    longDescription: "Visit the Jagannath Temple, relax on Puri Beach, and explore the heritage of Odisha.",
    packageFilters: {
      cityName: ["Puri"],
      isPublished: true,
    },
  },
];

import {
  getCityNameBySlug,
  getRegionNameBySlug,
  getStateNameBySlug,
} from "./destinationsData";

export async function getFilteredPlpByUrl(
  plpUrl: string
): Promise<PackageListingPageData | null> {
  if (plpUrl === '/search' || plpUrl === 'search') {
    const rawPackages = await getFilteredPackagesFromDb({ isPublished: true });
    return {
      plpUrl: '/search',
      backgroundImage: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg",
      bigHeading: "Search Results",
      shortDescription: "Discover incredible journeys that match your search.",
      longDescription: "<p>Browse through our collection of premium and immersive travel experiences to find exactly what you are looking for.</p>",
      packageFilters: { isPublished: true },
      packages: rawPackages as any,
      filterOptions: extractFilterOptions(rawPackages as any)
    };
  }

  let plpPageData = plpData.find((plp) => plp.plpUrl === plpUrl);

  if (!plpPageData) {
    // Attempt dynamic resolution
    const segments = plpUrl.split("/").filter(Boolean);

    // Expected formats: /region or /region/city
    if (segments.length === 1 || segments.length === 2) {
      const regionSlug = segments[0];
      const cityOrStateSlug = segments[1];

      const regionName = getRegionNameBySlug(regionSlug);

      if (regionName) {
        if (cityOrStateSlug) {
          const cityName = getCityNameBySlug(cityOrStateSlug);
          const stateName = getStateNameBySlug(cityOrStateSlug);

          if (cityName) {
            plpPageData = {
              plpUrl,
              bigHeading: `${cityName} Tour Packages`,
              shortDescription: `Explore the best travel packages in ${cityName}.`,
              longDescription: `<p>Discover the beauty and adventure that ${cityName} has to offer. Our curated packages bring you the best experiences in this amazing destination.</p>`,
              backgroundImage:
                "https://images.pexels.com/photos/358443/pexels-photo-358443.jpeg",
              packageFilters: {
                cityName: [cityName],
                isPublished: true,
              },
            };
          } else if (stateName) {
            plpPageData = {
              plpUrl,
              bigHeading: `${stateName} Tour Packages`,
              shortDescription: `Discover the wonders of ${stateName}.`,
              longDescription: `<p>From majestic landscapes to rich cultural heritage, ${stateName} is a must-visit destination for every traveler.</p>`,
              backgroundImage:
                "https://images.pexels.com/photos/1484435/pexels-photo-1484435.jpeg",
              packageFilters: {
                stateName: [stateName],
                isPublished: true,
              },
            };
          }
        } else {
          // Region only
          plpPageData = {
            plpUrl,
            bigHeading: `${regionName} Tour Packages`,
            shortDescription: `Explore the vibrant culture and landscapes of ${regionName}.`,
            longDescription: `<p>Experience the diversity of ${regionName}, where every corner tells a new story and every journey is an adventure.</p>`,
            backgroundImage:
              "https://images.pexels.com/photos/11993433/pexels-photo-11993433.jpeg",
            packageFilters: {
              region: [regionName],
              isPublished: true,
            },
          };
        }
      }
    }
  }

  if (!plpPageData) {
    console.warn(`PLP Data not found for URL: ${plpUrl}`);
    return null;
  }

  // Fetch packages for this PLP
  const packagesData = await getFilteredPackagesFromDb(plpPageData.packageFilters);
  plpPageData.packages = packagesData;
  plpPageData.filterOptions = extractFilterOptions(packagesData);

  return plpPageData;
}

// Clean exports
export type { PackageListingPageData };
