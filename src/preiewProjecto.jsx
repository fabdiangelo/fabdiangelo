import logo200 from '/Logo200.svg'

function PreviewProjecto ({image = logo200, title = 'Nombre Proyecto', descrip = 'Proyecto realizado por Fabricio Fuentes'}) {
    return (
        <div className="previewProjecto">
            <img src={image} alt='preview del proyecto' className='preview'/>
            <h2>{title}</h2>
            <p>{descrip}</p>
        </div>
    )
}

export default PreviewProjecto
