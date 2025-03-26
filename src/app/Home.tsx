"use client";

import { Button } from "@/components/ui/button";
import { toast as sonner } from "sonner";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Toaster as Sonner } from "sonner";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
    const { toast } = useToast();

    return (
        <div className="grid items-center justify-items-center min-h-screen p-4 pb-20 gap-8 sm:p-8 md:p-12 lg:p-20 font-[family-name:var(--font-geist-sans)]">
            <Sonner />
            <Toaster />
            <main className="flex flex-col gap-8 w-full max-w-4xl">
                <Button onClick={() => alert("Hello")} className="w-full sm:w-auto">
                    Click me
                </Button>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessibless?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                            Yes. Its animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="w-full sm:w-auto">
                            Edit Profile
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you&apos;re done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input id="name" value="Pedro Duarte" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input id="username" value="@peduarte" className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                {/* fix: Labels */}
                <Label>Default</Label>
                <Button
                    variant="outline"
                    onClick={() => {
                        toast({
                            title: "Scheduled: Catch up ",
                            description: "Friday, February 10, 2023 at 5:57 PM",
                            action: (
                                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                            ),
                        });
                    }}
                    className="w-full sm:w-auto"
                >
                    Add to calendar
                </Button>

                <Button
                    variant="action"
                    onClick={() =>
                        sonner("Event has been created", {
                            description: "Sunday, December 03, 2023 at 9:00 AM",
                            action: {
                                label: "Undo",
                                onClick: () => console.log("Undo"),
                            },
                        })
                    }
                    className="w-full sm:w-auto"
                >
                    Show sonner
                </Button>
            </main>
        </div>
    );
}