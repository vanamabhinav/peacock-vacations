import Image from "next/image";
import { Icon } from "../ui/Icon";

interface TestimonialBentoGridProps {
  images: string[];
}

export default function TestimonialBentoGrid({
  images,
}: TestimonialBentoGridProps) {
  const displayImages = images.slice(0, 4);
  const hasMoreImages = images.length > 4;

  return (
    <div className="gap-2 grid grid-cols-4 grid-rows-2 w-full h-auto aspect-[13/6]">
      {displayImages.map((image, index) => {
        const isFirstImage = index === 0;
        const isSecondImage = index === 1;
        const isThirdImage = index === 2;
        const isFourthImage = index === 3;
        const shouldShowOverlay = isFourthImage && hasMoreImages;

        return (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${
              isFirstImage
                ? "row-span-2 col-span-2" // First image: 2 rows, 1st col full
                : isSecondImage
                ? "row-start-1 col-start-3 col-span-1" // Second image: row 1, col 2
                : isThirdImage
                ? "row-start-2 col-start-3 col-span-1" // Third image: row 2, col 2
                : "row-span-2 col-start-4 col-span-1" // Fourth image: 2 rows, cols 3-4
            }`}
          >
            {/* Image with conditional overlay */}
            <div
              className="relative w-full h-full"
              style={
                shouldShowOverlay
                  ? {
                      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.49) 65.38%), url(${image}) lightgray 50% / cover no-repeat`,
                    }
                  : undefined
              }
            >
              {!shouldShowOverlay && (
                <Image
                  src={image}
                  alt={`Testimonial image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              )}

              {/* Overlay for "See all" when there are more than 4 images */}
              {shouldShowOverlay && (
                <div className="absolute inset-0 flex justify-center items-end p-4">
                  <div className="flex flex-col items-center">
                    <Icon
                      name="see-all-icon"
                      className="text-white"
                      style={{ height: "16px", width: "16px" }}
                    />
                    <span className="font-semibold text-white text-xs lowercase leading-tight">
                      see all
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
