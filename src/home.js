import './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import green from './assets/images/immage06.jpg'
import Layout from './Layout';
import { useEffect, useState } from 'react';
import Cart from './cart';
import View from './view';
import { Cart2 } from 'react-bootstrap-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function Home() {

    const [prodata, setProdata] = useState([])
    const [Register, setRegister] = useState([])
    const [cartid, setCartid] = useState([])


    useEffect(() => {
        if (localStorage.getItem('prodata')) {
            let prodata = JSON.parse(localStorage.getItem('prodata'))
            setProdata(prodata)
        }

        // if (localStorage.getItem('id')) {

        //     setCartid(JSON.parse(localStorage.getItem('cartid')))
        // }


    }, [])
    useEffect(() => {
        if (localStorage.getItem('id')) {
            let cartid = JSON.parse(localStorage.getItem('cartid'))
            setCartid(cartid)

        }


    }, [])


    const asdf = () => {
        if (localStorage.getItem('id'))
           alert('this item is already taken')

    }




    const addtocart = (id) => {

        if (localStorage.getItem('id')) {
            let data = JSON.parse(localStorage.getItem('data'))
            let userid = data.findIndex(i => i.id == localStorage.getItem('id'))
            let cart = false;
            for (let i = 0; i < data[userid].cart.length; i++) {
                if (data[userid].cart[i] == id) {
                    cart = true
                }
            }
            if (cart) {
                asdf()
            }
            else {
                // let obj = {
                //     productid: id
                // }
                data[userid].cart.push(id)
                localStorage.setItem('data', JSON.stringify(data))

            
            }

        }
        else {
            alert('please log-in')
        }

        //    let cartid = []

        // if (localStorage.getItem('cartid')) {

        //     setCartid(JSON.parse(localStorage.getItem('cartid')))
        // }

        // let alreadyin = false

        // for (let i = 0; i < cartid.length; i++) {
        //     if (cartid[i].id === id) {
        //         alreadyin = true
        //     }
        // }
        // if (alreadyin) {
        //     alert('this item is already taken')

        // }
        // else {
        //     // alert('thank you')

        //     //    let cartid=[]
        //     let entry = [...cartid, { id }]
        //     setCartid(entry)

        //     localStorage.setItem("cartid", JSON.stringify(entry))

        //     setRegister(JSON.parse(localStorage.getItem("data")))

        //     if (localStorage.getItem("cartid")) {

        //         let id = localStorage.getItem("id")
        //         let register = JSON.parse(localStorage.getItem("data"))
        //         for (let i = 0; i < register.length; i++) {
        //             if (register[i].id == id) {
        //                 // console.log('sdfgh');
        //                 register[i].cart = [...entry]

        //                 setRegister({ register })
        //                 localStorage.setItem("data", JSON.stringify(register))

        //             }
        //         }

        //     }
        // }


    }



    const [local, setLocal] = useState([])
    useEffect(() => {
        let local = JSON.parse(localStorage.getItem('local'))

        setLocal(local)
    }, [local])

    const [data, setData] = useState([])
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('data')))
    }, [])




    const [fname, setFname] = useState('')
    const [email0, setEmail0] = useState('')
    const [subject, setSubject] = useState('')
    const [massage, setMassage] = useState('')

    const [store, setStore] = useState([])


    const abc = (e) => {
        setFname(e.target.value)
    }
    const bcd = (e) => {
        setEmail0(e.target.value)
    }

    const cde = (e) => {
        setSubject(e.target.value)
    }

    const def = (e) => {
        setMassage(e.target.value)
    }

    const submit0 = () => {


        // console.log('dfghjk');

        if (email0 === '') {
            alert('please fill out detail;')
        }
        else {
            let alreadyin = false

            let currentRole = ''
            for (let i = 0; i < data.length; i++) {
                if (data[i].email === email0) {
                    alreadyin = true

                    let id = data[i].id
                    currentRole = data[i].userRole
                    console.log(id);
                    console.log(data[i].userRole);
                    localStorage.setItem('id', (id))
                }
                
            }

            const data1 = {
                fname: fname,
                email0: email0,
                subject: subject,
                massage: massage,

            }

            if (alreadyin) {
                let data = JSON.parse(localStorage.getItem('data'))
                let abc = false
                for (let i = 0; i < data.length; i++) {
                    console.log(data[i].userRole)
                    if (currentRole == 'admin') {
                        abc = true
                    }

                }

                if (abc) {
                    // console.log('admin');
                    // alert('login admin')
                    setStore([...store, (data1)])
                    window.location.href = '/addproduct'
                }
                else {
                    // console.log('user');

                    // alert('login user')

                    alert('log-in successfully')
                    window.location.href = '/'

                }
            }
            else {
                alert('plz register')
                window.location.href = "/contect"
            }
        }



        setFname('')
        setEmail0('')
        setSubject('')
        setMassage('')
    }

    const Details = (rushi) => {
        console.log('sdfg');
        window.location.href = "./view"
        localStorage.setItem("viewid", rushi)
    }




    return (
        <Layout>

            <div className='back' id='1'>
                <div className='container pt-5'>
                    <div className='ms-auto box '>
                        <div className='text-center'>
                            <h1 className='text-light font'>Wyse & <br /> Auger</h1><br />
                            <p className='text-light fs-6'>Chartered  Accountants <br /><br />

                                TITIRANGI AUCKLAND NZ</p>


                        </div>
                    </div>
                </div>
            </div>



            <div className='container-fluid'>
                <div className='d-flex row text-center'>

                    {
                        prodata.map((item) => {
                            return (
                                <>

                                    <div className='col-lg-3 col-md-4 col-sm-6 ' >
                                        <div className='border p-3 m-1 wwww'>
                                            <img onClick={() => { Details(item.id) }}
                                                src={item.image}
                                                width={150}
                                                height={150} />

                                            <p className='text-dark'>id :{item.id}</p>
                                            <p>product name :{item.productname}</p>
                                            <p>description :{item.discription}</p>
                                            <p>price :{item.price}</p>
                                            <p>catagary :{item.catagary}</p>
                                            <div>
                                                <button onClick={() => { addtocart(item.id) }}  >add to cart <Cart2 /></button>
                                                <ToastContainer />
                                            </div>


                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>

            </div>



            <div className='container'>
                <div className='box0'>

                    <div className='box1 '>
                        <div>
                            <h1 className='pb-3'>
                                Titirangi <br /> Accountants
                            </h1>
                            <p className='pb-3'>
                                Providing professional accounting services for clients in New Lynn, Titirangi, and throughout the Auckland area.
                            </p>
                            <p>
                                We specialise in working with small to medium businesses, including tradespeople, professional people, medical practices, and other businesses requiring a professional accountancy service that takes the stress out of the taxation process
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={green} className='green' />
                    </div>
                </div>
            </div>

            <div className='ti'>
                <h1 className='text-center'>
                    We make your business less taxing
                </h1>
            </div>
            <div>
                <div className='container-fluid'>
                    <div className='row rrr'>
                        <div className='col-lg-6 col-md-6 col-sm-12 p-0 '>
                            <div className='cel'></div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center p-0 what' >
                            <div className='what'>

                                <ul >
                                    <h2>What We Offer</h2>
                                    <li className='list fs-4'> Annual accounts and tax returns</li>
                                    <li className='list fs-4'>  GST returns</li>
                                    <li className='list fs-4'> PAYE</li>
                                    <li className='list fs-4'> ACC</li>
                                    <li className='list fs-4'> Business advice to help you increase your</li>
                                    <li className='list fs-4'> profitability</li>
                                    <li className='list fs-4'> Software solutions</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='row rr '>
                        <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center p-0 what'>
                            <div >
                                <h2 > Why Choose Wyse & Auger</h2>
                                <p className='fs-5'>
                                    Personal service – you will always work with the same accountant and
                                    we offer a personal service for all our clients
                                </p>
                                <p className='fs-5'>
                                    Clear answers to your accounting questions
                                    Value for money – we save you money on your taxes
                                </p>
                                <p className='fs-5'>
                                    We work with the latest systems to streamline your business
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 p-0'>
                            <div className='pig'>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='we'>
                <h1>We work with the main accountancy packages</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 '>
                        <div className='ob1'></div>
                    </div>
                    <div className='col-lg-6 col-md-6 '>
                        <div className='xero1'></div>

                    </div>
                </div>
            </div>
            <div className='leves'>
                <div className='leves1'>

                    <div className='container'>
                        <div className='get'>
                            <h2>Get in touch</h2>
                        </div>
                        <div className='row reverce'>

                            <div className='col-lg-6 col-md-6  col-sm-12 '>

                                <p className='line'>75 Titirangi Road, New Lynn, Auckland 0600, New Zealand</p>
                                <a className='acolor' href="mailto:info@wyseauger.co.nz">info@wyseauger.co.nz</a>
                                <p className='pt-4'>09-826 5075</p>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 form'>
                                <input type="text" name="name" placeholder='name' value={fname} onChange={abc} className='control-form border1 text-light' />
                                <input type="email" name="name" placeholder='email' value={email0} onChange={bcd} className='control-form border1 text-light' />
                                <input type="text" name="name" placeholder='subject' value={subject} onChange={cde} className='control-form border1 text-light' />
                                <input type="text" name="name" placeholder='type your messege hear' value={massage} onChange={def} className='control-form border1 text-light' />

                                <div className='sub '>
                                    <button className='sub1' onClick={submit0}>submit</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
            
            </div>


        </Layout>

    );
}
