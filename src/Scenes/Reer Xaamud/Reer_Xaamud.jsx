import React, { useState, useEffect } from 'react';
import '../../App.css';
import MaterialTable from 'material-table'
import { Link } from "react-router-dom";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import {
    alpha,
    Box,
    Button,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
  } from '@mui/material';
  import PrintIcon from '@mui/icons-material/Print';

  {/*import { useAuthContext } from '../../hooks/useAuthContext' */}
function Reer_Xaamud() {
  
 
  const url = "http://localhost:8000/employe"
  const [data, setData] = useState([])
  useEffect(() => {
   
    getEmployee() 
  }, [])

  const getEmployee = () => {
    fetch(url,
      {
        headers: {
          'Content-Type': 'application/json',
         
        }}).then(resp => resp.json())
      .then(resp => setData(resp))
  }
  const columns = [
    
  
    
    {
      title: "Name", field: "name",width: 100,
      cellStyle: {
        backgroundColor: '#ffff',
        color: '#000000',
        },
        headerStyle: {
          backgroundColor:'	#04134e',
          color: '#f1c232',
          
        },
      validate: rowData => rowData.name === undefined || rowData.name === "" ? "Required" : true
    },
    {
      title: "DateOfBirth", field: "dateOfBirth",
      cellStyle: {
        backgroundColor: '#ffff',
        color:  '#000000',
       },
        headerStyle: {
          backgroundColor: '	#04134e',
          color: '#f1c232',
          
        },
      validate: rowData => rowData.dateOfBirth === undefined || rowData.dateOfBirth === "" ? "Required" : true
    },
    {
      title: "Gender", field: 'gender',
      cellStyle: {
        backgroundColor: '#ffff',
        color: '#000000',
        },
        headerStyle: {
          backgroundColor: '	#04134e',
          color: '#f1c232',
          
        },
      validate: rowData => rowData.gender === undefined || rowData.gender === "" ? "Required" : true
    },
    {
      title: "Phone", field: 'contactNumber',
      cellStyle: {
        backgroundColor: '#ffff',
       color: '#000000',
        },
        headerStyle: {
          backgroundColor: '	#04134e',
          color: '#f1c232',
          
        },
      validate: rowData => rowData.contactNumber === undefined || rowData.contactNumber === "" ? "Required" : true
    },
    {
      title: "Email", field: 'email',
      cellStyle: {
        backgroundColor: '#ffff',
  color: '#000000',
       },
        headerStyle: {
          backgroundColor: '	#04134e',
          color: '#f1c232',
          
        },
      validate: rowData => rowData.email === undefined || rowData.email === "" ? "Required" : true
    },
    {
      title: "Address", field: 'address',
      cellStyle: {
        backgroundColor: '#ffff',
        color: '#000000',
       },
        headerStyle: {
          backgroundColor: '#04134e',
          color: '#f1c232',
          
        },
      validate: rowData => rowData.address === undefined || rowData.address === "" ? "Required" : true
    }]
    
  return (
    <div className="min-h-screen p-2  flex items-center justify-center pb-10 mb-10 ">
     
     <div className="container max-w-screen-lg mx-auto ">
     <div className="flex  justify-end ">
    <Link to='/Add_Xaamud' className="border-2 mb-2">
    <PersonAddAlt1Icon  className="mr-1"/>
      <button className=" border-indigo-900   mt-1 mr-4">Add Person</button>
      
      </Link>
      <Tooltip arrow title="Print" >
              <IconButton onClick={() => window.print()}>
                <PrintIcon className=" mr-12 h-11 w-14  bg-slate-100"/>
              </IconButton>
            </Tooltip>
            </div>
      <MaterialTable 
        title="Payroll Details"
        
        columns={columns}
        style={{maxWidth: '89vw', overflow: 'auto'
        }}
        data={data}
        
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
       
        editable={{ 
          onRowAdd: (newData) => new Promise((resolve, reject) => {
            //Backend call
            fetch(url, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
               
              },
              body: JSON.stringify(newData)
            }).then(resp => resp.json())
              .then(resp => {
                getEmployee()
                resolve()
              })
          }),
          onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
            //Backend call
            fetch(url + "/" + oldData._id, {
              method: "PUT",
              headers: {
                'Content-Type': 'application/json',
                
              },
              body: JSON.stringify(newData)
            }).then(resp => resp.json())
              .then(resp => {
                getPatients()
                resolve()
              })
          }),
          onRowDelete: (oldData) => new Promise((resolve, reject) => {
            //Backend call
            fetch(url + "/" + oldData._id, {
              method: "DELETE",
              headers: {
                'Content-Type': 'application/json',
                
              },

            }).then(resp => resp.json())
              .then(resp => {
                getEmployee()
                resolve()
              })
          })
        }}
      />
      </div>
    </div>
  );
}

export default Reer_Xaamud;