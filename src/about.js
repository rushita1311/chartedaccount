
import './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import green from './assets/images/about07.jpg'
import myob from './assets/images/about08.png'
import Xero from './assets/images/about09.png'
import ca from './assets/images/about06.png'
import { Carousel } from 'react-bootstrap';
import plane from './assets/images/about11.jpg'
import police from './assets/images/about12.jpg'
import special from './assets/images/about13.png'
import 'aos'
import Layout from './Layout';
import { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
import Product from './product';



export default function About() {
    const [data, setData] = useState([])
    const [local, setlocal] = useState([])
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('data'))
        let local = JSON.parse(localStorage.getItem('local'))
        // setlocal(local)
        // setData(data)
    }, [data])

    const Product = () => {
        window.location.href = "./product"
    }
    return (
        <Layout >

            <div className='back1' id='1'>
                <div className='container pt-5'>
                    <div className='ms-auto box '>
                        <div className='text-center'>
                            <h1 className='text-light font'>About us</h1><br />

                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-4'>
                <div className='row cca'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img src={ca} className='ca' />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h4 className='pb-4'>
                            We are members of CAANZ
                            Chartered Accountants Australia New Zealand
                        </h4>
                        <p>
                            If you're looking for accounting services in Auckland, we offer first-class personal service at reasonable rates. We are committed to saving you money and enabling small and medium business owners to achieve their goals.
                        </p>
                    </div>

                </div>

            </div>

            <div className='container mt-5'>
                <div className='box0 dis'>

                    <div className='box1'>
                        <div >
                            <h1 className='pb-3'>
                                History
                            </h1>
                            <p className='pb-3'>
                                Heather Wyse established the business in July 1993, and it began trading as Heather Wyse and Associates Ltd in March 2000 </p>
                            <p>
                                Heather Wyse has since retired and the company is now headed by Elizabeth Auger. </p>
                            <p>Elizabeth has more than 35 years accounting experience in both the chartered accountancy field and in commerce</p>
                            <p>Prior to joining Wyse & Auger Elizabeth was a Financial Controller for a multi-national company She was admitted to the New Zealand Institute of Chartered Accountants in 1983 and became a partner in the practice in October 2010.</p>
                        </div>
                    </div>

                    <div >
                        <img src={green} className='green' />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 mt-5'>
                        <img src={myob} className='my' />
                        <h5 className='text-center mt-5'>MYOB Diamond Partner</h5>
                    </div>
                    <div className='col-lg-6 col-md-6 mt-5'>
                        <img src={Xero} className='gold' />
                        <h5 className='text-center mt-5'>XERO Gold Partner</h5>
                    </div>
                </div>
            </div>
            <div className='grey'>
                <h1 className='pb-2'>Our Team</h1>
                <p className='fs-5'>Introducing our helpful and friendly team</p>
            </div>

            <Carousel data-bs-theme="dark" className='p-5 m-5' >

                <Carousel.Item>

                    <div className='container '>
                        <div className='row fi'>
                            <div className='firstimage col-lg-5 col-md-5 col-sm-12'></div>
                            <div className='col-lg-7 col-md-7 col-sm-7 right' >
                                <h5 className='text-primary'>Elizabeth Auger</h5>
                                <p>Elizabeth has more than 35 years accounting experience in both the chartered accountancy field and in commerce.</p>
                                <p>
                                    Elizabeth grew up in Auckland, and has spent most of her life here apart from stints living in Fiji and in London.  Her working life started in chartered accountancy before moving to commerce for a period.
                                    During this time she did her OE contracting to a number of companies in London.
                                </p>
                                <p>Prior to joining Wyse & Auger in the year 2000, Elizabeth was the Financial Controller for a multi-national company in Auckland, and was admitted to the New Zealand Institute of Chartered Accountants
                                    in 1983, becoming a partner in the practice in 2010.</p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>

                    <div className='container'>
                        <div className='row fi'>
                            <div className='secondimage col-lg-5 col-md-5 col-sm-12'></div>
                            <div className='col-lg-7 col-md-7 col-sm-7 right' >
                                <h5 className='text-primary'>Shakil Naidu</h5>
                                <p>Shakil joined Wyse & Auger in 2015.  Originally from Fiji, Shakil came to New Zealand to complete his secondary education.  He then graduated from Auckland University with a Bachelor of Commerce</p>
                                <p>Shakil has worked in Chartered Accountancy firms since graduating and has a Certificate of Public Practice.  His current clients span a number of industries including retail and construction.</p>
                            </div>
                        </div>
                    </div>


                </Carousel.Item>
                <Carousel.Item>
                    <div className='container'>
                        <div className='row fi'>
                            <div className='thirdimage col-lg-5 col-md-5 col-sm-12'></div>
                            <div className='col-lg-7 col-md-7 col-sm-7 right' >
                                <h5 className='text-primary'>Stephen Dickens</h5>
                                <p>Steve joined the firm in July 2019.  Growing up in the UK he posted his first journals for the University of Bristol as a tender teenager, whilst balancing the books for his local post office on a weekly basis.</p>
                                <p>Steve misguidedly left accounts for a few years to obtain a Bachelor of Arts degree from the University of Oxford.  After university, he spent a year crewing on ferries before dedicating himself to accountancy where he has spent the last 17 years, working in multiple sectors from engineering and scrap yards to stockbrokers and private banking.  He qualified as an accountant in 2011, and is a Fellow of the Association of Chartered Certified Accountants.</p>
                                <p>Steve's role includes preparation of Financial Statements and income tax returns for Sole traders, Companies, Partnerships, and Trusts, and also completion of regulatory submissions and future budget forecasting and cashflows.</p>
                            </div>
                        </div>
                    </div>



                </Carousel.Item>
            </Carousel>

            <div className='sponcer'>
                <div className='text-center p-4  wb'>
                    <h1 className='pb-2 fs-1'>Our Sponsorships</h1>
                    <p className='fs-5'>Wyse & Auger are proud to support the following organisations and events</p>
                </div>
                <div className='row pt-5'>
                    <div className='col-lg-4 col-md-4 col-sm-12 text-center' >
                        <img src={plane} className='plane' />
                        <p className='pt-3 pb-3'>Auckland Rescue Helicopter Trust</p>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 text-center'>
                        <img src={police} className='plane' />
                        <p className='pt-3 pb-3'>NZ Police Managers' Guild Trust</p>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 text-center'>
                        <img src={special} className='plane' />
                        <p className='pt-3 pb-3'>Special Children's Christmas Parties</p>
                    </div>
                </div>
            </div>

            <div className='bg-light p-5 text-center'>
                <h1 className='text-center m-5 '>
                    our special product buy now
                </h1>
                <button className='btn btn-secondary' onClick={Product} >products</button>
            </div>







        </Layout>
    );
}
