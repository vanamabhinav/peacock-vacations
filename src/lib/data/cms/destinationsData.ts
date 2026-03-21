export type City = {
    name: string;
    slug: string;
};

export type State = {
    name: string;
    slug: string;
    cities: City[];
};

export type Region = {
    name: string;
    slug: string;
    image?: string;
    avgTemp?: string;
    bestPicks?: string[];
    states: State[];
};

export const regionsData: Region[] = [
    {
        name: "North India",
        slug: "north-india",
        image: "/images/north-india.png",
        avgTemp: "18°C – 21°C",
        bestPicks: ["Shimla", "Leh", "Varanasi"],
        states: [
            {
                name: "Delhi",
                slug: "delhi",
                cities: [
                    { name: "New Delhi", slug: "new-delhi" },
                    { name: "Old Delhi", slug: "old-delhi" },
                    { name: "Connaught Place", slug: "connaught-place" },
                ],
            },
            {
                name: "Himachal Pradesh",
                slug: "himachal-pradesh",
                cities: [
                    { name: "Chandrataal", slug: "chandrataal" },
                    { name: "Dalhousie", slug: "dalhousie" },
                    { name: "Dharamshala", slug: "dharamshala" },
                    { name: "Kaza", slug: "kaza" },
                    { name: "Manali", slug: "manali" },
                    { name: "Shimla", slug: "shimla" },
                    { name: "Spiti Valley", slug: "spiti-valley" },
                ],
            },
            {
                name: "Kashmir",
                slug: "kashmir",
                cities: [
                    { name: "Gulmarg", slug: "gulmarg" },
                    { name: "Pahalgam", slug: "pahalgam" },
                    { name: "Sonmarg", slug: "sonmarg" },
                    { name: "Srinagar", slug: "srinagar" },
                ],
            },
            {
                name: "Leh-Ladakh",
                slug: "leh-ladakh",
                cities: [
                    { name: "Kargil", slug: "kargil" },
                    { name: "Leh", slug: "leh" },
                    { name: "Nubra Valley", slug: "nubra-valley" },
                    { name: "Pangong Tso", slug: "pangong-tso" },
                    { name: "Turtuk", slug: "turtuk" },
                ],
            },
            {
                name: "Punjab",
                slug: "punjab",
                cities: [
                    { name: "Amritsar", slug: "amritsar" },
                    { name: "Ludhiana", slug: "ludhiana" },
                    { name: "Jalandhar", slug: "jalandhar" },
                    { name: "Pathankot", slug: "pathankot" },
                ],
            },
            {
                name: "Haryana",
                slug: "haryana",
                cities: [
                    { name: "Chandigarh", slug: "chandigarh" },
                    { name: "Kurukshetra", slug: "kurukshetra" },
                    { name: "Panipat", slug: "panipat" },
                    { name: "Gurgaon", slug: "gurgaon" },
                ],
            },
            {
                name: "Uttarakhand",
                slug: "uttarakhand",
                cities: [
                    { name: "Jim Corbett Park", slug: "jim-corbett-park" },
                    { name: "Haridwar", slug: "haridwar" },
                    { name: "Mussoorie", slug: "mussoorie" },
                    { name: "Nainital", slug: "nainital" },
                    { name: "Rishikesh", slug: "rishikesh" },
                    { name: "Chardham Yatra", slug: "chardham-yatra" },
                    { name: "Auli", slug: "auli" },
                    { name: "Dehradun", slug: "dehradun" },
                ],
            },
            {
                name: "Uttar Pradesh",
                slug: "uttar-pradesh",
                cities: [
                    { name: "Agra", slug: "agra" },
                    { name: "Ayodhya", slug: "ayodhya" },
                    { name: "Fatehpur Sikri", slug: "fatehpur-sikri" },
                    { name: "Jhansi", slug: "jhansi" },
                    { name: "Lucknow", slug: "lucknow" },
                    { name: "Mathura", slug: "mathura" },
                    { name: "Prayagraj", slug: "prayagraj" },
                    { name: "Sarnath", slug: "sarnath" },
                    { name: "Varanasi", slug: "varanasi" },
                    { name: "Vrindavan", slug: "vrindavan" },
                ],
            },
            {
                name: "Rajasthan",
                slug: "rajasthan",
                cities: [
                    { name: "Jaipur", slug: "jaipur" },
                    { name: "Jodhpur", slug: "jodhpur" },
                    { name: "Udaipur", slug: "udaipur" },
                    { name: "Jaisalmer", slug: "jaisalmer" },
                    { name: "Pushkar", slug: "pushkar" },
                    { name: "Mount Abu", slug: "mount-abu" },
                ],
            },
        ],
    },
    {
        name: "South India",
        slug: "south-india",
        image: "/images/south-india.png",
        avgTemp: "25°C – 35°C",
        bestPicks: ["Ooty", "Munnar", "Hampi"],
        states: [
            {
                name: "Tamil Nadu",
                slug: "tamil-nadu",
                cities: [
                    { name: "Chennai", slug: "chennai" },
                    { name: "Madurai", slug: "madurai" },
                    { name: "Ooty", slug: "ooty" },
                    { name: "Rameswaram", slug: "rameswaram" },
                    { name: "Kodaikanal", slug: "kodaikanal" },
                    { name: "Kanyakumari", slug: "kanyakumari" },
                    { name: "Thanjavur", slug: "thanjavur" },
                ],
            },
            {
                name: "Kerala",
                slug: "kerala",
                cities: [
                    { name: "Alleppey", slug: "alleppey" },
                    { name: "Kochi", slug: "kochi" },
                    { name: "Munnar", slug: "munnar" },
                    { name: "Wayanad", slug: "wayanad" },
                    { name: "Thekkady", slug: "thekkady" },
                    { name: "Kovalam", slug: "kovalam" },
                    { name: "Kumarakom", slug: "kumarakom" },
                    { name: "Varkala", slug: "varkala" },
                ],
            },
            {
                name: "Karnataka",
                slug: "karnataka",
                cities: [
                    { name: "Bengaluru", slug: "bengaluru" },
                    { name: "Coorg", slug: "coorg" },
                    { name: "Hampi", slug: "hampi" },
                    { name: "Mysore", slug: "mysore" },
                    { name: "Chikmagalur", slug: "chikmagalur" },
                    { name: "Badami", slug: "badami" },
                    { name: "Gokarna", slug: "gokarna" },
                ],
            },
            {
                name: "Andhra Pradesh",
                slug: "andhra-pradesh",
                cities: [
                    { name: "Amaravati", slug: "amaravati" },
                    { name: "Vijayawada", slug: "vijayawada" },
                    { name: "Tirupati", slug: "tirupati" },
                    { name: "Visakhapatnam", slug: "visakhapatnam" },
                    { name: "Araku Valley", slug: "araku-valley" },
                ],
            },
            {
                name: "Telangana",
                slug: "telangana",
                cities: [
                    { name: "Hyderabad", slug: "hyderabad" },
                    { name: "Warangal", slug: "warangal" },
                    { name: "Khammam", slug: "khammam" },
                    { name: "Nizamabad", slug: "nizamabad" },
                ],
            },
            {
                name: "Puducherry",
                slug: "puducherry",
                cities: [
                    { name: "Pondicherry", slug: "pondicherry" },
                    { name: "Auroville", slug: "auroville" },
                ],
            },
        ],
    },
    {
        name: "East India",
        slug: "east-india",
        image: "/images/east-india.png",
        avgTemp: "20°C – 30°C",
        bestPicks: ["Darjeeling", "Kolkata", "Puri"],
        states: [
            {
                name: "West Bengal",
                slug: "west-bengal",
                cities: [
                    { name: "Kolkata", slug: "kolkata" },
                    { name: "Darjeeling", slug: "darjeeling" },
                    { name: "Sundarbans", slug: "sundarbans" },
                    { name: "Kalimpong", slug: "kalimpong" },
                    { name: "Digha", slug: "digha" },
                    { name: "Mandarmani", slug: "mandarmani" },
                    { name: "Shantiniketan", slug: "shantiniketan" },
                ],
            },
            {
                name: "Odisha",
                slug: "odisha",
                cities: [
                    { name: "Bhubaneswar", slug: "bhubaneswar" },
                    { name: "Puri", slug: "puri" },
                    { name: "Konark", slug: "konark" },
                    { name: "Cuttack", slug: "cuttack" },
                    { name: "Chilika Lake", slug: "chilika-lake" },
                    { name: "Gopalpur", slug: "gopalpur" },
                ],
            },
            {
                name: "Bihar",
                slug: "bihar",
                cities: [
                    { name: "Bodh Gaya", slug: "bodh-gaya" },
                    { name: "Patna", slug: "patna" },
                    { name: "Nalanda", slug: "nalanda" },
                    { name: "Rajgir", slug: "rajgir" },
                    { name: "Vaishali", slug: "vaishali" },
                ],
            },
            {
                name: "Jharkhand",
                slug: "jharkhand",
                cities: [
                    { name: "Ranchi", slug: "ranchi" },
                    { name: "Jamshedpur", slug: "jamshedpur" },
                    { name: "Deoghar", slug: "deoghar" },
                    { name: "Hazaribagh", slug: "hazaribagh" },
                    { name: "Bokaro", slug: "bokaro" },
                ],
            },
        ],
    },
    {
        name: "West India",
        slug: "west-india",
        image: "/images/west-india.png",
        avgTemp: "22°C – 35°C",
        bestPicks: ["Jaipur", "Mumbai", "Goa"],
        states: [
            {
                name: "Maharashtra",
                slug: "maharashtra",
                cities: [
                    { name: "Mumbai", slug: "mumbai" },
                    { name: "Pune", slug: "pune" },
                    { name: "Nashik", slug: "nashik" },
                    { name: "Aurangabad", slug: "aurangabad" },
                    { name: "Lonavala", slug: "lonavala" },
                    { name: "Mahabaleshwar", slug: "mahabaleshwar" },
                    { name: "Ajanta Caves", slug: "ajanta-caves" },
                    { name: "Ellora Caves", slug: "ellora-caves" },
                ],
            },
            {
                name: "Gujarat",
                slug: "gujarat",
                cities: [
                    { name: "Ahmedabad", slug: "ahmedabad" },
                    { name: "Gir National Park", slug: "gir-national-park" },
                    { name: "Dwarka", slug: "dwarka" },
                    { name: "Somnath", slug: "somnath" },
                    { name: "Rann of Kutch", slug: "rann-of-kutch" },
                    { name: "Statue of Unity", slug: "statue-of-unity" },
                    { name: "Surat", slug: "surat" },
                ],
            },
            {
                name: "Goa",
                slug: "goa",
                cities: [
                    { name: "Panaji", slug: "panaji" },
                    { name: "Calangute", slug: "calangute" },
                    { name: "Baga", slug: "baga" },
                    { name: "Anjuna", slug: "anjuna" },
                    { name: "Arambol", slug: "arambol" },
                    { name: "Vasco da Gama", slug: "vasco-da-gama" },
                    { name: "Old Goa", slug: "old-goa" },
                ],
            },
        ],
    },
    {
        name: "North East India",
        slug: "north-east-india",
        image: "/images/north-east-india.png",
        avgTemp: "15°C – 25°C",
        bestPicks: ["Shillong", "Gangtok", "Tawang"],
        states: [
            {
                name: "Assam",
                slug: "assam",
                cities: [
                    { name: "Guwahati", slug: "guwahati" },
                    { name: "Kaziranga National Park", slug: "kaziranga-national-park" },
                    { name: "Majuli", slug: "majuli" },
                    { name: "Sivasagar", slug: "sivasagar" },
                    { name: "Jorhat", slug: "jorhat" },
                    { name: "Tezpur", slug: "tezpur" },
                ],
            },
            {
                name: "Meghalaya",
                slug: "meghalaya",
                cities: [
                    { name: "Shillong", slug: "shillong" },
                    { name: "Cherrapunji", slug: "cherrapunji" },
                    { name: "Mawlynnong", slug: "mawlynnong" },
                    { name: "Dawki", slug: "dawki" },
                    { name: "Jowai", slug: "jowai" },
                ],
            },
            {
                name: "Sikkim",
                slug: "sikkim",
                cities: [
                    { name: "Gangtok", slug: "gangtok" },
                    { name: "Lachung", slug: "lachung" },
                    { name: "Pelling", slug: "pelling" },
                ],
            },
        ],
    },
    {
        name: "Central India",
        slug: "central-india",
        image: "/images/central-india.png",
        avgTemp: "20°C – 40°C",
        bestPicks: ["Khajuraho", "Kanha", "Raipur"],
        states: [
            {
                name: "Madhya Pradesh",
                slug: "madhya-pradesh",
                cities: [
                    { name: "Bhopal", slug: "bhopal" },
                    { name: "Indore", slug: "indore" },
                    { name: "Khajuraho", slug: "khajuraho" },
                    { name: "Ujjain", slug: "ujjain" },
                    { name: "Gwalior", slug: "gwalior" },
                    { name: "Sanchi", slug: "sanchi" },
                    { name: "Kanha National Park", slug: "kanha-national-park" },
                    { name: "Bandhavgarh", slug: "bandhavgarh" },
                    { name: "Pachmarhi", slug: "pachmarhi" },
                ],
            },
            {
                name: "Chhattisgarh",
                slug: "chhattisgarh",
                cities: [
                    { name: "Raipur", slug: "raipur" },
                    { name: "Jagdalpur", slug: "jagdalpur" },
                    { name: "Bilaspur", slug: "bilaspur" },
                    { name: "Korba", slug: "korba" },
                    { name: "Bastar", slug: "bastar" },
                ],
            },
        ],
    },
];

export const getCityNameBySlug = (slug: string): string | null => {
    for (const region of regionsData) {
        for (const state of region.states) {
            const city = state.cities.find(c => c.slug === slug);
            if (city) return city.name;
        }
    }
    return null;
};

export const getStateNameBySlug = (slug: string): string | null => {
    for (const region of regionsData) {
        const state = region.states.find(s => s.slug === slug);
        if (state) return state.name;
    }
    return null;
};

export const getRegionNameBySlug = (slug: string): string | null => {
    const region = regionsData.find(r => r.slug === slug);
    return region ? region.name : null;
};
