import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface PieceSelectorProps {
  form: any; // Typage générique pour 'form', ajuste selon ton type spécifique
  valuePiece: number;
  setValuePiece: React.Dispatch<React.SetStateAction<number>>;
}

const PieceSelector: React.FC<PieceSelectorProps> = ({
  form,
  valuePiece,
  setValuePiece,
}) => {
  return (
    <FormField
      control={form.control} // Passe le contrôle du formulaire
      name="piece"
      render={(
        { field } // Utilisation de 'field' à l'intérieur du render prop
      ) => (
        <FormItem className="w-full">
          <FormLabel className="text-[16px] font-bold">
            Nombre de pièce
          </FormLabel>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[16px] text-gray-700 ">
              {valuePiece} pièce
            </span>
            <FormControl>
              <div className="flex items-center space-x-2 border p-2 rounded-3xl">
                <Button
                  className="rounded-3xl"
                  type="button"
                  variant="outline"
                  onClick={() => {
                    // Utilisation de 'field' pour modifier la valeur du champ
                    field.onChange(Math.max(field.value - 1, 1));
                    setValuePiece(Math.max(field.value - 1, 1));
                  }}
                >
                  <ChevronLeft size="md" />
                </Button>
                <Input
                  {...field} // Déstructure 'field' pour l'appliquer aux props de l'input
                  onChange={(e) => {
                    // Assure-toi d'utiliser 'field.onChange' pour la mise à jour de la valeur
                    field.onChange(Math.max(Number(e.target.value), 1));
                    setValuePiece(Math.max(Number(e.target.value), 1));
                  }}
                  min={1}
                  className="w-12 text-center border-none shadow-none "
                />
                <Button
                  className="rounded-3xl"
                  type="button"
                  variant="outline"
                  onClick={() => {
                    // Incrémente la valeur avec 'field.onChange'
                    field.onChange(field.value + 1);
                    setValuePiece(field.value + 1);
                  }}
                >
                  <ChevronRight />
                </Button>
              </div>
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PieceSelector;
