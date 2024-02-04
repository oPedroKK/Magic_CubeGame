import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Timer.module.css";
import { motion } from 'framer-motion';

function Timer() {

    const [obterTempo, setObterTempo] = useState(0)
    const [active, setActive] = useState(false)
    const [ableButton, setAbleButton] = useState(false)
    const [title, setTitle] = useState()

    if(!title){
        setTitle('escolha o tempo limite para resolver o cubo e comece')
    }

    function timingone() {
        setObterTempo(2*60)
        
    }
    function timingtwo() {
        setObterTempo(60)
    }
    function timingthree() {
        setObterTempo(30)
        
    }

    const minutes = Math.floor(obterTempo / 60)
    const seconds = obterTempo % 60

    useEffect(() => {
        if(active){
            if(obterTempo === 0){
                setActive(false)
                setAbleButton(false)
                setTitle()
                return;

            } else {
                setTimeout(() => {
                    setObterTempo((Tempo) => Tempo - 1)
                }, 1000)  
        }}

        
    }, [active, obterTempo])


    function StartTimer(){
        setAbleButton(true)
        setTitle('RESOLVA O CUBO!')
        setActive(true)
    }

    return (
        <motion.section 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 1}}
        exit={{opacity: 0}}

        className={styles.timer}>
            <div>
                <h2>{title}</h2>
                
                <div>
                    <button 
                    onClick={timingone} 
                    disabled={ableButton}>2 minutos
                    </button>

                    <button 
                    onClick={timingtwo} 
                    disabled={ableButton}>1 minuto
                    </button>

                    <button 
                    onClick={timingthree}
                    disabled={ableButton}>30 segundos
                    </button>

                </div>

                <div>
                    <span>{minutes.toString().padStart(2, "0")}</span>
                    <span>:</span>
                    <span>{seconds.toString().padStart(2, "0")}</span>
                </div>

                <div className={styles.buttonsCont}>
                    <button 
                    onClick={StartTimer} 
                    disabled={ableButton}>INICIAR
                    </button>

                    <Link to="/Challenge">
                        <button disabled={ableButton}>voltar</button>
                    </Link>
                </div>
                
            </div> 
        </motion.section>
    )
}

export default Timer;