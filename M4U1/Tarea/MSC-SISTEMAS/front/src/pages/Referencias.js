import '../styles/referencias.css'

const Referencias = (props) => {
    return(
        <main>
        <h2 className='titref'>Nuestros Clientes</h2>
<div className='refe'>
    <div>
    <p>"Hemos tenido una mejora en todos los procesos de la empresa
        mayor control y claridad a la hora de tomar desiciones.¡Gracias al equipo!""
    </p>
    <h3>John</h3>
</div>
<div>
    <p>"La calidad de la atención de el sector de soporte es excelente. 
        Hemos tenido días de muchisimo trabajo donde los llamamos a las 3am. y 
        han respondido enseguida." 
    </p>
    <h3>Patricia</h3>
</div>
<div>
    <p>"La empresa tiene mucha facilidad para entender la necesidad del cliente"</p>
    <h3>Michelle</h3>
</div>
<div>
    <p>"La experiencia en el rubro en notoría hemos recibido soluciones optimizadas a 
        problemas que ni siquiera sabiamos que teniamos.Muy agradecido!"
    </p>
    <h3>Carlos</h3>
</div>
<div>
    <p>"¡Tenemos sistema para toda la vida!, Gracias"</p>
    <h3>Torcuato</h3>
</div>
<div>
    <p>"Coparado con sistemas anteriores que hemos tenido, el nivel de performance
        que maneja la empresa es altamente destacable."
    </p>
    <h3>Maximiliano</h3>
</div>
</div>
<div className='experiencia'>
    <h3>Contanos tu experiencia</h3>
    <textarea name="" id="" cols="30" rows="10" placeholder="Tu experiencia"></textarea>
    <button>Enviar</button>
</div>
         </main>
    );
}
export default Referencias;