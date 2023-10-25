import React, { useEffect, useState } from 'react'
import image1 from './assets/images/images.jpeg'
import { Cart } from 'react-bootstrap-icons'
import { CloseButton } from 'react-bootstrap'
import Sider from './Sider'






export default function Addproduct() {
    const [proname, setProname] = useState('')
    const [discription, setDiscription] = useState('')
    const [price, setPrice] = useState('')
    const [catagary, setCatagary] = useState('')
    // const [image, setImage] = useState('')
    const [image, setImage] = useState('')
    const [prodata, setProdata] = useState([])
    const [multiimage, setMultiimage] = useState([])

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('prodata'))
        setProdata(data)

    }, [])

    useEffect(() => {

        let url = window.location.href
        console.log(url);
        let array = url.split('/')
        console.log(array[array.length - 1]);

        if (array[array.length - 1]) {

            let rus = array[array.length - 1]
            let prodata = JSON.parse(localStorage.getItem('prodata'))

            for (let i = 0; i < prodata.length; i++) {
                if (prodata[i].id == rus) {
                    console.log(rus);
                    setProname(prodata[i].productname)
                    setDiscription(prodata[i].discription)
                    setPrice(prodata[i].price)
                    setCatagary(prodata[i].catagary)
                    setImage(prodata[i].image)
                    setMultiimage(prodata[i].multiimage)
                }
            }
        }

    }, [])







    const onImageChange = (e) => {

        // convert single file to url
        let imageFile = e.target.files[0];

        if (imageFile) {
            const reader = new FileReader();
            reader.readAsDataURL(imageFile);

            reader.addEventListener('load', () => {

                setImage(reader.result)

                document.getElementById("abcd").src = reader.result

            });

        }
    }

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

    const abc = (e) => {
        setProname(e.target.value)
    }
    const bca = (e) => {
        setDiscription(e.target.value)
    }
    const bcd = (e) => {
        setPrice(e.target.value)
    }
    const cat = (e) => {
        setCatagary(e.target.value)
    }
    const close = (re) => {
        // alert('fghjk')

        const multiimage1 = multiimage.filter(item => item !== re)
        setMultiimage(multiimage1)
    }

    const productsubmit = () => {

        if (!localStorage.getItem('productid')) {



            //    let data = JSON.parse(localStorage.getItem('prodata'))

            const probj = {
                productname: proname,
                discription: discription,
                price: price,
                catagary: catagary,
                image: image,
                multiimage: multiimage,
                id: Date.now()
            }

            let alreadyin = false
            for (let i = 0; i < prodata.length; i++) {
                if (proname == '', discription == '', price == '', catagary == '', image == '') {
                    alreadyin = true
                }



            }

            if (alreadyin) {
                alert('please fill the details')
            }
            else {
                prodata.push(probj)
                // console.log(prodata);
                localStorage.setItem("prodata", JSON.stringify(prodata))
                setProdata(prodata)


            }


            setProname('')
            setDiscription('')
            setPrice('')
            setCatagary('')
            setImage('')
            setMultiimage([])


        }
        else {
            if (localStorage.getItem('productid')) {


                let productid = localStorage.getItem('productid')
                let prodata = JSON.parse(localStorage.getItem("prodata"))

                let update = prodata.findIndex(((obj) => obj.id == productid))
                prodata[update].productname = proname
                prodata[update].discription = discription
                prodata[update].price = price
                prodata[update].catagary = catagary
                prodata[update].image = image
                prodata[update].multiimage = multiimage

                setProname(proname)
                setDiscription(discription)
                setPrice(price)
                setCatagary(catagary)
                setImage(image)
                setMultiimage(multiimage)

                localStorage.setItem("prodata", JSON.stringify(prodata))
                localStorage.removeItem('productid')
                setProname('')
                setDiscription('')
                setPrice('')
                setCatagary('')
                setImage('')


            }
        }

    }


    // const view = () => {

    //     window.location.href = "./viewin"
    // }



    return (
        <>
            <section className="container-fluid">
                <div className="row border-bottom border-3 border-dark">
                    <div className="col-2">
                        <img src={image1} width={100} alt="" />


                    </div>
                    <div className="col-10">

                        <div class="d-flex justify-content-around flex-wrap">
                            <h1>ADD PRODUCT</h1>

                        </div>
                    </div>
                </div>
                {/* <div className=' row'>
                    <button className="btn btn-primary border col-3" variant="primary">add product</button>
                    <button className="btn btn-primary border col-3" onClick={view} >vew in table</button>
                    <button className="btn btn-primary border col-3" onClick={viewall} >view all</button>
                    <button className="btn btn-primary border col-3"> cart</button>
                </div> */}
                <Sider />
                <div>
                    product name :
                    <input type='text' placeholder='product name' value={proname} onChange={abc} /><br /><br />
                    description :
                    <input type='text' placeholder='add discription' value={discription} onChange={bca} /><br /><br />
                    price :
                    <input type='number' placeholder='add price' value={price} onChange={bcd} /><br /><br />
                    catagary :
                    <input type='text' placeholder='catagary' value={catagary} onChange={cat} /><br /><br />
                    image:
                    <div>
                        <input type="file" onChange={onImageChange} />
                        <img id='abcd' alt="preview image" src={image} width={100} />
                    </div>
                    maltipale image:
                    <div>
                        <input type="file" onChange={onmultiImageChang} multiple={true} />
                        {/* <img src={multiimage} width={200} className='abcd' /> */}

                        {multiimage.map((img, index) => {
                            return (
                                <>
                                    <div className='d-flex' id={'div' + index}>
                                        <img src={img} width={200} alt='not' id={'img' + index} className='abcd' />
                                        {/* <img swc={close} width={10} /> */}
                                        <p>

                                            <CloseButton onClick={() => { close(img) }} />
                                        </p>
                                    </div>
                                </>

                            )
                        })}
                    </div>

                    <button className=' btn btn-primary' onClick={productsubmit}>submit</button>

                </div>

            </section>
        </>
    )
}
