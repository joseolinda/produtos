import { useState } from 'react'

function Produto({ p_info }) {
    const [destaque, setDestaque] = useState(p_info.thumbnail)

    function trocarImagemDestaque(e) {
        let antigo = destaque
        setDestaque(e.target.src)
        e.target.src = antigo
    }

    function removeHash(e) {
        let prod_id = "#product-" + p_info.id
        let hash = window.location.hash
        if (hash === prod_id ){
            e.target.href = "#"
        } else {
            e.target.href = "#product-" + p_info.id
        }
    }

    return (
        <div className="produto" id={"product-" + p_info.id}>
            <div className="left">
                <img src={ destaque } alt="" id="destaque" />
                <ul id="imagens">
                    { p_info.images.map(
                        (im, idx) => <li key={idx}><img src={im} onClick={trocarImagemDestaque} /></li>
                    )}
                </ul>
            </div>
            <div className="right">
                <a href={"#product-" + p_info.id } className="fullscreen" onClick={ removeHash }>&#10231;</a>
                <a href={"#" + p_info.category} className="categoria">#{p_info.category}</a>
                <h1>{p_info.title}</h1>
                <h2>R$ {p_info.price.toFixed(2).toString().padStart(2, '0')}</h2>
                <p>{p_info.description}</p>
                <a className="comprar" href="#">Compre agora!</a>
            </div>
        </div>
    )
}

export default Produto