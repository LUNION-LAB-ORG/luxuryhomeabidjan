'use client';

import * as React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowUpDown, BadgePercent, ChevronRight } from 'lucide-react';

const OPTIONS = [
  { label: 'Location permanente', value: 'location_permanente' },
  { label: 'Location saisonnière', value: 'location_saisonniere' },
  { label: 'Vente', value: 'vente' },
  { label: 'Achat', value: 'achat' },
  { label: 'Investissement', value: 'investissement' },
];

export function MultiSelectAction({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  const toggleValue = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const handleSelectAll = () => {
    onChange(OPTIONS.map((o) => o.value));
  };

  const handleDeselectAll = () => {
    onChange([]);
  };

  const selectedLabels = OPTIONS
    .filter((o) => selected.includes(o.value))
    .map((o) => o.label);

  return (
    <div className="flex items-center gap-2 w-full mmax-w-sm  ssm:max-w-64 overflow-hidden">
      <Popover>
        <PopoverTrigger asChild>
          <div className='flex justify-between  items-center gap-2 cursor-pointer  w-full max-w-sm  sm:max-w-64'>
            <div className='flex items-center gap-2 '>
              <BadgePercent className="w-4 h-4 text-muted-foreground" />
              <Button variant="ghost" className="p-0 h-auto text-left font-normal">
                {selected.length > 0
                  ? `Action : ${selectedLabels.join(', ')}`
                  : 'Sélectionner action(s)'}
              </Button>

            </div>
            <span className='mr-2 sm:mr-0'>
              <ArrowUpDown className='h-3 w-3' />
            </span>

          </div>
      
        </PopoverTrigger>

        <PopoverContent className="ww-64 !overflow-hidden">
          <div className="flex justify-between text-[10px] mb-2">
            <Button   variant="outline" size="sm"  onClick={handleSelectAll}>
              Tout sélectionner
            </Button>
            <Button  variant="outline" size="sm"  onClick={handleDeselectAll}>
              Désélectionner
            </Button>
          </div>
          <div className="flex flex-col gap-2 overflow-hidden">
            {OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Checkbox
                  checked={selected.includes(opt.value)}
                  onCheckedChange={() => toggleValue(opt.value)}
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
