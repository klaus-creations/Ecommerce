import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-orange-400/[.3] dark:bg-orange-400/[.1] animate-pulse rounded-none",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
