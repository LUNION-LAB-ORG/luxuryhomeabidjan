import { isBefore } from "date-fns";
import { DateRange } from "react-day-picker";
import { Calendar } from "../ui/calendar";

interface PropsReservation {
    range: DateRange | undefined;
    setRange: (range: DateRange | undefined) => void;
  }
  
  const ReservationCalendar=({ range, setRange }: PropsReservation)=> {
    // const [date, setDate] = useState<Date | undefined>(new Date())
    const handleSelect = (selectedRange: DateRange | undefined) => {
      // Cas 1 : aucun début sélectionné → on commence
      if (!range?.from || (range.from && range.to)) {
        setRange({ from: selectedRange?.from, to: undefined });
      }
      // Cas 2 : un début existe, et une fin choisie → on met à jour
      else if (range?.from && !range.to && selectedRange?.to) {
        setRange({ from: range.from, to: selectedRange.to });
      }
      // Cas 3 : on reclique une nouvelle date → recommencer
      else if (selectedRange?.from && isBefore(selectedRange.from, range.from)) {
        setRange({ from: selectedRange.from, to: undefined });
      } else {
        setRange(selectedRange);
      }
    };
  
    return (
      <div className="w-full max-w-lg mx-auto">
        <p className="mb-2 font-medium">Dates de réservation</p>
        <Calendar
          mode="range"
          selected={range}
          onSelect={handleSelect}
          numberOfMonths={1}
          disabled={(date) => date < new Date()}
          className="rounded-md border shadow"
        />
  
        <div className="mt-4 text-sm text-muted-foreground">
          {range?.from && range?.to ? (
            <>
              Réservation du{" "}
              <span className="font-medium">
                {range.from.toLocaleDateString("fr-FR")}
              </span>{" "}
              au{" "}
              <span className="font-medium">
                {range.to.toLocaleDateString("fr-FR")}
              </span>
            </>
          ) : range?.from ? (
            <>Date d’arrivée : {range.from.toLocaleDateString("fr-FR")}</>
          ) : (
            <>Aucune date sélectionnée</>
          )}
        </div>
      </div>
    );
  }



  export default ReservationCalendar