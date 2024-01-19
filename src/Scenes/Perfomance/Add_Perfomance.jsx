import React from 'react'
import { useState } from "react"
import {toast} from 'react-toastify'
import axios from "axios"

const Add_Perfomance = () => {
 

  

    const [inputs,setInputs] =useState({})

    function handleClick(){
        axios.post("http://localhost:8000/employee",inputs)
       .then((res)=>toast.success(res.data.message))
       .catch((e)=>toast.error(e.response.data.message)) 
      
      
    
    }
  return (
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center text-black">
  <div class="container max-w-screen-lg mx-auto">
    <div>
      <h2 class="font-semibold text-xl text-yellow-600">Employee Form</h2>
      <p class="text-gray-500 mb-6">Hage Hrm Software</p>

      <div class="bg-grey-300 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-grey-600">
            <p class="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div class="lg:col-span-2 ">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Full Name</label>
                <input type="text"  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                 onChange={(e)=>setInputs ({...inputs,name:e.target.value})} />
              </div>
              
              

              <div class="md:col-span-5">
                <label for="date of birth">Date Of Birth</label>
                <input type="date"  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                 onChange={(e)=>setInputs ({...inputs,dateOfBirth:e.target.value})}  />
              </div>

              <div class="md:col-span-5">
                <label for="gender">Gender</label>
                <input type="text"  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                  onChange={(e)=>setInputs ({...inputs,gender:e.target.value})} />
              </div>

              <div class="md:col-span-5">
                <label for="phone_number">Phone Number</label>
                <input type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                  onChange={(e)=>setInputs ({...inputs,contactNumber:e.target.value})} />
              </div>

              <div class="md:col-span-5">
                <label for="email">Email Address</label>
                <input type="text"  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="email@domain.com"
                 onChange={(e)=>setInputs ({...inputs,email:e.target.value})} />
              </div>

              <div class="md:col-span-3">
                <label for="address">Address / Street</label>
                <input type="text" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder=""
                 onChange={(e)=>setInputs ({...inputs,address:e.target.value})} />
              </div>
              <div class="md:col-span-3">
                <label for="address">HireDate</label>
                <input type="text" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder=""
                 onChange={(e)=>setInputs ({...inputs,HireDate:e.target.value})} />
              </div>

            


             

            
      
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</div>
  )
}

export default Add_Perfomance