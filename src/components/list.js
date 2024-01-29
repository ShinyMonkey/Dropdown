import '../styles/list.css'

function List({toggle1,task}){
    return (
        <list>
            {task.map((task)=>{
                return <li onClick={(e)=>{toggle1(e.target.innerHTML)}}>{task}</li>
            })}
            
            {/* <li onClick={(e)=>{toggle1(e.target.innerHTML)}} >Probably not</li> */}
        </list>
    )
}


export default List;
