import React from 'react'


const view = () => {

    window.location.href = "./viewin"
}

const viewall = () => {

    window.location.href = "./all"
}
const addproduct = () => {
    window.location.href = "./addproduct"
}


export default function Sider() {
    return (
        <div>
            <div className=' row'>
                <button className="btn btn-primary border col-3" onClick={addproduct} variant="primary">add product</button>
                <button className="btn btn-primary border col-3" onClick={view} >vew in table</button>
                <button className="btn btn-primary border col-3" onClick={viewall} >view all</button>
                <button className="btn btn-primary border col-3"> cart</button>
            </div>
        </div>
    )
}
