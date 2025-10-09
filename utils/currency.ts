export const formatCurrency = (amount: number, locale: string = 'fr-FR', currency: string = 'XAF'): string => {
	return new Intl.NumberFormat(locale, {style: 'currency', currency, maximumFractionDigits: 0}).format(amount);
}