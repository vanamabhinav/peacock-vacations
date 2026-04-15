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
  const isCustomIcon = name.includes("/") || name.endsWith(".svg");
  const spriteFile = !isCustomIcon ? iconManifest[name] : null;
  const href = isCustomIcon ? `/icons/${name}` : `/icons/${spriteFile}#${name}`;

  if (isCustomIcon) {
    return (
      <img
        src={href}
        alt={`${name} icon`}
        className={cn("inline-block w-[1em] h-[1em] object-contain", className)}
        {...(props as any)}
      />
    );
  }

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
