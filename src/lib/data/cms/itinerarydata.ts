export interface ItineraryHighlight {
    id: string;
    title: string;
    description: string;
    iconType: string;
}

export interface ItineraryFlight {
    from: string;
    to: string;
    airline: string;
    flightNumber: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    stops: number;
    logo: string;
    date: string;
}

export interface ItineraryStay {
    hotelName: string;
    dates: string;
    rating: number;
    area: string;
    bedType: string;
    amenities: { label: string; included: boolean }[];
    imageUrl: string;
    type: string; // e.g. "Luxury Hotel"
}

export interface ItineraryTransfer {
    vehicleName: string;
    dates: string;
    capacity: string;
    luggage: string;
    features: { label: string; included: boolean }[];
    imageUrl: string;
    type: string; // e.g. "Private"
}

export interface SummaryDay {
    day: number;
    date: string;
    morningText: string;
    morningTime?: string;
    noonEveningText?: string;
    noonEveningTime?: string;
    isArrive?: boolean;
    isDepart?: boolean;
}

export interface ItineraryCMSData {
    id: string;
    title: string;
    tagline?: string;
    shortDescription: string;
    longDescription: string;
    slug: string;
    isPublished: boolean;
    departureCity: string[];
    destination: {
        cityName: string;
        stateName: string;
        countryName: string;
    };
    themes: string[];
    packageType: string[];
    price: {
        originalAmount: number;
        discountedAmount: number;
        currency: string;
        emiAmount?: number;
    };
    duration: {
        days: number;
        nights: number;
        startDate: string;
        endDate: string;
    };
    mainImageUrl: string;
    galleryImages: string[];
    itinerary: {
        day: number;
        title: string;
        events: {
            timeOfDay: string;
            title: string;
            description: string;
        }[];
    }[];
    highlights: ItineraryHighlight[];
    suggestedFlights: ItineraryFlight[];
    stayDetails: ItineraryStay;
    transferDetails: ItineraryTransfer;
    tourInclusionsList: string[];
    tourExclusionsList: string[];
    needToKnow: {
        documents: {
            international: string;
            children: string;
        };
        weather: {
            text: string;
            url: string;
        };
        hotelGuidelines: {
            checkIn: string;
            checkOut: string;
            notes: string;
            childPolicy: string;
        };
        additionalNotes: string[];
    };
    cancellationPolicy: {
        timeframe: string;
        fee: string;
        isHighlight?: boolean;
    }[];
    packageIncludes: { id: string; label: string; icon: string }[];
    contactPhone: string;
    summaryTable: SummaryDay[];
    visaAssistance: {
        title: string;
        description: string;
        buttonText: string;
        imageUrl: string;
    };
}

