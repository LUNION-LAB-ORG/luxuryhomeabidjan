// 'use client';

// import { useState } from 'react';
// import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Calendar } from '@/components/ui/calendar';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { Button } from '@/components/ui/button';
// import { format } from 'date-fns';
// import {
//   Search,
//   Home,
//   CalendarDays,
//   MapPin,
//   DollarSign,
//   Building2,
//   BedDouble
// } from 'lucide-react';
// import { BudgetSlider } from './budget-slider';
// import { useRouter } from 'next/navigation';
// import { Checkbox } from '../ui/checkbox';


// export default function PropertyFilter() {
//     const [filters, setFilters] = useState({
//         motcle: '',
//         action: [] as string[],
//         type: [] as string[],
//         pieces: '',
//         zone: '',
//         budgetMin: 200000,
//         budgetMax: 3000000,
//         dispo: undefined as Date | undefined,
//       });
      
//   const [date, setDate] = useState<Date | undefined>(undefined);

//   const fieldClass = "flex items-center gap-2 w-full";

//   const router = useRouter();

// const applyFilters = () => {
//   const params = new URLSearchParams();

//   if (filters.motcle) params.set('motcle', filters.motcle);
//   if (filters.action.length > 0) params.set('action', filters.action.join(','));
// //   if (filters.action) params.set('action', filters.action);
// if (filters.type.length > 0) params.set('type', filters.type.join(','));
// //   if (filters.type) params.set('type', filters.type);
//   if (filters.pieces) params.set('pieces', filters.pieces);
//   if (filters.zone) params.set('zone', filters.zone);
//   if (filters.budgetMin) params.set('budgetMin', filters.budgetMin.toString());
//   if (filters.budgetMax) params.set('budgetMax', filters.budgetMax.toString());
//   if (filters.dispo) params.set('dispo', filters.dispo.toISOString().split('T')[0]);

//   router.push(`/recherche-bien?${params.toString()}`);
// };

//   return (
//     <div className="grid gap-4 md:grid-cols-4 p-4 rounded-xl shadow-md bg-white">
//       {/* Champ mot-clé */}
//       <div className={fieldClass}>
//         <Search className="w-4 h-4 text-muted-foreground" />
//         <Input placeholder="Mot-clé (ex: piscine…)" className="border-none focus-visible:ring-0 focus-visible:ring-offset-0" />
//       </div>

//       {/* Action */}
//       <MultiSelectAction
//         selected={filters.action}
//         onChange={(val) => setFilters(prev => ({ ...prev, action: val }))}
//         />
//       {/* <div className={fieldClass}>
//         <Building2 className="w-4 h-4 text-muted-foreground" />
//         <Select
//         onValueChange={(val) => setFilters(prev => ({ ...prev, action: val }))}
//         // onValueChange={(val) => console.log(val)}
//         >
//           <SelectTrigger className="border-none ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0">
//             <SelectValue placeholder="Action" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="location_permanente">Location permanente</SelectItem>
//             <SelectItem value="location_saisonniere">Location saisonnière</SelectItem>
//             <SelectItem value="vente">Vente</SelectItem>
//             <SelectItem value="achat">Achat</SelectItem>
//             <SelectItem value="investissement">Investissement</SelectItem>
//           </SelectContent>
//         </Select>
//       </div> */}

//       {/* Type de logement */}
//       <MultiSelectType
//         selected={filters.type}
//         onChange={(val) => setFilters(prev => ({ ...prev, type: val }))}
//         />
//       {/* <div className={fieldClass}>
//         <Home className="w-4 h-4 text-muted-foreground" />
//         <Select>
//           <SelectTrigger className="border-none p-0">
//             <SelectValue placeholder="Type de logement" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="villa">Villa</SelectItem>
//             <SelectItem value="villa_duplex">Villa Duplex</SelectItem>
//             <SelectItem value="villa_triplex">Villa Triplex</SelectItem>
//             <SelectItem value="appartement">Appartement</SelectItem>
//           </SelectContent>
//         </Select>
//       </div> */}

//       {/* Pièces */}
//       <div className={fieldClass}>
//         <BedDouble className="w-4 h-4 text-muted-foreground" />
//         <Select>
//           <SelectTrigger className="border-none p-0">
//             <SelectValue placeholder="Pièces (T3, T4…)" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="T3">T3</SelectItem>
//             <SelectItem value="T4">T4</SelectItem>
//             <SelectItem value="T5">T5</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Zone */}
//       <div className={fieldClass}>
//         <MapPin className="w-4 h-4 text-muted-foreground" />
//         <Select>
//           <SelectTrigger className="border-none p-0">
//             <SelectValue placeholder="Zone" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="cocody">Cocody</SelectItem>
//             <SelectItem value="plateau">Plateau</SelectItem>
//             <SelectItem value="assinie">Assinie</SelectItem>
//             <SelectItem value="bingerville">Bingerville</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Budget */}
//       <div className="col-span-full md:col-span-2">
//         <BudgetSlider />
//       </div>

//       {/* <div className={fieldClass}>
//         <DollarSign className="w-4 h-4 text-muted-foreground" />
//         <Select>
//           <SelectTrigger className="border-none p-0">
//             <SelectValue placeholder="Budget" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="-500k">Moins de 500K</SelectItem>
//             <SelectItem value="500k-1M">500K - 1M</SelectItem>
//             <SelectItem value="1M-5M">1M - 5M</SelectItem>
//             <SelectItem value="5M+">5M et plus</SelectItem>
//           </SelectContent>
//         </Select>
//       </div> */}

