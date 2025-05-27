'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchemaCommercial = z.object({
    nomPrenom: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    telephone: z.number().min(8, {
      message: "Username must be at least 2 characters.",
    }),
    heure: z.string().min(1, {
      message: "Username must be at least 2 characters.",
    }),
    maPersonne: z.string().min(3, {
      message: "Username must be at least 2 characters.",
    }),
    message: z.string().min(5, {
      message: "Username must be at least 2 characters.",
    }),
  });
export default function ServiceCommercial() {
    const form = useForm<z.infer<typeof formSchemaCommercial>>({
      resolver: zodResolver(formSchemaCommercial),
      defaultValues: {
        nomPrenom: "",
        email: "",
        telephone: 225,
        maPersonne: "",
        message: "",
      },
    });
  
    function onSubmit(values: z.infer<typeof formSchemaCommercial>) {
      console.log(values);
    }
    return (
              <div className="pt-6 lg:p-10 overflow-hidden">
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Rendez-vous */}
                    <div>
                    <h3 className="font-bold pb-4">Vos information</h3>
                    <div className="flex flex-col lg:flex-row flex-wrap gap-3 lg:gap-5 ">
                        <FormField
                        control={form.control}
                        name="nomPrenom"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input
                                className="lg:min-w-[350px]  border-stone-700 rounded-xl lg:rounded-2xl  py-5 lg:py-6 px-4"
                                placeholder="Non et prénoms"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input
                                className="lg:min-w-[350px]  border-stone-700 rounded-xl lg:rounded-2xl  py-5 lg:py-6 px-4"
                                placeholder="Email"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="telephone"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input
                                className="lg:min-w-[350px]  border-stone-700 rounded-xl lg:rounded-2xl  py-5 lg:py-6  px-4"
                                placeholder="Numéro de téléphone "
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="maPersonne"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input
                                className="lg:min-w-[350px] border-stone-700 rounded-xl lg:rounded-2xl  py-5 lg:py-6  px-4"
                                placeholder="Je suis en tant que"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
        
                    
                    </div>
        
                    {/* message */}
                    <div className="max-w-7xl">
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <textarea
                                className=" border border-stone-700 max-h-[100px] rounded-2xl p-4"
                                placeholder="Tape ton message ici…"
                                rows={4}
                                {...field}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    </div>
        
                    <div className="flex flex-col gap-2 lg:flex-row items-center justify-between">
                    <p className="font-bold">Conditions d'utilisation</p>
                    <Button
                        className="text-center text-[20px]] rounded-2xl py-6 lg:min-w-[550px]"
                        type="submit"
                    >
                        Soumettre ma demande de visite
                    </Button>
                    </div>
                </form>
                </Form>
            </div>          
    
    );
  }