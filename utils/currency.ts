export const formatCurrency = (amount: number|string, locale: string = 'fr-FR', currency: string = 'XOF'): string => {
	if (typeof amount === 'string') {
		amount = parseFloat(amount);
	}
	return new Intl.NumberFormat(locale, {style: 'currency', currency, maximumFractionDigits: 0}).format(amount);
}