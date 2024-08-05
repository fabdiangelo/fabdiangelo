import './mail.css'
import logo from '/Logo90.svg'
import Footer from './footer.jsx'

function Mail () {
    return (
        <>
        <a className='logo link'><img src={logo} /></a>
        <main className='mail'>
            <section className='presentacion'>
                <h1 className='titulo'>¿Qué te trae por aquí hoy?</h1>
                <h2 className='subTitulo'>Envíame un mail</h2>
            </section>
            <form className='form'>
                <section className='entrada'>
                    <label className='subTitulo' for='nombre'>Nombre</label>
                    <input type='text' id='nombre' name='nombre' className='encabezado'/>
                </section>
                <section className='entrada'>
                    <label className='subTitulo' for='email'>Email</label>
                    <input type='text' id='email' name='email' className='encabezado'/>
                </section>
                <section className='entrada'>
                    <label className='subTitulo' for='content'>Contenido</label>
                    <textarea type='text' id='content' name='content' className='encabezado'/>
                </section>
                <button type='submit' className='encabezado'>Enviar</button>
            </form>
        </main>
        <Footer mail={true}/>
        </>
    )
}

export default Mail
