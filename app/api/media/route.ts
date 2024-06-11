// Relevant imports
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3"
import {NextRequest, NextResponse} from "next/server";


// Initialize S3Client instance
const client = new S3Client({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
})

const POST = async (req: NextRequest) => {
    try {

        const { fileName, fileType, fileSize,id } = await req.json()
        if (!fileType || !fileName || !fileSize) {
            throw new Error("There was a problem with the file!")
        }

        // PutObjectCommand: used to generate a pre-signed URL for uploading
        const putCommand = new PutObjectCommand({
            Key: id,
            ContentType: fileType,
            Bucket: process.env.BUCKET_NAME,
        })

        // Generate pre-signed URL for PUT request
        const putUrl = await getSignedUrl(client, putCommand, { expiresIn: 600 })

        // GetObjectCommand: used to generate a pre-signed URL for viewing.
        const getCommand = new GetObjectCommand({
            Key: id,
            Bucket: process.env.BUCKET_NAME,
        })
        // Generate pre-signed URL for GET request
        const getUrl = await getSignedUrl(client, getCommand, { expiresIn: 600 })

        return NextResponse.json({ putUrl, getUrl }, { status: 200 })
    } catch (error) {
        console.log(error)
        throw error
    }
}

export {
    POST,
}
