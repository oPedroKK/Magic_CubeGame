import { useState } from "react"
import styles from "./ChallengeSelection.module.css"
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

import listaDesafios from "../../json/ChallengePage.json"


function ChSelection() {
    
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
        <motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 1}}
        exit={{opacity: 0}}

        className={styles.challenge}>
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
        </motion.section>
    );
}

export default ChSelection;