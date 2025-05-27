'use client';

import { Slider } from '@/components/ui/slider';
import { BadgeDollarSign } from 'lucide-react';
import { useState } from 'react';

export function BudgetSlider({
  value,
  onChange,
  min = 0,
  max = 5000000,
  step = 50000,
}: {
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  const [internal, setInternal] = useState<number>(value || min);

  return (
    <div className="flex items-center gap-4 w-full">
      <BadgeDollarSign className="w-4 h-4 text-muted-foreground" />
      <div className="flex flex-col w-full">
        <span className="text-sm text-muted-foreground mb-1">
          Budget max : {internal.toLocaleString()} FCFA
        </span>
        <Slider
          min={min}
          max={max}
          step={step}
          defaultValue={[value]}
          onValueChange={([v]) => setInternal(v)}
          onValueCommit={([v]) => onChange(v)}
        />
      </div>
    </div>
  );
}
