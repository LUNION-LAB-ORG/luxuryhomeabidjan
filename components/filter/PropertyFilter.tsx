"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams,usePathname } from "next/navigation";
import { SearchInput } from "./SearchInput";
import { MultiSelectAction } from "./MultiSelectAction";
import { MultiSelectType } from "./MultiSelectType";
import { SelectPiece } from "./SelectPiece";
import { SelectZone } from "./SelectZone";
import { BudgetSlider } from "./BudgetSlider";
import { SelectDate } from "./SelectDate";
import { Button } from "../ui/button";

// import { SearchInput } from './filters/SearchInput';
// import { MultiSelectAction } from './filters/MultiSelectAction';
// import { MultiSelectType } from './filters/MultiSelectType';
// import { SelectPiece } from './filters/SelectPiece';
// import { SelectZone } from './filters/SelectZone';
// import { BudgetSlider } from './filters/BudgetSlider';
// import { SelectDate } from './filters/SelectDate';

export default function PropertyFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();


  // Parse URL params or set defaults
  const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");
  const [actions, setActions] = useState<string[]>(
    searchParams.get("actions")?.split(",") || []
  );
  const [types, setTypes] = useState<string[]>(
    searchParams.get("types")?.split(",") || []
  );
  const [piece, setPiece] = useState(searchParams.get("piece") || "");
  const [zone, setZone] = useState(searchParams.get("zone") || "");
  const [budget, setBudget] = useState(Number(searchParams.get("budget")) || 0);
  const [date, setDate] = useState<Date | undefined>(() => {
    const d = searchParams.get("date");
    return d ? new Date(d) : undefined;
  });

  // To detect if filters changed (for reset button)
  const initialState = {
    keyword: "",
    actions: [],
    types: [],
    piece: "",
    zone: "",
    budget: 0,
    date: undefined,
  };

  const hasFiltersChanged = () =>
    keyword !== initialState.keyword ||
    actions.length > 0 ||
    types.length > 0 ||
    piece !== "" ||
    zone !== "" ||
    budget > 0 ||
    date !== undefined;

  // When click "Appliquer", update URL with query params
  const applyFilters = () => {
    const params = new URLSearchParams();

    if (keyword) params.set("keyword", keyword);
    if (actions.length) params.set("actions", actions.join(","));
    if (types.length) params.set("types", types.join(","));
    if (piece) params.set("piece", piece);
    if (zone) params.set("zone", zone);
    if (budget > 0) params.set("budget", budget.toString());
    if (date) params.set("date", date.toISOString());

    if (pathname.includes('/recherche-bien')) {
        router.push(`?${params.toString()}`,{ scroll: false });
        const el = document.getElementById('filtres');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(`/recherche-bien?${params.toString()}`);
      }
  };

  // Reset filters
  const resetFilters = () => {
    setKeyword("");
    setActions([]);
    setTypes([]);
    setPiece("");
    setZone("");
    setBudget(0);
    setDate(undefined);
  };

  return (
    <div
    id="filtres"
    className="space-y-4  p-4 lg:px-16 lg:py-10">
      <div className="max-w-sm sm:max-w-full shadow-xl mx-auto p-5 rounded-[50px]">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 fflex justify-center sm:justify-start flex-wrap gap-6 lg:gap-4">
          <SearchInput value={keyword} onChange={setKeyword} />
          <MultiSelectAction selected={actions} onChange={setActions} />
          <MultiSelectType selected={types} onChange={setTypes} />
          <SelectPiece value={piece} onChange={setPiece} />
          <SelectZone value={zone} onChange={setZone} />
          <BudgetSlider value={budget} onChange={setBudget} />
          <SelectDate value={date} onChange={setDate} />
        </div>

        <div className=" mx-auto  w-fit">
          <div className="flex gap-4 jjustify-between items-center mt-4">
            <button
              disabled={!hasFiltersChanged()}
              onClick={resetFilters}
              className={`text-sm text-red-600 hover:underline disabled:opacity-40 cursor-pointer`}
            >
              Réinitialiser
            </button>

            <Button
              className="cursor-pointer"
              onClick={applyFilters} 
            >
              Recherche
            </Button>
          </div>
          {/* Sticky mobile button */}
          <div className="hidden ffixed bottom-4 left-0 right-0 px-4 sm:hidden">
            <button
              onClick={applyFilters}
              className="w-full bg-blue-600 text-white py-3 rounded shadow-lg"
            >
              Appliquer les filtres
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
