"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";

type FormValues = {
  username: string;
};

const formSchema = z.object({
  username: z.string().min(2, { message: "First Name is required" }),
});

const ClaimLink = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const username = form.watch("username");
  const onSubmit = (data: FormValues) => {
    window.alert(data);
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
            priority
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
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="kahete.com/your-name"
                        className="pr-10"
                      />
                    </FormControl>
                    {username && (
                      <CircleCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="fixed bottom-8 left-0 right-0 px-4">
              <div className="max-w-md mx-auto">
                <Button type="submit" className="w-full" disabled={!username}>
                  Next
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ClaimLink;
