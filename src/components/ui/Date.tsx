import { Icon } from "./Icon";
import type { SVGProps } from "react";

interface DateUIProps
  extends Omit<SVGProps<SVGSVGElement>, "width" | "height"> {
  className?: string;
  number: number;
  size?: number;
}

function DateUI({ className, number, size = 24, ...props }: DateUIProps) {
  return (
    <Icon
      {...props}
      name="dateTemplate"
      width={size}
      height={size}
      className={className}
    >
      <span
        className="absolute inset-0 flex justify-center items-center pt-1 text-xs"
        style={{ pointerEvents: "none" }}
      >
        {number}
      </span>
    </Icon>
  );
}

export default DateUI;
