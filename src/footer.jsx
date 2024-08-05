import './footer.css'
import logo from '/LogoAlt90.svg'

function Footer ({mail = false}) {
    return (
        <footer className='footer'>
            <section className='mail'>
                {!mail && <button className='sendMail encabezado'>Send me a mail</button>}
                <a href='#' className='logo'><img alt='Link a inicio' src={logo}></img></a>
            </section>
            <section className='contacto'>
                <h3 className='subTitulo'>Contacto</h3>
                <p className='texto'>
                    gmail@gmail.com
                    <br />    
                    linkedin
                    <br />    
                    github
                </p>
            </section>
        </footer>
    )
}

export default Footer
