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
    <article className="relative rounded-[21px] w-[260px] sm:w-[300px] h-[380px] sm:h-[450px] overflow-hidden group">
      {/* NEW Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-[#0066FF] px-3 py-1 rounded-full shadow-lg">
        <span className="font-black text-[10px] text-white uppercase tracking-tighter">New!</span>
        <Icon name="star" className="w-2.5 h-2.5 text-white fill-white" />
      </div>

      <div className="bottom-0 z-10 absolute flex flex-col items-start gap-4 p-5 w-full text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="flex flex-col gap-1">
          <h4
            className="font-bold text-2xl sm:text-[26px] text-white leading-tight"
            itemProp="name"
          >
            {title}
          </h4>
          <p
            className="text-white/70 font-normal text-xs sm:text-sm leading-tight tracking-tight line-clamp-2"
            itemProp="description"
          >
            {description}
          </p>
        </div>
        <div className="w-full">
          <Link
            href={ctaLink}
            className="flex justify-between items-center bg-white/20 hover:bg-white/30 backdrop-blur-md px-5 py-2.5 rounded-xl w-full text-base sm:text-lg font-bold group/btn transition-all duration-300"
            aria-label={`${ctaText} - ${title}`}
            itemProp="url"
          >
            <span>Explore Trip</span>
            <Icon
              name="right-arrow"
              aria-hidden="true"
              className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
            />
          </Link>
        </div>
      </div>
      {/* Main sharp image */}
      <div className="z-0 absolute inset-0 w-full h-full">
        <Image
          src={image}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          alt={`${title} - Premium travel packages in India`}
          itemProp="image"
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>
    </article>
  );
}

export default TravelByThemeCard;
