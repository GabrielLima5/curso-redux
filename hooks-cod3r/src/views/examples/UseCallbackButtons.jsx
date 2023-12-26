import { memo } from "react"

function UseCallbackButtons({inc}){
    console.log('Render...')
    return(
        <div>
            <button className="btn" onClick={() => inc(6)}>+6</button>
            <button className="btn" onClick={() => inc(12)}>+12</button>
            <button className="btn" onClick={() => inc(18)}>+18</button>
        </div>
    )
}

export default memo(UseCallbackButtons)