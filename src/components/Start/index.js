import styles from "./Start.module.css"

function Start(){
    function ColorOn() {
        console.log("OIIII")
    }

    
    return (
        <div className={styles.start}>
            <h1>CUBE GAME</h1>

            <button onClick={ColorOn}>Continuar</button>
        </div>
    )
}

export default Start;