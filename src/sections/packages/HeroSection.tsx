import RequestCallBack from "@/components/card/RequestCallBack";
import Rating from "@/components/ui/Rating";
import Image from "next/image";

const HeroSection = ({
  packageImageUrl,
  average_duration,
  basePrice,
  userRating,
}: {
  packageImageUrl: string;
  average_duration: string;
  basePrice: number;
  userRating: {
    rating: number;
    count: number;
  };
}) => {
  return (
    <>
      <section className="relative bg-white font-albertsans overflow-hidden">
        <Image
          src={packageImageUrl}
          alt="Support team background"
          width={1280}
          height={600}
          className="w-full h-[180px] md:h-auto object-cover md:aspect-[4/1]"
          priority
        />
        <RequestCallBack className="hidden md:block top-1/2 right-10 absolute w-80 -translate-y-1/2" />
      </section>
      <div className="relative flex bg-[#1a3642] px-4 py-3 md:py-6 md:h-20 text-alto text-[10px] md:text-xs">
        <div className="flex justify-between items-center mx-auto w-full max-w-7xl">
          <div className="flex gap-6 md:gap-12">
            <div>
              <div className="font-medium opacity-80 mb-0.5">Avg. Duration</div>
              <div className="font-bold text-white text-xs md:text-sm">
                {average_duration}
              </div>
            </div>
            <div>
              <div className="font-medium opacity-80 mb-0.5">Base Price</div>
              <div className="font-bold text-white text-xs md:text-sm">
                ₹ {basePrice.toLocaleString("en-IN")}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end text-right">
            <div className="font-medium opacity-80 mb-0.5">Traveler Feedback</div>
            <div className="flex items-center gap-1.5 text-white">
              <div className="scale-75 md:scale-100 origin-right">
                <Rating rating={userRating.rating} showRating={false} />
              </div>

              <div className="font-bold text-xs md:text-sm">
                {userRating.rating} <span className="font-medium opacity-60">({userRating.count >= 1000
                  ? `${(userRating.count / 1000)
                    .toFixed(1)
                    .replace(/\.0$/, "")}k`
                  : userRating.count})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
