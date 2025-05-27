'use client';

import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowUpDown, MapPin } from 'lucide-react';

const OPTIONS = [
  'Cocody',
  'Plateau',
  'Assinie',
  'Bingerville',
];

export function SelectZone({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="flex items-center gap-2 w-full max-w-sm  sm:max-w-64">
      <Popover>
        <PopoverTrigger asChild>
        <div className='flex justify-between  items-center gap-2 cursor-pointer  w-full max-w-sm  sm:max-w-64'>
            <div className='flex items-center gap-2 '>
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <Button variant="ghost" className="p-0 h-auto text-left font-normal">
            {value ? `Zone : ${value}` : 'Sélectionner une zone'}
          </Button>

            </div>
            <span className='mr-2 sm:mr-0'>
              <ArrowUpDown className='h-3 w-3' />
            </span>

          </div>

        </PopoverTrigger>
        <PopoverContent className="w-48">
          <RadioGroup
            value={value}
            onValueChange={onChange}
            className="flex flex-col gap-2"
          >
            {OPTIONS.map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <RadioGroupItem value={opt} id={opt} />
                <span>{opt}</span>
              </label>
            ))}
          </RadioGroup>
        </PopoverContent>
      </Popover>
    </div>
  );
}
