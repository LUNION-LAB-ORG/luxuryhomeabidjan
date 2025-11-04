import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, LucideIcon } from 'lucide-react';

interface FilterListItem {
  id: string;
  name?: string;
  label?: string;
}

interface FilterListProps {
  title: string;
  items: FilterListItem[];
  onItemClick: (id: string) => void;
  icon?: LucideIcon;
  className?: string;
}

export const FilterList: React.FC<FilterListProps> = ({
                                                        title,
                                                        items,
                                                        onItemClick,
                                                        icon: Icon = ChevronRight,
                                                        className = 'bg-black',
                                                      }) => {
  return (
    <ul className={`${className} max-h-80 py-4 px-6 overflow-y-auto`}>
      <h2 className="text-white text-lg mb-4">{title}</h2>
      {items.map((item) => (
        <li key={item.id} className="mb-2">
          <Button
            variant="link"
            className="text-base font-medium text-white cursor-pointer"
            onClick={() => onItemClick(item.id)}
          >
            <Icon className="size-5" />
            {item.name || item.label}
          </Button>
        </li>
      ))}
    </ul>
  );
};
