import { connect } from "react-redux"
import Card from "./Card"

function Soma({min, max}){
    return(
        <Card title="Soma de números" green>
            <div className="Soma">
                <span>
                    <span>Resultado:</span>
                    <strong>{(min + max)}</strong>
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

export default connect(mapStateToProps)(Soma)