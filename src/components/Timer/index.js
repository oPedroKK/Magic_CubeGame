import { useEffect, useState } from "react";
import styles from "./Timer.module.css"

function Timer() {

    const [obterTempo, setObterTempo] = useState(0)
    const [active, setActive] = useState(false)
    const [ableButton, setAbleButton] = useState(false)

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
                return;

            } else {
                setTimeout(() => {
                    setObterTempo((Tempo) => Tempo - 1)
                }, 1000)  
        }}

        
    }, [active, obterTempo])


    function StartTimer(){
        setAbleButton(true)
        setActive(true)
    }

    return (
        <section className={styles.timer}>
            <h2>Agora, escolha o tempo limite para resolver o cubo e comece</h2>
            
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

            <button 
            onClick={StartTimer} 
            disabled={ableButton}>INICIAR
            </button>
            
        </section>
    )
}

export default Timer;