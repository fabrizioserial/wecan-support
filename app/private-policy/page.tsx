import StyledBackground from "@/components/StyledBackground";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import '../../styles/Markdown.css'

export default function PrivatePolicy(){
    const markdown = `
### **Última actualización: 11 de Junio de 2024**

Lerni ("nosotros", "nuestro" o "la aplicación") se compromete a proteger y respetar su privacidad. Esta Política de Privacidad describe nuestras prácticas en relación con la recopilación, uso y divulgación de su información cuando utiliza nuestra aplicación. Cumplimos con la Ley de Protección de Datos Personales (Ley N° 25.326) de la República Argentina.

### **1\\. Información que recopilamos**

#### **Información proporcionada por el usuario**

- **Registro e información de cuenta:** Cuando se registra en Lerni, recopilamos su nombre, dirección de correo electrónico, y cualquier otra información necesaria para crear su cuenta.
- **Perfil del usuario:** Información adicional que decida proporcionar como parte de su perfil, incluyendo foto de perfil, nivel educativo, intereses y preferencias.

#### **Información recopilada automáticamente**

- **Datos de uso:** Recopilamos información sobre su uso de la aplicación, como el tipo de dispositivo, sistema operativo, dirección IP, tiempo de acceso y las páginas o características que utiliza.
- **Cookies y tecnologías similares:** Utilizamos cookies y tecnologías similares para recopilar información sobre su interacción con nuestra aplicación y para mejorar su experiencia.

### **2\\. Cómo utilizamos su información**

Utilizamos la información que recopilamos para:

- Proporcionar y mejorar nuestros servicios.
- Personalizar su experiencia en la aplicación.
- Comunicarnos con usted, incluyendo el envío de notificaciones y actualizaciones.
- Analizar el uso de la aplicación para mejorar nuestro contenido y funcionalidad.
- Cumplir con nuestras obligaciones legales y resolver disputas.

### **3\\. Compartición de su información**

No compartimos su información personal con terceros, excepto en las siguientes circunstancias:

- **Proveedores de servicios:** Podemos compartir información con proveedores de servicios de confianza que nos ayudan a operar nuestra aplicación y a mejorar nuestros servicios.
- **Cumplimiento de la ley:** Podemos divulgar su información si creemos que es necesario para cumplir con una obligación legal, proteger nuestros derechos, o asegurar la seguridad de nuestros usuarios.
- **Transferencias de negocios:** En caso de una fusión, adquisición o venta de activos, su información puede ser transferida como parte de la transacción.

### **4\\. Seguridad de su información**

Tomamos medidas razonables para proteger su información personal contra el acceso no autorizado, uso, alteración y destrucción. Sin embargo, ninguna transmisión de datos por internet o almacenamiento electrónico es completamente segura, por lo que no podemos garantizar la seguridad absoluta de su información.

### **5\\. Sus derechos**

Usted tiene derechos sobre su información personal, de acuerdo con la Ley N° 25.326, incluyendo:

- Acceder a la información que tenemos sobre usted.
- Solicitar la corrección de cualquier información inexacta.
- Solicitar la eliminación o supresión de su información personal.
- Oponerse al tratamiento de su información personal.
- Optar por no recibir comunicaciones de marketing.

Para ejercer estos derechos, por favor contacte con nosotros a través de la dirección de correo electrónico proporcionada a continuación. Si considera que sus derechos no han sido respetados, puede presentar una denuncia ante la Agencia de Acceso a la Información Pública en Argentina.

### **6\\. Cambios a esta Política de Privacidad**

Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en nuestra aplicación. Se recomienda revisar esta Política periódicamente para estar informado sobre cómo protegemos su información.

### **7\\. Contacto**

Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad, por favor contáctenos en:

Correo electrónico: <lerni-education@gmail.com>  
Dirección: Lavalle Nro. 1118 - Piso 6 - Oficina K. Ciudad Autónoma de Buenos Aires. República Argentina.

`

    return(
        <StyledBackground>
            <div className={'px-[50px] pb-8 z-10'}>
                <h1>Políticas de privacidad</h1>
                <Markdown remarkPlugins={[remarkGfm]} className={"text-white"}>
                    {markdown}
                </Markdown>
            </div>

        </StyledBackground>
    )
}
