import { useState } from 'react'

function Produto({ p_info }) {
    const [destaque, setDestaque] = useState(p_info.thumbnail)

    function trocarImagemDestaque(e) {
        let antigo = destaque
        setDestaque(e.target.src)
        e.target.src = antigo
    }

    return (
        <div className="produto">
            <div className="left">
                <img src={ destaque } alt="" id="destaque" />
                <ul id="imagens">
                    { p_info.images.map(
                        (im, idx) => <li key={idx}><img src={im} onClick={trocarImagemDestaque} /></li>
                    )}
                </ul>
            </div>
            <div className="right">
                <h1>{p_info.title}</h1>
                <h2>R$ {p_info.price.toFixed(2).toString().padStart(2, '0')}</h2>
                <p>{p_info.description}</p>
                <a className="comprar" href="#">Compre agora!</a>
            </div>
        </div>
    )
}

export default Produto