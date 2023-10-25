import React, { useEffect, useState } from 'react'
import Layout from './Layout'

export default function Service() {
    const [local, setLocal] = useState([])
    useEffect(() => {
        let local = JSON.parse(localStorage.getItem('local'))

        setLocal(local)
    }, [local])

    const [data, setData] = useState([])
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('data')))
    }, [data])

    
    return (
        <Layout>
            <div className='backservice' id='1'>
                <div className='container pt-5'>
                    <div className='ms-auto box '>
                        <div className='text-center'>
                            <h1 className='text-light font'>Our Service</h1><br />
                            <p className='text-light fs-6'></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center paddingservice fs-5'>
                <p className='pb-4'>
                    Wyse & Auger Chartered Accountants offer a personalised accountancy service to help you understand what is happening with your money and to advise you on how to maximise its potential</p>
                <p>We are committed to saving you money and adding value to your business. Our rates are competitive and we can offer a fixed price package tailored to your needs so there are no surprises</p>
            </div>
        </Layout>
    )
}
