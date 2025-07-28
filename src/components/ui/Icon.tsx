import { type SVGProps } from "react";
import { cn } from "@/lib/cn";
import { type IconName } from "@/types/name";
import iconManifest from "@/types/icon-manifest";

export { IconName };

export function Icon({
  name,
  childClassName,
  className,
  children,
  ref,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
  childClassName?: string;
  ref?: React.Ref<SVGSVGElement>;
}) {
  const spriteFile = iconManifest[name]; // fallback for dev
  const href = `/icons/${spriteFile}#${name}`;

  const accessibilityProps = {
    ...props,
    ...(props["aria-hidden"] === "true" && { tabIndex: -1 }),
  };

  if (children) {
    return (
      <span className="inline-flex relative">
        <svg
          {...accessibilityProps}
          ref={ref}
          fill="currentColor"
          className={cn(
            "inline self-center w-[1em] h-[1em] pointer-events-none",
            className
          )}
        >
          <use href={href} />
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
      ref={ref}
      fill="currentColor"
      className={cn(
        "inline self-center w-[1em] h-[1em] pointer-events-none",
        className
      )}
    >
      <use href={href} />
    </svg>
  );
}
