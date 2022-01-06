import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import { Menu, MenuItem } from '@dhis2/ui'
import Details from './Details';
import classes from "./App.module.css";
const dsQuery = {
    programs: {
        resource: 'dataSets',
        params: {
            paging: false,
            fields: ['id, displayName, created'],
        }
    }
  };
export const Datasets = () => {
    let [Id,setId]=React.useState("0");
    let [Name,setName]=React.useState("0");
    let [Created,setCreated]=React.useState("0");
    const { loading, error, data } = useDataQuery(dsQuery)
    if (error) {
        return <span>ERROR: {error.message}</span>
    }
    if (loading) {
        return <span>Loading...</span>
    }
    return (
        <table><tr>
         <td><Menu>
            <h1>List</h1>
            {data.programs.dataSets.map(({id, displayName, created }) => (
                <MenuItem dataTest={"list-dataSet-"+id} onClick={()=>{setId(id); setName(displayName); setCreated(created); }} key={id} label={displayName} created={created} />
            ))}
        </Menu>
        </td>
        <td className= {classes.td2} >  <h1>Details</h1>
        { Id!="0"?  <Details  id={Id} displayName={Name} created={Created} />: null}                    
        </td>
            </tr></table>  
    )
}