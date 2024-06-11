"use server"

interface GetUploadUrlProps {
    fileName: string
    fileType: string
    fileSize: number
    id: string
}

export const getUploadUrl = async ({ fileName, fileType, fileSize,id }:GetUploadUrlProps) => {
    console.log('before')

    try {
        // POST request to backend route handler
        console.log('started')
        const res = await fetch(`${'http://localhost:3000'}/api/media`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({fileName, fileType, fileSize,id })
        })

        // Response includes a putUrl for upload and a getUrl for displaying a preview
        const { putUrl, getUrl } = await res.json()
        console.log("RESPONSE: " , putUrl, getUrl)

        // Request made to putUrl, media file included in body


        return { putUrl, uploadedUrl: getUrl }
    } catch (error) {
        console.log(error)
        throw error
    }
}
