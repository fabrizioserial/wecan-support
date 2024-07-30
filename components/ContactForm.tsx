"use client"

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Body2 from "@/components/ui/body2";
import { Textarea } from "@/components/ui/textarea";
import { InputFile } from "@/components/ui/inputfile";
import { getUploadUrl } from "@/server-actions/getUploadUrl";
import { sendMessage } from "@/server-actions/sendMessageToSlack";
import { generateUUIDv4 } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { Spinner } from "./ui/spinner";
import TypographyH6 from "./ui/typographyH6";
import Body1 from "./ui/body1";

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

export default function ContactForm() {

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: searchParams.get('fullname') || "",
      email: searchParams.get('email') || "",
      phoneDetails: searchParams.get('phoneDetails') || "",
      message: "",
      file: undefined
    },
  })

  const isFormSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (values.file) {
      // console.log({ fileName: values.file.name, fileType: values.file.type, fileSize: values.file.size })
      const id = generateUUIDv4()

      const { putUrl, uploadedUrl, status: uploadStatus } = await getUploadUrl(
        {
          fileName: values.file.name,
          fileType: values.file.type,
          fileSize: values.file.size,
          id: id,
        })

      const uploadResponse = await fetch(putUrl, {
        body: values.file,
        method: "PUT",
        headers: { "Content-Type": values.file.type }
      })

      const { status: sendMessageStatus } = await sendMessage({
        id: id,
        fullName: values.fullname,
        email: values.email,
        phoneDetails: values.phoneDetails,
        message: values.message,
        fileURL: id
      })
      const errorStatusCodes = [400, 401, 403, 404, 409, 422, 500];
      if (errorStatusCodes.includes(uploadStatus) || errorStatusCodes.includes(sendMessageStatus)) {
        setIsError(true)
      } else {
        setIsSuccess(() => true);
        form.reset();
      }
    }
  }

  return (
    <div className={'max-w-[550px] w-full rounded-3xl bg-white px-6 py-8 z-10'}>
      {!isSuccess && (
        <div className={'mb-4'}>
          <TypographyH6 className={'font-bold text-gray-900'}>Contanos tu problema</TypographyH6>
          <Body2 className={'text-gray-500'}>Completa los datos y carga una imagen con el error que te aparece</Body2>
        </div>
      )}
      <Form {...form}>
        {isError && (
          <FormMessage title="Error">
            <Body2 className={'text-red-500'}>
              Lo sentimos, no hemos podido procesar tu mensaje. Por favor intente de nuevo más tarde.
            </Body2>
          </FormMessage>
        )}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          {isSuccess
            ? (
              <div className={'mb-4 flex flex-col items-center justify-center'}>
                <TypographyH6 className={'text-gray-700'}>Gracias</TypographyH6>
                <Body1 className={'text-green-700'}>
                  Tu mensaje ha sido enviado correctamente.
                </Body1>
              </div>
            ) : (
              <>
                <FormField
                  control={form.control}
                  name="fullname"
                  disabled={!!searchParams.get('fullname') || isFormSubmitting}
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
                  disabled={!!searchParams.get('email') || isFormSubmitting}
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
                  disabled={!!searchParams.get('phoneDetails') || isFormSubmitting}
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
                  disabled={!!searchParams.get('message') || isFormSubmitting}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={'mb-2'}>
                        Detalles del error <span className={'text-red-400 text-lg'}>*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Estaba completando la pildora “Induccion a farmacia”, y cuando presioné..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="file"
                  disabled={!!searchParams.get('file') || isFormSubmitting}
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel className={'mb-2'}>
                        Captura de pantalla <span className={'text-red-400 text-lg'}>*</span>
                      </FormLabel>
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
                <Button
                  type="submit"
                  variant={'default'}
                  className={'space-y-4 w-full'}
                  disabled={isFormSubmitting}
                >
                  {isFormSubmitting
                    ? <Spinner />
                    : 'Enviar'
                  }
                </Button>
              </>
            )}
        </form>
      </Form>
    </div>
  )
}
