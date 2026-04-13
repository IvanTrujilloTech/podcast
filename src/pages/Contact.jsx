import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (status === 'error') setStatus('idle');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate API call
        setTimeout(() => {
            if (formData.email.includes('error')) {
                setStatus('error');
                setErrorMsg('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
            } else {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            }
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto py-12 space-y-12">
            <header className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Contacto y Sugerencias</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    ¿Tienes alguna idea para un próximo episodio? ¿Escríbenos y te responderemos!
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                {/* Contact Info */}
                <aside className="space-y-8 bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-200">
                    <h2 className="text-2xl font-bold">Información</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <span>📧</span>
                            <div>
                                <p className="font-bold">Email</p>
                                <p className="text-blue-100">hola@podcastcreator.com</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Form */}
                <main className="md:col-span-2 bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-10 border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                👤 Nombre completo
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-blue-600 transition-all outline-none"
                                placeholder="Ej. Maria Garcia"
                                aria-required="true"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                📧 Correo electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-blue-600 transition-all outline-none"
                                placeholder="maria@ejemplo.com"
                                aria-required="true"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                💬 Tu mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-blue-600 transition-all outline-none resize-none"
                                placeholder="Escribe aquí tu consulta..."
                                aria-required="true"
                            ></textarea>
                        </div>

                        <div
                            aria-live="polite"
                            className={`rounded-xl p-4 flex items-center gap-3 transition-all ${status === 'success' ? 'bg-green-50 text-green-700 border border-green-200' :
                                    status === 'error' ? 'bg-red-50 text-red-700 border border-red-200' :
                                        'hidden'
                                }`}
                        >
                            {status === 'success' && <p className="font-bold">✅ ¡Mensaje enviado con éxito!</p>}
                            {status === 'error' && <p className="font-bold">❌ {errorMsg}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className={`w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg transition-all ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 hover-lift'
                                }`}
                        >
                            {status === 'sending' ? "Enviando..." : "Enviar mensaje"}
                        </button>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default Contact;
