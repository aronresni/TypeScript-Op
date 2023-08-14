import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert';


const Contact = () => {
    const [formData, setFormData] = useState({
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://getform.io/f/25952871-ebdb-4df0-964a-177dfd00eda3", formData, {
            headers: { 'Accept': 'application/json' }
        })
            .then(response => {
                console.log(response);
                swal("Information sent!", "I will contact you shortly!", "success");
            })
            .catch(error => {
                console.log(error);
            })
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })

    }
    return (
        <div id='contacto' className='h-[15vh] bg-dark'>
            <h1 className='tittle p-5 tittle text-4xl md:text-4xl sm:text-4xl font-bold'>Contactame</h1>
            <div className='p-5'>
                <form onSubmit={handleSubmit}>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <input
                            className="bg-white border border-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5"
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            className="bg-white border border-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5"
                            type="number"
                            placeholder='Phone Number'
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        <input
                            className="bg-white border border-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5"
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        <textarea
                            className="bg-white border border-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5"
                            placeholder='Message'
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className='text-xl btn border-black rounded-lg  p-3  font-bold tittle'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Contact
