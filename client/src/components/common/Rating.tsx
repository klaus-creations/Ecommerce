interface RatingProps {
  rating: number;
}

export default function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center gap-1 text-[#ffa600]">
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
