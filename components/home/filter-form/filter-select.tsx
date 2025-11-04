import React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { IOption } from '@/types/filter-select';

type Props = {
  options: IOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  label: string;
}

function FilterSelect({ options, selected, onChange, label }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between text-[#595959] text-sm first-letter:capitalize"
        >
          {selected.length === 0
            ? label
            : selected.length > 1
              ? `${selected.length} sélections`
              : `${options.filter(option => selected.includes(option.value)).map(option => option.label).join(', ')}`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Rechercher..." />
          <CommandEmpty>Aucun résultat.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  if (selected.length === options.length) {
                    onChange([]);
                  } else {
                    onChange(options.map(option => option.value));
                  }
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    selected.length === options.length ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {selected.length === options.length ? 'Tout désélectionner' : 'Tout sélectionner'}
              </CommandItem>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => {
                    const newSelected = selected.includes(option.value)
                      ? selected.filter((value) => value !== option.value)
                      : [...selected, option.value];
                    onChange(newSelected);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      selected.includes(option.value) ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default FilterSelect;