import {IOption} from "@/types/filter-select";

export const filterStatusOptions: IOption[] = [
	{ label: 'Location permanente', value: 'location_permanente' },
	{ label: 'Location saisonnière', value: 'location_saisonniere' },
	{ label: 'Vente', value: 'vente' },
	{ label: 'Achat', value: 'achat' },
	{ label: 'Investissement', value: 'investissement' },
];

export const filterTypeOptions: IOption[] = [
	{ label: 'Appartement', value: 'appartement' },
	{ label: 'Maison', value: 'maison' },
	{ label: 'Studio', value: 'studio' },
	{ label: 'Villa', value: 'villa' },
	{ label: 'Terrain', value: 'terrain' },
];

export const filterRoomOptions: IOption[] = [
	{ label: 'T2', value: 'T2' },
	{ label: 'T3', value: 'T3' },
	{ label: 'T4', value: 'T4' },
	{ label: 'T5', value: 'T5' }
];

export const filterZoneOptions: IOption[] = [
	{label:"Abidjan", value:"abidjan"},
	{label:"Yamoussoukro", value:"yamoussoukro"},
	{label:"Bouaké", value:"bouake"},
	{label:"Daloa", value:"daloa"},
	{label:"San Pedro", value:"san-pedro"},
	{label:"Korhogo", value:"korhogo"}
];