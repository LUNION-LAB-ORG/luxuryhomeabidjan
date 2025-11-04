'use client';

import FilterColumn from '@/components/home/filter-form/filter-column';
import FilterModalForm from '@/components/home/filter-form/filter-modal-form';
import FilterSelect from '@/components/home/filter-form/filter-select';
import BudgetFilter from '@/components/home/filter-form/filters/budget-filter';
import SearchFilterForm from '@/components/home/filter-form/filters/search-filter-form';
import MoreButton from '@/components/home/filter-form/more-button';
import { Button } from '@/components/ui/button';
import { filterStatusOptions } from '@/data/filters';
import useSearchbarForm from '@/hooks/use-searchbar-form';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

function FilterForm() {
  const {
    filterOpen,
    filters,
    handleMoreButtonClick,
    setOpenModal,
    openModal,
    changeFilter,
    handleSearchBarSubmit,
    filtersValues,
  } = useSearchbarForm();

  return (
    <div className="container-8xl py-2">
      <motion.form
        className={cn('w-full shadow md:shadow-[0px_2px_20px_0px_#0000001A] rounded-lg md:rounded-[60px]',
          'max-md:py-4 px-8 mt-12',
          filterOpen ? 'md:pb-4' : 'md:pb-0')}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex-1 grid lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-2 py-6">
            <FilterColumn
              icon={'circle-percent'}
              labelText="Type de transaction"
              labelFor="transaction"
              className="max-lg:hidden"
            >
              <FilterSelect
                label="transaction"
                options={filterStatusOptions}
                selected={filters.listingType}
                onChange={(status) => changeFilter('listingType', status)}
              />
            </FilterColumn>
            <FilterColumn
              icon={'home'}
              labelText="Type de logement"
              labelFor="logement"
              className="max-lg:hidden"
            >
              <FilterSelect
                label="logement"
                options={filtersValues?.categories?.map((category) => ({
                  label: category.label,
                  value: category.id,
                })) || []}
                selected={filters.categoryId}
                onChange={(types) => changeFilter('categoryId', types)}
              />
            </FilterColumn>
            <FilterColumn
              icon={'map-pin'}
              labelText="Choix de la ville"
              labelFor="zone"
              className="max-lg:hidden"
            >
              <FilterSelect
                label="Ville"
                options={filtersValues?.cities?.map((category) => ({
                  label: category.name,
                  value: category.id,
                })) || []}
                selected={filters.cityId}
                onChange={(zone) => changeFilter('cityId', zone)}
              />
            </FilterColumn>
            <SearchFilterForm />
          </div>
          <div className="flex items-center justify-center">
            <MoreButton
              filterOpen={filterOpen}
              setFilterOpen={handleMoreButtonClick}
            />
            <Button
              className="rounded-full py-8 px-11"
              onClick={handleSearchBarSubmit}
            >
              Rechercher
            </Button>
          </div>
        </div>
        <motion.div
          className="items-center mb-4"
          initial={false}
          animate={
            filterOpen ? {
              height: 'auto',
              opacity: 1,
              display: 'flex',
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.2,
                  delay: 0.2,
                },
              },
            } : {
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.5,
                },
                opacity: {
                  duration: 0.25,
                },
              },
              transitionEnd: {
                display: 'none',
              },
            }
          }
        >
          <BudgetFilter />
          {/*<AvailabilityFilter />*/}
        </motion.div>
      </motion.form>
      <FilterModalForm open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default FilterForm;