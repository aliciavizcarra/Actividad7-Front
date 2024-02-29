export default function BarraBusqueda({filterText,setFilterText}){
    return(
        <>
            <input type="text" placeholder="Busca por título" value={filterText} onChange={(e)=>{setFilterText(e.target.value)}}></input>
        </>
    )
}