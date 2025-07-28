import { Icon } from "./Icon";

export default function Rating({
  rating,
  showRating = true,
}: {
  rating: number;
  showRating?: boolean;
}) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        if (starValue <= fullStars) {
          return <Icon key={index} name="star" className="text-sandybrown" />;
        } else if (starValue === fullStars + 1 && hasHalfStar) {
          return (
            <div key={index} className="relative flex items-center">
              <Icon name="star" className="text-alto" />
              <Icon
                name="star-half"
                className="top-0 left-0 absolute text-sandybrown"
              />
            </div>
          );
        } else {
          return <Icon key={index} name="star" className="text-alto" />;
        }
      })}
      {showRating && (
        <span className="ml-1 font-medium text-woodsmoke">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
