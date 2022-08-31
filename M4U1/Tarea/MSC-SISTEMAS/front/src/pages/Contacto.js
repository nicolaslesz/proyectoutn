import '../styles/contacto.css'
import { useState } from 'react';
import axios from 'axios';

const Contacto = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    
    const [sending, setSending] =  useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]:value
        }));
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
        axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false){
            setFormData(initialForm)
        }
    }

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
 <div>
    <form action="/contacto" method="post" className='formulario' onSubmit={handleSubmit}> 
        <h3>Envia tus consultas</h3>
        <div>
            <input type="text" placeholder="Nombre y Apellido" name='nombre' value={formData.nombre} onChange={handleChange}/>
            <input type="text" placeholder="Email" name='email' value={formData.email} onChange={handleChange}/>
            <input type="text" placeholder="Telefono" name='telefono' value={formData.telefono} onChange={handleChange}/>
            <input type="text" placeholder="Localidad"/>
        </div>        
         <textarea name="mensaje" id="" cols="30" rows="10" placeholder="Mensaje"  value={formData.mensaje} onChange={handleChange}></textarea>
        {sending ? <p> Enviando...</p> : null}
        {msg ? <p>{msg}</p> : null}
         <button type='submit' >Enviar</button>
    </form>
</div>     
    </main> 
    );
}

export default Contacto;