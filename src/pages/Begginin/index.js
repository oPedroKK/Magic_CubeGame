import { Link } from "react-router-dom";
import styles from "./Begginin.module.css"

function Begginin(){
    
    return (
        <section className={styles.begginin}>
            <div>
                <h1>CUBE GAME</h1>
                <Link to="/BaseColor">
                    <button>continuar</button>
                </Link>
            </div>
        </section>

    )
}

export default Begginin;