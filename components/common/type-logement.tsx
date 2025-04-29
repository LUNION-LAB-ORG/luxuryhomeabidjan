import { TypeLogements } from "../home/searchbar/form-location";
import { Checkbox } from "../ui/checkbox";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

interface Log {
    id: string,
    label: string,
  }

interface TypeLogementProps{
    form: any,
    typeLogement:TypeLogements[]

}

const TypeLogement:React.FC<TypeLogementProps>=({form,typeLogement})=>{

    return (
        <FormField
          control={form.control}
          name="typeLogement"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-[16px] font-bold">
                  Sélectionnez le type de logement
                </FormLabel>
              </div>
              {typeLogement.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="typeLogement"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="text-[16px] flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([
                                    ...field.value,
                                    item.id,
                                  ])
                                : field.onChange(
                                    field.value?.filter(
                                      (value:string) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-md text-gray-700 font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
    )
}



export default TypeLogement