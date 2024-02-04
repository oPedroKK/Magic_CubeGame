import { useState } from "react"
import styles from "./ChallengeSelection.module.css"
import { Link } from "react-router-dom";

function ChSelection() {

   const listaDesafios = [
        "Monte utilizando a base para trás",
        "Monte utilizando a base para frente",
        "Monte utilizando a base para direita",
        "Monte utilizando a base para esquerda",
        "Monte utilizando a base para frente",
        "Monte utilizando a base para cima (cubo invertido)",
        "Monte utilizando a base para baixo (normal)"

    ]

    
    const [chId, setChId] = useState(0);
    const [challenge, setChallenge] = useState();
    const [ableButton, setAbleButton] = useState(true);

    if(!challenge){
        setChallenge('nenhum desafio adicionado')
    }

    function getChallenge() {
        setChId(Math.floor(Math.random() * listaDesafios.length))
        setChallenge(listaDesafios[chId])

        setAbleButton(false)
        
    }

    return (
        <section className={styles.challenge}>
            <div>
                <h2>pegue um desafio para montar o cubo</h2>
                <h3>{challenge}</h3>

                <div className={styles.buttonsCont}>
                    <button onClick={getChallenge}>Gerar um desafio</button>
                    
                    <Link to="/Timer" style={{ PointerEvents: ableButton ? "none" : "auto" }}>
                        <button disabled={ableButton}>continuar</button>
                    </Link>

                    <Link to="/BaseColor">
                        <button>voltar</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ChSelection;