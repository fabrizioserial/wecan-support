"use server"

import {put} from "@jridgewell/set-array";

interface GetUploadUrlProps {
    fileName: string
    fileType: string
    fileSize: number
    id: string
}

export const getUploadUrl = async ({ fileName, fileType, fileSize, id }: GetUploadUrlProps) => {
    console.log('before')

    try {
        console.log({ fileName, fileType, fileSize, id })
        // POST request to backend route handler
const body = JSON.stringify({ fileName, fileType, fileSize, id })
        console.log(body)
        const res = await fetch(`${process.env.LERNI_SUPPORT_URL}/api/media`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: body
        })

        console.log(fileName,fileType,fileSize,id,`${process.env.LERNI_SUPPORT_URL}/api/media`)

        // Response includes a putUrl for upload and a getUrl for displaying a preview
        const { putUrl, getUrl } = await res.json()
        console.log(getUrl,putUrl)


        // Request made to putUrl, media file included in body
        return { putUrl, uploadedUrl: getUrl, status: res.status, statusText: res.statusText }
    } catch (error) {
        console.log('getUploadURL: ',error);
        return { putUrl: "", uploadedUrl: "", status: 500, statusText: 'error' }
    }
}
