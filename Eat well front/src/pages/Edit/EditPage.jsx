import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./EditPage.scss"
function EditPage() {
    const { id } = useParams()
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [detail, setDetail] = useState('')
    const navigate = useNavigate()

    async function getFetch() {
        const response = await fetch("http://localhost:3003/" + id)
        const data = await response.json()
        setImage(data.image)
        setTitle(data.title)
        setPrice(data.price)
        setDetail(data.detail)

    }
    useEffect(() => {
        getFetch()
    }, [])
    async function postProduct() {
        await fetch("http://localhost:3003/" + id, {
            method: 'PUT',
            body: JSON.stringify({ image: image, title: title, price: price, detail: detail }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(() => navigate("/add"))
    }
    return (
        <div className='edit'>
            <form action="" onSubmit={(e) => {
                e.preventDefault()
                postProduct()
            }} className='form'>
                <input type="text" name="" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                <input type="text" name="" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="number" name="" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" name="" id="detail" value={detail} onChange={(e) => setDetail(e.target.value)} />
                <button>Update!</button>

            </form>

        </div>
    )
}

export default EditPage