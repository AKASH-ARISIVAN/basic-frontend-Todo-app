import React from 'react'
import './Todo.css'

const Todo=()=>{
    return(
        <div className='main'>
            <div className="topic">
                <h1>
                TODO FRONTEND  
                </h1>
            </div>
            <div className="newtodo">
                <button id="but" className="add">+Add</button>
                <form id='form'>
                    <input id='input' type='text' placeholder='eg: Assignment submission on 19.7.24'></input>
                </form>
            </div>
            <div className="data">
                <ol>
                    <li>TODO 1 
                        <button id="delbut" className="add">Mark Done</button>
                    </li>
                    
                    <li>TODO 2
                    <button id="delbut" className="add">Mark Done</button>
                    </li>
                    <li>TODO 3
                    <button id="delbut" className="add">Mark Done</button>
                    </li>

                </ol>
            </div>
        </div>

    )
}
export default Todo