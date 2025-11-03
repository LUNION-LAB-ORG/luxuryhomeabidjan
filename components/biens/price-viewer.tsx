import React from 'react';
import { formatCurrency } from '@/utils/currency';
import { getPricePeriodLabel } from '@/features/properties/utils/enum-to-label';
import { IProperty } from '@/features/properties/types/property.type';

function PriceViewer({property}: {property: IProperty}) {
  return (
    <span>
      {`${formatCurrency(property.price, 'fr-FR', property.currency)}/${property.pricePeriod ? getPricePeriodLabel(property.pricePeriod) : ''}`}
    </span>
  );
}

export default PriceViewer;