'use client';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="flex items-center gap-2   mmax-w-sm  ssm:max-w-64">
      <Search className="w-4 h-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Rechercher un mot-clé..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1"
      />
    </div>
  );
}
