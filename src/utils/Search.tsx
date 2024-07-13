"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { BiSearch } from "react-icons/bi";

export default function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    // Create a new URLSearchParams object from the current search parameters
    const params = new URLSearchParams(searchParams);

    // If a search term is provided, set the "search" parameter to that term
    // Otherwise, delete the "search" parameter
    term ? params.set("search", term) : params.delete("search");

    // If the "currentPage" parameter exists, reset it to "1" to start from the first page of results
    // Otherwise, delete the "currentPage" parameter
    if (params.has("currentPage")) {
      params.set("currentPage", "1");
    } else {
      params.delete("currentPage");
    }

    // Replace the current URL with the new URL containing the updated search parameters
    // The { scroll: false } option prevents the page from scrolling to the top after the URL change
    replace(`courses?${params.toString()}`, { scroll: false });
  }, 600);

  return (
    <div className="relative w-full items-center">
    <BiSearch size={20} className="absolute z-10 left-3 top-1/2 transform -translate-y-1/2 text-lightBg" />
    <input
      name="search"
      placeholder="Search for courses"
      className="pl-10 border placeholder:text-lightBg bg-gray-100/70 w-full shrink-0 text-[0.96rem] text-lightBg p-2 focus:outline-none focus:ring-1 focus:ring-titles ring-offset-3 xs:placeholder:text-sm"
      onChange={(e) => handleSearch(e.target.value)}
      required
    />
  </div>
  );
}
