"use client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "../ui/Icon";
import { useState } from "react";
import { cn } from "@/lib/cn";

export type City = {
  name: string;
  slug: string; // e.g., "india/himachal-pradesh/manali/ct"
};

export type State = {
  name: string;
  slug: string; // e.g., "india/himachal-pradesh/st"
  cities: City[];
};

export type Region = {
  name: string;
  slug: string; // e.g., "india/c"
  image?: string;
  avgTemp?: string;
  bestPicks?: string[];
  states: State[];
};

// TODO : Replace with db or api data or finalized data
const regionsData: Region[] = [
  {
    name: "North India",
    slug: "india/north-india/rg",
    image: "/images/north-india.png",
    avgTemp: "18°C – 21°C",
    bestPicks: ["Shimla", "Leh", "Varanasi"],
    states: [
      {
        name: "Delhi",
        slug: "india/delhi/st",
        cities: [
          { name: "New Delhi", slug: "india/delhi/new-delhi/ct" },
          { name: "Old Delhi", slug: "india/delhi/old-delhi/ct" },
          { name: "Connaught Place", slug: "india/delhi/connaught-place/ct" },
        ],
      },
      {
        name: "Himachal Pradesh",
        slug: "india/himachal-pradesh/st",
        cities: [
          {
            name: "Chandrataal",
            slug: "india/himachal-pradesh/chandrataal/ct",
          },
          { name: "Dalhousie", slug: "india/himachal-pradesh/dalhousie/ct" },
          {
            name: "Dharamshala",
            slug: "india/himachal-pradesh/dharamshala/ct",
          },
          { name: "Kaza", slug: "india/himachal-pradesh/kaza/ct" },
          { name: "Manali", slug: "india/himachal-pradesh/manali/ct" },
          { name: "Shimla", slug: "india/himachal-pradesh/shimla/ct" },
          {
            name: "Spiti Valley",
            slug: "india/himachal-pradesh/spiti-valley/ct",
          },
        ],
      },
      {
        name: "Kashmir",
        slug: "india/kashmir/st",
        cities: [
          { name: "Gulmarg", slug: "india/kashmir/gulmarg/ct" },
          { name: "Pahalgam", slug: "india/kashmir/pahalgam/ct" },
          { name: "Sonmarg", slug: "india/kashmir/sonmarg/ct" },
          { name: "Srinagar", slug: "india/kashmir/srinagar/ct" },
        ],
      },
      {
        name: "Leh-Ladakh",
        slug: "india/leh-ladakh/st",
        cities: [
          { name: "Kargil", slug: "india/leh-ladakh/kargil/ct" },
          { name: "Leh", slug: "india/leh-ladakh/leh/ct" },
          { name: "Nubra Valley", slug: "india/leh-ladakh/nubra-valley/ct" },
          { name: "Pangong Tso", slug: "india/leh-ladakh/pangong-tso/ct" },
          { name: "Turtuk", slug: "india/leh-ladakh/turtuk/ct" },
        ],
      },
      {
        name: "Punjab",
        slug: "india/punjab/st",
        cities: [
          { name: "Amritsar", slug: "india/punjab/amritsar/ct" },
          { name: "Ludhiana", slug: "india/punjab/ludhiana/ct" },
          { name: "Jalandhar", slug: "india/punjab/jalandhar/ct" },
          { name: "Pathankot", slug: "india/punjab/pathankot/ct" },
        ],
      },
      {
        name: "Haryana",
        slug: "india/haryana/st",
        cities: [
          { name: "Chandigarh", slug: "india/haryana/chandigarh/ct" },
          { name: "Kurukshetra", slug: "india/haryana/kurukshetra/ct" },
          { name: "Panipat", slug: "india/haryana/panipat/ct" },
          { name: "Gurgaon", slug: "india/haryana/gurgaon/ct" },
        ],
      },
      {
        name: "Uttarakhand",
        slug: "india/uttarakhand/st",
        cities: [
          {
            name: "Jim Corbett Park",
            slug: "india/uttarakhand/jim-corbett-park/ct",
          },
          { name: "Haridwar", slug: "india/uttarakhand/haridwar/ct" },
          { name: "Mussoorie", slug: "india/uttarakhand/mussoorie/ct" },
          { name: "Nainital", slug: "india/uttarakhand/nainital/ct" },
          { name: "Rishikesh", slug: "india/uttarakhand/rishikesh/ct" },
          {
            name: "Chardham Yatra",
            slug: "india/uttarakhand/chardham-yatra/ct",
          },
          { name: "Auli", slug: "india/uttarakhand/auli/ct" },
          { name: "Dehradun", slug: "india/uttarakhand/dehradun/ct" },
        ],
      },
      {
        name: "Uttar Pradesh",
        slug: "india/uttar-pradesh/st",
        cities: [
          { name: "Agra", slug: "india/uttar-pradesh/agra/ct" },
          { name: "Ayodhya", slug: "india/uttar-pradesh/ayodhya/ct" },
          {
            name: "Fatehpur Sikri",
            slug: "india/uttar-pradesh/fatehpur-sikri/ct",
          },
          { name: "Jhansi", slug: "india/uttar-pradesh/jhansi/ct" },
          { name: "Lucknow", slug: "india/uttar-pradesh/lucknow/ct" },
          { name: "Mathura", slug: "india/uttar-pradesh/mathura/ct" },
          { name: "Prayagraj", slug: "india/uttar-pradesh/prayagraj/ct" },
          { name: "Sarnath", slug: "india/uttar-pradesh/sarnath/ct" },
          { name: "Varanasi", slug: "india/uttar-pradesh/varanasi/ct" },
          { name: "Vrindavan", slug: "india/uttar-pradesh/vrindavan/ct" },
        ],
      },
      {
        name: "Rajasthan",
        slug: "india/rajasthan/st",
        cities: [
          { name: "Jaipur", slug: "india/rajasthan/jaipur/ct" },
          { name: "Jodhpur", slug: "india/rajasthan/jodhpur/ct" },
          { name: "Udaipur", slug: "india/rajasthan/udaipur/ct" },
          { name: "Jaisalmer", slug: "india/rajasthan/jaisalmer/ct" },
          { name: "Pushkar", slug: "india/rajasthan/pushkar/ct" },
          { name: "Mount Abu", slug: "india/rajasthan/mount-abu/ct" },
        ],
      },
    ],
  },
  {
    name: "South India",
    slug: "india/south-india/rg",
    image: "/images/south-india.png",
    avgTemp: "25°C – 35°C",
    bestPicks: ["Ooty", "Munnar", "Hampi"],
    states: [
      {
        name: "Tamil Nadu",
        slug: "india/tamil-nadu/st",
        cities: [
          { name: "Chennai", slug: "india/tamil-nadu/chennai/ct" },
          { name: "Madurai", slug: "india/tamil-nadu/madurai/ct" },
          { name: "Ooty", slug: "india/tamil-nadu/ooty/ct" },
          { name: "Rameswaram", slug: "india/tamil-nadu/rameswaram/ct" },
          { name: "Kodaikanal", slug: "india/tamil-nadu/kodaikanal/ct" },
          { name: "Kanyakumari", slug: "india/tamil-nadu/kanyakumari/ct" },
          { name: "Thanjavur", slug: "india/tamil-nadu/thanjavur/ct" },
        ],
      },
      {
        name: "Kerala",
        slug: "india/kerala/st",
        cities: [
          { name: "Alleppey", slug: "india/kerala/alleppey/ct" },
          { name: "Kochi", slug: "india/kerala/kochi/ct" },
          { name: "Munnar", slug: "india/kerala/munnar/ct" },
          { name: "Wayanad", slug: "india/kerala/wayanad/ct" },
          { name: "Thekkady", slug: "india/kerala/thekkady/ct" },
          { name: "Kovalam", slug: "india/kerala/kovalam/ct" },
          { name: "Kumarakom", slug: "india/kerala/kumarakom/ct" },
          { name: "Varkala", slug: "india/kerala/varkala/ct" },
        ],
      },
      {
        name: "Karnataka",
        slug: "india/karnataka/st",
        cities: [
          { name: "Bengaluru", slug: "india/karnataka/bengaluru/ct" },
          { name: "Coorg", slug: "india/karnataka/coorg/ct" },
          { name: "Hampi", slug: "india/karnataka/hampi/ct" },
          { name: "Mysore", slug: "india/karnataka/mysore/ct" },
          { name: "Chikmagalur", slug: "india/karnataka/chikmagalur/ct" },
          { name: "Badami", slug: "india/karnataka/badami/ct" },
          { name: "Gokarna", slug: "india/karnataka/gokarna/ct" },
        ],
      },
      {
        name: "Andhra Pradesh",
        slug: "india/andhra-pradesh/st",
        cities: [
          { name: "Amaravati", slug: "india/andhra-pradesh/amaravati/ct" },
          { name: "Vijayawada", slug: "india/andhra-pradesh/vijayawada/ct" },
          { name: "Tirupati", slug: "india/andhra-pradesh/tirupati/ct" },
          {
            name: "Visakhapatnam",
            slug: "india/andhra-pradesh/visakhapatnam/ct",
          },
          {
            name: "Araku Valley",
            slug: "india/andhra-pradesh/araku-valley/ct",
          },
        ],
      },
      {
        name: "Telangana",
        slug: "india/telangana/st",
        cities: [
          { name: "Hyderabad", slug: "india/telangana/hyderabad/ct" },
          { name: "Warangal", slug: "india/telangana/warangal/ct" },
          { name: "Khammam", slug: "india/telangana/khammam/ct" },
          { name: "Nizamabad", slug: "india/telangana/nizamabad/ct" },
        ],
      },
      {
        name: "Puducherry",
        slug: "india/puducherry/st",
        cities: [
          { name: "Pondicherry", slug: "india/puducherry/pondicherry/ct" },
          { name: "Auroville", slug: "india/puducherry/auroville/ct" },
        ],
      },
    ],
  },
  {
    name: "East India",
    slug: "india/east-india/rg",
    image: "/images/east-india.png",
    avgTemp: "20°C – 30°C",
    bestPicks: ["Darjeeling", "Kolkata", "Puri"],
    states: [
      {
        name: "West Bengal",
        slug: "india/west-bengal/st",
        cities: [
          { name: "Kolkata", slug: "india/west-bengal/kolkata/ct" },
          { name: "Darjeeling", slug: "india/west-bengal/darjeeling/ct" },
          { name: "Sundarbans", slug: "india/west-bengal/sundarbans/ct" },
          { name: "Kalimpong", slug: "india/west-bengal/kalimpong/ct" },
          { name: "Digha", slug: "india/west-bengal/digha/ct" },
          { name: "Mandarmani", slug: "india/west-bengal/mandarmani/ct" },
          { name: "Shantiniketan", slug: "india/west-bengal/shantiniketan/ct" },
        ],
      },
      {
        name: "Odisha",
        slug: "india/odisha/st",
        cities: [
          { name: "Bhubaneswar", slug: "india/odisha/bhubaneswar/ct" },
          { name: "Puri", slug: "india/odisha/puri/ct" },
          { name: "Konark", slug: "india/odisha/konark/ct" },
          { name: "Cuttack", slug: "india/odisha/cuttack/ct" },
          { name: "Chilika Lake", slug: "india/odisha/chilika-lake/ct" },
          { name: "Gopalpur", slug: "india/odisha/gopalpur/ct" },
        ],
      },
      {
        name: "Bihar",
        slug: "india/bihar/st",
        cities: [
          { name: "Bodh Gaya", slug: "india/bihar/bodh-gaya/ct" },
          { name: "Patna", slug: "india/bihar/patna/ct" },
          { name: "Nalanda", slug: "india/bihar/nalanda/ct" },
          { name: "Rajgir", slug: "india/bihar/rajgir/ct" },
          { name: "Vaishali", slug: "india/bihar/vaishali/ct" },
        ],
      },
      {
        name: "Jharkhand",
        slug: "india/jharkhand/st",
        cities: [
          { name: "Ranchi", slug: "india/jharkhand/ranchi/ct" },
          { name: "Jamshedpur", slug: "india/jharkhand/jamshedpur/ct" },
          { name: "Deoghar", slug: "india/jharkhand/deoghar/ct" },
          { name: "Hazaribagh", slug: "india/jharkhand/hazaribagh/ct" },
          { name: "Bokaro", slug: "india/jharkhand/bokaro/ct" },
        ],
      },
    ],
  },
  {
    name: "West India",
    slug: "india/west-india/rg",
    image: "/images/west-india.png",
    avgTemp: "22°C – 35°C",
    bestPicks: ["Jaipur", "Mumbai", "Goa"],
    states: [
      {
        name: "Maharashtra",
        slug: "india/maharashtra/st",
        cities: [
          { name: "Mumbai", slug: "india/maharashtra/mumbai/ct" },
          { name: "Pune", slug: "india/maharashtra/pune/ct" },
          { name: "Nashik", slug: "india/maharashtra/nashik/ct" },
          { name: "Aurangabad", slug: "india/maharashtra/aurangabad/ct" },
          { name: "Lonavala", slug: "india/maharashtra/lonavala/ct" },
          { name: "Mahabaleshwar", slug: "india/maharashtra/mahabaleshwar/ct" },
          { name: "Ajanta Caves", slug: "india/maharashtra/ajanta-caves/ct" },
          { name: "Ellora Caves", slug: "india/maharashtra/ellora-caves/ct" },
        ],
      },
      {
        name: "Gujarat",
        slug: "india/gujarat/st",
        cities: [
          { name: "Ahmedabad", slug: "india/gujarat/ahmedabad/ct" },
          {
            name: "Gir National Park",
            slug: "india/gujarat/gir-national-park/ct",
          },
          { name: "Dwarka", slug: "india/gujarat/dwarka/ct" },
          { name: "Somnath", slug: "india/gujarat/somnath/ct" },
          { name: "Rann of Kutch", slug: "india/gujarat/rann-of-kutch/ct" },
          { name: "Statue of Unity", slug: "india/gujarat/statue-of-unity/ct" },
          { name: "Surat", slug: "india/gujarat/surat/ct" },
        ],
      },
      {
        name: "Goa",
        slug: "india/goa/st",
        cities: [
          { name: "Panaji", slug: "india/goa/panaji/ct" },
          { name: "Calangute", slug: "india/goa/calangute/ct" },
          { name: "Baga", slug: "india/goa/baga/ct" },
          { name: "Anjuna", slug: "india/goa/anjuna/ct" },
          { name: "Arambol", slug: "india/goa/arambol/ct" },
          { name: "Vasco da Gama", slug: "india/goa/vasco-da-gama/ct" },
          { name: "Old Goa", slug: "india/goa/old-goa/ct" },
        ],
      },
      {
        name: "Madhya Pradesh",
        slug: "india/madhya-pradesh/st",
        cities: [
          { name: "Bhopal", slug: "india/madhya-pradesh/bhopal/ct" },
          { name: "Indore", slug: "india/madhya-pradesh/indore/ct" },
          { name: "Khajuraho", slug: "india/madhya-pradesh/khajuraho/ct" },
          { name: "Ujjain", slug: "india/madhya-pradesh/ujjain/ct" },
          { name: "Gwalior", slug: "india/madhya-pradesh/gwalior/ct" },
          { name: "Sanchi", slug: "india/madhya-pradesh/sanchi/ct" },
          { name: "Pachmarhi", slug: "india/madhya-pradesh/pachmarhi/ct" },
        ],
      },
    ],
  },
  {
    name: "North East India",
    slug: "india/north-east-india/rg",
    image: "/images/north-east-india.png",
    avgTemp: "15°C – 25°C",
    bestPicks: ["Shillong", "Gangtok", "Tawang"],
    states: [
      {
        name: "Assam",
        slug: "india/assam/st",
        cities: [
          { name: "Guwahati", slug: "india/assam/guwahati/ct" },
          {
            name: "Kaziranga National Park",
            slug: "india/assam/kaziranga-national-park/ct",
          },
          { name: "Majuli", slug: "india/assam/majuli/ct" },
          { name: "Sivasagar", slug: "india/assam/sivasagar/ct" },
          { name: "Jorhat", slug: "india/assam/jorhat/ct" },
          { name: "Tezpur", slug: "india/assam/tezpur/ct" },
        ],
      },
      {
        name: "Meghalaya",
        slug: "india/meghalaya/st",
        cities: [
          { name: "Shillong", slug: "india/meghalaya/shillong/ct" },
          { name: "Cherrapunji", slug: "india/meghalaya/cherrapunji/ct" },
          { name: "Mawlynnong", slug: "india/meghalaya/mawlynnong/ct" },
          { name: "Dawki", slug: "india/meghalaya/dawki/ct" },
          { name: "Jowai", slug: "india/meghalaya/jowai/ct" },
        ],
      },
      {
        name: "Arunachal Pradesh",
        slug: "india/arunachal-pradesh/st",
        cities: [
          { name: "Tawang", slug: "india/arunachal-pradesh/tawang/ct" },
          { name: "Ziro", slug: "india/arunachal-pradesh/ziro/ct" },
          { name: "Bomdila", slug: "india/arunachal-pradesh/bomdila/ct" },
          { name: "Itanagar", slug: "india/arunachal-pradesh/itanagar/ct" },
          { name: "Pasighat", slug: "india/arunachal-pradesh/pasighat/ct" },
        ],
      },
      {
        name: "Sikkim",
        slug: "india/sikkim/st",
        cities: [
          { name: "Gangtok", slug: "india/sikkim/gangtok/ct" },
          { name: "Lachung", slug: "india/sikkim/lachung/ct" },
          { name: "Pelling", slug: "india/sikkim/pelling/ct" },
          { name: "Yumthang Valley", slug: "india/sikkim/yumthang-valley/ct" },
          { name: "Nathu La Pass", slug: "india/sikkim/nathu-la-pass/ct" },
        ],
      },
      {
        name: "Nagaland",
        slug: "india/nagaland/st",
        cities: [
          { name: "Kohima", slug: "india/nagaland/kohima/ct" },
          { name: "Dimapur", slug: "india/nagaland/dimapur/ct" },
          { name: "Mon", slug: "india/nagaland/mon/ct" },
          { name: "Wokha", slug: "india/nagaland/wokha/ct" },
        ],
      },
      {
        name: "Manipur",
        slug: "india/manipur/st",
        cities: [
          { name: "Imphal", slug: "india/manipur/imphal/ct" },
          { name: "Loktak Lake", slug: "india/manipur/loktak-lake/ct" },
          { name: "Keibul Lamjao", slug: "india/manipur/keibul-lamjao/ct" },
          { name: "Ukhrul", slug: "india/manipur/ukhrul/ct" },
        ],
      },
      {
        name: "Mizoram",
        slug: "india/mizoram/st",
        cities: [
          { name: "Aizawl", slug: "india/mizoram/aizawl/ct" },
          { name: "Champhai", slug: "india/mizoram/champhai/ct" },
          { name: "Lunglei", slug: "india/mizoram/lunglei/ct" },
        ],
      },
      {
        name: "Tripura",
        slug: "india/tripura/st",
        cities: [
          { name: "Agartala", slug: "india/tripura/agartala/ct" },
          { name: "Udaipur", slug: "india/tripura/udaipur/ct" },
          { name: "Kailashahar", slug: "india/tripura/kailashahar/ct" },
        ],
      },
    ],
  },
  {
    name: "Central India",
    slug: "india/central-india/rg",
    image: "/images/central-india.png",
    avgTemp: "20°C – 40°C",
    bestPicks: ["Khajuraho", "Kanha", "Raipur"],
    states: [
      {
        name: "Madhya Pradesh",
        slug: "india/madhya-pradesh/st",
        cities: [
          { name: "Bhopal", slug: "india/madhya-pradesh/bhopal/ct" },
          { name: "Indore", slug: "india/madhya-pradesh/indore/ct" },
          { name: "Khajuraho", slug: "india/madhya-pradesh/khajuraho/ct" },
          { name: "Ujjain", slug: "india/madhya-pradesh/ujjain/ct" },
          { name: "Gwalior", slug: "india/madhya-pradesh/gwalior/ct" },
          { name: "Sanchi", slug: "india/madhya-pradesh/sanchi/ct" },
          {
            name: "Kanha National Park",
            slug: "india/madhya-pradesh/kanha-national-park/ct",
          },
          { name: "Bandhavgarh", slug: "india/madhya-pradesh/bandhavgarh/ct" },
          { name: "Pachmarhi", slug: "india/madhya-pradesh/pachmarhi/ct" },
        ],
      },
      {
        name: "Chhattisgarh",
        slug: "india/chhattisgarh/st",
        cities: [
          { name: "Raipur", slug: "india/chhattisgarh/raipur/ct" },
          { name: "Jagdalpur", slug: "india/chhattisgarh/jagdalpur/ct" },
          { name: "Bilaspur", slug: "india/chhattisgarh/bilaspur/ct" },
          { name: "Korba", slug: "india/chhattisgarh/korba/ct" },
          { name: "Bastar", slug: "india/chhattisgarh/bastar/ct" },
        ],
      },
    ],
  },
];

