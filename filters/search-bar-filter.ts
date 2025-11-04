import { parseAsArrayOf, parseAsInteger, parseAsString } from 'nuqs';

export const searchBarFilterClient = {
	filter: {
		keywords: parseAsString.withDefault(''),
		actions: parseAsArrayOf(parseAsString, ';').withDefault([]),
		types: parseAsArrayOf(parseAsString, ';').withDefault([]),
		piece: parseAsArrayOf(parseAsString, ';').withDefault([]),
		zone: parseAsArrayOf(parseAsString, ';').withDefault([]),
		budget: parseAsArrayOf(parseAsInteger, ';').withDefault([1000, 2000000]),
		availability: parseAsString.withDefault('')
	},
	option: {
		clearOnDefault: true,
		throttleMs: 500,
	}
}