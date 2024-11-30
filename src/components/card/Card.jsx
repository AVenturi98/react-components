import { useState } from 'react';

import image from '../../assets/img.jpg'
import style from './Card.module.css'


function Card() {

    const [visibileText, setIsTextVisible] = useState(false);

    const toggleText = () => {
        setIsTextVisible(!visibileText);
    };
    return (
        <>
            <main className="container">
                <div className={style.card}>
                    <div className={style.cardImg}>
                        <img className={style.image} src={image} alt="" />
                    </div>
                    <div className={style.cardBody}>
                        <div className={style.titleCard}> Spider-Man 3</div>
                        <div className={style.descriptionCard}>Spider-Man 3 è un film del 2007 diretto da Sam Raimi. La trama del film è incentrata sulla vita di Spiderman, che sembra aver subito una svolta positiva sotto tutti i punti di vista.</div>
                        {visibileText && (
                            <span className={style.hiddenText}>
                                Tuttavia, il costume di Spider-Man diventa nero e Peter Parker si trasforma, diventando molto sicuro di sé e iniziando a trascurare le persone che più gli sono care2. Peter si trova così a dover combattere contro i propri demoni e - nello stesso tempo - contro due temibili nemici: l'Uomo Sabbia e Venom2. <br></br>
                            </span>
                        )}
                        <button className={style.btn} onClick={toggleText}>
                            {visibileText ? 'Nascondi' : 'Leggi di più'}
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}



export default Card
