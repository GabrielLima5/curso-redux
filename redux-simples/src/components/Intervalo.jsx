import { connect } from "react-redux"
import Card from "./Card"
import './Intervalo.css'
import { alterarMax, alterarMin } from "../store/actions/numeros"

function Intervalo({min, max, alterarMaximo, alterarMinimo}){
    return(
        <Card title="Intervalo de números" red>
            <div className="intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={(e) => alterarMinimo(e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={(e) => alterarMaximo(e.target.value)} />
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

function mapDispatchToProps(dispatch){
    return {
        alterarMaximo(newMax){
            dispatch(alterarMax(newMax))
        },

        alterarMinimo(newMin){
            dispatch(alterarMin(newMin))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)