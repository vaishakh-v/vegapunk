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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { PatientInsertSchema } from "@/db/types";
import { api } from "@/lib/hono";

const FormSchema = PatientInsertSchema.omit({ userID: true });

export default function UserDetails() {
    const { data: session } = useSession();
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            // TODO : add a functionality to pre-populate the name field form the session
            location: "",
            zipCode: "",
            dob: "",
            gender: "",
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        // eslint-disable-next-line
        console.log(data, session?.user.id);

        const response = await api.patient.$post({
            form: {
                location: data.location,
                dob: data.dob,
                gender: data.gender,
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
                User Registration
            </h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex w-full flex-col items-center space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input
                                        type="date"
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
