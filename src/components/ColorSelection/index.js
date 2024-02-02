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

    
    const [corId, setCorId] = useState(0);
    const [corNome, setCorNome] = useState(0);

    function pegarCor() {
        setCorId(Math.floor(Math.random() * listaCores.length))
        setCorNome(listaCores[corId].cor)
        document.getElementById('colorResult').innerHTML = listaCores[corId].nome
        
    }

    return (
        <div className={styles.ColorSelection}>
            <h4>Clique no botão para pegar uma cor</h4>
            <h1 style={{ color: `${corNome}` }} id="colorResult">#</h1>

            <button onClick={pegarCor}>Pegar uma cor</button>
        </div>
    );
}

export default ColorSelection;