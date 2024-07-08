"use server"

interface GetUploadUrlProps {
    fileName: string
    fileType: string
    fileSize: number
    id: string
}

export const getUploadUrl = async ({ fileName, fileType, fileSize, id }: GetUploadUrlProps) => {
    console.log('before')

    try {
        // POST request to backend route handler
        const res = await fetch(`${process.env.LERNI_SUPPORT_URL}/api/media`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fileName, fileType, fileSize, id })
        })
        
        // Response includes a putUrl for upload and a getUrl for displaying a preview
        const { putUrl, getUrl } = await res.json()

        // Request made to putUrl, media file included in body
        return { putUrl, uploadedUrl: getUrl, status: res.status, statusText: res.statusText }
    } catch (error) {
        console.log(error);
        return { putUrl: "", uploadedUrl: "", status: 500, statusText: 'error' }
    }
}
