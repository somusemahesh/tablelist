import React from 'react'
import './Table.css'
const Table = (props) => {
  console.log(props.itemData)
  return (
    <div className="container">
      <table className="table">

        

    <thead>

        <tr>

            <th>S.N</th>

            <th>Title</th>

            <th>Amount</th>

        </tr>

    </thead>

    <tbody>

    {
      
        props.itemData.map((data, index)=>{
          

            return(

                  <tr key={index}>

                    <td>{index+1}</td>

                    <td>{data.title}</td>

                    <td>{data.amount}</td>

                  </tr>

            )

        })

    }

    </tbody>

</table>
    </div>
  )
}

export default Table
