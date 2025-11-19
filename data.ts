import { 
  BookOpen, 
  Layout, 
  MessageSquareText, 
  Image as ImageIcon, 
  Wand2, 
  Mic, 
  Video, 
  CheckCircle 
} from 'lucide-react';
import { LessonContent } from './types';

export const courseData: LessonContent[] = [
  {
    id: 'intro',
    title: '1. Introducción y Acceso',
    subtitle: '¿Qué es Google AI Studio?',
    description: 'Google AI Studio es una "suite" o conjunto de herramientas de Inteligencia Artificial gratuitas y potentes. Piense en ello como un taller digital donde puede crear textos, imágenes y audios.',
    icon: Layout,
    image: 'https://picsum.photos/id/1/800/400', // Tech workspace
    bulletPoints: [
      'Es completamente gratuito.',
      'Necesita una cuenta de Google (Gmail) para entrar.',
      'Se accede buscando "Google AI Studio" en internet.'
    ],
    highlightBox: {
      title: 'La Interfaz del Estudio',
      content: 'Existen dos áreas principales: "Playground" (Patio de Juegos) para probar todos los modelos fácilmente, y "Build" (Construir) para guardar sus creaciones.',
      type: 'info'
    },
    quiz: {
      question: '¿Qué requisito es indispensable para usar Google AI Studio?',
      options: [
        'Pagar una suscripción mensual',
        'Tener una cuenta de Google (Gmail)',
        'Instalar un programa complejo en la computadora'
      ],
      correctAnswerIndex: 1,
      explanation: '¡Correcto! El servicio es gratuito, pero necesita una cuenta de Google para identificarse y guardar sus trabajos.'
    }
  },
  {
    id: 'text-models',
    title: '2. Modelos de Texto (Gemini)',
    subtitle: 'La base de la Inteligencia Artificial',
    description: 'Los modelos de texto le permiten chatear, responder preguntas y analizar documentos. Es como tener un asistente muy leído que puede leer libros enteros en segundos.',
    icon: MessageSquareText,
    image: 'https://picsum.photos/id/24/800/400', // Books
    bulletPoints: [
      'Gemini Flash: Modelos rápidos, ideales para la mayoría de las tareas.',
      'Gemini Pro: Modelos más lentos pero profundos, para razonamiento complejo.',
      'Puede subir un PDF largo y pedir un resumen.',
      'Puede pegar un enlace de YouTube y pedir un resumen del video.'
    ],
    highlightBox: {
      title: 'Consejo Práctico',
      content: 'Puede subir un documento sobre el Imperio Romano de 500 páginas y pedirle un resumen en español en cuestión de segundos.',
      type: 'tip'
    },
    quiz: {
      question: 'Si desea un resumen rápido de un documento sencillo, ¿qué modelo debería elegir?',
      options: [
        'Gemini Flash',
        'Gemini Pro',
        'Ninguno de los anteriores'
      ],
      correctAnswerIndex: 0,
      explanation: '¡Exacto! Gemini Flash es el modelo más rápido y eficiente para la inmensa mayoría de las tareas cotidianas.'
    }
  },
  {
    id: 'image-generation',
    title: '3. Generación de Imágenes',
    subtitle: 'Creando arte con palabras',
    description: 'Utilizando el modelo "Imagen", usted puede crear fotografías y arte describiendo lo que quiere ver. El secreto está en la "receta" o estructura de su instrucción.',
    icon: ImageIcon,
    image: 'https://picsum.photos/id/64/800/400', // Portrait/Art
    highlightBox: {
      title: 'La Receta Perfecta (Prompt)',
      content: 'Imagine que está cocinando. Si sigue los pasos e ingredientes exactos, el resultado será delicioso.',
      type: 'tip'
    },
    recipe: {
      title: 'Estructura de 6 Pasos para Imágenes',
      steps: [
        { label: '1. Sujeto', description: '¿Quién o qué aparece? (Ej: Un gato)' },
        { label: '2. Acción', description: '¿Qué está haciendo? (Ej: Leyendo un libro)' },
        { label: '3. Fondo', description: 'El entorno (Ej: En una biblioteca antigua)' },
        { label: '4. Estilo', description: 'Tipo de arte (Ej: Pintura al óleo, Fotografía)' },
        { label: '5. Iluminación', description: 'Tipo de luz (Ej: Luz suave de atardecer)' },
        { label: '6. Detalles', description: 'Extras (Ej: Usando gafas redondas)' },
      ]
    },
    quiz: {
      question: 'En la receta para crear imágenes, ¿qué describe el paso "Sujeto"?',
      options: [
        'El tipo de cámara que se usó',
        'Quién o qué aparece en la imagen (persona, animal, objeto)',
        'Los colores del fondo'
      ],
      correctAnswerIndex: 1,
      explanation: '¡Muy bien! El sujeto es el protagonista de nuestra imagen, lo primero que debemos definir.'
    }
  },
  {
    id: 'image-editing',
    title: '4. Edición de Imágenes',
    subtitle: 'Modificando lo existente',
    description: 'Con herramientas como "Nano Banana", puede subir una foto y cambiar cosas específicas sin necesidad de saber Photoshop.',
    icon: Wand2,
    image: 'https://picsum.photos/id/314/800/400', // Flowers/Editing
    recipe: {
      title: 'Fórmula de Edición (4 Pasos)',
      steps: [
        { label: '1. Acción', description: '¿Qué cambio quiere? (Añadir, cambiar, eliminar)' },
        { label: '2. Elemento actual', description: '¿Qué cosa vamos a cambiar? (Ej: El vestido rojo)' },
        { label: '3. Nuevo elemento', description: '¿Qué queremos ahora? (Ej: Vestido amarillo)' },
        { label: '4. Detalles', description: 'Calidad deseada (Ej: Fotorrealista)' },
      ]
    },
    quiz: {
      question: '¿Qué permite hacer la edición con Nano Banana?',
      options: [
        'Cambiar elementos específicos de una foto existente (ej. color de ropa)',
        'Imprimir la foto en papel',
        'Convertir la foto en un video musical'
      ],
      correctAnswerIndex: 0,
      explanation: '¡Correcto! Permite modificar partes concretas de una imagen que usted suba, como cambiar colores u objetos.'
    }
  },
  {
    id: 'live-conversation',
    title: '5. Conversación en Vivo',
    subtitle: 'Hable con la IA',
    description: 'La función "Live" le permite hablar a viva voz con la inteligencia artificial. Puede interrumpirla y tener una charla fluida como con una persona.',
    icon: Mic,
    image: 'https://picsum.photos/id/338/800/400', // Microphone/Coffee
    bulletPoints: [
      'Modo Hablar: Solo voz.',
      'Modo Webcam: La IA puede ver lo que usted le muestra en la cámara.',
      'Compartir Pantalla: La IA ve su computadora para ayudarle con programas.',
      'Puede pedirle que actúe como un experto en un tema específico.'
    ],
    quiz: {
      question: 'En el modo "Webcam" de la conversación en vivo, ¿qué puede hacer la IA?',
      options: [
        'Solo puede escuchar su voz',
        'Puede ver los objetos que usted le muestre a la cámara',
        'Apaga su computadora automáticamente'
      ],
      correctAnswerIndex: 1,
      explanation: '¡Exacto! La IA tiene "ojos" a través de su cámara y puede opinar sobre lo que le muestre.'
    }
  },
  {
    id: 'audio-generation',
    title: '6. Generación de Audio',
    subtitle: 'De texto a voz',
    description: 'Convierta cualquier texto escrito en un discurso hablado o una conversación entre dos personas. Es vital darle "vida" a la voz con instrucciones emocionales.',
    icon: MessageSquareText,
    image: 'https://picsum.photos/id/452/800/400', // Retro radio/audio
    recipe: {
      title: 'Dando Vida a la Voz',
      steps: [
        { label: '1. Rol', description: '¿Quién habla? (Ej: Un hombre anciano y sabio)' },
        { label: '2. Emoción', description: '¿Cómo se siente? (Ej: Lleno de esperanza)' },
        { label: '3. Estilo', description: '¿Cómo habla? (Ej: Despacio y pausado)' },
        { label: '4. Atmósfera', description: 'El contexto (Ej: Como contando un secreto)' },
      ]
    },
    highlightBox: {
      title: 'Truco de Experto',
      content: 'Puede escribir etiquetas como (laughter) para risas o (pause) para silencios dentro del texto para que suenen más reales.',
      type: 'info'
    },
    quiz: {
      question: '¿Por qué es importante definir la "Emoción" al generar audio?',
      options: [
        'Para que el audio suene más fuerte',
        'Para evitar que la voz suene robótica y sin vida',
        'No es importante, basta con el texto'
      ],
      correctAnswerIndex: 1,
      explanation: '¡Así es! Las emociones (alegría, tristeza, cansancio) hacen que la voz suene humana y realista.'
    }
  },
  {
    id: 'video-generation',
    title: '7. Generación de Video',
    subtitle: 'El futuro en movimiento',
    description: 'Aunque es una tecnología nueva, modelos como "Veo" permiten crear videos cortos a partir de texto.',
    icon: Video,
    image: 'https://picsum.photos/id/550/800/400', // Cinema/Motion
    bulletPoints: [
      'Se usa un "Prompt positivo" para describir lo que quiere ver.',
      'Se usa un "Prompt negativo" para describir lo que NO quiere ver.',
      'Algunos modelos antiguos no generan sonido, pero los nuevos están evolucionando rápidamente.'
    ],
    quiz: {
      question: '¿Para qué sirve el "Prompt Negativo" en la creación de video?',
      options: [
        'Para describir lo que NO queremos que aparezca en el video',
        'Para hacer que el video sea en blanco y negro',
        'Para cancelar la creación del video'
      ],
      correctAnswerIndex: 0,
      explanation: '¡Correcto! Es una herramienta muy útil para evitar elementos indeseados en nuestro video final.'
    }
  },
  {
    id: 'conclusion',
    title: '¡Felicidades!',
    subtitle: 'Ha completado el curso introductorio',
    description: 'Ahora tiene los conocimientos básicos para explorar Google AI Studio. Recuerde: la práctica hace al maestro. ¡No tenga miedo de experimentar!',
    icon: CheckCircle,
    image: 'https://picsum.photos/id/888/800/400', // Nature/Success
    bulletPoints: [
      'Recuerde la estructura de las recetas (prompts).',
      'Utilice el "Patio de Juegos" (Playground) para practicar.',
      'La tecnología es una herramienta para potenciar su creatividad.'
    ],
    highlightBox: {
      title: 'Certificado Simbólico',
      content: 'Considere este momento como su graduación en los fundamentos de la IA Generativa.',
      type: 'tip'
    },
    quiz: {
      question: '¿Cuál es el mejor consejo para seguir aprendiendo?',
      options: [
        'No tocar nada para no romperlo',
        'Leer manuales técnicos en inglés',
        'Experimentar sin miedo en el Patio de Juegos (Playground)'
      ],
      correctAnswerIndex: 2,
      explanation: '¡Esa es la actitud! La experimentación es la mejor maestra. ¡Diviértase creando!'
    }
  }
];