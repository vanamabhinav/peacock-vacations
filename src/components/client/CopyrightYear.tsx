"use client";
import { useEffect, useState } from "react";

export default function CopyrightYear() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  if (year === null) return null; // or a fallback
  return <>© {year} Peacock Vacations. All rights reserved.</>;
}
