import { connect } from "react-redux"
import Card from "./Card"

function Sorteio({min, max}){
    return(
        <Card title="Sorteio de números" blue>
            <div className="Sorteio">
                <span>
                    <span>Resultado</span>
                    <strong>{Math.floor(Math.random() * (max - min) + min)}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Sorteio)