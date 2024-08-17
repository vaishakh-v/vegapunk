"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Name be at least 2 characters.",
    }),
    specialization: z.string().min(2),
    // TODO : add a regex for zip codes
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
    gender: z.string(),
    location: z.string().min(5),
    zipCode: z.string(),
});

export default function UserDetails() {
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            // TODO : add a functionality to pre-populate the name field form the session
            name: "",
            specialization: "",
            location: "",
            zipCode: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        //  eslint-disable-next-line
        console.log(data);
    }

    return (
        <div className="grid min-h-[calc(100svh-88px)] place-content-center">
            <h1 className="mb-4 text-center text-2xl font-semibold">
                User Registration
            </h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex w-full flex-col items-center space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input
                                        className="w-full"
                                        placeholder="Name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="specialization"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input
                                        placeholder="Specialization"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] pl-3 text-left font-normal",
                                                    !field.value &&
                                                        "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span className="text-[#65748a]">
                                                        Pick you dob
                                                    </span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="w-auto p-0"
                                        align="start"
                                    >
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date: Date) =>
                                                date > new Date() ||
                                                date < new Date("1900-01-01")
                                            }
                                        />
                                    </PopoverContent>
                                </Popover>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue
                                                placeholder="Select Gender"
                                                className="text-[#65748a]"
                                            />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="male">
                                            Male
                                        </SelectItem>
                                        <SelectItem value="female">
                                            Female
                                        </SelectItem>
                                        <SelectItem value="others">
                                            Others
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input placeholder="Location" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input placeholder="Zip Code" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
                <Button
                    variant={"link"}
                    className="mx-auto mt-3 w-min"
                    onClick={() => {
                        router.back();
                    }}
                >
                    Go Back
                </Button>
            </Form>
        </div>
    );
}
