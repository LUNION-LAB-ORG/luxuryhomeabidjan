'use client';

import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export function SelectDate({
  value,
  onChange,
}: {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
}) {
  return (
    <div className="flex items-center gap-2 w-full max-w-sm  sm:max-w-64">
      <CalendarIcon className="w-4 h-4 text-muted-foreground" />
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="p-0 h-auto text-left font-normal">
            {value ? `Disponible dès : ${format(value, 'dd MMM yyyy', { locale: fr })}` : 'Disponibilité'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            locale={fr}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
