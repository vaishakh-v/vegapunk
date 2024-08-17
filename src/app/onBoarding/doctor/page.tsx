"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DoctorInsertSchema } from "@/db/types";
import { api } from "@/lib/hono";

const FormSchema = DoctorInsertSchema.omit({ userID: true });

export default function DoctorDetails() {
    const { data: session } = useSession();
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            // TODO : add a functionality to pre-populate the name field form the session
            specialization: "",
            location: "",
            regNo: "",
            zipCode: "",
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        // eslint-disable-next-line
        console.log(data, session?.user.id);

        const response = await api.doctor.$post({
            form: {
                location: data.location,
                specialization: data.specialization,
                regNo: data.regNo,
                zipCode: data.zipCode,
                userID: session?.user.id || "",
            },
        });

        if (!response.ok) {
            // TODO : Handle error that may occur, may be use toast
            return;
        }

        router.push(`/dashboard/${session?.user.id}`);
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
