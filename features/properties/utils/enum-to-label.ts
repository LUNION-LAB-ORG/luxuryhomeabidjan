import { listingTypeEnum, pricePeriodEnum } from '@/features/properties/types/property.type';

export function getListingTypeLabel(type: listingTypeEnum): string {
  const labels: Record<listingTypeEnum, string> = {
    [listingTypeEnum.SALE]: 'Vente',
    [listingTypeEnum.RENT]: 'Location',
  };

  return labels[type] || 'Type inconnu';
}

export function getPricePeriodLabel(period: pricePeriodEnum): string {
  const labels: Record<string, string> = {
    'NONE': '',
    'MONTH': 'mois',
    'WEEK': 'semaine',
    'DAY': 'jour',
    'YEAR': 'an',
  };

  return labels[period] || '';
}