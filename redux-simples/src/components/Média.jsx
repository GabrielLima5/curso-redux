import Card from "./Card"
import { connect } from "react-redux"

function Média({min, max}){
    return(
        <Card title="Média de números" purple>
            <div className="Média">
                <span>
                    <span>Resultado:</span>
                    <strong>{(min + max) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
} 

export default connect(mapStateToProps)(Média)