function Produto({ p_info }) {
    return (
        <div className="produto">
            <div className="left">
                <img src={p_info.thumbnail} alt="" id="detaque" />
                <ul id="imagens">
                    { p_info.images.map(
                        (im, idx) => <li key={idx}><img src={im} /></li>
                    )}
                </ul>
            </div>
            <div className="right">
                <h1>{p_info.title}</h1>
                <h2>R$ {p_info.price}</h2>
                <p>{p_info.description}</p>
                <a href="#">Compre agora!</a>
            </div>
        </div>
    )
}