import React, { useState, useRef } from 'react';
import videoPromocional from '../assets/video.mp4';

const Podcast = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.8);
    const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);

    const audioRef = useRef(null);

    const podcast = {
        title: "Innovación en el mundo digital",
        episodeTitle: "Temporada 1 - Episodio 5",
        host: "Elena Rodriguez",
        description: "Exploramos cómo la creatividad se combina con la tecnología para transformar industrias. Entrevistamos a expertos en diseño digital y desarrollo de productos.",
        publishDate: "15 Octubre 2024",
        duration: "45:23",
        topics: ["Creatividad", "Tecnología", "Diseño", "Innovación"]
    };

    const transcript = [
        { time: "00:00", text: "[Música de intro]" },
        { time: "00:03", text: "¡Hola a todos y bienvenidos a Nexo Gamer! Soy Iván, y este es el episodio cero..." },
        { time: "00:25", text: "¿Por qué otro podcast de videojuegos? Bueno, la idea de Nexo Gamer es simple..." },
        { time: "00:38", text: "Solo tú y yo repasando las noticias más importantes, los lanzamientos de la semana..." },
        { time: "00:50", text: "Y para empezar con fuerza en este mini-episodio, tenemos que hablar del shadow drop de Hi-Fi Rush en PS5." },
        { time: "01:03", text: "Es un movimiento sísmico en la industria. Microsoft está cambiando radicalmente..." },
        { time: "01:20", text: "¿Es este el fin de la guerra de consolas? Mi opinión es que sí." },
        { time: "01:40", text: "Los rumores apuntan a que Indiana Jones y Gears of War podrían seguir el mismo camino." },
        { time: "01:55", text: "En los próximos episodios largos, analizaremos esto con más calma." },
        { time: "02:10", text: "[La música de fondo sube de volumen] Pero por hoy, esto es todo. Formato corto, directo." },
        { time: "02:20", text: "Suscribíos en vuestra plataforma favorita. Buscad 'Nexo Gamer'." },
        { time: "02:30", text: "Gracias por estar ahí. Soy Iván, ¡nos escuchamos pronto!" },
        { time: "02:50", text: "[Fin del audio]" }
    ];

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleSeek = (e) => {
        const time = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const playFromTime = (timeStr) => {
        const [minutes, seconds] = timeStr.split(':').map(Number);
        const totalSeconds = minutes * 60 + seconds;
        if (audioRef.current) {
            audioRef.current.currentTime = totalSeconds;
            if (!isPlaying) {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-12 py-8">
            {/* Page Header */}
            <header className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{podcast.title}</h1>
                <div className="flex flex-wrap items-center gap-6 text-gray-600 font-medium">
                    <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        ℹ️ {podcast.episodeTitle}
                    </span>
                    <span>Por <strong className="text-gray-900">{podcast.host}</strong></span>
                    <span>{podcast.publishDate}</span>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                    {/* Audio Player Card */}
                    <section className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 p-8 border border-gray-100" aria-labelledby="audio-player-title">
                        <h2 id="audio-player-title" className="sr-only">Reproductor de Audio</h2>

                        <audio
                            ref={audioRef}
                            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                            onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                            onLoadedMetadata={() => setDuration(audioRef.current.duration)}
                            onEnded={() => setIsPlaying(false)}
                            className="hidden"
                        />

                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                                    <img src="https://images.unsplash.com/photo-1585706410355-f58934f9a35d?w=400&h=400&fit=crop" alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 space-y-6 w-full">
                                    <div className="space-y-2">
                                        <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Ahora sonando</p>
                                        <h3 className="text-2xl font-bold text-gray-900 leading-tight">{podcast.title}</h3>
                                        <p className="text-gray-500 line-clamp-2">{podcast.description}</p>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <button
                                            onClick={handlePlayPause}
                                            className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg hover-lift focus-visible:ring-offset-2"
                                            aria-label={isPlaying ? "Pausar episodio" : "Reproducir episodio"}
                                        >
                                            {isPlaying ? "⏸️" : "▶️"}
                                        </button>

                                        <div className="flex gap-4">
                                            <button className="p-3 text-gray-400 hover:text-blue-600 transition-colors" aria-label="Retroceder 10 segundos">
                                                ⏪
                                            </button>
                                            <button className="p-3 text-gray-400 hover:text-blue-600 transition-colors" aria-label="Avanzar 10 segundos">
                                                ⏩
                                            </button>
                                        </div>

                                        <div className="hidden sm:flex items-center gap-4 flex-1">
                                            <span>🔊</span>
                                            <input
                                                type="range" min="0" max="1" step="0.1" value={volume}
                                                onChange={(e) => {
                                                    const v = parseFloat(e.target.value);
                                                    setVolume(v);
                                                    audioRef.current.volume = v;
                                                }}
                                                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                                aria-label="Control de volumen"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm font-bold text-gray-500 tabular-nums">
                                    <span>{formatTime(currentTime)}</span>
                                    <span>{formatTime(duration)}</span>
                                </div>
                                <input
                                    type="range" min="0" max={duration || 100} value={currentTime}
                                    onChange={handleSeek}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                    aria-label="Progreso del audio"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Video Section */}
                    <section className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100" aria-labelledby="video-title">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">🎥</div>
                            <h2 id="video-title" className="text-2xl font-bold text-gray-900">Video Promocional</h2>
                        </div>
                        <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative group">
                            <video
                                src={videoPromocional}
                                controls
                                className="w-full h-full object-contain"
                                poster="https://images.unsplash.com/photo-1585706410355-f58934f9a35d?w=800&h=450&fit=crop"
                            >
                                Tu navegador no soporta el elemento video. Por favor usa la transcripción.
                            </video>
                        </div>
                    </section>
                </div>

                <div className="space-y-8">
                    <section className="bg-gray-50 rounded-3xl border border-gray-200 p-8 h-full flex flex-col" aria-labelledby="transcript-title">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">📄</div>
                                <h2 id="transcript-title" className="text-xl font-bold text-gray-900">Transcripción</h2>
                            </div>
                            <button
                                onClick={() => setIsTranscriptOpen(!isTranscriptOpen)}
                                className="text-blue-600 font-bold text-sm hover:underline"
                                aria-expanded={isTranscriptOpen}
                                aria-controls="transcript-content"
                            >
                                {isTranscriptOpen ? 'Cerrar' : 'Ver'}
                            </button>
                        </div>

                        <div id="transcript-content" className={`flex-1 transition-all duration-300 ${isTranscriptOpen ? 'opacity-100' : 'opacity-0 h-0 hidden'}`}>
                            <div className="space-y-4 pr-4 custom-scrollbar overflow-y-auto max-h-[700px]">
                                {transcript.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => playFromTime(item.time)}
                                        className="w-full text-left p-4 rounded-xl hover:bg-white hover:shadow-md transition-all group focus-visible:ring-2 focus-visible:ring-blue-600"
                                        aria-label={`Saltar a ${item.time}`}
                                    >
                                        <span className="block text-blue-600 font-bold text-xs mb-1 tabular-nums">{item.time}</span>
                                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-900">{item.text}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {!isTranscriptOpen && (
                            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 py-12">
                                <p className="text-gray-500 text-sm font-medium">La transcripción interactiva permite saltar a partes específicas del audio.</p>
                                <button
                                    onClick={() => setIsTranscriptOpen(true)}
                                    className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold shadow-md hover:bg-blue-700 transition-colors"
                                >
                                    Abrir transcripción
                                </button>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Podcast;
