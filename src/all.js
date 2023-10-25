import React, { useEffect, useState } from 'react'
import { Cart } from 'react-bootstrap-icons'
import Sider from './Sider'
import image1 from './assets/images/images.jpeg'


export default function All() {

    const [prodata, setProdata] = useState([])
    useEffect(() => {
        let prodata = JSON.parse(localStorage.getItem('prodata'))
        setProdata(prodata)

    }, [])

    const cart = (id) => {
        console.log(id);
        localStorage.setItem("cartid", JSON.stringify(id))
        window.location.href = "./cart"
    }
    return (
        <>
            <section className='container-fluid'>
                <div className="row border-bottom border-3 border-dark">
                    <div className="col-2">
                        <img src={image1} width={100} alt="" />


                    </div>
                    <div className="col-10">

                        <div class="d-flex justify-content-around flex-wrap">
                            <h1>view all</h1>

                        </div>
                    </div>
                </div>

                <Sider />

                <div className='container'>
                    <div className='d-flex row text-center'>
                        {
                            prodata.map((item) => {
                                return (
                                    <>

                                        <div className='col-lg-6 col-md-6 col-sm-6  ' >
                                            <div className='border p-3 m-1 wwww'>
                                                <img src={item.image}
                                                    width={200}
                                                    height={200} />

                                                <p>id :{item.id}</p>
                                                <p>product name :{item.productname}</p>
                                                <p>description :{item.discription}</p>
                                                <p>price :{item.price}</p>
                                                <p>catagary :{item.catagary}</p>
                                                <button onClick={() => { cart(item.id) }}  >add to cart <Cart /></button>

                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>

                </div>

            </section>
        </>
    )


}
