import React from 'react'
import { useGetAccountsQuery,usePostAccountsMutation } from './api/adminSlice'

const Admin = () => {
    const {data,error,isLoading} = useGetAccountsQuery();
    const [addAccount,response] = usePostAccountsMutation();

    const handleClick = () => {
        addAccount(5000,12);
        console.log(data);
    }
  return (
    <div>
     <button onClick={handleClick}>Add Account </button>
    </div>
  )
}

export default Admin
