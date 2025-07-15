import { HomePageData } from "@/types";

export async function fetchHomePageCmsData(): Promise<HomePageData> {
  const data: HomePageData = {
    heroSectionData: {
      slides: [
        {
          title: "Incredible India 360°",
          description:
            "Experience the diverse beauty of India from every angle. Discover stunning landscapes, rich culture, and unforgettable adventures.",
          ctaText: "Explore India",
          ctaLink: "/destinations/india",
          videoUrl:
            "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/India-360-v2.mp4",
        },
        {
          title: "Adventure Awaits",
          description:
            "Embark on thrilling adventures across India's diverse terrains. From mountain peaks to river rapids, your next adventure starts here.",
          ctaText: "Book Adventure",
          ctaLink: "/destinations/adventure",
          videoUrl:
            "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/Adventure.mp4",
        },
        {
          title: "Nature's Paradise",
          description:
            "Immerse yourself in India's pristine natural beauty. From lush forests to serene lakes, discover untouched wilderness.",
          ctaText: "Discover Nature",
          ctaLink: "/destinations/nature",
          videoUrl:
            "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/Nature.mp4",
        },
      ],
    },
    popularDestinationsSectionData: {
      heading: "Popular Destinations",
      subheading:
        "Discover India's most loved travel destinations, handpicked for unforgettable experiences",
      data: {
        // Months
        january: {
          destinations: [
            {
              title: "Auli, Uttarakhand",
              subtitle: "Last Snow Adventures",
              image:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/auli",
            },
            {
              title: "Kashmir",
              subtitle: "Blooming In Colors",
              image:
                "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kashmir",
            },
            {
              title: "Wayanad, Kerala",
              subtitle: "Into The Wild & Waterfalls",
              image:
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/wayanad",
            },
            {
              title: "Coorg, Karnataka",
              subtitle: "Coffee Trails & Mist",
              image:
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/coorg",
            },
            {
              title: "Varanasi",
              subtitle: "Ganga Ghats & Spiritual Flow",
              image:
                "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/varanasi",
            },
          ],
          ctaCard: {
            title: "Winter Whispers",
            subtitle: "Snow-Clad Serenity, Festive Charm",
            lowertext: "Chill in the air, Warmth in the soul",
            url: "/destinations/winter",
          },
        },
        february: {
          destinations: [
            {
              title: "Goa",
              subtitle: "Perfect Beach Weather",
              image:
                "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/goa",
            },
            {
              title: "Andaman Islands",
              subtitle: "Pristine Blue Waters",
              image:
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/andaman",
            },
            {
              title: "Rishikesh",
              subtitle: "Adventure & Spirituality",
              image:
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/rishikesh",
            },
            {
              title: "Jaisalmer, Rajasthan",
              subtitle: "Desert Festival & Dunes",
              image:
                "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/jaisalmer",
            },
            {
              title: "Shillong",
              subtitle: "Scotland of the East",
              image:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/shillong",
            },
          ],
          ctaCard: {
            title: "Spring Beginnings",
            subtitle: "Pleasant Weather, Cultural Celebrations",
            lowertext: "Festivals & Fairytales across the land",
            url: "/destinations/spring",
          },
        },
        march: {
          destinations: [
            {
              title: "Darjeeling",
              subtitle: "Tea Gardens & Kanchenjunga Views",
              image:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/darjeeling",
            },
            {
              title: "Udaipur",
              subtitle: "City of Lakes",
              image:
                "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/udaipur",
            },
            {
              title: "Kaziranga National Park",
              subtitle: "One-Horned Rhinos",
              image:
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kaziranga",
            },
            {
              title: "Hampi",
              subtitle: "Ancient Ruins & Boulders",
              image:
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/hampi",
            },
            {
              title: "Mathura & Vrindavan",
              subtitle: "Holi Celebrations",
              image:
                "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/mathura",
            },
          ],
          ctaCard: {
            title: "Colorful Transitions",
            subtitle: "Spring Blooms, Festival Vibes",
            lowertext: "Awakening of colors across landscapes",
            url: "/destinations/spring-festivals",
          },
        },
        april: {
          destinations: [
            {
              title: "Gangtok, Sikkim",
              subtitle: "Rhododendron Blooms",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/gangtok",
            },
            {
              title: "Ooty",
              subtitle: "Queen of Hill Stations",
              image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/ooty",
            },
            {
              title: "Ranthambore",
              subtitle: "Tiger Sightings",
              image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/ranthambore",
            },
            {
              title: "Munnar",
              subtitle: "Tea Plantations & Cool Hills",
              image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/munnar",
            },
            {
              title: "Lansdowne",
              subtitle: "Peaceful Hill Station",
              image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/lansdowne",
            },
          ],
          ctaCard: {
            title: "Spring Splendor",
            subtitle: "Perfect Weather, Blooming Gardens",
            lowertext: "Nature's canvas in full display",
            url: "/destinations/spring-destinations",
          },
        },
        may: {
          destinations: [
            {
              title: "Ladakh",
              subtitle: "Roads Open, High Altitude Adventure",
              image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/ladakh",
            },
            {
              title: "Manali",
              subtitle: "Valley of Gods",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/manali",
            },
            {
              title: "Dharamshala",
              subtitle: "Little Lhasa",
              image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/dharamshala",
            },
            {
              title: "Kodaikanal",
              subtitle: "Princess of Hill Stations",
              image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kodaikanal",
            },
            {
              title: "Shimla",
              subtitle: "Queen of Hills",
              image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/shimla",
            },
          ],
          ctaCard: {
            title: "Summer Escapes",
            subtitle: "Cool Hills, Fresh Mountain Air",
            lowertext: "Beat the heat in nature's lap",
            url: "/destinations/summer-hills",
          },
        },
        june: {
          destinations: [
            {
              title: "Cherrapunji",
              subtitle: "Wettest Place on Earth",
              image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/cherrapunji",
            },
            {
              title: "Coorg",
              subtitle: "Coffee Plantations in Monsoon",
              image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/coorg",
            },
            {
              title: "Munnar",
              subtitle: "Misty Tea Gardens",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/munnar",
            },
            {
              title: "Wayanad",
              subtitle: "Monsoon Magic",
              image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/wayanad",
            },
            {
              title: "Shillong",
              subtitle: "Monsoon Capital",
              image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/shillong",
            },
          ],
          ctaCard: {
            title: "Monsoon Magic",
            subtitle: "Lush Greens, Dancing Clouds",
            lowertext: "Experience India's romantic monsoons",
            url: "/destinations/monsoon",
          },
        },
        july: {
          destinations: [
            {
              title: "Valley of Flowers",
              subtitle: "Himalayan Meadows in Bloom",
              image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/valley-of-flowers",
            },
            {
              title: "Spiti Valley",
              subtitle: "Cold Desert Beauty",
              image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/spiti",
            },
            {
              title: "Tawang",
              subtitle: "Monastery in the Clouds",
              image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/tawang",
            },
            {
              title: "Pahalgam",
              subtitle: "Valley of Shepherds",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/pahalgam",
            },
            {
              title: "Gulmarg",
              subtitle: "Meadow of Flowers",
              image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/gulmarg",
            },
          ],
          ctaCard: {
            title: "Monsoon Peaks",
            subtitle: "High Altitude Adventures, Blooming Valleys",
            lowertext: "Where clouds touch the earth",
            url: "/destinations/high-altitude",
          },
        },
        august: {
          destinations: [
            {
              title: "Kerala Backwaters",
              subtitle: "Monsoon Houseboats",
              image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kerala-backwaters",
            },
            {
              title: "Udaipur",
              subtitle: "Monsoon Palace",
              image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/udaipur",
            },
            {
              title: "Mount Abu",
              subtitle: "Hill Station in Desert",
              image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/mount-abu",
            },
            {
              title: "Panchgani",
              subtitle: "Table Land Views",
              image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/panchgani",
            },
            {
              title: "Lonavala",
              subtitle: "Monsoon Waterfalls",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/lonavala",
            },
          ],
          ctaCard: {
            title: "Monsoon Romance",
            subtitle: "Waterfalls, Lakes, Romantic Getaways",
            lowertext: "Love is in the monsoon air",
            url: "/destinations/monsoon-romance",
          },
        },
        september: {
          destinations: [
            {
              title: "Himachal Pradesh",
              subtitle: "Post-Monsoon Freshness",
              image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/himachal",
            },
            {
              title: "Uttarakhand",
              subtitle: "Clear Mountain Views",
              image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/uttarakhand",
            },
            {
              title: "Kerala",
              subtitle: "God's Own Country",
              image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kerala",
            },
            {
              title: "Karnataka",
              subtitle: "Garden State",
              image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/karnataka",
            },
            {
              title: "Sikkim",
              subtitle: "Organic State",
              image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/sikkim",
            },
          ],
          ctaCard: {
            title: "Post-Monsoon Glory",
            subtitle: "Fresh Air, Clear Skies, Perfect Weather",
            lowertext: "Nature rejuvenated and refreshed",
            url: "/destinations/post-monsoon",
          },
        },
        october: {
          destinations: [
            {
              title: "Rajasthan",
              subtitle: "Desert Festival Season",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/rajasthan",
            },
            {
              title: "Goa",
              subtitle: "Tourist Season Begins",
              image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/goa",
            },
            {
              title: "Kerala",
              subtitle: "Festival Celebrations",
              image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kerala",
            },
            {
              title: "Agra",
              subtitle: "Taj Mahal in Perfect Weather",
              image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/agra",
            },
            {
              title: "Delhi",
              subtitle: "Capital in Pleasant Weather",
              image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/delhi",
            },
          ],
          ctaCard: {
            title: "Festive Journeys",
            subtitle: "Cultural Celebrations, Divine Experiences",
            lowertext: "Experience India's vibrant traditions",
            url: "/destinations/festivals",
          },
        },
        november: {
          destinations: [
            {
              title: "Pushkar",
              subtitle: "Camel Fair",
              image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/pushkar",
            },
            {
              title: "Goa",
              subtitle: "Beach Season Begins",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/goa",
            },
            {
              title: "Kutch",
              subtitle: "White Rann Festival",
              image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kutch",
            },
            {
              title: "Varanasi",
              subtitle: "Dev Deepawali",
              image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/varanasi",
            },
            {
              title: "Hampi",
              subtitle: "Ancient Ruins",
              image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/hampi",
            },
          ],
          ctaCard: {
            title: "Winter Welcome",
            subtitle: "Deserts & Beaches, Cultural Fairs",
            lowertext: "Perfect weather for exploring India",
            url: "/destinations/winter-destinations",
          },
        },
        december: {
          destinations: [
            {
              title: "Goa",
              subtitle: "Christmas & New Year Celebrations",
              image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/goa",
            },
            {
              title: "Auli",
              subtitle: "Skiing Season",
              image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/auli",
            },
            {
              title: "Andaman Islands",
              subtitle: "Beach Paradise",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/andaman",
            },
            {
              title: "Kutch",
              subtitle: "Rann Utsav",
              image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kutch",
            },
            {
              title: "Dalhousie",
              subtitle: "Snowfall & Christmas",
              image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/dalhousie",
            },
          ],
          ctaCard: {
            title: "Year-End Wonders",
            subtitle: "Festive Celebrations, Snowy Retreats",
            lowertext: "Farewell the year in style",
            url: "/destinations/year-end",
          },
        },

        // Regions
        north: {
          destinations: [
            {
              title: "Shimla",
              subtitle: "Queen of Hills",
              image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/shimla",
            },
            {
              title: "Manali",
              subtitle: "Valley of Gods",
              image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/manali",
            },
            {
              title: "Rishikesh",
              subtitle: "Yoga Capital",
              image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/rishikesh",
            },
            {
              title: "Amritsar",
              subtitle: "Golden Temple",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/amritsar",
            },
            {
              title: "Dehradun",
              subtitle: "City of Valleys",
              image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/dehradun",
            },
          ],
          ctaCard: {
            title: "Northern Frontiers",
            subtitle: "Mountains, Spirituality, Heritage",
            lowertext: "Where the Himalayas embrace the plains",
            url: "/destinations/north-india",
          },
        },
        south: {
          destinations: [
            {
              title: "Kochi",
              subtitle: "Queen of Arabian Sea",
              image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kochi",
            },
            {
              title: "Ooty",
              subtitle: "Queen of Hill Stations",
              image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/ooty",
            },
            {
              title: "Pondicherry",
              subtitle: "French Riviera of the East",
              image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/pondicherry",
            },
            {
              title: "Munnar",
              subtitle: "Kashmir of South India",
              image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/munnar",
            },
            {
              title: "Kodaikanal",
              subtitle: "Princess of Hill Stations",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kodaikanal",
            },
          ],
          ctaCard: {
            title: "Southern Splendors",
            subtitle: "Beaches, Hills, Ancient Temples",
            lowertext: "Where traditions meet coastal beauty",
            url: "/destinations/south-india",
          },
        },
        east: {
          destinations: [
            {
              title: "Darjeeling",
              subtitle: "Queen of Hills",
              image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/darjeeling",
            },
            {
              title: "Gangtok",
              subtitle: "Land of Monasteries",
              image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/gangtok",
            },
            {
              title: "Kolkata",
              subtitle: "City of Joy",
              image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kolkata",
            },
            {
              title: "Sundarbans",
              subtitle: "Royal Bengal Tigers",
              image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/sundarbans",
            },
            {
              title: "Puri",
              subtitle: "Temple City",
              image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/puri",
            },
          ],
          ctaCard: {
            title: "Eastern Mysteries",
            subtitle: "Tea Gardens, Mangroves, Ancient Culture",
            lowertext: "Where the sun rises on Indian soil",
            url: "/destinations/east-india",
          },
        },
        west: {
          destinations: [
            {
              title: "Mumbai",
              subtitle: "City of Dreams",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/mumbai",
            },
            {
              title: "Goa",
              subtitle: "Beach Paradise",
              image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/goa",
            },
            {
              title: "Jaipur",
              subtitle: "Pink City",
              image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/jaipur",
            },
            {
              title: "Udaipur",
              subtitle: "City of Lakes",
              image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/udaipur",
            },
            {
              title: "Ahmedabad",
              subtitle: "Manchester of India",
              image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/ahmedabad",
            },
          ],
          ctaCard: {
            title: "Western Wonders",
            subtitle: "Deserts, Beaches, Royal Heritage",
            lowertext: "Where royal history meets modern dreams",
            url: "/destinations/west-india",
          },
        },
        northeast: {
          destinations: [
            {
              title: "Kaziranga",
              subtitle: "One-Horned Rhinos",
              image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kaziranga",
            },
            {
              title: "Tawang",
              subtitle: "Land of Monpas",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/tawang",
            },
            {
              title: "Cherrapunji",
              subtitle: "Land of Clouds",
              image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/cherrapunji",
            },
            {
              title: "Majuli",
              subtitle: "World's Largest River Island",
              image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/majuli",
            },
            {
              title: "Shillong",
              subtitle: "Scotland of the East",
              image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/shillong",
            },
          ],
          ctaCard: {
            title: "Northeastern Frontiers",
            subtitle: "Tribal Culture, Hidden Valleys, Living Bridges",
            lowertext: "The unexplored paradise of India",
            url: "/destinations/northeast-india",
          },
        },
        northwest: {
          destinations: [
            {
              title: "Ladakh",
              subtitle: "Land of High Passes",
              image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/ladakh",
            },
            {
              title: "Leh",
              subtitle: "Little Tibet",
              image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/leh",
            },
            {
              title: "Srinagar",
              subtitle: "Paradise on Earth",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/srinagar",
            },
            {
              title: "Jaisalmer",
              subtitle: "Golden City",
              image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/jaisalmer",
            },
            {
              title: "Amritsar",
              subtitle: "Golden Temple City",
              image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/amritsar",
            },
          ],
          ctaCard: {
            title: "Northwestern Frontiers",
            subtitle: "Mountains, Deserts, Spiritual Journeys",
            lowertext: "Where diversity meets serenity",
            url: "/destinations/northwest-india",
          },
        },
        southeast: {
          destinations: [
            {
              title: "Mahabalipuram",
              subtitle: "Shore Temple",
              image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/mahabalipuram",
            },
            {
              title: "Thanjavur",
              subtitle: "Rice Bowl of Tamil Nadu",
              image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/thanjavur",
            },
            {
              title: "Tirupati",
              subtitle: "Spiritual Center",
              image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/tirupati",
            },
            {
              title: "Visakhapatnam",
              subtitle: "City of Destiny",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/visakhapatnam",
            },
            {
              title: "Madurai",
              subtitle: "Temple City",
              image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/madurai",
            },
          ],
          ctaCard: {
            title: "Southeastern Treasures",
            subtitle: "Ancient Temples, Coastal Beauty, Rich Culture",
            lowertext: "Where history whispers in stone temples",
            url: "/destinations/southeast-india",
          },
        },
        southwest: {
          destinations: [
            {
              title: "Kochi",
              subtitle: "Queen of Arabian Sea",
              image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kochi",
            },
            {
              title: "Coorg",
              subtitle: "Scotland of India",
              image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/coorg",
            },
            {
              title: "Wayanad",
              subtitle: "Green Paradise",
              image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/wayanad",
            },
            {
              title: "Hampi",
              subtitle: "World Heritage Site",
              image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/hampi",
            },
            {
              title: "Gokarna",
              subtitle: "Mini Goa",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/gokarna",
            },
          ],
          ctaCard: {
            title: "Southwestern Gems",
            subtitle: "Backwaters, Beaches, Hill Stations",
            lowertext: "God's own country awaits your footsteps",
            url: "/destinations/southwest-india",
          },
        },
      },
    },
    visaAssistanceSectionData: {
      title: "Visa Made Easy",
      description:
        "Get hassle-free visa assistance for your international travel. Our expert team ensures smooth processing with complete documentation support.",
      ctaText: "Get Visa Assistance",
      ctaLink: "/visa-assistance",
    },
    popularPackagesSectionData: {
      heading: "Popular Packages",
      subheading:
        "Explore our most sought-after travel packages across India's diverse regions",
      data: [
        {
          region: "West India",
          heading: "Goa Beach Getaway",
          subheading: "Beaches and Nightlife",
          currency: "INR",
          originalPrice: 52097,
          discountedPrice: 38590,
          inclusions: ["Resort Stay", "Airport Transfers", "Breakfast"],
          image:
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop&auto=format",
          url: "/packages/goa-beach-getaway",
        },
        {
          region: "North India",
          heading: "Himalayan Adventure",
          subheading: "Mountains and Trekking",
          currency: "INR",
          originalPrice: 45000,
          discountedPrice: 34999,
          inclusions: ["Resort Stay", "Airport Transfers", "Breakfast"],
          image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format",
          url: "/packages/himalayan-adventure",
        },
        {
          region: "South India",
          heading: "Kerala Backwaters",
          subheading: "Houseboats and Nature",
          currency: "INR",
          originalPrice: 40000,
          discountedPrice: 29500,
          inclusions: ["Resort Stay", "Airport Transfers", "Breakfast"],
          image:
            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&auto=format",
          url: "/packages/kerala-backwaters",
        },
        {
          region: "East India",
          heading: "Darjeeling Tea Trails",
          subheading: "Tea Gardens and Hills",
          currency: "INR",
          originalPrice: 38000,
          discountedPrice: 27800,
          inclusions: ["Resort Stay", "Airport Transfers", "Breakfast"],
          image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=300&fit=crop&auto=format",
          url: "/packages/darjeeling-tea-trails",
        },
        {
          region: "North East India",
          heading: "Kanha Wildlife Safari",
          subheading: "Wildlife and Forests",
          currency: "INR",
          originalPrice: 42500,
          discountedPrice: 31200,
          inclusions: ["Resort Stay", "Airport Transfers", "Breakfast"],
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&auto=format",
          url: "/packages/kanha-wildlife-safari",
        },
        {
          region: "North East India",
          heading: "Meghalaya Living Roots",
          subheading: "Caves and Waterfalls",
          currency: "INR",
          originalPrice: 39000,
          discountedPrice: 28500,
          inclusions: ["Resort Stay", "Airport Transfers", "Breakfast"],
          image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&auto=format",
          url: "/packages/meghalaya-living-roots",
        },
        {
          region: "South East India",
          heading: "Andaman Island Escape",
          subheading: "Islands and Water Sports",
          currency: "INR",
          originalPrice: 55000,
          discountedPrice: 41900,
          inclusions: ["Resort Stay", "Airport Transfers", "Breakfast"],
          image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop&auto=format",
          url: "/packages/andaman-island-escape",
        },
      ],
    },
    travelByThemeSectionData: {
      heading: "Travel by Theme",
      subheading:
        "Choose your perfect travel experience based on your interests and preferences",
      themes: [
        "Honeymoon",
        "Adventure",
        "Beach",
        "Luxury",
        "Pilgrimage",
        "Solo Travel",
        "Resort",
      ],
      packages: [
        {
          title: "Romantic Goa Getaway",
          description:
            "Perfect honeymoon destination with pristine beaches, luxury resorts, and romantic sunset cruises along the Arabian Sea",
          image:
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop&auto=format",
          ctaText: "Book Honeymoon",
          ctaLink: "/packages/honeymoon/goa",
          theme: ["Honeymoon"],
        },
        {
          title: "Kashmir Honeymoon Paradise",
          description:
            "Experience heaven on earth with romantic houseboat stays, shikara rides, and snow-capped mountain views",
          image:
            "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop&auto=format",
          ctaText: "Plan Romance",
          ctaLink: "/packages/honeymoon/kashmir",
          theme: ["Honeymoon", "Luxury"],
        },
        {
          title: "Udaipur Royal Romance",
          description:
            "Stay in palace hotels, enjoy private boat rides on Lake Pichola, and witness royal sunsets in the City of Lakes",
          image:
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=300&fit=crop&auto=format",
          ctaText: "Royal Honeymoon",
          ctaLink: "/packages/honeymoon/udaipur",
          theme: ["Honeymoon", "Luxury"],
        },
        {
          title: "Himalayan Trekking Adventure",
          description:
            "Challenge yourself with breathtaking treks in the mighty Himalayas, from Valley of Flowers to Roopkund",
          image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop&auto=format",
          ctaText: "Start Adventure",
          ctaLink: "/packages/adventure/himalayas",
          theme: ["Adventure"],
        },
        {
          title: "Ladakh Motorcycle Expedition",
          description:
            "Ride through the world's highest motorable roads, experience Buddhist culture, and camp under starlit skies",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format",
          ctaText: "Book Expedition",
          ctaLink: "/packages/adventure/ladakh",
          theme: ["Adventure", "Solo Travel"],
        },
        {
          title: "Rishikesh River Rafting",
          description:
            "Experience thrilling white water rafting on the Ganges, bungee jumping, and spiritual yoga sessions",
          image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=300&fit=crop&auto=format",
          ctaText: "Adventure Time",
          ctaLink: "/packages/adventure/rishikesh",
          theme: ["Adventure", "Pilgrimage"],
        },
        {
          title: "Goa Beach Paradise",
          description:
            "Crystal clear waters, golden sand beaches, water sports, and vibrant nightlife in India's beach capital",
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&auto=format",
          ctaText: "Explore Beaches",
          ctaLink: "/packages/beach/goa",
          theme: ["Beach"],
        },
        {
          title: "Andaman Island Escape",
          description:
            "Pristine beaches, coral reefs, scuba diving, and the famous Radhanagar Beach in untouched paradise",
          image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&auto=format",
          ctaText: "Island Hopping",
          ctaLink: "/packages/beach/andaman",
          theme: ["Beach", "Adventure"],
        },
        {
          title: "Kerala Backwater Beaches",
          description:
            "Unique combination of backwater cruises, palm-fringed beaches, and ayurvedic spa treatments",
          image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop&auto=format",
          ctaText: "Beach & Backwaters",
          ctaLink: "/packages/beach/kerala",
          theme: ["Beach", "Resort"],
        },
        {
          title: "Rajasthan Royal Experience",
          description:
            "Stay in authentic palace hotels, enjoy royal treatments, desert safaris, and experience the grandeur of Rajputana heritage",
          image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop&auto=format",
          ctaText: "Book Luxury",
          ctaLink: "/packages/luxury/rajasthan",
          theme: ["Luxury"],
        },
        {
          title: "Kerala Luxury Houseboats",
          description:
            "Premium houseboat experiences with personal chefs, private decks, and luxury amenities in God's Own Country",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format",
          ctaText: "Luxury Cruise",
          ctaLink: "/packages/luxury/kerala",
          theme: ["Luxury", "Resort"],
        },
        {
          title: "Himachal Luxury Retreats",
          description:
            "5-star mountain resorts, helicopter transfers, private tours, and exclusive access to hidden Himalayan gems",
          image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=300&fit=crop&auto=format",
          ctaText: "Mountain Luxury",
          ctaLink: "/packages/luxury/himachal",
          theme: ["Luxury", "Resort"],
        },
        {
          title: "Varanasi Spiritual Journey",
          description:
            "Experience the spiritual heart of India with sacred ghats, ancient temples, Ganga aarti, and divine ceremonies",
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&auto=format",
          ctaText: "Begin Pilgrimage",
          ctaLink: "/packages/pilgrimage/varanasi",
          theme: ["Pilgrimage"],
        },
        {
          title: "Char Dham Yatra",
          description:
            "Complete the sacred journey to Kedarnath, Badrinath, Gangotri, and Yamunotri in the Himalayas",
          image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&auto=format",
          ctaText: "Sacred Journey",
          ctaLink: "/packages/pilgrimage/chardham",
          theme: ["Pilgrimage", "Adventure"],
        },
        {
          title: "Golden Triangle Temples",
          description:
            "Visit iconic temples in Delhi, Agra, and Jaipur, including Akshardham, Taj Mahal, and Govind Dev Ji Temple",
          image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop&auto=format",
          ctaText: "Temple Trail",
          ctaLink: "/packages/pilgrimage/golden-triangle",
          theme: ["Pilgrimage", "Luxury"],
        },
        {
          title: "Solo Northeast Discovery",
          description:
            "Discover India's hidden gems in the Northeast with solo-friendly accommodations, guided experiences, and tribal culture",
          image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop&auto=format",
          ctaText: "Solo Adventure",
          ctaLink: "/packages/solo/northeast",
          theme: ["Solo Travel"],
        },
        {
          title: "Solo Ladakh Expedition",
          description:
            "Self-discovery journey through Buddhist monasteries, high-altitude lakes, and peaceful mountain villages",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format",
          ctaText: "Solo Expedition",
          ctaLink: "/packages/solo/ladakh",
          theme: ["Solo Travel", "Adventure"],
        },
        {
          title: "Solo Kerala Backpacking",
          description:
            "Explore Kerala at your own pace with backpacker-friendly stays, local transportation, and cultural immersion",
          image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=300&fit=crop&auto=format",
          ctaText: "Solo Journey",
          ctaLink: "/packages/solo/kerala",
          theme: ["Solo Travel", "Beach"],
        },
        {
          title: "Kerala Resort Retreat",
          description:
            "Unwind in luxury resorts surrounded by lush greenery, spice plantations, and tranquil backwaters with world-class spa",
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&auto=format",
          ctaText: "Resort Booking",
          ctaLink: "/packages/resort/kerala",
          theme: ["Resort"],
        },
        {
          title: "Goa Beach Resorts",
          description:
            "5-star beachfront resorts with private beaches, infinity pools, water sports, and authentic Goan cuisine",
          image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&auto=format",
          ctaText: "Beach Resort",
          ctaLink: "/packages/resort/goa",
          theme: ["Resort", "Beach"],
        },
        {
          title: "Himachal Hill Resorts",
          description:
            "Mountain resorts with panoramic valley views, adventure activities, wellness spas, and local cultural programs",
          image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop&auto=format",
          ctaText: "Hill Resort",
          ctaLink: "/packages/resort/himachal",
          theme: ["Resort", "Adventure"],
        },
      ],
    },
  };

  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 100); // Reduced from 10 seconds to 100ms for development
  });
}
