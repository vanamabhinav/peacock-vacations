"use client"

import Image from "next/image";
import Link from "next/link";
import { Icon,IconName } from "../../components/ui/Icon";
import CopyrightYear from "../../components/client/CopyrightYear";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

// Types
type LinkType = {
  linkHref: string;
  label: string;
};

type SectionType = {
  title: string;
  links: LinkType[];
};


// Reusable Components
function BrandLogo({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div className={`flex items-center ${isMobile ? "gap-[14px]" : "gap-1"}`}>
      <Icon
        name="peacock-vacations-logo"
        className={`${isMobile ? "w-[64.9px]" : "w-16"} h-11 text-ochre`}
      />
      <Icon
        name="peacock-vacations-word"
        className={`${isMobile ? "w-[117.1px]" : "w-30"} h-11 text-bluedianne`}
      />
    </div>
  );
}

function SocialLinks({ isMobile = false }: { isMobile?: boolean }) {
  const socialIcons = [
    { name: "twitter", width: isMobile ? 29 : 20, height: isMobile ? 21 : 20 },
    { name: "instagram", width: isMobile ? 21 : 20, height: isMobile ? 21 : 20 },
    { name: "youtube", width: isMobile ? 27 : 28, height: isMobile ? 21 : 20 },
    { name: "facebook", width: isMobile ? 21 : 20, height: isMobile ? 21 : 20 }
  ];

  return (
    <div className={`flex items-center ${isMobile ? "gap-2" : "gap-5"}`}>
      {socialIcons.map((social, idx) => (
        <div key={social.name} className="flex items-center">
          <Link href="#" aria-label={social.name}>
            <Icon 
              name={social.name as IconName}
              className={`transition-colors text-black hover:text-sandybrown`}
              style={{ 
                width: `${social.width}px`, 
                height: `${social.height}px`
              }}
            />
          </Link>
          {isMobile && idx < socialIcons.length - 1 && (
            <div className="w-[2.9px] h-[2.8px] bg-nevada rounded-full ml-2" />
          )}
        </div>
      ))}
    </div>
  );
}

