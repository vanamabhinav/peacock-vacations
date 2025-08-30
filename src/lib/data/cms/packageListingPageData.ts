import { getFilteredPackages } from "./packageData";
import { PackageListingPageData } from "@/types/pages/packageListing";

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
    plpUrl: "/india/varanasi-tour-packages/ct",
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
];

export async function getFilteredPlpByUrl(
  plpUrl: string
): Promise<PackageListingPageData> {
  const plpPageData = plpData.find((plp) => plp.plpUrl === plpUrl);

  if (!plpPageData) {
    throw new Error("PLP Data not found");
  }

  // Fetch packages for this PLP
  const packagesData = await getFilteredPackages(plpPageData.packageFilters);
  // Convert PackageSummary to Package for now (can optimize later)
  plpPageData.packages = packagesData;

  return plpPageData;
}

// Clean exports
export type { PackageListingPageData };
