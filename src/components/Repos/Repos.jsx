import React,{useEffect,useContext} from 'react'
import RepoItem from './RepoItem'
import RepoContext from './../../context/Repository/RepoContext';

 const Repos = () => {
    const context = useContext(RepoContext);
    useEffect(()=>{
        context.getRepos();
    },[])
    const state = context.repos;
    if(null!==state && state.length>0)
    {
        return state.map(item=><RepoItem key ={item.id} item={item}></RepoItem>)
    }
    else
    {
        return<div>

        </div>
    }
                
                   
}

export default Repos;