//       {/* Disponibilité (calendrier) */}
//       <div className={fieldClass}>
//         <CalendarDays className="w-4 h-4 text-muted-foreground" />
//         <Popover>
//           <PopoverTrigger asChild>
//             <Button variant="ghost" className="p-0 h-auto font-normal text-left">
//               {date ? format(date, 'dd/MM/yyyy') : 'Disponibilité'}
//             </Button>
//           </PopoverTrigger>
//           <PopoverContent className="w-auto p-0">
//             <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
//           </PopoverContent>
//         </Popover>
//       </div>

//       {/* Bouton de recherche */}
//       <Button
//       onClick={applyFilters}
//        className="col-span-full md:col-span-1 mt-2">Rechercher</Button>
//     </div>
//   );
// }



// const OPTIONS = [
//     { label: 'Location permanente', value: 'location_permanente' },
//     { label: 'Location saisonnière', value: 'location_saisonniere' },
//     { label: 'Vente', value: 'vente' },
//     { label: 'Achat', value: 'achat' },
//     { label: 'Investissement', value: 'investissement' },
//   ];
  
//   export function MultiSelectAction({
//     selected,
//     onChange,
//   }: {
//     selected: string[];
//     onChange: (values: string[]) => void;
//   }) {
//     const toggleValue = (value: string) => {
//       if (selected.includes(value)) {
//         onChange(selected.filter((v) => v !== value));
//       } else {
//         onChange([...selected, value]);
//       }
//     };
  
//     const handleSelectAll = () => {
//       onChange(OPTIONS.map(o => o.value));
//     };
  
//     const handleDeselectAll = () => {
//       onChange([]);
//     };
  
//     const selectedLabels = OPTIONS
//       .filter((o) => selected.includes(o.value))
//       .map((o) => o.label);
  
//     return (
//       <div className="flex items-center gap-2 w-full">
//         <Building2 className="w-4 h-4 text-muted-foreground" />
//         <Popover>
//           <PopoverTrigger asChild>
//             <Button variant="ghost" className="p-0 h-auto text-left font-normal">
//               {selected.length > 0
//                 ? `Action : ${selectedLabels.join(', ')}`
//                 : 'Sélectionner action(s)'}
//             </Button>
//           </PopoverTrigger>
//           <PopoverContent className="w-64">
//             <div className="flex justify-between mb-2">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={handleSelectAll}
//               >
//                 Tout sélectionner
//               </Button>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={handleDeselectAll}
//               >
//                 Tout désélectionner
//               </Button>
//             </div>
//             <div className="flex flex-col gap-2">
//               {OPTIONS.map((opt) => (
//                 <label
//                   key={opt.value}
//                   className="flex items-center gap-2 cursor-pointer"
//                 >
//                   <Checkbox
//                     checked={selected.includes(opt.value)}
//                     onCheckedChange={() => toggleValue(opt.value)}
//                   />
//                   <span>{opt.label}</span>
//                 </label>
//               ))}
//             </div>
//           </PopoverContent>
//         </Popover>
//       </div>
//     );
//   }

//   const optionType = [
//     { label: 'Villa', value: 'villa' },
//     { label: 'Villa duplex', value: 'villa_duplex' },
//     { label: 'Villa triplex', value: 'villa_triplex' },
//     { label: 'Appartement', value: 'appartement' },
//   ];
  
//   export function MultiSelectType({
//     selected,
//     onChange,
//   }: {
//     selected: string[];
//     onChange: (values: string[]) => void;
//   }) {
//     const toggleValue = (value: string) => {
//       if (selected.includes(value)) {
//         onChange(selected.filter((v) => v !== value));
//       } else {
//         onChange([...selected, value]);
//       }
//     };
  
//     const handleSelectAll = () => {
//       onChange(optionType.map((o) => o.value));
//     };
  
//     const handleDeselectAll = () => {
//       onChange([]);
//     };
  
//     const selectedLabels = OPTIONS
//       .filter((o) => selected.includes(o.value))
//       .map((o) => o.label);
  
//     return (
//       <div className="flex items-center gap-2 w-full">
//         <Home className="w-4 h-4 text-muted-foreground" />
//         <Popover>
//           <PopoverTrigger asChild>
//             <Button variant="ghost" className="p-0 h-auto text-left font-normal">
//               {selected.length > 0
//                 ? `Type : ${selectedLabels.join(', ')}`
//                 : 'Sélectionner type(s)'}
//             </Button>
//           </PopoverTrigger>
//           <PopoverContent className="w-64">
//             <div className="flex justify-between mb-2">
//               <Button variant="outline" size="sm" onClick={handleSelectAll}>
//                 Tout sélectionner
//               </Button>
//               <Button variant="outline" size="sm" onClick={handleDeselectAll}>
//                 Tout désélectionner
//               </Button>
//             </div>
//             <div className="flex flex-col gap-2">
//               {optionType.map((opt) => (
//                 <label
//                   key={opt.value}
//                   className="flex items-center gap-2 cursor-pointer"
//                 >
//                   <Checkbox
//                     checked={selected.includes(opt.value)}
//                     onCheckedChange={() => toggleValue(opt.value)}
//                   />
//                   <span>{opt.label}</span>
//                 </label>
//               ))}
//             </div>
//           </PopoverContent>
//         </Popover>
//       </div>
//     );
//   }