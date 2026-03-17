export interface BlogSection {
    subheading?: string;
    text: string[];
    imageUrl?: string;
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    authorRole?: string;
    date?: string;
    readTime: string;
    imageUrl: string;
    category: string;
    content?: string[];
    sections?: BlogSection[];
    tags: string[];
    relatedPackageIds?: string[];
}

export const blogCategories = [
    "All",
    "Recent",
    "Popular",
    "Season",
    "Culture & Traditions",
    "Food & Flavors",
    "Local Etiquette"
];

export const highlightPosts: BlogPost[] = [
    {
        id: "h1",
        slug: "a-journey-to-reconnect-with-your-self",
        title: "A Journey to Reconnect with Your self",
        excerpt: "After months of work burnout, I needed more than just a break — I needed a reset. Goa’s golden beaches, gentle waves, and warm locals gave me exactly that.",
        author: "Arjun Nair",
        authorRole: "Travel Blogger",
        date: "March 15, 2024",
        readTime: "3 mins read",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
        category: "GOA, WELLNESS, BEACHES",
        tags: ["Wellness", "Goa", "Beaches"],
        relatedPackageIds: ["1", "2", "3"],
        sections: [
            {
                text: [
                    "After months of work burnout, I needed more than just a break — I needed a reset. Goa's golden beaches, gentle waves, and warm locals gave me exactly that.",
                    "Goa isn't just about the parties and the noise; it's a place where you can find profound silence if you know where to look. I found it in the early mornings on the beach, where the only sounds were the rhythmic crashing of waves and the distant cry of a seagull."
                ]
            },
            {
                subheading: "Mystique of Wellness and Zen",
                text: [
                    "Each morning began with yoga as the sun slowly tilted above the horizon, painting the sky in shades of vermilion and gold. The air was fresh, carrying the scent of salt and tropical flowers. I felt a sense of peace that had been missing for years.",
                    "I joined a small retreat near Arambol, where the focus was on mindfulness and connecting with nature. We spent hours in meditation, listening to the wisdom of local gurus who had spent their lives studying the art of living well."
                ],
                imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop"
            },
            {
                subheading: "Embracing the Local Pace",
                text: [
                    "Goa's true charm lies in its people. They live with a 'susegad' attitude — a relaxed, carefree way of life that is infectious. I spent my afternoons wandering through colourful markets, sharing stories with vendors who treated me like an old friend.",
                    "From the spice plantations to the hidden waterfalls, every experience was a reminder to slow down and appreciate the beauty in the simple things. I learned that travel isn't just about the places you visit, but the person you become along the way."
                ]
            },
            {
                subheading: "Healing, Not Escaping",
                text: [
                    "As I prepared to leave, I realized that I wasn't just returning to my old life; I was returning as a better version of myself. Goa had healed me in ways I didn't even know I needed.",
                    "If you're feeling lost or overwhelmed, I highly recommend taking a trip to Goa. Let the ocean breeze carry away your worries and the sun illuminate your path. You might just find what you've been looking for."
                ]
            }
        ]
    },
    {
        id: "h2",
        slug: "a-cultural-mosaic-that-changed-my-view",
        title: "A Cultural Mosaic That Changed My View of Travel",
        excerpt: "Every corner of India felt like a story unfolding before me. The vibrant chaos of markets, the silence of ancient temples — both coexisted beautifully.",
        author: "Arjun Nair",
        readTime: "4 mins read",
        imageUrl: "https://images.unsplash.com/photo-1524492717734-e07d522693a7?q=80&w=2070&auto=format&fit=crop",
        category: "INDIA, CULTURE, TRADITIONS",
        tags: [],
        relatedPackageIds: ["3", "7"]
    },
    {
        id: "h3",
        slug: "more-than-a-tour-a-unique-experience",
        title: "More Than a Tour: A Unique User Experience with Peacock Vacations",
        excerpt: "From the moment I landed, everything felt seamless — and personal. Peacock Vacations didn’t just guide me; they understood me. Local experts curated spots...",
        author: "Arjun Nair",
        readTime: "2 mins read",
        imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
        category: "EXPERIENCE",
        tags: [],
        relatedPackageIds: ["1", "5"]
    }
];

export const allBlogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "more-than-a-tour-experience-1",
        title: "More Than a Tour: A Unique User Experience with Peacock Vacations",
        excerpt: "From the moment I landed, everything felt seamless — and personal. Peacock Vacations didn’t just guide me; they understood me. Local experts curated spots...",
        author: "Arjun Nair",
        readTime: "2 mins read",
        imageUrl: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=2070&auto=format&fit=crop",
        category: "EXPERIENCE",
        tags: []
    },
    {
        id: "2",
        slug: "cultural-mosaic-change-2",
        title: "A Cultural Mosaic That Changed My View of Travel",
        excerpt: "Every corner of India felt like a story unfolding before me. The vibrant chaos of markets, the silence of ancient temples — both coexisted beautifully.",
        author: "Arjun Nair",
        readTime: "4 mins read",
        imageUrl: "https://images.unsplash.com/photo-1510009489794-352fba39fab0?q=80&w=2070&auto=format&fit=crop",
        category: "INDIA, CULTURE, TRADITIONS",
        tags: []
    },
    {
        id: "3",
        slug: "journey-to-reconnect-3",
        title: "A Journey to Reconnect with Your self",
        excerpt: "After months of work burnout, I needed more than just a break — I needed a reset. Goa’s golden beaches, gentle waves, and warm locals gave me exactly that.",
        author: "Arjun Nair",
        readTime: "3 mins read",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
        category: "GOA, WELLNESS, BEACHES",
        tags: []
    },
    {
        id: "4",
        slug: "cultural-mosaic-change-4",
        title: "A Cultural Mosaic That Changed My View of Travel",
        excerpt: "Every corner of India felt like a story unfolding before me. The vibrant chaos of markets, the silence of ancient temples — both coexisted beautifully.",
        author: "Arjun Nair",
        readTime: "4 mins read",
        imageUrl: "https://images.unsplash.com/photo-1561053720-76cd73ff22c3?q=80&w=2070&auto=format&fit=crop",
        category: "INDIA, CULTURE, TRADITIONS",
        tags: []
    },
    {
        id: "5",
        slug: "journey-to-reconnect-5",
        title: "A Journey to Reconnect with Your self",
        excerpt: "After months of work burnout, I needed more than just a break — I needed a reset. Goa’s golden beaches, gentle waves, and warm locals gave me exactly that.",
        author: "Arjun Nair",
        readTime: "3 mins read",
        imageUrl: "https://images.unsplash.com/photo-1471623432079-fd802d6f7836?q=80&w=2070&auto=format&fit=crop",
        category: "GOA, WELLNESS, BEACHES",
        tags: []
    },
    {
        id: "6",
        slug: "more-than-a-tour-experience-6",
        title: "More Than a Tour: A Unique User Experience with Peacock Vacations",
        excerpt: "From the moment I landed, everything felt seamless — and personal. Peacock Vacations didn’t just guide me; they understood me. Local experts curated spots...",
        author: "Arjun Nair",
        readTime: "2 mins read",
        imageUrl: "https://images.unsplash.com/photo-1514222139-b576be51381b?q=80&w=2070&auto=format&fit=crop",
        category: "EXPERIENCE",
        tags: []
    }
];
