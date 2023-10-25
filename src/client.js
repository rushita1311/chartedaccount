import React, { useEffect } from 'react'
import Layout from './Layout'
import { useState } from 'react'

export default function Client() {

    const [data, setData] = useState([])

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('data'))
        setData(data)
    }, [])

    const edit = (a) => {
        localStorage.setItem('edit', a)

        window.location.href = '/contect'

    }
    const remove = (id) => {
        let newdata = data.filter(obj => obj.id != id);
        setData(newdata)
        localStorage.setItem('data', JSON.stringify(newdata))
    }


    return (
        <Layout>

            <div className='scrol'>
                <table class="table bbb">

                    <thead>
                        <tr>
                            <th scope="col" >id</th>
                            <th scope="col" >Name</th>
                            <th scope="col" >Address</th>
                            <th scope="col" >Email</th>
                            <th scope="col" >Password</th>
                            <th scope="col" >Phone</th>
                            <th scope="col" >Massage</th>
                            <th scope="col" >edit/remove</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((item) => {
                                return (
                                    <tr >
                                        <td scope="row">{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.email}</td>
                                        <td>{item.pass}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.message}</td>
                                        <td>
                                            <button className='m-2' onClick={() => { edit(item.id) }}>edit</button>
                                            <button className='m-2' onClick={() => { remove(item.id) }}>remove</button>
                                        </td>



                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}
