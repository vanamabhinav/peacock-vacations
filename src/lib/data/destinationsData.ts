import { DestinationsData } from "@/types";

export async function fetchDestinationsData(): Promise<DestinationsData> {
  const popularDestinationsData: DestinationsData = {
    // Months
    january: {
      destinations: [
        {
          title: "Auli, Uttarakhand",
          subtitle: "Last Snow Adventures",
          image: "https://picsum.photos/id/1011/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Kashmir",
          subtitle: "Blooming In Colors",
          image: "https://picsum.photos/id/1012/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Wayanad, Kerala",
          subtitle: "Into The Wild & Waterfalls",
          image: "https://picsum.photos/id/1013/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Coorg, Karnataka",
          subtitle: "Coffee Trails & Mist",
          image: "https://picsum.photos/id/1014/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Varanasi",
          subtitle: "Ganga Ghats & Spiritual Flow",
          image: "https://picsum.photos/id/1015/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Winter Whispers",
        subtitle: "Snow-Clad Serenity, Festive Charm",
        lowertext: "Chill in the air, Warmth in the soul",
        url: "https://example.com/east-destinations",
      },
    },
    february: {
      destinations: [
        {
          title: "Goa",
          subtitle: "Perfect Beach Weather",
          image: "https://picsum.photos/id/1016/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Andaman Islands",
          subtitle: "Pristine Blue Waters",
          image: "https://picsum.photos/id/1017/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Rishikesh",
          subtitle: "Adventure & Spirituality",
          image: "https://picsum.photos/id/1018/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Jaisalmer, Rajasthan",
          subtitle: "Desert Festival & Dunes",
          image: "https://picsum.photos/id/1019/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Shillong",
          subtitle: "Scotland of the East",
          image: "https://picsum.photos/id/1020/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Spring Beginnings",
        subtitle: "Pleasant Weather, Cultural Celebrations",
        lowertext: "Festivals & Fairytales across the land",
        url: "https://example.com/east-destinations",
      },
    },
    march: {
      destinations: [
        {
          title: "Darjeeling",
          subtitle: "Tea Gardens & Kanchenjunga Views",
          image: "https://picsum.photos/id/1021/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Udaipur",
          subtitle: "City of Lakes",
          image: "https://picsum.photos/id/1022/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Kaziranga National Park",
          subtitle: "One-Horned Rhinos",
          image: "https://picsum.photos/id/1023/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Hampi",
          subtitle: "Ancient Ruins & Boulders",
          image: "https://picsum.photos/id/1024/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Mathura & Vrindavan",
          subtitle: "Holi Celebrations",
          image: "https://picsum.photos/id/1025/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Colorful Transitions",
        subtitle: "Spring Blooms, Festival Vibes",
        lowertext: "Awakening of colors across landscapes",
        url: "https://example.com/east-destinations",
      },
    },
    april: {
      destinations: [
        {
          title: "Gangtok, Sikkim",
          subtitle: "Rhododendron Blooms",
          image: "https://picsum.photos/id/1026/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Ooty",
          subtitle: "Queen of Hill Stations",
          image: "https://picsum.photos/id/1027/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Ranthambore",
          subtitle: "Tiger Sightings",
          image: "https://picsum.photos/id/1028/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Munnar",
          subtitle: "Tea Plantations & Cool Hills",
          image: "https://picsum.photos/id/1029/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Gokarna",
          subtitle: "Beaches & Tranquility",
          image: "https://picsum.photos/id/1030/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Spring Escapes",
        subtitle: "Nature Trails, Wildlife Encounters",
        lowertext: "Last chance before summer's embrace",
        url: "https://example.com/east-destinations",
      },
    },
    may: {
      destinations: [
        {
          title: "Manali",
          subtitle: "Mountain Retreats",
          image: "https://picsum.photos/id/1031/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Shimla",
          subtitle: "Colonial Charm",
          image: "https://picsum.photos/id/1032/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Nainital",
          subtitle: "Lake District of India",
          image: "https://picsum.photos/id/1033/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Mussoorie",
          subtitle: "Queen of Hills",
          image: "https://picsum.photos/id/1034/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Dharamshala",
          subtitle: "Little Lhasa",
          image: "https://picsum.photos/id/1035/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Summer Highlands",
        subtitle: "Hill Stations, Cool Retreats",
        lowertext: "Escape the heat in mountain paradise",
        url: "https://example.com/east-destinations",
      },
    },
    june: {
      destinations: [
        {
          title: "Ladakh",
          subtitle: "High Altitude Desert",
          image: "https://picsum.photos/id/1036/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Valley of Flowers",
          subtitle: "Himalayan Biodiversity",
          image: "https://picsum.photos/id/1037/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Spiti Valley",
          subtitle: "Cold Desert Mountain Valley",
          image: "https://picsum.photos/id/1038/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Coorg",
          subtitle: "Scotland of India",
          image: "https://picsum.photos/id/1039/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Leh",
          subtitle: "Moonland on Earth",
          image: "https://picsum.photos/id/1040/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Monsoon Prelude",
        subtitle: "Mountain Adventures, Valley Explorations",
        lowertext: "Journey to the top of the world",
        url: "https://example.com/east-destinations",
      },
    },
    july: {
      destinations: [
        {
          title: "Cherrapunji",
          subtitle: "Living Root Bridges",
          image: "https://picsum.photos/id/1041/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Kodaikanal",
          subtitle: "Princess of Hill Stations",
          image: "https://picsum.photos/id/1042/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Mount Abu",
          subtitle: "Oasis in the Desert",
          image: "https://picsum.photos/id/1043/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Valley of Flowers",
          subtitle: "Himalayan Meadows in Bloom",
          image: "https://picsum.photos/id/1044/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Lonavala",
          subtitle: "Monsoon Greenery",
          image: "https://picsum.photos/id/1045/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Monsoon Magic",
        subtitle: "Verdant Landscapes, Misty Mountains",
        lowertext: "Embrace the rains in nature's paradise",
        url: "https://example.com/east-destinations",
      },
    },
    august: {
      destinations: [
        {
          title: "Alleppey",
          subtitle: "Backwaters & Boat Races",
          image: "https://picsum.photos/id/1046/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Udaipur",
          subtitle: "Venice of the East",
          image: "https://picsum.photos/id/1047/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Ziro Valley",
          subtitle: "Rice Fields & Tribal Culture",
          image: "https://picsum.photos/id/1048/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Agumbe",
          subtitle: "Cherrapunji of South India",
          image: "https://picsum.photos/id/1049/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Malshej Ghat",
          subtitle: "Waterfall Paradise",
          image: "https://picsum.photos/id/1050/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Rain-Drenched Wonders",
        subtitle: "Lush Forests, Flowing Waterfalls",
        lowertext: "Monsoon glory at its peak",
        url: "https://example.com/east-destinations",
      },
    },
    september: {
      destinations: [
        {
          title: "Jaipur",
          subtitle: "Pink City",
          image: "https://picsum.photos/id/1051/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Pondicherry",
          subtitle: "French Colonial Heritage",
          image: "https://picsum.photos/id/1052/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Andaman Islands",
          subtitle: "Pristine Beaches",
          image: "https://picsum.photos/id/1053/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Leh-Ladakh",
          subtitle: "Last Chance Before Winter",
          image: "https://picsum.photos/id/1054/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Ziro, Arunachal Pradesh",
          subtitle: "Music Festival",
          image: "https://picsum.photos/id/1055/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Post-Monsoon Charm",
        subtitle: "Clear Skies, Green Landscapes",
        lowertext: "Perfect weather for explorers",
        url: "https://example.com/east-destinations",
      },
    },
    october: {
      destinations: [
        {
          title: "Kolkata",
          subtitle: "Durga Puja Celebrations",
          image: "https://picsum.photos/id/1056/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Varanasi",
          subtitle: "Dev Deepawali",
          image: "https://picsum.photos/id/1057/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Mysore",
          subtitle: "Dasara Celebrations",
          image: "https://picsum.photos/id/1058/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Rajasthan",
          subtitle: "Desert Festivals",
          image: "https://picsum.photos/id/1059/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Sundarbans",
          subtitle: "Mangrove Forests",
          image: "https://picsum.photos/id/1060/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Festive Journeys",
        subtitle: "Cultural Celebrations, Divine Experiences",
        lowertext: "Experience India's vibrant traditions",
        url: "https://example.com/east-destinations",
      },
    },
    november: {
      destinations: [
        {
          title: "Pushkar",
          subtitle: "Camel Fair",
          image: "https://picsum.photos/id/1061/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Goa",
          subtitle: "Beach Season Begins",
          image: "https://picsum.photos/id/1062/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Kutch",
          subtitle: "White Rann Festival",
          image: "https://picsum.photos/id/1063/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Varanasi",
          subtitle: "Dev Deepawali",
          image: "https://picsum.photos/id/1064/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Hampi",
          subtitle: "Ancient Ruins",
          image: "https://picsum.photos/id/1065/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Winter Welcome",
        subtitle: "Deserts & Beaches, Cultural Fairs",
        lowertext: "Perfect weather for exploring India",
        url: "https://example.com/east-destinations",
      },
    },
    december: {
      destinations: [
        {
          title: "Goa",
          subtitle: "Christmas & New Year Celebrations",
          image: "https://picsum.photos/id/1066/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Auli",
          subtitle: "Skiing Season",
          image: "https://picsum.photos/id/1067/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Andaman Islands",
          subtitle: "Beach Paradise",
          image: "https://picsum.photos/id/1068/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Kutch",
          subtitle: "Rann Utsav",
          image: "https://picsum.photos/id/1069/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Dalhousie",
          subtitle: "Snowfall & Christmas",
          image: "https://picsum.photos/id/1070/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Year-End Wonders",
        subtitle: "Festive Celebrations, Snowy Retreats",
        lowertext: "Farewell the year in style",
        url: "https://example.com/east-destinations",
      },
    },

    // Regions
    north: {
      destinations: [
        {
          title: "Shimla",
          subtitle: "Queen of Hills",
          image: "https://picsum.photos/id/1071/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Manali",
          subtitle: "Valley of Gods",
          image: "https://picsum.photos/id/1072/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Rishikesh",
          subtitle: "Yoga Capital",
          image: "https://picsum.photos/id/1073/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Amritsar",
          subtitle: "Golden Temple",
          image: "https://picsum.photos/id/1074/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Dehradun",
          subtitle: "City of Valleys",
          image: "https://picsum.photos/id/1075/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Northern Frontiers",
        subtitle: "Mountains, Spirituality, Heritage",
        lowertext: "Where the Himalayas embrace the plains",
        url: "https://example.com/east-destinations",
      },
    },
    south: {
      destinations: [
        {
          title: "Kochi",
          subtitle: "Queen of Arabian Sea",
          image: "https://picsum.photos/id/1076/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Ooty",
          subtitle: "Queen of Hill Stations",
          image: "https://picsum.photos/id/1077/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Pondicherry",
          subtitle: "French Riviera of the East",
          image: "https://picsum.photos/id/1078/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Munnar",
          subtitle: "Kashmir of South India",
          image: "https://picsum.photos/id/1079/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Kodaikanal",
          subtitle: "Princess of Hill Stations",
          image: "https://picsum.photos/id/1080/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Southern Splendors",
        subtitle: "Beaches, Hills, Ancient Temples",
        lowertext: "Where traditions meet coastal beauty",
        url: "https://example.com/east-destinations",
      },
    },
    east: {
      destinations: [
        {
          title: "Darjeeling",
          subtitle: "Queen of Hills",
          image: "https://picsum.photos/id/1081/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Gangtok",
          subtitle: "Land of Monasteries",
          image: "https://picsum.photos/id/1082/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Kolkata",
          subtitle: "City of Joy",
          image: "https://picsum.photos/id/1083/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Sundarbans",
          subtitle: "Royal Bengal Tigers",
          image: "https://picsum.photos/id/1084/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Puri",
          subtitle: "Temple City",
          image: "https://picsum.photos/id/1085/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Eastern Mysteries",
        subtitle: "Tea Gardens, Mangroves, Ancient Culture",
        lowertext: "Where the sun rises on Indian soil",
        url: "https://example.com/east-destinations",
      },
    },
    west: {
      destinations: [
        {
          title: "Mumbai",
          subtitle: "City of Dreams",
          image: "https://picsum.photos/id/1086/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Goa",
          subtitle: "Beach Paradise",
          image: "https://picsum.photos/id/1087/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Jaipur",
          subtitle: "Pink City",
          image: "https://picsum.photos/id/1088/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Udaipur",
          subtitle: "City of Lakes",
          image: "https://picsum.photos/id/1089/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Ahmedabad",
          subtitle: "Manchester of India",
          image: "https://picsum.photos/id/1090/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Western Wonders",
        subtitle: "Deserts, Beaches, Royal Heritage",
        lowertext: "Where royal history meets modern dreams",
        url: "https://example.com/east-destinations",
      },
    },
    northeast: {
      destinations: [
        {
          title: "Kaziranga",
          subtitle: "One-Horned Rhinos",
          image: "https://picsum.photos/id/1091/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Tawang",
          subtitle: "Land of Monpas",
          image: "https://picsum.photos/id/1092/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Cherrapunji",
          subtitle: "Land of Clouds",
          image: "https://picsum.photos/id/1093/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Majuli",
          subtitle: "World's Largest River Island",
          image: "https://picsum.photos/id/1094/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Shillong",
          subtitle: "Scotland of the East",
          image: "https://picsum.photos/id/1095/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Northeastern Frontiers",
        subtitle: "Tribal Culture, Hidden Valleys, Living Bridges",
        lowertext: "The unexplored paradise of India",
        url: "https://example.com/east-destinations",
      },
    },
    northwest: {
      destinations: [
        {
          title: "Ladakh",
          subtitle: "Land of High Passes",
          image: "https://picsum.photos/id/1096/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Leh",
          subtitle: "Little Tibet",
          image: "https://picsum.photos/id/1097/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Srinagar",
          subtitle: "Paradise on Earth",
          image: "https://picsum.photos/id/1098/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Jaisalmer",
          subtitle: "Golden City",
          image: "https://picsum.photos/id/1099/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Amritsar",
          subtitle: "Golden Temple City",
          image: "https://picsum.photos/id/1100/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Northwestern Frontiers",
        subtitle: "Mountains, Deserts, Spiritual Journeys",
        lowertext: "Where diversity meets serenity",
        url: "https://example.com/east-destinations",
      },
    },
    southeast: {
      destinations: [
        {
          title: "Mahabalipuram",
          subtitle: "Shore Temple",
          image: "https://picsum.photos/id/1101/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Thanjavur",
          subtitle: "Rice Bowl of Tamil Nadu",
          image: "https://picsum.photos/id/1102/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Tirupati",
          subtitle: "Spiritual Center",
          image: "https://picsum.photos/id/1103/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Visakhapatnam",
          subtitle: "City of Destiny",
          image: "https://picsum.photos/id/1104/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Madurai",
          subtitle: "Temple City",
          image: "https://picsum.photos/id/1105/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Southeastern Treasures",
        subtitle: "Ancient Temples, Coastal Beauty, Rich Culture",
        lowertext: "Where history whispers in stone temples",
        url: "https://example.com/east-destinations",
      },
    },
    southwest: {
      destinations: [
        {
          title: "Kochi",
          subtitle: "Queen of Arabian Sea",
          image: "https://picsum.photos/id/1106/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Coorg",
          subtitle: "Scotland of India",
          image: "https://picsum.photos/id/1107/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Wayanad",
          subtitle: "Green Paradise",
          image: "https://picsum.photos/id/1108/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Hampi",
          subtitle: "World Heritage Site",
          image: "https://picsum.photos/id/1109/300/200",
          url: "https://example.com/destination",
        },
        {
          title: "Gokarna",
          subtitle: "Mini Goa",
          image: "https://picsum.photos/id/1110/300/200",
          url: "https://example.com/destination",
        },
      ],
      ctaCard: {
        title: "Southwestern Gems",
        subtitle: "Backwaters, Beaches, Hill Stations",
        lowertext: "God's own country awaits your footsteps",
        url: "https://example.com/east-destinations",
      },
    },
  };

  return new Promise((resolve) => {
    resolve(popularDestinationsData);
  });
}
