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
      heading: "Popular Destinations in",
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
                "https://images.pexels.com/photos/14392872/pexels-photo-14392872.jpeg",
              url: "/destinations/auli",
            },
            {
              title: "Kashmir",
              subtitle: "Blooming In Colors",
              image:
                "https://images.pexels.com/photos/10975803/pexels-photo-10975803.jpeg",
              url: "/destinations/kashmir",
            },
            {
              title: "Wayanad, Kerala",
              subtitle: "Into The Wild & Waterfalls",
              image:
                "https://images.pexels.com/photos/16166132/pexels-photo-16166132.jpeg",
              url: "/destinations/wayanad",
            },
            {
              title: "Coorg, Karnataka",
              subtitle: "Coffee Trails & Mist",
              image:
                "https://images.pexels.com/photos/982021/pexels-photo-982021.jpeg",
              url: "/destinations/coorg",
            },
            {
              title: "Varanasi",
              subtitle: "Ganga Ghats & Spiritual Flow",
              image:
                "https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg",
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
                "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg", // Goa beach
              url: "/destinations/goa",
            },
            {
              title: "Andaman Islands",
              subtitle: "Pristine Blue Waters",
              image:
                "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Rajasthan desert
              url: "/destinations/andaman",
            },
            {
              title: "Rishikesh",
              subtitle: "Adventure & Spirituality",
              image:
                "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Kutch salt desert
              url: "/destinations/rishikesh",
            },
            {
              title: "Jaisalmer, Rajasthan",
              subtitle: "Desert Festival & Dunes",
              image:
                "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Pushkar fair
              url: "/destinations/jaisalmer",
            },
            {
              title: "Shillong",
              subtitle: "Scotland of the East",
              image:
                "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Jaisalmer fort
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
                "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg", // Darjeeling tea gardens
              url: "/destinations/darjeeling",
            },
            {
              title: "Udaipur",
              subtitle: "City of Lakes",
              image:
                "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Udaipur palace
              url: "/destinations/udaipur",
            },
            {
              title: "Kaziranga National Park",
              subtitle: "One-Horned Rhinos",
              image:
                "https://images.pexels.com/photos/164631/pexels-photo-164631.jpeg", // Kaziranga forest
              url: "/destinations/kaziranga",
            },
            {
              title: "Hampi",
              subtitle: "Ancient Ruins & Boulders",
              image:
                "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Hampi ruins
              url: "/destinations/hampi",
            },
            {
              title: "Mathura & Vrindavan",
              subtitle: "Holi Celebrations",
              image:
                "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg", // Mathura festival
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
              image:
                "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Gangtok monastery
              url: "/destinations/gangtok",
            },
            {
              title: "Ooty",
              subtitle: "Queen of Hill Stations",
              image:
                "https://images.pexels.com/photos/982021/pexels-photo-982021.jpeg", // Ooty hills
              url: "/destinations/ooty",
            },
            {
              title: "Ranthambore",
              subtitle: "Tiger Sightings",
              image:
                "https://images.pexels.com/photos/164631/pexels-photo-164631.jpeg", // Ranthambore forest
              url: "/destinations/ranthambore",
            },
            {
              title: "Munnar",
              subtitle: "Tea Plantations & Cool Hills",
              image:
                "https://images.pexels.com/photos/16166132/pexels-photo-16166132.jpeg", // Munnar tea gardens
              url: "/destinations/munnar",
            },
            {
              title: "Lansdowne",
              subtitle: "Peaceful Hill Station",
              image:
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Lansdowne hills
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
              image:
                "https://images.pexels.com/photos/14392872/pexels-photo-14392872.jpeg", // Ladakh
              url: "/destinations/ladakh",
            },
            {
              title: "Manali",
              subtitle: "Valley of Gods",
              image:
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Manali mountains
              url: "/destinations/manali",
            },
            {
              title: "Dharamshala",
              subtitle: "Little Lhasa",
              image:
                "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Dharamshala monastery
              url: "/destinations/dharamshala",
            },
            {
              title: "Kodaikanal",
              subtitle: "Princess of Hill Stations",
              image:
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Kodaikanal lake
              url: "/destinations/kodaikanal",
            },
            {
              title: "Shimla",
              subtitle: "Queen of Hills",
              image:
                "https://images.pexels.com/photos/14392872/pexels-photo-14392872.jpeg", // Shimla snow
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
              image:
                "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/cherrapunji",
            },
            {
              title: "Coorg",
              subtitle: "Coffee Plantations in Monsoon",
              image:
                "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/coorg",
            },
            {
              title: "Munnar",
              subtitle: "Misty Tea Gardens",
              image:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/munnar",
            },
            {
              title: "Wayanad",
              subtitle: "Monsoon Magic",
              image:
                "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/wayanad",
            },
            {
              title: "Shillong",
              subtitle: "Monsoon Capital",
              image:
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
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
              image:
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/valley-of-flowers",
            },
            {
              title: "Spiti Valley",
              subtitle: "Cold Desert Beauty",
              image:
                "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg", // Goa festive beach
              url: "/destinations/spiti",
            },
            {
              title: "Tawang",
              subtitle: "Monastery in the Clouds",
              image:
                "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg", // Puducherry festive beach
              url: "/destinations/tawang",
            },
            {
              title: "Pahalgam",
              subtitle: "Valley of Shepherds",
              image:
                "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg", // Kerala festive backwaters
              url: "/destinations/pahalgam",
            },
            {
              title: "Gulmarg",
              subtitle: "Meadow of Flowers",
              image:
                "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg", // Andaman festive beach
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
              image:
                "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg", // Kerala backwaters
              url: "/destinations/kerala-backwaters",
            },
            {
              title: "Udaipur",
              subtitle: "Monsoon Palace",
              image:
                "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg", // Andaman beach
              url: "/destinations/udaipur",
            },
            {
              title: "Mount Abu",
              subtitle: "Hill Station in Desert",
              image:
                "https://images.pexels.com/photos/14392872/pexels-photo-14392872.jpeg", // Kashmir valley
              url: "/destinations/mount-abu",
            },
            {
              title: "Panchgani",
              subtitle: "Table Land Views",
              image:
                "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Rishikesh river
              url: "/destinations/panchgani",
            },
            {
              title: "Lonavala",
              subtitle: "Monsoon Waterfalls",
              image:
                "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg", // Pondicherry beach
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
              image:
                "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/himachal",
            },
            {
              title: "Uttarakhand",
              subtitle: "Clear Mountain Views",
              image:
                "https://images.pexels.com/photos/14392872/pexels-photo-14392872.jpeg",
              url: "/destinations/uttarakhand",
            },
            {
              title: "Kerala",
              subtitle: "God's Own Country",
              image:
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kerala",
            },
            {
              title: "Karnataka",
              subtitle: "Garden State",
              image:
                "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/karnataka",
            },
            {
              title: "Sikkim",
              subtitle: "Organic State",
              image:
                "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
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
              image:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/rajasthan",
            },
            {
              title: "Goa",
              subtitle: "Tourist Season Begins",
              image:
                "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/goa",
            },
            {
              title: "Kerala",
              subtitle: "Festival Celebrations",
              image:
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kerala",
            },
            {
              title: "Agra",
              subtitle: "Taj Mahal in Perfect Weather",
              image:
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/agra",
            },
            {
              title: "Delhi",
              subtitle: "Capital in Pleasant Weather",
              image:
                "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
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
              image:
                "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/pushkar",
            },
            {
              title: "Goa",
              subtitle: "Beach Season Begins",
              image:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/goa",
            },
            {
              title: "Kutch",
              subtitle: "White Rann Festival",
              image:
                "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kutch",
            },
            {
              title: "Varanasi",
              subtitle: "Dev Deepawali",
              image:
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/varanasi",
            },
            {
              title: "Hampi",
              subtitle: "Ancient Ruins",
              image:
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
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
              image:
                "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/goa",
            },
            {
              title: "Auli",
              subtitle: "Skiing Season",
              image:
                "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/auli",
            },
            {
              title: "Andaman Islands",
              subtitle: "Beach Paradise",
              image:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/andaman",
            },
            {
              title: "Kutch",
              subtitle: "Rann Utsav",
              image:
                "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kutch",
            },
            {
              title: "Dalhousie",
              subtitle: "Snowfall & Christmas",
              image:
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
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
              image:
                "https://images.pexels.com/photos/14392872/pexels-photo-14392872.jpeg", // Shimla snow
              url: "/destinations/shimla",
            },
            {
              title: "Manali",
              subtitle: "Valley of Gods",
              image:
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Manali mountains
              url: "/destinations/manali",
            },
            {
              title: "Rishikesh",
              subtitle: "Yoga Capital",
              image:
                "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg", // Rishikesh river
              url: "/destinations/rishikesh",
            },
            {
              title: "Amritsar",
              subtitle: "Golden Temple",
              image:
                "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Amritsar temple
              url: "/destinations/amritsar",
            },
            {
              title: "Dehradun",
              subtitle: "City of Valleys",
              image:
                "https://images.pexels.com/photos/16166132/pexels-photo-16166132.jpeg", // Dehradun valley
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
              image:
                "https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg", // Kochi backwaters
              url: "/destinations/kochi",
            },
            {
              title: "Ooty",
              subtitle: "Queen of Hill Stations",
              image:
                "https://images.pexels.com/photos/982021/pexels-photo-982021.jpeg", // Ooty hills
              url: "/destinations/ooty",
            },
            {
              title: "Pondicherry",
              subtitle: "French Riviera of the East",
              image:
                "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg", // Pondicherry beach
              url: "/destinations/pondicherry",
            },
            {
              title: "Munnar",
              subtitle: "Kashmir of South India",
              image:
                "https://images.pexels.com/photos/16166132/pexels-photo-16166132.jpeg", // Munnar tea gardens
              url: "/destinations/munnar",
            },
            {
              title: "Kodaikanal",
              subtitle: "Princess of Hill Stations",
              image:
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Kodaikanal lake
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
              image:
                "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg", // Darjeeling tea gardens
              url: "/destinations/darjeeling",
            },
            {
              title: "Gangtok",
              subtitle: "Land of Monasteries",
              image:
                "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Gangtok monastery
              url: "/destinations/gangtok",
            },
            {
              title: "Kolkata",
              subtitle: "City of Joy",
              image:
                "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg", // Kolkata market
              url: "/destinations/kolkata",
            },
            {
              title: "Sundarbans",
              subtitle: "Royal Bengal Tigers",
              image:
                "https://images.pexels.com/photos/164631/pexels-photo-164631.jpeg", // Sundarbans mangroves
              url: "/destinations/sundarbans",
            },
            {
              title: "Puri",
              subtitle: "Temple City",
              image:
                "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Puri temple
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
              image:
                "https://images.pexels.com/photos/358443/pexels-photo-358443.jpeg", // Mumbai cityscape
              url: "/destinations/mumbai",
            },
            {
              title: "Goa",
              subtitle: "Beach Paradise",
              image:
                "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg", // Goa beach
              url: "/destinations/goa",
            },
            {
              title: "Jaipur",
              subtitle: "Pink City",
              image:
                "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Jaipur palace
              url: "/destinations/jaipur",
            },
            {
              title: "Udaipur",
              subtitle: "City of Lakes",
              image:
                "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg", // Udaipur lake
              url: "/destinations/udaipur",
            },
            {
              title: "Ahmedabad",
              subtitle: "Manchester of India",
              image:
                "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg", // Ahmedabad market
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
              image:
                "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kaziranga",
            },
            {
              title: "Tawang",
              subtitle: "Land of Monpas",
              image:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/tawang",
            },
            {
              title: "Cherrapunji",
              subtitle: "Land of Clouds",
              image:
                "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg", // Cherrapunji clouds
              url: "/destinations/cherrapunji",
            },
            {
              title: "Majuli",
              subtitle: "World's Largest River Island",
              image:
                "https://images.pexels.com/photos/164631/pexels-photo-164631.jpeg", // Majuli river island
              url: "/destinations/majuli",
            },
            {
              title: "Shillong",
              subtitle: "Scotland of the East",
              image:
                "https://images.pexels.com/photos/16166132/pexels-photo-16166132.jpeg", // Shillong landscape
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
              image:
                "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/ladakh",
            },
            {
              title: "Leh",
              subtitle: "Little Tibet",
              image:
                "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/leh",
            },
            {
              title: "Srinagar",
              subtitle: "Paradise on Earth",
              image:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/srinagar",
            },
            {
              title: "Jaisalmer",
              subtitle: "Golden City",
              image:
                "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/jaisalmer",
            },
            {
              title: "Amritsar",
              subtitle: "Golden Temple City",
              image:
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
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
              image:
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/mahabalipuram",
            },
            {
              title: "Thanjavur",
              subtitle: "Rice Bowl of Tamil Nadu",
              image:
                "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/thanjavur",
            },
            {
              title: "Tirupati",
              subtitle: "Spiritual Center",
              image:
                "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/tirupati",
            },
            {
              title: "Visakhapatnam",
              subtitle: "City of Destiny",
              image:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/visakhapatnam",
            },
            {
              title: "Madurai",
              subtitle: "Temple City",
              image:
                "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&auto=format",
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
              image:
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/kochi",
            },
            {
              title: "Coorg",
              subtitle: "Scotland of India",
              image:
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/coorg",
            },
            {
              title: "Wayanad",
              subtitle: "Green Paradise",
              image:
                "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/wayanad",
            },
            {
              title: "Hampi",
              subtitle: "World Heritage Site",
              image:
                "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop&auto=format",
              url: "/destinations/hampi",
            },
            {
              title: "Gokarna",
              subtitle: "Mini Goa",
              image:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format",
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
      title: "Visa Assistance Made Easy",
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
          location: "Goa",
          originalPrice: 52097,
          discountedPrice: 38590,
          days: 4,
          nights: 3,
          inclusions: ["Resort Stay", "Airport Transfers", "Breakfast"],
          image:
            "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg", // Goa beach
          url: "/packages/goa-beach-getaway",
        },
        {
          region: "North India",
          heading: "Himalayan Adventure",
          subheading: "Mountains and Trekking",
          currency: "INR",
          location: "Himalayas",
          originalPrice: 45000,
          discountedPrice: 34999,
          days: 4,
          nights: 3,
          inclusions: ["Resort Stay", "Airport Transfers", "Breakfast"],
          image:
            "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Himalayas
          url: "/packages/himalayan-adventure",
        },
        {
          region: "South India",
          heading: "Kerala Backwaters",
          subheading: "Houseboats and Nature",
          currency: "INR",
          location: "Kerala",
          originalPrice: 40000,
          discountedPrice: 29500,
          days: 4,
          nights: 3,
          inclusions: ["Resort Stay", "Airport Transfers", "Breakfast"],
          image:
            "https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg", // Kerala backwaters
          url: "/packages/kerala-backwaters",
        },
        {
          region: "East India",
          heading: "Darjeeling Tea Trails",
          subheading: "Tea Gardens and Hills",
          location: "Assam",
          currency: "INR",
          originalPrice: 38000,
          discountedPrice: 27800,
          days: 4,
          nights: 3,
          inclusions: ["Resort Stay", "Airport Transfers", "Breakfast"],
          image:
            "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg", // Darjeeling tea gardens
          url: "/packages/darjeeling-tea-trails",
        },
        {
          region: "North East India",
          heading: "Kanha Wildlife Safari",
          subheading: "Wildlife and Forests",
          currency: "INR",
          location: "Kanha",
          originalPrice: 42500,
          discountedPrice: 31200,
          days: 4,
          nights: 3,
          inclusions: ["Resort Stay", "Airport Transfers", "Breakfast"],
          image:
            "https://images.pexels.com/photos/164631/pexels-photo-164631.jpeg", // Kanha forest
          url: "/packages/kanha-wildlife-safari",
        },
        {
          region: "North East India",
          heading: "Meghalaya Living Roots",
          subheading: "Caves and Waterfalls",
          currency: "INR",
          location: "Meghalaya",
          originalPrice: 39000,
          discountedPrice: 28500,
          days: 4,
          nights: 3,
          inclusions: ["Resort Stay", "Airport Transfers", "Breakfast"],
          image:
            "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg", // Meghalaya caves
          url: "/packages/meghalaya-living-roots",
        },
        {
          region: "South East India",
          heading: "Andaman Island Escape",
          subheading: "Islands and Water Sports",
          location: "Andaman",
          currency: "INR",
          originalPrice: 55000,
          discountedPrice: 41900,
          days: 4,
          nights: 3,
          inclusions: ["Resort Stay", "Airport Transfers", "Breakfast"],
          image:
            "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg", // Andaman beach
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
            "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg", // Goa beach
          ctaText: "Book Honeymoon",
          ctaLink: "/packages/honeymoon/goa",
          theme: ["Honeymoon"],
        },
        {
          title: "Kashmir Honeymoon Paradise",
          description:
            "Experience heaven on earth with romantic houseboat stays, shikara rides, and snow-capped mountain views",
          image:
            "https://images.pexels.com/photos/10975803/pexels-photo-10975803.jpeg", // Kashmir snow
          ctaText: "Plan Romance",
          ctaLink: "/packages/honeymoon/kashmir",
          theme: ["Honeymoon", "Luxury"],
        },
        {
          title: "Udaipur Royal Romance",
          description:
            "Stay in palace hotels, enjoy private boat rides on Lake Pichola, and witness royal sunsets in the City of Lakes",
          image:
            "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Udaipur palace
          ctaText: "Royal Honeymoon",
          ctaLink: "/packages/honeymoon/udaipur",
          theme: ["Honeymoon", "Luxury"],
        },
        {
          title: "Himalayan Trekking Adventure",
          description:
            "Challenge yourself with breathtaking treks in the mighty Himalayas, from Valley of Flowers to Roopkund",
          image:
            "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Himalayas
          ctaText: "Start Adventure",
          ctaLink: "/packages/adventure/himalayas",
          theme: ["Adventure"],
        },
        {
          title: "Ladakh Motorcycle Expedition",
          description:
            "Ride through the world's highest motorable roads, experience Buddhist culture, and camp under starlit skies",
          image:
            "https://images.pexels.com/photos/14392872/pexels-photo-14392872.jpeg", // Ladakh
          ctaText: "Book Expedition",
          ctaLink: "/packages/adventure/ladakh",
          theme: ["Adventure", "Solo Travel"],
        },
        {
          title: "Rishikesh River Rafting",
          description:
            "Experience thrilling white water rafting on the Ganges, bungee jumping, and spiritual yoga sessions",
          image:
            "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg", // Rishikesh river
          ctaText: "Adventure Time",
          ctaLink: "/packages/adventure/rishikesh",
          theme: ["Adventure", "Pilgrimage"],
        },
        {
          title: "Goa Beach Paradise",
          description:
            "Crystal clear waters, golden sand beaches, water sports, and vibrant nightlife in India's beach capital",
          image:
            "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg", // Goa beach
          ctaText: "Explore Beaches",
          ctaLink: "/packages/beach/goa",
          theme: ["Beach"],
        },
        {
          title: "Andaman Island Escape",
          description:
            "Pristine beaches, coral reefs, scuba diving, and the famous Radhanagar Beach in untouched paradise",
          image:
            "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg", // Andaman beach
          ctaText: "Island Hopping",
          ctaLink: "/packages/beach/andaman",
          theme: ["Beach", "Adventure"],
        },
        {
          title: "Kerala Backwater Beaches",
          description:
            "Unique combination of backwater cruises, palm-fringed beaches, and ayurvedic spa treatments",
          image:
            "https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg", // Kerala backwaters
          ctaText: "Beach & Backwaters",
          ctaLink: "/packages/beach/kerala",
          theme: ["Beach", "Resort"],
        },
        {
          title: "Rajasthan Royal Experience",
          description:
            "Stay in authentic palace hotels, enjoy royal treatments, desert safaris, and experience the grandeur of Rajputana heritage",
          image:
            "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Rajasthan palace
          ctaText: "Book Luxury",
          ctaLink: "/packages/luxury/rajasthan",
          theme: ["Luxury"],
        },
        {
          title: "Kerala Luxury Houseboats",
          description:
            "Premium houseboat experiences with personal chefs, private decks, and luxury amenities in God's Own Country",
          image:
            "https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg", // Kerala houseboat
          ctaText: "Luxury Cruise",
          ctaLink: "/packages/luxury/kerala",
          theme: ["Luxury", "Resort"],
        },
        {
          title: "Himachal Luxury Retreats",
          description:
            "5-star mountain resorts, helicopter transfers, private tours, and exclusive access to hidden Himalayan gems",
          image:
            "https://images.pexels.com/photos/14392872/pexels-photo-14392872.jpeg", // Himachal mountains
          ctaText: "Mountain Luxury",
          ctaLink: "/packages/luxury/himachal",
          theme: ["Luxury", "Resort"],
        },
        {
          title: "Varanasi Spiritual Journey",
          description:
            "Experience the spiritual heart of India with sacred ghats, ancient temples, Ganga aarti, and divine ceremonies",
          image:
            "https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg", // Varanasi ghats
          ctaText: "Begin Pilgrimage",
          ctaLink: "/packages/pilgrimage/varanasi",
          theme: ["Pilgrimage"],
        },
        {
          title: "Char Dham Yatra",
          description:
            "Complete the sacred journey to Kedarnath, Badrinath, Gangotri, and Yamunotri in the Himalayas",
          image:
            "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Char Dham Himalayas
          ctaText: "Sacred Journey",
          ctaLink: "/packages/pilgrimage/chardham",
          theme: ["Pilgrimage", "Adventure"],
        },
        {
          title: "Golden Triangle Temples",
          description:
            "Visit iconic temples in Delhi, Agra, and Jaipur, including Akshardham, Taj Mahal, and Govind Dev Ji Temple",
          image:
            "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Golden Triangle temple
          ctaText: "Temple Trail",
          ctaLink: "/packages/pilgrimage/golden-triangle",
          theme: ["Pilgrimage", "Luxury"],
        },
        {
          title: "Solo Northeast Discovery",
          description:
            "Discover India's hidden gems in the Northeast with solo-friendly accommodations, guided experiences, and tribal culture",
          image:
            "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg", // Northeast India
          ctaText: "Solo Adventure",
          ctaLink: "/packages/solo/northeast",
          theme: ["Solo Travel"],
        },
        {
          title: "Solo Ladakh Expedition",
          description:
            "Self-discovery journey through Buddhist monasteries, high-altitude lakes, and peaceful mountain villages",
          image:
            "https://images.pexels.com/photos/14392872/pexels-photo-14392872.jpeg", // Ladakh
          ctaText: "Solo Expedition",
          ctaLink: "/packages/solo/ladakh",
          theme: ["Solo Travel", "Adventure"],
        },
        {
          title: "Solo Kerala Backpacking",
          description:
            "Explore Kerala at your own pace with backpacker-friendly stays, local transportation, and cultural immersion",
          image:
            "https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg", // Kerala backpacking
          ctaText: "Solo Journey",
          ctaLink: "/packages/solo/kerala",
          theme: ["Solo Travel", "Beach"],
        },
        {
          title: "Kerala Resort Retreat",
          description:
            "Unwind in luxury resorts surrounded by lush greenery, spice plantations, and tranquil backwaters with world-class spa",
          image:
            "https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg", // Kerala resort
          ctaText: "Resort Booking",
          ctaLink: "/packages/resort/kerala",
          theme: ["Resort"],
        },
        {
          title: "Goa Beach Resorts",
          description:
            "5-star beachfront resorts with private beaches, infinity pools, water sports, and authentic Goan cuisine",
          image:
            "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg", // Goa beach resort
          ctaText: "Beach Resort",
          ctaLink: "/packages/resort/goa",
          theme: ["Resort", "Beach"],
        },
        {
          title: "Himachal Hill Resorts",
          description:
            "Mountain resorts with panoramic valley views, adventure activities, wellness spas, and local cultural programs",
          image:
            "https://images.pexels.com/photos/14392872/pexels-photo-14392872.jpeg", // Himachal hill resort
          ctaText: "Hill Resort",
          ctaLink: "/packages/resort/himachal",
          theme: ["Resort", "Adventure"],
        },
      ],
    },
    whatMakesUsDifferentSectionData: {
      heading: "What Makes Us Different?",
      subheading:
        "Trusted by thousands of travelers, we make travel safe, personalized, and unforgettable.",
      ctaText: "Join Us",
      ctaLink: "/join-us",
      cards: [
        {
          title: "Authentic Indian Experiences",
          description:
            " We promote Indian tourism through immersive cultural journeys, taking you beyond typical destinations to explore the real heart of India —its traditions, people, and local lifestyles.",
          icon: "india-icon",
        },
        {
          title: "Curated by Locals",
          description:
            "Our experiences are designed by locals to give you an authentic taste of each destination.",
          icon: "curated-locals",
        },
        {
          title: "Trusted & Secure",
          description:
            "Every stay, guide, and activity is screened for quality, safety, and reliability.",
          icon: "trusted",
        },
        {
          title: "Always by Your Side",
          description:
            "From booking to travel, our support team is available anytime you need help.",
          icon: "247-call",
        },
      ],
    },
    testimonialsSectionData: {
      heading: "What Our Travellers say about us",
      subheading: "Real stories from explorers who experienced India with us.",
      testimonials: [
        {
          profileImage: "https://randomuser.me/api/portraits/men/81.jpg",
          title: "Amazing Experience",
          description:
            "Had a wonderful time with Peacock Vacations. The service was exceptional and the destinations were breathtaking.",
          rating: 5,
          name: "John Smith",
          location: "New York, USA",
          images: [
            "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Snowy mountains
            "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg", // Indian festival
            "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Indian palace
            "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg", // Indian heritage architecture
            "https://images.pexels.com/photos/16166132/pexels-photo-16166132.jpeg", // Kerala backwaters
          ],
        },
        {
          profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
          title: "Incredible Cultural Journey",
          description:
            "The cultural immersion was beyond my expectations. Every moment was carefully curated to showcase the real essence of India.",
          rating: 4.8,
          name: "Sarah Johnson",
          location: "London, UK",
          images: [
            "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg", // Indian market
            "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Indian palace
            "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg", // Indian festival
            "https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg", // Varanasi ghats
          ],
        },
        {
          profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
          title: "Adventure of a Lifetime",
          description:
            "From the Himalayas to the beaches of Goa, every destination was perfectly planned. The guides were knowledgeable and friendly.",
          rating: 4.9,
          name: "Mike Chen",
          occupation: "Photographer",
          location: "Toronto, Canada",
          images: [
            "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg", // Trekking in Himalayas
            "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Indian palace
            "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg", // Snowy mountains
            "https://images.pexels.com/photos/16166132/pexels-photo-16166132.jpeg", // Kerala backwaters
          ],
        },
        {
          profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
          title: "Luxury Meets Authenticity",
          description:
            "Perfect balance of luxury accommodation and authentic local experiences. The palace stays were absolutely magical.",
          rating: 5,
          name: "Emma Rodriguez",
          location: "Madrid, Spain",
          images: [
            "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg", // Indian market
            "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg", // Indian palace
            "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg", // Indian heritage architecture
            "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg", // Indian market
          ],
        },
      ],
    },
    indiaMapSectionData: {
      indiaData: {
        heading: "The Land of Diversity",
        description:
          "India, with 28 states and 8 Union Territories, is a vibrant tapestry of cultures, languages, and traditions. From the snow-capped Himalayas to sun-kissed coastal beaches, every region showcases its own unique identity. With New Delhi as its capital, and Hindi, English, along with 21 other recognized languages, as official tongues, India thrives as the world’s largest democracy. Since gaining independence on 15th August 1947, it has grown into a nation of over 1.4 billion people, united by festivals, diverse cuisines, rich heritage, and ancient civilizations. Each state plays a vital role in shaping the nation’s economy, culture, and global identity, all powered by the Indian Rupee (INR).",
      },
      regionData: {
        delhi: {
          destination: "DELHI",
          tagline: "India's Capital of Culture and Contrasts",
          bestTime: "October — March",
          temperatureRange: "12°C to 26°C",
          quote:
            "Where ancient empires meet modern marvels — a vibrant gateway to India’s soul.",
          description:
            "Delhi is a dynamic blend of history, culture, and innovation. As the heart of India, it's where grand Mughal architecture stands beside bustling bazaars, and colonial-era avenues blend into high-tech hubs. Whether you're a history buff, foodie, or photographer — Delhi never stops surprising.",
          attractions: [
            {
              name: "Red Fort",
              description:
                "Majestic Mughal fortress and UNESCO World Heritage Site",
            },
            {
              name: "Qutub Minar",
              description:
                "The world's tallest brick minaret surrounded by ancient ruins",
            },
            {
              name: "India Gate",
              description:
                "Iconic war memorial and perfect evening stroll destination",
            },
            {
              name: "Humayun’s Tomb",
              description: "The inspiration for the Taj Mahal",
            },
            {
              name: "Lotus Temple",
              description:
                "A modern marvel of peaceful architecture and symmetry",
            },
            {
              name: "Akshardham Temple",
              description:
                "Ornate carvings, cultural shows, and a lighted musical fountain",
            },
          ],
          exploreLink: "/packages/delhi",
        },
        mumbai: {
          destination: "MUMBAI",
          tagline: "India’s City of Dreams",
          bestTime: "November — February",
          temperatureRange: "20°C to 30°C",
          quote:
            "A city that never sleeps — where Bollywood glam meets coastal calm.",
          description:
            "Mumbai is India’s financial powerhouse and entertainment capital. From colonial-era architecture to lively beaches, and spicy street food to luxury malls, Mumbai promises energy, elegance, and endless exploration.",
          attractions: [
            {
              name: "Gateway of India",
              description: "Iconic waterfront arch facing the Arabian Sea",
            },
            {
              name: "Marine Drive",
              description: "Sunset views, sea breeze, and the Queen's Necklace",
            },
            {
              name: "Elephanta Caves",
              description: "Ancient rock-cut caves on a scenic island",
            },
            {
              name: "Colaba Causeway",
              description: "Shop till you drop in this lively street market",
            },
            {
              name: "Chhatrapati Shivaji Maharaj Terminus",
              description:
                "A UNESCO masterpiece of Gothic Revival architecture",
            },
            {
              name: "Bandra-Worli Sea Link",
              description: "An engineering marvel with cityscape views",
            },
          ],
          exploreLink: "/packages/mumbai",
        },
        telangana: {
          destination: "TELANGANA",
          tagline: "A Fusion of Heritage and Tech",
          bestTime: "October — March",
          temperatureRange: "18°C to 29°C",
          quote:
            "Where royal dynasties, spicy biryani, and vibrant bazaars blend into India’s tech heartland.",
          description:
            "Home to Hyderabad, Telangana offers a mix of royal history, architectural wonders, and IT boomtown energy. It's a unique stop where tradition meets innovation.",
          attractions: [
            {
              name: "Charminar",
              description:
                "Iconic 16th-century minaret in the heart of Old City",
            },
            {
              name: "Golconda Fort",
              description: "Echoes of an ancient citadel",
            },
            {
              name: "Ramoji Film City",
              description: "The world's largest film studio complex",
            },
            {
              name: "Hussain Sagar Lake",
              description: "Serene waters with a massive Buddha statue",
            },
            {
              name: "Birla Mandir",
              description: "Peaceful hilltop white marble temple",
            },
            {
              name: "Laad Bazaar",
              description:
                "Buy colorful bangles and pearls in Hyderabad's famous shopping street",
            },
          ],
          exploreLink: "/packages/telangana",
        },
        kerala: {
          destination: "KERALA",
          tagline: "God's Own Country",
          bestTime: "October — March",
          temperatureRange: "22°C to 28°C",
          quote:
            "Where emerald backwaters, Ayurvedic bliss, and tropical beauty redefine serenity.",
          description:
            "Kerala is a lush paradise of coconut groves, traditional houseboats, and misty hill stations. Ideal for nature lovers, wellness seekers, and cultural explorers.",
          attractions: [
            {
              name: "Alleppey Backwaters",
              description: "Cruise on a traditional houseboat",
            },
            {
              name: "Munnar Hills",
              description: "Tea gardens, cool weather, and nature trails",
            },
            {
              name: "Fort Kochi",
              description:
                "Colonial charm, Chinese fishing nets, and art cafés",
            },
            {
              name: "Periyar Wildlife Sanctuary",
              description: "Jungle safaris and spice plantations",
            },
            {
              name: "Varkala & Kovalam Beaches",
              description: "Golden sands and cliffside café",
            },
            { name: "Athirappilly Falls", description: "The Niagara of India" },
          ],
          exploreLink: "/packages/kerala",
        },
        puri: {
          destination: "PURI (Odisha)",
          tagline: "A Sacred Seaside Retreat",
          bestTime: "November — February",
          temperatureRange: "18°C to 26°C",
          quote:
            "Where devotion meets the ocean — India’s spiritual coastline.",
          description:
            "Puri is one of India’s four Char Dham pilgrimage sites. With pristine beaches, ancient temples, and vibrant festivals, it's a serene yet powerful destination for cultural immersion.",
          attractions: [
            {
              name: "Jagannath Temple",
              description: "World-famous spiritual center and Rath Yatra hub",
            },
            {
              name: "Puri Beach",
              description: "Ideal for sunrise walks and camel rides",
            },
            {
              name: "Konark Sun Temple",
              description: "13th-century architectural marvel and UNESCO site",
            },
            {
              name: "Chilika Lake",
              description:
                "Asia's largest brackish water lagoon with migratory birds",
            },
            {
              name: "Raghurajpur Heritage Village",
              description: "Pattachitra artists and folk performances",
            },
            {
              name: "Pipili Village",
              description: "Vibrant appliqué handicrafts and street art",
            },
          ],
          exploreLink: "/packages/puri",
        },
        goa: {
          destination: "GOA",
          tagline: "India’s beach paradise",
          bestTime: "Dec – Mar",
          temperatureRange: "24°C to 29°C",
          quote:
            "Where golden beaches meet Portuguese charm, and every sunset feels like a postcard.",
          description:
            "Goa is India’s ultimate tropical escape, offering a perfect blend of beach relaxation, thrilling water sports, buzzing nightlife, and heritage charm. Whether you’re a solo backpacker, a couple on a romantic getaway, or a family, Goa has something for everyone.",
          attractions: [
            {
              name: "Palolem Beach",
              description: "Calm, scenic, and perfect for sunbathing",
            },
            {
              name: "Basilica of Bom Jesus",
              description: "UNESCO heritage site with baroque architecture",
            },
            {
              name: "Fort Aguada",
              description: "17th-century fort with panoramic sea views",
            },
            {
              name: "Anjuna Flea Market",
              description: "Shop for handicrafts, jewelry, and souvenirs",
            },
            {
              name: "Dudhsagar Waterfalls",
              description:
                "Majestic four-tiered waterfall near the Goa-Karnataka border",
            },
          ],
          exploreLink: "/packages/goa",
        },
      },
    },
  };

  return new Promise((resolve) => {
    resolve(data);
  });
}
