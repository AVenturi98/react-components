import image from '../../assets/img.jpg'

function Card() {
    
    return (
        <>
        <main className="container">
            <div className="row">
                <div className="card">
                    <div className="card_img">
                        <img className="image" src={image} alt="" />
                    </div>
                    <div className="card-body">
                        <div className="title_card"> Spider-Man 3</div>
                        <div className="description_card">Spider-Man 3 è un film del 2007 diretto da Sam Raimi. La trama del film è incentrata sulla vita di Spiderman, che sembra aver subito una svolta positiva sotto tutti i punti di vista.</div>
                        <button className='btn'>Leggi di più</button>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Card