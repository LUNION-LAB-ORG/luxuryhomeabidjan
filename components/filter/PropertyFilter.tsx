"use client";

import { BadgeX, CircleX, Filter, RectangleEllipsis, Search, SquareChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { BudgetSlider } from "./BudgetSlider";
import { MultiSelectAction } from "./MultiSelectAction";
import { MultiSelectType } from "./MultiSelectType";
import { SearchInput } from "./SearchInput";
import { SelectDate } from "./SelectDate";
import { SelectPiece } from "./SelectPiece";
import { SelectZone } from "./SelectZone";

export default function PropertyFilter() {
  const [OpenfilterMobil, setOpenfilterMobil] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);

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
    setOpenfilterMobil(false)

    if (pathname.includes('/recherche-bien')) {
      router.push(`?${params.toString()}`, { scroll: false });
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

  useEffect(() => {
    const element = divRef.current;
    if (!element) return;

    const elementOffsetTop = element.offsetTop;

    const handleScroll = () => {
      // Si on scrolle en dessous de la div → fixed
      if (window.scrollY >= elementOffsetTop) {
        setIsFixed(true);
      } else {
        // Si on remonte au-dessus → normal
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={divRef}
      id="filtres"
      className="space-y-4  p-4 lg:px-16 lg:py-10">
      {/* lg */}
      <div className={`hidden lg:block max-w-sm sm:max-w-full shadow-xl mx-auto p-5 rounded-[50px] ${isFixed ? " fixed top-14 mx-auto bg-white px-4 lg:mx-14 py-5 left-0  z-10 shadow-md" : ""}`}>
        <div className=" flex items-center gap-10 text-xl">
          <p>filter</p>
          {
            OpenfilterMobil ?
              <div
                onClick={() => setOpenfilterMobil(!OpenfilterMobil)}
              >
                <CircleX />
              </div> :
              <div
                onClick={() => setOpenfilterMobil(!OpenfilterMobil)}
              >
                <RectangleEllipsis />

              </div>
          }

        </div>

        <div className={`lg:flex gap-5 ${!OpenfilterMobil ? "hidden" : ""}`}>
          <div className="flex-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center sm:justify-start flex-wrap gap-6 lg:gap-4">
            <SearchInput value={keyword} onChange={setKeyword} />
            <MultiSelectAction selected={actions} onChange={setActions} />
            <MultiSelectType selected={types} onChange={setTypes} />
            <SelectPiece value={piece} onChange={setPiece} />
            <SelectZone value={zone} onChange={setZone} />
            <BudgetSlider value={budget} onChange={setBudget} />
            <SelectDate value={date} onChange={setDate} />
          </div>
          {/* boutton recherche */}
          <div className=" rounded-full px-3 -full mx-auto  w-fit">
            <div className="flex gap-4 items-center mt-4">
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
          </div>

        </div>

      </div>
      {/* mobile */}
      <div className={`lg:hidden max-w-sm w-full shadow-xl mx-auto p-5 rounded-[50px] ${isFixed ? " fixed w-[1000px] top-14 mx-auto bg-white px-4 lg:mx-14 py-5 left-0  z-10 shadow-md" : ""}`}>
        <div className={`flex justify-between items-center gap-10 text-xl ${OpenfilterMobil ? "pb-5" : ""}`}>
          <p>filter</p>
          {
            OpenfilterMobil ?
              <div
                onClick={() => setOpenfilterMobil(!OpenfilterMobil)}
              >
                <BadgeX />
              </div> :
              <div
                className="flex items-center gap-16 "
                onClick={() => setOpenfilterMobil(!OpenfilterMobil)}
              >
                <Search className="w-6 h-6 " />
                <SquareChevronDown />

              </div>
          }

        </div>

        <div className={`lg:flex gap-5 ${!OpenfilterMobil && !!Filter ? "hidden" : ""}`}>
          <div className="flex-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center sm:justify-start flex-wrap gap-6 lg:gap-4">
            <SearchInput value={keyword} onChange={setKeyword} />
            <MultiSelectAction selected={actions} onChange={setActions} />
            <MultiSelectType selected={types} onChange={setTypes} />
            <SelectPiece value={piece} onChange={setPiece} />
            <SelectZone value={zone} onChange={setZone} />
            <BudgetSlider value={budget} onChange={setBudget} />
            <SelectDate value={date} onChange={setDate} />
          </div>
          {/* boutton recherche */}
          <div className=" rounded-full px-3 -full mx-auto  w-fit">
            <div className="flex gap-4 items-center mt-4">
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
          </div>
        </div>

      </div>
    </div>
  );
}
