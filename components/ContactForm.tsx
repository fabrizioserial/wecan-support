"use client"

import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import React from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Body2 from "@/components/ui/body2";
import {Textarea} from "@/components/ui/textarea";
import {InputFile} from "@/components/ui/inputfile";
import {getUploadUrl} from "@/server-actions/getUploadUrl";
import {sendMessage} from "@/server-actions/sendMessageToSlack";
import {generateUUIDv4} from "@/lib/utils";
import {useSearchParams} from "next/navigation";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 40; // 3MB
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'video/mp4'];

const formSchema = z.object({
    fullname: z.string().min(2).max(50),
    email: z.string().min(2).max(50).email('Email invalido'),
    phoneDetails: z.string().min(2).max(50),
    message: z.string().min(2).max(500),
    file: typeof window === 'undefined' ? z.any() : z.instanceof(File).refine((file) => file.size < 7000000, {
            message: 'Your resume must be less than 7MB.',
        }),
})

const BASE_URL = "http://localhost:3000"

export default function ContactForm(){
    const searchParams = useSearchParams()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: searchParams.get('fullname') || "",
            email: searchParams.get('email') || "",
            phoneDetails:  searchParams.get('phoneDetails') || "",
            message: "",
            file: undefined
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        if(values.file){
            console.log({fileName: values.file.name, fileType: values.file.type, fileSize: values.file.size})
            const id = generateUUIDv4()

            const {putUrl, uploadedUrl} = await getUploadUrl(
                {
                    fileName: values.file.name,
                    fileType: values.file.type,
                    fileSize: values.file.size,
                    id:id,
                })
            const uploadResponse = await fetch(putUrl, {
                body: values.file,
                method: "PUT",
                headers: { "Content-Type": values.file.type }
            })
            await sendMessage({
                id: id,
                fullName: values.fullname,
                email: values.email,
                phoneDetails: values.phoneDetails,
                message: values.message,
                fileURL: uploadedUrl
            })
            form.reset()
        }
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="fullname"
                    disabled={!!searchParams.get('fullname')}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={'mb-2'}>Nombre y apellido <span
                                className={'text-red-400 text-lg'}>*</span></FormLabel>
                            <FormControl>
                            <Input placeholder="Fabrizio Serial" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    disabled={!!searchParams.get('email')}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={'mb-2'}>Email <span
                                className={'text-red-400 text-lg'}>*</span></FormLabel>
                            <FormControl>
                            <Input placeholder="fabrizioserial@sirius.com.ar" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phoneDetails"
                    disabled={!!searchParams.get('phoneDetails')}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={'mb-2'}>Informacion del teléfono <span
                                className={'text-red-400 text-lg'}>*</span></FormLabel>
                            <FormControl>
                            <Input placeholder="Iphone 15 Pro - IOS 17.5" {...field} />
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
                            <FormLabel className={'mb-2'}>Detalles del error <span className={'text-red-400 text-lg'}>*</span></FormLabel>
                            <FormControl>
                                <Textarea placeholder="Estaba completando la pildora “Induccion a farmacia”, y cuando presioné..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="file"
                    render={({ field: { value, onChange, ...fieldProps } }) => (
                        <FormItem>
                            <FormLabel className={'mb-2'}>Captura de pantalla <span className={'text-red-400 text-lg'}>*</span></FormLabel>
                            <FormControl>
                                <Input
                                    {...fieldProps}
                                    type="file"
                                    accept="image/png, image/jpeg, video/mp4"
                                    onChange={(event) =>
                                        onChange(event.target.files && event.target.files[0])
                                    }
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" variant={'default'} className={'space-y-4 w-full'}>Enviar</Button>
            </form>
        </Form>
    )
}
