import React from 'react';
import { Link } from 'react-router-dom';

const episodes = [
    {
        id: 1,
        title: "Temporada 1 - Episodio 1: 'El poder de la imaginación'",
        description: "Descubre cómo la imaginación es el motor de la innovación y cómo aplicarla en tu vida cotidiana.",
        publishDate: "10 Enero 2024",
        duration: "38:15",
        topics: ["Imaginación", "Creatividad", "Innovación"],
        image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&h=400&fit=crop"
    },
    {
        id: 2,
        title: "Temporada 1 - Episodio 2: 'Creatividad en el trabajo'",
        description: "Cómo fomentar la creatividad en el entorno laboral y obtener resultados sorprendentes.",
        publishDate: "17 Enero 2024",
        duration: "42:05",
        topics: ["Trabajo", "Creatividad", "Equipos"],
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=400&fit=crop"
    },
    {
        id: 3,
        title: "Temporada 1 - Episodio 3: 'Arte y tecnología'",
        description: "Explorando la relación entre el arte tradicional y la tecnología moderna en el siglo XXI.",
        publishDate: "24 Enero 2024",
        duration: "45:30",
        topics: ["Arte", "Tecnología", "Diseño"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop"
    },
    {
        id: 4,
        title: "Temporada 1 - Episodio 4: 'Creatividad para niños'",
        description: "Cómo cultivar la creatividad en los pequeños y fomentar su imaginación desde edades tempranas.",
        publishDate: "31 Enero 2024",
        duration: "35:45",
        topics: ["Niños", "Educación", "Creatividad"],
        image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=400&fit=crop"
    }
];

const Home = () => {
    return (
        <div className="space-y-16 py-8">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="w-full md:w-1/3">
                        <div className="w-full aspect-square bg-white/10 rounded-2xl backdrop-blur-md overflow-hidden shadow-2xl border border-white/20">
                            <img
                                src="https://images.unsplash.com/photo-1585706410355-f58934f9a35d?w=600&h=600&fit=crop"
                                alt="Micrófono profesional de estudio - El Arte de la Creatividad"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 space-y-8">
                        <div className="space-y-4">
                            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold tracking-wide uppercase">
                                Destacado
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                                El Arte de la <span className="text-blue-200">Creatividad</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 font-medium max-w-2xl leading-relaxed">
                                Exploramos cómo la creatividad se combina con la tecnología para transformar industrias y vidas.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/podcast"
                                className="flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-50 transition-all hover-lift"
                                aria-label="Escuchar el último episodio del podcast"
                            >
                                ▶️ Escuchar ahora
                            </Link>
                            <Link
                                to="/contact"
                                className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/50 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all hover-lift"
                            >
                                Sugerir un tema
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Episodes Grid */}
            <section id="episodes" aria-labelledby="episodes-title" className="space-y-12">
                <div className="flex items-end justify-between">
                    <div className="space-y-2">
                        <h2 id="episodes-title" className="text-3xl font-bold text-gray-900 tracking-tight">Episodios Recientes</h2>
                        <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <Link to="/podcast" className="hidden md:flex items-center gap-1 text-blue-600 font-bold hover:gap-2 transition-all">
                        Ver todos &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {episodes.map((episode) => (
                        <article key={episode.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100 overflow-hidden hover-lift">
                            <div className="relative aspect-square overflow-hidden">
                                <img
                                    src={episode.image}
                                    alt={`Portada: ${episode.title}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white text-4xl">▶️</span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1 space-y-4">
                                <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
                                    <span>📅 {episode.publishDate}</span>
                                    <span>⏱️ {episode.duration}</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 leading-snug line-clamp-2 min-h-[3.5rem] group-hover:text-blue-600 transition-colors">
                                    {episode.title}
                                </h3>

                                <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                                    {episode.description}
                                </p>

                                <div className="pt-4 mt-auto">
                                    <Link
                                        to="/podcast"
                                        className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gray-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all font-bold group-hover:shadow-md"
                                        aria-label={`Escuchar: ${episode.title}`}
                                    >
                                        Escuchar episodio
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
