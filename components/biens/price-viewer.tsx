import React from 'react';
import { formatCurrency } from '@/utils/currency';
import { getPricePeriodLabel } from '@/features/properties/utils/enum-to-label';
import { IProperty } from '@/features/properties/types/property.type';

function PriceViewer({property}: {property: IProperty}) {
  const isOnSale = property.listingType == 'SALE' || property.pricePeriod == 'NONE'
  console.log('property', property);
  return (
    <span>
      {formatCurrency(property.price, 'fr-FR', property.currency)}
      {isOnSale ? '' : property.pricePeriod ? `/${getPricePeriodLabel(property.pricePeriod)}` : ''}
    </span>
  );
}

export default PriceViewer;