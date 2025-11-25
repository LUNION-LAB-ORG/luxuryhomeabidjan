'use client';
import React, { Suspense } from 'react';
import { usePropertiesSearch } from '@/features/properties/hooks/usePropertiesSearch';
import { ChevronRight, Loader2, Star } from 'lucide-react';
import PropertyCard from '@/components/biens/property-card';
import FilterForm from '@/components/home/filter-form';
import { FilterList } from '@/components/search/filter-list';
import InfiniteScrollContainer from '@/components/InfiniteScrollContainer';
import { motion } from 'motion/react';

function SearchPageContent() {
  const {
    properties,
    showLoading,
    filtersValues,
    changeFilter,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = usePropertiesSearch();

  const inViewVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container-8xl">
      <Suspense fallback={<div>Loading...</div>}>
        <FilterForm />
      </Suspense>
      <div className="min-h-screen flex">
        <div className="flex-1">
          {properties && properties.length > 0 && (
            <InfiniteScrollContainer
              className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4"
              onBottomReached={() => hasNextPage && !showLoading && fetchNextPage()}
            >
              {properties.map((property) => (
                <motion.li
                  key={property.id}
                  variants={inViewVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <PropertyCard property={property} />
                </motion.li>
              ))}
              {isFetchingNextPage && (
                <div className="flex justify-center my-4">
                  <Loader2 className="animate-spin" />
                </div>
              )}
            </InfiniteScrollContainer>
          )}
          {showLoading && (
            <div className="flex items-center justify-center min-h-[60vh]">
              <Loader2 className="animate-spin" />
            </div>
          )}
          {!showLoading && properties && properties.length === 0 && (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <h2 className="text-2xl font-semibold mb-4">Aucun bien trouvé</h2>
              <p className="text-gray-600">Essayez de modifier vos critères de recherche.</p>
            </div>
          )}
        </div>
        <aside className="w-96 hidden lg:block">
          <div className="flex flex-col w-full sticky top-20 space-y-8 py-2">
            <FilterList
              title="Nos biens par ville"
              items={filtersValues?.cities || []}
              onItemClick={(cityId) => changeFilter('cityId', [cityId])}
              icon={ChevronRight}
              className="bg-black"
            />
            <FilterList
              title="Nos types de biens"
              items={filtersValues?.categories || []}
              onItemClick={(categoryId) => changeFilter('categoryId', [categoryId])}
              icon={Star}
              className="bg-[#333333]"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default SearchPageContent;