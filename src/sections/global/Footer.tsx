import Image from "next/image";
import Link from "next/link";
import { Icon } from "../../components/ui/Icon";
import CopyrightYear from "../../components/client/CopyrightYear";
import { twMerge } from "tailwind-merge";
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
    <footer
      className="flex flex-col gap-21 bg-firefly py-[62px] font-albertsans"
      aria-label="Site Footer"
    >
      <div className="mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
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

        <nav
          aria-label="Footer Navigation"
          className="divide-y-[1px] divide-nevada"
        >
          {LinkSectionData.map(({ title, links }, idx) => {
            return <LinkSection key={idx} title={title} links={links} />;
          })}
        </nav>

        <section aria-label="Newsletter" className="mt-20">
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
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export type LinkSectionType = {
  title: string;
  links: {
    linkHref: string;
    label: string;
  }[];
  isFooter?: boolean;
};
export function LinkSection({
  title,
  links,
  isFooter = true,
}: LinkSectionType) {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-7 mt-12 mb-2 font-albertsans",
        isFooter ? "border-peachorange/28" : "border-silver"
      )}
    >
      <h3
        className={twMerge(
          "font-semibold text-2xl leading-normal",
          isFooter ? "text-rawsienna" : "text-william"
        )}
      >
        {title}
      </h3>

      <nav className="gap-x-6 gap-y-2 grid grid-cols-4 grid-rows-auto mb-7 w-full">
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

function VerticalLinkSection({
  title,
  links,
}: {
  title: string;
  links: {
    linkHref: string;
    label: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-semibold text-bigstone text-base">{title}</h3>
      <div className="flex flex-col gap-3">
        {links.map(({ linkHref, label }, idx) => {
          return (
            <Link key={idx} href={linkHref} className="text-nevada text-sm">
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function NewsLetterComponent() {
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
    <div className="bg-desertstorm py-11 pr-21 pl-12 rounded-4xl w-full">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between max-w-[300px]">
            {/* Logo */}
            <div className="flex gap-1">
              <Icon
                name="peacock-vacations-logo"
                className="w-16 h-11 text-ochre"
              />
              <Icon
                name="peacock-vacations-word"
                className="w-30 h-11 text-bluedianne"
              />
            </div>

            {/* Newsletter subscribe */}
            <div className="flex flex-col gap-4">
              <p className="mt-4 mb-6 font-medium text-nevada text-sm">
                Your Gateway to Real India Where Every Trip Tells a Story of
                Culture, Traditions & Heritage.
              </p>

              {/* Form */}
              <form className="flex items-center gap-4">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-white px-4 py-2 border border-mercury focus:border-ochre rounded-lg focus:outline-none w-64 text-#B4B4B4 text-xs"
                  required
                />
                <button
                  type="submit"
                  className="bg-marconi_cheese hover:bg-marconi_cheese/90 px-4 py-2 rounded-md font-semibold text-bigstone text-xs transition-colors ap-[10px]"
                  title="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          {/* Links Area */}
          <div className="flex gap-10">
            {linksData.map((link, idx) => {
              return (
                <VerticalLinkSection
                  key={idx}
                  title={link.title}
                  links={link.links}
                />
              );
            })}
          </div>
        </div>
        <hr className="border-silver" />
        {/* Social Media Section */}
        <div className="flex justify-between w-full">
          <CopyrightYear />
          <div className="flex gap-5">
            <Link href="#" aria-label="Twitter">
              <Icon name="twitter" className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Icon name="instagram" className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Icon name="youtube" className="w-7 h-5" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Icon name="facebook" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
