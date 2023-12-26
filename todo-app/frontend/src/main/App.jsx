import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'
import Menu from '../template/Menu'
import Routes from './Routes'

export default function App(props){
    return(
        <div className="container">
            <Menu />
            <Routes />
        </div>
    )
}