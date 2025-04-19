import { useState } from "react"
import { useNavigate } from "react-router-dom"
import contactServices from "../services/contactServices"


export const CreateContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
    });

    const navigate = useNavigate()

    const handleChange = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
    const handleCancel = e => {
        navigate('/')

    }
    const handleReset = e => {
        e.preventDefault();
        setFormData({
            name: '',
            phone: '',
            address: '',
            email: ''
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        contactServices.createNewContact('Albatroxs', formData)
        navigate('/')

    }

    return (
        <div className="container text-center mt-4 bg">
            <h1 className="mb-4">Add a new contact</h1>
            <form onSubmit={handleSubmit} className="form-control bg-primary">
                <input className={"form-control mt-3 mb-2"} onChange={handleChange} value={formData.name} placeholder="type your name" type="text" name="name" />
                <input className={"form-control mb-2"} onChange={handleChange} value={formData.phone} placeholder="type your phone" type="text" name="phone" />
                <input className={"form-control mb-2"} onChange={handleChange} value={formData.email} placeholder="type your emial" type="text" name="email" />
                <input className={"form-control mb-2"} onChange={handleChange} value={formData.address} placeholder="type your address" type="text" name="address" />
                <button className={"btn btn-light me-2 text-primary"} type="submit" disabled={!formData.name || !formData.phone || !formData.email || !formData.address}>Send</button>
                <button className={"btn btn-light me-2 text-warning"} type="reset" onClick={handleReset} >Reset</button>
                <button className={"btn btn-light text-danger"} onClick={handleCancel} name=""> Cancel </button>
      
            </form>
        </div>

    )
}