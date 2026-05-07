import mongoose, { Schema, Document } from 'mongoose';

export interface IPackage extends Document {
    title: string;
    tagline?: string;
    shortDescription: string;
    longDescription: string;
    slug: string;
    featuredInThemes: string[];
    isPublished: boolean;

    departureCity: string[];
    destination: {
        cityName: string;
        district?: string;
        stateName: string;
        countryName: string;
    };
    region?: string;
    themes: string[];
    collections?: string[];
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
        startDate?: string;
        endDate?: string;
    };
    mainImageUrl: string;
    galleryImages: string[];
    itinerary: {
        day: number;
        title: string;
        dayDescription?: string;
        events: {
            timeOfDay: string;
            title: string;
            description: string;
        }[];
    }[];

    inclusions: {
        accommodation: {
            hotelName: string;
            rating: string;
            roomType: string;
            imageUrl: string;
            amenities: string[];
        }[];
        transfers: {
            vehicleName: string;
            type: string;
            imageUrl: string;
            features: string[];
        }[];
        activities: {
            title: string;
            type: string;
            imageUrl: string;
            isRefundable: boolean;
            highlights: string[];
        }[];
        meals: string[];
    };
    highlights?: {
        id: string;
        title: string;
        description: string;
        iconType: string;
    }[];
    suggestedFlights?: {
        from?: string;
        to?: string;
        airline: string;
        flightNumber?: string;
        departureTime: string;
        arrivalTime: string;
        duration?: string;
        stops: number;
        logo?: string;
        date?: string;
    }[];
    tourInclusionsList?: string[];
    tourExclusionsList?: string[];
    needToKnow?: {
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
    cancellationPolicy?: {
        timeframe: string;
        fee: string;
        isHighlight?: boolean;
    }[];
    packageIncludes?: { id: string; label: string; icon: string }[];
    contactPhone?: string;
    visaAssistance?: {
        title: string;
        description: string;
        buttonText: string;
        imageUrl: string;
    };
    showOnHome?: boolean;
    homePageSortOrder?: number;
    themeSortOrder?: Map<string, number>;
    createdAt: Date;
    updatedAt: Date;
}

const PackageSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        tagline: { type: String },
        shortDescription: { type: String, required: true },
        longDescription: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        featuredInThemes: { type: [String], default: [] },
        isPublished: { type: Boolean, default: false },

        departureCity: [{ type: String }],
        destination: {
            cityName: { type: String, required: true },
            district: { type: String },
            stateName: { type: String, required: true },
            countryName: { type: String, required: true },
        },
        region: { type: String },
        themes: [{ type: String }],
        collections: [{ type: String, default: [] }],
        packageType: [{ type: String }],
        price: {
            originalAmount: { type: Number, required: true },
            discountedAmount: { type: Number, required: true },
            currency: { type: String, default: 'INR' },
            emiAmount: { type: Number },
        },
        duration: {
            days: { type: Number, required: true },
            nights: { type: Number, required: true },
            startDate: { type: String },
            endDate: { type: String },
        },
        mainImageUrl: { type: String, required: true },
        galleryImages: [{ type: String }],
        itinerary: [
            {
                day: { type: Number },
                title: { type: String },
                dayDescription: { type: String },
                events: [

                    {
                        timeOfDay: { type: String },
                        title: { type: String },
                        description: { type: String },
                    },
                ],
            },
        ],
        inclusions: {
            accommodation: [
                {
                    hotelName: { type: String },
                    rating: { type: String },
                    roomType: { type: String },
                    imageUrl: { type: String },
                    amenities: [{ type: String }],
                },
            ],
            transfers: [
                {
                    vehicleName: { type: String },
                    type: { type: String },
                    imageUrl: { type: String },
                    features: [{ type: String }],
                },
            ],
            activities: [
                {
                    title: { type: String },
                    type: { type: String },
                    imageUrl: { type: String },
                    isRefundable: { type: Boolean },
                    highlights: [{ type: String }],
                },
            ],
            meals: [{ type: String }],
        },
        highlights: [
            {
                id: { type: String },
                title: { type: String },
                description: { type: String },
                iconType: { type: String },
            },
        ],
        suggestedFlights: [
            {
                from: { type: String },
                to: { type: String },
                airline: { type: String },
                flightNumber: { type: String },
                departureTime: { type: String },
                arrivalTime: { type: String },
                duration: { type: String },
                stops: { type: Number },
                logo: { type: String },
                date: { type: String },
            },
        ],
        tourInclusionsList: [{ type: String }],
        tourExclusionsList: [{ type: String }],
        needToKnow: {
            documents: {
                international: { type: String },
                children: { type: String },
            },
            weather: {
                text: { type: String },
                url: { type: String },
            },
            hotelGuidelines: {
                checkIn: { type: String },
                checkOut: { type: String },
                notes: { type: String },
                childPolicy: { type: String },
            },
            additionalNotes: [{ type: String }],
        },
        cancellationPolicy: [
            {
                timeframe: { type: String },
                fee: { type: String },
                isHighlight: { type: Boolean },
            },
        ],
        packageIncludes: [
            { id: { type: String }, label: { type: String }, icon: { type: String } },
        ],
        contactPhone: { type: String },
        visaAssistance: {
            title: { type: String },
            description: { type: String },
            buttonText: { type: String },
            imageUrl: { type: String },
        },
        showOnHome: { type: Boolean, default: false },
        homePageSortOrder: { type: Number, default: 0 },
        themeSortOrder: { type: Map, of: Number, default: {} },
    },
    { timestamps: true }
);

export default mongoose.models.Package || mongoose.model<IPackage>('Package', PackageSchema);
