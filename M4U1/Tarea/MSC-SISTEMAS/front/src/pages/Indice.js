import '../styles/indice.css';

const Indice = (props) => {
    return(
        <div className='organiza'>
          <main>
        <div className='encolumna'>
        <img src="img/clementina.jpg" alt=""/>
        <h2 className='subtit'>Un poco de historia</h2>
        <p>Desde los comienzos en la informatica en Argentina, hemos estado ahí. Hemos sido participes de la 
            evolución constante de la tecnologia hasta la actualidad. Hoy ofrecemos un completo paquete de software 
            administrativo hecho a la medida del cliente y acorde a sus necesidades.
            Comprendemos que el tiempo de resolución de problemas es algo escencial en la calidad de un servicio por 
            lo que ofrecemos atención remota las 24hs los 365 días del año. 
        </p>
       
          <div className='tarjetas'>
            <div className='tar'>
            <img className='fotito' src="img/celular icono.jpg" alt=""/>
            <p className='instrucciones'>
            Comunicate con nosotros via
                mail o telefonicamente
            </p>
            </div>      
         <div className='tar'>
             <img className='fotito' src="img/auto.png" alt=""/>
             <p className='instrucciones'>Te visitamos para conocer la forma
              de trabajar de tu organización </p>
            </div>
            
         <div class="tar">
             <img className = 'fotito' src="img/icono-del-tablero-46727779.jpg" alt=""/>
             <p className='instrucciones'>Presupuestamos el trabajo y 
                acordamos la fecha de lanzamiento </p>                    
            </div>
            </div>
        </div>  
        </main>
        </div>
    );
}
export default Indice;