function NewsletterForm({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div className={twMerge(
      "flex flex-col gap-4",
      isMobile ? "w-full" : ""
    )}>
      <p className={twMerge(
        "font-medium tracking-[-0.05em] text-nevada",
        isMobile 
          ? "text-[13px] text-center" 
          : "text-sm mt-4 mb-6"
      )}>
        Your Gateway to Real India Where Every Trip Tells a Story of Culture, 
        Traditions & Heritage.
      </p>

      <div className={`flex items-center ${isMobile ? "flex-col gap-2" : "gap-4"}`}>
        <input
          type="email"
          placeholder="Enter your email address"
          className={twMerge(
            "bg-white text-xs text-center focus:outline-none border-mercury focus:border-ochre rounded-lg",
            isMobile 
              ? "px-[59px] py-2 w-full border-mercury" 
              : "px-4 py-2 w-64"
          )}
        />
        <button
          type="submit"
          className={twMerge(
            "font-medium text-bigstone px-4 py-2 bg-marconi_cheese hover:bg-marconi_cheese/90 text-xs rounded-md transition-colors",
            isMobile
              ? "w-full text-[12px]"
              : ""
          )}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}


export default function Footer() {
  const LinkSectionData = [
    {
      title: "Top Cities in India",
      links: [
        { linkHref: "#", label: "Hotels in Goa" },
        { linkHref: "#", label: "Hotels in Jaipur" },
        { linkHref: "#", label: "Hotels in Delhi" },
        { linkHref: "#", label: "Hotels in Mumbai" },
        { linkHref: "#", label: "Hotels in Udaipur" },
        { linkHref: "#", label: "Hotels in Manali" },
        { linkHref: "#", label: "Hotels in Rishikesh" },
        { linkHref: "#", label: "Hotels in Kochi" },
        { linkHref: "#", label: "Hotels in Udaipur" },
        { linkHref: "#", label: "Hotels in Manali" },
        { linkHref: "#", label: "Hotels in Rishikesh" },
        { linkHref: "#", label: "Hotels in Kochi" },
        { linkHref: "#", label: "Hotels in Ooty" },
        { linkHref: "#", label: "Hotels in Pondicherry" },
        { linkHref: "#", label: "Hotels in Goa" },
        { linkHref: "#", label: "Hotels in Jaipur" },
      ],
    },
    {
      title: "Popular Resorts & Stays",
      links: [
        { linkHref: "#", label: "Luxury Resorts in Goa" },
        { linkHref: "#", label: "Beach Resorts in Kerala" },
        { linkHref: "#", label: "Heritage Hotels in Jaipur" },
        { linkHref: "#", label: "Mountain Retreats in Himach" },
        { linkHref: "#", label: "Nature Stays in Coorg" },
        { linkHref: "#", label: "Jungle Lodges in Bandipur" },
        { linkHref: "#", label: "Lake Resorts in Udaipur" },
        { linkHref: "#", label: "Spa Resorts in Rishikesh" },
        { linkHref: "#", label: "Boutique Hotels in Pondicher" },
        { linkHref: "#", label: "Treehouse Stays in Wayanad" },
        { linkHref: "#", label: "Beach Resorts in Kerala" },
        { linkHref: "#", label: "Lake Resorts in Udaipur" },
        { linkHref: "#", label: "Nature Stays in Coorg" },
        { linkHref: "#", label: "Jungle Lodges in Bandipur" },
        { linkHref: "#", label: "Lake Resorts in Udaipur" },
        { linkHref: "#", label: "Spa Resorts in Rishikesh" },
      ],
    },
    {
      title: "Travel by Season/Month",
      links: [
        { linkHref: "#", label: "Best Places to Visit in January" },
        { linkHref: "#", label: "Best Places to Visit in April" },
        { linkHref: "#", label: "Best Places to Visit in July" },
        { linkHref: "#", label: "Best Monsoon place in India" },
        { linkHref: "#", label: "Winter Destinations in India" },
        { linkHref: "#", label: "Summer Escapes in the Hills" },
        { linkHref: "#", label: "Honeymoon Spots by Season" },
        { linkHref: "#", label: "Long Weekend Getaways" },
        { linkHref: "#", label: "Offbeat Winter Travel Ideas" },
        { linkHref: "#", label: "Budget Trips for Every Month" },
        { linkHref: "#", label: "Best Places to Visit in January" },
        { linkHref: "#", label: "Best Places to Visit in April" },
        { linkHref: "#", label: "Best Places to Visit in July" },
        { linkHref: "#", label: "Winter Destinations in India" },
        { linkHref: "#", label: "Summer Escapes in the Hills" },
        { linkHref: "#", label: "Honeymoon Spots by Season" },
      ],
    },
  ];
  return (
 <footer className="flex flex-col gap-21 bg-firefly py-[62px] font-albertsans overflow-x-hidden ">
      <div className="mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl px-4 sm:px-0">
        <section aria-label="Partners">
          <PartnerSection
            heading="Partners"
            subheading="Co-creating authentic journeys across India."
            partnerImages={[
              "/images/Incredible_India_logo.png",
              "/images/toft_tigers_logo.png",
              "/images/columbus_vacations_logo.png",
              "/images/Toft_logo.png",
              "/images/Incredible_India_logo.png",
              "/images/toft_tigers_logo.png",
              "/images/columbus_vacations_logo.png",
              "/images/Toft_logo.png",
              "/images/Incredible_India_logo.png",
              "/images/toft_tigers_logo.png",
              "/images/Incredible_India_logo.png",
            ]}
          />
        </section>
        <nav className="divide-y-[1px] divide-nevada">
          {LinkSectionData.map(({ title, links }, idx) => (
            <LinkSection key={idx} title={title} links={links} />
          ))}
        </nav>

        <section aria-label="Newsletter" className="mt-8 sm:mt-16 md:20">
          <NewsLetterComponent />
        </section>
      </div>
    </footer>
  );
}

function splitImages(images: string[], maxPerRow: number = 6) {
  const total = images.length;
  if (total <= maxPerRow) return [images];
  const rows = Math.ceil(total / maxPerRow);
  const perRow = Math.floor(total / rows);
  const remainder = total % rows;

  const result: string[][] = [];
  let start = 0;
  for (let i = 0; i < rows; i++) {
    const count = perRow + (i < remainder ? 1 : 0);
    result.push(images.slice(start, start + count));
    start += count;
  }
  return result;
}

// Partner Section Component
function PartnerSection({
  heading,
  subheading,
  partnerImages,
}: {
  heading: string;
  subheading: string;
  partnerImages: string[];
}) {
  const rows = splitImages(partnerImages, 6);

  return (
    <div className="flex flex-col gap-16 w-full">
      <div>
        <h2 className="font-black text-sandybrown text-4xl text-center leading-normal">
          {heading}
        </h2>
        <p className="font-medium text-silver text-xl text-center leading-normal">
          {subheading}
        </p>
      </div>
      <div className="flex flex-col gap-8 pb-7 border-peachorange/28 border-b-[1px]">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex justify-center items-center gap-8">
            {row.map((imgUrl, idx) => (
              <div key={idx} className="flex flex-1 justify-center">
                <Image
                  src={imgUrl}
                  alt={`Logo of partner ${rowIdx * 6 + idx + 1}`}
                  width={120}
                  height={60}
                  title={`Logo of partner ${rowIdx * 6 + idx + 1}`}
                  loading="lazy"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
// Link Section Components
export function LinkSection({ title, links, isFooter = true }: {
  title: string;
  links: LinkType[];
  isFooter?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={twMerge(
      "flex flex-col mt-2 sm:mt-6 md:mt-12 font-albertsans", // Removed gap-7 and mb-2
      isFooter ? "border-peachorange/28" : "border-silver"
    )}>
      <div className="flex items-center justify-between mb-2"> 
        <h3 className={twMerge(
          "font-semibold leading-normal",
          "text-lg sm:text-xl md:text-2xl",
          "text-left sm:text-2xl",
          isFooter ? "text-rawsienna" : "text-william"
        )}>
          {title}
        </h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden flex items-center justify-center"
          aria-expanded={isOpen}
          aria-controls={`section-${title}`}
        >
          <Icon
            name="right-arrow"
            className={twMerge(
              "w-5 h-5 text-rawsienna transition-transform duration-200",
              isOpen ? "-rotate-90" : "rotate-90"
            )}
          />
        </button>
      </div>

      <div 
        id={`section-${title}`} 
        className={twMerge(
          "block sm:hidden ",
          !isOpen && "hidden"
        )}
      >
        <nav className="flex flex-col w-full gap-2 mb-6"> 
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.linkHref}
              className={twMerge(
                "w-full font-light text-base text-left leading-normal", // Changed text-xl to text-base
                isFooter ? "text-white" : "text-pizazz"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <nav className="hidden sm:grid gap-x-6 gap-y-2 grid-cols-4 grid-rows-auto mb-7 w-full">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.linkHref}
            className={twMerge(
              "w-full font-light text-xl text-left leading-normal",
              isFooter ? "text-white" : "text-pizazz"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function VerticalLinkSection({ title, links }: {
  title: string;
  links: LinkType[];
}) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-semibold text-bigstone text-base">{title}</h3>
      <div className="flex flex-col gap-3">
        {links.map(({ linkHref, label }, idx) => (
          <Link 
            key={idx} 
            href={linkHref} 
            className="text-nevada text-sm"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function NewsLetterComponent() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const linksData = [
    {
      title: "Company",
      links: [
        { label: "Careers", linkHref: "#" },
        { label: "Press", linkHref: "#" },
        { label: "Blog", linkHref: "#" },
        { label: "ContactUs", linkHref: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Travel Booking", linkHref: "#" },
        { label: "Hotel Aggregator", linkHref: "#" },
        { label: "Tour Packages", linkHref: "#" },
        { label: "Visa Assistance", linkHref: "#" },
        { label: "Corporate Travel", linkHref: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", linkHref: "#" },
        { label: "Terms & Conditions", linkHref: "#" },
        { label: "Cancellation Policy", linkHref: "#" },
        { label: "Privacy Policy", linkHref: "#" },
        { label: "FAQs", linkHref: "#" },
      ],
    },
  ];

  return (
    <>
    <div className="sm:hidden flex flex-col items-center bg-desertstorm rounded-[20px] p-[21px] w-full overflow-x-hidden">
        <BrandLogo isMobile />
        <NewsletterForm isMobile />
        
        {linksData.map((section) => (
        <div 
          key={section.title}
          className="w-full border-b border-silver py-2"
        >
          <button
            onClick={() => setOpenSection(
              openSection === section.title ? null : section.title
            )}
            className="w-full flex justify-between items-center"
          >
            <h3 className="text-[16px] font-semibold text-bigstone tracking-[-0.05em]">
              {section.title}
            </h3>
            <Icon
              name="right-arrow"
              className={`w-3 h-3 transition-transform duration-200 text-nevada
                ${openSection === section.title ? "-rotate-90" : "rotate-90"}`}
            />
          </button>
          
          {openSection === section.title && (
            <div className="flex flex-col gap-2 mt-3">
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.linkHref}
                  className="text-[14px] text-nevada tracking-[-0.05em] font-medium hover:text-sandybrown transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <SocialLinks isMobile />
      <p className="text-[12px] text-nevada tracking-[-0.05em]">
        © 2025 Peacock Vacations. All rights reserved.
      </p>
    </div>
      <div className="hidden sm:block bg-desertstorm py-11 pr-21 pl-12 rounded-4xl w-full">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between max-w-[300px]">
              <BrandLogo />
              <NewsletterForm />
            </div>

            <div className="flex gap-10">
              {linksData.map((link, idx) => (
                <VerticalLinkSection
                  key={idx}
                  title={link.title}
                  links={link.links}
                />
              ))}
            </div>
          </div>

          <hr className="border-silver" />

          <div className="flex justify-between w-full">
            <CopyrightYear />
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
}