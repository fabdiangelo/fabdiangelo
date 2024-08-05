import './mail.css'
import logo from '/Logo90.svg'
import Footer from './footer.jsx'
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_API_KEY_RESEND);

function Mail () {

    const handleSend = async (event) => {
        let [nombre, email, contenido] = event.target
        nombre = nombre.value
        email = email.value
        contenido = contenido.value
        if(!event.target.checkValidity()){
            event.preventDefault()
            event.stopPropagation()    
        }else{
            const { data, error } = await resend.emails.send({
                from: email,
                to: ['fabricio.fuentes@estudiantes.utec.edu.uy'],
                subject: 'Portfolio',
                html: '<strong>' + nombre + '</strong><br>' + contenido,
              });  
              if (error) {
                return console.error({ error });
              }
            
              console.log({ data });
        }
        event.target.classList.add('was-validated')
    }

    return (
        <>
        <a className='logo link'><img src={logo} /></a>
        <main className='mail'>
            <section className='presentacion'>
                <h1 className='titulo'>¿Qué te trae por aquí hoy?</h1>
                <h2 className='subTitulo'>Envíame un mail</h2>
            </section>
            <form className='form' noValidate onSubmit={handleSend}>
                <section className='entrada'>
                    <label className='subTitulo' for='nombre'>Nombre</label>
                    <input type='text' id='nombre' name='nombre' className='encabezado form-control' required />
                    <div className="invalid-feedback">
                        Ingrese su nombre.
                    </div>
                </section>
                <section className='entrada'>
                    <label className='subTitulo' for='email'>Email</label>
                    <input type='email' id='email' name='email' className='encabezado form-control' required />
                    <div className="invalid-feedback">
                        Ingrese un email válido.
                    </div>
                </section>
                <section className='entrada'>
                    <label className='subTitulo' for='content'>Contenido</label>
                    <textarea type='text' id='content' name='content' className='encabezado form-control' required />
                    <div className="invalid-feedback">
                        Ingrese el mensaje que desea enviarme.
                    </div>
                </section>
                <button type='submit' className='encabezado'>Enviar</button>
            </form>
        </main>
        <Footer mail={true}/>
        </>
    )
}

export default Mail