// Navigation items configuration
const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "#", hasDropdown: true },
  { name: "Blog", href: "/blog" },
  { name: "Events & Festivals", href: "/events-festivals" },
  { name: "About Us", href: "/about" },
  { name: "FAQs", href: "/faqs" },
];

export function DropDownNavbar({ className = "" }: { className?: string }) {
  const [isDestVisible, setIsDestVisible] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<Region>(regionsData[0]);

  const handleRegionHover = (region: Region) => {
    setSelectedRegion(region);
  };

  const renderNavigationItem = ({
    name,
    href,
    hasDropdown,
  }: (typeof navigationItems)[0]) => (
    <div
      key={name}
      className="sm:relative"
      onMouseEnter={() => hasDropdown && setIsDestVisible(true)}
      onMouseLeave={() => hasDropdown && setIsDestVisible(false)}
    >
      <Link
        href={href}
        className="flex items-center gap-1 hover:bg-white px-[22px] h-[36px] text-bigstone transition-colors cursor-pointer"
      >
        {name}
        {hasDropdown && (
          <Icon
            name="right-arrow"
            className={`transition-transform duration-200 ${
              isDestVisible ? "-rotate-90" : "rotate-90"
            }`}
          />
        )}
      </Link>
    </div>
  );

  const renderRegionButton = (region: Region) => (
    <button
      key={region.name}
      className={`w-full flex items-center gap-2 px-4 py-2 text-left transition-colors duration-150 ${
        region.name === selectedRegion.name
          ? "bg-[#fffaf3] border-y border-l border-[#ffc77e] text-[#ff9338] font-semibold"
          : "hover:bg-[#fff2e5] text-black"
      }`}
      onMouseEnter={() => handleRegionHover(region)}
    >
      <span className="capitalize text-nowrap">{region.name}</span>
      <Icon name="right-arrow" width={5} height={10} />
    </button>
  );

  const renderStateSection = (state: State) => (
    <div
      key={state.name}
      className="flex flex-col justify-start items-start gap-1"
    >
      <div className="flex flex-row justify-start items-center self-stretch p-1 border-[#b6c9cd] border-b w-[80%] h-full">
        <Link
          href={`/${state.slug}`}
          className="relative font-medium text-[#221121] hover:text-[#f1aa4c] text-sm capitalize transition-colors"
        >
          {state.name}
        </Link>
      </div>
      {state.cities.length > 0 && (
        <div className="flex flex-col justify-start items-start gap-0.5 px-3 font-['DM_Sans'] text-[#5e5e5e] text-[13px]">
          {state.cities.map((city) => (
            <Link
              key={city.name}
              href={`/${city.slug}`}
              className="relative self-stretch py-0.5 hover:text-[#ff9338] capitalize transition-colors cursor-pointer"
            >
              {city.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav
      className={`flex flex-col items-start text-left text-sm text-black font-albertsans font-medium capitalize bg-marconi_cheese z-[95] ${className}`}
      aria-label="Main Navigation"
    >
      {/* Top Nav Links */}
      <div className="flex flex-row justify-center items-center mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl h-9">
        {navigationItems.map(renderNavigationItem)}
      </div>

      {/* Dropdown Panel with Animation */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden z-[140] transition-all duration-300 ease-in-out ${
          isDestVisible ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="flex flex-col bg-[#fffaf3] w-full h-[90vh]"
          onMouseEnter={() => setIsDestVisible(true)}
          onMouseLeave={() => setIsDestVisible(false)}
        >
          {/* Header Info - Fixed height */}
          <div className="flex flex-shrink-0 justify-center gap-14 px-4 py-4 border-peachorange border-b font-medium text-[17px] text-black">
            <div className="flex items-start gap-2.5 text-emperor">
              <span>{selectedRegion.name}:</span>
              <span className="font-normal text-black">Avg Temp</span>
              <span>{selectedRegion.avgTemp ?? "N/A"}</span>
              <Icon name="weather-sunny" className="w-5 h-5" />
            </div>

            <div className="flex items-start gap-2.5 text-emperor">
              <span>Best Picks:</span>
              <span className="text-black">
                {selectedRegion.bestPicks?.join(", ") ?? "—"}
              </span>
            </div>
          </div>

          {/* Main content area - Takes remaining height */}
          <div className="flex-1 grid grid-cols-12 min-h-0">
            {/* Region Switcher */}
            <div className="relative flex col-span-5 bg-white border-[#ffc77e] border-r">
              {/* Region Image */}
              <div className="relative flex justify-center items-center p-4 w-full h-full">
                <div className="relative p-4 w-full h-full">
                  <Image
                    src={selectedRegion.image ?? "/images/east-india.png"}
                    alt={`${selectedRegion.name} image`}
                    fill
                    className="rounded-lg object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={false}
                  />
                </div>
              </div>

              {/* Region List */}
              <div className="flex flex-col items-start bg-white mt-8 rounded-sm w-60 overflow-y-auto text-black text-sm">
                {regionsData.map(renderRegionButton)}

                {/* Explore All */}
                <Link
                  href="/india/c"
                  className="flex items-center gap-2 hover:bg-[#fffaf3] mt-2 px-4 py-2 text-[#5e5e5e] hover:text-[#221121] text-sm transition-colors"
                >
                  <Icon name="search" width={16} height={16} />
                  <span className="capitalize">Explore All</span>
                </Link>
              </div>
            </div>

            {/* States & Cities area */}
            <div className="flex flex-col col-span-7 bg-[#fffaf3] border-[#ffc77e] border-l overflow-hidden">
              {/* Region Title - Fixed */}
              <div className="flex flex-row flex-shrink-0 justify-start items-center gap-1.5 p-6 pb-4 text-[#f1aa4c]">
                <Link
                  href={`/${selectedRegion.slug}`}
                  className="relative font-medium hover:text-[#ff6600] capitalize transition-colors"
                >
                  Explore {selectedRegion.name}
                </Link>
                <Icon name="right-arrow" width={5} height={10} />
              </div>

              {/* States content - Scrollable */}
              <div className="flex-1 px-6 pb-6 overflow-y-auto">
                <div className="gap-4 space-y-2 columns-4">
                  {selectedRegion.states
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((state) => (
                      <div key={state.name} className="mb-4 break-inside-avoid">
                        {renderStateSection(state)}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"main" | "regions" | "states" | "cities">("main");
  const [expandedRegionName, setExpandedRegionName] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedState, setSelectedState] = useState<State | null>(null);

  // Track which state's cities are expanded
  const [expandedState, setExpandedState] = useState<string | null>(null);

  // Open regions accordion
  const openRegions = () => {
    setCurrentView("regions");
    setExpandedRegionName(null);
    setSelectedRegion(null);
    setSelectedState(null);
  };

  // Toggle region accordion
  const toggleRegionAccordion = (regionName: string) => {
    setExpandedRegionName(prev => (prev === regionName ? null : regionName));
  };

  // Select a region to view its states
  const selectRegion = (region: Region) => {
    setSelectedRegion(region);
    setCurrentView("states");
    setSelectedState(null);
    setExpandedState(null); // Reset expanded state when navigating to states view
  };

  // Toggle state accordion (expand/collapse cities)
  const toggleStateAccordion = (stateName: string) => {
    setExpandedState(prev => (prev === stateName ? null : stateName));
  };

  // Back to Regions
  const backToRegions = () => {
    setCurrentView("regions");
    setSelectedState(null);
    setExpandedState(null); // Reset expanded state when going back to regions
  };

  // Back to Main
  const backToMain = () => {
    setCurrentView("main");
    setSelectedRegion(null);
    setSelectedState(null);
    setExpandedState(null); // Reset expanded state when going back to main
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className="block sm:hidden p-4"
        aria-label="Open menu"
      >
        <Icon name={isOpen ? "cross" : "hamburger-menu"} className={cn("w-6 text-white", isOpen ? "h-4" : "h-6")} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed top-20 inset-0 bg-black/50 z-[150] sm:hidden">
          <div className="absolute right-0 top-0 h-full w-full bg-white transition-transform duration-300 transform">
            <div className="h-[calc(100%-72px)] overflow-y-auto p-4">
              {/* Main Menu */}
              {currentView === "main" && (
                <div className="flex flex-col">
                  {navigationItems.map(item => (
                    <div key={item.name} className="border-b border-mercury">
                      {item.name === "Destinations" ? (
                        <button onClick={openRegions} className="flex items-center justify-between w-full p-4 text-bigstone">
                          {item.name}
                          <Icon name="right-arrow" width={16} height={16} />
                        </button>
                      ) : item.hasDropdown ? (
                        <button className="flex items-center justify-between w-full p-4 text-bigstone">
                          {item.name}
                          <Icon name="right-arrow" width={16} height={16} />
                        </button>
                      ) : (
                        <Link href={item.href} onClick={() => setIsOpen(false)} className="block p-4 text-bigstone">
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Regions Accordion List */}
              {currentView === "regions" && (
                <div>
                  <button onClick={backToMain} className="flex items-center gap-2 mb-3 text-sandybrown">
                    <Icon name="right-arrow" width={16} height={16} className="rotate-180" />
                    <span>Back to Menu</span>
                  </button>
                  <div className="flex flex-col border-t-[1px] border-mercury">
                    {regionsData.map(region => (
                      <div key={region.name} className="border-b border-mercury">
                        <button
                          onClick={() => selectRegion(region)}
                          className="flex items-center justify-between text-nevada hover:text-sandybrown transition-colors w-full p-4"
                        >
                          <span>{region.name}</span>
                          <Icon name={"right-arrow"} width={16} height={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* States Accordion View */}
              {currentView === "states" && selectedRegion && (
                <div>
                  <button onClick={backToRegions} className="flex items-center gap-2 mb-3 text-sandybrown">
                    <Icon name="right-arrow" width={16} height={16} className="rotate-180" />
                    <span>Back to Destinations</span>
                  </button>

                  <div className="flex flex-col border-t-[1px] gap-2 px-4 py-3 mb-2 border-b border-peachorange font-medium text-[15px] text-black">
                    <div className="flex items-center gap-1 text-emperor">
                      <span className="font-semibold">{selectedRegion.name}:</span>
                      <span className="font-normal text-black">Avg Temp</span>
                      <span>{selectedRegion.avgTemp ?? "N/A"}</span>
                      <Icon name="weather-sunny" className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-1 text-emperor">
                      <span className="font-semibold">Best Picks:</span>
                      <span className="text-black">{selectedRegion.bestPicks?.join(", ") ?? "—"}</span>
                    </div>
                  </div>

                  {/* States List with Expandable Cities Accordion */}
                  <div className="flex flex-col">
                    {selectedRegion.states.map(state => (
                      <div key={state.slug} className="border-b border-mercury">
                        <button
                          onClick={() => toggleStateAccordion(state.name)}
                          className="flex items-center justify-between w-full p-2 text-nevada hover:text-sandybrown transition-colors"
                        >
                          <span>{state.name}</span>
                          <Icon
                            name="right-arrow"
                            width={16}
                            height={16}
                            className={cn("transition-transform duration-200", expandedState === state.name ? "rotate-90" : "rotate-0")}
                          />
                        </button>

                        {expandedState === state.name && (
                          <div className="p-2 pl-4 bg-[#f9f9f9] flex flex-col gap-1">
                            {state.cities.map(city => (
                              <Link key={city.slug} href={`/${city.slug}`} className="text-sm text-gray font-normal hover:text-sandybrown transition-colors" onClick={() => setIsOpen(false)}>
                                  <span>{city.name}</span>
                              </Link>
                      
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
