import React,{useState} from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root')

const MovieList=()=> {

    
        const [filter,setFilter]=useState('')
        const [list,setList]=useState([
            {id:1, nom:'Narcos',note:'Good'},
            {id:2, nom:'Le loup de Wall Street',note:'Fair'},
            {id:3, nom:'Les infiltrés',note:'Fair'},
            {id:4, nom:'Les évadés',note:'Good'},
            {id:5, nom:'Star Wars',note:'Fair'}])

            
        const [newTodo, setNewTodo] = useState({firstName:'', lastName:''})

        const [todos, setTodos] = useState([])
        const [modalIsOpen,setmodalIsOpen] = useState(false)
        const [filmData, setFilmData] =  useState({name:'',rating:''})
        
       const handleNewTodo=(e)=>{
            e.preventDefault()
            if (newTodo ==='') return
            setTodos([...todos, {id: Date.now(), text:newTodo} ])
          
          }

    return(
      <React.Fragment>
          
           
        <h1>ADD Movie</h1>
        <input placeholder='ADD movie name ' value={newTodo.firstName} onChange={(e)=>setNewTodo({...newTodo, firstName:e.target.value})}  />
        <input placeholder='ADD movie rating ' value={newTodo.lastName} onChange={(e)=>setNewTodo({...newTodo, lastName:e.target.value})}  />        <br /> 
        <button onClick={handleNewTodo}>ADD Movie</button>
         <h2>your first name is - {newTodo.firstName}</h2>
         <h2>your last name is - {newTodo.lastName}</h2>
         <h2>{JSON.stringify(newTodo)}</h2>

        <br /> 
        <h1>search movie</h1>
        <input value={filter} placeholder='Search' onChange={(e)=>setFilter(e.target.value)} />

        <ul className='todoList'>
        {todos.map((name)=>{
         if(filter.length !==0){
          if(name.text.toLowerCase().startsWith(filter.toLowerCase())){
          return<li className='todo'>Name: {newTodo.firstName} Rating:{newTodo.lastName}   </li>}
          else if(name.note.toLowerCase().startsWith(filter.toLowerCase())){
            return<li className='todo'>Name: {newTodo.firstName}, Rating: {newTodo.lastName}</li>}    
        else{return null }      }
    return <li key={name.id} className='todo'> Name: {newTodo.firstName} Rating:{newTodo.lastName}</li>           
  })
  }

            {
                list.map((name)=>{
                    if(filter.length !==0){
                        if(name.nom.toLowerCase().startsWith(filter.toLowerCase())){
                        return<li className='todo'>Name: {name.nom}, Rating: {name.note} </li>}
                        else if(name.note.toLowerCase().startsWith(filter.toLowerCase())){
                            return<li className='todo'>Name: {name.nom}, Rating: {name.note}</li>}    
                        else{return null }
                    }
                return <li className='todo' key={name.id}>Name: {name.nom}, Rating: {name.note} </li>           
                })
                }
                <div>
     <Modal isOpen={modalIsOpen} onRequestClose={()=>{setmodalIsOpen(!modalIsOpen)}}>
       <h1>film information</h1>
       <label>Film Name</label>
       <input type="text" onChange={(e)=>{setFilmData({...filmData,name:e.target.value})}} />
       <label>Film rating</label>
       <input type="text" onChange={(e)=>{setFilmData({...filmData,rating:e.target.value})}} />
       <button onClick={()=>{setmodalIsOpen(!modalIsOpen)}}>Close</button>
     </Modal>
     <button onClick={()=>{setmodalIsOpen(!modalIsOpen)}}>Add film</button>

   </div>
                
        </ul>
        </React.Fragment>
            
    )
}
export default MovieList

