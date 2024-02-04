import { useState } from "react"
import styles from "./ColorSelection.module.css"
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

function ColorSelection() {

   const listaCores = [
        {nome: "branco", cor: "#F7F7F7"},
        {nome: "amarelo", cor: "#F7F700"},
        {nome: "verde", cor: "#00C70E"},
        {nome: "azul", cor: "#0063F7"},
        {nome: "vermelho", cor: "#F70000"},
        {nome: "laranja", cor: "#F76300"}
    ]

    
    const [colorId, setColorId] = useState(0);
    const [colorName, setColorName] = useState();
    const [usingColor, setUsingColor] = useState();
    const [ableButton, setAbleButton] = useState(true);

    if(!colorName){
        setColorName('nenhuma cor selecionada')
    }

    function getColor() {
        setColorId(Math.floor(Math.random() * listaCores.length))

        setUsingColor(listaCores[colorId].cor)
        setColorName(listaCores[colorId].nome)

        setAbleButton(false)
        
    }

    return (
        <motion.section 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 1}}
        exit={{opacity: 0}}

        className={styles.ColorSelection}>
            <div>
                <h2>pegue uma cor para a base do cubo</h2>

                <div
                style={{ backgroundColor: `${usingColor}` }}
                className={styles.colorSquare}
                ></div>

                <p>{colorName}</p>

                <div className={styles.buttonsCont}>
                    <button onClick={getColor}>mudar cor</button>
                    
                    <Link to="/Challenge">
                        <button disabled={ableButton}>continuar</button>
                    </Link>
                    
                    <Link to="/">
                        <button>voltar</button>
                    </Link>
                </div>
            </div>
        </motion.section>
    );
}

export default ColorSelection;