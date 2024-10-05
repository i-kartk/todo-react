import { useState } from "react"

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler= (e)=>{
    e.preventDefault()
    setTitle("")
    setDescription("")

    const newTask = {title,description}

    setTask((prevTask) =>{
      const updatedTask = [...prevTask, newTask];
      return updatedTask;
    });
  };


  const deleteHandler = (index)=>{
    let copyTask = [...task]
    copyTask.splice(index,1)
    setTask(copyTask)
  }

  let renderTask = <h2> no task added</h2>

  if(task.length > 0 ){
    renderTask = task.map(function(task,index){
      return (
        // eslint-disable-next-line react/jsx-key
        <div 
        key={index}
        className=" text-black flex justify-between items-center p-1 border-b-2">
          <h2 className="font-semibold">{task.title}</h2>
          <h3 className="font-semibold ">{task.description}</h3>
          <button 
          onClick={()=>{deleteHandler(index)}}
          className="w-20 rounded bg-green-700 h-8 text-white hover:bg-red-500"
          >delete</button>

        </div>
      )
    })
  }


  return (
    < >

      <div className="w-screen bg-slate-900 h-screen p-5 overflow-hidden">
        <h1 className="rounded bg-black text-white text-center text-4xl font-extrabold p-4"> Todo in <span className="text-green-600 font-bold text-3xl"> REACT</span></h1>

          <form 
          onSubmit={submitHandler}
          className="rounded flex justify-center items-center  w-full mt-6 mb-4 bg-zinc-900 ">
            <input 
            type="text"
            placeholder= " Task title..."
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className=" rounded w-72 p-2 border-white bg-slate-400 text-black mt-5 mb-5 ml-4 placeholder:text-black" />

            <input 
            type="text"
            placeholder= "task description..."
            value ={description}
            onChange={(e)=>{setDescription(e.target.value)}}
            className=" rounded w-72 p-2 border-white bg-slate-400 text-black mt-5 mb-5 ml-4 placeholder:text-black " />

            <button 
            type="submit"
            className="w-20 ml-14 mt-5 mb-5 rounded bg-green-700 h-10 text-white hover:bg-red-500"
            >Add task</button>
          </form>

          <div className=" rounded h-full bg-zinc-900 p-4 ">
            <ul className=" text-white bg-blue-500 p-1">
                {renderTask}
            </ul>
          </div>
      </div>
    </>
  )
}

export default App
