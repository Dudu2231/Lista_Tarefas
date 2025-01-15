import { useState } from "react"

export default function Tasks(){
    const [tasks, setTask] = useState([])

    function addTask(event){
        const item = document.getElementById("item").value
        if (item){
            setTask((t)=> [...t, item])
            document.getElementById("item").value=""

        }
    }

    function deleteTask(index){
        setTask((t)=> t.filter(value=> value!= t[index]))
    }
    


    return (
        <div id="main-container">
            <div id="header">
                <h1>Lista De Tarefas</h1>
            </div>
            <div id="body-container">
                <div className="input-container">
                    <input id="item" type="text" placeholder="Sua tarefa"/>
                    <button id="submit-btn" onClick={addTask}>Adicionar</button>
                </div>
                
                <div className="general-container">
                    {tasks.map((task, index)=>{
                    return (
                        <div className="task-container" key={index}>
                            {task}
                            <button className="delete-btn" onClick={()=> deleteTask(index)}>Excluir</button>
                        </div>
                    )
                 })}
                </div>
                
            </div>
        </div>
        
    )

}