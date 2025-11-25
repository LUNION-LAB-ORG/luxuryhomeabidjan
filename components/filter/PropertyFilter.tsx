'use client';

import { BadgeX, CircleX, Filter, RectangleEllipsis, Search, SquareChevronDown } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { BudgetSlider } from './BudgetSlider';
import { MultiSelectAction } from './MultiSelectAction';
import { MultiSelectType } from './MultiSelectType';
import { SearchInput } from './SearchInput';
import { SelectDate } from './SelectDate';
import { SelectPiece } from './SelectPiece';
import { SelectZone } from './SelectZone';
import useSearchbarForm from '@/hooks/use-searchbar-form';

export default function PropertyFilter() {
  const [OpenfilterMobil, setOpenfilterMobil] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // Utilisation du hook personnalisé
  const { filters, changeFilter } = useSearchbarForm();

  // États locaux pour les inputs
  const [keyword, setKeyword] = useState(filters.title || '');
  const [actions, setActions] = useState<string[]>(filters.listingType || []);
  const [types, setTypes] = useState<string[]>(filters.categoryId || []);
  const [piece, setPiece] = useState(filters.minRooms || '');
  const [zone, setZone] = useState(filters.cityId?.[0] || '');
  const [budget, setBudget] = useState(filters.maxPrice || 0);
  const [date, setDate] = useState<Date | undefined>(undefined);

  // To detect if filters changed (for reset button)
  const hasFiltersChanged = () =>
    keyword !== '' ||
    actions.length > 0 ||
    types.length > 0 ||
    piece !== '' ||
    zone !== '' ||
    budget > 0 ||
    date !== undefined;

  // When click "Appliquer", update URL with query params
  const applyFilters = () => {
    if (keyword) changeFilter('title', keyword);
    if (actions.length) changeFilter('listingType', actions);
    if (types.length) changeFilter('categoryId', types);
    if (piece) changeFilter('minRooms', piece);
    if (zone) changeFilter('cityId', [zone]);
    if (budget > 0) changeFilter('maxPrice', budget);

    setOpenfilterMobil(false);

    if (pathname.includes('/recherche-bien')) {
      const el = document.getElementById('filtres');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/recherche-bien`);
    }
  };

  // Reset filters
  const resetFilters = () => {
    setKeyword('');
    setActions([]);
    setTypes([]);
    setPiece('');
    setZone('');
    setBudget(0);
    setDate(undefined);

    // Reset dans l'URL via le hook
    changeFilter('title', '');
    changeFilter('listingType', []);
    changeFilter('categoryId', []);
    changeFilter('minRooms', '');
    changeFilter('cityId', []);
    changeFilter('maxPrice', 0);
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={divRef}
      id="filtres"
      className="space-y-4  p-4 lg:px-16 lg:py-10">
      {/* lg */}
      <div
        className={`hidden lg:block max-w-sm sm:max-w-full shadow-xl mx-auto p-5 rounded-[50px] ${isFixed ? ' fixed top-14 mx-auto bg-white px-4 lg:mx-14 py-5 left-0  z-10 shadow-md' : ''}`}>
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

        <div className={`lg:flex gap-5 ${!OpenfilterMobil ? 'hidden' : ''}`}>
          <div
            className="flex-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center sm:justify-start flex-wrap gap-6 lg:gap-4">
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
      <div
        className={`lg:hidden max-w-sm w-full shadow-xl mx-auto p-5 rounded-[50px] ${isFixed ? ' fixed w-[1000px] top-14 mx-auto bg-white px-4 lg:mx-14 py-5 left-0  z-10 shadow-md' : ''}`}>
        <div className={`flex justify-between items-center gap-10 text-xl ${OpenfilterMobil ? 'pb-5' : ''}`}>
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

        <div className={`lg:flex gap-5 ${!OpenfilterMobil && !!Filter ? 'hidden' : ''}`}>
          <div
            className="flex-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center sm:justify-start flex-wrap gap-6 lg:gap-4">
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
