"use client";

export default function CopyrightYear() {
  const year = new Date().getFullYear();

  return (
    <div className="text-center text-sm sm:text-base text-gray-600 py-4">
      © {year} Peacock Vacations. All rights reserved.
    </div>
  );
}
