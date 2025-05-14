"use client";

import { Plus, X } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  date: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  heure: z.string().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  nomPrenom: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  telephone: z.number().min(8, {
    message: "Username must be at least 2 characters.",
  }),
  message: z.string().min(5, {
    message: "Username must be at least 2 characters.",
  }),
});

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

export default function FormImmobilier() {
  const [openDemandeVisite, setOpenDemandeVisite] = useState(false);
  const [openServiceCommercial, setOpenServiceCommercial] = useState(false);

  const styleVisite = openDemandeVisite ? "shadow-2xl" : "border";
  const styleService = openServiceCommercial ? "shadow-2xl" : "border";

  return (
    <section className="mx-auto px-4 lg:px-20 lg:pb-6">
      <div
        className={`mb-10 lg:mb-20  lg:p-10 lg:py-12  ${openDemandeVisite 
    ? "py-10 px-4" 
    : "p-3 lg:p-10 lg:py-12 "} ${styleVisite} border-stone-400 rounded-[50px] lg:rounded-[70px]`}
      >
        <div
          onClick={() => setOpenDemandeVisite((prev) => !prev)}
          className="cursor-pointer flex justify-between text-[18px] lg:text-[26px] font-bold"
        >
          <span>Demander une visite</span>
          <span className="text-stone-700">
            {openDemandeVisite ? <X size={35} className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px]"/> : <Plus className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px]" />}
          </span>
        </div>
        {/* contenu hidden */}
        {openDemandeVisite && <DemanderVisite />}
      </div>
      {/* div 2 */}
      <div
        className={`mb-10 llg:mb-24 ${openServiceCommercial 
    ? "py-10 px-4 " 
    : "p-3 lg:p-10 lg:py-12"} ${styleService} border-stone-400 rounded-[50px] lg:rounded-[70px]`}
      >
        <div
          onClick={() => setOpenServiceCommercial((prev) => !prev)}
          className="cursor-pointer flex justify-between text-[18px] lg:text-[26px] font-bold"
        >
          <span>Services commercial</span>
          <span className="text-stone-700">
            {openServiceCommercial ? <X className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px]" /> : <Plus className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px]" />}
          </span>
        </div>
        {openServiceCommercial && <ServiceCommercial />}
      </div>
    </section>
  );
}

export function DemanderVisite() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: "",
      heure: "",
      nomPrenom: "",
      email: "",
      telephone: 225,
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="pt-6 lg:pt-10 overflow-hidden">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Rendez-vous */}
          <div>
            <h3 className="font-bold pb-4">Rendez-vous</h3>
            <div className="flex flex-col lg:flex-row flex-wrap gap-3 lg:gap-10 ">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="sm:min-w-[400px] border-stone-700 rounded-xl lg:rounded-2xl  py-5 lg:py-6  px-4"
                        placeholder="Date de rendez-vous"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="heure"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="sm:min-w-[400px] border-stone-700 rounded-xl lg:rounded-2xl  py-5 lg:py-6  px-4"
                        placeholder="Heur de rencontre"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* vos information */}

          <div>
            <h3 className="font-bold pb-4">Vos information</h3>
            <div className="flex flex-col lg:flex-row flex-wrap gap-3 lg:gap-10 ">
              <FormField
                control={form.control}
                name="nomPrenom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="sm:min-w-[400px] border-stone-700 rounded-xl lg:rounded-2xl  py-5 lg:py-6  px-4"
                        placeholder="Nom et prénoms"
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
                        className="sm:min-w-[400px] border-stone-700 rounded-xl lg:rounded-2xl  py-5 lg:py-6  px-4"
                        placeholder="email"
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
                        className="sm:min-w-[400px] border-stone-700 rounded-xl lg:rounded-2xl  py-5 lg:py-6  px-4"
                        placeholder="Numéro téléphone"
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
                      placeholder="votre message"
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
              className="text-center rounded-2xl py-4 lg:py-6 lg:min-w-[550px]"
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

export function ServiceCommercial() {
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
    <div className="pt-6 lg:pt-10 overflow-hidden">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Rendez-vous */}
          <div>
            <h3 className="font-bold pb-4">Vos information</h3>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 ">
              <FormField
                control={form.control}
                name="nomPrenom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="sm:min-w-[400px] border-stone-700 rounded-xl lg:rounded-2xl  py-5 lg:py-6 px-4"
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
                        className="sm:min-w-[400px] border-stone-700 rounded-xl lg:rounded-2xl  py-5 lg:py-6 px-4"
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
                        className="sm:min-w-[400px] border-stone-700 rounded-xl lg:rounded-2xl  py-5 lg:py-6  px-4"
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
                        className="sm:min-w-[400px] border-stone-700 rounded-xl lg:rounded-2xl  py-5 lg:py-6  px-4"
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

          <div className="flex items-center justify-between">
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
