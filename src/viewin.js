import React, { useEffect, useState } from 'react'

import image1 from './assets/images/images.jpeg'
import MUIDataTable from "mui-datatables";
import Sider from './Sider';



export default function Viewin() {
  // const addproduct = () => {
  //   window.location.href = "./addproduct"
  // }

  const [prodata, setProdata] = useState([])
  useEffect(() => {
    let prodata = JSON.parse(localStorage.getItem('prodata'))
    setProdata(prodata)

  }, [])
  const remove = (re) => {
    let newdata = JSON.parse(localStorage.getItem("prodata"))
    newdata = prodata.filter(obj => obj.id !== re);
    localStorage.setItem('prodata', JSON.stringify(newdata))
    setProdata(newdata)

  }

  const adddata = (w) => {
    // localStorage.setItem('productid', w)
    // window.location.href = "./addproduct"
    window.location.href = "/addproduct/" + w


  }

  const view = (rushita) => {
    console.log(rushita);
    window.location.href = "./view"
    localStorage.setItem("viewid", rushita)
  }
  const columns = [
    {
      name: "id",
      label: "id",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "productname",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "discription",
      label: "description",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "price",
      label: "price",
      options: {
        filter: true,
        sort: false,
      }
    },

    {
      name: "catagary",
      label: "category",
      options: {
        filter: true,
        sort: false,
      }
    }, {
      name: "image",
      label: "image",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => (
          <img src={value} height={100} width={100} />
        ),

      }
    },
    {
      name: "id",
      label: "edit",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (edit) => (
          <div>
            <button onClick={() => { adddata(edit) }}>edit</button>
          </div>
        ),

      }
    },
    {
      name: "id",
      label: "remove",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => (
          <div>
            <button onClick={() => { remove(value) }}>remove</button>

          </div>
        ),

      }
    },
    {
      name: "id",
      label: "view",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => (
          <div>
            <button onClick={() => { view(value) }}>view</button>

          </div>
        ),

      }
    },
  ];

  const data = JSON.parse(localStorage.getItem('prodata'))

  const options = {
    filterType: 'checkbox',
    responsive: 'scroll'
  };



  return (
    <div>
      <section className="container-fluid">
        <div className="row border-bottom border-3 border-dark">
          <div className="col-2">
            <img src={image1} width={100} alt="" />


          </div>
          <div className="col-10">

            <div class="d-flex justify-content-around flex-wrap">
              <h1>view in table</h1>

            </div>
          </div>
        </div>
        {/* <div className=' row'>
          <button className="btn btn-primary border col-3" onClick={addproduct} variant="primary">add product</button>
          <button className="btn btn-primary border col-3" >view in table</button>
          <button className="btn btn-primary border col-3" >view all</button>
          <button className="btn btn-primary border col-3"> cart</button>
        </div> */}
        <Sider />

        {/* <div>
          <div className='scrol'>
            <table class="table bbb">

              <thead>
                <tr>
                  <th scope="col" >id</th>
                  <th scope="col" >product name</th>
                  <th scope="col" >description</th>
                  <th scope="col" >price</th>
                  <th scope="col" >catagary</th>
                  <th scope="col" >image</th>


                </tr>
              </thead>

              <tbody>
                {
                  prodata.map((item) => {
                    return (
                      <tr  >
                        <td>{item.id}</td>
                        <td>{item.productname}</td>
                        <td>{item.discription}</td>
                        <td>{item.price}</td>
                        <td>{item.catagary}</td>
                        <td>
                          <img
                            src={item.image}
                            width={100}
                          />
                        </td>
                        <td>
                          <button onClick={() => { adddata(item.id) }}>edit</button>
                          <button onClick={() => { remove(item.id) }}>remove</button>

                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div> */}

        <div>
          <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={columns}
            options={options}
          />
        </div>





      </section>
    </div>
  )
}
