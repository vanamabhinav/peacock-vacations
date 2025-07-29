import Image from "next/image";
import Link from "next/link";
import { Icon } from "../ui/Icon";
import CopyrightYear from "../client/CopyrightYear";
export default function Footer() {
  const LinkSectionData = [
    {
      title: "Top Cities in India",
      links: [
        { link_href: "#", label: "Hotels in Goa" },
        { link_href: "#", label: "Hotels in Jaipur" },
        { link_href: "#", label: "Hotels in Delhi" },
        { link_href: "#", label: "Hotels in Mumbai" },
        { link_href: "#", label: "Hotels in Udaipur" },
        { link_href: "#", label: "Hotels in Manali" },
        { link_href: "#", label: "Hotels in Rishikesh" },
        { link_href: "#", label: "Hotels in Kochi" },
        { link_href: "#", label: "Hotels in Udaipur" },
        { link_href: "#", label: "Hotels in Manali" },
        { link_href: "#", label: "Hotels in Rishikesh" },
        { link_href: "#", label: "Hotels in Kochi" },
        { link_href: "#", label: "Hotels in Ooty" },
        { link_href: "#", label: "Hotels in Pondicherry" },
        { link_href: "#", label: "Hotels in Goa" },
        { link_href: "#", label: "Hotels in Jaipur" },
      ],
    },
    {
      title: "Popular Resorts & Stays",
      links: [
        { link_href: "#", label: "Luxury Resorts in Goa" },
        { link_href: "#", label: "Beach Resorts in Kerala" },
        { link_href: "#", label: "Heritage Hotels in Jaipur" },
        { link_href: "#", label: "Mountain Retreats in Himach" },
        { link_href: "#", label: "Nature Stays in Coorg" },
        { link_href: "#", label: "Jungle Lodges in Bandipur" },
        { link_href: "#", label: "Lake Resorts in Udaipur" },
        { link_href: "#", label: "Spa Resorts in Rishikesh" },
        { link_href: "#", label: "Boutique Hotels in Pondicher" },
        { link_href: "#", label: "Treehouse Stays in Wayanad" },
        { link_href: "#", label: "Beach Resorts in Kerala" },
        { link_href: "#", label: "Lake Resorts in Udaipur" },
        { link_href: "#", label: "Nature Stays in Coorg" },
        { link_href: "#", label: "Jungle Lodges in Bandipur" },
        { link_href: "#", label: "Lake Resorts in Udaipur" },
        { link_href: "#", label: "Spa Resorts in Rishikesh" },
      ],
    },
    {
      title: "Travel by Season/Month",
      links: [
        { link_href: "#", label: "Best Places to Visit in January" },
        { link_href: "#", label: "Best Places to Visit in April" },
        { link_href: "#", label: "Best Places to Visit in July" },
        { link_href: "#", label: "Best Monsoon place in India" },
        { link_href: "#", label: "Winter Destinations in India" },
        { link_href: "#", label: "Summer Escapes in the Hills" },
        { link_href: "#", label: "Honeymoon Spots by Season" },
        { link_href: "#", label: "Long Weekend Getaways" },
        { link_href: "#", label: "Offbeat Winter Travel Ideas" },
        { link_href: "#", label: "Budget Trips for Every Month" },
        { link_href: "#", label: "Best Places to Visit in January" },
        { link_href: "#", label: "Best Places to Visit in April" },
        { link_href: "#", label: "Best Places to Visit in July" },
        { link_href: "#", label: "Winter Destinations in India" },
        { link_href: "#", label: "Summer Escapes in the Hills" },
        { link_href: "#", label: "Honeymoon Spots by Season" },
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

        <nav aria-label="Footer Navigation">
          {LinkSectionData.map(({ title, links }, idx) => {
            return <LinkSection key={idx} title={title} links={links} />;
          })}
        </nav>

        <section aria-label="Newsletter">
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
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function LinkSection({
  title,
  links,
}: {
  title: string;
  links: {
    link_href: string;
    label: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-7 mb-2 border-peachorange/28 border-b-[1px] font-albertsans">
      <h3 className="font-semibold text-rawsienna text-2xl leading-normal">
        {title}
      </h3>

      <nav className="gap-x-6 gap-y-2 grid grid-cols-4 grid-rows-auto mb-7 w-full">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.link_href}
            className="w-full font-light text-white text-xl text-left leading-normal"
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
    link_href: string;
    label: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-semibold text-bigstone text-base">{title}</h3>
      <div className="flex flex-col gap-3">
        {links.map(({ link_href, label }, idx) => {
          return (
            <Link key={idx} href={link_href} className="text-nevada text-sm">
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
        { label: "Careers", link_href: "#" },
        { label: "Press", link_href: "#" },
        { label: "Blog", link_href: "#" },
        { label: "ContactUs", link_href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Travel Booking", link_href: "#" },
        { label: "Hotel Aggregator", link_href: "#" },
        { label: "Tour Packages", link_href: "#" },
        { label: "Visa Assistance", link_href: "#" },
        { label: "Corporate Travel", link_href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", link_href: "#" },
        { label: "Terms & Conditions", link_href: "#" },
        { label: "Cancellation Policy", link_href: "#" },
        { label: "Privacy Policy", link_href: "#" },
        { label: "FAQs", link_href: "#" },
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
