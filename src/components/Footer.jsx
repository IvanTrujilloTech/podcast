import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white">🎙️</span>
                            </div>
                            <span className="text-xl font-bold text-white">Podcast Creator</span>
                        </div>
                        <p className="text-gray-400">
                            Tu espacio de audio para la creatividad y la innovación. Construyendo puentes entre la tecnología y el arte.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold mb-6 text-lg">Enlaces Rápidos</h2>
                        <ul className="space-y-3">
                            <li><a href="/" className="hover:text-blue-400 transition-colors">Inicio</a></li>
                            <li><a href="/podcast" className="hover:text-blue-400 transition-colors">Episodios</a></li>
                            <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold mb-6 text-lg">Legal</h2>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Accesibilidad</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacidad</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Términos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold mb-6 text-lg">Newsletter</h2>
                        <p className="text-gray-400 mb-4 text-sm">Suscríbete para recibir notificaciones de nuevos episodios.</p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="newsletter-email" className="sr-only">Email para la newsletter</label>
                            <input
                                id="newsletter-email"
                                type="email"
                                placeholder="Tu email"
                                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                                Suscribir
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Podcast Creator. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
