
"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="Multiplica tus Ventas Online. Web Profesional, Optimizada y Gratuita."
              subheadline="Con la IA de Webgo, creamos sitios que son hermosos, funcionales y están diseñados para vender. No es solo diseño, es estrategia de negocio."
              cta1="Consigue tu Web Gratis Ahora"
              cta2="Mejora tu Web y tus Ventas"
            />

            <How
              step1Title="Solicita una Consulta Gratuita"
              step1Desc="Deja que comprendamos tus necesidades y retos comerciales."
              step2Title="Desarrollo Personalizado"
              step2Desc="Estructuramos tu web para obtener más conversiones y ventas."
              step3Title="Lanzamiento Optimizado"
              step3Desc="Lleva tu negocio al siguiente nivel con un sitio de venta."
            />

            <Aboutus
              headline="Webgo: Explota tus ventas online con un website profesional y optimizado"
              subheadline="Descripción"
              beneficio1="Comienza Gratis"
              beneficio2="Para aquellos que están empezando, ofrecemos la creación de un website profesional totalmente gratis, creado con inteligencia artificial y optimizado al 100%."
              beneficiotitulo1="Centrados en las Ventas"
              beneficiotitulo2="No sólo hacemos sitios web bonitos, los diseñamos para convertir. En Webgo, nos enfocamos en generar más ventas para tu negocio."
            />

            <Services
              heading="Aumente sus ventas online con facilidad"
              description="Nuestras soluciones digitales se centran en la creación y rediseño de sitios web altamente optimizados para maximizar sus ventas online."
              services={[{"name":"Creación de Sitios Web","icon":"laptop","description":"Diseñamos sitios web efectivos y optimizados para la conversión."},{"name":"Rediseño de Sitios Web","icon":"refresh","description":"Transformamos su sitio web con un diseño centrado en las ventas."},{"name":"Sitio Web Gratis para Principiantes","icon":"gift","description":"Proporcionamos un sitio web gratuito con IA para aquellos que están comenzando."}]}
            />
<BeforeAndAfter />

            <Faq
              faqs={[{"pregunta":"¿Cómo puedo mejorar la conversión de mi tienda online con [services]?","respuesta":"Con [services] te ayudamos a optimizar tu tienda online para captar y convertir a más clientes. Analizamos tu negocio, diseñamos estrategias personalizadas y las implementamos en tu web para potenciar tus ventas."},{"pregunta":"No sé cómo crear un sitio web, ¿puede ayudarme [companyName]?","respuesta":"¡Por supuesto! En [companyName] creamos sitios web profesionales y totalmente optimizados. Además, ofrecemos un servicio gratuito para los que recién empiezan, así podrás tener un sitio web sin incurrir en gastos adicionales."},{"pregunta":"Mi sitio web actual es atractivo, pero no está generando ventas, ¿qué puedo hacer?","respuesta":"Aunque un sitio web atractivo es importante, también lo es que esté diseñado para vender. En [companyName], rediseñamos tu sitio web con una perspectiva de negocio para que no solo sea bonito, sino también eficaz en convertir visitantes en clientes."},{"pregunta":"¿Qué es Webgo?","respuesta":"Webgo es nuestra avanzada metodología de desarrollo de sitios web. Combina lo mejor del diseño web y de las técnicas de optimización para lograr que tu sitio web sea altamente atractivo y efectivo en ventas."},{"pregunta":"¿Cómo [companyName] puede ayudar a enfrentar [challenges]?","respuesta":"En [companyName], somos expertos en ayudar a las empresas a superar sus desafíos online. Nos centramos en entender tu negocio y tus desafíos para luego diseñar soluciones eficaces que impulsan el crecimiento de tu empresa."}]}
            />

            <BookAppointment
              heading="¡Mejora tus Ventas Online! No Dejes que un Mal Diseño Web te Detenga"
              description="Con Webgo, transformamos tu sitio web en una máquina de ventas. ¡Inicia hoy con una web gratuita y optimizada al 100% con IA!"
            />
<Footer />
    </main>
  );
}
    