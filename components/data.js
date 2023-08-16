const persona = [
    {
      id: 1,
      nombre: 'Hernán',
      imagen: require('../assets/gallery/1/1.jpg'),
      km: 1,
      online: false,
      rating: 4.6,
      genero: 'Masculino',
      edad: 36,
      sexo: false,
      localidad: 'Viña del Mar',
      feedback: [
        {
          persona_id: 1,
          valoracion: 5.0,
          comentarios: 'Persona discreta',
          anonimo: false,
          activo: true,
        }
      ],
      gallery: [
        require('../assets/gallery/1/1.jpg'),
      ],
      activo: true,
    },
    {
      id: 2,
      nombre: 'Josefa',
      imagen: require('../assets/gallery/2/1.webp'),
      km: 3,
      online: true,
      rating: 4.4,
      genero: 'Género fluido',
      edad: 28,
      sexo: true,
      localidad: 'Reñaca',
      feedback: [
        {
          persona_id: 1,
          valoracion: 5.0,
          comentarios: 'Persona discreta',
          anonimo: false,
          activo: true,
        }
      ],
      activo: true,
    },
    {
      id: 3,
      nombre: 'Graciela',
      imagen: require('../assets/gallery/3/1.jpg'),
      km: 3,
      online: true,
      rating: 4.7,
      genero: 'Femenino',
      edad: 43,
      sexo: true,
      descripcion: 'Que tal, soy Graciela, me encanta la humillación, insultos, denigraciones y amenazas de todo tipo, me gusta que me hagan su perra y me den ordenes, asi sean fetiches raros o lo que quiera, cumplo TODO. No se arrepentirán de contratar mis servicios ;)',
      localidad: 'Reñaca',
      feedback: [
        {
          persona_id: 1,
          valoracion: 5.0,
          comentarios: 'Persona discreta',
          anonimo: false,
          activo: true,
        }
      ],
      servicios: [
        {
          id: 1,
          nombre: 'Cabalgada',
          valor: '$50',
          duracion: 60,
        },
        {
          id: 2,
          nombre: 'Pasar el rato',
          valor: '$80',
          duracion: 45,
        },
        // ...otros servicios...
      ],
      activo: true,
    },
    {
      id: 4,
      nombre: 'Veronica',
      imagen: require('../assets/gallery/4/1.jpg'),
      km: 5,
      online: false,
      rating: 4.6,
      genero: 'Cisgénero Femenino',
      edad: 33,
      sexo: true,
      localidad: 'Quillota',
      feedback: [
        {
          persona_id: 1,
          valoracion: 5.0,
          comentarios: 'Persona discreta',
          anonimo: false,
          activo: true,
        }
      ],
      activo: true,
    },
    {
      id: 5,
      nombre: 'Kaneda',
      imagen: require('../assets/gallery/5/1.jpg'),
      km: 2,
      online: true,
      rating: 1.0,
      genero: 'Trigénero',
      edad: 22,
      sexo: false,
      localidad: 'Quintero',
      feedback: [
        {
          persona_id: 1,
          valoracion: 1.0,
          comentarios: 'chanta de mierda me dejó con la pichula afuera y me dejó plantado, por suerte aceptaron mi reclamo y aceptaron mi reembolso.',
          anonimo: false,
          activo: true,
        }
      ],
      activo: true,
    },
    {
      id: 6,
      nombre: 'Martina',
      imagen: require('../assets/gallery/6/1.jpg'),
      km: 5334,
      online: false,
      rating: 5.0,
      genero: 'Pangénero',
      edad: 20,
      sexo: true,
      localidad: 'Concepción',
      feedback: [
        {
          persona_id: 1,
          valoracion: 5.0,
          comentarios: 'Persona discreta',
          anonimo: false,
          activo: true,
        }
      ],
      activo: false,
    },
    {
      id: 7,
      nombre: 'Patrick',
      imagen: require('../assets/gallery/7/1.png'),
      km: 39583,
      online: true,
      rating: 4.6,
      genero: 'No binario',
      edad: 20,
      sexo: false,
      localidad: 'Burgos',
      feedback: [
        {
          persona_id: 1,
          valoracion: 5.0,
          comentarios: 'Persona discreta',
          anonimo: false,
          activo: true,
        }
      ],
      descripcion: 'Que tal, soy Patrick, me encanta la humillación, insultos, denigraciones y amenazas de todo tipo, me gusta que me hagan su perra y me den ordenes, asi sean fetiches raros o lo que quiera, cumplo TODO. No se arrepentirán de contratar mis servicios ;)',
      activo: true,
    },
  ];

export default persona;