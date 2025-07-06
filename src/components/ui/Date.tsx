import { Icon } from "./Icon";

interface DateUIProps {
  className?: string;
  number: number;
  size?: number;
}

function DateUI({ className, number, size = 24 }: DateUIProps) {
  return (
    <Icon
      name="homepage/dateTemplate"
      width={size}
      height={size}
      className={className}
    >
      <span
        className="absolute inset-0 flex justify-center items-center text-xs"
        style={{ pointerEvents: "none" }}
      >
        {number}
      </span>
    </Icon>
  );
}

export default DateUI;
