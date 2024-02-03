import { useState } from "react"
import styles from "./ChallengeSelection.module.css"

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

    function getChallenge() {
        setChId(Math.floor(Math.random() * listaDesafios.length))
        setChallenge(listaDesafios[chId])
        
    }

    return (
        <div className={styles.challenge}>
            <h2>Agora, pegue um desafio para montar o cubo</h2>
            <h3>{challenge}</h3>

            <button onClick={getChallenge}>Clique aqui para gerar um desafio</button>
        </div>
    );
}

export default ChSelection;