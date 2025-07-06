import { type SVGProps } from "react";
import { cn } from "@/lib/cn";
import { type IconName } from "@/types/name";

export { IconName };

export function Icon({
  name,
  childClassName,
  className,
  children,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
  childClassName?: string;
}) {
  if (children) {
    return (
      <span className="inline-flex relative">
        <svg
          {...props}
          fill="currentColor"
          className={cn("inline self-center w-[1em] h-[1em]", className)}
        >
          <use href={`./icons/sprite.svg#${name}`} />
        </svg>
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            childClassName
          )}
        >
          {children}
        </span>
      </span>
    );
  }
  return (
    <svg
      {...props}
      fill="currentColor"
      className={cn("inline self-center w-[1em] h-[1em]", className)}
    >
      <use href={`./icons/sprite.svg#${name}`} />
    </svg>
  );
}
