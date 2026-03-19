import { useState, useRef } from 'react';
import './index.css';
import videoPromocional from './assets/video.mp4';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);
  
  const audioRef = useRef(null);
  const transcriptRef = useRef(null);

  // Sample podcast data
  const podcast = {
    title: "El Arte de la Creatividad",
    episodeTitle: "Temporada 1 - Episodio 5: 'Innovación en el mundo digital'",
    host: "Elena Rodriguez",
    description: "Exploramos cómo la creatividad se combina con la tecnología para transformar industrias. Entrevistamos a expertos en diseño digital y desarrollo de productos.",
    publishDate: "15 Octubre 2024",
    duration: "45:23",
    topics: ["Creatividad", "Tecnología", "Diseño", "Innovación"],
    language: "Español"
  };

  // Episodes list
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

const transcript = [
  { time: "00:00", text: "[Música de intro]" },
  { time: "00:03", text: "¡Hola a todos y bienvenidos a Nexo Gamer! Soy Iván, y este es el episodio cero, la toma de contacto de este nuevo espacio donde, semana a semana, nos sentaremos a charlar sobre lo que más nos gusta: la actualidad del videojuego." },
  { time: "00:25", text: "¿Por qué otro podcast de videojuegos? Bueno, la idea de Nexo Gamer es simple: ir directo al grano. Sin rodeos, sin tertulias de tres horas." },
  { time: "00:38", text: "Solo tú y yo repasando las noticias más importantes, los lanzamientos de la semana y, de vez en cuando, alguna reflexión sobre hacia dónde va esta industria que tanto nos apasiona." },
  { time: "00:50", text: "Y para empezar con fuerza en este mini-episodio, tenemos que hablar obligatoriamente del tema del momento: el shadow drop de Hi-Fi Rush en PlayStation 5." },
  { time: "01:03", text: "Es un movimiento sísmico en la industria. Estamos viendo cómo la estrategia de Microsoft está cambiando radicalmente, dejando de lado la exclusividad total para buscar la rentabilidad en las plataformas 'rivales'." },
  { time: "01:20", text: "¿Es este el fin de la guerra de consolas tal como la conocemos? Mi opinión es que sí. A Microsoft ya no le importa tanto cuántas Xbox vende, sino a cuántos Game Pass y cuántas copias de sus juegos vende, estén donde estén." },
  { time: "01:40", text: "Y ojo, porque los rumores apuntan a que Indiana Jones y el próximo Gears of War podrían seguir el mismo camino. Es un momento fascinante para ser jugador." },
  { time: "01:55", text: "En los próximos episodios largos, analizaremos esto con más calma y veremos qué opinan los desarrolladores de esta nueva era multiplataforma." },
  { time: "02:10", text: "[La música de fondo sube de volumen] Pero por hoy, esto es todo. Como os dije, formato corto, directo y al Nexo." },
  { time: "02:20", text: "Si no queréis perderos el primer episodio completo la semana que viene, suscribíos en vuestra plataforma de podcast favorita. Buscad 'Nexo Gamer'." },
  { time: "02:30", text: "Gracias por estar ahí al otro lado en este debut. Soy Iván, y esto ha sido Nexo Gamer. ¡Nos escuchamos pronto!" },
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

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };



  // Play audio when transcript segment is clicked
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 15v2a3 3 0 003 3h2a3 3 0 003-3v-6a1 1 0 00-1-1H7a1 1 0 00-1 1v6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v2m-4 0h8" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">Podcast Creator</h1>
                <p className="text-sm text-gray-500">Tu espacio de audio</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Inicio</a>
              <a href="#episodes" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Episodios</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contacto</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Podcast Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="w-full aspect-square bg-white/10 rounded-xl backdrop-blur-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1585706410355-f58934f9a35d?w=400&h=400&fit=crop" 
                  alt="El Arte de la Creatividad" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                  <span className="text-sm font-medium">Podcast</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-balance">{podcast.title}</h2>
                <p className="text-xl text-blue-100">{podcast.episodeTitle}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-blue-100">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium">{podcast.host}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{podcast.publishDate}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {podcast.topics.map((topic, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-lg text-blue-100 leading-relaxed text-balance">{podcast.description}</p>
              
              <button 
                onClick={handlePlayPause}
                className="flex items-center gap-3 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-50 transition-colors hover-lift"
              >
                {isPlaying ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Pausar
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Reproducir Episodio
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

         {/* Video Promocional */}
         <section className="bg-white rounded-2xl shadow-xl p-8 mb-12">
           <div className="text-center mb-8">
             <h3 className="text-2xl font-bold text-gray-900 mb-2">Video Promocional</h3>
             <p className="text-gray-600">Mira el video promocional del podcast</p>
           </div>
           
           <div className="w-full aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg">
             <video 
               src={videoPromocional} 
               controls 
               className="w-full h-full object-cover"
               poster="https://images.unsplash.com/photo-1585706410355-f58934f9a35d?w=800&h=450&fit=crop"
             >
               Tu navegador no soporta la reproducción de videos.
             </video>
           </div>
         </section>

         {/* Audio Player */}
         <section className="bg-white rounded-2xl shadow-xl p-8 mb-12">
           <div className="text-center mb-8">
             <h3 className="text-2xl font-bold text-gray-900 mb-2">Reproductor de Audio</h3>
             <p className="text-gray-600">Escucha el episodio completo con control de reproducción</p>
           </div>
          
          <audio
            ref={audioRef}
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            className="mb-8"
            preload="metadata"
          />
          
          <div className="space-y-6">
            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={handlePlayPause}
                className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform shadow-lg hover-lift"
                aria-label={isPlaying ? "Pausar" : "Reproducir"}
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
              
              <button 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                aria-label="Retroceder 10 segundos"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
                <span className="text-xs font-semibold ml-1">10s</span>
              </button>
              
              <button 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                aria-label="Avanzar 10 segundos"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                <span className="text-xs font-semibold ml-1">10s</span>
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600 font-medium">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max={duration || 100} 
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
            
            {/* Volume Control */}
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 11.293L12 8m0 0l-3.536 3.293m3.536-3.293a4 4 0 010 5.654M12 8a4 4 0 010 8m0 0a4 4 0 01-3.536-1.707M12 8a4 4 0 00-3.536 1.707m1.768 1.707a8 8 0 0011.314 0M12 8a8 8 0 00-5.656 14.343" />
              </svg>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.1" 
                value={volume}
                onChange={handleVolumeChange}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <span className="text-sm font-medium text-gray-600">{Math.round(volume * 100)}%</span>
            </div>
          </div>
        </section>

        {/* Transcript Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-12" ref={transcriptRef}>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Transcripción Completa</h3>
              <p className="text-gray-600">Lee el contenido del episodio mientras escuchas</p>
            </div>
            <button 
              onClick={() => setIsTranscriptOpen(!isTranscriptOpen)}
              className="hidden md:block px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              {isTranscriptOpen ? "Ocultar" : "Ver"} Transcripción
            </button>
          </div>
          
          {isTranscriptOpen && (
            <div className="bg-gray-50 rounded-xl p-6 max-h-[600px] overflow-y-auto shadow-inner">
              <div className="space-y-4">
                {transcript.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                    onClick={() => playFromTime(item.time)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-20 text-sm font-semibold text-blue-600">
                        {item.time}
                      </div>
                      <div className="flex-1 text-gray-700 leading-relaxed">
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {!isTranscriptOpen && (
            <div className="text-center py-12">
              <div className="inline-flex items-center gap-2 text-blue-600 text-lg font-medium mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2v8h8" />
                </svg>
                <span>Transcripción</span>
              </div>
              <p className="text-gray-500 mb-6">La transcripción está oculta. Haz clic en "Ver Transcripción" para mostrarla.</p>
              <button 
                onClick={() => setIsTranscriptOpen(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium hover-lift"
              >
                Ver Transcripción
              </button>
            </div>
          )}
        </section>

        {/* Episodes Section */}
        <section id="episodes" className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Episodios Anteriores</h3>
            <p className="text-gray-600">Escucha todos los episodios del podcast</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {episodes.map((episode) => (
              <div key={episode.id} className="bg-gray-50 rounded-xl p-6 hover-lift">
                <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={episode.image} 
                    alt={episode.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{episode.title}</h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{episode.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{episode.publishDate}</span>
                  <span>{episode.duration}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {episode.topics.map((topic, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                      {topic}
                    </span>
                  ))}
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Escuchar
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Contacto y Sugerencias</h3>
            <p className="text-gray-600">¡Queremos escuchar tus ideas y comentarios!</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="tuemail@ejemplo.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Asunto de tu mensaje"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Escribe tu mensaje..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="button" 
                  onClick={(e) => {
                    e.preventDefault();
                    const form = e.target.closest('form');
                    form.reset();
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors hover-lift"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 15v2a3 3 0 003 3h2a3 3 0 003-3v-6a1 1 0 00-1-1H7a1 1 0 00-1 1v6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v2m-4 0h8" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">Podcast Creator</span>
              </div>
              <p className="text-gray-400 mb-4">Tu espacio de audio para la creatividad y la innovación</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Inicio</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">Sobre mí</a></li>
                <li><a href="#episodes" className="text-gray-400 hover:text-blue-400 transition-colors">Episodios</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Episodios Recientes</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Temporada 1 - Episodio 1</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Temporada 1 - Episodio 2</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Temporada 1 - Episodio 3</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Temporada 1 - Episodio 4</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Suscríbete para recibir notificaciones de nuevos episodios</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; 2024 Podcast Creator. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
