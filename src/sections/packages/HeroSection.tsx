import RequestCallBack from "@/components/card/RequestCallBack";
import Rating from "@/components/ui/Rating";
import Image from "next/image";

const HeroSection = ({
  packageImageUrl,
}: {
  packageImageUrl: string;
}) => {
  return (
    <>
      <section className="relative bg-white font-albertsans overflow-hidden">
        <Image
          src={packageImageUrl}
          alt="Destination Banner"
          width={1920}
          height={600}
          className="w-full h-[300px] md:h-[500px] object-cover"
          priority
          quality={100}
        />
        <RequestCallBack className="hidden md:block top-1/2 right-10 absolute w-80 -translate-y-1/2" />
      </section>
    </>
  );
};

export default HeroSection;
