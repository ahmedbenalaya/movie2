import React,{useState} from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root')

const MovieList=()=> {
 const List = [
        {id:1, nom:'Narcos',note:'Good'},
        {id:2, nom:'Le loup de Wall Street',note:'Fair'},
        {id:3, nom:'Les infiltrés',note:'Fair'},
        {id:4, nom:'Les évadés',note:'Good'},
        {id:5, nom:'Star Wars',note:'Fair'}]
    
    
        const [filter,setFilter]=useState('')
        const [newTodo, setNewTodo] = useState({firstName:'', lastName:''})

        const [todos, setTodos] = useState([])
        const[modalIsOpen,setModalIsOpen]=useState(false)

        
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
          return<li className='todo'>Name: {newTodo.firstName} Rating:{newTodo.lastName} <button className='but' onClick={()=>setModalIsOpen(true)}> + </button>   </li>}
          else if(name.note.toLowerCase().startsWith(filter.toLowerCase())){
            return<li className='todo'>Name: {newTodo.firstName}, Rating: {newTodo.lastName}</li>}    
        else{return null }      }
    return <li key={name.id} className='todo'> Name: {newTodo.firstName} Rating:{newTodo.lastName}<button className='but' onClick={()=>setModalIsOpen(true)}> + </button></li>           
  })
  }

            {
                List.map((name)=>{
                    if(filter.length !==0){
                        if(name.nom.toLowerCase().startsWith(filter.toLowerCase())){
                        return<li className='todo'>Name: {name.nom}, Rating: {name.note} <button className='but' onClick={()=>setModalIsOpen(true)}> + </button>   </li>}
                        else if(name.note.toLowerCase().startsWith(filter.toLowerCase())){
                            return<li className='todo'>Name: {name.nom}, Rating: {name.note}</li>}    
                        else{return null }
                    }
                return <li className='todo'>Name: {name.nom}, Rating: {name.note}  <button className='but' onClick={()=>setModalIsOpen(true)}> + </button></li>           
                })
                }
                <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={()=>setModalIsOpen(false)}
        >
            <h2>modal titre</h2>
            <div>
            <button onClick={()=>setModalIsOpen(false)}>Close</button>
            </div>
        </Modal>
                
        </ul>
        </React.Fragment>
            
    )
}
export default MovieList

