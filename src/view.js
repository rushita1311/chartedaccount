import { WidthFull } from '@mui/icons-material'
import { hexToRgb } from '@mui/material';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Download } from 'react-bootstrap-icons';
import ReactImageMagnify from "react-image-magnify";


export default function View() {
    const [prodata, setProdata] = useState([])
    const [Name, setName] = useState([])
    const [Desc, setDesc] = useState([])
    const [Price, setPrice] = useState([])
    const [Cat, setCat] = useState([])
    const [image, setimage] = useState([])
    const [id, setId] = useState([])
    const [multiimage, setMultiimage] = useState([])
    // const [multy, setMulty] = useState([])

    useEffect(() => {

        let id = JSON.parse(localStorage.getItem('viewid'))
        let prodata = JSON.parse(localStorage.getItem('prodata'))
        setProdata(prodata)




        if (localStorage.getItem("viewid")) {
            for (let i = 0; i < prodata.length; i++) {
                if (prodata[i].id === id) {
                    setName(prodata[i].productname)
                    setDesc(prodata[i].discription)
                    setPrice(prodata[i].price)
                    setCat(prodata[i].catagar)
                    setId(prodata[i].id)
                    setimage(prodata[i].image)
                    setMultiimage(prodata[i].multiimage)
                }


            }
        }

    }, [])

    const onmultiImageChang = (e) => {
        let multy = []

        for (let i = 0; i < e.target.files.length; i++) {

            let imageFile = e.target.files[i];

            if (imageFile) {
                let readers = new FileReader();
                readers.readAsDataURL(imageFile);

                readers.addEventListener('load', () => {


                    multy.push(readers.result)
                    console.log(readers.result)
                    setMultiimage(multy)





                });

            }
        }

    }

    const Expand = (rush) => {
        // console.log(item);
        setimage(rush)

    }



    return (
        <>

            <div className='border row justify-content-center ' style={{ backgroundColor: "#757a94ab", width: "100%" }}>

                <div className='col-lg-6 col-md-6 text-center'>
                    {/* <img src={image} className='border headph' /> */}
                    <div>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: (image),

                            },
                            largeImage: {
                                src: (image),
                                width: 1100, 
                                height: 1000
                            }
                            
                        }} />
                    </div>

                   

                    {/* <img src={multiimage} className='border' width={100} height={100} /> */}
                    <div id='abcd2' className='d-flex flex-wrap'>
                        {multiimage.map((rush, index) => {
                            return (
                                <>
                                    <div key={`main${index}`} style={{ width: "120px", padding: "20px" }}  >
                                        <img src={rush} alt="not fount" id={`img${index}`} width={"100px"} onClick={() => { Expand(rush) }} />
                                        {/* <BsXLg className="a123" onClick={() => remove(item)} /> */}
                                    </div>
                                </>
                            )
                        })}
                    </div>

                </div>

                <div className=' col-lg-6 col-md-4  text-light ' style={{ backgroundColor: "rgb(127 127 149)" }}>



                    <h3 className='bg-light text-dark display-5'>Name:<p className='fs-5 '>{Name}</p></h3>
                    <h3 className='bg-light text-dark display-5'>description: <p className='fs-5'>{Desc}</p></h3>
                    <h3 className='bg-light text-dark display-5'>price:<p className='fs-5'>{Price}</p></h3>
                    <h3 className='bg-light text-dark display-5'>catagary:<p className='fs-5'>{Cat}</p></h3>
                    <h3 className='bg-light text-dark display-5'>id no.:<p className='fs-5'>{id}</p></h3>


                </div>

            </div>

        </>
    )
}
