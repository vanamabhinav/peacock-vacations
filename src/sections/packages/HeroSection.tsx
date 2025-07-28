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
      <section className="relative bg-white font-albertsans">
        <Image
          src={packageImageUrl}
          alt="Support team background"
          width={1280}
          height={0}
          className="w-full h-auto object-cover aspect-[4/1]"
          priority
        />
        <RequestCallBack className="top-1/2 right-10 absolute w-80 -translate-y-1/2" />
      </section>
      <div className="relative flex bg-bigstone px-16 py-5 w-full h-20 text-alto text-xs">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-12">
            <div>
              <div className="font-medium">Average Duration</div>
              <div className="font-semibold text-white text-sm">
                {average_duration}
              </div>
            </div>
            <div>
              <div className="font-medium">Base Price</div>
              <div className="font-semibold text-white text-sm">
                ₹ {basePrice.toLocaleString("en-IN")}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end w-64 text-left">
            <div className="font-medium">Traveler Feedback</div>
            <div className="flex items-center gap-1 text-white text-sm">
              <div className="flex gap-0.5">
                <Rating rating={userRating.rating} showRating={false} />
              </div>

              <div className="font-semibold">
                Rated {userRating.rating} by{" "}
                {userRating.count >= 1000
                  ? `${(userRating.count / 1000)
                      .toFixed(1)
                      .replace(/\.0$/, "")}k`
                  : userRating.count}{" "}
                travellers
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
