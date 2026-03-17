"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Rating from "@/components/ui/Rating";
import { UIFilters, FilterOptions } from "@/types/packages/package";
import { Icon } from "../ui/Icon";

interface FilterChipProps {
  label: string;
  onRemove: () => void;
  children?: React.ReactNode;
}

const FilterChip = ({ label, onRemove, children }: FilterChipProps) => (
  <button
    className="flex items-center gap-2 bg-white px-3 py-1 border border-[#929292] rounded-md cursor-pointer"
    onClick={onRemove}
  >
    {children ? children : <span>{label}</span>}
    <Icon name="cross" className="w-2 h-2" />
  </button>
);

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

const Checkbox = ({ checked, onChange, label }: CheckboxProps) => (
  <button
    className="flex items-center gap-3 w-fit cursor-pointer"
    onClick={() => onChange(!checked)}
  >
    <div className="flex justify-center items-center w-4 h-4">
      {checked ? (
        <Icon
          name="checked"
          className="w-4 h-4 text-black"
          width={16}
          height={16}
        />
      ) : (
        <div className="bg-white border border-gray rounded-sm w-4 h-4" />
      )}
    </div>
    <span className="text-base">{label}</span>
  </button>
);

interface StarRatingFilterProps {
  rating: number;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const StarRatingFilter = ({
  rating,
  checked,
  onChange,
}: StarRatingFilterProps) => (
  <button
    className="flex items-center gap-3 w-fit cursor-pointer"
    onClick={() => onChange(!checked)}
  >
    <div className="flex justify-center items-center w-4 h-4">
      {checked ? (
        <Icon
          name="checked"
          className="w-4 h-4 text-black"
          width={16}
          height={16}
        />
      ) : (
        <div className="bg-white border border-gray rounded-sm w-4 h-4" />
      )}
    </div>
    <Rating rating={rating} showRating={false} hideExtra={true} />
  </button>
);

interface DoubleRangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  formatValue?: (value: number) => string;
}

const DoubleRangeSlider = ({
  min,
  max,
  value,
  onChange,
}: DoubleRangeSliderProps) => {
  const [minVal, maxVal] = value;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = parseInt(e.target.value);
    onChange([Math.min(newMin, maxVal - 1000), maxVal]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(e.target.value);
    onChange([minVal, Math.max(newMax, minVal + 1000)]);
  };

  const minPercent = ((minVal - min) / (max - min)) * 100;
  const maxPercent = ((maxVal - min) / (max - min)) * 100;
  return (
    <div className="relative flex items-center w-full h-6">
      {/* Track */}
      <div className="top-1/2 right-0 left-0 absolute bg-black rounded-lg w-full h-[2px] -translate-y-1/2">
        {/* Active range */}
        <div
          className="absolute bg-[#F1AA4C] rounded-lg h-[4px]"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      </div>

      {/* Min Range Input */}
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={handleMinChange}
        className="top-0 left-0 absolute bg-transparent [&::-webkit-slider-thumb]:bg-[#F1AA4C] [&::-webkit-slider-thumb]:rounded-full w-full [&::-webkit-slider-thumb]:w-5 h-6 [&::-webkit-slider-thumb]:h-5 appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto"
        style={{ zIndex: 2 }}
      />

      {/* Max Range Input */}
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={handleMaxChange}
        className="top-0 left-0 absolute bg-transparent [&::-webkit-slider-thumb]:bg-[#F1AA4C] [&::-webkit-slider-thumb]:rounded-full w-full [&::-webkit-slider-thumb]:w-5 h-6 [&::-webkit-slider-thumb]:h-5 appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto"
        style={{ zIndex: 3 }}
      />
    </div>
  );
};

