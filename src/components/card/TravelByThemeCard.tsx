import Image from "next/image";
import Link from "next/link";
import { Icon } from "../ui/Icon";

interface TravelByThemeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  bgColor: string;
  ctaText: string;
}

function TravelByThemeCard({
  title,
  description,
  imageUrl,
  href,
  bgColor,
  ctaText,
}: TravelByThemeCardProps) {
  return (
    <article className="relative rounded-[21px] w-[300px] h-[450px] overflow-hidden">
      <div
        className="z-5 absolute inset-0 blur-xs overflow-hidden scale-110"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, transparent 40%, ${bgColor} 70%, ${bgColor} 100%)`,
        }}
      />
      <div className="bottom-0 z-10 absolute flex flex-col items-start gap-5 p-5 w-full text-white">
        <div className="flex flex-col gap-1">
          <h3
            className="font-bold text-[26px] text-white leading-normal"
            itemProp="name"
          >
            {title}
          </h3>
          <p
            className="text-shadow-md font-normal text-white/50 leading-[1.035] tracking-tight"
            itemProp="description"
          >
            {description}
          </p>
        </div>
        <div className="relative w-full h-full">
          <Link
            href={href}
            className="flex justify-between items-center bg-white/10 hover:bg-white/20 backdrop-blur-xl px-5 py-3 rounded-lg w-full text-xl transition-colors duration-200"
            style={{ borderRadius: "0.5rem" }}
            aria-label={`${ctaText} - ${title}`}
            itemProp="url"
          >
            <span>{ctaText}</span>
            <Icon
              name="customize/right-arrow"
              aria-hidden="true"
              className="flex-shrink-0"
            />
          </Link>
        </div>
      </div>
      {/* Main sharp image */}
      <div className="z-0 relative w-full h-full">
        <Image
          src={imageUrl}
          fill
          className="object-cover"
          alt={`${title} - Premium travel packages in India`}
          itemProp="image"
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
        />
      </div>
    </article>
  );
}

export default TravelByThemeCard;
