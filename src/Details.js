import React from 'react'
import {
    Table,
    TableHead,
    TableRowHead,
    TableCellHead,
    TableBody,
    TableRow,
    TableCell,
} from '@dhis2/ui'
const Details = (props) => {   
    return (
        <Table dataTest="dhis2-uicore-table">
        <TableHead dataTest="dhis2-uicore-tablehead">
          <TableRowHead dataTest="dhis2-uicore-tablerowhead">
            <TableCellHead dataTest="dhis2-uicore-tablecellhead">
              Id
            </TableCellHead>         
            <TableCellHead dataTest="dhis2-uicore-tablecellhead">
            Created
            </TableCellHead>
             <TableCellHead dataTest="dhis2-uicore-tablecellhead">
             Display Name
            </TableCellHead>             
           </TableRowHead>
        </TableHead>
        <TableBody dataTest="dhis2-uicore-tablebody">
          <TableRow dataTest="dhis2-uicore-tablerow">        
            <TableCell dataTest="details-id">
              {props.id}
            </TableCell>           
            <TableCell dataTest="details-created">
              {props.created}
            </TableCell>
            <TableCell dataTest="details-displayName">
              {props.displayName}
            </TableCell>
            </TableRow>
           </TableBody>
           </Table>
    )
}

export default Details 