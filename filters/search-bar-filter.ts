import {parseAsArrayOf, parseAsFloat, parseAsIsoDate, parseAsString} from "nuqs";

export const searchBarFilterClient = {
	filter: {
		keywords: parseAsString.withDefault(''),
		actions: parseAsArrayOf(parseAsString, ';').withDefault([]),
		types: parseAsArrayOf(parseAsString, ';').withDefault([]),
		piece: parseAsArrayOf(parseAsString, ';').withDefault([]),
		zone: parseAsArrayOf(parseAsString, ';').withDefault([]),
		budget: parseAsFloat.withDefault(0),
		availability: parseAsIsoDate.withDefault(new Date())
	},
	option: {
		clearOnDefault: true,
		throttleMs: 500,
	}
}