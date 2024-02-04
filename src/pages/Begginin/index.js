import { Link } from "react-router-dom";
import styles from "./Begginin.module.css"

import { motion } from 'framer-motion'

function Begginin(){
    
    return (
        <motion.section 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 1}}
        exit={{opacity: 0}}
        
        className={styles.begginin}>
            <div>
                <h1>CUBE GAME</h1>
                <Link to="/BaseColor">
                    <button>continuar</button>
                </Link>
            </div>
        </motion.section>

    )
}

export default Begginin;