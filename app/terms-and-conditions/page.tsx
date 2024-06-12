import StyledBackground from "@/components/StyledBackground";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import '../../styles/Markdown.css'

export default function TermsAndConditions(){
    const markdown = `
### Última actualización: [Fecha]

Bienvenido a Lerni. Estos Términos y Condiciones ("Términos") rigen el acceso y uso de nuestra aplicación móvil ("la aplicación") y servicios relacionados (colectivamente, "los Servicios"). Al utilizar nuestros Servicios, usted acepta estos Términos. Si no está de acuerdo con estos Términos, no utilice nuestros Servicios.

### 1. Aceptación de los Términos

Al acceder o utilizar los Servicios, usted confirma que ha leído, entendido y aceptado estos Términos y nuestra Política de Privacidad. Si utiliza los Servicios en nombre de una entidad, declara que tiene la autoridad para aceptar estos Términos en nombre de dicha entidad.

### 2. Cambios a los Términos

Podemos modificar estos Términos en cualquier momento. Le notificaremos cualquier cambio publicando los Términos actualizados en nuestra aplicación. Es su responsabilidad revisar estos Términos periódicamente. El uso continuado de los Servicios después de la publicación de los cambios constituye su aceptación de los mismos.

### 3. Uso de los Servicios

#### Elegibilidad

Para utilizar nuestros Servicios, debe ser mayor de 18 años o tener el permiso de un padre o tutor legal. Al utilizar los Servicios, usted declara y garantiza que cumple con estos requisitos.

#### Cuenta de Usuario

Para acceder a ciertas funciones, debe crear una cuenta proporcionando información precisa y completa. Usted es responsable de mantener la confidencialidad de su cuenta y contraseña, y acepta notificar de inmediato cualquier uso no autorizado de su cuenta.

#### Conducta del Usuario

Usted se compromete a utilizar los Servicios solo para fines legales y de acuerdo con estos Términos. No puede:
- Utilizar los Servicios de manera que viole cualquier ley o regulación aplicable.
- Suplantar a cualquier persona o entidad o tergiversar su afiliación con una persona o entidad.
- Interferir o interrumpir el funcionamiento de los Servicios.

### 4. Contenido

#### Su Contenido

Usted conserva todos los derechos sobre el contenido que envía, publica o muestra a través de los Servicios ("Su Contenido"). Al enviar Su Contenido, nos otorga una licencia mundial, no exclusiva, libre de regalías y transferible para usar, reproducir, modificar, distribuir y mostrar Su Contenido en relación con la operación de los Servicios.

#### Contenido de Lerni

Todos los derechos sobre el contenido y los materiales proporcionados por nosotros a través de los Servicios, incluidos textos, gráficos, logotipos y software, son propiedad nuestra o de nuestros licenciantes. Usted no puede utilizar nuestro contenido sin nuestro permiso previo por escrito.

### 5. Privacidad

Nuestra recopilación y uso de información personal se describe en nuestra Política de Privacidad. Al utilizar los Servicios, usted acepta la recopilación y uso de esta información.

### 6. Terminación

Podemos suspender o terminar su acceso a los Servicios en cualquier momento, por cualquier motivo, sin previo aviso. Tras la terminación, todas las licencias y otros derechos otorgados a usted en estos Términos cesarán de inmediato.

### 7. Limitación de Responsabilidad

En la medida permitida por la ley aplicable, Lerni no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo, ni de cualquier pérdida de beneficios o ingresos, ya sea incurrida directa o indirectamente, ni de cualquier pérdida de datos, uso, fondo de comercio u otras pérdidas intangibles, resultantes de (i) su acceso o uso o incapacidad para acceder o usar los Servicios; (ii) cualquier conducta o contenido de cualquier tercero en los Servicios; (iii) cualquier contenido obtenido de los Servicios; y (iv) acceso, uso o alteración no autorizados de sus transmisiones o contenido.

### 8. Ley Aplicable y Jurisdicción

Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República Argentina. Cualquier disputa que surja en relación con estos Términos se someterá a la jurisdicción exclusiva de los tribunales competentes de [Ciudad/Provincia].

### 9. Contacto

Si tiene alguna pregunta sobre estos Términos, por favor contáctenos en:

Correo electrónico: support@lerni.com  
Dirección: [Dirección física de la empresa]

`

    return(
        <StyledBackground>
            <div className={'px-[50px] pb-8 z-10'}>
                <h1>Términos y condiciones</h1>
                <Markdown remarkPlugins={[remarkGfm]} className={"text-white"}>
                    {markdown}
                </Markdown>
            </div>

        </StyledBackground>
    )
}
