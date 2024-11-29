import image from '../../assets/img.jpg'
import style from './Card.module.css'


function Card() {
    
    return (
        <>
        <main className="container">
            <div className={style.card}>
                <div className={style.cardImg}>
                    <img className={style.image}src={image} alt="" />
                </div>
                <div className={style.cardBody}>
                    <div className={style.titleCard}> Spider-Man 3</div>
                    <div className={style.descriptionCard}>Spider-Man 3 è un film del 2007 diretto da Sam Raimi. La trama del film è incentrata sulla vita di Spiderman, che sembra aver subito una svolta positiva sotto tutti i punti di vista.</div>
                    <button className={style.btn}>Leggi di più</button>
                </div>
            </div>
        </main>
        </>
    )
}

export default Card