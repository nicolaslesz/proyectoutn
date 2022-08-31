import '../styles/referencias.css'
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ComentarioItem from '../component/comentarios/ComentarioItem';


const Referencias = (props) => {
    const [loading, setLoading] = useState(false);
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        const cargarComentarios = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/comentarios');
            setComentarios(response.data);
            setLoading(false);
        };
        cargarComentarios();
    }, []);
    return (
        <section className='holder'>
            <main>
                <h2 className='titref'>Comentarios</h2>
               <div className='container'>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    comentarios.map(item => <ComentarioItem key={item.com_id}
                        name={item.com_nombre} photo={item.foto} body={item.com_comentario} />)
                )}
                </div>
                <h3 className='dircon'>Envianos tu comentario desde la página de contacto</h3>
            </main>
        </section>
    );
}

export default Referencias;