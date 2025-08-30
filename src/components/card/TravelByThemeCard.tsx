import Image from "next/image";
import Link from "next/link";
import { Icon } from "../ui/Icon";
import { ThemePackage } from "@/types";

function TravelByThemeCard({
  title,
  description,
  image,
  ctaText,
  ctaLink,
}: ThemePackage) {
  return (
    <article className="relative rounded-[21px] w-[300px] h-[450px] overflow-hidden">
      <div className="bottom-0 z-10 absolute flex flex-col items-start gap-5 p-5 w-full text-white">
        <div className="flex flex-col gap-1">
          <h4
            className="font-bold text-[26px] text-white leading-normal"
            itemProp="name"
          >
            {title}
          </h4>
          <p
            className="text-shadow-md font-normal text-white/50 leading-[1.035] tracking-tight"
            itemProp="description"
          >
            {description}
          </p>
        </div>
        <div className="relative w-full h-full">
          <Link
            href={ctaLink}
            className="flex justify-between items-center bg-white/10 hover:bg-white/20 backdrop-blur-xl px-5 py-3 rounded-lg w-full text-xl transition-colors duration-200"
            style={{ borderRadius: "0.5rem" }}
            aria-label={`${ctaText} - ${title}`}
            itemProp="url"
          >
            <span>{ctaText}</span>
            <Icon
              name="right-arrow"
              aria-hidden="true"
              className="flex-shrink-0"
            />
          </Link>
        </div>
      </div>
      {/* Main sharp image */}
      <div className="z-0 relative w-full h-full">
        <Image
          src={image}
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
