import Image from "next/image";
import { Icon } from "../ui/Icon";
import TestimonialBentoGrid from "./TestimonialBentoGrid";
import { TestimonialCardData } from "@/types";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: TestimonialCardData;
}) {
  return (
    <div className="flex flex-col justify-center items-start gap-5 bg-islandSplice p-6 border border-putty rounded-3xl w-[29.125rem] aspect-square">
      <ProfileCard testimonial={testimonial} />
      {testimonial.images && testimonial.images.length > 0 && (
        <div className="w-full">
          <span className="font-semibold text-black text-lg capitalize">
            Shared by {testimonial.name.split(" ")[0]}
          </span>
          <TestimonialBentoGrid images={testimonial.images} />
        </div>
      )}
    </div>
  );
}

function ProfileCard({ testimonial }: { testimonial: TestimonialCardData }) {
  return (
    <div className="flex items-start gap-4">
      <ProfileIcon src={testimonial.profileImage} />
      <TestimonialDetails
        title={testimonial.title}
        description={testimonial.description}
        rating={testimonial.rating}
        name={testimonial.name}
        occupation={testimonial.occupation}
        location={testimonial.location}
      />
    </div>
  );
}

function ProfileIcon({ src }: { src: string }) {
  return (
    <Image
      src={src}
      width={96}
      height={96}
      alt="Profile image"
      className="flex-shrink-0 border-[3px] border-bigstone rounded-full aspect-square"
    />
  );
}

interface TestimonialDetailsProps {
  title: string;
  description: string;
  rating: number;
  name: string;
  occupation?: string;
  location: string;
}
function TestimonialDetails({
  title,
  description,
  rating,
  name,
  occupation,
  location,
}: TestimonialDetailsProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <h3 className="font-medium text-black text-xl leading-normal">{title}</h3>
      <div className="gap-2">
        <p className="inline font-dmsans font-normal text-woodsmoke text-base line-clamp-3 leading-normal">
          {description}
          <span className="ml-1">
            <button className="font-normal text-blue-800 text-base italic capitalize leading-normal whitespace-nowrap hover:cursor-pointer">
              Read Full Story
            </button>
          </span>
        </p>
      </div>
      <RatingComponent rating={rating} />
      <ProfileName name={name} occupation={occupation} location={location} />
    </div>
  );
}

function ProfileName({
  name,
  occupation,
  location,
}: {
  name: string;
  occupation?: string;
  location: string;
}) {
  return (
    <div>
      <p className="font-medium text-black text-lg leading-normal">
        {name}
        {occupation && occupation.length > 0 ? `, ${occupation}` : ""}
      </p>
      <p className="font-dmsans font-normal text-william text-sm">{location}</p>
    </div>
  );
}

function RatingComponent({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        if (starValue <= fullStars) {
          return (
            <Icon
              key={index}
              name="customize/star"
              className="text-sandybrown"
            />
          );
        } else if (starValue === fullStars + 1 && hasHalfStar) {
          return (
            <div key={index} className="relative flex items-center">
              <Icon name="customize/star" className="text-alto" />
              <Icon
                name="customize/star-half"
                className="top-0 left-0 absolute text-sandybrown"
              />
            </div>
          );
        } else {
          return (
            <Icon key={index} name="customize/star" className="text-alto" />
          );
        }
      })}
      <span className="ml-1 font-medium text-woodsmoke">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}
