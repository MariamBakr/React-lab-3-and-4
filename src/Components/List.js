import React from 'react';
import Card from './Card';
import  {useState} from "react"
import data from '../List.json'

function List () {
    const [searchInput, setSearchInput]=useState('')
    const [cat,setCat]=useState('')
    

return(
    <>
    <input className='mt-5 mb-4 text-center p-2' onChange={(e)=>{
    setSearchInput(e.target.value)
    }}  type="text" placeholder="search.."></input>
            <select className='p-3 ms-3'onChange={e=>{
                setCat(e.target.value)
                
            }} >
                <option value={cat}> All</option>
            <option >laptops</option>
            <option >mobile devices</option>
            <option >tablet devices</option>
        </select>
        <div className='row text-center'>

            {data.filter((item)=>{
                if(searchInput===''){
                    return item
                }else if(item.title.toLocaleLowerCase().includes(searchInput)){
                    return item
                }
            }).map((item,index)=><Card data={item} key={index}/>)}
        </div>

        
        </>
)
}

export default List;
