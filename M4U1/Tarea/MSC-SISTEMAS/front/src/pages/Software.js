import '../styles/software.css'

const Software = (props) => {
    return(
        <main>
        <div className='imgfond'>
        <div className='textos'>
            <h4>NUESTROS SERVICIOS</h4>
            <h2>Servicios</h2>
            <p>Contamos con un amplia variedad de soluciones IT.
               Nuestra experiencia y versatilidad nos posicionan en
               un lugar de liderazgo en el mercado. 
               Nuestras soluciones son a medida de su organización y 
               completamente personalizadas.
            </p>
        </div>
    </div>
        <div className='separa'>
        <div className='servicios'>
            <h3>Testing de Software</h3>
            <p>Cubrimos todo tipo de pruebas funcionales y no funcionales, 
                soportadas en su totalidad con herramientas de gestión que nos
                 permiten documentar los diferentes estados del proceso de pruebas
                  para poder tomar decisiones basadas en la realidad actual.</p>
        </div>
        <div className='servicios'>
            <h3>Software Factory</h3>
            <p>Desarrollamos software sobre las tecnologías Basic y 
                .Net bajo las metodologías tradicionales y ágiles para cada proyecto.
                 Aplicaciones a medida, manteniemiento evolutivo y correctivo de aplicaciones existentes.
            </p>
        </div>
        <div className='servicios'>
            <h3>IT Consoulting</h3>
            <p>Asesoramiento en implementación de procesos tecnológicos brindando servicios de consultoría especializada, 
                de monitoreo, documentación IT y de tercerización de administración IT.
                 Gerenciamiento y/o provisión de recursos humanos idóneos para
                  el desarrollo de las nuevas tecnologías.</p>
        </div> 
        <div className='servicios'>
            <h3>Devops</h3>
            <p>Brindamos consultoría y asesoramiento en procesos de Integración Continua (IC),
                 en Control de Calidad de fuentes (net, java, sql, html y más) y en estándares de 
                 Documentación (técnica y funcional). 
                 Utilizamos la herramienta por excelencia del mercado: Git</p>
        </div>       
    </div> 
    </main>
    );
}
export default Software;