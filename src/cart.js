import React, { useState } from 'react'
import { useEffect } from 'react'
import View from './view'
import Viewin from './viewin'
import { Close } from '@mui/icons-material'
import { Button } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Cart() {
  const [cartid, setCartid] = useState([])
  const [prodata, setProdata] = useState([])
  const [multiimage, setMultiimage] = useState([])
  const [userData, setUserData] = useState({})
  const [data, setData] = useState([])
  // const [cart, setCart] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => {
    // window.location.href = '/Contect'
    setShow(false)
  }
  const changeaddress = (aid) => {
    window.location.href = '/client'
 
    let data = JSON.parse(localStorage.getItem('data'))
    let sdf = false
    for (let i = 0; i < data.length; i++) {
      if (data[i].cart === aid) {
        sdf = true
      }

    }
    if (sdf) {

      console.log(aid);

    }

  }
  // const handleShow = () => setShow(true);

  const handleShow = (dfg) => {
    if (localStorage.getItem('id')) {
      // let loginid = JSON.parse(localStorage.getItem('id'))
      let data1 = JSON.parse(localStorage.getItem('data'))
      console.log(data1);
      console.log(dfg);

      let asd = false
      for (let i = 0; i < data.length; i++) {
        if (data[i].address == '') {
          asd = true
        }

      }
      if (asd) {

        console.log(asd);

        // alert('plese fill the address ')
      }
      else {
        // console.log("true", data[i].address);
        // alert('false')
        console.log("false");
        setShow(true)
      }
    }


  }

  const rrr = (id) => {
    console.log(id);

    localStorage.setItem("viewid", JSON.stringify(id))
    window.location.href = "./view"
  }
  useEffect(() => {
    if (localStorage.getItem('cartid')) {
      let cartid = JSON.parse(localStorage.getItem('cartid'))
      setCartid(cartid)
    }
  }, [])






  useEffect(() => {

    let cartData = []
    let data = []
    let id = []
    if (localStorage.getItem('data') && localStorage.getItem('id')) {
      data = JSON.parse(localStorage.getItem('data'))
      id = localStorage.getItem('id')
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
          setUserData(data[i])
          cartData = data[i].cart
          setCartid(cartData)

        }
      }

      let abc = []
      if (localStorage.getItem('prodata')) {
        abc = JSON.parse(localStorage.getItem('prodata'))
        setProdata(abc)
      }
      let showData = []

      // console.log(abc,cartData);
      for (let i = 0; i < cartData.length; i++) {

        for (let j = 0; j < abc.length; j++) {
          if (cartData[i] == abc[j].id) {
            // console.log(abc[j]);
            showData.push(abc[j])
            setData(showData)
            // console.log(showData);
          }

        }

      }


    }
    else {
      alert('please log in')
    }


    // let cartData = []
    // let data = []
    // if (localStorage.getItem('data') && localStorage.getItem('id')) {
    //   data = JSON.parse(localStorage.getItem('data'))
    //   for (let i = 0; i < data.length; i++) {
    //     if (data[i].id == localStorage.getItem('id')) {
    //       setUserData(data[i])
    //       cartData = data[i].cart
    //       setCartid(data[i].cart)
    //     }
    //   }
    //   let prodata = []
    //   if (localStorage.getItem('prodata')) {
    //     prodata = JSON.parse(localStorage.getItem('prodata'))
    //     setProdata(prodata)
    //   }
    //   let showData = []
    //   for (let j = 0; j < cartData.length; j++) {
    //     for (let k = 0; k < prodata.length; k++) {
    //       if (cartData[j].id == prodata[k].id) {
    //         showData.push(prodata[k])
    //       }
    //     }
    //   }
    //   setData(showData)
    // } else {
    //   alert('please login')
    // }
  }, [])

  return (
    <>
      <div className='container'>
        <div>
          cart page


          {
            data.map((item, index) => {
              return (
                <div className='row d-flex border border-1 border-dark mt-5'>
                  <div className='closebtn'>
                    <Close />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6  '>
                    <div className='row'>
                      <img src={item.image} className='col-lg-4 col-md-12 col-sm-12' onClick={() => { rrr(item.id) }} />
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <h4>product id:{item.id}</h4>
                    <h4>product product name:{item.productname}</h4>
                    <h4>product catagary:{item.catagary}</h4>
                    <h4>product price:{item.price}</h4>
                    <h4>product discription :{item.discription}</h4>
                    {/* <h4>product discription :{item.multiimage}</h4> */}
                    <Button variant="warning" onClick={() => { handleShow(item.id) }} >buy now</Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>plese enter your address</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={() => { changeaddress(item.address) }}>
                          ok
                        </Button>
                      </Modal.Footer>
                    </Modal>

                  </div>



                </div >
              )

            })
          }
        </div>
      </div>
    </>
  )
}
