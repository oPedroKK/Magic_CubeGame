import { useState } from "react"
import styles from "./ColorSelection.module.css"

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

    function getColor() {
        setColorId(Math.floor(Math.random() * listaCores.length))

        setUsingColor(listaCores[colorId].cor)
        setColorName(listaCores[colorId].nome)
        
    }

    return (
        <div className={styles.ColorSelection}>
            <h2>Primeiro, pegue uma cor para a base do cubo</h2>

            <div 
            style={{ backgroundColor: `${usingColor}` }}
            className={styles.colorSquare}></div>

            <h3>{colorName}</h3>



            <button onClick={getColor}>Clique aqui para gerar a cor</button>
        </div>
    );
}

export default ColorSelection;