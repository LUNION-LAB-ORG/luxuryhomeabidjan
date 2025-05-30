"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lasName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  fone: z.number().min(8, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  message: z.string().min(12, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function SectionPageContact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lasName: "",
      fone: 225,
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 ">
      <div className=" mx-auto ">
        <h2 className="text-[18px] lg:text-[24px] text-center font-bold pb-8">
          Laissez nous un message en utilisant le formulaire ci-dessous
        </h2>

        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] font-semibold">
                      Nom
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-xl border-2 py-4 lg:py-7"
                        placeholder="Nom"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lasName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] font-semibold">
                      Prénom(s)
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-xl border-2 py-4 lg:py-7"
                        placeholder="Prénom"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] font-semibold">
                      Téléphone
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-xl border-2 py-4 lg:py-7"
                        placeholder="+225"
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
                    <FormLabel className="text-[16px] font-semibold">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-xl border-2 py-4 lg:py-7"
                        placeholder="E-mail"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] font-semibold">
                      Notes
                    </FormLabel>
                    <FormControl>
                      <textarea
                        placeholder="Entrez votre Message "
                        className="resize-none min-h-[150px] rounded-2xl p-2 border-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="secondary"
                className="lg:px-28 py-5 text-[18px] font-bold"
              >
                Soumettre ma demande
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
