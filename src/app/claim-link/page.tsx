"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

type FormValues = {
  username: string;
};

const ClaimLink = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="text-white flex flex-col items-center px-4">
      <div className="w-full max-w-md flex flex-col items-center pt-16 gap-6">
        <div className="mb-4">
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="logo-kahete"
            className="w-10 h-10"
          />
        </div>

        <div className="text-center space-y-2 mb-4">
          <h1 className="text-2xl font-semibold">Claim your unique link</h1>
          <p className="text-white text-sm">
            The good ones are still available!
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input {...field} placeholder="kahete.com/your-name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>

      <div className="fixed bottom-8 left-0 right-0 px-4">
        <div className="max-w-md mx-auto">
          <Button type="submit" className="w-full" onClick={form.handleSubmit(onSubmit)}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClaimLink;