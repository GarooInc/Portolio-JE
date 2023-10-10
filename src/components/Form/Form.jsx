import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        subject: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Procesa los datos del formulario
        console.log('Form data submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-5 p-5 bg-je-black rounded-6xl shadow-md">
            <div className="mb-4">
                <label className="block text-je-white text-sm font-bold mb-2" htmlFor="nombre">
                    Name
                </label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-je-white border rounded-lg focus:outline-none focus:shadow-outline"
                    id="nombre"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-je-white text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-je-white border rounded-lg focus:outline-none focus:shadow-outline"
                    id="email"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-je-white text-sm font-bold mb-2" htmlFor="subject">
                    Subject
                </label>
                <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-je-white border rounded-lg focus:outline-none focus:shadow-outline"
                    id="subject"
                    required
                >
                    <option value="" disabled>Selecciona un subject</option>
                    <option value="asesoria_legal">Asesoría Legal</option>
                    <option value="asesoria_estrategica">Asesoría Estratégica</option>
                    <option value="colaboracion_academica">Colaboración Académica</option>
                    <option value="prensa">Prensa</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-je-white text-sm font-bold mb-2" htmlFor="mensaje">
                    Message
                </label>
                <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    id="mensaje"
                    rows="4"
                    required
                ></textarea>
            </div>
            <button type="submit" className="w-full px-3 py-4 text-je-black bg-je-white rounded-6xl focus:bg-indigo-600 focus:outline-none">Enviar</button>
        </form>
    );
};

export default Form