export const itineraryData: ItineraryCMSData = {
    id: "goa-itinerary-1",
    title: "North Goa Sightseeing – 5 Night In Goa",
    slug: "north-goa-sightseeing",
    tagline: "Sun, Sand & Serenity",
    shortDescription: "Over view of Goa",
    longDescription: "Explore Stunning Beaches, Vibrant Nightlife, And Water Adventures. From Relaxing Sunsets To Thrilling Party Scenes, Goa Offers The Perfect Mix Of Leisure And Excitement For Every Traveler.",
    isPublished: true,
    departureCity: ["Hyderabad"],
    destination: {
        cityName: "Goa",
        stateName: "Goa",
        countryName: "India"
    },
    themes: ["Beach", "Adventure"],
    packageType: ["Couple", "Family"],
    price: {
        originalAmount: 48921,
        discountedAmount: 38590,
        currency: "INR",
        emiAmount: 456
    },
    duration: {
        days: 4,
        nights: 3,
        startDate: "12 Aug 2025",
        endDate: "16 Aug 2025"
    },
    mainImageUrl: "/images/south-india.png",
    galleryImages: [
        "https://media.gettyimages.com/id/1206918527/photo/foreigners-enjoy-walking-and-riding-bikes-on-the-beach-in-goa-on-march-13-2020.jpg?s=612x612&w=0&k=20&c=xdJQG-vhJfYrEDzhocNxmJwbnjGHHaCNLptXxtTJWHe=",
        "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_trp/m_activities_goa_arambol_beach_l_326_640.jpg?im=Resize=(480,321)",
        "https://media.gettyimages.com/id/674874178/photo/agonda-scenery.jpg?s=612x612&w=0&k=20&c=6Urkb7PXUpvSelkkZuQIDDunX-NCR5BS8cAZrH7KYns=",
        "https://media.gettyimages.com/id/2205838924/photo/india-goa-panaji-fontainhas-district-former-portuguese-colonial-city.jpg?s=612x612&w=0&k=20&c=mNk8lNwqt8H5tu5c-YTCTLIlkhcXhJlNrCCccRx8ZEA=",
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1590393802679-3221b0660298?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=2070&auto=format&fit=crop"
    ],
    highlights: [
        {
            id: "culture",
            title: "Experience India's Rich Culture",
            description: "Immerse in authentic places.",
            iconType: "culture"
        },
        {
            id: "travelers",
            title: "100% Happy Travelers",
            description: "We ensure every journey creates a smile.",
            iconType: "travelers"
        },
        {
            id: "support",
            title: "24x7 Personal Support",
            description: "Get real-time help from our team.",
            iconType: "support"
        },
        {
            id: "secure",
            title: "Trusted & Secure Journeys",
            description: "Safe stays and smooth travels.",
            iconType: "secure"
        }
    ],
    suggestedFlights: [
        {
            from: "HYD",
            to: "GOA",
            airline: "Air India",
            flightNumber: "AI 842",
            departureTime: "12:30",
            arrivalTime: "14:45",
            duration: "1 H 15 Mins",
            stops: 1,
            logo: "/images/north-india.png",
            date: "Wed, 12 July 25"
        },
        {
            from: "HYD",
            to: "GOA",
            airline: "IndiGo",
            flightNumber: "6E 2132",
            departureTime: "11:40",
            arrivalTime: "15:30",
            duration: "2 H 30 Mins",
            stops: 2,
            logo: "/images/west-india.png",
            date: "Wed, 12 July 25"
        }
    ],
    itinerary: [
        {
            day: 1,
            title: "Wed, 12 July",
            events: [
                {
                    timeOfDay: "Morning",
                    title: "Arrive in Goa from Hyderabad. Transfer to Resotel hotel and check-in.",
                    description: ""
                }
            ]
        },
        {
            day: 2,
            title: "Thu, 13 July",
            events: [
                {
                    timeOfDay: "Morning",
                    title: "No planned activities",
                    description: ""
                },
                {
                    timeOfDay: "Noon to Evening",
                    title: "Visit Baga Beach for sunset views and beachside leisure.",
                    description: ""
                }
            ]
        },
        {
            day: 3,
            title: "Fri, 14 July",
            events: [
                {
                    timeOfDay: "Morning to Noon",
                    title: "Watch sunrise at the beach. Enjoy brunch and relax at hotel or nearby cafe.",
                    description: ""
                },
                {
                    timeOfDay: "Evening",
                    title: "No planned activities",
                    description: ""
                }
            ]
        },
        {
            day: 4,
            title: "Sat, 15 July",
            events: [
                {
                    timeOfDay: "Full Day",
                    title: "Breakfast, check-out from hotel. Transfer to airport for return flight to Hyderabad.",
                    description: ""
                }
            ]
        }
    ],
    stayDetails: {
        hotelName: "Novotel Goa Resort and Spa",
        dates: "Wed, 12 July – Sat, 15 July",
        rating: 5,
        area: "Area 118 sq.ft",
        bedType: "Twin Room",
        amenities: [
            { label: "Wifi", included: true },
            { label: "Elevator", included: true },
            { label: "Breakfast", included: true },
            { label: "Air Conditioner", included: true }
        ],
        imageUrl: "/images/east-india.png",
        type: "Luxury Hotel"
    },
    transferDetails: {
        vehicleName: "Toyota Innova Crysta – 2024",
        dates: "12th, 13th, 14th, 15th & 16th July 25",
        capacity: "7 seater car",
        luggage: "2 Bags can Carry",
        features: [
            { label: "Air Conditioner", included: true },
            { label: "charging port", included: true },
            { label: "Safety", included: true },
            { label: "Comfortable", included: true }
        ],
        imageUrl: "/images/central-india.png",
        type: "Private"
    },
    tourInclusionsList: [
        "Stay at Novotel Goa Resort – 3 nights with deluxe amenities",
        "On-site Assistance & Support throughout the stay",
        "Private A/C Vehicle for transfers & sightseeing",
        "Daily Breakfast at the hotel (multi-cuisine buffet)",
        "Baga Beach Sunset Experience with entry"
    ],
    tourExclusionsList: [],
    needToKnow: {
        documents: {
            international: "Valid Passport with Visa (if applicable) is mandatory. Carry a printed or digital e-ticket and travel insurance if available.",
            children: "Original birth certificate, passport, or any official document verifying age is required. Must be accompanied by an adult guardian."
        },
        weather: {
            text: "For detailed information about weather kindly visit",
            url: "www.accuweather.com"
        },
        hotelGuidelines: {
            checkIn: "14:00 hrs",
            checkOut: "12:00 hrs",
            notes: "Early check-in and late check-out are subject to availability and may incur extra charges.",
            childPolicy: "Children under 5 years stay free when sharing a bed with parents. Extra beds or separate accommodation may cost extra."
        },
        additionalNotes: [
            "Bring a universal power adapter (Indian plug types: C, D, M).",
            "Carry some local currency (INR) for small/local purchases.",
            "Travel insurance is advised for international guests.",
            "Languages spoken: English, Hindi; translation support available on request."
        ]
    },
    cancellationPolicy: [
        { timeframe: "17 Jul – 21 Jul", fee: "₹ 22,243" },
        { timeframe: "22 Jul – 29 Jul", fee: "₹ 25,953" },
        { timeframe: "30 Jul – 13 Aug", fee: "₹ 38,590", isHighlight: true }
    ],
    packageIncludes: [
        { id: "hotel", label: "hotel", icon: "/images/south-india.png" },
        { id: "sightseeing", label: "sightseeing", icon: "/images/south-india.png" },
        { id: "meals", label: "meals", icon: "/images/south-india.png" },
        { id: "transport", label: "transport", icon: "/images/south-india.png" },
        { id: "experiences", label: "experiences", icon: "/images/south-india.png" }
    ],
    contactPhone: "+91 90000 12345",
    summaryTable: [
        {
            day: 1,
            date: "Wed, 12 July",
            morningTime: "Morning",
            morningText: "Arrive in Goa from Hyderabad. Transfer to Novotel hotel and check-in.",
            isArrive: true
        },
        {
            day: 2,
            date: "Thu, 13 July",
            morningTime: "Morning",
            morningText: "No planned activities",
            noonEveningTime: "Noon to Evening",
            noonEveningText: "Visit Baga Beach for sunset views and beachside leisure."
        },
        {
            day: 3,
            date: "Fri, 14 July",
            morningTime: "Morning to Noon",
            morningText: "Watch sunrise at the beach. Enjoy brunch and relax at hotel or nearby cafe.",
            noonEveningTime: "Evening",
            noonEveningText: "No planned activities"
        },
        {
            day: 4,
            date: "Sat, 15 July",
            morningTime: "Full Day",
            morningText: "Breakfast, check-out from hotel. Transfer to airport for return flight to Hyderabad.",
            isDepart: true
        }
    ],
    visaAssistance: {
        title: "Visa Assistance Made Easy",
        description: "Quick & hassle-free visa processing. Get your travel visa done effortlessly.",
        buttonText: "Start Your Visa Process",
        imageUrl: "/images/visa_made_easy.png"
    }
};
