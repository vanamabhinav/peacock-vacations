import { PackageData } from "@/types";

export async function fetchPackagesData(): Promise<PackageData[]> {
  const data = [
    {
      location: { icon: "westIndia", name: "West India" },
      image: "https://picsum.photos/300/200",
      title: "Goa Beach Getaway",
      description: "Beaches and Nightlife",
      url: "https://example.com/india",
      pricing: { original: "$52,097", discounted: "@38,590" },
      includes: [
        { icon: "resort", text: "Resort Stay" },
        { icon: "airport", text: "Airport Transfers" },
        { icon: "breakfast", text: "Breakfast" },
      ],
    },
    {
      location: { icon: "northIndia", name: "North India" },
      image: "https://picsum.photos/300/201",
      title: "Himalayan Adventure",
      description: "Mountains and Trekking",
      url: "https://example.com/himalayas",
      pricing: { original: "$45,000", discounted: "@34,999" },
      includes: [
        { icon: "resort", text: "Resort Stay" },
        { icon: "airport", text: "Airport Transfers" },
        { icon: "breakfast", text: "Breakfast" },
      ],
    },
    {
      location: { icon: "southIndia", name: "South India" },
      image: "https://picsum.photos/300/202",
      title: "Kerala Backwaters",
      description: "Houseboats and Nature",
      url: "https://example.com/kerala",
      pricing: { original: "$40,000", discounted: "@29,500" },
      includes: [
        { icon: "resort", text: "Resort Stay" },
        { icon: "airport", text: "Airport Transfers" },
        { icon: "breakfast", text: "Breakfast" },
      ],
    },
    {
      location: { icon: "eastIndia", name: "East India" },
      image: "https://picsum.photos/300/203",
      title: "Darjeeling Tea Trails",
      description: "Tea Gardens and Hills",
      url: "https://example.com/darjeeling",
      pricing: { original: "$38,000", discounted: "@27,800" },
      includes: [
        { icon: "resort", text: "Resort Stay" },
        { icon: "airport", text: "Airport Transfers" },
        { icon: "breakfast", text: "Breakfast" },
      ],
    },
    {
      location: { icon: "centralIndia", name: "Central India" },
      image: "https://picsum.photos/300/204",
      title: "Kanha Wildlife Safari",
      description: "Wildlife and Forests",
      url: "https://example.com/kanha",
      pricing: { original: "$42,500", discounted: "@31,200" },
      includes: [
        { icon: "resort", text: "Resort Stay" },
        { icon: "airport", text: "Airport Transfers" },
        { icon: "breakfast", text: "Breakfast" },
      ],
    },
    {
      location: { icon: "northEastIndia", name: "North East India" },
      image: "https://picsum.photos/300/205",
      title: "Meghalaya Living Roots",
      description: "Caves and Waterfalls",
      url: "https://example.com/meghalaya",
      pricing: { original: "$39,000", discounted: "@28,500" },
      includes: [
        { icon: "resort", text: "Resort Stay" },
        { icon: "airport", text: "Airport Transfers" },
        { icon: "breakfast", text: "Breakfast" },
      ],
    },
    {
      location: { icon: "islands", name: "Andaman & Nicobar" },
      image: "https://picsum.photos/300/206",
      title: "Andaman Island Escape",
      description: "Islands and Water Sports",
      url: "https://example.com/andaman",
      pricing: { original: "$55,000", discounted: "@41,900" },
      includes: [
        { icon: "resort", text: "Resort Stay" },
        { icon: "airport", text: "Airport Transfers" },
        { icon: "breakfast", text: "Breakfast" },
      ],
    },
  ];
  return new Promise((resolve) => resolve(data));
}
