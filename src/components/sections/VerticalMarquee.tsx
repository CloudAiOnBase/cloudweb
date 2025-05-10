
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { SmallClientTweetCard } from "@/components/ui/SmallClientTweetCard";

export function VerticalMarquee({
  className,
  pauseOnHover = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { pauseOnHover?: boolean }) {
  const tweetIds = [
    "1912851147443884081",
    "1912852732899115479",
  ];

  return (
    <div className={cn("relative flex h-[500px] w-full overflow-hidden", className)} {...props}>
      <Marquee pauseOnHover={pauseOnHover} vertical className="[--duration:25s]">
        {tweetIds.map((id) => (
          <SmallClientTweetCard key={id} id={id} className="transform scale-90"/>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}