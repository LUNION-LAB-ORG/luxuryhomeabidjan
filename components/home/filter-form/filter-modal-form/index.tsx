import React from 'react';
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@heroui/modal";
import FilterColumn from "@/components/home/filter-form/filter-column";
import FilterSelect from "@/components/home/filter-form/filter-select";
import {filterRoomOptions, filterStatusOptions, filterTypeOptions, filterZoneOptions} from "@/data/filters";
import useSearchbarForm from "@/hooks/use-searchbar-form";
import SearchFilterForm from "@/components/home/filter-form/filters/search-filter-form";
import BudgetFilter from "@/components/home/filter-form/filters/budget-filter";
import AvailabilityFilter from "@/components/home/filter-form/filters/availability-filter";
import {Button} from "@/components/ui/button";

function FilterModalForm({open, onClose}: { open: boolean, onClose: () => void }) {
	const {
		filters,
		changeFilter
	} = useSearchbarForm();

	return (
		<Modal
			backdrop="blur"
			isOpen={open}
			size={"xl"}
			placement="center"
			onClose={onClose}
			closeButton={<span></span>}
			classNames={{
				base: 'bg-white rounded-xl border border-gray-200',
			}}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader>Recherche</ModalHeader>
						<ModalBody className="grid grid-cols-2 gap-6 py-4">
							<SearchFilterForm/>
							<FilterColumn
								icon={"circle-percent"}
								labelText="Type de transaction"
								labelFor="statut"
							>
								<FilterSelect
									label="statut"
									options={filterStatusOptions}
									selected={filters.actions}
									onChange={(status) => changeFilter('actions', status)}
								/>
							</FilterColumn>
							<FilterColumn
								icon={"home"}
								labelText="Type de logement"
								labelFor="logement"
							>
								<FilterSelect
									label="logement"
									options={filterTypeOptions}
									selected={filters.types}
									onChange={(types) => changeFilter('types', types)}
								/>
							</FilterColumn>
							<FilterColumn
								icon={"blocks"}
								labelText="Nombre de pièce"
								labelFor="Pièces"
							>
								<FilterSelect
									label="Pièces"
									options={filterRoomOptions}
									selected={filters.piece}
									onChange={(piece) => changeFilter('piece', piece)}
								/>
							</FilterColumn>
							<FilterColumn
								icon={"map-pin"}
								labelText="Zone géographique"
								labelFor="zone"
							>
								<FilterSelect
									label="zone"
									options={filterZoneOptions}
									selected={filters.zone}
									onChange={(zone) => changeFilter('zone', zone)}
								/>
							</FilterColumn>
							<AvailabilityFilter/>
							<div className="col-span-full">
								<BudgetFilter/>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button className="rounded-full">
								Rechercher
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}

export default FilterModalForm;