import styles from "./Start.module.css"

function Start(){

    function nextLevel() {
        

    }

    
    return (
        <div className={styles.start}>
            <h1>CUBE GAME</h1>

            <button onClick={nextLevel}>Continuar</button>
        </div>
    )
}

export default Start;