const PlpFilter = ({
  filterOptions,
  isMobile = false,
  onClose
}: {
  filterOptions: FilterOptions;
  isMobile?: boolean;
  onClose?: () => void;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for temporary filters (before applying)
  const [tempFilters, setTempFilters] = useState<UIFilters>({
    minPrice: filterOptions.priceRange.min,
    maxPrice: filterOptions.priceRange.max,
    themes: [],
    packageTypes: [],
    minRating: undefined,
  });

  // State for applied filters (from URL)
  const [appliedFilters, setAppliedFilters] = useState<UIFilters>({
    minPrice: undefined,
    maxPrice: undefined,
    themes: [],
    packageTypes: [],
    minRating: undefined,
  });

  // Initialize filters from URL params
  useEffect(() => {
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const themes = searchParams.get("themes");
    const packageTypes = searchParams.get("packageTypes");
    const minRating = searchParams.get("minRating");

    const newAppliedFilters: UIFilters = {
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      themes: themes
        ? themes.split(",").map((t) => decodeURIComponent(t.trim()))
        : [],
      packageTypes: packageTypes
        ? packageTypes.split(",").map((t) => decodeURIComponent(t.trim()))
        : [],
      minRating: minRating ? Number(minRating) : undefined,
    };

    setAppliedFilters(newAppliedFilters);

    // Update temp filters with applied values or defaults
    setTempFilters({
      minPrice: newAppliedFilters.minPrice || filterOptions.priceRange.min,
      maxPrice: newAppliedFilters.maxPrice || filterOptions.priceRange.max,
      themes: newAppliedFilters.themes || [],
      packageTypes: newAppliedFilters.packageTypes || [],
      minRating: newAppliedFilters.minRating,
    });
  }, [
    searchParams,
    filterOptions.priceRange.min,
    filterOptions.priceRange.max,
  ]);

  const updateURL = useCallback(
    (newFilters: UIFilters, resetPagination: boolean = true) => {
      const params = new URLSearchParams(searchParams);

      // Reset pagination when filters change
      if (resetPagination) {
        params.delete("page");
      }

      // Remove existing filter params
      params.delete("minPrice");
      params.delete("maxPrice");
      params.delete("themes");
      params.delete("packageTypes");
      params.delete("minRating");

      // Add new filter params
      if (
        newFilters.minPrice !== undefined &&
        newFilters.minPrice !== filterOptions.priceRange.min
      ) {
        params.set("minPrice", newFilters.minPrice.toString());
      }
      if (
        newFilters.maxPrice !== undefined &&
        newFilters.maxPrice !== filterOptions.priceRange.max
      ) {
        params.set("maxPrice", newFilters.maxPrice.toString());
      }
      if (newFilters.themes && newFilters.themes.length > 0) {
        params.set(
          "themes",
          newFilters.themes.map((t) => encodeURIComponent(t)).join(",")
        );
      }
      if (newFilters.packageTypes && newFilters.packageTypes.length > 0) {
        params.set(
          "packageTypes",
          newFilters.packageTypes.map((t) => encodeURIComponent(t)).join(",")
        );
      }
      if (newFilters.minRating !== undefined) {
        params.set("minRating", newFilters.minRating.toString());
      }

      router.push(`?${params.toString()}`, { scroll: false });
    },
    [
      router,
      searchParams,
      filterOptions.priceRange.min,
      filterOptions.priceRange.max,
    ]
  );

  const handleThemeChange = (theme: string, checked: boolean) => {
    const newThemes = checked
      ? [...(tempFilters.themes || []), theme]
      : (tempFilters.themes || []).filter((t) => t !== theme);

    setTempFilters((prev) => ({ ...prev, themes: newThemes }));
  };

  const handlePackageTypeChange = (packageType: string, checked: boolean) => {
    const newPackageTypes = checked
      ? [...(tempFilters.packageTypes || []), packageType]
      : (tempFilters.packageTypes || []).filter((t) => t !== packageType);

    setTempFilters((prev) => ({ ...prev, packageTypes: newPackageTypes }));
  };

  const handleRatingChange = (rating: number, checked: boolean) => {
    setTempFilters((prev) => ({
      ...prev,
      minRating: checked ? rating : undefined,
    }));
  };

  const handlePriceChange = (value: [number, number]) => {
    setTempFilters((prev) => ({
      ...prev,
      minPrice: value[0],
      maxPrice: value[1],
    }));
  };

  const applyFilters = () => {
    updateURL(tempFilters, true);
    if (onClose) onClose();
  };

  const removeFilter = (type: string, value?: string | number) => {
    const newFilters = { ...appliedFilters };

    switch (type) {
      case "price":
        newFilters.minPrice = undefined;
        newFilters.maxPrice = undefined;
        setTempFilters((prev) => ({
          ...prev,
          minPrice: filterOptions.priceRange.min,
          maxPrice: filterOptions.priceRange.max,
        }));
        break;
      case "theme":
        newFilters.themes = (appliedFilters.themes || []).filter(
          (t) => t !== value
        );
        break;
      case "packageType":
        newFilters.packageTypes = (appliedFilters.packageTypes || []).filter(
          (t) => t !== value
        );
        break;
      case "rating":
        newFilters.minRating = undefined;
        break;
    }

    updateURL(newFilters, true);
  };

  const clearAllFilters = () => {
    const clearedFilters: UIFilters = {
      minPrice: filterOptions.priceRange.min,
      maxPrice: filterOptions.priceRange.max,
      themes: [],
      packageTypes: [],
      minRating: undefined,
    };
    setTempFilters(clearedFilters);
    updateURL(
      {
        minPrice: undefined,
        maxPrice: undefined,
        themes: [],
        packageTypes: [],
        minRating: undefined,
      },
      true
    );
  };

  const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;
  const isPriceModified = () => tempFilters.minPrice !== filterOptions.priceRange.min || tempFilters.maxPrice !== filterOptions.priceRange.max;
  const hasAppliedPriceFilter = () => appliedFilters.minPrice !== undefined || appliedFilters.maxPrice !== undefined;

  const FilterContent = () => (
    <div className="flex flex-col gap-6">
      {/* Price Section */}
      <div className="flex flex-col gap-4">
        <h4 className="font-black text-[#1a3642] text-lg">Price</h4>
        <div className="flex flex-col gap-4 w-full">
          <div className="px-2">
            <DoubleRangeSlider
              min={filterOptions.priceRange.min}
              max={filterOptions.priceRange.max}
              value={[
                tempFilters.minPrice || filterOptions.priceRange.min,
                tempFilters.maxPrice || filterOptions.priceRange.max,
              ]}
              onChange={handlePriceChange}
              formatValue={formatPrice}
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col items-start">
              <span className="font-black text-[#1a3642]">{formatPrice(tempFilters.minPrice || filterOptions.priceRange.min)}</span>
              <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">min price</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-black text-[#1a3642]">{formatPrice(tempFilters.maxPrice || filterOptions.priceRange.max)}</span>
              <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">max price</span>
            </div>
          </div>
        </div>
      </div>

      {filterOptions.availableThemes.length > 0 && (
        <>
          <div className="bg-gray-100 w-full h-[1px]" />
          <div className="flex flex-col gap-4">
            <h4 className="font-black text-[#1a3642] text-lg">Theme</h4>
            <div className="flex flex-col gap-3">
              {filterOptions.availableThemes.map((theme) => (
                <Checkbox
                  key={theme}
                  checked={(tempFilters.themes || []).includes(theme)}
                  onChange={(checked) => handleThemeChange(theme, checked)}
                  label={theme}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {filterOptions.availablePackageTypes.length > 0 && (
        <>
          <div className="bg-gray-100 w-full h-[1px]" />
          <div className="flex flex-col gap-4">
            <h4 className="font-black text-[#1a3642] text-lg">Package Type</h4>
            <div className="flex flex-col gap-3">
              {filterOptions.availablePackageTypes.map((packageType) => (
                <Checkbox
                  key={packageType}
                  checked={(tempFilters.packageTypes || []).includes(packageType)}
                  onChange={(checked) => handlePackageTypeChange(packageType, checked)}
                  label={packageType}
                />
              ))}
            </div>
          </div>
        </>
      )}

      <div className="bg-gray-100 w-full h-[1px]" />
      <div className="flex flex-col gap-4">
        <h4 className="font-black text-[#1a3642] text-lg">Hotel Ratings</h4>
        <div className="flex flex-col gap-4">
          {[5, 4, 3].map((rating) => (
            <StarRatingFilter
              key={rating}
              rating={rating}
              checked={tempFilters.minRating === rating}
              onChange={(checked) => handleRatingChange(rating, checked)}
            />
          ))}
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-[100] bg-white flex flex-col font-albertsans">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 sticky top-0 bg-white">
          <h2 className="text-2xl font-black text-[#1a3642]">Filters</h2>
          <button onClick={onClose} className="p-2 -mr-2">
            <Icon name="cross" className="w-5 h-5 text-[#1a3642]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="mb-8 flex justify-between items-center bg-[#fffbf2] p-4 rounded-2xl border border-orange-100/50">
            <span className="text-sm font-bold text-[#345b63]">Active Filters</span>
            <button onClick={clearAllFilters} className="text-xs font-black text-[#903f3f] uppercase tracking-widest underline underline-offset-4">Clear All</button>
          </div>
          <FilterContent />
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 sticky bottom-0 bg-white">
          <button
            onClick={applyFilters}
            className="w-full bg-[#f1aa4c] hover:bg-[#e09a3c] text-[#1a3642] py-5 rounded-[24px] font-black tracking-widest text-sm shadow-xl shadow-orange-900/10 transition-all active:scale-95"
          >
            APPLY FILTERS
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full font-albertsans text-sm text-left">
      {/* Desktop Version */}
      <div className="flex flex-col gap-5 bg-[#fffbf2] p-6 border border-orange-100/50 rounded-[32px] shadow-sm">
        <div className="flex justify-between items-center">
          <div className="font-black text-[#1a3642] text-lg uppercase tracking-tight">Filters</div>
          <button
            onClick={clearAllFilters}
            className="text-xs font-black text-[#903f3f] uppercase tracking-widest underline underline-offset-4 hover:opacity-70"
          >
            Clear All
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {(isPriceModified() || hasAppliedPriceFilter()) && (
            <FilterChip
              label={`${formatPrice(tempFilters.minPrice || filterOptions.priceRange.min)} - ${formatPrice(tempFilters.maxPrice || filterOptions.priceRange.max)}`}
              onRemove={() => removeFilter("price")}
            />
          )}

          {!isPriceModified() && !hasAppliedPriceFilter() && (
            <div className="flex items-center gap-2 bg-white px-4 py-2 border border-gray-200 rounded-xl font-bold text-[#345b63]">
              <span>Any Price</span>
            </div>
          )}

          {(appliedFilters.themes || []).map((theme) => (
            <FilterChip key={theme} label={theme} onRemove={() => removeFilter("theme", theme)} />
          ))}

          {(appliedFilters.packageTypes || []).map((packageType) => (
            <FilterChip key={packageType} label={packageType} onRemove={() => removeFilter("packageType", packageType)} />
          ))}

          {appliedFilters.minRating && (
            <FilterChip label="Star Rating" onRemove={() => removeFilter("rating")}>
              <Rating rating={appliedFilters.minRating} showRating={false} hideExtra={true} />
            </FilterChip>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-8 bg-white p-8 border border-gray-100 rounded-[32px] shadow-sm">
        <FilterContent />
        <button
          onClick={applyFilters}
          className="w-full bg-[#1a3642] hover:bg-[#254d5e] text-white py-5 rounded-[24px] font-black tracking-widest text-sm shadow-xl shadow-blue-900/10 transition-all active:scale-95"
        >
          APPLY FILTERS
        </button>
      </div>
    </div>
  );
};

export default PlpFilter;
