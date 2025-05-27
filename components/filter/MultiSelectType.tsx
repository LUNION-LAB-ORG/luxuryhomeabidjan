'use client';

import * as React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowUpDown, Home } from 'lucide-react';

const OPTIONS = [
  { label: 'Villa', value: 'villa' },
  { label: 'Villa duplex', value: 'villa_duplex' },
  { label: 'Villa triplex', value: 'villa_triplex' },
  { label: 'Appartement', value: 'appartement' },
];

export function MultiSelectType({
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
    <div className="flex items-center gap-2  w-full overflow-hidden max-w-sm  sm:max-w-64">
     
      <Popover>
        <PopoverTrigger asChild>
          <div className='flex justify-between  items-center gap-2 cursor-pointer  w-full max-w-sm  sm:max-w-64'>
          <div className='flex items-center gap-2 '>
          <Home className="w-4 h-4 text-muted-foreground" />
          <Button variant="ghost" className="p-0 h-auto text-left font-normal">
            {selected.length > 0
              ? `Logement : ${selectedLabels.join(', ')}`
              : 'Type de logement'}
          </Button>       
            </div>
            <span className='mr-2 sm:mr-0'>
          <ArrowUpDown className='h-3 w-3' />
         </span>
          </div>
     
        </PopoverTrigger>
        <PopoverContent className="ww-64">
          <div className="flex justify-between mb-2">
            <Button variant="outline" size="sm" onClick={handleSelectAll}>
              Tout sélectionner
            </Button>
            <Button variant="outline" size="sm" onClick={handleDeselectAll}>
              Désélectionner
            </Button>
          </div>
          <div className="flex flex-col gap-2">
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
