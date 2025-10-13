"use client";
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { contactFormSchema } from '@/schemas/contact-form.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import z from 'zod';

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      firstName: "",
      email: "",
      phone: "",
      location: "",
      surface: 0,
      rooms: 0,
      minBudget: 0,
      maxBudget: 0,
      message: "",
    },
  });

  const inputBaseClasses = "border-2 border-[#8080808C] bg-[#090909] text-white placeholder:text-gray-500 rounded-xl py-2.5 w-full";

  function onSubmit(data: z.infer<typeof contactFormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className='flex flex-col space-y-4'>
            <FormField
              control={form.control}
              name="requestType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium text-white'>Type de la demande</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className={cn(inputBaseClasses)}>
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="achat">Achat</SelectItem>
                        <SelectItem value="location">Location</SelectItem>
                        <SelectItem value="investissement">Investissement</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* IDENTITÉ */}
            <div className='space-y-1.5'>
              <FormLabel className='text-sm font-medium text-white mb-1.5'>
                Identité
              </FormLabel>
              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className={cn(inputBaseClasses)}>
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monsieur">Monsieur</SelectItem>
                          <SelectItem value="madame">Madame</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Votre nom"
                        className={cn(inputBaseClasses)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Votre prénom"
                        className={cn(inputBaseClasses)}
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
                        {...field}
                        placeholder="Votre email"
                        className={cn(inputBaseClasses)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Votre numéro"
                        className={cn(inputBaseClasses)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* BESOIN */}
            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium text-white'>Besoin</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className={cn(inputBaseClasses)}>
                        <SelectValue placeholder="Sélectionnez un type de bien" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="appartement">Appartement</SelectItem>
                        <SelectItem value="maison">Maison</SelectItem>
                        <SelectItem value="terrain">Terrain</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='flex flex-col justify-between'>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium text-white'>Emplacement</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Écrivez l'emplacement"
                      className="border-2 border-[#8080808C] bg-[#090909] text-white placeholder:text-gray-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="surface"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium text-white'>Superficie (m²)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      inputMode='numeric'
                      placeholder="Écrivez la superficie"
                      className={cn(inputBaseClasses)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium text-white'>Nombre de pièces</FormLabel>
                  <FormControl>
                    <InputGroup className={cn(inputBaseClasses, 'max-w-28')}>
                      <InputGroupInput {...field} inputMode='numeric' />
                      <InputGroupAddon align="inline-end" className='flex items-center space-x-0.5'>
                        <motion.button
                          whileTap={{
                            scale: 0.95,
                            backgroundColor: "rgba(118, 118, 128, 0.3)",
                            transition: { duration: 0.2 },
                          }}
                          onClick={
                            () => {
                              const currentValue = field.value || 0;
                              if (currentValue > 0) {
                                field.onChange(currentValue - 1);
                              }
                            }
                          }
                          type="button"
                          className="border-0 bg-[#7676801F] text-white rounded-full flex items-center justify-center size-6"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          whileTap={{
                            scale: 0.95,
                            backgroundColor: "rgba(118, 118, 128, 0.3)",
                            transition: { duration: 0.2 },
                          }}
                          onClick={
                            () => {
                              const currentValue = field.value || 0;
                              field.onChange(currentValue + 1);
                            }
                          }
                          type='button'
                          className="border-0 bg-[#7676801F] text-white rounded-full flex items-center justify-center size-6"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </motion.button>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="minBudget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium text-white'>Budget min</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      inputMode='numeric'
                      placeholder="Écrivez la somme"
                      className={cn(inputBaseClasses)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maxBudget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium text-white'>Budget max</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      inputMode='numeric'
                      placeholder="Écrivez la somme"
                      className={cn(inputBaseClasses)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className='lg:col-span-2'>
                <FormLabel className='text-sm font-medium text-white'>Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={5}
                    placeholder="Écrivez votre message"
                    className={cn(inputBaseClasses, 'field-sizing-fixed')}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="mt-4 w-full rounded-2xl bg-white text-black hover:bg-white/90">
          Soumettre ma demande
        </Button>
      </form>
    </Form>
  )
}