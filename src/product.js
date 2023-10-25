import React from 'react'
import headphone1 from './assets/images/about1 (2).jpg';
import headphone2 from './assets/images/about1 (3).jpg';
import headphone3 from './assets/images/about1 (5).jpg';
export default function Product() {
    const cart = () => {
       
    }
    return (
        <>
            <h1>select product</h1>
            <div className='background p-5'>
                <div className='container p-5'>
                    <div className='container'>
                        <div className=' row'>
                            <div className='ph1 col-lg-4 col-md-4'>
                                <img src={headphone1} width="100%" className='pho' />
                                <div className='text-center'>
                                    <p className='fs-3 text-center'>Audeze Headphones</p >
                                    <p className='fs-1'>$399</p>
                                    <button className='buy'>buy now</button>
                                </div>

                            </div>
                            <div className='ph1 col-lg-4  col-md-4'>
                                <img src={headphone2} width="100%" className='pho' />
                                <div className='text-center'>
                                    <p className='fs-3 text-center'>Focal Stellia HD 915</p >
                                    <p className='fs-1'>$399</p>
                                    <button className='buy'>buy now</button>
                                </div>
                            </div>
                            <div className='ph1 col-lg-4 col-md-4'>
                                <img src={headphone3} width="100%" className='pho' />
                                <div className='text-center'>
                                    <p className='fs-3 text-center'>Sennheiser HD 820</p >
                                    <p className='fs-1'>$399</p>
                                    <button className='buy' onClick={cart}>buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
