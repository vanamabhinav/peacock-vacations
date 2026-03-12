"use server";

export interface LinkSectionType {
  title: string;
  links: { label: string; linkHref: string }[];
  isFooter: boolean;
}

export async function fetchPlpSeoFooterAction(): Promise<LinkSectionType[]> {
  // Currently mock data, to be replaced with DB-based logic
  const mockFooterData: LinkSectionType[] = [
    {
      title: "Popular Resorts & Stays",
      links: [
        { label: "Luxury Resorts in Goa", linkHref: "/luxury-resorts-in-goa" },
        { label: "Nature Stays in Coorg", linkHref: "/nature-stays-in-coorg" },
        {
          label: "Boutique Hotels in Pondicherry",
          linkHref: "/boutique-hotels-in-pondicherry",
        },
        {
          label: "Beach Resorts in Kerala",
          linkHref: "/beach-resorts-in-kerala",
        },
        {
          label: "Jungle Lodges in Bandipur",
          linkHref: "/jungle-lodges-in-bandipur",
        },
        {
          label: "Treehouse Stays in Wayanad",
          linkHref: "/treehouse-stays-in-wayanad",
        },
        {
          label: "Heritage Hotels in Jaipur",
          linkHref: "/heritage-hotels-in-jaipur",
        },
        {
          label: "Lake Resorts in Udaipur",
          linkHref: "/lake-resorts-in-udaipur",
        },
        {
          label: "Mountain Retreats in Himachal",
          linkHref: "/mountain-retreats-in-himachal",
        },
        {
          label: "Spa Resorts in Rishikesh",
          linkHref: "/spa-resorts-in-rishikesh",
        },
        {
          label: "Desert Camps in Jaisalmer",
          linkHref: "/desert-camps-in-jaisalmer",
        },
        {
          label: "Eco Resorts in Munnar",
          linkHref: "/eco-resorts-in-munnar",
        },
      ],
      isFooter: false,
    },
    {
      title: "Travel to Goa",
      links: [
        {
          label: "Best Places to Visit in January",
          linkHref: "/best-places-to-visit-in-january",
        },
        {
          label: "Winter Destinations in India",
          linkHref: "/winter-destinations-in-india",
        },
        {
          label: "Offbeat Winter Travel Ideas",
          linkHref: "/offbeat-winter-travel-ideas",
        },
        {
          label: "Best Places to Visit in July",
          linkHref: "/best-places-to-visit-in-july",
        },
        {
          label: "Best Places to Visit in April",
          linkHref: "/best-places-to-visit-in-april",
        },
        {
          label: "Summer Escapes in the Hills",
          linkHref: "/summer-escapes-in-the-hills",
        },
        {
          label: "Budget Trips for Every Month",
          linkHref: "/budget-trips-for-every-month",
        },
        {
          label: "Honeymoon Spots by Season",
          linkHref: "/honeymoon-spots-by-season",
        },
        {
          label: "Best Monsoon Place in India",
          linkHref: "/best-monsoon-place-in-india",
        },
        { label: "Long Weekend Getaways", linkHref: "/long-weekend-getaways" },
        {
          label: "Family-Friendly Goa Activities",
          linkHref: "/family-friendly-goa-activities",
        },
        {
          label: "Adventure Sports in Goa",
          linkHref: "/adventure-sports-in-goa",
        },
      ],
      isFooter: false,
    },
  ];

  return mockFooterData;
}
