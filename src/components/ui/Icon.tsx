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
  // Ensure aria-hidden icons are not focusable
  const accessibilityProps = {
    ...props,
    ...(props["aria-hidden"] === "true" && { tabIndex: -1 }),
  };

  if (children) {
    return (
      <span className="inline-flex relative">
        <svg
          {...accessibilityProps}
          fill="currentColor"
          className={cn("inline self-center w-[1em] h-[1em]", className)}
        >
          <use href={`/icons/sprite.svg#${name}`} />
        </svg>
        <span
          className={cn(
            "absolute inset-0 flex justify-center items-center",
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
      {...accessibilityProps}
      fill="currentColor"
      className={cn("inline self-center w-[1em] h-[1em]", className)}
    >
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
}
