import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { memo } from "react";
import Link from "next/link";
import { CtaCard, Destination } from "@/types";

const sizes = [
  "col-span-4 row-span-6",
  "col-span-4 row-span-8",
  "col-span-4 row-span-4",
  "col-span-4 row-span-6",
  "col-span-4 row-span-4",
];
const DestinationCard = memo(
  ({
    title,
    subtitle,
    image,
    url,
    size,
    index,
  }: {
    title: string;
    subtitle: string;
    image: string;
    url: string;
    size: string;
    index: number;
  }) => (
    <div
      className={twMerge(
        "group relative flex flex-col justify-end p-4 rounded-[20px] overflow-hidden text-white",
        size
      )}
    >
      <Image
        src={image}
        alt={`${title} - ${subtitle}. Beautiful destination in India`}
        fill
        className="object-center object-cover group-hover:scale-110 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={index < 2}
        loading={index < 2 ? "eager" : "lazy"}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PC9zdmc+"
      />

      <div className="z-10 relative p-2">
        <h4 className="font-semibold text-lg leading-none">{title}</h4>
        <p className="font-normal text-base italic">{subtitle}</p>
      </div>

      <Link
        href={url}
        className="top-4 right-4 z-20 absolute flex justify-center items-center bg-black/14 hover:bg-black/6 border border-white rounded-full w-8 h-8 transition-colors cursor-pointer"
        aria-label={`View details for ${title}`}
      >
        <Icon name="customize/chevron" className="w-4 h-4" aria-hidden="true" />
      </Link>

      <div
        className="z-0 absolute inset-0"
        style={{
          background:
            "linear-gradient(39.05deg, #000000 7.1%, rgba(0, 0, 0, 0.3) 27.33%, rgba(255, 255, 255, 0) 50.79%, rgba(0, 0, 0, 0) 100%)",
          mixBlendMode: "multiply",
          opacity: 0.85,
        }}
      />
    </div>
  )
);

DestinationCard.displayName = "DestinationCard";

const CallToActionCard = memo(
  ({ title, subtitle, lowertext, url }: CtaCard) => (
    <div className="flex justify-between items-center col-span-4 row-span-2 bg-astra p-5 rounded-[18px] text-bigstone">
      <div>
        <h4 className="font-bold text-lg leading-none">{title}</h4>
        <p className="font-semibold text-sm">{subtitle}</p>
        <p className="mt-1 font-normal text-quincy text-xs">{lowertext}</p>
      </div>
      <Link
        href={url}
        className="flex justify-center items-center hover:bg-black/5 border border-black rounded-full w-12 h-12 transition-colors"
        aria-label="Explore all destinations"
      >
        <Icon
          name="customize/chevron"
          className="w-6 h-4 text-bigstone rotate-45"
          aria-hidden="true"
        />
      </Link>
    </div>
  )
);

CallToActionCard.displayName = "CallToActionCard";

const DestinationBentoGrid = memo(
  ({
    destinations,
    ctaCard,
  }: {
    destinations: Destination[];
    ctaCard: CtaCard;
  }) => {
    return (
      <div className="gap-5 grid grid-cols-12 grid-rows-10 w-full h-[37.5rem]">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={`${destination.title}-${index}`}
            title={destination.title}
            subtitle={destination.subtitle}
            image={destination.image}
            url={destination.url}
            size={sizes[index]}
            index={index}
          />
        ))}
        <CallToActionCard
          title={ctaCard.title}
          subtitle={ctaCard.subtitle}
          lowertext={ctaCard.lowertext}
          url={ctaCard.url}
        />
      </div>
    );
  }
);

DestinationBentoGrid.displayName = "DestinationBentoGrid";

export default DestinationBentoGrid;
