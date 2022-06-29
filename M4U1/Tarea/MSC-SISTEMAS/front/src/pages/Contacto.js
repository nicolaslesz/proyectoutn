import '../styles/contacto.css'

const Contacto = (props) => {
    return(
    
    <main>
      <div className='datos'>
<h2>Contactanos</h2>
<p>Envianos tu consulta sin ningún tipo de compromiso</p>
<h3>Estamos para Ayudarte</h3>
</div>
<div className='contacta'>
<div>
<h4>4748-5744</h4>
<p>Comunicate a nuestras oficinas centrales</p>
</div>
<div>
    <h4>011-68975847</h4>
    <p>A nuestro Whatsapp</p>
</div>
<div>
    <h4>info@msc-sistemas.com.ar</h4>
    <p>O via e-mail</p>
</div>
</div>
{/* <div>
    <form action="" method="" className='formulario'> 
        <h3>Envia tus consultas</h3>
        <div>
            <input type="text" placeholder="Nombre y Apellido">
            <input type="text" placeholder="Email">
            <input type="text" placeholder="Telefono">
            <input type="text" placeholder="Localidad">
        </div>        
         <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje" ></textarea>
         <button>Enviar</button>
    </form>

</div>     */}
    </main> 
    );
}
export default Contacto;