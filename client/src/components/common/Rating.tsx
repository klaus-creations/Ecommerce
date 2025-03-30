interface RatingProps {
  rating: number;
}

export default function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center gap-1 text-[#ffa600]">
      <span className="text-gray-900 dark:text-gray-100 text-xs lg:text-base font-bold">
        ( {rating} )
      </span>
      {Array.from({ length: 5 }, (_, i) => {
        return (
          <div key={i}>
            {rating - 1 > i ? (
              <img src="/star-full.svg" className="size-4" alt="star" />
            ) : (
              <img src="/star.svg" className="size-4" alt="star" />
            )}
          </div>
        );
      })}
    </div>
  );
}
