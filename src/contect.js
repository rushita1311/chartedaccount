import React, { useEffect, useState } from 'react'
import Layout from './Layout'


import { json } from 'react-router-dom'
import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import { logDOM } from '@testing-library/react'

export default function Contect() {

    const [Name, setName] = useState('')
    const [Address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [number, setNumber] = useState('')
    const [id, setId] = useState('')
    const [msg, setMsg] = useState('')
    const [data, setData] = useState([])
    const [local, setLocal] = useState([])
    const [cart1, setcart1] = useState([])


    useEffect(() => {
        if (!localStorage.getItem(local) && !localStorage.getItem('data')) {

            let local = JSON.parse(localStorage.getItem('local'))
            let data = JSON.parse(localStorage.getItem('data'))
            setLocal(local)
            setData(data)

        }
    }, [])
    useEffect(() => {
        if (data.length > 0) {
            localStorage.setItem("data", JSON.stringify(data))
        }
    }, [data])

    useEffect(() => {
        if (localStorage.getItem('edit')) {

            let rrr = localStorage.getItem('edit')
            let data = JSON.parse(localStorage.getItem('data'))

            for (let i = 0; i < data.length; i++) {
                if (data[i].id == rrr) {
                    console.log('dfgh');
                    setName(data[i].name)
                    setAddress(data[i].address)
                    setEmail(data[i].email)
                    setPass(data[i].pass)
                    setNumber(data[i].phone)
                    setMsg(data[i].message)
                }

            }
        }
        if (localStorage.getItem('data')) {
            let data = JSON.parse(localStorage.getItem('data'))
            setData(data)

        }
    }, [])




    const dfg = (e) => {
        setName(e.target.value)

    }
    const add = (e) => {
        setAddress(e.target.value)
    }

    const dfg1 = (e) => {

        setEmail(e.target.value)

    }
    const dfg2 = (e) => {

        setPass(e.target.value)
    }

    const Number = (e) => {
        setNumber(e.target.value)
    }
    const Msg = (e) => {
        setMsg(e.target.value)
    }

    // const [cartid, setCartid] = useState([])
    
   

    const adddata = () => {

        const obj = {
            name: Name,
            address: Address,
            email: email,
            pass: pass,
            phone: number,
            message: msg,
            id: Date.now(),
            userRole: "user",
            cart: []
            

        }
        if (Name == '') {
            alert('plaese enter your name')
        }
        else if (email == '') {
            alert('please fill out detail;')
        }

        else {
            let alreadyin = false
            for (let i = 0; i < data.length; i++) {
                if (data[i].email === email) {
                    alreadyin = true

                }
            }
            if (alreadyin) {
                alert('you are already registered')

            }
            else {
                console.log('dfghj');
                setData([...data, obj])

                localStorage.setItem("data", JSON.stringify(data))

                // for (let i = 0; i < data.length; i++) {

                //     if (localStorage.getItem(cartid)) {
                //         let cart1 = json.parse(localStorage.getItem('cartid'))
                //         console.log('dfghj');
                //         setData([...data, obj])
                //         // setcart1(cart1)
                //         localStorage.setItem("data", JSON.stringify(data))
                //     }

                // }



            }
        }






        setName('')
        setAddress('')
        setEmail('')
        setPass('')
        setNumber('')
        setMsg('')


    }

    const editdata = () => {
        if (localStorage.getItem('edit')) {
            // console.log("sdfghjk");
            let edit = localStorage.getItem('edit')
            let data = JSON.parse(localStorage.getItem('data'))

            let update = data.findIndex(((obj) => obj.id == edit))

            data[update].name = Name
            data[update].address = Address
            data[update].email = email
            data[update].pass = pass
            data[update].phone = number
            data[update].message = msg

            setName(Name)
            setAddress(Address)
            setEmail(email)
            setPass(pass)
            setNumber(number)
            setMsg(msg)

            localStorage.setItem("data", JSON.stringify(data))
            setData(data)
            console.log(Name);

            // setName('')
            // setAddress('')
            // setEmail('')
            // setPass('')
            // setNumber('')
            // setMsg('')

            document.getElementById('reset').reset()
            localStorage.removeItem('edit')
        }

    }

    const submit = () => {
        if (localStorage.getItem('edit')) {
            editdata()
        } else {
            adddata()
        }



    }

    return (
        <Layout>
            <div className='backcontect' id='1'>
                <div className='container pt-5'>
                    <div className='ms-auto box '>
                        <div className='text-center'>
                            <h1 className='text-light font'>Contact Us</h1><br />
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h3 className='pt-5 pb-4'>Opening Hours</h3>
                <p className='fs-5'>Monday - Friday: 8:30am - 5:00pm</p>
                <p className='fs-5'><i>Appointments outside our normal business hours can be arranged</i></p>
            </div>


            <div className='grey'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>

                            <div className='text-center'>
                                <div className="mapouter wid">
                                    <div class="gmap_canvas">
                                        <iframe width="340" height="510" id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=75 Titirangi Road, New Lynn, Auckland 0600, New Zealand&t=&z=10&ie=UTF8&iwloc=&output=embed"
                                            frameborder="0" marginheight="0" marginwidth="0">
                                        </iframe>
                                        <br />
                                        <style>
                                            .mapouter{'position:relative;text-align:right;height:510px;width:100%;'}
                                        </style>
                                        <a href="https://embedgooglemap.2yu.co">html embed google map</a>
                                        <style>.gmap_canvas {'overflow:hidden;background:none!important;height:510px;width:100%;'}</style>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='text'>
                                <h1>Get in touch</h1>
                                <p >75 Titirangi Road, New Lynn, Auckland 0600, New Zealand<br />

                                    info@wyseauger.co.nz

                                </p>
                                <p>09-826 5075</p>
                            </div>

                            <form id='reset'>
                                <input className='form-control' placeholder='Name' type='text' value={Name} onChange={dfg} /><br />
                                <input className='form-control' placeholder='Address' type='text' value={Address} onChange={add} /><br />
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6'>
                                        <input className='form-control' placeholder='Email' type='email' value={email} onChange={dfg1} /><br />

                                    </div>
                                    <div className='col-lg-6 col-md-6'>
                                        <input className='form-control' placeholder='password' type='password' value={pass} onChange={dfg2} /><br />


                                    </div>
                                </div>
                                <input className='form-control' placeholder='Phone' type='number' value={number} onChange={Number} /><br />
                                <textarea placeholder='type your message hear...' value={msg} onChange={Msg} className='form-control' /><br />

                                <button className='form-control' onClick={submit} >submit</button>
                            </form>
                        </div>

                    </div>

                </div>

            </div>


        </Layout >
    )
}
