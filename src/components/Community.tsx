import React from 'react'

const Community: React.FC = () => {
  const stats = [
    { number: "500+", label: "Miembros Activos" },
    { number: "50+", label: "Eventos Organizados" },
    { number: "100+", label: "Proyectos Colaborativos" },
    { number: "25+", label: "Empresas Participantes" }
  ]

  const upcomingEvents = [
    {
      title: "Meetup Elixir CDMX",
      date: "15 de Octubre",
      time: "7:00 PM",
      location: "Ciudad de México",
      description: "Charlas sobre Phoenix LiveView y desarrollo de APIs con Elixir"
    },
    {
      title: "Workshop: Introducción a Elixir",
      date: "22 de Octubre",
      time: "10:00 AM",
      location: "Guadalajara",
      description: "Taller práctico para principiantes en programación funcional"
    },
    {
      title: "Conferencia ElixirConf MX",
      date: "5-6 de Noviembre",
      time: "Todo el día",
      location: "Monterrey",
      description: "La conferencia más grande de Elixir en México"
    }
  ]

  return (
    <section id="comunidad" className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestra Comunidad en Números
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Somos una comunidad vibrante y creciente de desarrolladores Elixir en México
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-purple-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Próximos Eventos
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No te pierdas nuestros próximos eventos y meetups. ¡Conecta con la comunidad!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="card hover:scale-105 transition-transform duration-200">
                <div className="mb-4">
                  <div className="text-sm text-purple-600 font-semibold uppercase tracking-wide">
                    {event.date}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mt-1">
                    {event.title}
                  </h4>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  {event.description}
                </p>
                
                <button className="btn-primary w-full">
                  Registrarse
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary text-lg px-8 py-4">
              Ver Todos los Eventos
            </button>
          </div>
        </div>

        {/* Join Community CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para Unirte?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad y comienza tu viaje en el mundo de Elixir
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Únete Ahora
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Conoce Más
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community

