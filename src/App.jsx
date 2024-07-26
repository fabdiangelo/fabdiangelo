import './App.css'

import PreviewProjecto from './preiewProjecto.jsx'
import Footer from './footer.jsx'

import reactLogo from '/React.svg'
import postgresLogo from '/Postgres.svg'
import nodeLogo from '/NodeJS.svg'
import cppLogo from '/CPlusPlus.svg'
import mongoLogo from '/MongoDB.svg'
import htmlLogo from '/HTML.svg'
import cssLogo from '/CSS.svg'
import fccLogo from '/FreeCodeCamp.svg'
import utecLogo from '/UTEC.svg'
import japLogo from '/JAP.svg'
import proyectoTitle from '/ProyectosTitle.svg'
import logo90 from '/Logo90.svg'
import logoAlt90 from '/LogoAlt90.svg'
import logo200 from '/Logo200.svg'

function App() {

  return (
    <>
    <main className='bienvenida'>
    	<h1 className='nombre'>Fabricio Fuentes</h1>
    	<img src={reactLogo} className='lenguaje' alt='React logo' />
    	<img src={postgresLogo} className='lenguaje' alt='Postgres SQL logo' />
    	<img src={nodeLogo} className='lenguaje' alt='NodeJS logo' />
    	<img src={cppLogo} className='lenguaje' alt='C++ logo' />
    	<img src={mongoLogo} className='lenguaje' alt='Mongo DB logo' />
    	<img src={htmlLogo} className='lenguaje' alt='HTML logo' />
    	<img src={cssLogo} className='lenguaje' alt='CSS logo' />
    </main>
    <section className='sobreMi'>
    	<img src={logo200} className='logo'/>
    	<h2 className='titulo'>Sobre mí</h2>
    	<p className='subTitulo'>Lorem ipsum odor amet, consectetuer adipiscing elit. Class rutrum maecenas ac leo habitant eu placerat. Venenatis eget egestas efficitur pellentesque fusce tristique nisl blandit. Laoreet vestibulum fames cursus placerat mus etiam curae dis. Bibendum porta congue venenatis mattis risus himenaeos. </p>
    </section>
    <section className='estudios'>
    	<section className='soft'>
    		<img src={logo200} className='logo'/>
    		<h2 className='subTitulo'>Soft Skills</h2>
        	<ul className='lista'>
        		<li>Per commodo mus lacinia</li>
        		<li>Lorem ipsum dolor sit amet.</li>
        		<li>dignissim porttitor ad potenti. </li>
        		<li>Natoque nunc nunc nam varius </li>
        		<li>ac netus. Convallis eleifend </li>
        		<li>egestas, tellus ridiculus libero</li>
        		<li>adipiscing parturient. Sodales </li>
        	</ul>
    	</section>
    	<section className='hard'>
        	<section className='fcc institucion'>
        		<img src={fccLogo} className='logoInsti'/>
        		<h2 className='subTitulo'>Free Code Camp</h2>
        		<p>Eu tristique arcu in, litora porttitor per etiam. Dis vulputate netus a pretium arcu maximus augue diam! Duis parturient congue vestibulum nec mollis volutpat. Eu sodales hac porttitor interdum litora; aliquet orci gravida. Quisque vehicula platea primis vulputate venenatis dis. Nostra at ac nisl maximus velit. Bibendum convallis est vestibulum condimentum ipsum vivamus sempe</p>
        	</section>
        	<section className='utec'>
        		<img src={utecLogo} className='logoInsti'/>
        		<h2 className='subTitulo'>UTEC</h2>
        		<p>Felis magna vivamus convallis dignissim libero ullamcorper proin tortor placerat. Dapibus felis platea; a vehicula elementum dapibus. Potenti suscipit cursus porttitor potenti facilisi himenaeos. Eros risus maximus vestibulum ridiculus metus elementum. Duis dui sagittis nibh maecenas eget interdum risus lectus laoreet. Lacus tristique torquent </p>
        	</section>
        	<section className='jap'>
        		<img src={japLogo} className='logoInsti'/>
        		<h2 className='subTitulo'>Jóvenes a Programar</h2>
        		<p>Per commodo mus lacinia; dignissim porttitor ad potenti. Natoque nunc nunc nam varius ac netus. Convallis eleifend egestas, tellus ridiculus libero adipiscing parturient. Sodales cubilia purus nullam laoreet condimentum neque ligula. Aliquam vitae congue libero efficitur natoque nunc id euismod. Dictum felis natoque conubia, suspendisse praesent felis nibh eu nam. Nascetu</p>
        	</section>
    	</section>
    </section>
    <section className='proyectos'>
    	<img src={proyectoTitle} alt='Proyectos' className='proyectoTitle' />
    	<section className='listaProyectos'>
        	<PreviewProjecto />
        	<PreviewProjecto />
        	<PreviewProjecto />
      	</section>
    </section>
    <Footer/>
    </>
  )
}

export default App
