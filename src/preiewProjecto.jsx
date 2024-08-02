import './previewProjecto.css'

import logo200 from '/Logo200.svg'
import arrow from '/Arrow1.svg'

function PreviewProjecto ({image = logo200, title = 'Nombre Proyecto', descrip = 'Proyecto realizado por Fabricio Fuentes'}) {
    return (
        <div className="contenedor">
            <a className='arrow' href='#' alt='más información'><img src={arrow}></img></a>
            <img src={image} alt='preview del proyecto' className='preview'/>
            <h2 className='subTitulo'>{title}</h2>
            <p className='texto'>{descrip}</p>
        </div>
    )
}

export default PreviewProjecto
