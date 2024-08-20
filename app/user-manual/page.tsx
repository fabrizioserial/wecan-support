import PdfViewer from "@/components/PDFViewer";


export default function Page(){
    return(
        <div className="h-full flex justify-center mx-auto">
            <PdfViewer url={'https://wecan-assets.s3.amazonaws.com/PACIENTES+guia-de-instalacion.pdf'}/>
        </div>
        )
}
