"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Name be at least 2 characters.",
    }),
    specialization: z.string().min(2),
    location: z.string().min(5),
    // TODO : add a regex for the doctor's regNo
    regNo: z.string(),
    // TODO : add a regex for zip codes
    zipCode: z.string(),
});

export default function DoctorDetails() {
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            // TODO : add a functionality to pre-populate the name field form the session
            name: "",
            specialization: "",
            location: "",
            regNo: "",
            zipCode: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        // eslint-disable-next-line
        console.log(data);
    }

    return (
        <div className="grid min-h-[calc(100svh-88px)] place-content-center">
            <h1 className="mb-4 text-center text-2xl font-semibold">
                Doctors Registration
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
                        name="regNo"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input placeholder="Reg No" {...field} />
                                </FormControl>
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
