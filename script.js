// BASE DE DATOS DE PREGUNTAS
const questionsDB = [
    {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "En cuanto a Arquitecturas Orientadas a Servicios (SOA), ¿qué opción permite el intercambio de datos de tipo XML?",
    options: ["SOAP", "REST", "KOAR", "MICROSERVICIO"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "SOAP SENDER se define como:",
    options: ["Nodo que transmite un mensaje SOAP", "Nodo que acepta un mensaje", "El intermediario actúa como SOA serv", "No transmite"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "La colección de principios y técnicas para el desarrollo de software se denomina:",
    options: ["API", "NEST", "CIUDADES INTELIGENTES", "MACHINE LEARNING"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "¿A qué opción se le atribuyen las propiedades (características) escalabilidad, rendimiento y seguridad?",
    options: ["REST (TRABAJO EN CAPAS)", "REST (SIN ESTADOS)", "REST INTERFAZ UNIFORME", "IASS"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "¿Referente a los microservicios, podríamos decir que cuando los objetos son manipulados con URI estaríamos frente a la opción de?",
    options: ["API REST", "REST (CODIGO EN DEMANDA)", "CLOUD", "CIUDADES INTELIGENTES"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "El protocolo cliente/servidor sin estado es una característica de:",
    options: ["API REST", "APISOP", "MICROSERVICIOS", "BIG DATA"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Cuando hablamos de la arquitectura que se compone por un conjunto de pequeños servicios independientes entre sí, hablamos de:",
    options: ["ARQUITECTURA DE MICROSERVICIOS", "DATAMIN", "ARQUITECTURA MONOLITICA", "ARQUITECTURA MINCILITICO"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "¿A qué arquitectura hace referencia el siguiente enunciado: cada funcionalidad corre en un proceso independiente, por lo que tendrán múltiples dependencias externas?",
    options: ["ARQUITECTURA DE MICROSERVICIOS", "ARQUITECTURA MONOLITICA", "ARQUITECTURA ROST SIN ESTADO", "BIG DATA"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Seleccione la opción que SON CONSIDERADAS como HERRAMIENTAS PARA PROBAR SERVICIOS WEB:",
    options: ["SOAP UI / JMeter", "TCP/RAD TEST", "TESTING RAD", "RAD"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Referente a las herramientas para probar servicios web, ¿la característica de poder usar tanto en pruebas exploratorias como automatizadas pertenece a?",
    options: ["Postman", "REST", "SoapSonar", "Sonarmeter"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Utilizan el potencial de la tecnología y la innovación para mejorar la calidad de vida de sus ciudadanos:",
    options: ["CIUDADES INTELIGENTES", "Big DATA", "NON SQL", "Metropolis"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Del siguiente listado, marque la opción correcta que describe el beneficio de las ciudades inteligentes:",
    options: ["Contribuir a la mejora del medio ambiente / Mejorar la calidad de vida", "No aporta ningún beneficio", "Más dispositivos no reconectados", "Menos dispositivos conectados"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Al conjunto de datos que van desde 30-50 Terabytes a varios Petabytes, se llama:",
    options: ["Big DATA", "Data Warehouse", "Cloud", "CLOUDCOMP"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Ayuda a las organizaciones a aprovechar sus datos y utilizarlos para identificar nuevas oportunidades:",
    options: ["Big DATA", "SAAS", "PASS", "JAS"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "¿Cuáles son consideradas fuentes de datos utilizadas en BIG DATA?",
    options: ["Datos de internet y móviles / Datos sectoriales", "Datos que no provienen del internet", "Datos de referencia", "Datos localizados en trabajo compartido"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Las estructuras que permiten almacenar información cuando las bases de datos relacionales generan problemas se denominan:",
    options: ["No SQL", "Data Warehouse", "Cloud", "SAAS"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "¿En las bases de datos de tipo NoSQL podemos encontrar ventajas como?",
    options: ["Se ejecutan en máquinas con pocos recursos / No genera cuello de botella", "La elaboración del diagrama Entidad-Relación", "Detalle de las relaciones de uno a uno", "El uso de máquinas de última generación"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Son ejemplos de BD NoSQL:",
    options: ["CASSANDRA / Mongo DB", "SCA", "LASS", "PASS"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Son características de un Data Warehouse:",
    options: ["Integrado / Temático", "Temático / No Integrado", "Integral / Domótico", "Histórica / No en demanda"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "'El análisis de grandes cantidades de información dispersa para darle sentido y convertirla en conocimiento' se refiere a:",
    options: ["DATA MINING", "INTERNET", "CLOUS", "HTML"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "¿Cuál de las siguientes es una etapa clave y característica del Data Mining?",
    options: ["La determinación del modelo", "La recopilación de información manual", "La creación de algoritmos secuenciales", "Manuales técnicos"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "¿En Machine Learning, uno de los principales tipos de Aprendizaje Automático es?",
    options: ["APRENDIZAJE SUPERVISADO", "APRENDIZAJE DE ALGORITMOS DE COMPETITIVIDAD", "APRENDIZAJE BASADO EN OBJETOS", "APRENDIZAJE BASADO EN PROYECTOS"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Estos sistemas tienen como finalidad la comprensión y abstracción de patrones de información de manera directa:",
    options: ["APRENDIZAJE NO SUPERVISADO", "APRENDIZAJE BASADO EN OBJETOS", "ALGORITMOS DE COMPETITIVIDAD", "APRENDIZAJE POR REFUERZO"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "En el mundo de la tecnología, el icono de la nube simboliza a:",
    options: ["La internet", "La interferencia eléctrica", "La colección de datos permanentes", "El clima"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "En el contexto de la tecnología, nos podemos referir a la nube como:",
    options: ["Recursos computacionales a gran escala en el internet", "Únicamente servidores gubernamentales", "La laptop de otra persona", "Fenómeno natural"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Para que la nube funcione, un componente importante es:",
    options: ["La virtualización", "No uso de ancho de internet", "Despliegue lento", "Servidores en serie"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "¿Cuál de las siguientes opciones corresponde a tipos de nube?",
    options: ["Privada", "Estándar", "Escalable", "Mínima"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "¿Cuál de las siguientes opciones corresponde a un servicio en la nube?",
    options: ["IAAS", "RAAS", "MARS", "WAAS"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Las reconocidas Netflix, ZOOM y Spotify, ¿a qué tipo de servicio en la nube corresponden?",
    options: ["SAAS", "FAAS", "AAS", "PAAS"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Un proveedor de servicios en la nube es:",
    options: ["Amazon Web Services", "Treifo", "Ecuador Solidario", "Spotify (como proveedor infra)"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "¿Qué beneficios tiene el cliente que usa el modelo cloud de Plataforma como Servicio (PAAS)?",
    options: ["Permite construir sus aplicaciones o servicios en la nube", "Permite construir secciones de servidores", "Permite crear cableados", "Permite crear un robot"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "¿Qué beneficios tiene el cliente que usa el modelo cloud de Software como Servicio (SAAS)?",
    options: ["Los clientes hacen uso de aplicaciones desde la nube", "Los clientes se suscriben al sistema Alis", "Los clientes importan servidores físicos", "Acceden a sistemas robóticos"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "¿Qué beneficios tiene el cliente que usa el modelo cloud de Infraestructura como Servicio (IAAS)?",
    options: ["El cliente terceriza la responsabilidad y el mantenimiento de hardware", "El cliente solicita personal por internet", "El cliente compra hardware y lo instala", "El cliente programa solo el front"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "¿Cuál es el significado de las siglas IoT?",
    options: ["Internet of things", "Ingenio o Tecnología", "Internet o Telnet", "Ingenius on technology"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "El internet de las cosas hace referencia a:",
    options: ["Objetos de uso cotidiano conectados a la red", "Dispositivos sin acceso al internet", "Dispositivos analógicos", "Válvulas de vacío"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "La denominación del término domótica se refiere a:",
    options: ["La automatización de casas mediante un sistema integrado", "Automatización de módulos lunares", "Automatización de procesos robóticos", "Domar mascotas robots"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "La denominación del término inmótica se refiere a:",
    options: ["La automatización de inmuebles de gran escala", "Automatización interna de robots", "Automatización en realidad virtual", "Automatización de automóviles"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "En el ámbito informático, ¿Qué es un CRM?",
    options: ["Sistema de Administración de las Relaciones con los Clientes", "Sistema de Gestión de inventarios", "Sistema de Gestión Financiera", "Sistema Contable"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Una de las características funcionales de un CRM es:",
    options: ["Generar historial de clientes", "Gestionar estados financieros", "Generar cadena de distribución", "Gestionar aeropuertos"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "En el ámbito informático, las siglas ERP significan:",
    options: ["Enterprise Resource Planning", "Entertainment Reproduction Planning", "Enterprise Response Prediction", "Enterprise Resource Programming"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "La opción que corresponde a una característica destacable de los sistemas ERP:",
    options: ["Base de datos centralizada", "No existe flujo de información", "No es necesario en la gestión", "Solo para contabilidad"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Un sistema ERP nos ofrece como ventaja:",
    options: ["Automatización de procesos / Ver y analizar datos", "No automatización", "No permite tomar decisiones", "Decisiones no respaldadas"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Identifique un sistema ERP de software libre:",
    options: ["Odoo", "Microsoft Dynamics 365", "Free business", "Forever Freedom ERP"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Un sistema operativo en el que es posible instalar Odoo ERP es:",
    options: ["Windows", "Chrome SOx", "Eclipse SO", "Windows Phone"]
  },
  {
    subject: "TENDENCIAS ACTUALES DE PROGRAMACION",
    question: "Para acceder al módulo ventas en Odoo debe hacerlo desde la opción:",
    options: ["Aplicaciones", "Configuración", "Administrador", "Root"]
  },
    // FUNDAMENTOS DE REDES Y CONECTIVIDAD

    
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuál es la capa que se encarga de la confiabilidad y conexiones de extremo a extremo?",
        "options": ["Transporte", "Sesión", "Red", "Enlace de datos"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuáles son los tipos de redes más comunes de infraestructura?",
        "options": ["LAN y WAN", "MAN y NAM", "MAN y SAN", "SAN y XAN"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuáles son las categorías de componentes de red que existen?",
        "options": ["Todas las anteriores", "Dispositivos", "Medios", "Servicios"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuáles son los medios de transmisión en la capa física?",
        "options": ["Todas las anteriores", "Cable de cobre", "Cable de fibra óptica", "Tecnología inalámbrica"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuál es la representación de direcciones MAC?",
        "options": ["Todas las anteriores", "Con guiones (00-60-6F-3A-07-BC)", "Con dos puntos (00:60:6F:34:07:BC)", "Con puntos (0060.6F3A.07BC)"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuál es el motivo por el cual fueron creadas las direcciones IPv6?",
        "options": ["Por agotamiento de IPv4", "Por mayor espacio de direcciones", "Todas las anteriores", "Ninguna de las anteriores"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "Convertir la dirección 192.168.10.10 a binario:",
        "options": ["11000000.10101000.00001010.00001010", "11000001.10111000.00010110.00011010", "10000001.10101000.00001110.00001010", "11000000.10111000.00010111.00001010"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuáles son las formas de comunicarse los hosts en una red IPv4?",
        "options": ["Unicast, Multicast, Broadcast", "Unicast, Multicast, Pluricast", "Unicast, Multicast, Broaticast", "Ninguna de las anteriores"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Qué significa unicast?",
        "options": ["Paquete que se envía de un host a otro host individual", "Paquete que se envía de un host a un grupo de hosts", "Paquete que se envía de un host a todos los hosts de la red", "Ninguna de las anteriores"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Qué significa broadcast?",
        "options": ["Paquete que se envía de un host a todos los hosts de la red", "Paquete que se envía de un host a otro host individual", "Paquete que se envía de un host a un grupo de hosts", "Ninguna de las anteriores"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Qué ofrece una red punto a punto?",
        "options": ["No son escalables", "Configuración rápida", "Son muy seguras", "La administración es centralizada"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuáles de las siguientes opciones son topologías de redes informáticas existentes?",
        "options": ["Topología física y lógica", "Topología virtual y física", "Todas las anteriores", "Ninguna de las anteriores"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuáles son las topologías de redes físicas que existen?",
        "options": ["Todas las anteriores", "Topología estrella", "Topología bus", "Topología anillo"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuáles son las topologías de redes lógicas para medios compartidos que existen?",
        "options": ["Acceso por contienda y controlado", "Acceso de contienda", "Acceso controlado y control", "Ninguna de las anteriores"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuáles son las redes conmutadas?",
        "options": ["Conmutación de paquetes y circuitos", "Conmutación por circuitos", "Conmutación de segmentos", "Conmutación por datos"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Qué ofrece IPv6?",
        "options": ["Todas las anteriores", "Mayor espacio de direcciones", "Mejor manejo de paquetes", "Seguridad integrada"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "Basado en esquemas de cableado, ¿Cuáles son los colores en el orden correspondiente a la norma T568A?",
        "options": ["VB, V, NB, A, AB, N, CB, C", "NB, N, VB, A, AB, V, CB, C", "NB, N, VB, V, AB, A, CB, C", "VB, V, NB, N, A, AZ, CB, C"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuáles de los siguientes protocolos, son protocolos de enrutamiento classfull?",
        "options": ["RIP V1 y IGRP", "IGRB Y RIB V1", "RIP V2 Y OSPF", "OSPF Y RIB V2"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuál es la clase y tipo de dirección para la IP 172.31.255.254?",
        "options": ["B Privada", "A Privada", "B Pública", "A Pública"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Con qué nombre técnicamente se conoce a la infraestructura o medio de transmisión inalámbrico (AIRE) de una red?",
        "options": ["Espectro Radioeléctrico", "Espectro Radio magnético", "Espectro de Ondas", "Espectro de Freznel"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuál de los siguientes colores no corresponde al cable UTP bajo el estándar 568 para cables de red?",
        "options": ["Rojo", "Naranja", "Verde", "Café"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuál es el nombre técnico con el que se conoce al estándar WIFI?",
        "options": ["IEEE 802.11 b.g.n", "IEEE 802.12 b.g.n", "IEEE 802.11 b.g.l", "IEEE 802.12 b.g.n"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Qué tipo de ataque implica el envío de paquetes maliciosos a través de una red con la intención de interceptar la comunicación entre dos partes?",
        "options": ["Ataque de intermediario (Man-in-the-Middle)", "Ataque de denegación de servicio (DDoS)", "Ataque de fuerza bruta", "Ataque de inundación de paquetes"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuál de las siguientes topologías de red es más resistente a fallos?",
        "options": ["Malla", "Estrella", "Bus", "Anillo"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cómo se llama el PDU de la capa 1 o Física del modelo OSI?",
        "options": ["Bit", "Trama", "Datos", "Paquete"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cómo se llama el PDU de la capa 2 o capa de enlace de datos del modelo OSI?",
        "options": ["Trama", "Paquete", "Bit", "Datos"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cómo se llama el PDU de la capa 3 o capa de red del modelo OSI?",
        "options": ["Paquete", "Bit", "Trama", "Datos"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cómo se llama el PDU de la capa 4 o capa de transporte del modelo OSI?",
        "options": ["Segmento", "Paquete", "Bit", "Trama"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cómo se llama el PDU de la capa 5 o capa de Sesión del modelo OSI?",
        "options": ["Datos", "Bit", "Paquete", "Segmento"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "De acuerdo con el modelo TCP/IP, ¿Cuál es la dimensión de una dirección IPv4?",
        "options": ["32 bits", "8 bits", "48 bits", "128 bits"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "De acuerdo con el modelo TCP/IP, ¿Cuál es la dimensión de una dirección IPv6?",
        "options": ["128 bits", "132 bits", "48 bits", "8 bits"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "De acuerdo con el modelo OSI, ¿Cuál es la dimensión de una dirección física o MAC ADDRESS?",
        "options": ["48 bits", "32 bits", "128 bits", "8 bits"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "De acuerdo con el modelo OSI, ¿En qué tipo de caracteres está representada una dirección física o MAC ADDRESS?",
        "options": ["12 caracteres Hexadecimales", "12 caracteres Binarios", "12 caracteres Octales", "12 caracteres decimales"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Qué define una máscara de subred?",
        "options": ["Número de IPs en una red", "Tipo de IP en una red", "Clase de IP en una red", "Infraestructura de una red"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿De cuántas capas está compuesto el Modelo TCP/IP?",
        "options": ["4 capas", "7 capas", "8 capas", "12 capas"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿A qué definimos como una técnica para aprovechar al máximo los recursos de la red?",
        "options": ["Subnetting", "TCP", "UDP", "Máscara de Subred"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuál es el tipo de protocolo orientado a conexión en la capa de transporte?",
        "options": ["TCP", "UDP", "DNS", "HTTP"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuál es el tipo de protocolo no orientado a conexión en la capa de transporte?",
        "options": ["UDP", "TCP", "DNS", "HTTP"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuál es el sistema que permite Tx/Rx comunicación en el mismo canal x unidad de tiempo?",
        "options": ["Full Duplex", "Simplex", "Duplex", "Semi Duplex"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuántas direcciones IP para host puedo manejar exactamente en una dirección IP 172.38.64.0/23?",
        "options": ["510 Host", "1022 Host", "1024 Host", "512 Host"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuál es la dirección IP reservada para la \"localhost\" o bucle de retorno en IPv4?",
        "options": ["127.0.0.1", "192.168.1.1", "10.0.0.1", "172.16.0.1"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Qué protocolo se utiliza para enviar correos electrónicos?",
        "options": ["SMTP", "TCP", "HTTP", "UDP"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "De las siguientes opciones ¿Cuáles son las cuatro características básicas de una arquitectura de Red?",
        "options": ["Tolerancia a fallas, Escalabilidad, Calidad de servicio, Seguridad", "Tolerancia a fallas, Interoperabilidad, Calidad de servicio, Seguridad", "Tolerancia a fallas, Escalabilidad, Internetworks, Calidad de Servicio", "Tolerancia a fallas, Internetworks, Convergencia, Seguridad"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "De las siguientes opciones ¿En el cable de fibra óptica para qué sirve el núcleo?",
        "options": ["Es por donde viaja la luz", "Es el encargado de evitar ruido", "Proporciona refuerzo para evitar rotura", "Sirve para aumentar la señal"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cuáles son los tipos más comunes de la infraestructura de la red?",
        "options": ["WAN, MAN, LAN, WLAN, SAN", "LAN, WAN, MAN, WLAN, SLAN", "WAN, MAN, LAN, WLAN", "LAN, WAN, WMAN, WLAN, SAN"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿A qué se denomina Bluetooth?",
        "options": ["Tecnología inalámbrica de corto alcance que permite comunicación de datos entre dispositivos digitales", "Equipo router conectado a internet para redistribuir señal", "Ataque que intenta robar dinero o identidad", "Ondas de radio exactamente igual que la propia radio"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "Convertir la siguiente Dirección a Binaria: 172.27.138.205",
        "options": ["10101100.00011011.10001010.11001101", "10101100.00011010.10001010.11001101", "10101100.00011010.10001011.11001101", "10101100.00011011.10001010.11001100"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "De acuerdo con el modelo OSI, ¿Qué significan las siglas LLC?",
        "options": ["Control de enlace lógico", "Control lógico de LAN", "Control lógico de redes LAN", "Lógico control de enlace"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cómo se llama el PDU de la capa 6 o capa de Presentación del modelo OSI?",
        "options": ["Datos", "Bit", "Paquete", "Segmento"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "¿Cómo se llama el PDU de la capa 7 o capa de Aplicación del modelo OSI?",
        "options": ["Datos", "Paquete", "Bit", "Segmento"]
    },
    {
        "subject": "FUNDAMENTOS DE REDES Y CONECTIVIDAD",
        "question": "De las siguientes opciones ¿A qué se denomina tecnología NFC?",
        "options": ["Tecnología inalámbrica de alta frecuencia y corto alcance para conectar dispositivos", "Transmisión de información por el aire utilizando ondas de frecuencia", "Certificación de productos bajo normas establecidas", "Transmisión y recepción de datos de dispositivos 6G"]
    },
        


// PROGRAMACIÓN WEB


  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Para qué sirve el código 'if (isset($variable))'?",
    "options": ["Verifica si la variable está definida y tiene un valor no nulo", "Crea una variable de nombre $variable", "Recorrer un array de nombre $variable", "Almacenar datos y crea una condición"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuáles son las dos formas de pasar los parámetros entre páginas PHP?",
    "options": ["Post y Get", "Get y Action", "Require e Include", "Into e Include"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Qué significado tiene las siglas CSS en Programación Web?",
    "options": ["Cascading Style Sheets (Hojas de Estilo en Cascada)", "Code of Style Sheets (Código de Hojas de Estilo)", "Coded Style Sheets (Hojas de Estilo Codificativas)", "Color Style Sheets (Hojas de Estilo de Color)"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Con qué carácter se concatena cadenas de caracteres en Javascript?",
    "options": ["+ (más)", "& (ampersand)"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cómo se reconoce que un documento es HTML 5?",
    "options": ["<!DOCTYPE HTML>", "<!DOCTYPE XHTML>", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\">", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 5//EN\">"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuáles son las partes de las sintaxis de las definiciones CSS?",
    "options": ["Selector- declaración", "Selector-propiedad", "Propiedad-declaración", "Declaración - valor"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuáles son los elementos que constan las definiciones en CSS?",
    "options": ["Propiedad-valor", "Valor definición", "Propiedad - elemento", "Propiedad-definición"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Qué son las variables en JavaScript?",
    "options": ["Almacenadores de datos", "Declaración de variables", "Datos fijos", "Expresiones de datos"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Para qué se utiliza principalmente JavaScript?",
    "options": ["Crear sitios interactivos y animados", "Crear sitios interactivos y almacenamiento de datos", "Crear sitios interactivos sin capacidad de respuesta", "Crear sitios para almacenamiento de datos"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuál es la capa del Modelo Vista Controlador que permite gestionar y mapear de manera directa la interacción de nuestra base de datos?",
    "options": ["Modelo", "Controlador", "Vista", "Base de datos"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Qué es la programación orientada a objetos?",
    "options": ["Paradigma de programación", "Modelo de programación", "Estructura de programación", "Lenguaje estructurado"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Qué es el modelo vista controlador?",
    "options": ["Patrón de diseño", "Diseño de tres capas", "Programación orientada a objetos", "Mapeo de código en php"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuáles son los tres niveles de abstracción en que MVC divide las aplicaciones?",
    "options": ["Modelo, Vista, Controlador", "Modelo, Vista, Computador", "Main, Views, Crub", "Models, Views, Commit"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿En qué atributo de un formulario especificamos la página a la que se van a enviar los datos del mismo?",
    "options": ["action", "file", "description", "name"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuáles son las principales partes que conforman la estructura de una base de datos?",
    "options": ["Tablas, campos y registros", "Tablas, columnas y filas", "Variables, Funciones y Datos"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuál de las instrucciones está correctamente escrita en PHP?",
    "options": ["if ($a==0) echo \"hola mundo\";", "if (a=0) print a;", "if (a==0) echo ok ]", "if (a==0): print a;"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cómo se llama la aplicación visual que nos permite crear y manipular bases de datos sin necesidad de tener un conocimiento profundo de MySQL?",
    "options": ["phpMyAdmin", "Apache", "PHP", "Dreamweaver"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuál de estas instrucciones PHP imprimirá por pantalla correctamente el mensaje 'Hola Mundo' en letra negrita?",
    "options": ["print(\"<strong>Hola Mundo</strong>\");", "print (<em>Hola Mundo</em>);", "print (<em>Hola Mundo </em>\";)", "print <strong>Hola Mundo </strong>:"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Para qué sirve el atributo 'class' de HTML en relación con los estilos CSS?",
    "options": ["Para aplicar unos estilos específicos a los elementos que tengan el mismo valor en ese atributo", "Es específico para indicar el color de la fuente que queremos aplicar", "Para indicar la clase de estilo que vamos a aplicar al elemento/etiqueta HTML que lleva ese atributo en linea, hoja interna o externa CSS", "No tiene que ver con los estilos"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuál de estas instrucciones está correctamente escrita en Javascript?",
    "options": ["if (a==0) alert (a);", "if a=0) print a", "if (a==0) { print a])", "if (a==0): print a"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Es posible hacer que se ejecute un formulario por JavaScript?",
    "options": ["Sí, aplicando el comando 'submit' al identificador del formulario", "No, esa función sólo puede realizarse mediante código PHP", "Si, de hecho los formularios se crean con código Javascript", "No, esa función sólo puede realizarse mediante código HTML"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cómo se llama el tipo de diseño web que busca la correcta visualización en distintos dispositivos?",
    "options": ["Diseño Responsive o Adaptativo", "Diseño de App Web", "Diseño de App Moviles", "Diseño en HTML5"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuál es el framework que permite crear interfaces adaptables con CSS y JavaScript?",
    "options": ["BootStrap", "Laravell", "NetBeans", "Eclipse"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuál es el nombre de la variable que toma el valor del campo del formulario al que está asociada?",
    "options": ["Value", "Name", "id", "Type"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuál es el identificador de cada elemento dentro del documento que es ÚNICO?",
    "options": ["id", "Name", "Value", "Type"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Qué elemento sirve para crear secciones de código dentro del documento?",
    "options": ["Div", "Container", "Form", "Span"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuál es el esquema base del framework BootStrap?",
    "options": ["12 columnas", "1 columna", "12 filas", "1 fila"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cómo se arma el esquema BootStrap?",
    "options": ["Contenedor Fila Columna", "Contenedor-Columna - Fila", "Fila Columna Contenedor", "Columna Fila Contenedor"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cómo se conoce al proceso de diseñar para móvil e ir adaptando a pantallas más grandes?",
    "options": ["Mobile First Design", "Flesh Design", "Collapse Design", "Mobile Design"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuántos tipos de contenedores tiene el framework BootStrap?",
    "options": ["2 tipos", "1 tipo", "4 tipos", "Ilimitados"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿En BootStrap, cómo se les llama a los hijos directos de un Contenedor?",
    "options": ["Filas", "Columnas", "Div", "Secciones"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿En BootStrap, cómo se les llama a los hijos directos de las filas?",
    "options": ["Columnas", "Divs", "Secciones", "Filas"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿En BootStrap, qué sucede con las columnas cuando se supera el límite de 12 en una fila?",
    "options": ["Se alinean hacia abajo", "Salen de pantalla", "Marca errores", "Daña el sistema por default"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Dentro de qué elemento deben ir los contenidos en BootStrap?",
    "options": ["Columnas", "Filas", "Contenedores", "Divs"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿De qué forma se heredan los contextos en BootStrap?",
    "options": ["Menor a mayor", "Mayor a menor", "De filas a columnas", "De columnas a filas"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cómo se denomina la medida relativa basada en el tamaño de fuente de la etiqueta HTML?",
    "options": ["rem", "pixeles", "puntos", "em"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "Selecciona el literal correcto sobre HTML (1. Muestra contenido, 2. Estándar web, 3. Estructura, 4. Serie de programas):",
    "options": ["1, 2, 3", "1, 2, 4", "1, 3, 4", "2, 3, 4"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Un script PHP comienza y termina con?",
    "options": ["<?php ?>", "<php. >", "<php,", "<php. >"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Para qué sirve el siguiente Símbolo: // ?",
    "options": ["Comentario solo de una línea en PHP", "Mensaje en HTML", "Comentario en HTML", "Comentario en bloque de PHP"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuál es la diferencia técnica entre echo y print en PHP?",
    "options": ["echo no tiene valor de retorno mientras que print tiene un valor de retorno de 1", "echo tiene valor de retorno 1", "print es más rápido que echo", "ambos son idénticos en retorno"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuál es la parte de un documento HTML que incluye información técnica para el navegador y metadatos?",
    "options": ["head", "body", "title", "htend"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Cuál de las siguientes opciones es un framework de desarrollo web en Python?",
    "options": ["Django", "Ruby on Rails", "Angular", "Node.js"]
  },
  {
    "subject": "PROGRAMACIÓN WEB",
    "question": "¿Qué afirmación es cierta sobre las cookies en programación web?",
    "options": ["Son útiles para almacenar datos en el cliente y recordar información", "Se utilizan solo en el servidor", "Son parte de HTML5", "Solo se leen desde el servidor"]
  },

// PROGRAMACIÓN VISUAL


  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Dónde se utiliza el Tag {% extends %} en la herencia de Templates?",
    options: ["En el Template hijo", "En el Template padre", "En cualquiera"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cuántos Tags {% block %} se pueden definir en un Template?",
    options: ["Tantos como se necesiten", "Únicamente puede definir un atributo", "Solo uno por template", "Solo dos por template"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué tipo de campo se utiliza para almacenar una cadena de texto de longitud indeterminada?",
    options: ["TextField", "CharField", "IntegerField", "PositiveIntegerField"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué es Django?",
    options: ["Es un framework web", "Es una plantilla HTML", "Es un conjunto de código desarrollado por un programadores"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cómo creamos por comandos un proyecto en Django?",
    options: ["django-admin startproject orion", "manage.py makemigrations blog", "python manage.py createsuperuser", "manage.py run startapp blog"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cómo ejecutamos por comandos un proyecto en Django?",
    options: ["manage.py runserver", "manage.py makemigrations blog", "python manage.py createsuperuser", "manage.py run startapp blog"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué permite el archivo settings en django?",
    options: ["Configurar cambios en idioma, zona horaria, conexión a bases de datos, permisos, seguridad, entre otros", "Definir elementos Html5, Css y Atributos del documento", "Ejecutar el proyecto en el Navegador", "Es un archivo mas de codigo"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué tipo de archivos pueden ser considerados como archivos estáticos (static files) en Django?",
    options: ["Son los archivos CSS e imágenes", "Configuración de controladores y registradores", "Archivos de conexión a bases de datos"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿En qué archivo se crea un modelo en una app?",
    options: ["models.py", "tests.py", "urls.py", "admin.py"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué nos permite el comando python manage.py makemigrations?",
    options: ["Examina los modelos y crea migraciones para las tablas que aún no existen", "Almacenamiento en caché de todas las visitas", "Reinicia automáticamente el servidor", "Almacenamiento en caché de archivos estáticos"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cuál es el valor de DEBUG cuando el sitio web está en linea o implementado?",
    options: ["Falso", "Verdadero", "Ninguna", "Nulo"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cómo creamos por comandos una apps en Django?",
    options: ["python manage.py startapp core", "manage.py makemigrations blog", "python manage.py createsuperuser", "Ninguna de las Anteriores"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué sucede cuando el archivo url.py se edita mientras el servidor de desarrollo aún se está ejecutando?",
    options: ["El servidor de desarrollo se reinicia automáticamente", "El servidor de desarrollo termina", "El servidor de desarrollo no hace nada", "La página web se vuelve a cargar automáticamente"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cómo podemos emigrar por comandos un modelo en Django?",
    options: ["python manage.py migrate", "python manage.py createsuperuser", "manage.py run startapp blog", "No es posible mediante comandos"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué comando me permite crear un usuario en el portal Admin?",
    options: ["python manage.py createsuperuser", "manage.py makemigrations blog", "manage.py run startapp blog", "No existen comandos"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué permiten los templates en Django?",
    options: ["Insertar elementos Python dentro del HTML", "Insertar elementos HTML dentro de Python", "Configurar el prefijo, dominio y ruta del recurso"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿En qué marco se basa Django?",
    options: ["MVT (Modelo-Vista-Plantilla)", "MVVM", "MVC", "MVCP"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cuál de estos comandos se usa para imprimir la consulta SQL del modelo?",
    options: ["sqlmigrate", "emigrar", "showmigration", "migration"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué implementación sería más rápida para contar el número de libros en Django?",
    options: ["Implementación a nivel de base de datos - libros.objects.count()", "Implementación de Python - len(libros)", "Implementación del lenguaje de plantilla - {{ libros | longitud }}"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué imprime {{ forloop.counter }}?",
    options: ["El valor entero del número de veces que el bucle se ha ejecutado", "El valor decimal del número de veces ejecutado", "El valor del método counter del objeto", "No imprime valores"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué es template tag?",
    options: ["Etiquetas que permiten elaborar plantillas de diseño y herencia en django", "Etiquetas html5 para manejo de eventos", "Etiquetas html5 para manejo de colores", "Etiquetas html5 para manejo de reglas de navegación"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué es un ORM?",
    options: ["Herramienta para mapeo de objetos relacionales de una base de datos", "Objetos que manipulan la capa de vista", "Motor de base de datos", "Etiquetas css"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Para qué sirve el comando migrations en Django?",
    options: ["Modifica las estructuras de base de datos en el ORM de Django", "Migrar la capa de vista", "Migrar la capa de plantilla", "Migrar la capa controlador"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué uso tiene el archivo urls.py en Django?",
    options: ["Registrar las url en el proyecto independiente de las apps que se tengan", "Localizador de recursos uniforme", "Método para obtener atributos de un formulario", "Dirección del navegador"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué es el QuerySet en Django?",
    options: ["Es una colección de objetos de la base de datos", "Es una colección de atributos de la base de datos", "Es una colección de templates", "Es una colección de datos estáticos"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué es una cookie?",
    options: ["Información mínima almacenada en el navegador del cliente", "Fragmento de código en Django", "Dirección Url en el archivo urls.py", "Entidad para registrar personas"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué son los formularios web?",
    options: ["Pantallas que permiten el registro de datos e información en un sistema web", "Documentos para secretaría", "Documentos basados en directivas de programación", "Documentos para registrar lenguajes estandarizados"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué permite dar estilo a una pantalla o formulario web?",
    options: ["CSS", "JavaScript", "Html5", "Python"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Que es CSRF token?",
    options: ["Template tag que previene ataques de Cross-Site Request Forgery", "Interface web para interactuar con el formulario", "Cliente Servidor Web", "Operaciones de administración sobre SQL"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué es un CRUD y que permite realizar en los framework?",
    options: ["Operaciones de creación, actualización, lectura y borrado de registros", "Acciones de manipulación en la inserción de usuarios", "Operaciones sobre el servidor de aplicaciones web"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué paquetería se necesita instalar para poder crear entornos virtuales?",
    options: ["VIRTUALENV", "VIRTUAL", "ENVVIRTUAL", "ENTORN"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué tipo de herencia puede manejar la capa de modelo o el ORM de Django?",
    options: ["Clase abstracta, multitabla y proxy", "Pública, privada y protegida", "Abstracta, pública, privada y protegida", "No maneja herencia"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cómo puedes actualizar el modelo de base de datos en el ORM de Django?",
    options: ["comando makemigrations", "comando startapp", "comando startproject", "comando django-admin"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cómo puedo integrar el uso de css, javscript a la estructura jerárquica del proyecto de django?",
    options: ["uso static files", "urls.py", "views.py", "css.py"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué determina los tipos de celdas de clase (Field Class Type) en el modelo orm de django?",
    options: ["Determina el tipo de columna en la base de datos, widget HTML y validación", "El tipo de dato en la urls.py", "El tipo de datos en la views.py", "Una variable en settings.py"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué función permite interacturar con las urls en django?",
    options: ["Mediante la función path en el archivo urls.py", "Diseñando template", "Definiendo clases en el modelo", "Definiendo clases en la vista"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cuál es el valor del atributo type de una etiqueta input para configurar un caja de texto para password?",
    options: ["password", "clave", "id", "password id"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cuál es el archivo de un proyecto en Django que permite ejecutar los comandos propios de Django?",
    options: ["manage.py", "settings.py", "urls.py", "init.py"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cuál es la sintaxis para heredar toda la página de base en index?",
    options: ["{% extends 'base.html' %}", "{% block content %}base.html{% endblock %}", "{% static 'base' %}", "{% block title % base % end title %}"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cuál es la forma correcta de crear una url indicando que index es la vista principal?",
    options: ["path('', views.index, name='index')", "path('index', views.index(), name='index')", "path('/index/', views.index, name='index')", "path(' ', views.index, name='index')"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué es un front end?",
    options: ["Interface web que permite interactuar al usuario con el formulario web", "Parte que procesa las entradas desde el servidor", "Lenguaje de marcado para desarrollo de páginas", "Planificación de actividades articuladas"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Qué es un Back end?",
    options: ["Parte que procesa la entrada desde el front-end y carga desde el servidor", "Quinta revisión del lenguaje de marcado estándar", "Teoría de bases de datos y vistas relacionales"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cuál es la variable que se configura para indicar las aplicaciones incluidas en el proyecto?",
    options: ["INSTALLED_APPS", "SETTINGS", "APLICATIONS", "VAR APPS"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cuál es la variable que sirve para configurar la conexión de base de datos?",
    options: ["DATABASES", "BASE", "CONECT BASE", "DATA BASES"]
  },
  {
    subject: "PROGRAMACIÓN VISUAL",
    question: "¿Cuál es el archivo donde se realizan las configuraciones propias del proyecto?",
    options: ["settings.py", "MANAGE", "INIT", "TEMPLATE"]
  },

  // PROGRAMACIÓN ORIENTADA A OBJETOS

  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuáles son las entidades que tienen un determinado estado, comportamiento (método) e identidad?",
    options: ["Clase", "Encapsulamiento"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es el contenedor, base o raiz de todos los widgests que conforma la interfaz?",
    options: ["Tk", "Menu", "Label"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es el widget utilizado para mostrar textos estáticos en la programación orientada a objetos?",
    options: ["Label", "Menu", "Tk"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué elemento sirve generalmente para que el usuario escriba un valor?",
    options: ["Entry", "Label"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué opción no es recomendable para cargar datos en una lista?",
    options: ["Escribir codigo secuencialmente para ingresar datos", "Usar el metodo append para ingresar valores", "Usar objetos para el llenado del mismo"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es la forma más cercana de usar una lista como si fuera una tabla?",
    options: ["Listas paralelas", "Listas perpendiculares", "Lista de Objetos", "Listas relacionadas"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué permiten las listas anidadas programación orientada a objetos?",
    options: ["Permiten almacenar listas dentro de listas", "Permiten usar listas como objetos", "Permiten mejoras en estructuras de datos", "Permiten almacenar datos de diferente tipo"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué función tienen los indices negativos en listas dentro de la programación orientada a objetos?",
    options: ["Devuelven datos del final al principio", "No tienen efecto en la lista", "No son permitidos", "Tienen la misma funcion que los postivos"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué tipo de estructura almacena información de tipo Identificador - Dato?",
    options: ["Clave valor", "PK-campo", "Indice-descripcion", "Cabecera detalle"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cómo se definen los diccionarios en la programación orientada a objetos?",
    options: ["A = {0: 'Carlos', 1: 'Andrea', 2: 'Luis'}", "A = (0, 1, 2, 3, 4)", "A = [0, 1, 2, 3, 4]", "A = (0, 1, 2, 3, 4)"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cómo son las claves en los diccionarios en la programación orientada a objetos?",
    options: ["Sin un orden particular", "Ordenadas", "Desordenadas", "Secuenciales"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cómo se definen los conjuntos en la programación orientada a objetos?",
    options: ["A = {0, 1, 2, 3, 4}", "A [0, 1, 2, 3, 4]", "A=(0, 1, 2, 3, 4)", "A (0, 1, 2, 3, 4)"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cómo se definen las listas en la programación orientada a objetos?",
    options: ["A=[0, 1, 2, 3, 4]", "A = (0, 1, 2, 3, 4)", "A = [0, 1, 2, 3, 4", "A=10: 'Carlos', 1: 'Andrea', 2: 'Luis')"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué estructura se debe usar si deseo crear una serie de elementos en una estructura mutable y fácilmente manejable?",
    options: ["Lista", "Tupla", "Pila", "Cola"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué estructura se debe usar si deseo crear una serie de elementos en una estructura inmutable y segura?",
    options: ["Tupla", "Diccionario", "Conjunto", "Lista"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué estructura debo usar si deseo crear una serie de elementos en una estructura que trabaje con datos en parejas?",
    options: ["Diccionario", "Tupla", "Conjunto"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Que es una clase en la programación orientada a objetos?",
    options: ["Es una fabrica de objetos", "Es la forma como se representan los datos", "Sirve para crear otras clases"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "En programación orientada a objetos, ¿Cuál es la funcion de un constructor?",
    options: ["Para inicializar la clase", "Un parámetro", "Construir la clase", "Contruir un objeto"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es la descripción que crees que define mejor el concepto 'clase' en la programación orientada a objetos?",
    options: ["Es un modelo o plantilla a partir de la cual creamos objetos", "Es un concepto similar al de 'array'", "Es un tipo particular de variable", "Es una categoria de datos ordenada secuencialmente"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué elementos definen a un objeto en la programación orientada a objetos?",
    options: ["Sus atributos y sus métodos", "Sus cardinalidad y su tipo", "La forma en que establece comunicación e intercambia mensajes", "Su interfaz y los eventos asociados"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "En programación orientada a objetos, ¿qué significa instanciar una clase?",
    options: ["Crear un objeto a partir de la clase", "Duplicar una clase", "Eliminar una clase", "Conectar dos clases entre si"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué significa sobrecargar (overload) un método?",
    options: ["Crear un método con el mismo nombre pero diferentes argumentos", "Editarlo para modificar su comportamiento", "Cambiarle el nombre dejándolo con la misma funcionalidad", "Añadirle funcionalidades a un método"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuáles son los pilares de la POO?",
    options: ["Polimorfismo, Abstraccion, Herencia, Encapsulamiento", "Herencia, Imaginacion, Polimorfismo, Tuplas", "Accesibilidad, Herencia, Imaginacion, Polimorfismo, Arrays", "Gerencia, Imaginacion, Clases, Objetos"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es la diferencia entre clase y objeto en la programación orientada a objetos?",
    options: ["Una clase es la representación abstracta de objetos y un objeto es una instanciación/concretización de una clase", "Una clase y objeto son lo mismo.", "Un objeto es una representación abstracta de una clase", "Un objeto es una plantilla y una clase es un"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es el pilar de la POO que permite a 3 clases denominadas 'B', 'C . 'D' compartir atributos y métodos de la clase 'A'?",
    options: ["Herencia", "Interfaz", "Accesibilidad", "Encapsulacion"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "En la programación orientada a objetos ¿qué es el encapsulamiento?",
    options: ["Es la proteccion de la información de un objeto dando acceso a través de sus métodos.", "Es el acceso a los atributos y métodos de una clase A en una clase B.", "Es la desproteccion la información de un objeto permitiendo su acceso de forma directa.", "Es la herencia de los atributos y métodos de una clase A en una clase B."]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué es el polimorfismo en la POO?",
    options: ["Son métodos con el mismo nombre, pero que ejecutan diferentes acciones.", "Heredar elementos de una clase a otra.", "Agrupacion de datos o campos en una estructura de clase", "Es la desproteccion la información de un objeto permitiendo su acceso de forma directa."]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué es la programacion orientada a objetos?",
    options: ["Es un paradigma de programación que usa los objetos en sus interacciones", "Es un paradigma de programación con una estructura de control de flujo compleja", "En paradigma en donde las sentencias de programas cambian su estado", "Es un paradigma en donde la estructura y ejecución de los programas las guian por sucesos"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué significa cuando se dice que la POO tiene como su más importante característica la reutilización del código?",
    options: ["Que se escribe una vez y se reutiliza varias veces", "Que se escribe una vez y se reutiliza sola una vez", "Que se escribe varias veces y se reutiliza varias veces", "Que se escribe solamente 2 veces y se reutiliza varias 2 veces"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es la característica mediante la cual es posible definir varios métodos o comportamientos de un objeto bajo un mismo nombre, de forma tal que es posible modificar los parámetros del método o reescribir su funcionamiento?",
    options: ["Polimorfismo.", "Herencia", "Abstracción", "Encapsulamiento"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué sintaxis es la correcta para crear un botón, añadirlo a la raiz root y crear un comportamiento a una función con el nombre grabar?",
    options: ["Button(root,text=\"Click\", command =grabar).pack", "Button(root,text=\"Click\").pack", "Button(text=\"Click\").pack", "Button(root,text=\"Click\", command =ingresar).pack"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es la sintaxis correcta para crear un Label de root=Tk()?",
    options: ["Label(root, text=\"Label creada\").pack()", "Label(root, text=\"Label creada\")", "Labe(root, text=\"Label creada\")", "Label(text=\"Label creada\").pack()"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es la sintaxis correcta para crear un Entry hacia el lado derecho de root= Tk()?",
    options: ["entry = Entry(root); entry.pack(side=RIGHT)", "entry = Entry(root); entry.pack(side=LEFT)", "entry Entry(root); entry.pack(side=CENTER)", "entry Entry(); entry.pack(side=RIGHT)"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es la sintaxis correcta para indicar el widget Frame estableciendo el tamaño con ancho de 480 y alto de 320 de root = Tk()?",
    options: ["Frame(root, width=480, height=320).pack()", "Frame(root, width=320, height=480).pack()", "frame.config(bg=\"lightblue\")", "Frame(root).pack()"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es el widget donde el usuario puede hacer un clic?",
    options: ["Button", "Label", "Text", "Entry"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué es una base de datos en informática?",
    options: ["Es un conjunto de datos accesados por un conjunto de programas", "Es un almacen información de archivos fisicos", "Es un conjunto de datos accesados solo por comandos", "Es un sistema con una interfaz definida por el"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es el módulo que se debe importar para conexión a base de datos?",
    options: ["sqlite3", "math", "support", "tkinter"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es la instrucción para la cadena de conexión a una base de datos ej: persona.db?",
    options: ["conexion = sqlite3.connect('persona.db')", "conexion = connect('persona.db')", "conexion = sqlite3.connect()", "ninguna de las anteriores"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué se debe crear antes de escribir una consulta en la base de datos?",
    options: ["cursor()", "commit()", "close()", "execute()"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es la sentencia para recuperar información de todos los campos de la tabla usuario de la base de datos persona.db?",
    options: ["cursor.execute(\"SELECT * FROM usuario\")", "cursor.execute(\"SELECT * FROM tabla\")", "cursor.close(\"SELECT FROM usuario\")", "cursor.execute(\"SELECT FROM persona\")"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál de las opciones es la más adecuada para acceder a los elementos de una tupla?",
    options: ["Indices", "Claves", "Contador", "Valores"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es la principal caracteristica de una tupla?",
    options: ["Inmutables de valores y tamaño", "Invisibles en memoria", "Declaradas con un valor", "Metodos"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué tipo de valores se pueden agregar en una lista?",
    options: ["Valores de diferentes tipo de datos", "Valores de un solo tipo de dato.", "Solamente otras colecciones", "Solamente valores numericos"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es la definición de una clase?",
    options: ["Es un conjunto de objetos que comparten una estructura y comportamientos comunes", "Es un item individual e identificable, o una entidad real o abstracta", "Es aquella que se crea en tiempo de ejecución.", "Pretende resolver un problema de principio a fin"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Cuál es la palabra reservada para crear un método?",
    options: ["Def", "Class", "Super", "Clase"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "El proceso en POO en el que se crean nuevas clases tomando como base clases existentes, ¿Se llama?",
    options: ["Herencia", "Polimorfismo", "Encapsulamiento", "Clase"]
  },
  {
    subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
    question: "¿Qué elemento es un marco contenedor de otros widgets?",
    options: ["Frame", "Tk", "Menu", "Dialogs"]
  },

  // METODOLOGIA DEL DESARROLLO DE SOFTWARE

  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿De qué se encarga la etapa de análisis de los requerimientos en el ciclo de vida del software?",
    options: ["Recopilar, examinar y formular los requisitos del cliente", "Diseñar los requisitos generales del sistema", "Implementar los requerimientos del sistema de informacion", "Realizar pruebas de rendimiento"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿De qué se encarga la etapa de diseño en el ciclo de vida del software?",
    options: ["Diseñar los requisitos generales de la arquitectura del sistema", "Implementar procedimientos correctivos y mejoras", "Encargar de la puesta en produccion del sistema", "Implementar los requerimientos del sistema de informacion"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Para qué sirve la Documentación dentro del ciclo de vida de software?",
    options: ["Documentar informacion necesaria para los usuarios del software y para desarrollos futuros", "Seleccionar el lenguaje de programacion y la plataforma", "Definir requerimientos a través de formatos preestablecidos usados solo en la fase inicial", "Generar el manual de usuario y documentar las bondades del sistema únicamente"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Qué tratamos de gestionar desde inicio hasta el fin en la metodologia tradicional de proyectos?",
    options: ["Proyección", "Incertidumbre", "Programación", "Cambios constantes"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "De las siguientes opciones, ¿cuál de ellas no corresponde a la metodologia ágil?",
    options: ["Desface entre lo solicitado y lo entregado", "Aprendizaje continuo", "Desarrolla en base a necesidades", "El cambio forma parte del proceso"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuál es el orden correcto las 5 fases o etapas de la metodologia en cascada?",
    options: ["Especificaciones, diseño, programacion, implementacion, mantenimiento", "Diseño, programacion, implementacion, mantenimiento, levantamiento", "Especificaciones, diseño, implementacion, programacion, mantenimiento", "Especificaciones, pruebas, diseño, programacion, rediseño"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuáles son los 4 pasos principales de la metodologia espiral?",
    options: ["Determinar objetivos, análisis de riesgo, desarrollar verificar y validar, planificar", "Verificación, implementación, mantenimiento, análisis", "Requisitos, implementación, verificación y mantenimiento", "Determinar requerimientos, análisis, desarrollar, replanificar"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Qué es Herencia en Orientación a Objetos?",
    options: ["Aquella que permite definir nuevas clases a partir de otras clases ya existentes", "Propiedad de los objetos que consiste en tener en cuenta sólo los aspectos más importantes", "Es un contenedor de una o más datos (variables)", "Entidad individual de un sistema"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "En diagramas de clases ¿Cómo se conoce a las 3 áreas del rectángulo que representan las clases?",
    options: ["Nombre de clase/atributos/métodos o acciones", "Tipo de clase/atributos/herencia", "Nombre de clase/atributos/tipos de atributos", "Número de clase/tipos de atributos/metodos"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuáles son los diagramas UML más comunes?",
    options: ["Clases, objeto, casos de uso, actividades", "Clases, oportunidades, objeto, casos especiales", "Clases, base de datos, casos de uso, funcionales", "Clases, objeto, casos de uso, modelamiento de interfaz"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuáles son los 3 tipos de bloques de construcción?",
    options: ["Cosas, relaciones y diagramas", "Cosas, métodos y diagramas", "Métodos, relaciones y diagramas", "Entrada, proceso y salida"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Qué son los elementos de comportamiento?",
    options: ["Partes dinámicas de los modelos UML (verbos que representan comportamiento)", "Objetos que usan como similitud a diagramas de flujos", "Partes organizativas de los modelos UML (cajas)", "Relaciones entre actores"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuál es el principal elemento de agrupación UML?",
    options: ["Paquete", "Método", "Relación", "Atributo"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿A quién nos referimos como una representación del rol jugado por una persona o cosa que actúa con el sistema?",
    options: ["Actor", "Usuario", "Entidad", "Programador"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Qué es un escenario en el contexto de los casos de uso?",
    options: ["Secuencia de acciones e interacciones entre los actores y el sistema", "Cuadro que referencia a un sistema informático", "Caso en el que participan los programadores y clientes", "Marco de trabajo para lluvia de ideas"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "Se representa por un rectángulo con color de fondo distintivo y sirve para establecer el:",
    options: ["Límite del sistema", "Frontera de actores", "Frontera de escenarios", "Sistema distribuido"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Mediante qué símbolo se representa un caso de uso en UML?",
    options: ["Ovalo", "Circulo", "Cuadrado", "Triángulo"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "Identifique la opción que corresponde a una desventaja de los casos de uso:",
    options: ["No establecen los requisitos funcionales", "Expresar la intención que tiene el actor", "No utiliza simbolos ni diagramas", "Organiza los escenarios"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "La metodologia de desarrollo de software es un marco de trabajo usado para estructurar, planificar y controlar el:",
    options: ["Proceso de desarrollo en sistemas de información", "Proceso de desarrollo de lenguajes de programación", "Proceso de desarrollo de interfaces con github", "Proceso de desarrollo de la arquitectura evolutiva"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿A qué metodología nos referimos cuando decimos que es lineal y cada etapa depende de la finalización de la anterior?",
    options: ["Cascada", "Scrum", "Espiral", "Ágil"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuál de las siguientes opciones no corresponde a una ventaja de Scrum?",
    options: ["Existen muchas reuniones (planificación, refinamiento, etc.)", "Se pueden obtener resultados anticipados", "Alto grado de transparencia", "La autoorganización es permitida"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuándo NO empleamos un método SCRUM?",
    options: ["Cuando se requiere una documetación exaustiva como prioritaria antes que la funcionalidad", "Cuando los requisitos son cambiantes y poco definidos", "Cuando un proyecto tradicional requiere soluciones de gestión", "Cuando es indispensable obtener resultados inmediatos"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Qué es el manifiesto ágil?",
    options: ["Documento que refleja una mentalidad y comportamiento guiados por valores y principios comunes", "Una acción de protestantes de europa", "Guia para programadores desarrollada por Google", "Libro sobre metodologías tradicionales"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuál de las siguientes opciones no corresponde a un principio ágil?",
    options: ["No se permiten requisitos cambiantes, menos si llegan tarde", "Satisfacer al cliente a través de entrega temprana", "Las mejores arquitecturas emergen de equipos autoorganizados", "El software que funciona es la medida de progreso"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuál de las siguientes opciones no corresponde a un valor ágil?",
    options: ["Valoramos más la documentación exhaustiva que el software que funciona", "Individuos e interacción sobre procesos y herramientas", "Colaboración con el cliente sobre negociación contractual", "Respuesta al cambio sobre seguimiento de un plan"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿De qué manera está catalogado Scrum?",
    options: ["Es un framework (marco de trabajo)", "Es un proceso", "Es una metodologia", "Es una kanban"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuál de las siguientes opciones no es un rol Scrum?",
    options: ["Project Leader", "Scrum Master", "Product Owner", "Scrum Team"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuál es una responsabilidad del Scrum Master?",
    options: ["Asegurar un entorno de trabajo adecuado para el equipo", "Ayudar a desarrollar el software al equipo", "Priorizar el product backlog", "Controlar a los programadores"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Qué es el Product Backlog?",
    options: ["Listado de todas las historias de usuario/tareas que se pretenden hacer en el proyecto", "Un listado de las tareas a realizar en el sprint", "La reunión diaria", "La reunión de planificación"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Qué es un sprint?",
    options: ["Intervalo prefijado durante el cual se crea un incremento de producto", "Reunión de planificación", "Riesgo que se presenta en el proyecto", "El resultado final del proyecto"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuál no es una caracteristica de un equipo scrum?",
    options: ["Se encarga de priorizar el product backlog", "Se auto-organizan y tienen responsabilidad compartida", "Están motivados", "Estable y dedicado"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuál de las siguientes opciones corresponde a un valor Agil?",
    options: ["Satisfacción del cliente", "Reuniones diarias", "Planificar el proyecto", "Documentación detallada"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuál de las siguientes opciones no es un pilar Scrum?",
    options: ["Valor", "Inspección", "Adaptación", "Transparencia"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Qué es la transparencia en Scrum?",
    options: ["Todos deben saber qué está pasando en el proyecto y por qué", "La relación entre el equipo del proyecto", "Los sprints del proyecto", "Compromiso con las personas del equipo"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Quién es el responsable de priorizar las historias de usuario?",
    options: ["Product Owner", "Scrum Master", "Scrum Team", "Project Leader"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuánto tiempo dura la Daily Standup Meeting (Reunión diaria)?",
    options: ["15 minutos", "120 minutos", "25 minutos", "30 minutos"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Qué es el Sprint Review?",
    options: ["Demostración de lo que se ha desarrollado", "Reunión diaria", "Reunión de planificación", "Reunión de retrospectiva"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuántos principios tiene el manifiesto ágil?",
    options: ["12", "10", "11", "13"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuántos valores o pilares tiene el manifiesto ágil?",
    options: ["4", "2", "3", "15"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿La Metodología Agil responde a los cambios?",
    options: ["Siempre", "Nunca", "Solo en proyectos simples", "Solo en proyectos complejos"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Qué metodología se centra en planificación y documentación exhaustiva antes de pasar a la siguiente fase?",
    options: ["Modelo en cascada", "Metodología ágil", "Desarrollo en espiral", "Prototipado Evolutivo"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuál de las siguientes fases es típica en la mayoría de metodologías de desarrollo?",
    options: ["Todas las anteriores", "Diseño y codificación", "Mantenimiento y soporte", "Planificación y análisis"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Qué metodología se enfoca en la creación de prototipos y retroalimentación del usuario?",
    options: ["Desarrollo rápido de aplicaciones (RAD)", "Modelo en cascada", "Desarrollo en espiral", "Prototipado Evolutivo"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuál es el propósito principal de las revisiones de código?",
    options: ["Mejorar la calidad del código mediante la detección temprana de problemas", "Encontrar todos los errores en el código", "Validar los requisitos del software", "Realizar pruebas de rendimiento"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuál es la característica de la metodología en cascada?",
    options: ["Un enfoque secuencial y lineal", "Un enfoque iterativo y flexible", "La entrega temprana de software funcional", "La retroalimentación continua del cliente"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuál es la caracteristica del RUP (Proceso Unificado de Rational)?",
    options: ["Fuerte énfasis en la documentación detallada", "Un enfoque secuencial y lineal", "Baja inversión en la fase de planificación", "Un enfoque puramente ágil"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Para qué se utiliza UML (Lenguaje de Modelado Unificado)?",
    options: ["Visualizar, especificar y documentar sistemas de software", "Desarrollar software en diferentes lenguajes", "Diseñar interfaces de usuario amigables", "Optimizar el rendimiento del software"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "En UML, ¿qué representa un caso de uso?",
    options: ["Una descripción de interacciones entre actor y sistema para una tarea", "Una clase en un sistema", "Un objeto que encapsula datos", "Una entidad externa únicamente"]
  },
  {
    subject: "METODOLOGIA DEL DESARROLLO DE SOFTWARE",
    question: "¿Cuál de las siguientes opciones describe una desventaja del modelo en cascada?",
    options: ["Dificultad para corregir errores en etapas posteriores del proyecto", "Mayor flexibilidad y adaptabilidad", "Retroalimentación continua del cliente", "Entrega temprana de software funcional"]
  },

  // Matemática Discreta

  {
    subject: "Matemática Discreta",
    question: "¿A qué se define como una unidad semántica que, o sólo es verdadera o sólo es falsa?",
    options: ["Proposición", "Variable", "Enunciado", "Problema"]
  },
  {
    subject: "Matemática Discreta",
    question: "De acuerdo a la representación de los posibles valores de verdad que podrían tomar una o más variables proposicionales se define cómo:",
    options: ["Tabla de verdad", "Esquema", "Plano cartesiano", "Proposición"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cuándo una estructura lógica de una forma proposicional tiene solamente proposiciones verdaderas para todos los valores de verdad de las variables proposicionales, diríamos que es una?",
    options: ["Tautología", "Contradicción", "Conjunción", "Contingencia"]
  },
  {
    subject: "Matemática Discreta",
    question: "Si una estructura lógica de una forma proposicional tiene solamente proposiciones falsas para todos los valores de verdad de las variables proposicionales, sería una:",
    options: ["Contradicción", "Tautología", "Conjunción", "Contingencia"]
  },
  {
    subject: "Matemática Discreta",
    question: "En una estructura lógica de una forma proposicional donde se tiene al menos una proposición con un valor de verdad que difiere del resto, sería una:",
    options: ["Contingencia", "Tautología", "Contradicción", "Conjunción"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cuál sería la expresión que corresponde a la región sombreada del siguiente Diagrama de Venn? (Pregunta 6)",
    options: ["B - (A ∪ C)", "A^C ∪ (B ∩ C)", "B ∩ (A ∪ C^C)", "A - (B ∪ C)"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cuál sería la expresión que corresponde a la región sombreada de la imagen adjunta? (Pregunta 7)",
    options: ["[(C - A) ∩ B] ∪ (A - B)", "(A ∩ B ∩ C)^C", "(C^C ∩ A) - B", "Ninguna de las anteriores"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cuál de las siguientes características posee la compuerta AND?",
    options: ["La respuesta de su salida es 1 solamente si todas sus entradas están en 1", "Tiene únicamente 2 entradas y una salida", "El signo que la representa es la suma", "Su respuesta es 0 si todas las entradas son 1"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cuáles son las compuertas lógicas básicas?",
    options: ["Suma, multiplicación y complemento (AND, OR, NOT)", "AND, OR, NOT, EXOR", "AND, NEGADOR, NOT, INVERSOR", "7408, 7404, 7432"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿A cuál de las siguientes compuertas corresponde una salida 1 solo cuando todas las entradas son 1? (Pregunta 10)",
    options: ["Compuerta AND", "Compuerta OR", "Compuerta NOT", "Compuerta EXOR"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cuál o cuáles de las siguientes son características de la compuerta OR?",
    options: ["La respuesta en su salida es 1 si al menos una de sus entradas es 1", "Tiene 1 sola entrada y 1 sola salida", "Su símbolo es un punto", "La salida es 1 solo si todas las entradas son 0"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cuántos valores puede tomar una variable lógica o Booleana?",
    options: ["2", "8", "10", "1"]
  },
  {
    subject: "Matemática Discreta",
    question: "Si realizamos la suma lógica de 1 + 1 en álgebra booleana, ¿Su resultado sería?",
    options: ["1", "2", "10", "0"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cuál de los siguientes enunciados NO es una propiedad del Álgebra de Boole?",
    options: ["Evolución", "Involución", "Ley de Morgan", "Idempotencia"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cuál es la ecuación booleana que representa la salida F del circuito? (Pregunta 15)",
    options: ["F = [(A × B') × (B' + A)]", "F = [(A + B') × (B' + A)]", "F = [(A × B) × (B' + A)]", "F = [(A × B') × (B' × A)]"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cómo se denomina a un dígito binario?",
    options: ["Bit", "Byte", "Megabyte", "Gigabyte"]
  },
  {
    subject: "Matemática Discreta",
    question: "Un circuito combinatorio es un circuito cuya salida depende del:",
    options: ["Valor de sus entradas", "Número de compuertas", "Tamaño del circuito", "Tipo de fuente"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Qué representan los ceros en una matriz de adyacencia?",
    options: ["Carece de relación", "Tiene relación", "Bidireccionales", "Nodos raíz"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿De qué manera NO se puede representar un grafo?",
    options: ["Una matriz rectangular", "Una matriz de incidencia", "Una lista de adyacencia", "Una matriz de adyacencia"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cómo se denomina a la arista que empieza y termina en el mismo nodo?",
    options: ["Bucle", "Vuelta", "Bidireccional", "Enlace"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Qué tipo de grafo es G si la relación (x,y) es igual a (y,x)?",
    options: ["No dirigido", "Dirigido", "Conexo", "Completo"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Para qué se utilizan los diagramas de Karnaugh?",
    options: ["Simplificar las funciones booleanas", "El diseño físico de ordenadores", "El diseño de ordenadores analógicos", "Adecuar sistemas de base mayor a dos"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cuáles son los componentes de un grafo?",
    options: ["Nodos y aristas", "Nodos y ramas", "Nodos y raíz", "Nodos y hojas"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Qué es un grafo dirigido?",
    options: ["En el que se indica su sentido de flujo", "El que no tiene sentido de flujo", "Que no tiene puntas de flecha", "Que alguien lo lleva de la mano"]
  },
  {
    subject: "Matemática Discreta",
    question: "Simplifique la siguiente función booleana: F = XYZ + X'Y + XYZ'",
    options: ["Y", "X", "X + Y", "Z"]
  },
  {
    subject: "Matemática Discreta",
    question: "Simplifique la siguiente función booleana: F = (A' + B)C + ABC",
    options: ["A'C + BC", "A'C", "BC", "C"]
  },
  {
    subject: "Matemática Discreta",
    question: "Simplifique la siguiente función booleana: F = (X + Y)(X + Y')",
    options: ["X", "Y", "X + Y", "1"]
  },
  {
    subject: "Matemática Discreta",
    question: "En un curso de 45 alumnos: 34 usan Facebook, 30 WhatsApp, 19 Twitter, 12 WA y Twitter, 11 FB y Twitter, 6 usan las tres. ¿Cuántos usan SOLAMENTE dos redes sociales?",
    options: ["26 utilizan sólo dos", "6 utilizan sólo dos", "15 utilizan sólo dos", "32 utilizan sólo dos"]
  },
  {
    subject: "Matemática Discreta",
    question: "En un Congreso de 82 especialistas: 64 en agua, 33 en atmósfera, 24 en acústica. ¿Cuántos han trabajado en agua o acústica, pero NO en atmósfera?",
    options: ["39", "40", "9", "34"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cuál de los siguientes conjuntos se está describiendo por extensión?",
    options: ["A = {a, m, i, s, t, a, d}", "A = {x/x es consonante de la palabra amistad}", "A = {tdms}", "Ninguno"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cuál es la altura del árbol mostrado en la pregunta 34?",
    options: ["3", "2", "1", "10"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿A qué compuerta lógica pertenece la tabla: 00->0, 01->1, 10->1, 11->1?",
    options: ["Compuerta OR", "Compuerta AND", "Compuerta NOT", "Compuerta NAND"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cuál es el ordenamiento pre-orden de un árbol binario?",
    options: ["Raíz, izquierda, derecha", "Izquierda, derecha, raíz", "Izquierda, raíz, derecha", "Derecha, raíz, izquierda"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cómo se denomina a un nodo hoja?",
    options: ["Todos aquellos nodos que no tienen hijos", "Todos los nodos que componen el árbol", "El primer nodo del árbol", "El nodo con más de dos hijos"]
  },
  {
    subject: "Matemática Discreta",
    question: "¿Cuál de los siguientes ejemplos representa a un grafo?",
    options: ["Red de transporte, red de carreteras, internet", "Árbol genealógico, circuitos eléctricos, matrimonio", "Decisiones, teléfonos, red de agua potable", "Ninguna de las anteriores"]
  },

  // LENGUAJE Y COMUNICACIÓN

  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Qué permite el conocimiento?",
    options: ["Transmitir las ideas con claridad.", "Transmitir observaciones con claridad.", "Enviar las lecturas con claridad.", "Reducir los diálogos con claridad."]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "La capacidad humana para comunicarse por medio de signos es:",
    options: ["Lenguaje", "Escritura", "Sonidos", "Canal"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "A el conjunto estructurado y ordenado de signos lingüisticos se denomina:",
    options: ["Lengua", "Comunicación", "Lingüística", "Mensaje"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿A qué hace referencia el conjunto estructurado y ordenado de signos lingüísticos?",
    options: ["Lengua", "Escritura", "Redacción", "Codificación"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿En dónde podemos encontrar la tipología textual?",
    options: ["Diferentes estructuras que se encuentran en un escrito", "Diferentes modelos que se encuentran en un escrito.", "Diferentes lecturas que se encuentran en un escrito.", "Diferentes textos que se encuentran en un escrito."]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Cómo se clasifica la tipología textual?",
    options: ["Según su intención comunicativa.", "Según su intención formativa.", "Según su intención explicativa.", "Según su intención dialéctica."]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "El tipo de tilde que se utiliza para diferenciar una o más palabras que se escriben igual pero tienen diferente función gramatical es:",
    options: ["Tilde diacrítica", "Tilde diafragmática", "Tilde enfática", "Tilde tácita"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Cuales son los textos que pretenden convencer al receptor de alguna idea?",
    options: ["Textos persuasivos", "Textos prescriptivos", "Textos narrativos", "Textos expositivos"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Cuales son los elementos vocales que determinan la efectividad del mensaje y la credibilidad del comunicador?",
    options: ["Entonación - velocidad - énfasis - ritmo", "Entonación - velocidad - énfasis - armonía", "Entonación - aceleración - énfasis - mimo", "Relación - velocidad - énfasis - signo"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Cual es el tipo de texto según la forma del mensaje, el que se representa mediante las características de personas, paisaje u objetos, para que otra persona los pueda imaginar?",
    options: ["Texto descriptivo", "Texto informativo", "Texto pescriptivo", "Texto persuasivo"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "La intensión de los textos persuasivos que según la intensión comunicativa es:",
    options: ["Pretender convencer al receptor de alguna idea.", "Pretender establecer al emisor de alguna idea.", "Pretender convencer al emisor de alguna idea.", "Pretender convencer al emisor de alguna tarea."]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "La inteligencia como uno de los factores del rendimiento académico, permite predecir:",
    options: ["Diferentes posibilidades de aprendizaje.", "Diferentes posibilidades de entendimiento.", "Diferentes posibilidades de comprensión.", "Diferentes posibilidades de inteligencia."]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "Grabar los conocimientos en la memoria para retener y recordar es posible a través de:",
    options: ["Sentidos", "Sentimientos", "Sensaciones", "Secciones"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "Los tipos de memoria según el tiempo se clasifican en:",
    options: ["Largo plazo", "Mediano plazo", "Extenso plazo", "Inmerso plazo"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Qué utiliza la memoria Kinestésica?",
    options: ["Memoria muscular", "Memorización de los cuerpos", "Memoria vascular", "Memoria de mobilidad"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Cual es una de las técnicas para potenciar la memoria?",
    options: ["Fijar y evocar", "Potenciar y fijar", "Establecer y evocar", "Experimentar y evocar"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Cual es la técnica que se aconseja a los estudiantes que se sienten nerviosos y preocupados?",
    options: ["Técnica de relajación", "Técnica de manipulación", "Técnica de audición", "Técnica de motivación"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Cual de las siguientes opciones no corresponde a la fase del método de estudio?",
    options: ["Técnica del subrayado", "Lectura comprensiva", "Pre análisis", "Notas al margen"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Cuántas palabras debe tener la cita textual para que se deba dejar sangria en ambos márgenes del texto y sin comillas?",
    options: ["40", "10", "20", "30"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Que señalan las normas convencionales y éticas, y también las de la APA, para que todo lo que no sea propio de los investigadores debe ser... señalando al autor y el año?",
    options: ["Citado - bibliografía", "Evaluado - referencia", "Sintetizado - revista", "Redactado - referencia"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Qué es una cita?",
    options: ["Incluir en una obre o trabajo un texto ajeno ya publicado.", "Listas que aparecen al inicio de los trabajos mediante los cuales se detallan las fuentes recurridas.", "Incluir en una obra o trabajo los documentos de comunicación personal.", "Listas que aparecen al final de los trabajos mediante los cuales se detallan las fuentes recurridas."]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿A qué concepto pertenece esta definición: Son un conjunto de datos que identifican las fuentes a las que se acude al realizar una investigación?",
    options: ["Referencias bibliográficas", "Tesis", "Blog", "Texto científico"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Qué se debe hacer con los trabajos que no son de su autoria y que los ha utilizado para reforzar su proyecto?",
    options: ["Citado y colocarlo en bibliografía", "Evaluado y referenciado", "Sintetizado y revisado", "Redactado y referenciado"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿A qué concepto pertenece esta definición: Expresar por medio de la palabra escrita cosas sucedidas, acordadas o pensadas?",
    options: ["Redactar", "Cita bibliográfica", "Texto científico", "Resumen"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿En qué tipo de textos se exponen conocimientos cientificos de manera ligera, amena y al alcance de cualquier persona?",
    options: ["Texto científico de divulgación", "Ensayo", "Texto científico didáctico", "Texto científico consulta"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Cómo se conoce al tipo de textos que presenta las diversas áreas de conocimiento de forma organizada, de manera general o especializada?",
    options: ["Texto científico de consulta", "Síntesis", "Resumen", "Texto científico de divulgación"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Cuál de los siguientes enunciados, no es una característica del texto científico divulgación?",
    options: ["Trata temas específicos.", "El conocimiento científico que expone es ameno, ligero y sencillo.", "Trata temas diversos.", "Está dirigido a un público de cultura e intereses generales."]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿En qué tipo de textos se presentan los conocimientos científicos explicados de manera gradual y sistemática para facilitar el aprendizaje?",
    options: ["Texto científico didáctico", "Ensayo", "Texto científico de consulta", "Texto científico de divulgación"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿A qué concepto pertenece esta definición: extracto que rescata el contenido de un texto... escribiendo éstas con nuestras palabras y agregando opiniones?",
    options: ["Síntesis", "Resumen", "Cita bibliográfica", "Parafrasis"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Qué se incluye en el desarrollo de un ensayo?",
    options: ["Los argumentos con el propósito de confirmar o de rebatir la tesis.", "Los motivos que orillaron al autor a interesarse por cierta temática.", "La opinión que el autor tiene respecto a un tema.", "La opinión que el lector tiene respecto a un tema."]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "Los elernentos que comprende la estructura del ensayo son:",
    options: ["Introducción, desarrollo y conclusión.", "Inicio, desarrollo y cierre.", "Inicio, desarrollo, nudo y cierre.", "Inicio, nudo y desenlace."]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "De las siguientes aseveraciones, ¿Cuál de ellas define el ensayo?",
    options: ["Un texto en el que el escritor no oculta su subjetividad, lo que permite cuestionar o revisar puntos de vistas.", "Un texto nuevo que presenta la información de manera concreta, resumida y objetiva.", "Un escrito que indica la comprensión de las ideas contenidas en un documento original.", "Un escrito que indica la comprensión de las ideas estructuradas en un documento."]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Qué tipo de comunicación es un discurso dado en un auditorio?",
    options: ["Unilateral", "Activa", "Multilateral", "Bilateral"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Qué tipo de comunicación hay entre un grupo de personas que conversan y hacen intercambio de mensajes?",
    options: ["Bilateral", "Activa", "Unilateral", "Multilateral"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Qué tipo de redacción es un articulo de revista sobre una investigación de corte politico?",
    options: ["Periodística", "Académica", "Literaria", "Comercial"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "La función metalingüística del lenguaje hace referencia al:",
    options: ["Código", "Emisor", "Receptor", "Mensaje"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "La función fática del lenguaje hace referencia al:",
    options: ["Canal", "Emisor", "Receptor", "Contexto"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Cuál de las siguientes opciones de fuente NO es permitida por las normas APA?",
    options: ["Courier de 12 puntos", "Calibri de 11 puntos", "Arial de 11 puntos", "Times New Roman de 12 puntos"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "¿Cuál de las siguientes opciones de fuente es recomendada por las normas APA para presentar código de computadora?",
    options: ["Courier New de 10 puntos", "Calibri de 11 puntos", "Georgia de 11 puntos", "Computer Modern normal de 10 puntos"]
  },
  {
    subject: "LENGUAJE Y COMUNICACIÓN",
    question: "Como formuló Ferdinand de Saussure, el lenguaje es una ______ común a todos; y la lengua, un ______ de la facultad del lenguaje.",
    options: ["Facultad, producto social", "Habilidad, invento", "Característica, derivado", "Estrategia, producto social"]
  },

  //LEGISLACIÓN INFORMÁTICA

  
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿Dónde se da origen a los Fundamentos del Derecho Actual?",
    options: ["A través de los Romanos y los XII tablas", "A través de los egipcios", "A través de Sumerios", "A través de la costumbre y sentido moral"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "La palabra derecho proviene del vocablo",
    options: ["Latino DIRECTUM", "Romano DIRECTUM", "Griego DIRECTUM", "Sumerio DIRECTUM"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿Qué es un ciberdelito?",
    options: ["Todo delito que se comete por medios electrónicos, informáticos y computacionales para causar daño a terceros", "Delitos que se cometen a través de una computadora con fines de daño informático", "Todo delito que se comete con fines dolosos y de maldad", "Delitos que se cometen a través de una computadora con fines maliciosos"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿En qué cuerpo legal se encuentran establecidos los ciberdelitos?",
    options: ["En el COIP Código Orgánico Integral Penal", "La Constitución de la República del Ecuador", "Código Administrativo", "En el Código Civil"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "Las siglas SENADI corresponden a:",
    options: ["Servicio Nacional de Derechos Intelectuales", "Servicio Nacional de Derechos Internacionales", "Servicio Nacional de Derechos y Patentes", "Servicio Nacional de Derechos Industriales"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿Cuánto dura la protección de una Patente?",
    options: ["20 años", "5 años", "10 años", "15 años"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "La definición de derecho informático establece que:",
    options: ["El derecho informático se refiere a los problemas jurídicos que se originan en la sociedad por el uso de las computadoras", "Es el conjunto de normas sancionadoras por el mal manejo de los sistemas informáticos", "El Derecho informático es el estudio de los delitos ocasionados por los usuarios", "Derecho informático es el conjunto de normas computacionales para el adecuado uso de las redes"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿Qué es el Comercio Electrónico?",
    options: ["Es el comercio en línea, consiste en la compra y venta de productos o de servicios a través de medios electrónicos, tales como redes sociales y otras páginas web", "Es el Comercio en línea, consiste en la compra y venta de productos a través de medios electrónicos", "El comercio en línea, consiste en la compra y venta de servicios a través de medios electrónicos", "Venta de productos únicamente por redes sociales"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿La práctica del comercio electrónico en Ecuador comenzó a principios de los años?",
    options: ["1980", "1970", "1990", "1960"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "A mediados de 1980, surgió una nueva forma de venta por catálogo con ayuda de la televisión llamada:",
    options: ["Venta Directa", "Venta Dinámica", "Venta On line", "Venta Televisiva"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "Según el Art. 11 de la Constitución, los principios rectores de los derechos fundamentales son:",
    options: ["Igualdad, directa e inmediata aplicación, inclusión, gratuidad y transparencia", "Igualdad, inclusión, gratuidad y transparencia", "Igualdad, directa e inmediata inclusión y transparencia", "Igualdad, directa e inmediata aplicación, inclusión y transparencia"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "El acceso a la información pública debe ser concebido por los ecuatorianos como:",
    options: ["Derecho fundamental y deber social", "Deber estatal", "Derecho fundamental", "Deber social"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "El SENADI es el organismo administrativo competente para:",
    options: ["Propiciar, promover, fomentar, prevenir, proteger y defender a nombre del Estado Ecuatoriano los derechos de propiedad intelectual", "Propiciar, promover, fomentar, prevenir, proteger y defender los derechos de propiedad intelectual", "Defender en nombre del Estado ecuatoriano los derechos de propiedad intelectual", "Registrar marcas únicamente"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿Qué tipo de protección ofrece una Patente?",
    options: ["Una invención no se puede producir, usar, distribuir con fines comerciales, ni tampoco vender, sin el consentimiento del titular", "No se puede producir ni vender nada sin consentimiento", "Solo prohíbe la distribución comercial", "Prohíbe la fabricación pero permite el uso"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "Las marcas son derechos de:",
    options: ["Propiedad Intelectual Protegidos", "De invención protegidos", "Propiedad de Creación protegidos", "Propiedad del Autor"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿Cuánto dura la protección de una Marca?",
    options: ["Varia pero normalmente es 10 años", "5 años generalmente", "Varia y generalmente es 9 años", "Normalmente es de 8 años"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿El acceso a los Registros de Datos Públicos solo será posible a través de?",
    options: ["Autorización del Titular, por mandato de ley u orden judicial", "Por simple autorización judicial", "Información entre entidades privadas", "Autorización del Titular de dicha información"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿Qué regula el Sistema Nacional de Registros de Datos Públicos?",
    options: ["Información entre entidades públicas, o en las privadas que manejen fondos del Estado o realicen funciones públicas", "Información de todos los ciudadanos naturales y jurídicos a nivel nacional", "Información entre entidades públicas y privadas que realicen funciones públicas", "Registros de propiedad únicamente"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿Qué es una licencia de Software?",
    options: ["Contrato entre el desarrollador de un software sometido a propiedad intelectual y a derechos de autor y el usuario", "Contrato simple entre desarrollador y usuario", "Contrato para obtener la propiedad intelectual", "Documento de compra de un programa"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿Qué es la piratería de software?",
    options: ["Copiar ilegalmente programas, falsificar y distribuir software, incluso compartir un programa con un amigo", "Copiar ilegalmente programas", "Falsificar ilegalmente programas", "Compartir software con amigos"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿Qué es la falsificación de software?",
    options: ["Duplicación y distribución a gran escala de software copiado ilegalmente", "Distribución a gran escala de software copiado ilegalmente", "Duplicación y distribución de software copiado ilegalmente", "Compartir software con amigos de forma masiva"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿Qué tipo de licencia de software es de uso en Ecuador?",
    options: ["Software Libre", "Software de dominio público", "Software semi-libre", "Software multilicencia"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿Qué es la calumnia?",
    options: ["La imputación falsa de un delito", "La imputación de insultos en redes", "El falso argumento sobre una persona", "La falsa imputación de hechos a través de insultos"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿Cuál es el orden jerárquico de las leyes según el art. 425 de la Constitución?",
    options: ["La Constitución; los tratados y convenios internacionales; las leyes orgánicas, las leyes ordinarias; las normas regionales...", "La Constitución; las leyes orgánicas, las leyes ordinarias; las normas regionales...", "La Constitución; tratados internacionales; leyes orgánicas; decretos y reglamentos", "Tratados internacionales; Constitución; Leyes orgánicas"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿Qué son los delitos informáticos?",
    options: ["Afectan la información y al dato como bienes jurídicos protegidos (ej. cuentas de correo)", "Delitos tradicionales con implementación de tecnología (robo, estafa)", "Instrumentos informáticos para ciberterrorismo", "Delitos cometidos solo por hackers"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "¿Qué iniciativa crearon los países del G7/G8 en 1995?",
    options: ["Un Mercado Global para Pequeñas y Medianas Empresas", "Grandes y Medianas Empresas", "Para Empresas en General", "Para las grandes empresas de los países"]
  },
  {
    subject: "LEGISLACIÓN INFORMÁTICA",
    question: "El SENADI protege 3 ramas de la propiedad intelectual, estas son:",
    options: ["Industrial, Autor y Vegetal", "Industrial, Creación y Vegetal", "Industrial, Autor y Agrícola", "Industrial y de Autor"]
  },

  //INTRODUCCIÓN AL DESARROLLO DE SOFTWARE

  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "El conjunto pre-escrito de instrucciones o reglas bien definidas, ordenadas y finitas que permite realizar una actividad mediante pasos sucesivos que no generen dudas a quien deba realizar dicha actividad, se conoce como:",
    options: ["Desarrollo de lógica algoritmica", "Desarrollo de problemas", "Desarrollo de software", "Desarrollo de razonamiento lógico"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Analice y seleccione los elementos que corresponde según el enunciado. Las fases de un algoritmo son: 1. Entrada, 2. Variables, 3. Proceso, 4. Salida, 5. Retroalimentación",
    options: ["1,3,4", "1,2,5", "1,2,4", "2,3,4"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Relacione las columnas sobre las propiedades de un algoritmo con su descripción: 1.FINITUD (c. Número finito de pasos), 2.EFECTIVIDAD (b. Las operaciones para realizar deben ser lo más básicas posibles).",
    options: ["1c, 2b", "1b, 2c", "1c, 2a", "1a, 2b"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "El símbolo que representa un proceso en los diagramas de flujo es:",
    options: ["Un rectángulo", "Un rombo", "Un ovalo", "Un paralelogramo"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Son considerados como otra forma de representar algoritmos distinta al pseudocódigo y permite representar de forma gráfica (esquemática) un algoritmo a través de símbolos:",
    options: ["Diagrama de flujo", "Desarrollo de problemas", "Desarrollo de software", "Desarrollo de lógica algoritmica"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "En los diagramas de flujo, su representación gráfica es una serie determinada de figuras:",
    options: ["Geométricas", "Circulares", "Arquitectónicas", "Tridimencionales"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "En los diagramas de flujo, son las acciones que permiten transformar las entradas (insumos o datos) en otros datos o productos:",
    options: ["Procesos", "Entradas", "Salidas", "Decisiones"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Analice y seleccione las aplicaciones que son software libre: 1.LIGHTWORKS, 2.REALPLAYER, 3.GEDIT, 4.BING, 5.LIBREOFFICE",
    options: ["3, 5", "1, 2, 5", "2, 3, 5", "1, 3, 4"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "En un diagrama de contexto, ¿qué símbolo no se grafica?",
    options: ["Almacenamiento de datos", "Entidad Externa", "Flujo de Datos", "Proceso"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Concerniente a los DFD, seleccione el enunciado correcto:",
    options: ["Es una técnica de análisis estructurado que permite diseñar o construir una representación gráfica de los procesos de datos a través de la organización.", "Es una técnica de diseño estructurado que permite construir una representación gráfica de los procesos de datos a través de la organización.", "Es una técnica de análisis estructurado que permite definir la gestión de la organización.", "Ninguna de las anteriores"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Analice y seleccione las características o definiciones concernientes al DFD lógico: 1. Actividades de la organización, 2. Facilita comunicación con usuarios, 4. Proceso de alto nivel.",
    options: ["1, 2 y 4", "1, 2 y 5", "1, 3, 4", "2, 3 y 4"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "En los DFD, el analista usa la combinación de cuatro símbolos que son:",
    options: ["Entidad externa, flujo de datos, proceso, almacén de datos.", "Entidad externa, flujo de control, proceso, colecciones.", "Entidad externa, flujo de datos, condicional, colección de datos.", "Entidad externa, iteración de datos, proceso, colección de datos."]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Analice y seleccione las características de un sistema operativo: 1. Controlar E/S, 3. Maximizar rendimiento, 5. Asignación de memoria.",
    options: ["1, 3 y 5", "1, 4 y 5", "2, 3 y 5", "1, 2 y 5"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "¿Qué DFD analiza cómo se implementará el sistema, incluyendo hardware, software, archivos y personas?",
    options: ["Fisico", "Lógico", "Red", "Ninguna de las anteriores"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "¿Qué DFD se enfoca en la empresa, sus actividades de negocios y no en la forma en que se construirá el sistema?",
    options: ["Lógico", "Red", "Fisico", "Ninguna de las anteriores"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "El diagrama de contexto es un caso especial del DFD, donde una sola burbuja representa:",
    options: ["Todo el sistema", "Un solo proceso", "La mitad de una consulta", "Parte del sistema"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Son las fuentes y destinos de la información que entra o sale del sistema:",
    options: ["Entidad externa", "Entidad interna", "Flujo de datos", "Almacenamiento de datos"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "En DFD, el símbolo que tiene forma rectangular se denomina:",
    options: ["Entidad externa", "Proceso de datos", "Entrada de datos", "Salida de datos"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Los flujos de datos que representan la alteración de datos de un almacén por creación, eliminación o modificación se denominan:",
    options: ["Flujo de actualización", "Flujo de consulta", "Flujo de diálogo", "Inicio"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Cuando los electrones fluyen constantemente en una sola dirección se considera:",
    options: ["Corriente continua", "Corriente alterna", "Capacitores", "Corriente monofásica"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Cuando la dirección del flujo de electrones va y viene a intervalos regulares o en ciclos se denomina:",
    options: ["Corriente alterna", "Corriente continua", "Circuitos integrados", "Corriente trifásica"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "La mejor manera de transmitir electricidad a grandes distancias es a través de:",
    options: ["Corriente alterna", "Corriente continua", "Corriente monofásica", "Corriente trifásica"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "A las deformaciones de las señales que no son deseables y se producen de manera arbitraria se les denomina:",
    options: ["Ruido", "Corriente alterna", "Corriente continua", "Circuitos integrados"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Los motores eléctricos son:",
    options: ["Maquinas eléctricas rotatorias", "Maquinas manuales", "Máquinas a inyecciones", "Máquina térmica"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "¿Qué tipo de filosofía distingue a Arduino de otras plataformas?",
    options: ["Open Source", "Código cerrado", "Software propietario", "Bajo licencias"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "¿Cómo se llama el lenguaje de programación que permite controlar los procesos en un microcontrolador (Arduino)?",
    options: ["Wiring", "Lenguaje C", "Python", "Java"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "El elemento electrónico que está conformado de una pastilla o chip muy delgado se llama:",
    options: ["Circuito integrado", "Diodo", "Resistencia", "Capacitor"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Usando la ley de Ohm, para obtener la resistencia equivalente de R1=8 y R2=4 en serie, el valor sería:",
    options: ["12", "120", "80", "110"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Se tiene dos resistencias en paralelo, R1=8 y R2=7. ¿Cuál es el resultado de la resistencia total?",
    options: ["3.73", "160", "150", "170"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Se tiene 4 resistencias en serie R1=3, R2=5, R3=9, R4=3. ¿Cuál es el valor de la resistencia total?",
    options: ["20", "10", "190", "210"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Los módulos fabricados por terceros que se pueden apilar encima de la placa Arduino se llaman:",
    options: ["Shields", "Tarjetas de extensión", "Arduino uno", "Mega"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "La tarjeta que se usa para conexiones infrarrojas a distancias cortas es:",
    options: ["BLUETOOTH SHIELD", "CELULAR SHIELD", "MOTOR SHIELD", "LCD SHIELD"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "En Arduino, el tipo de programación que representa cajas de funciones y elementos como instrucciones y variables es:",
    options: ["Programación gráfica", "Programación basada en bloques", "Programación funcional", "Programación orientada a objetos"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Se ocupan de convertir en señales eléctricas la información procedente del mundo exterior:",
    options: ["Los circuitos electrónicos", "Ruido térmico", "Lenguaje de programación", "El ruido"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "En cuanto a Arquitecturas Orientadas a Servicios (SOA) tenemos como opción a:",
    options: ["SOAP", "RETS", "JMTR", "SOA (Arquitectura)"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "Permite el intercambio de datos de tipo XML:",
    options: ["SOAP", "CLOUD", "MICROSERVICIO", "REST"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "La colección de principios y técnicas para el desarrollo de software (en el contexto de la pregunta 37) se denomina:",
    options: ["REST", "API", "MACHINE LEARNING", "CIUDADES INTELIGENTES"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "¿A qué opción se le atribuyen las propiedades de escalabilidad, rendimiento y seguridad?",
    options: ["REST", "REST (SIN ESTADOS)", "REST (INTERFAZ UNIFORME)", "REST (TRABAJO EN CAPAS)"]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "¿Cuáles son las ventajas de los lenguajes de programación orientados a objetos?",
    options: ["Fomentar la reutilización de código, permite crear sistemas complejos, facilita el trabajo en equipo.", "Son más económicos.", "Facilitar la detección de errores en funciones.", "Utilizar bloques de código GOTO."]
  },
  {
    subject: "INTRODUCCIÓN AL DESARROLLO DE SOFTWARE",
    question: "¿Cuáles son los periféricos más comunes encontrados en una computadora personal?",
    options: ["Teclado, Mouse, parlantes, impresora.", "Tarjeta de video Nvidia, bateria R2032.", "Disco SSD y disco duro.", "Procesador, memoria RAM."]
  },

  //FUNDAMENTOS DE PROGRAMACIÓN

  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Cuántos valores de retorno puede llegar a tener una función?",
    options: ["Uno", "Ninguno", "Los que sean necesarios", "Unicamente dos"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Cuál es el componente necesario en las estructuras de control para incrementar o decrementar valores en las iteraciones?",
    options: ["Contadores", "Acumuladores", "Variables", "Constantes"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Cuáles son los elementos, en su respectivo orden, de la estructura FOR para realizar repeticiones?",
    options: ["Inicio, limite, contador", "Contador, Limite, Inicio", "Limite, Contador, Inicio", "Contador, Inicio, Limite"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Cuál es la diferencia básica entre una Pila y una Cola?",
    options: ["En una Pila, el último elemento en entrar es el primero en salir (LIFO). Mientras que en una Cola, el primer elemento en entrar es el primero en salir (FIFO).", "En una cola, el último elemento en entrar es el primer en salir (LIFO) Mientras que en una Pila, el primer elemento en entrar es el primer en salir (FIFO).", "En una pila se puede insertar y quitar pero en las colas no.", "En una Pila, tanto como en una Cola se utiliza el método (PROMEDIO)."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Cuál es la colección de datos en la que sus elementos no pueden repetirse?",
    options: ["Conjuntos", "Diccionarios", "Pilas", "Colas"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿En qué colecciones se utiliza las llaves { para definir como tal en un programa?",
    options: ["Dicionarios y Conjuntos", "Pilas y Dicionarios", "Tuplas y Pilas", "Tuplas y Conjuntos"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Qué método aplicaria para encontrar la posición de un elemento en una colección de datos?",
    options: ["Index()", "Count()", "Input()", "Append()"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Qué método podemos utilizar para eliminar el último elemento de una pila?",
    options: ["Pop()", "Del()", "Popleft()", "Append()"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Qué elemento se utiliza en el código \"factorial = factorial * i\"?",
    options: ["Acumulador", "Contador", "Pila", "Arreglo"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Cuál es la función que permite que presentar datos por pantalla?",
    options: ["Print", "Read", "End", "Input"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Cuál es la función que permite la entrada de datos en un programa?",
    options: ["Input", "Print", "If", "End"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Cuál de las siguientes estructuras se ejecuta al menos una vez, si no se cumple la condición?",
    options: ["Do while", "While", "For", "Ninguna de las anteriores"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Cuál es la principal caracteristica de una tupla?",
    options: ["Es inmutable es decir, no puede cambiar", "Es una colección desordenada", "Es mutable", "Recibe elementos después del último elemento"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Cuántas veces debo aplicar el método pop() si utilizó una pila con cinco elementos y quiero eliminar el tercer elemento?",
    options: ["Tres veces", "Una sola vez", "Dos veces", "Ninguna vez"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Cuántas veces se repite el ciclo en un while si tengo la condición n<=10, n se inicia n=1 y se incrementa de dos en dos?",
    options: ["Cinco veces", "Cuatro veces", "Diez veces", "Seis veces"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Para qué sirve el método append (item) en una lista?",
    options: ["Añadir un nuevo ítem al final de la lista.", "Añadir un nuevo ítem al principio de la lista.", "Añadir un nuevo ítem a la mitad de la lista.", "Añadir un nuevo ítem en una posición aleatoria."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "La sentencia condicional If sirve para permitir o no la ejecución de un bloque de código. ¿cómo evalua este if una expresión lógica?",
    options: ["Si el resultado de esa expresión es True, entonces si se ejecuta el bloque de código.", "Si el resultado de esa expresión es False, entonces no se ejecuta el bloque de código.", "Si el resultado de esa expresión es False, entonces si se ejecuta el bloque de código.", "Si el resultado de esa expresión es True, entonces no se ejecuta el bloque de código."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿De qué condición se habla cuando decimos que una función recursiva es una función que se llama a si misma y puede llegar a actuar como una iteración, pero tiene una condición de parada?",
    options: ["De que en algún momento la función deje de llamarse a si misma.", "De que en algún momento la función deje de retornar valores de si misma.", "De que en algún momento la función se elimine.", "De que en algún momento la función se autorepare."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Qué tipos de datos se manejan en programación?",
    options: ["Cadena, Boleano, Carácter, Números, Alfanumérico, Entero", "Tipo Java, C++, Smalltalk, Python, Object Pascal", "Variables, Contadores, Acumuladores", "Simbólicos, de estructura, de cadena"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Qué es un intérprete?",
    options: ["Es un programa informático capaz de analizar y ejecutar otros programas, escritos en un lenguaje de alto nivel.", "Es un programa que transforma código fuente escrito en código neutral de máquina.", "Es un atributo de una parte de los datos que indica al ordenador la clase de datos.", "Es un entorno de desarrollo integrado libre."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Qué es un código en programación?",
    options: ["Es un conjunto de instrucciones que son redactadas por un usuario en un IDE de programación.", "Es un lenguaje artificial e informal útil para el desarrollo de algoritmos.", "Es un método o procedimiento definido para resolver un problema.", "Es un compilador estable y potente."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Cuáles son los operadores que nos permiten evaluar las relaciones (igualdad, mayor, menor, etc) entre un par de operandos?",
    options: ["Operadores relacionales", "Operadores lógicos", "Operadores aritméticos", "Operadores de función"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Para qué se utilizan las operaciones lógicas en la programación?",
    options: ["Agrupar, excluir y negar expresiones.", "Sumar, restar, multiplicar y dividir datos.", "Calcular operaciones estadisticas de datos.", "Agregar, modificar y eliminar datos de una lista."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Qué devuelve la expresion Not True?",
    options: ["False", "True", "Not True", "Not False"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Qué elemento no me sirve para anidar una expresión lógica?",
    options: ["Mayor que", "And", "Or", "Not"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Qué función cumplen los operadores de asignación?",
    options: ["Actúan directamente sobre la variable actual modificando su valor.", "Solo actúan sobre la variable si el valor es un numero entero.", "Solo actúan sobre la variable si el valor es un numero decimal.", "Solo actúan sobre la variable si el valor es un carácter."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Cómo se denomina una condición if dentro de otra condición if?",
    options: ["Condición anidada", "Condición múltiple", "Condición simple", "Condición compuesta"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Qué función cumple la sentencia else?",
    options: ["Se encadena a un If para comprobar el caso contrario (en el que no se cumple la condición)", "Es una sentencia independiente del if", "Se utiliza para reemplzar a la sentencia if", "No forma parte de una estructura selectiva"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Qué función cumple la sentencia elif (también conocido como else if)?",
    options: ["Se encadena a un if para comprobar múltiples condiciones, siempre que las anteriores no se ejecuten.", "Se encadena a un if para comprobar múltiples condiciones, siempre que las anteriores si se ejecuten.", "Es una sentencia independiente del if", "Se utiliza para reemplazar a la sentencia if."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Qué es una función en programación?",
    options: ["Es un bloque de código con un nombre asociado, que recibe cero o más argumentos, ejecuta una operación y devuelve un valor.", "Es una lína de código que recibe argumentos y ejecuta todo el código al mismo tiempo.", "Es un ciclo que se repite en base al número de veces que el usuario indique.", "Añadir un nuevo ítem en una posicion aleatoria."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Cuál es una ventaja del uso de funciones?",
    options: ["Reutilización", "Modularización", "Multiparadigma", "Multiplataformas"]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "En los fundamentos de programación, ¿Cuál es la diferencia básica argumento y parámetro?",
    options: ["El parámetro es la parte de la función que solicita al usuario datos, el argumento es cuando se usa el parámetro.", "El parámetro es la parte de la función que la finaliza, el argumento es cuando se usa el parámetro.", "El parámetro es la parte de la función que solicita datos, el argumento finaliza la función.", "El parámetro es la parte de la función que llama al usuario, el argumento es cuando se devuelven datos."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Qué sucede con una función recursiva que tiene una condición que si no cumple, puede dar lugar a un bucle infinito?",
    options: ["Siempre se estara ejecutando.", "Dejara de retornar valores de sí misma.", "En algún momento dejara de llamarse a sí misma.", "En algún momento se autoreparará."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Qué se necesita para invocar a una función?",
    options: ["Indicar el nombre de nuestra función.", "Conocer el IDE en que se va a ejecutar.", "Conocer las variables que procesa la función.", "Tener el argumento y el retorno de la función."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "De las siguientes aseveraciones, ¿Cuál corresponde a un objetivo de una función?",
    options: ["Dividir y organizar el código en partes más sencillas.", "Unificar todo el código para eviar la reutilización del mismo.", "Unificar el código para no eviar la reutilización del mismo.", "Generar código en la programación."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Qué indica el uso de los paréntesis en la construcción de una expresión anidada en programación?",
    options: ["Una operación que tiene que ejecutarse con prioridad.", "Una operación que siempre se ejecuta en orden aleatorio.", "Una operación a ejecutarse cuando se pueda.", "Una operación que siempre se ejecuta en orden secuencial."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Para qué sirve el método insert (item) en una lista?",
    options: ["Añadir un nuevo ítem en el indice especificado.", "Añadir un nuevo ítem al principio de la lista.", "Añadir un nuevo ítem al final de la lista.", "Añadir un nuevo ítem a la mitad de la lista."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Para qué sirve el método Sort() en una lista?",
    options: ["Ordena los valores de la lista de forma ascendente por defecto.", "Elimina un item en el indice especificado.", "Ordena los valores de la lista de forma descendente por defecto.", "Añadir un nuevo ítem en el indice especificado."]
  },
  {
    subject: "FUNDAMENTOS DE PROGRAMACIÓN",
    question: "¿Cuál es la diferencia entre las estructuras while y do While?",
    options: ["While coloca la condición al principio de la estructura y realiza las instrucciones; el do while realiza las instrucciones al principio de la estructura y coloca la condición al final.", "While realiza las instrucciones al principio y coloca la condición al final; el do while coloca la condición al principio.", "While realiza las instrucciones al principio del programa; el do while coloca la condición al principio.", "While coloca la condición al principio del programa y realiza las instrucciones; el do while realiza las instrucciones al principio."]
  },

  //FUNDAMENTOS DE ADMINISTRACIÓN

  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Qué tipo de empresa según el tamaño y según el destino de los beneficios corresponde, una Fundación de ayuda a los sectores marginales de la ciudad cuenta con una sucursal en cada ciudad del país?",
    options: ["Grande / Sin fines de lucro", "Pequeña / Con fines de lucro", "Grande / Con fines de lucro", "Pequeña / Sin fines de lucro"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cómo debe ser una empresa/organización en la que sus empleados cumplen con los objetivos establecidos por la alta gerencia de acuerdo con su desempeño?",
    options: ["Eficaz", "Eficiente", "Dinámica", "Efectiva"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Qué tipo de líder es un empleado que labora en el área de producción que tiene influencia sobre el personal, los reúne para formar un sindicato?",
    options: ["Informal negativo", "Informal positivo", "Formal negativo", "Formal positivo"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cuáles son las fases del proceso administrativo?",
    options: ["Mecánica / Dinámica", "Dinámica / Planeación", "Dinámica / Mecánica", "Mecánica / Organización"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿En qué etapa del proceso administrativo se elabora el cronograma de actividades que se deben ejecutar en los proyectos reto?",
    options: ["Planeación", "Dirección", "Organización", "Control"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Qué habilidad deben tener desarrollada los empleados de una empresa que se encuentran en el nivel táctico de la administración?",
    options: ["Humana", "Conceptual", "Técnica", "Psicológica"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿En qué tiempo se ejecutan los planes estratégicos de una empresa?",
    options: ["Largo plazo", "Corto plazo", "Plazo fijo", "Mediano plazo"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿En qué etapa del proceso administrativo se realiza la división de trabajo de las actividades a ejecutar?",
    options: ["Organización", "Control", "Planeación", "Dirección"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿En qué etapa del proceso administrativo se fijan los indicadores que sirven para medir el cumplimiento de las actividades y objetivos planteados en una empresa?",
    options: ["Control", "Planeación", "Organización", "Dirección"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cuál es el orden de los pasos para la constitución de una empresa?: a) Elaborar minuta, b) Inscripción en registros públicos, c) Identificación de razón social y d) testimonio de constitución notarial.",
    options: ["c), a), d) y b)", "a), c), d) y b)", "a), c), b) y d)", "c), d), b) y c)"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "Relacione las fases con las etapas del proceso administrativo: 1. Mecánica o estructural, 2. Dinámica u Operativa. Etapas: a. Control, b. Organización, c. Dirección, d. Planeación.",
    options: ["1bd, 2ac", "1ac, 2bd", "1bc, 2ad", "1ad, 2cb"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cuál es el principio del control que es la respuesta al principio de delegación?",
    options: ["Del carácter administrativo", "De los estándares", "Del carácter medial", "De la excepción"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Qué dirige la alta dirección de una empresa?",
    options: ["La compañía", "La planta", "Las divisiones", "Los departamentos"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cuáles son los estudios de factibilidad de un proyecto?",
    options: ["b), c), e) y f) [Técnico, Organizacional, Mercado, Financiero]", "a), b), c) y f)", "b), c), d) y f)", "a), b), d) y f)"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cuáles son los aspectos básicos en los que se apoya la factibilidad de un proyecto?",
    options: ["Económico, Operativo, Técnico", "Económico, Operativo, Mercado", "Operativo, Organización, Técnico", "Operativo, Organización, Mercado"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "Los softwares que se producen en un mercado son 500 unidades y se requieren 400 unidades. ¿Cuál es la cantidad demandada en el mercado?",
    options: ["400 unidades", "500 unidades", "900 unidades", "100 unidades"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "Si en el mercado de desarrollo de software se requieren 1500 software y se ofertan 1800 software. ¿Cuál es la demanda insatisfecha, ingresaría al mercado?",
    options: ["(-) 300 / No ingresaría al mercado", "(-) 300 / Si ingresaría al mercado", "300 / Si ingresaría al mercado", "300 / No ingresaría al mercado"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cuál de las siguientes aseveraciones corresponde al objetivo del estudio de factibilidad de mercado?",
    options: ["Determinar la demanda insatisfecha", "Establecer la estructura organizacional", "Establecer el tamaño del proyecto", "Determinar la rentabilidad del proyecto"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cuáles son los componentes del estudio de factibilidad de Mercado?",
    options: ["Demanda, Oferta, Producto", "Flujo de inversión, Flujo operativo, Flujo financiero", "Localización, procesos, tamaño", "Organización del trabajo, funciones, cargos"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cuál es el objetivo del estudio de factibilidad Organizacional/Administrativa de un proyecto?",
    options: ["Establecer la estructura organizacional", "Determinar la demanda insatisfecha", "Establecer el tamaño del proyecto", "Determinar la rentabilidad del proyecto"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cuáles son los componentes del estudio de factibilidad organizacional?",
    options: ["Organización del trabajo, funciones, cargos, formas de constitución", "Flujo de inversión, Flujo operativo, Flujo financiero", "Localización, procesos, tamaño", "Demanda, Oferta, Producto"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Qué información muestra el organigrama de una empresa?",
    options: ["b) y d) [Niveles jerárquicos y Áreas funcionales]", "a) y b)", "a) y d)", "b) y c)"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cuál es el objetivo del estudio de factibilidad financiera de un proyecto?",
    options: ["Determinar la rentabilidad del proyecto", "Establecer la estructura organizacional", "Determinar la demanda insatisfecha", "Establecer el tamaño del proyecto"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cuáles son los componentes del flujo de inversión de un proyecto?",
    options: ["Activos fijos, Capital de trabajo, Préstamos", "Capital de trabajo, Depreciación, Préstamos", "Activos fijos, Préstamos, Ingresos", "Costos, Capital de trabajo, Activos fijos"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cómo se calcula y cuándo se paga el décimo tercer sueldo?",
    options: ["Total ganado dividido para 12 / mensual o anual", "Total ganado dividido / mensual o anual", "Total ganado dividido / anual", "Sueldo dividido para 12 / mensual o anual"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cuáles son los rubros que pertenecen al flujo operativo? a) Ingresos, b) Mobiliario, c) Amortización, d) intereses, e) Capital de trabajo",
    options: ["a), c) y d)", "a), b) y c)", "b), d) y e)", "a), c) y e)"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿En qué fase/etapa del proceso administrativo se establecen los objetivos?",
    options: ["Mecánica / Planeación", "Dinámica / Planificación", "Mecánica / Organización", "Dinámica / Control"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cuál de las siguientes opciones contiene un ejemplo de cultura organizacional?",
    options: ["d) La forma de relacionarse el jefe con sus empleados", "a) La situación financiera de la empresa", "b) Los problemas de los empleados", "c) La acción de los proveedores"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "El tipo de empresa en la cual se hace transformación de materias primas para desarrollar un producto se llama:",
    options: ["b) Industrial", "a) Comercial", "c) De servicios", "d) Mixta"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cuál de los siguientes aspectos se aborda en la planeación?",
    options: ["c) La misión y visión de la empresa", "a) Control de procesos", "b) Determinación de la cantidad de empleados", "d) La ejecución de los procesos"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cómo se clasifican las empresas por el origen de su capital?",
    options: ["a) Privadas, públicas y mixtas", "b) Industriales, comerciales y de servicios", "c) Pequeñas, medianas y grandes", "d) Sociedad anónima, compañía limitada"]
  },
  {
    subject: "FUNDAMENTOS DE ADMINISTRACIÓN",
    question: "¿Cuáles son los elementos de una competencia profesional? a) Conocimientos, b) Responsabilidad, c) Actitud, d) Sentimientos, e) Habilidad",
    options: ["a), c) y e)", "a), b) y c)", "b), c) y d)", "a), b) y e)"]
  },

  //ETICA PROFESIONAL

  {
    subject: "ETICA PROFESIONAL",
    question: "Etimológicamente la palabra Filosofía, ¿de qué palabras proviene?",
    options: ["Griego", "Romano", "Español", "Francés"]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "De las siguientes aseveraciones, ¿cuál de ellas define a la Filosofía?",
    options: ["Conjunto de conocimientos de manera racional, estudia las causas, efectos y esencia de las cosas.", "Ciencia que estudia las propiedades de los números.", "Estudio de obras literarias de importancia universal y nacional.", "Estudia el ejercicio, distribución, y organización del poder de una sociedad."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "De las siguientes aseveraciones, ¿cuál de ellas define a Ética?",
    options: ["Disciplina filosófica que estudia la moral del hombre en sociedad.", "Mandato o regla que tiene como objetivo dirigir el comportamiento de la sociedad.", "Delimitadora del libre albedrío de las personas dentro de la sociedad.", "Composición, estructura y propiedades de la materia."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "De las siguientes aseveraciones, ¿cuál de ellas define a la Moral?",
    options: ["Es una regla, una guía, un precepto, una ley.", "Proporciona descripciones y explicaciones generales sobre los problemas morales.", "No juzga la naturaleza buena o mala de los actos humanos.", "Es la manera en que realizamos un acto."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "De las siguientes aseveraciones, ¿cuál de ellas define a Moralidad?",
    options: ["Tienen la virtud de que los individuos las aceptan libre, voluntaria y conscientemente.", "Es algo efectuado por la naturaleza.", "Son reglas técnicas que tiene que hacerse para alcanzar fines determinados.", "Es la manera en que realizamos un acto."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "Las Normas Sociales se definen como:",
    options: ["Son reglas de conducta que conllevan un deber ser, cuya finalidad es encontrar la convivencia pacífica entre los individuos.", "Son reglas técnicas que tiene que hacerse para alcanzar fines determinados.", "Su finalidad es regular, formar y externamente, la convivencia del individuo.", "Es algo efectuado por la naturaleza."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "El término teleológico hace referencia a:",
    options: ["La explicación de algo por medio de las consecuencias finales.", "La finalidad de la vida humana.", "La búsqueda de la felicidad.", "Aceptar el destino como está determinado."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "De las siguientes aseveraciones, ¿cuál de ellas define al juicio moral?",
    options: ["Acto mental que establece si una cierta conducta o situación tienen sentido ético.", "Es cuando un acto carece de principios éticos.", "Acto mental que establece si una cierta conducta desmerece al ser humano.", "Acto mental que establece si una cierta conducta presenta faltas a la moral."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "De las siguientes aseveraciones, ¿cuál de ellas define a valor?",
    options: ["Hace digna a la persona o cosa de aprecio, admiración o útil a su fin.", "Es creer que uno es más que la otra persona.", "Es humillar a la persona que consideramos menos valiosa.", "Menosprecia a aquel que no tiene recursos."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "¿Para qué son y para qué sirven los principios de ética?",
    options: ["Nacen de la necesidad de articular un conjunto de reglas que definen y controlan los derechos y deberes.", "Sirven para desarticular los derechos y deberes.", "Sirven para valerse de ellos y hacer lo que nos plazca.", "Sirven para reunirse en familia y pasarla bien."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "¿Qué sentido tiene la vida para el ser humano?",
    options: ["No hay un sentido en la vida, sino muchos, tanto como personas habitan la tierra.", "Solo existe un sentido en la vida.", "La vida hay que vivirla para gozarla.", "Vivir la vida loca."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "Fuente en donde se sustentan los valores morales:",
    options: ["En la vida cotidiana.", "En el trabajo.", "En los lugares públicos.", "Solo en la iglesia."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "¿Qué elementos debe tomar en cuenta para tomar decisiones?",
    options: ["Cada opción disponible y su posible efecto en la persona misma.", "Sólo fijarse en lo que hacen los demás y repetirlo.", "No tomar en cuenta nada de lo que he aprendido a lo largo de la vida.", "Aprovechar el tiempo para vivir."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "Si una persona y ciudadano de bien contribuye con la verdad, mejorará una sociedad en...",
    options: ["Crear un ambiente más armónico y confiable en las relaciones interpersonales.", "No hace daño y no perjudica al colectivo social.", "La comunidad continúa igual como la sentimos socialmente.", "Vivir alejados de la mirada de padres y maestros."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "Muchas personas piensan que engañar son habilidades sociales, ¿cuál de estas debe evitar realizar en su cotidianidad de vida?",
    options: ["Tener responsabilidad social.", "Ser honestos y correctos al actuar.", "Ser asertivos a la hora de cumplir con las labores encomendadas.", "Ser capaces de resultados muy similares en campos de acción humana."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "Para Platón, ¿cómo era el rol del hombre y la mujer?",
    options: ["Eran capaces de resultados muy similares en campos de acción humana.", "Definitivamente ambos tienen según su criterio roles diferentes.", "El hombre siempre tendrá un rol sobresaliente sobre la mujer.", "La mujer deberá obedecer siempre al hombre."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "De las siguientes aseveraciones, ¿cuál de ellas define a la misoginia?",
    options: ["Odio, rechazo y desprecio de los hombres hacia las mujeres.", "Crítica constructiva que un hombre puede realizarle a una mujer.", "Ciencia que estudia la emancipación de las mujeres.", "Una manera diferente de decir que entre el hombre y la mujer hay amor."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "Menciona tres valores básicos que una Empresa ética debe considerar para ser declarada como tal:",
    options: ["Igualdad, respeto y libertad.", "Ética, valores y acciones.", "Organizaciones, trabajo y empleo.", "Familia, amor y honestidad."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "¿En qué sentido se establece que un negocio es bueno?",
    options: ["En el sentido moral.", "En el sentido jurídico.", "En el sentido económico.", "En el sentido emocional."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "Partiendo de la definición de teleología, ¿cuál de las siguientes situaciones no describe esa corriente ética?",
    options: ["Un joven fotógrafo apasionado por la aventura ha emprendido un viaje en motocicleta por toda Sudamérica.", "Un acusado establece un acuerdo con la justicia para que su pena sea rebajada.", "Un pecador se ha confesado y ha donado varios pollos a los pobres.", "Un artista ha hecho obras benéficas para aumentar las ventas de su nuevo CD."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "De las siguientes aseveraciones, ¿cuál de ellas define a los valores?",
    options: ["En sentido humanista, lo que hace que el hombre sea tal, sin lo cual perdería la humanidad o parte de ella.", "Los valores son productos de cambios y transformaciones a lo largo de la historia.", "El valor se refiere a una excelencia o a una perfección.", "Aceptar al hombre como el supremo valor entre todas las realidades humanas."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "¿Cuál es el aporte de la ética en la formación de todo ser humano?",
    options: ["Asumir un comportamiento adecuado para la buena convivencia social.", "Asumir un comportamiento adecuado para la participación social.", "Asumir un comportamiento inadecuado para la buena convivencia social.", "Asumir un comportamiento adecuado para desenvolverse como ser humano."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "¿Cuál de las siguientes palabras son antivalores?",
    options: ["El egoísmo y la injusticia.", "La paz y la amistad.", "La justicia y la verdad.", "El Yo y el Ello."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "De las siguientes aseveraciones, ¿cuál de ellas define a la veracidad?",
    options: ["Se refiere a la verdad o a la realidad o la capacidad de alguien de decir la verdad.", "Decir falsedades de otras personas.", "Inventarse situaciones para llamar la atención.", "Angustiarse y angustiar a los demás con problemas personales."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "De las siguientes aseveraciones, ¿cuál de ellas define a la actuación profesional?",
    options: ["Capacidad del individuo para efectuar acciones, deberes y obligaciones propias de su cargo.", "Prestar atención a lo que hagan las demás personas en la oficina.", "Estar atento a los chismes en la empresa.", "No capacitarse regularmente."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "Los principios básicos de la asertividad son:",
    options: ["Respeto por uno mismo y control emocional.", "Saber decir no.", "Saber criticar y juzgar.", "Saber imponer su opinión."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "¿Cuál de estas opciones no es una técnica asertiva?",
    options: ["La rayuela.", "Banco de niebla.", "Compromiso.", "Disco rayado."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "¿Qué significa ser una persona no asertiva?",
    options: ["Evaluación de sí mismo inadecuada y negativa.", "Cree ser una persona positiva y preocupada.", "Tiene una personalidad espontánea y abierta.", "Evaluación de sí mismo como un líder."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "Elementos que forman parte del lenguaje no oral:",
    options: ["La expresión facial.", "Repetición.", "Estructura.", "Énfasis."]
  },
  {
    subject: "ETICA PROFESIONAL",
    question: "Al escuchar activamente a otra persona, estamos consiguiendo:",
    options: ["Promover que el interlocutor se sienta a gusto.", "Hacer otras cosas mientras escuchamos.", "No tener disposición psicológica.", "Sostener una postura pasiva."]
  },

  //ESTADÍSTICA DESCRIPTIVA

  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cómo se ubica los valores de un conjunto de datos en el diagrama de puntos?",
    options: ["En un eje horizontal colocando los valores de menor a mayor", "En un plano cartesiano", "En un diagrama de barras", "En dos columnas llamadas tallo y hoja"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cómo se denomina la técnica de investigación aplicada a una parte de la población?",
    options: ["Muestreo", "Censo", "Encuesta", "Observación"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "En estadística descriptiva, ¿cómo se define a la muestra?",
    options: ["Subconjunto de la población", "El universo", "Población de baja magnitud", "El conjunto de datos que estamos investigando"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Qué forma tiene un diagrama de tallo y hoja?",
    options: ["Tabla de dos columnas que muestra el primer dígito de un dato y luego los dígitos de terminación", "Tabla de pastel", "Tabla con barras", "Tabla en el que se colocan puntos que representan la frecuencia de cada dato"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cuál de los siguientes elementos no pertenece a una tabla de distribución de frecuencia?",
    options: ["Promedio", "Frecuencia absoluta", "Clases", "Frecuencia relativa"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Qué representa la marca de clase?",
    options: ["El punto medio de cada intervalo", "La frecuencia promedio de los datos", "El orden de colocación de los datos", "La amplitud de los intervalos"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Qué tipo de datos se grafican en el histograma?",
    options: ["Cuantitativos", "Cualitativos", "Mixtos", "Ninguna de las opciones anteriores"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cuál es la diferencia entre histograma y diagrama de barras?",
    options: ["El histograma se usa para graficar datos cuantitativos continuos", "El histograma se usa para datos de estudios de ciencias sociales", "El diagrama de barras se usa para graficar datos cuantitativos", "Ninguna de las anteriores"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cuándo se aproxima la distribución empírica de la muestra a la poblacional?",
    options: ["Cuando aumenta la muestra", "Se reduce la población de estudio", "Cuando la media y la moda son iguales", "La media es igual a la mediana"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cuál de las siguientes opciones corresponde a una medida de localización?",
    options: ["Mediana", "Marca de clase", "Intervalo modal", "Desviación estándar"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cómo se denomina al promedio?",
    options: ["Media aritmética", "Mediana", "Moda", "Ninguna de las anteriores"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Qué es la marca de clase en el cálculo de la media para datos agrupados?",
    options: ["El punto medio de cada intervalo", "El límite inferior de cada intervalo", "La resta entre los límites de un intervalo", "La amplitud de los intervalos"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cómo se calcula la mediana cuando un conjunto tiene un número par de datos?",
    options: ["Calculando la media entre los 2 datos centrales", "Visualizando el dato central", "Visualizando el dato más repetido", "En este caso no existe la mediana"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cuántas modas tiene un conjunto de datos multimodal?",
    options: ["Tres o más modas", "Dos", "Una", "Cero modas"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Qué indica la desviación estándar?",
    options: ["La dispersión de los datos respecto a la media", "La localización de un dato en el conjunto de datos", "El cuartil al cual pertenece un dato", "La ubicación más lejana a la mediana"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cuáles cuartiles al restarse representan al rango intercuartil?",
    options: ["Primer y tercer cuartil", "Segundo y cuarto cuartil", "Primer y cuarto cuartil", "Segundo y tercer cuartil"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cuál de las siguientes opciones NO es una medida de dispersión?",
    options: ["Moda", "Desviación estándar", "Varianza", "Rango intercuartil"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "Para la estadística descriptiva, ¿qué estudia la combinatoria?",
    options: ["Todas las posibles agrupaciones de objetos", "El análisis de la disociación de los datos", "El análisis de la dispersión de los datos", "La combinación de las frecuencias absolutas"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cuál de las siguientes es una característica de la permutación?",
    options: ["Existe orden en la muestra", "No existe orden en la muestra", "Es posible repetir un elemento", "Los elementos se agrupan por pares"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿En qué escala se mide la probabilidad de que un evento ocurra?",
    options: ["0 a 1", "1 a 10", "1 a -1", "10 a infinito"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Se permite la repetición de datos en el cálculo de las combinaciones?",
    options: ["Nunca", "Siempre", "En excepciones de la regla", "Cuando los datos son un mismo elemento"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cuál de las siguientes características no indica la probabilidad de ocurrencia de un evento?",
    options: ["Un cambio de la desviación estándar", "Que se produzca un evento", "Que se produzcan dos o más eventos", "Ninguna de las anteriores"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Qué se analiza desde el enfoque de la probabilidad geométrica?",
    options: ["Un punto esté en alguna parte de una región", "Dos eventos se cumplan en situaciones diferentes", "Se produzca la convergencia de dos eventos en una misma región", "Todas las anteriores"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Qué aspecto se analiza en la probabilidad condicional?",
    options: ["Cómo afecta la ocurrencia de un suceso a la probabilidad de que ocurra otro", "La ubicación geométrica de un evento", "La probabilidad de ocurrencia de 2 sucesos al mismo tiempo", "Ninguna de las anteriores"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cuál es la variable aleatoria en una función?",
    options: ["La que recibe un valor numérico por cada resultado de un experimento aleatorio", "El tipo de distribución", "La que recibe una secuencia de valores en una distribución de frecuencias", "La que recibe un mismo valor en un conjunto de datos"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cuál de las siguientes opciones es una característica de la distribución normal?",
    options: ["Adaptar una variable a una función que depende de la media", "Realizar repeticiones independientes de un experimento binario", "Expresar la probabilidad de eventos en un periodo de tiempo", "Ninguna de las anteriores"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Qué fórmula de probabilidad se aplica para saber la probabilidad de que 3 de 4 amigos vieran el mundial (80% de probabilidad base)?",
    options: ["La de distribución binomial", "La de distribución normal", "La de distribución de Poisson", "La de distribución uniforme directa"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿De qué dato depende la probabilidad de que se produzca un número 'x' de éxitos en un intervalo de amplitud 't'?",
    options: ["La amplitud del intervalo", "El origen del intervalo", "La naturaleza aleatoria de los datos", "La media de la población"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Qué característica define al cálculo de correlación entre 2 variables?",
    options: ["Es independiente del orden de las variables", "Es dependiente del orden de las variables", "No depende del orden las variables", "Ninguna de las anteriores"]
  },
  {
    subject: "ESTADÍSTICA DESCRIPTIVA",
    question: "¿Cuándo se emplea la correlación a nivel experimental?",
    options: ["Ninguna de las variables se ha controlado", "Las 2 variables se han controlado", "Una de las variables se ha controlado", "Ninguna de las anteriores"]
  },

  //EMPRENDIMIENTO

  {
    subject: "EMPRENDIMIENTO",
    question: "La definición correcta de emprendedor es:",
    options: [
      "Persona con una manera de pensar, razonar y actuar, centrada en las oportunidades, teniendo una visión global y aplicando el liderazgo.",
      "Persona dueña de un negocio nuevo con venta de productos y servicios variados.",
      "Persona innovadora, flexible, dinámica, capaz de asumir riesgos, creativa y orientada al crecimiento.",
      "Persona que busca ampliar su negocio pequeño y convertirlo en grande con buen capital."
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "La creatividad, se la define como:",
    options: [
      "Un instrumento efectivo en la comprensión y transformación.",
      "El principio o cimiento sobre el que se apoya y se desarrolla una cosa.",
      "Un impulso del ser humano de hacer las cosas innovadoras sin pensar en las consecuencias.",
      "Trata de nuevas formas de ver las cosas."
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿A qué tipo de análisis corresponde conocer a los actores existentes en el mercado en el que se compite o se va a competir?",
    options: [
      "Análisis de la competencia directa",
      "Análisis de productos y servicios complementarios",
      "Análisis de la competencia indirecta",
      "Análisis del entorno"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "Cuando hablamos de métodos de pago y demás circunstancias relacionadas a la decisión y acción de compra, nos indicará como compran los consumidores hoy. Señale una de las opciones:",
    options: [
      "El análisis de canales de distribución",
      "Segmentación de consumidores",
      "Análisis de productos y servicios complementarios",
      "Análisis de la competencia indirecta"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿Cuál de las opciones es la correcta respecto al uso de investigación de mercado para conocer cambios del entorno?",
    options: [
      "Análisis del entorno",
      "Análisis de productos y servicios complementarios",
      "Análisis de la competencia indirecta",
      "Análisis de la competencia directa"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "Para entender la demanda potencial, debemos identificar los segmentos de consumidores (variables duras y blandas). Escoja la respuesta correcta:",
    options: [
      "Segmentación de consumidores",
      "El análisis de canales de distribución",
      "Análisis de productos y servicios complementarios",
      "Análisis de la competencia indirecta"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "Analizar los productos y servicios de otras empresas que son complementarios a los propios ayuda a identificar oportunidades:",
    options: [
      "Análisis de productos y servicios complementarios",
      "Segmentación de consumidores",
      "El análisis de canales de distribución",
      "Análisis de la competencia indirecta"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "Analizar industrias sustitutas para encontrar ventajas competitivas (ejemplo: aerolíneas vs otros transportes) corresponde a:",
    options: [
      "Análisis de la competencia indirecta",
      "Segmentación de consumidores",
      "El análisis de canales de distribución",
      "Análisis de productos y servicios complementarios"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "La correcta aseveración de emprender es:",
    options: [
      "Es pensar, razonar y actuar centrado en las oportunidades, teniendo una visión global y aplicando el liderazgo.",
      "Es tomarte tus fotos y subirla a las redes sociales.",
      "Es aplicar tu tiempo en actividades que no tienen nada que ver con tu proyecto.",
      "Es la solución para hacerte millonario."
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿Cuál es la actitud que debe demostrar un emprendedor?",
    options: [
      "Persona observadora, luchadora y ante todo",
      "Se refiere al temperamento de una persona frente a ciertas situaciones.",
      "Capacidad para realizar un trabajo.",
      "Es el resultado de un trabajo realizado durante un proyecto."
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿Qué tipo de actitud debe tener un emprendedor?",
    options: [
      "Activo, atrevido, extrovertido, hábil, autoritario",
      "Perezoso, rencilloso",
      "Le gusta levantarse tarde y no cumplir con su deber",
      "Le presta poca atención a sus clientes."
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿Cuál de estas opciones no pertenece al tipo de emprendedores?",
    options: [
      "Monopolio",
      "Emprendedor por necesidad",
      "Emprendedor innovador",
      "Emprendedor visionario"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "Cuando un productor o vendedor es el único que explota un bien o servicio, se lo considera:",
    options: [
      "Monopolio",
      "Competencia",
      "Mercado",
      "Oligopolio"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "Cuando un mercado es dominado por un pequeño número de productores oferentes, se lo considera:",
    options: [
      "Oligopolio",
      "Competencia",
      "Mercado",
      "Monopolio"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "Situación patrimonial en la cual los agentes económicos tienen la libertad de ofrecer bienes y servicios aptos en el mercado:",
    options: [
      "Competencia",
      "Monopolio",
      "Mercado",
      "Oligopolio"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿Cuáles son los sinónimos de emprendimiento?",
    options: [
      "Activo, acometedor, atrevido, audaz, decisivo y emprendedor",
      "Activo, acometedor, autoritario, apático, pusilánime",
      "Activo, audaz, alento, extrovertido",
      "Activo, atrevido, extrovertido, hábil, autoritario"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿Cuáles son las características básicas de un emprendedor exitoso?",
    options: [
      "Capacidad de aprendizaje, creatividad, persistencia, visión.",
      "Capacidad de aprendizaje, tolerante, exitoso, responsable",
      "Capacidad de aprendizaje, innovación, tolerante, comprometido",
      "Capacidad de aprendizaje, responsable, comprometido, analítico"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿Cuáles son las competencias de un emprendedor exitoso?",
    options: [
      "Innovación, liderazgo, orientación al cliente, trabajo en equipo",
      "Innovación, liderazgo, trabajo individual, pensamiento crítico.",
      "Innovación, liderazgo, pensamiento crítico, facilidad para comunicarse",
      "Innovación, liderazgo, tolerante, comprometido"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿Qué comprende el ciclo de un emprendedor?",
    options: [
      "Motivación, estímulo de la creatividad, planificación, financiamiento y puesta en marcha.",
      "Motivación, innovación, orientación al cliente, planificación, financiamiento",
      "Motivación, estímulo de la creatividad, innovación, compromiso, puesta en marcha.",
      "Motivación, estímulo de la creatividad, financiamiento, compromiso, liderazgo."
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "La técnica SCAMPER consiste en:",
    options: [
      "Crear ideas a través de los conceptos: Sustituir, combinar, adaptar, modificar, poner otro uso, eliminar y reorganizar.",
      "Crear ideas a través de los conceptos: Sustituir, poner otro uso, eliminar",
      "Crear ideas a través de los conceptos: Modificar, poner otro uso y reorganizar",
      "Crear ideas a través de los conceptos: Combinar, adoptar, modificar"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿De dónde surgen las ideas para emprender?",
    options: [
      "Conocimiento, creatividad e innovación.",
      "Errores",
      "Querer ser independiente.",
      "Necesidad de dinero"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿Cuáles son las partes intervinientes en un mercado?",
    options: [
      "Compradores y vendedores.",
      "Gobierno",
      "Comunidad autónoma.",
      "Productos"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿Cuáles son las variables que se deben considerar en una segmentación de mercado?",
    options: [
      "Geográficas, demográficas, psicográficas y conductuales.",
      "Carencia de marketing.",
      "Clientes stokeados",
      "Clientes fantasmas."
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿Cuáles son los factores fundamentales que se deben considerar para valorar cada segmento de mercado?",
    options: [
      "Tamaño y crecimiento del segmento, atractivo estructural, objetivo y recursos",
      "Buen posicionamiento en el mercado.",
      "Clientes frecuentes",
      "Oferta de buenos productos y servicios"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿Cuáles son los tipos básicos de investigación de mercado?",
    options: [
      "Exploratoria, descriptiva y causal",
      "Empírica",
      "Exhaustiva",
      "Casual"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿Cuáles son las formas de efectuar encuestas?",
    options: [
      "Entrevista personal, cuestionario por internet, entrevista telefónica y cuestionario por correo postal.",
      "WhatsApp",
      "En conferencia",
      "Por medio de un delegado."
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿A qué se refiere la estrategia de las 4P en marketing?",
    options: [
      "Producto, precio, plaza y promoción",
      "Precificación",
      "Poder de convencimiento.",
      "Contenido, contexto, conexión y comunidad."
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿A qué se refiere la estrategia de las 4C en marketing?",
    options: [
      "Contenido, contexto, conexión y comunidad.",
      "Cobertura",
      "Capacitación",
      "Consignación"
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿Qué se debe considerar para que los segmentos resulten efectivos?",
    options: [
      "Mesurables, accesibles, sustanciales, diferenciales y accionables",
      "Rentabilidad, ser conmesurable, accesibilidad y capacidad",
      "Distribuidores.",
      "Clientes potenciales."
    ]
  },
  {
    subject: "EMPRENDIMIENTO",
    question: "¿Cuáles son los criterios más importantes para una útil segmentación?",
    options: [
      "Rentabilidad, ser conmesurable, accesibilidad y capacidad de respuesta",
      "Mesurables, accesibles, sustanciales, diferenciables",
      "Donde no está la competencia.",
      "Positivación"
    ]
  },

  //DIVERSIDAD Y CULTURA

  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "Seleccione las 4 culturas que corresponden al periodo formativo o agro alfarero.",
    options: ["Valdivia, Guangala, Bahia, Tolita.", "Jambeli, Guangala, Bahia, Tolita."]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Quién fue el heredero del trono inca después de apresar y matar a su hermano?",
    options: ["Atahualpa", "Tupac Yupanqui", "Huascar", "Duchicela"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Qué tipo de economía podemos decir que tiene el Ecuador, de acuerdo a la realidad socioeconómica?",
    options: ["Capitalista", "Socio-comunista", "Socialista", "Comunista"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "Seleccione la definición que corresponde al desarrollo regional y económico",
    options: ["Desarrollo, proceso, empresas, regiones, participan, macroeconómico", "Eventos, desarrollo, empresas, regiones, participan, macroeconómico"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "Seleccione los artículos de la constitución del 2008 que tratan sobre el buen vivir para ciencia y cultura:",
    options: ["Art. 21-22-23-24-25", "Art. 20-21-22-26-27", "Art. 23-24-25-26-27", "Art. 25-26-27-28-29"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "Seleccione la definición que corresponde al desarrollo regional y económico:",
    options: ["Desarrollo, proceso, empresas, participan, regiones, microeconómico", "Eventos, desarrollo, empresas, regiones, participan, macroeconómico"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿En qué periodo aparece la cultura de los Manteños?",
    options: ["Periodo de Integración o señoríos étnicos", "Periodo Precerámico", "Periodo Formativo"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "Seleccione un deber primario del estado, según la Constitución de la República del Ecuador",
    options: ["Garantizar sin discriminación el goce de los derechos de sus habitantes", "Garantizar con discriminación el goce de los derechos", "Garantizar la unidad nacional en la diversidad"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Quién fue el conquistador del imperio Inca?",
    options: ["Francisco Pizarro", "Diego de Almagro", "Manco Capac", "Francisco Orellana"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Cómo estaba estructurada la Constitución de la República del Ecuador en el año 2008?",
    options: ["444 articulos, divididos en 9 títulos y subdivididos en capítulos", "444 articulos, divididos en 9 capitulos", "9 aticulos que contienen 444 capitulos", "444 articulos, divididos en 3 capítulos"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Cuántas veces entró en vigencia el plan Nacional de Desarrollo entre los años 2007 - 2017?",
    options: ["3 veces", "1 vez", "2 veces", "Ninguna de las Anteriores"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Cómo estuvo estructurado el plan Nacional de Desarrollo?",
    options: ["3 ejes y 9 objetivos en cada eje", "3 ejes y 8 objetivos", "9 objetivos incluidos en 2 ejes", "3 ejes y 3 objetivos incluidos en cada eje"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Cuáles son los elementos de la identidad ecuatoriana?",
    options: ["Población, territorio, poder político", "Población, territorio, migración", "Población, migración, poder económico", "Población, territorio, lenguaje"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "La identidad nacional se recobra con la guerra del cenepa (1995) ¿Con qué otro nombre es conocida ésta guerra?",
    options: ["La guerra de la cordillera del Condor", "La guerra del 41", "La guerra de Tiwinza", "La guerra de fronteras"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Cuántos pueblos están reconocidos por el Estado ecuatoriano dentro de la nacionalidad Kichwa?",
    options: ["En el Ecuador se reconocen 18 pueblos dentro de la nacionalidad Kichwa", "En el Ecuador se reconocen 14 pueblos dentro de la nacionalidad Kichwa", "En el Ecuador se reconocen 16 pueblos indigenas"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "La definición correcta de lo local como territorio con significado es:",
    options: ["Un territorio común con las denominaciones de: barrio, comunidad, anejo, recinto y pequeña ciudad.", "El ámbito de la planificación y desarrollo", "Los procesos sociales desde la misma formación"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "La definición correcta de territorio vivido es:",
    options: ["El ámbito de la inter-subjetividad, de los afectos y solidaridades, encuentros comunitarios, prácticas cotidianas.", "Ámbito de la solidaridad, la amistad, lo cotidiano", "Ámbito del poder en el que se dan relaciones de cooperación"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "La definición correcta de territorio organizado es:",
    options: ["Es el ámbito de la planificación y el desarrollo, sus niveles de expresión son lo local, lo micro regional, lo provincial y lo regional", "Un territorio común con las denominaciones de barrio, comunidad, anejo, recinto y pequeña ciudad."]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Cuáles son los factores determinantes de la cultura?",
    options: ["Posición Geográfica, Practicas Religiosa, Practicas de Politica, Salud, Bonanza Financiera", "Fuerza Laboral, Salud, Bonanza Financiera", "Politica, Salud, Practicas Religiosas"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "La correcta definición de diversidad cultural es:",
    options: ["Es la variedad de diferentes culturas dentro de un grupo de personas o una sociedad", "Ciencia que estudia los procesos mentales", "Estudia los parámetros de diferenciación entre las personas"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "La correcta definición de diferencia cultural es:",
    options: ["Es la relación desde el punto de vista de uno mismo hacia un punto de referencia diferente a algo especifico", "Se refiere a los aspectos sociales atribuidos a un individuo diferenciando lo masculino de lo femenino"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "La correcta aseveración que define al diálogo Intercultural es:",
    options: ["El intercambio equitativo, asi como el diálogo entre las civilizaciones, culturas y pueblos, basados en la mutua comprensión y respeto", "Es la Percepción de las realidades físicas a través de la vista", "El que trata de aspectos policitos modernos"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Qué significan las siglas FMI?",
    options: ["Fondo Monetario Internacional", "Fondo del Ministerio de Industrias", "Fondo del Ministerio de Inclusión", "Fondo del Ministerio de Investigación"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Cuántas nacionalidades indígenas están reconocidas por el Estado ecuatoriano?",
    options: ["En el Ecuador se reconocen 14 nacionalidades indigenas.", "En el Ecuador se reconocen 18 nacionalidades indigenas.", "En el Ecuador se reconocen 14 pueblos dentro de la nacionalidad Kichwa"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Cuál es un ejemplo de estereotipo cultural?",
    options: ["Creer que todos los miembros de una cultura actúan de la misma manera", "Reconocer y apreciar las diferencias culturales.", "Promover la comprensión intercultural.", "Celebrar las tradiciones culturales."]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Qué es la apropiación cultural?",
    options: ["Adoptar elementos de una cultura sin comprender su significado o contexto.", "Celebrar la diversidad cultural.", "Promover la comprensión intercultural."]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Qué se entiende por multiculturalismo?",
    options: ["La coexistencia y valoración de múltiples culturas en una sociedad.", "La promoción de una única cultura en una sociedad.", "La celebración de una única religión.", "La exclusión de todas las culturas diferentes."]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Qué es la globalización cultural?",
    options: ["La difusión de elementos culturales a nivel mundial.", "La promoción de una cultura en particular en todo el mundo.", "La desaparición de todas las culturas locales.", "El aislamiento de una cultura en el mundo."]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Cuál es una consecuencia negativa de la falta de comprensión intercultural?",
    options: ["Aumentar los malentendidos y conflictos", "Fomentar la tolerancia y el respeto mutuo.", "Incrementar la comunicación efectiva.", "Promover la diversidad cultural."]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "La correcta aseveración que define al concepto cosmovisión es:",
    options: ["Concepción e imagen de varios pueblos andinos que representa su cultura", "Percepción de las realidades físicas a través de la vista", "Sistema filosofico o conjunto sistemático de razonamientos"]
  },
  {
    subject: "DIVERSIDAD Y CULTURA",
    question: "¿Qué es la Unesco?",
    options: ["Es una organización internacional dedicada a ayudar a las naciones a gestionar su desarrollo mediante la preservación de los recursos naturales y culturales.", "Es una organización internacional creada para mantener la paz y seguridad internacional", "Es una organización internacional panamericanista"]
  },

  //DISEÑO MULTIMEDIA

  {
    subject: "DISEÑO MULTIMEDIA",
    question: "El diseño multimedia propone un criterio innovador para desarrollar contenidos son apoyados en",
    options: ["Dinamismo visual", "Interfaz", "Prototipo", "Segmentar por edades a los usuarios"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Como tambien se conoce a la interfaz gráfica de usuario?",
    options: ["GUI", "MVC", "MVT", "Segmentar por edades a los usuarios"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Cómo pueden ser los Tipos de Interfaz según su entorno?",
    options: ["Escritorio, Web, Móvil", "Solo de una parte del conjunto que ocupa el usuario", "Sobrecargar el diseño e ignorar la usabilidad", "La unión de varias opciones para el usuario"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Cuál es la opción más eficaz que se puede ofrecer para el objetivo de la fase de ideacion y prototipos?",
    options: ["Construir el prototipo ideal de interfaz, a partir de la generación de múltiples ideas de solución, que son validadas con el usuario objetivo.", "Identificar y definir la audiencia de sitio web.", "Es la unión de varias opciones para el usuario", "No a la separación de contenido, presentación, estructura lógica e interacción"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Cuál es la opción más eficaz que se puede ofrecer para el objetivo de la fase de formalización?",
    options: ["Formalizar un diseño final de interfaz que permita la interacción en pro de la realización de las actividades por parte del usuario.", "La revsión de los procesos se hacen al entregar el proyecto", "Es la unión de varias opciones para el usuario", "Diseñar maximo dos interfces"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Cuál es la opción más eficaz que se puede ofrecer para el objetivo de la fase de implementación?",
    options: ["Implementar la solución final para realizar la validación en contexto.", "No a la separación de contenido, presentación, estructura lógica e interacción", "La revsión de los procesos se hacen al entregar el proyecto", "Es la unión de varias opciones para el usuario"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Cuál es la opción más eficaz que se puede ofrecer para el objetivo de la fase de exploración?",
    options: ["Analizar la ejecución de las actividades que realiza el usuario para definir elementos claves requeridos en la construcción de la interfaz", "No a la separación de contenido, presentación, estructura lógica e interacción", "La revsión de los procesos se hacen al entregar el proyecto", "Diseñar una sola interfaz"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Cuál es la opción más eficaz que se puede ofrecer para el objetivo de la fase del modelo?",
    options: ["Construir un modelo de interfaz, a partir de la creación de un enfoque o concepto de diseño, que servirá para orientar las ideas y prototipos de solución", "Validar la usabilidad y la experiencia de usuario con la solución de interfaz propuesta", "Mediante la separación de contenido, presentación, estructura lógica e interacción", "La revsión de los procesos se hacen al entregar el proyecto"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Cuál es la opción más eficaz que se puede ofrecer para el objetivo de la fase de Validación en contexto?",
    options: ["Validar la usabilidad y la experiencia de usuario con la solución de interfaz propuesta en la actividad en contexto para la que se desarrolló", "Es la unión de varias opciones para el usuario", "Mediante la separación de contenido, presentación, estructura lógica e interacción", "Diseñar una sola interfaz"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "Indique cual de las siguientes opciones corresponde como primer paso en el modelado del usuario",
    options: ["Identificar y definir la audiencia de sitio web.", "Identificar y definir la cantidad de usuarios de sitio web", "Diseñar una sola interfaz", "Diseñar maximo dos interices"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Cuál es la opción más eficaz que se puede ofrecer para múltiples interfaces?",
    options: ["Diseñar interfaces adaptables dinámicamente a las necesidades del usuario", "Diseñar una sola interfaz", "Diseñar maximo dos interfces", "Segmentar por edades a los usuarios"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "Indique la mejor forma de asegurar la adaptabilidad de un sitio web",
    options: ["Mediante la separación de contenido, presentación, estructura lógica e interacción", "No a la separación de contenido, presentación, estructura lógica e interacción", "En ocasiones separación de contenido", "Diseñar una sola interfaz"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Qué es un prototipado horizontal?",
    options: ["Se reproduce gran parte del aspecto del sitio, pero sin que esos modelos de interfaz estén respaldados por la funcionalidad real.", "Se reproduce únicamente el aspecto visual de una parte del sitio con funcionalidad real.", "Mediante la separación de contenido", "Diseñar una sola interfaz"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Qué es un prototipado vertical?",
    options: ["Se reproduce únicamente el aspecto visual de una parte del sitio, pero la parte reproducida poseerá la misma funcionalidad que el sitio web una vez implementado.", "Se reproduce gran parte del aspecto del sitio sin funcionalidad real", "Diseñar una sola interfaz", "Mediante la separación de contenido"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Qué es un prototipado de alta fidelidad?",
    options: ["El aspecto del prototipo será muy parecido al del interfaz del sitio web una vez finalizado su desarrollo", "El aspecto del prototipo distará bastante del que tenga el interfaz final", "Es la unión de varias opciones para el usuario", "Bajo coste de su desarrollo"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Qué es prototipado de baja fidelidad?",
    options: ["El aspecto del prototipo distará bastante del que tenga el interfaz del sitio web final. Como ventaja tiene el bajo coste de su desarrollo.", "El aspecto del prototipo será muy parecido al del interfaz final", "Es la unión de varias opciones para el usuario", "La revsión de los procesos se hacen al entregar el proyecto"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Qué es un Diseño de Interacciones?",
    options: ["Es el desarrollo de productos, programas, servicios o sistemas interactivos.", "Es la unión de varias opciones para el usuario", "No se necesario mostrar las opciones de diseño", "La revsión de los procesos se hacen al entregar el proyecto"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "Identifique una caracteristica clave para el diseño de interacciones",
    options: ["Se debe especificar, documentar y consensuar Objetivos al inicio del proyecto", "Presentar varios diseños", "La revsión de los procesos se hacen al entregar el proyecto", "Es la unión de varias opciones para el usuario"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Qué es un patron de diseño?",
    options: ["Es una solución a un problema que se usa repetidamente en contextos similares con algunas variantes en la implementación", "Es la unión de varias opciones para el usuario", "La revsión de los procesos se hacen al entregar el proyecto", "El aspecto del prototipo será muy parecido al final"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Qué es un Diseño Centrado en el Usuario?",
    options: ["EI UCD es considerado ampliamente como la clave para el diseño y desarrollo de productos y servicios con altas condiciones de usabilidad y satisfacción del usuario", "No es necesario implementar el UCD en los proyectos", "El aspecto del prototipo será muy parecido al del interfaz", "EI UCD no es nacesario implementar"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Qué se obtiene en el proceso del diseño?",
    options: ["En este proceso se obtienen prototipos que permiten evaluar la propuesta de diseño", "Ideas Innovadoras", "Software funcionando en lugar de documentación extensiva", "Este proceso es iterativo junto con la etapa de diseño"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Qué se obtiene en el proceso de la evaluación del proyecto?",
    options: ["Este proceso es iterativo junto con la etapa de diseño, ya que se busca llegar a un producto que sea fácil de usar", "No a la separación de contenido", "En esta etapa se realiza el desarrollo e implementación", "Segmentar por edades a los usuarios"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Qué se obtiene en el proceso de la implementación?",
    options: ["En esta etapa se realiza el desarrollo e implementación del producto final", "En este proceso se obtienen prototipos para evaluar", "Es la unión de varias opciones para el usuario", "Este proceso es iterativo"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Qué se obtiene en el proceso del despliegue del proyecto en la construcion de interfaces centradas en el usuario?",
    options: ["Es la fase final del proceso de diseño donde el producto es llevado nuevamente al usuario final para su uso.", "En esta etapa se realiza el desarrollo e implementación del producto final", "Este proceso es iterativo", "Segmentar por edades a los usuarios"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Qué es lo que los usuarios perciben en el diseño estéticamente agradable como lo más útil?",
    options: ["El diseño estéticamente agradable puede hacer que los usuarios sean más tolerantes a problemas menores de usabilidad.", "El diseño estéticamente agradable puede hacer que los usuarios sean menos tolerantes", "El diseño estéticamente agradable puede hacer que los usuarios sean más tolerantes a problemas mayores", "Ninguna de las anteriores"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Que tipo de respuesta crea el diseño estéticamente agradable en el cerebro de las personas?",
    options: ["El diseño estéticamente agradable crea una respuesta positiva en el cerebro de las personas y les hace creer que el sistema en general funciona mejor.", "El diseño estéticamente agradable crea una respuesta neutra", "El diseño estéticamente agradable crea una respuesta positiva y les hace creer que el diseño realmente funciona mejor.", "Ninguna de las anteriores"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Que problemas puede enmascarar el diseño estéticamente agradable durante las pruebas de usabilidad.?",
    options: ["El diseño estéticamente agradable puede enmascarar los problemas de usabilidad y evitar que se descubran problemas durante las pruebas de usabilidad.", "El diseño estéticamente agradable inhibe problemas de usabilidad", "El diseño estéticamente agradable soluciona los problemas de usabilidad", "El diseño estéticamente agradable no enmascara los problemas"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Cual parametro se dispara cuando una computadora y sus usuarios interactúan a un ritma (<400 ms)?",
    options: ["La Productividad", "La Eficacia", "El rendimiento", "La funcionalidad"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Que es la accesibilidad?",
    options: ["Significa cuán fácil o difícil es acceder al contenido para personas con discapacidades.", "Significa cuân fácil o difícil es acceder al contenido para los usuarios en general.", "Significa cuân fácil o difícil es acceder al contenido utilizando los perifericos básicos", "Significa cuán fácil o difícil es acceder al contenido utilizando un telefono inteligente"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿La toma de decisiones dentro de una interface se ve influenciada por?",
    options: ["El tiempo que toma tomar una decisión aumenta con el número y la complejidad de las elecciones.", "El tiempo que toma tomar una decisión disminuye con el número y la complejidad", "El tiempo que toma tomar una decisión no guarda relación", "El tiempo que toma tomar una decisión es inversamente proporcional"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "Si objetivo es mejorar la respuesta del usuario, entances ¿Qué debo hacer como desarrollador?",
    options: ["Simplificar las opciones para el usuario dividiendo las tareas complejas en pasos más pequeños", "Ampliar las opciones para el usuario", "Dividir las tareas complejas en multiples pasos (mientras más, mejor)", "Mostrar las tareas tal y como se ejecutan"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "En un escenario con opciones multiples, ¿Es buena idea?",
    options: ["Evitar abrumar a los usuarios resaltando las opciones recomendadas.", "Bombardear a los usuarios resaltando las opciones recomendadas.", "Tener por default las opciones que podrian ser las mas recomendadas", "Siempre permitir al usuario elegir despues las opciones que desea"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Que es recomendable frente a la incorporacion de nuevos usuarios?",
    options: ["Utilizar la incorporación progresiva para minimizar la carga cognitiva para los nuevos usuarios.", "Utilizar la incorporación minima para maximizar la carga cognitiva", "Utilizar la incorporación maxima para maximizar la carga cognitiva", "No utilizar incorporación"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "Cuando los usuarios pasan la mayor parte de su tiempo en determinado sitio web. ¿Qué sucede con sus espectativas?",
    options: ["Los usuarios transferirán las expectativas que han construido alrededor de un producto familiar a otro que parezca similar.", "Los usuarios rara vez transferirán las expectativas", "Los usuarios comparan las expectativas", "A los usuarios no le interesa las experiencias"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Que accion es recomendada para crear cognitivamente una region comun dentro de una interface?",
    options: ["Agregar un borde alrededor de un elemento o grupo de elementos es una manera fácil de crear una región común", "Agregar un borde es una manera poco eficaz", "Agregar un borde es una manera inutil", "Agregar un borde es una manera de minimizar la percepción"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "Se puede crear una región común definiendo un _____ detrás de un elemento o grupo de elementos.",
    options: ["Background", "Container", "Formulario", "Botón"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "Los usuarios percibirán imágenes ambiguas de la forma más simple posible, ¿A que se debe esto?",
    options: ["Porque es la interpretación que requiere el menor esfuerzo cognitivo.", "Porque es la interpretación que requiere el mayor esfuerzo cognitivo.", "Porque es la interpretación que comunmente es la mas acertada", "Porque es la interpretación que esperamos"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "En el diseño de una interface grafica de usuario. ¿Que sucede con los objetos cercanos entre si?",
    options: ["La proximidad ayuda a establecer una relación con los objetos cercanos.", "La proximidad sin necesidad es señal de un mal diseño", "La proximidad solo es necesaria en diseños de moviles", "La proximidad no influye"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "Seleccione de la lista 4 características de interfaz.",
    options: ["Claridad, concisión, coherencia e integridad.", "Flexibilidad, tiempo de respuesta reducido, integridad y organización.", "Utilizar mayor cantidad de graficos posibles", "Diseño agradable, coherencia, organización y presición."]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Con que nombre se conoce a la mezcla de lo lógico de las GUI 3D con 2D?",
    options: ["ZUI", "GUI", "NUA", "NUI"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Cuales son los 5 elementos comunes en la interfaz gráfica de usuario?",
    options: ["Menú, iconos, botones, textos, imagenes", "Menü, texto, modelo mental, organigrama, navegador", "Menú, Iconos, botones, textos, organigrama", "Menú, Iconos, botones, textos, navegador"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Cuál es el objetivo de la interaccion hombre-maquina?",
    options: ["Todas las anteriores (Seguridad, Efectividad, Usabilidad)", "Seguridad", "Efectividad", "Usabilidad"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Cuáles son los factores de la interacción Hombre-Máquina?",
    options: ["Psicologico - Ergonomico - Organizativos", "Psicologico - Usabilidad - Organizativos", "Efectividad - Psicologico - Usabilidad", "Seguridad - Efectividad - Usabilidad"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Cuáles son las etapas en la construcción de Interfaces del diseño centrado en el usuario?",
    options: ["Analisis - Diseño - Evaluacion - Implementacion - Despliegue", "Analisis - Diseño", "Evaluacion - Implementacion", "Todas las anteriores"]
  },
  {
    subject: "DISEÑO MULTIMEDIA",
    question: "¿Cuáles son los pilares que apoyan al diseño centrado en el usuario?",
    options: ["Empatizar - Definir - Idear - Prototipar - Probar", "Pensamiento de Diseño - Desarrollo Agil - Usabilidad y Experiencia de Usuario.", "Modelo del Usuario - Modelo del Diseñador - Modelo del Programador.", "Ninguno de los anteriores"]
  },

  //DESARROLLO DEL PENSAMIENTO

  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cómo se llama el principio donde las actividades están relacionadas con procedimientos, datos biográficos, etc?",
    options: ["Descripción", "Decisión", "Secuencia"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cómo se define al principio que implica un orden que depende de la variable que define el cambio?",
    options: ["Secuencia", "Planificación", "Descripción"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cómo se define al principio que sirve para regular la impulsividad, pensar antes de actuar, escoger lo más adecuado?",
    options: ["Planificación", "Descripción", "Decisión"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuál es la base del desarrollo de la habilidad de una persona para definir sus propias estrategias o maneras organizadas de llevar a cabo las acciones que se plantea?",
    options: ["Planificación", "Secuencia", "Decisión", "Descripción"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuál es el proceso del pensamiento que ayuda a utilizar la mente con efectividad, apertura, flexibilidad, oportunidad y pertinencia; de acuerdo a un propósito determinado?",
    options: ["Expansión de ideas", "Contracción de ideas", "Básico del pensamiento", "Inferencia"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuál es el proceso que propicia el desarrollo de hábitos productivos de la mente de pensar y actuar y para valorar los logros alcanzados?",
    options: ["Inferencia", "Expansión de ideas", "Contracción de ideas", "Básico del pensamiento"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuál es la clase de pensamiento en la que se producen respuestas u opciones posibles frente a un reto o pregunta abierta?",
    options: ["Pensamiento Divergente", "Pensamiento Synvergente", "Pensamiento Convergente"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuál es el tipo de pensamiento que está relacionado con los procesos mentales de la perspicacia, la creatividad y el ingenio?",
    options: ["Pensamiento Lateral", "Pensamiento Inductivo", "Pensamiento Lógico", "Pensamiento Deductivo"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuáles son los principios que revelan nuestras intenciones o propósitos, es decir, delimitan lo que queremos conseguir?",
    options: ["Objetivos", "Reglas", "Consecuencias"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuáles son los principios que nos ayudan a evitar confusiones o ambigüedades y facilitan la organización y la ejecución de cualquier actividad?",
    options: ["Reglas", "Objetivos", "Planificación"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuál es el proceso que sirve para identificar las características semejantes y diferentes de dos o más objetos o situaciones?",
    options: ["Comparación", "Clasificación", "Relación", "Ordenamiento"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuál es el principio en el que la organización de elementos de un conjunto, va de acuerdo con características asociadas a una variable en secuencia progresiva?",
    options: ["Ordenamiento", "Clasificación", "Secuencia", "Clasificación jerárquica"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cómo se denomina el proceso que permite separar elementos de un conjunto en clases y subclases acorde a dos o más criterios de clasificación simultáneamente?",
    options: ["Clasificación jerárquica", "Clasificación", "Ordenamiento", "Secuencia"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuál es la función relevante del pensamiento?",
    options: ["El razonamiento y solución de problemas", "La planificación y organización de actividades", "El razonamiento y planificación de actividades", "El razonamiento de las actividades"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuál es el proceso u operación de pensamiento que implica la descomposición o división de objetos, situaciones o ideas en las partes que lo constituyen?",
    options: ["Análisis", "Sintesis", "Evaluación", "Observación"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Qué permite la competencia básica de leer?",
    options: ["Aprendizaje y crecimiento intelectual", "Aprendizaje intelectual y crecimiento colaborativo", "Aprendizaje personal y colaborativo", "Aprendizaje personal y crecimiento intelectual"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿A qué se conoce como la reinterpretación significativa y personal de los símbolos verbales impresos donde el lector es capaz de comprender los significados que están a su disposición?",
    options: ["Comprensión lectora", "Competencia básica", "Competencia Inferencial", "Competencia Interpretativa"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuál es el tipo de lectura en la cual el lector elabora suposiciones a partir de los datos que extrae del texto?",
    options: ["Lectura inferencial", "Lectura crítica", "Lectura reflexiva", "Lectura comprensiva"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Qué clase de competencias son las que se requieren para cumplir el proceso de inferencia en la lectura inferencial?",
    options: ["Interpretativas y deductivas", "Interpretativas y analíticas", "Interpretativas y concluyentes", "Interpretativas y evaluativas"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Qué tipo de lectura es la que mientras lee produce una Iluvia de ideas con riqueza de contenido en que el lector va generando, organizando y relacionando?",
    options: ["Lectura reflexiva", "Lectura superficial", "Lectura comprensiva", "Lectura Recreativa"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuáles son los elementos de los argumentos?",
    options: ["Premisa, inferencia y conclusión", "Premisa, conclusión e inferencia", "Inferencia, premisa y conclusión", "Inferencia, conclusión y premisa"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Qué es la representación visual de conocimientos que presenta información rescatando aspectos importantes de un concepto o materia dentro de un esquema usando etiquetas?",
    options: ["Organizadores gráficos", "Organizadores ciclicos", "Organizadores educativos", "Organizadores visuales"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuáles son las fuentes utilizadas en la búsqueda de información?",
    options: ["Libros, revistas, internet", "Conferencias", "Revistas de entretenimiento", "Charlas, foros"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuál es el principio que se refiere a la capacidad de razonar los contenidos verbales estableciendo principios de clasificación, ordenación y relación?",
    options: ["Razonamiento verbal", "Aseveración", "Exploración", "Pensamiento circular"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuál es el argumento que conciernen a la introducción o descubrimiento de nuevas proposiciones posibles o hipótesis, basados en anomalías o en sucesos sorprendentes?",
    options: ["Argumentos abductivos", "Argumentos deductivos", "Argumentos inductivos", "Argumentos reales"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuál es el proceso que nos invita a reflexionar sobre una situación o hecho antes de decidir, nos ayuda a controlar la impulsividad?",
    options: ["Exploración", "Aseveración", "Pensamiento circular", "Premisas"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Qué es el pensamiento circular?",
    options: ["Actividades que ayudan a fortalecer la capacidad de evaluar lo que piensa y hace", "Actividades que ayudan a sintetizar lo que piensa", "Actividades que ayudan a mejorar lo que piensa", "Actividades que ayudan a reducir lo que piensa"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuáles son los tipos de aseveraciones que existen?",
    options: ["Universales y particulares", "Individuales y generales", "Privadas y públicas", "Adecuadas e inadecuadas"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuáles son las caracterísiticas de un problema?",
    options: ["Resoluble, delimitado y relevante", "Resoluble, limitado y relevante", "Resoluble, limitado y puntual", "Resoluble, delimitado y funcional"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cómo se llama el conjunto de hechos o circunstancias que dificultan la consecución de algún fin?",
    options: ["Problemas", "Exploración", "Aseveración", "Argumentos"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Qué elementos posee un problema?",
    options: ["Propósito y contexto", "Situación y hecho", "Propósito y situación", "Propósito y característica"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cómo se llama la herramienta de trabajo grupal que facilita el surgimiento de nuevas ideas sobre un tema o problema?",
    options: ["Brainstorming", "Los cinco porqués", "Relaciones forzadas", "Lista de atributos"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuándo una solución es válida se denomina?",
    options: ["Viable, ecológica y preventiva", "Viable, ilimitada y preventiva", "Viable, ecológica y limitada", "Viable, limitada y preventiva"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cómo se define a la etapa de la evaluación del problema?",
    options: ["Fase importante, en donde se determina que la solucion obtenida es lo que se esperaba conseguir", "Fase importante, de la elección realizada depende el avance", "Fase importante, donde se aplican las operaciones necesarias", "Fase importante, para estimular el pensamiento lateral"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "El planteamiento de alternativas de solución en el desarrollo del pensamiento es considerado como:",
    options: ["Técnica", "Etapa", "Propósito", "Característica"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿A qué tipo de procesos corresponden la planificación y decisión?",
    options: ["Procesos de expansión de ideas", "Hipótesis", "Básico del pensamiento", "Procesos de contracción de ideas"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿A qué concepto pertenece la separación de elementos de un conjunto en subconjuntos que comparten una característica común?",
    options: ["Clasificación", "Secuencia", "Ordenamiento", "Observación"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿A qué tipo de procesos corresponde el análisis y la síntesis?",
    options: ["Procesos integradores del pensamiento", "Procesos de sistemas", "Procesos básicos del pensamiento", "Procesos de expansión y contracción de ideas"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuál de los siguientes conceptos se relaciona con la metacognición?",
    options: ["La reflexión sobre el propio proceso de pensamiento", "La capacidad de memorizar información", "El uso de la lógica formal", "La habilidad de comunicación oral"]
  },
  {
    subject: "DESARROLLO DEL PENSAMIENTO",
    question: "¿Cuál de las siguientes estrategias es útil para mejorar la resolución de problemas?",
    options: ["Descomponer el problema en partes más pequeñas", "Evitar la planificación", "Enfocarse solo en soluciones obvias", "Ignorar el problema"]
  },

  //CALIDAD DEL SOFTWARE

  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifiquen los enfoques que definen la calidad",
    options: ["Orientado a la competencia, Orientado al cliente, Económico", "Productos, Servicios, Calidad", "Estadistico, de Volumen, por Inspección", "Orientado a la inspección, Orientado a servicios, estadistico"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique la frase que define el enfoque economico",
    options: ["La mayor satisfacción del cliente con el menor coste para la empresa", "Cuando cumple con las especificaciones para el cliente establecidas", "El conjunto de características de una entidad que le confieren la aptitud para satisfacer las necesidades establecidas y las implicitas", "La satisfacción continuada y sistemática de las necesidades y expectativas del cliente"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique los cambios que se produjeron en las empresas, con la llegada de la revolución industrial",
    options: ["Obligatoriedad de estandarización de las piezas y aparición del concepto de tolerancia", "Los Departamentos de producción, Ingenieria y Control de Calidad, comienzan a aplicar técnicas estadisticas", "Los consumidores empiezan a ser selectivos", "Creación de las especificaciones en los productos"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Dentro de la definición de gestion de cialdad total ¿El calificativo de Total hace referencia ...?",
    options: ["La calidad es la identificación y satisfacción de las necesidades y expectativas de los clientes", "Se elaboran sistemas de producción que logran evitar en gran medida los errores", "El fabricante diseña el producto de acuerdo a sus métodos de producción en serie", "Toda la producción está vendida"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "El modelo gesión basado en la Calidad Total se sustenta en cinco pilares interrelacionados que permiten planificar, organizar, controlar y mejorar la Calidad ¿Cuáles son estos pilares?",
    options: ["Orientación al Cliente, Gestión de Procesos, Gestión de Personas, Estrategia y Cultura Organizativa", "La calidad se logra con la participación de los empleados de todos los niveles organizativos", "Calidad obligada, Calidad atractiva, enfoque económico, Personal y Cultura", "Fiabilidad, Capacidad de respuesta, Aseguramiento, Empatía y Tangibilidad"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique la definición de Estrategia como uno de los pilares fundamentales de la Gestión de la Calidad Total",
    options: ["Se alinea con los principios y filosofía de la Calidad Total", "Los procesos, los productos y los servicios son el resultado de las estrategias de la empresa", "Las estrategias al igual que los productos y servicios, están sometidos a una mejora constante", "Planear, Hacer, Verificar y Actuar"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique los elementos del ciclo de Deming",
    options: ["Planear, Hacer, Verificar y Actuar", "Compromiso, Estimular y Administrar", "Fiabilidad, Capacidad de respuesta y Tangibilidad", "Fiabilidad, Conformidad y Durabilidad"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique al autor del diagrama de causa efecto. Conocido tambien como diagramas espinas de pescado",
    options: ["Kaouru Ishikawa", "Shigeo Shingo", "Genichi Taguchi", "Edward Deming"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "¿A qué protagonista de la calidad corresponde el SISTEMA POKA-YOKE?",
    options: ["Shigeo Shingo", "Kaouru Ishikawa", "Genichi Taguchi", "Armand V. Feigenbaum"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Es una técnica de pruebas de software en la cual la funcionalidad se verifica sin tomar en cuenta la estructura interna de código, detalles de implementación o escenarios de ejecución internos",
    options: ["Caja Negra", "Caja Blanca", "Norma ISO 15504", "Norma ISO IEC 12207"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "La Norma ISO 15504 consta con 6 niveles de madurez. Indique cuales son",
    options: ["Inmadura, básica, gestionada, establecida, predecible, optimizada", "Inmadura, descentralizada, gestionada, Informativa, predecible, optimizada", "Basica, gestionada, establecida, predecible, optimizada, finalizada", "Gestionada, establecida, predecible, optimizada, aplicada, reutilizable"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique la característica que le da al software la capacidad de interactuar con uno o más sistemes especificos",
    options: ["Interpolaridad", "Responsabilidad", "Seguridad", "Integridad"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique la caracteristica que le da al software la capacidad de proteger la información y los datos",
    options: ["Seguridad", "Conformidad", "Interpolaridad", "Integridad"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique la caracteristica que le da al software la capacidad de evitar fallas cuando encuentra errores",
    options: ["Tolerancia a errores", "Exactitud", "Seguridad", "Conformidad"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique la caracteristica que le da al software la capacidad de mantener un nivel de funcionamiento en caso de errores",
    options: ["Madurez", "Exactitud", "Seguridad", "Conformidad"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique la característica que le da al software la capacidad de restablecer su funcionamiento adecuado y recuperar los datos afectados en el caso de una falla",
    options: ["Recuperabilidad", "Madurez", "Conformidad", "Seguridad"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique la característica que le da al software la capacidad de permitir al usuario entender si es adecuado y cómo ser utilizado",
    options: ["Entendimiento", "Seguridad", "Atraccion", "Conformidad"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique la característica que le da al software la capacidad de ser atractivo para el usuario",
    options: ["Atraccion", "Seguridad", "Aprendizaje", "Entendimiento"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identitique la caracteristica que le da al software la capacidad de cumplir los estándares o normas relacionadas a su usabilidad",
    options: ["Conformidad de uso", "Entendimiento", "Atraccion", "Conformidad de fiabilidad"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique la característica que le da al software la capacidad de permitir al usuario operarlo y controlarlo",
    options: ["Operabilidad", "Aprendizaje", "Entendimiento", "Conformidad de uso"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique la característica que le da al software la capacidad de utilizar cantidades y tipos adecuados de recursos cuando este funciona bajo condiciones establecidas",
    options: ["Utilizacion de recursos", "Comportamiento de tiempo", "Conformidad de fiabilidad", "Conformidad de uso"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique la característica que le da al software la capacidad de cumplir con los estándares o convenciones relacionados a la eficiencia",
    options: ["Conformidad de Eficiencia", "Utilizacion de recursos", "Conformidad de uso", "Conformidad de facilidad de mantenimiento"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique la característica que le da al software la capacidad de ser instalado en un entomo especifico",
    options: ["Facilidad de Instalacion", "Utilizacion de recursos", "Seguridad", "Comportamiento de tiempo"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique la característica que le da al software la capacidad de cumplir con los estándares relacionados a la portabilidad",
    options: ["Conformidad de Portabilidad", "Seguridad", "Facilidad de instalacion", "Adaptabilidad"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique los elementos que deben tener el software para cumplir con la portabilidad",
    options: ["Adaptabilidad, coexistencia y Reemplazabilidad", "Seguridad, Integridad y coexistencia", "Reemplazabilidad, Recursos y Facilidad de instalacion", "Interfaz, Seguridad y coexistencia"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "¿Cuáles son las ventajas de las normas ISO?",
    options: ["Todas las anteriores", "Alcanzar y mantener mayores niveles de calidad", "Satisfacer las necesidades de un cliente", "Aumentar los niveles de productividad"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique el conjunto de normas orientadas a ordenar la gestión de una empresa",
    options: ["Normas ISO", "Analisi y diseño de sistemas", "Codificación", "Calidad total"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Les estándares de calidad de software hacen parte de la ingeniería de software, utilizan de estándares y metodologias para?",
    options: ["El diseño, programación, prueba y análisis del software", "Análisis y diseño de sistemas", "Diseño de interfaces", "Realizar buena codificación"]
  },
  {
    subject: "CALIDAD DEL SOFTWARE",
    question: "Identifique el modelo de mejora de los procesos de construcción de software que provee los elementos necesarios para determinar su efectividad",
    options: ["CMMI", "IEEE", "TSP", "SPICE"]
  },

  //Cálculo Diferencial e Integral

  {
    "subject": "Cálculo Diferencial e Integral",
    "question": "Calcule el siguiente límite: $ \\lim_{x\\to\\infty} \\frac{x^3+6}{x^2-2x+5} $",
    "options": [
      "Infinito (∞)",
      "0",
      "1",
      "3/2"
    ]
  },
  {
    "subject": "Cálculo Diferencial e Integral",
    "question": "Identifique la propiedad correcta de los límites para una constante k:",
    "options": [
      "$ \\lim_{x\\to c} [k \\cdot f(x)] = k \\cdot \\lim_{x\\to c} f(x) $",
      "$ \\lim_{x\\to c} [k \\cdot f(x)] = \\lim_{x\\to c} k + \\lim_{x\\to c} f(x) $",
      "$ \\lim_{x\\to c} [k \\cdot f(x)] = f(c) $",
      "$ \\lim_{x\\to c} [k \\cdot f(x)] = 0 $"
    ]
  },
  {
    "subject": "Cálculo Diferencial e Integral",
    "question": "Calcule el siguiente límite: $ \\lim_{x\\to 2} \\frac{2x+1}{5-3x} $",
    "options": [
      "-5",
      "5",
      "1",
      "No existe"
    ]
  },
  {
    "subject": "Cálculo Diferencial e Integral",
    "question": "Calcule el siguiente límite: $ \\lim_{t\\to -2} (2t^3+15)^{1/3} $",
    "options": [
      "-1",
      "1",
      "3",
      "No existe"
    ]
  },
  {
    "subject": "Cálculo Diferencial e Integral",
    "question": "Calcule el siguiente límite: $ \\lim_{x\\to 1} \\frac{x^3-6x^2+11x-6}{x^3+4x^2-19x+14} $",
    "options": [
      "-1/4",
      "0",
      "Infinito",
      "1"
    ]
  },
  {
    "subject": "Cálculo Diferencial e Integral",
    "question": "Calcule el siguiente límite: $ \\lim_{x\\to -2} (x^2+2x-1) $",
    "options": [
      "-1",
      "1",
      "-5",
      "3"
    ]
  },
  {
    "subject": "Cálculo Diferencial e Integral",
    "question": "Calcule el siguiente límite al infinito: $ \\lim_{x\\to \\infty} \\frac{x^2}{-x^2+8x-15} $",
    "options": [
      "-1",
      "1",
      "0",
      "Infinito"
    ]
  },
  {
    "subject": "Cálculo Diferencial e Integral",
    "question": "Calcule el siguiente límite al infinito: $ \\lim_{x\\to \\infty} \\frac{x}{x-5} $",
    "options": [
      "1",
      "0",
      "5",
      "-1"
    ]
  },
  {
    "subject": "Cálculo Diferencial e Integral",
    "question": "Calcule el siguiente límite al infinito: $ \\lim_{x\\to \\infty} \\frac{x^3}{2x^3-100x^2} $",
    "options": [
      "1/2",
      "1",
      "0",
      "Infinito"
    ]
  },
  {
    "subject": "Cálculo Diferencial e Integral",
    "question": "Calcule el siguiente límite: $ \\lim_{x\\to 4} \\frac{x-4}{x^2-x-12} $",
    "options": [
      "1/7",
      "0",
      "Infinito",
      "7"
    ]
  },
  {
    "subject": "Cálculo Diferencial e Integral",
    "question": "Calcule el siguiente límite: $ \\lim_{x\\to\\infty} (5x^2+x) $",
    "options": [
      "Infinito (∞)",
      "0",
      "5",
      "1"
    ]
  },

  //BASE DE DATOS 
  
  {
    subject: "BASE DE DATOS 1",
    question: "¿Que sucede con la información en la integridad de base de datos?",
    options: ["La información cumple con ciertos criterios éticos y temporales", "La información no se repite, ni se pierde en el almacenamiento", "La información tiene una base critica de exclusividad completa", "La información se repite y jamás se pierde"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Para qué son utilizadas las bases de datos?",
    options: ["Para manipular la información de manera facil, rapida y automatica", "Para organizar a la población de un lugar al manejar información propia", "Para aumentar el tiempo de una consulta", "Para controlar el tipo de información que se maneja en eventos distintos"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Que símbolo representa un atributo en el modelo Entidad Relación?",
    options: ["Elipse", "Línea", "Rectángulo", "Rombo"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Qué es una clave foranea?",
    options: ["Es el intermediario para relacionar una o más entidades", "Es aquella que permite relacionarse con todos los atributos", "Conocido también como atributo secundario", "Permite relacionar muchos datos"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Qué sentencia permite crear una base de datos?",
    options: ["Create database nombrebase", "Create databases nombrebase", "Create database from nombrebase", "Create database where nombrebase"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Qué es un motor de base de datos?",
    options: ["Es el servicio principal para almacenar, procesar y proteger los datos", "Es un paquete de funciones y servicios que viene instalado en MYSQL", "Es aquel programa principal que toda base de datos debe tener", "Es un lenguaje de programación"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "Cuál es una característica de Mysql?",
    options: ["Es un servidor de Base de datos Relacional", "Creado por Linux Corporation", "Creado por Microsoft", "Es un servidor de Base de datos Jerárquico"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Qué es una llave primaria?",
    options: ["Es un campo único dentro de una tabla y sirve para establecer relaciones entre tablas", "Es un campo que sirve para proteger mi Base de Datos", "Es un registro único en mi Tabla", "Es un campo cualquiera dentro de la tabla"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Cuál de las siguientes opciones no corresponde a un gestor de base de datos?",
    options: ["Consulta", "Libre Office Base", "MySQL", "Oracle"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿En donde se almacena la información que se introduce en una base de datos?",
    options: ["Tabla", "Formulario", "Registro", "Campo"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Qué operaciones pueden realizar los usuarios de una base de datos?",
    options: ["Agregar archivos, insertar datos, eliminar datos, eliminar archivos, modificar datos, recuperar datos", "Agregar y modificar archivos", "Sumar, restar, dividir y multiplicar", "Agregar y modificar archivoS"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Qué es redundancia de la información?",
    options: ["Duplicidad de información", "Información concisa", "Pérdida de información", "Exceso de datos"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Cuál es la opción que corresponde al listado de sgbd?",
    options: ["Oracle, MySQL, SQLServer", "OpenOffice Base, Oracle, Drive", "MYSQL, OpenOffice, Gmail", "OpenOffice Base, Oracle, MySQL, Google+"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Qué son los datos?",
    options: ["Palabras, números que por si solos no tiene significado", "Información de numérica con sonido", "Información de textos sin sentido.", "Es un conjunto de información"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Cuál es la clasificación de las bases de datos de acuerdo a su forma de organización o modelo?",
    options: ["Relacionales, Jerárquicas", "Subjetiva", "Descriptiva", "Bases de datos en red"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Qué identifica al siguiente enunciado? Son las bases de datos más usadas. Permiten crear todo tipo de datos y relacionarlos entre sí...",
    options: ["Bases de datos relacionales", "Bases de datos multidimensionales", "Bases de datos en red", "Bases de datos transaccionales"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Cuál es la caracteristica o propiedades de una entidad?",
    options: ["Atributo", "Relación", "Entidad", "Clave foránea"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Cómo se representa una entidad en el modelo entidad-relación?",
    options: ["Un rectángulo", "Un óvalo", "Un óvalo pintado", "Un rombo"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Qué sentencia es DDL?",
    options: ["Create, alter, drop, truncate", "Select, insert, update, delete", "Campo, registro, tabla, relación", "Insert, create, delete drop"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Cuál es la cardinalidad según el enunciado? un cliente puede poseer diferentes cuentas de correo electrónico...",
    options: ["Uno a Muchos", "Uno a Uno", "Muchos a Muchos", "De muchos a uno"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Qué es Seguridad de Datos?",
    options: ["Es la protección de la base de datos frente a usuario no autorizados", "Acceder de forma fácil y sencilla a la base de datos", "Consiste en cuidar los documentos y permitir a cualquier persona acceder", "Proteger los campos mediante una clave de seguridad"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Cual es el resultado de la sentencia select from alumnos where apellidos LIKE '%%' ?",
    options: ["Es una sentencia de Msql que permite visualizar el apellidos de un estudiante", "No muestra nada", "Muestra aquellos apellidos que tengan la letra P", "Es una sentencia DDL"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Cual es la definición de servidor de base de datos a nivel de hardware?",
    options: ["Equipo informático que permite que los clientes remotos o locales consulten la información", "Equipo informático para administrar la infraestructura", "Equipo informático para respaldar información", "Equipo Multiusuario para realizar varias tareas"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Qué son base de datos Dinámicas?",
    options: ["Son aquellas donde los datos pueden actualizarse o incluso modificarse en tiempo real", "Son bases de datos de consulta cuyos datos pueden modificarse", "Son aquellas que no almacena datos", "Son aquellas que poseen una relación en particular"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Que tipo de información permite almacenar el tipo de dato TINYINT?",
    options: ["Números enteros entre -128 hasta 127", "Fechas en formato corto", "Número decimales sin signo", "Cadena de caracteres"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Para que se usa la cláusula ORDER BY del lenguaje SQL?",
    options: ["Permite ordenar el resultado de una consulta SELECT", "Permite realizar inserciones de registros de manera ordenada", "Permite dar órdenes administrativas", "Se utiliza para actualizar los nombres de las tablas"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Como se representa en una base de datos a cualquier conjunto de objetos, lugares, eventos o conceptos, en el mundo real?",
    options: ["Entidad", "Normalización", "Instancia", "Cardinalidad"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Como se llama al proceso de optimización, simplificación, eliminación de errores lógicos de una base de datos?",
    options: ["Normalización", "Instancia", "Cláusula GROUP BY", "Cláusula ORDER BY"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Para que se utiliza La función COUNT(*)?",
    options: ["Obtener el número de filas de la consulta", "Seleccionar registros de una base de datos", "Agrupar elementos dentro de una sentencia SELECT", "Contar los registros actualizados por una sentencia UPDATE"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Que realiza la sentencia: SELECT COUNT(*) FROM TABLE?",
    options: ["Muestra el número total de registros de la tabla llamada TABLE", "Muestra el número de registros borrados", "Elimina un número determinado de registros", "Cuenta el número de campos de la tabla"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Que realiza la sentencia: INSERT INTO TABLE (campol, campo2) VALUES (valor 1 , valor2);?",
    options: ["Inserta un nuevo registro en la tabla llamada TABLE", "Selecciona los valores valor 1 y valor 2", "Actualiza los registros de la TABLE", "Actualiza los valores valor 1 y valor 2 en la tabla"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Para que utiliza la cláusula GROUP BY en la sentencia SELECT?",
    options: ["Agrupar un conjunto de filas según los campos indicados", "Agrupar los registros que se van a actualizar", "Eliminar los registros seleccionados", "Actualizar los registros seleccionados"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Que realiza la sentencia: DELETE FROM estudiante WHERE id estudiante = 343?",
    options: ["Elimina el registro de estudiante cuyo código es igual a 343", "Selecciona los registros de estudiantes con codigo 343", "Elimina la tabla cuyo código de estudiante es 343", "Actualiza todos los campos del estudiante"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Que realiza la sentencia: SELECT cedula, nombre FROM empleado WHERE cedula = 0911111111?",
    options: ["Selecciona todos los empleados donde la cédula sea igual a '0911111111'", "Selecciona todos los empleados cuyo número de cédula empieza en 0911111111", "Selecciona todos los empleados ordenados por cédula", "Selecciona todas las cédulas de la tabla empleado"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Cuando una tabla está en primera forma normal?",
    options: ["Si y sólo si cada uno de los campos contiene un único valor para un registro determinado", "Cuando los registros no se repiten", "Cuando todos sus atributos no primos dependen de forma completa de la clave primaria", "Cuando un conjunto de atributos permiten identificar en forma univoca"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Que sentencia DDL se usa para la creación de tablas en lenguaje SQL?",
    options: ["CREATE TABLE", "INSERT TABLE", "OPEN TABLE", "ALTER TABLE"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Que realiza la sentencia: TRUNCATE TABLE estudiante?",
    options: ["Trunca la tabla llamada estudiante", "Elimina una tabla de la base de datos", "Trunca los valores de un registro de estudiante", "Trunca los nombres de los estudiantes"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Qué son las cláusulas INNER JOIN, LEFT JOIN, RIGHT JOIN?",
    options: ["Cláusulas para realizar consultas en múltiples tablas según las condiciones especificadas", "Sentencias que unen tablas de manera física", "Sentencias para mover datos de izquierda a derecha", "Cláusulas que evitan la duplicación de información"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Cual de los siguientes tipos de datos se utilizan para almacenar valores de tipo fecha?",
    options: ["DATETIME, SMALLDATETIME", "DECIMAL", "INT, SMALLINT, TINYINT", "TEXT"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "Si se requiere crear un campo para almacenar texto de longitud fija, ¿Que tipo de datos se utilizaria?",
    options: ["Char", "Text", "Varchar", "Blog"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "En la sentencia CREATE TABLE estudiante(cedula varchar(10) NOT NULL PRIMARY KEY, nombre varchar(20) NOT NULL), ¿Cual se cumple?",
    options: ["El campo nombre no permite el ingreso de valores NULL", "El campo nombre no permite registros repetidos", "El campo nombre permite el ingreso de caracteres de longitud fija", "El campo cédula solo permite el ingreso de números"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Que realiza la siguiente sentencia: ALTER TABLE pais ADD COLUMN idioma VARCHAR(50)?",
    options: ["Agrega una nueva columna llamada idioma", "Altera el idioma de la tabla pais", "Tiene errores de sintaxis", "Agrega un nuevo registro en la tabla idioma"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Para que se utiliza la sentencia DROP TABLE?",
    options: ["Borrar una tabla en una base de datos", "Eliminar registros de una tabla", "Eliminar un campo de una tabla existente", "Modificar los campos de una tabla"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Que realiza la siguiente sentencia? UPDATE pais SET idioma = 'Ingles' WHERE codigo pais = 4;",
    options: ["Actualiza el campo idioma a 'Ingles' en los registros cuyo campo codigo pais sea igual a 4", "Agrega un campo llamado idioma y establece el texto 'Ingles'", "Tiene errores de sintaxis", "Altera la estructura de la tabla"]
  },
  {
    subject: "BASE DE DATOS 1",
    question: "¿Cuáles son los componentes de una tabla?",
    options: ["Campo, registro, dato", "Registro, query, dato", "Campo, tabla, dato", "Campo, registro, select"]
  },

  //BASE DE DATOS AVANZADA

  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿De qué forma se usan, en MySQL, los términos esquema y base de datos?",
    options: ["De forma intercambiable", "De forma diferente", "Como términos casi iguales", "Como términos opuestos"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿De qué forma se usan, hablando de cualquier base de datos, los términos esquema y base de datos?",
    options: ["De forma diferente", "De forma intercambiable", "Como términos casi iguales", "Como términos opuestos"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Sobre qué elementos de la base de datos funcionan los privilegios de rutina?",
    options: ["Procedimientos", "Tablas", "La base entera", "Triggers"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Qué permite el privilegio DROP en una base de datos?",
    options: ["Permite borrar tablas", "Permite borrar registros", "Permite borrar procesos", "Permite borrar funciones"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Sobre qué elemento se realiza una restauración de una base de datos?",
    options: ["Sobre una base ya creada", "Sobre una base no estructurada", "Sobre una base eliminada", "Sobre la unión con otra"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Sobre qué elemento no se puede hacer un respaldo de una base de datos?",
    options: ["Servidores", "Tablas", "Procedimientos", "Datos"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Qué comando utiliza para crear una Base de Datos?",
    options: ["create database", "create schemas", "create data base", "create data_base"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "Sobre cuál de los siguientes elementos tiene permisos administrador@192.168.0.%?",
    options: ["Red local", "La IP 192.168.0.X", "Toda la red", "Un dominio particular"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Qué práctica no es recomendable al realizar un respaldo de una base de datos?",
    options: ["Utilizar cualquier usuario", "Ubicar rutas completas", "Utilizar comandos", "Utilizar interfaz gráfica"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿De qué forma se ejecuta un trigger en una base de datos?",
    options: ["Automática", "Manual", "Manual y automática", "Mediante un procedimiento"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Cuál de los siguientes comandos no hace que se dispare un trigger?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿En qué momento se usan los triggers en una base de datos?",
    options: ["Antes y después de ejecutar un comando", "Antes de ejecutar un comando", "Después de ejecutar un comando", "Al final de un proceso"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Cómo se ejecuta un trigger en una base de datos?",
    options: ["Por fila", "Por matriz", "Por columna", "Por elemento"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Cuál es el elemento de donde se pueden eliminar los triggers en una base de datos?",
    options: ["Tablas permanentes", "Tablas temporales", "Vistas", "Funciones"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Qué se debe realizar si hay dos disparadores en una misma tabla que corresponde a un mismo momento y sentencia?",
    options: ["Eliminarlos", "Ejecutarlos normalmente", "Pasarlos por alto", "Moverlos"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Cuál sería la operación equivalente a una subconsulta con IN?",
    options: ["SELECT A.al, A.a2 FROM A WHERE A.ida IN (SELECT B.ida FROM B WHERE B.b1 IN ('a','b'))", "SELECT A.a1.A.82 FROM A.B WHERE B.bi IN (a,b,c)", "SELECT A.al, A.a2 FROM B WHERE B.b1 IN (abc)", "SELECT A.al.A.82 FROM A WHERE A.ida = (SELECT B.ida FROM B WHERE 8.b1 IN ('a','b','c'))"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Cuál es la palabra reservada utilizada para conceder los privilegios dentro de una base de datos?",
    options: ["GRANT", "REVOKE", "CONCEDE", "ADD"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Qué sentencia se debe utilizar para crear un procedimiento almacenado?",
    options: ["CREATE PROCEDURE", "CREATE PROCEDS", "ADD PROCEDURE", "NEW PROCEDURE"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Cuál es el query que regresará todos los nombres de profesores que inicien con la letra 'C'?",
    options: ["SELECT Professor_Name FROM SALARIES WHERE Professor_Name LIKE 'C%'", "SELECT Professor_Name FROM SALARIES FROM Professor_Name LIKE 'C'", "SELECT Professor_Name FROM SALARIES WHERE Professor_Name LIKE Salary", "SELECT Professor_Name WHERE SALARIES FROM Professor_Name LIKE 'C%'"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Cuál de los siguientes enunciados SQL se usa para quitarle un privilegio al usuario Rivas?",
    options: ["Revoke update on empleados from Rivas", "Remove update on empleados from Rivas", "Delete select on empleados from Rivas", "Grant update on empleados from Rivas"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Qué nos permiten las excepciones?",
    options: ["Provocar el error y ejecutar el proceso de excepción", "Establecer alternativas frente a errores", "Un bloque de código que solo se ejecuta una vez", "Un bloque de código reutilizable"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Cuál es el objetivo de los procedimientos almacenados?",
    options: ["Agrupar las instrucciones y cualquier lógica asociada necesaria para llevar a cabo una tarea", "Instrucción que ordena filas", "Instrucción que almacena filas", "Instrucción que recupera filas"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Cómo se conoce a la restauración del valor de los datos tras una transacción abortada?",
    options: ["Rollback", "Seguridad", "Protección", "Revertback"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Cómo se elimina una tabla temporal en MySQL?",
    options: ["DROP TABLE #TableName", "DROP TABLE ##TableName", "DROP TABLE Tmp_TableName", "DROP TABLE TableName"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Cuáles son las funciones de agrupamiento?",
    options: ["SUM, MAX, MIN, AVG, COUNT", "SUM, MAX, MIN, IN, COUNT", "SUM, MAX, MIN, COALESCE, COUNT", "SUM, MAX, MIN, NOW, COUNT"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Cuál es el objetivo de la palabra clave BETWEEN?",
    options: ["Seleccionar datos en base a un rango, establece los valores extremos", "Seleccionar datos que siempre excluyen los valores del rango", "Seleccionar datos en un rango cuyo limite superior no esta incluido", "Seleccionar datos en un rango cuyo limite inferior no está incluído"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "Sobre el uso de subconsultas, ¿para qué se utiliza el operador EXISTS?",
    options: ["Analiza si hay datos que coinciden, no devuelve registros (test de existencia)", "Analiza si hay datos que coinciden, devuelve muchos registros", "Analiza si hay datos que coinciden, devuelve valores temporales", "Exists no se puede usar en subconsultas"]
  },
  {
    subject: "BASE DE DATOS AVANZADA",
    question: "¿Con qué sentencia va acompañada el uso de HAVING?",
    options: ["group by", "exists", "between", "order by"]
  },

  //DESARROLLO DE APLICACIONES MOVILES

  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Qué método ejecuta el constructor de la clase de la base de datos SQLite?",
    options: ["Constructor del padre", "Constructor del hija"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el nombre del permiso para internet?",
    options: ["android.permission.INTERNET", "android.permission.ACCESS_NETWORK_STATE"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Qué es un SplashScreen?",
    options: ["La pantalla que se mostrara mientras se carga la aplicación", "Theme", "Layout", "Una pantalla sin importancia"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Con cual de las siguientes base de datos Android proporciona una compatibilidad completa?",
    options: ["Sqlite", "Postgresql", "Config.ini", "Manifest.xls"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Qué archivos principales se crean en un nuevo proyecto de Android Studio?",
    options: ["AndroidManifest.xml, activity_main.xml, MainActivity.java", "AndroidManifest.xls, ActivityMain.class, main activity.xls", "Config.ini, Manifest.xls", "Manifest.xml"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿En qué archivo se configuran los permisos para acceder al almacenamiento externo?",
    options: ["AndroidManifest.xml", "Config.ini", "ActivityMain.class", "main_activity.xml"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿En qué archivo se encuentran las declaraciones para los componentes visuales de nuestra APP?",
    options: ["activity_main.xml", "String.xml", "Color.xml", "onResume()"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el primer método que se ejecuta cuando se cobra vida un activity según el ciclo de vida del activity?",
    options: ["onCreate()", "onStart()", "onRestart()", "onResume()"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el primer método que se ejecuta cuando se abandona un activity según el ciclo de vida del activity?",
    options: ["onPause()", "onStop()", "onRestart()", "onResume()"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el úttima método que se ejecuta cuando se abandona un activity según el ciclo de vida del activity?",
    options: ["onDestroy()", "onStop()", "onPause()", "onResume()"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el tercer método que se ejecuta cuando se Inicia un activity según el ciclo de vida de las actividades?",
    options: ["onResume()", "onStart()", "onPause()", "onRestart()"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el método de un activity que se ejecuta cuando el usuario vuelve a una actividad que habla sido abandonada completamente?",
    options: ["onRestart()", "onStop()", "onPause()", "onStart()"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es la acción que debe enviar por parámetro en el método setAction de un intent para ejecutar el navegador por default?",
    options: ["Intent.ACTION_VIEW", "Intent.ACTION_SEND", "Intent.ACTION_CALL", "MediaStore.ACTION_IMAGE_CAPTURE"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es la acción que debe enviar por parámetro en el método setAction de un intent para ejecutar abrir la cámara?",
    options: ["MediaStore.ACTION_IMAGE_CAPTURE", "Intent.ACTION_CALL", "Intent.ACTION_SEND", "Intent.ACTION_VIEW"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál valor se debe especificar en el método setType del Intent implícito para indicar que está enviando texto únicamente?",
    options: ["text/plain", "text", "image/", "plain/text"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el nombre del método que se debe utilizar para indicar a un Intent implícito que ejecute una aplicación como Facebook, Twiiter o Whatsapp?",
    options: ["setPackage", "setAction", "addFlags", "putExtra"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuáles son los tipos de clases que debe instanciar para implementar un Simple ListView?",
    options: ["ArrayAdapter, List, ListView", "MyAdapter, ListView, List", "ArrayAdapter, ViewHolder, List", "MyAdapter, List, ViewHolder"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Qué se debe crear para personalizar un ListView?",
    options: ["Layout y Adaptador Personalizado", "Layout y Adapter", "Layout y ArrayAdapter", "Layout"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Qué clase se debe crear para optimizar un ListView?",
    options: ["ViewHolder", "MyAdapter", "Main Activity", "LayoutInflater"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es la clase padre para crear las estructuras de nuestra base de datos SQLite?",
    options: ["SQLiteOpenHelper", "ViewHolder", "SQLiteDatabase", "Ninguna de estas"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál o cuáles son los métodos que se ejecutan la primera vez cuando se instancia una base de datos SQLite?",
    options: ["Constructor de la clase y OnCreate", "OnUpgrade", "Ninguna de estas", "Constructor de la clase"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿En qué método se deben definir las estructuras de creación de tablas por primera vez?",
    options: ["OnCreate", "OnUpgrade", "Constructor de la clase", "newVersion"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál o cuáles son los parámetros del método onUpgrade que me permiten controlar una nueva versión de la base de datos?",
    options: ["newVersion y oldVersion", "newVersion y factory", "factory y version", "oldVersion"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Qué funciones se ejecuta en el método onCreate y onUpdate de la clase de la base de datos?",
    options: ["Select, insert, update y delete (table)", "Insert into (table)", "Update (table)", "Create table, alter table, create trigger"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Dónde debo configurar el permiso para conectarse a Internet en Android?",
    options: ["androidManifest.xml", "gradle", "mainActivity.java", "Layout"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Dónde se debe definir Una librería externa en Android?",
    options: ["gradle", "settings.gradle", "androidManifest.xml", "local properties"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el nombre de la librería que se utiliza para consumir un webservices o una URL?",
    options: ["Retrofit", "Gson", "JSON", "Ninguna"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿En qué archivo se debe definir la IP o nombre de dominio para poder accesar al webservice o URL si usamos retrofit?",
    options: ["network_security_config.xml", "gradle", "mainActivity.java", "androidManifest.xml"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cómo se llama la propiedad de la etiqueta <application> para definir el nombre del archivo que tiene la lista de dominios que podrá acceder la App?",
    options: ["networkSecurityConfig", "supportsRti", "appCategory", "theme"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿El SplashScreen necesita de un layout?",
    options: ["SI", "En ocasiones", "NO", "No existe un SplashScreen"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el contenido de la carpeta src?",
    options: ["Archivos de código fuente Java", "Imágenes e iconos", "Archivos de recursos XML", "El manifiesto de aplicación"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el contenido de la carpeta layout?",
    options: ["Archivos de recursos XML", "Archivos de código fuente Java", "Imágenes e iconos", "El manifiesto de aplicación"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el contenido de la carpeta drawable?",
    options: ["Imágenes e iconos", "Archivos de recursos XML", "Archivos de código fuente Java", "El manifiesto de aplicación"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuales de las siguientes son tamaños de pantalla en android?",
    options: ["Small", "Wide", "Extrasmall", "Layout"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el primer método que se ejecuta al iniciar en el ciclo de vida de un fragmento?",
    options: ["OnAttach()", "OnCreate()", "OnCreateView()", "OnStart()"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Qué método se invoca para conseguir el administrador de fragmentos?",
    options: ["getSupportFragmentManager()", "findFragmentById()", "findFragmentByTag()", "fragmentManager()"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el tercer método que se ejecuta al iniciar en el ciclo de vida de un fragmento?",
    options: ["OnCreateView()", "OnCreate()", "OnAttach()", "OnStart()"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el componente encargado de mostrar los datos y manejar los eventos de usuarios en la Arquitectura de componentes?",
    options: ["Controlador de Interfaz de Usuario", "ViewModel", "Repositorio", "RoomDatabase"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el componente encargado de mantener todos los datos necesarios para la interfaz de usuario?",
    options: ["ViewModel", "Controlador de Interfaz de Usuario", "Repositorio", "Interfaz de Usuario"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el componente encargado de ser la unica fuente de los datos de la aplicación?",
    options: ["Repositorio", "Controlador de Interfaz de Usuario", "ViewModel", "RoomDatabase"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el componente encargado de administrar los datos de fuentes Sqlite usando objetos?",
    options: ["RoomDatabase", "Controlador de Interfaz de Usuario", "ViewModel", "Repositorio"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿En cuál de las siguientes opciones se debe definit una dimensión especifica?",
    options: ["Fixed", "Match Parent", "Wrap Content", "Match Constraint"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál de las siguientes opciones contiene toda la información relacionada con la navegación en una ubicación centralizada?",
    options: ["Gráfico de Navegación", "NavHost", "NavController", "ActionBar"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál de las siguientes opciones es un contenedor vacio encargado de mostrar los gráficos de la navegación?",
    options: ["NavHost", "Gráfico de Navegación", "NavController", "Action Bar"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es el objeto encargado de administrar la navegacion de la APP?",
    options: ["NavController", "Gráfico de Navegación", "NavHost", "Action Bar"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Cuál es la forma correcta de crear e instanciar un objeto llamado myObject de MyClass?",
    options: ["MyClass myObject = new MyClass();", "myObject new MyClass();", "MiClase myObject = new MyClass();", "MyClass.new myObject"]
  },
  {
    subject: "DESARROLLO DE APLICACIONES MOVILES",
    question: "¿Qué es una Activity?",
    options: ["Es cada una de las pantallas que ve el usuario", "Es básicamente un archivo (.xml)", "Es básicamente una clase de java", "Es cada uno de los módulos de la app"]
  },

  //ANÁLISIS Y DISEÑO DE SISTEMAS

  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cómo se define un sistema usable?",
    options: ["Fácil de Entender + Fácil de interpretar", "Fácil de Utilizar + Fácil de Diseñar", "Fácil de Interpretar + Fácil de Desarrollar", "Fácil de Entender + Fácil de Desarrollar"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cómo se define la palabra \"información\" en el análisis de sistemas?",
    options: ["Conjunto de datos que al relacionarse adquieren significado.", "Es la actividad consciente de intercambiar información.", "Reglas que permiten ayudar en el diseño de un sistema.", "Unidad de reglas que por sí sola no tiene ningún significado."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cómo se clasifican los diagramas de Flujo de Datos?",
    options: ["Lógico, Físico", "Lógico, Abstracto, Físico", "Abstracto, Estructural", "Lógico, Abstracto, Estructural"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cuáles son los tipos de preguntas utilizadas en la entrevista?",
    options: ["Abiertas, Cerradas, Sondeo, Bipolar", "Semi Abiertas, Cerradas, Sondeos", "Semi Abiertas, Semicerradas, Sondeos, Bipolar", "Abiertas, Semicerradas, Sondeos"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cómo se clasifican los requerimientos en el análisis y diseño de sistemas?",
    options: ["Funcionales, No funcionales, Calidad, Implementación", "Calidad, Implementación, Observación", "Estructural, Observación, Calidad", "Implementación, Estructural, Observación"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cómo se clasifican los requerimientos no funcionales para el análisis y diseño de sistemas?",
    options: ["Del Producto, Organizacionales, Externos", "Del Producto, Externos", "Del Producto, Organizacionales, Internos", "Estructurales, Organizacionales, Externos"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Qué permiten representar los diagramas de flujo de datos?",
    options: ["Formas visuales para mostrar el movimiento de los datos, por donde ingresan y salen a través de un sistema de información.", "Permiten definir valores, restricciones con los diagramas UML.", "Formas lógica que permite ver por donde ingresa y sale la información a través de un sistema de información.", "Permiten definir estereotipos personalizados."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Para qué se utiliza el documento de especificaciones?",
    options: ["La descripción de las necesidades que debe satisfacer al cliente.", "Enumerar las caracteristicas del sistema.", "Listar las necesidades del cliente.", "Identificar y documentar lo que se necesita."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Qué permite definir el alcance del sistema?",
    options: ["Permite definir sus límites, lo que está al alcance (dentro del sistema) y lo que está fuera de él.", "Permite definir los pasos a seguir en el desarrollo de un sistema.", "Permite definir los recursos a utilizar.", "Permite definir las necesidades del equipo de desarrollo."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cuáles son los usuarios operacionales para el análisis y diseño de sistemas?",
    options: ["Son todos aquellos que laboran en las oficinas, administradores y operadores que son los que tendrán contacto con el sistema.", "Son los que administran a un grupo de usuarios operacionales.", "Son los que desarrollan la aplicación.", "Generalmente nunca se involucran directamente con el proyecto."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Qué es la modularidad?",
    options: ["Es la capacidad que tiene un sistema de ser estudiado como la unión de varias partes que interactúan entre sí.", "Es la forma en que se ve la información.", "Es la capacidad de tener todo en un mismo programa.", "Son todas las ideas, conceptos o símbolos que se utilizan para crear un constructo."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cuál es característica de un módulo?",
    options: ["Tamaño relativamente pequeño, Independencia modular, aisla los detalles mediante encapsulamiento.", "Es genérico.", "No es independiente.", "Contienen toda la funcionalidad del sistema."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cual es la definición de encuesta?",
    options: ["Es una técnica de recopilación que permite estudiar posturas, creencias y características de personas clave.", "Es una acción que permite recopilar información al entrevistado.", "Es una conversación dirigida con un propósito específico.", "Es un método para observar únicamente a los administradores."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿En quién debe fijarse cuando se utiliza el método de observación para verificar el comportamiento del encargado de tomar decisiones?",
    options: ["Observar a los encargados de tomar decisiones, su entorno físico y su interacción ergonómica.", "Preguntar a los gerentes.", "Indagar a todo el personal operativo.", "Observar únicamente a los usuarios administrativos."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "Cuándo observa las actividades de toma de decisiones de un gerente común, ¿Qué puede conocer?",
    options: ["Ver de primera mano cómo recopilan, procesan, comparten y utilizan la información y tecnología.", "Permite conocer la parte operativa.", "Permite al analista interrumpir al gerente.", "Permite al analista interrumpir las actividades para obtener información."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Qué le permite conocer la observación del entorno físico?",
    options: ["Obtener detalles sobre los requerimientos humanos de información de las personas en su entorno.", "Observar los detalles que confirmarán o negarán la narrativa organizacional.", "Observar cómo trabajan los empleados.", "Observar las actividades de los encargados de las decisiones."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Qué es la usabilidad, para el análisis y diseño de sistemas?",
    options: ["Se refiere a una combinación de la eficiencia al desempeñar una tarea y la calidad del trabajo producido.", "Es la preocupación por la comodidad, seguridad y salud de un humano.", "Es la forma de medir la eficacia del sistema.", "Es un medio para evaluar sistemas e interfaces en términos de HCI."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Qué le permite realizar la retroalimentación para los usuarios?",
    options: ["Compara el desempeño actual con los objetivos y devuelve información sobre el vacío existente.", "El sistema debe presentar con claridad la información al usuario.", "Informa cómo se comporta el sistema.", "El sistema debe ser consistente a través de todas sus pantallas."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿A qué tipo de pregunta corresponde: '¿Qué opina sobre el estado actual del comercio electrónico...'?",
    options: ["Abierta", "Sondeo", "Bipolar", "Cerrada"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cómo se clasifica la observación?",
    options: ["Documental o campo. Participante o no Participante. Dirigida y no dirigida. Individual o Equipo.", "Documental o campo. Equipo. Medida. Individual o Equipo.", "Estructurada Abierta Dirigida y no dirigida. Equipo.", "Semiestructurada. Cerrada. Dirigida y no dirigida."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cuál es el objetivo del Análisis de Sistemas?",
    options: ["Identificar necesidades, evaluar viabilidad, análisis técnico/económico, asignar funciones y crear la definición base.", "Identificar las necesidades del cliente y realizar un análisis humano.", "Evaluar viabilidad, análisis humano y establecer restricciones de red.", "Establecer restricciones de usuario y desarrollo posterior."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Con qué otro nombre se lo conoce al diagrama de contexto?",
    options: ["Diagrama de flujo de datos bajo o nivel 0", "Diagrama de flujo de datos superior o nivel 3", "Diagrama de flujo de datos alto o nivel 2", "Diagrama de flujo de datos medio o nivel 1"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cuál es el objetivo de la especificación de sistemas?",
    options: ["Servir como medio de comunicación entre clientes, usuarios, ingenieros de requisitos y desarrolladores.", "Servir como medio de comunicación entre clientes.", "Servir como medio de comunicación entre usuarios.", "Servir como medio de comunicación entre desarrolladores."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cuáles son los pasos para evaluar los riesgos?",
    options: ["Identificación del riesgo, Análisis del Riesgo, Valoración del Riesgo", "Descripción del Riesgo, Análisis del Riesgo, Estimación del Riesgo", "Identificación del desarrollo, Análisis del Riesgo, Descripción del Riesgo", "Definir el riesgo, Diseño del Riesgo, Valoración del Riesgo"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cuál es el esquema de preguntas en una estructura tipo pirámide para la entrevista?",
    options: ["Preguntas específicas a generales", "Preguntas bipolares", "Preguntas específicas a cerradas", "Preguntas generales a específicas"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Qué es el análisis cuantitativo?",
    options: ["Aquel que toma en cuenta mayormente (o únicamente) la cantidad, la proporción, el volumen, etc.", "Aquel que toma en cuenta la calidad, no la cantidad.", "Aquel que se refiere a la revisión de la forma y del conjunto.", "Aquel que analiza los conceptos fundamentales o base."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Qué es el análisis formal?",
    options: ["Aquel que se refiere a la revisión de la forma, del conjunto, más que del contenido.", "Aquel que toma en cuenta mayormente la cantidad.", "Aquel que toma en cuenta la calidad, no la cantidad.", "Aquel que analiza los conceptos fundamentales o base."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Qué es el análisis teórico?",
    options: ["Aquel que analiza los conceptos fundamentales o base.", "Aquel que toma en cuenta la cantidad y proporción.", "Aquel que toma en cuenta la calidad de las cosas.", "Aquel que se refiere a la revisión de la forma."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "En un diagrama de contexto, ¿Qué representa 'ESTUDIANTE'?",
    options: ["Entidad", "Proceso", "Almacenamiento", "Flujo de datos"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "En un diagrama de contexto, ¿Qué representa 'Carta de Aceptación'?",
    options: ["Flujo de datos", "Proceso", "Almacenamiento", "Entidad"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cómo es conocido el movimiento de datos entre procesos y almacenes/entidades?",
    options: ["Flujo de datos", "Flechas etiquetadas", "Almacenamiento", "Entidad"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cómo es representada la entidad en el diagrama de contexto?",
    options: ["Cuadrado", "2 lineas paralelas", "Círculo", "Flechas etiquetadas"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cómo es representado el almacenamiento en el diagrama de contexto?",
    options: ["2 lineas paralelas", "Círculo", "Cuadrado", "Flechas etiquetadas"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cómo es representado el proceso en el diagrama de contexto?",
    options: ["Círculo", "Cuadrado", "Flechas etiquetadas", "2 lineas paralelas"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿A qué tipo de pregunta corresponde: '¿Cuál es el problema específico que está experimentando...?'?",
    options: ["Cerrada", "Sondeo", "Bipolar", "Abierta"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cómo se definen los requerimientos funcionales?",
    options: ["Restricciones de los servicios o funciones ofrecidos por el sistema.", "Los requerimientos que no tienen que ver con el funcionamiento.", "Propiedades emergentes como fiabilidad y tiempo de respuesta.", "Todos las peticiones que realice el usuario final."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cuáles son los datos que SI deben capturarse en un diseño de entrada?",
    options: ["Datos de identificación", "Datos temporales", "Datos calculables", "Datos recuperables"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "Conjunto de programas, procedimientos, reglas, documentación y datos asociados: ¿A qué concepto pertenece?",
    options: ["Software", "Sistema Informático", "Programación", "Hardware"]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Qué es el análisis cualitativo?",
    options: ["Aquel que toma en cuenta la calidad, no la cantidad, es decir, la naturaleza de las cosas.", "Aquel que analiza los conceptos fundamentales o base.", "Aquel que se refiere a la revisión de la forma.", "Aquel que toma en cuenta únicamente la cantidad."]
  },
  {
    subject: "ANÁLISIS Y DISEÑO DE SISTEMAS",
    question: "¿Cómo son conocidas las personas y organizaciones en un diagrama de contexto?",
    options: ["Entidad", "Flechas etiquetadas", "Almacenamiento", "Flujo de datos"]
  },

  //ALGEBRA Y TRIGONOMETRÍA

  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "Acorde a la ecuación: log(x+1)-logx=1, el valor de x es:",
    options: ["1/9", "19", "-1/9", "1"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "El número de bacterias en cierta colonia aumentó de 600 a 1,800 entre las 7:00 A.M. y las 9:00 A.M. Suponiendo que el crecimiento es exponencial, el número de bacterias t horas después de las 7:00 A.M., está dado por la función: f(t)=600(3)^(t/2) ¿Cual es el número de bacterias en la colonia a las 11:00 am?",
    options: ["5400", "1800", "600", "1200"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "El rango de una matriz, se la define como:",
    options: ["El orden de la mayor submatriz cuadrada no nula.", "El orden de la mayor submatriz cuadrada nula.", "El orden de la menor submatriz cuadrada no nula.", "El orden de la menor submatriz cuadrada nula."]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "En la función cuadrática f(x)=(x^2)-1 ¿Cuáles son los puntos de corte en el eje de las abscisas?",
    options: ["(1,0) y (-1,0)", "(0,1) y (0,-1)", "No existe punto de corte", "(0,0)"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "En la función lineal de la forma y = mx, ¿Que indica m > 0?",
    options: ["Función creciente", "Función decreciente", "No existe pendiente", "Recta paralela al eje de las abscisas"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "En la función: y=(3/2)x+1/4, cuando x=2, ¿Qué valor toma y?",
    options: ["13/4", "17/6", "3", "11/4"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Determinar qué valores de A hacen que la matriz no tenga inversa? (Basado en matriz A con filas [1, 0] y [3, 4] o similares en contexto de examen)",
    options: ["-6 y 2", "0", "1", "-2 y 6"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "La tarifa de un transporte de carga es de $18,40 por arranque y $1,40 por cada cuadra recorrida. ¿Cuál es la función lineal que representa la situación?",
    options: ["f(x)= 18,40 + 1,40x", "f(x)= 18,40 - 1,40x", "f(x)= 1,40x", "f(x)= 18,40x"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "Dado el gráfico (decreciente), determinar la función correcta:",
    options: ["y=(1/3)^x", "y=(1/3)^-x", "y=(2/3)^x", "y=(2/3)^-x"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "Se dice que dos matrices son iguales, cuándo:",
    options: ["Tienen la misma dimensión y los elementos que ocupan el mismo lugar en ambas son iguales.", "Tienen el mismo orden y los elementos son diferentes en cada posición.", "Tienen diferente orden o dimensión.", "Tienen los mismos elementos en diferentes posiciones."]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "Sean A y B dos matrices cuadradas de orden 2. ¿Puede ocurrir que su producto dé la matriz nula de orden 2?",
    options: ["Sí, y además, no tiene por qué ser ninguna de ellas la matriz nula.", "Si, solo si las dos son la matriz nula.", "No, nunca puede ocurrir.", "Sí, si al menos una de ellas es la matriz nula."]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Cuál es la propiedad más importante del producto de dos matrices?",
    options: ["No es conmutativa", "Es conmutativa", "No tiene un elemento neutro", "Es asociativa"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Cuándo una matriz se dice que es cuadrada?",
    options: ["Cuando tienen el mismo número de filas y de columnas.", "Cuando el número de filas es mayor que las columnas.", "Cuando el número de columnas es mayor que las filas.", "Cuando el número de columnas es menor que las filas."]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿A qué matrices se les puede sacar el determinante?",
    options: ["Una matriz cuadrada", "Una matriz adjunta", "Una matriz escalonada", "Una matriz transpuesta"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Cuál es la relación que se establece entre dos conjuntos en la función matemática?",
    options: ["A cada elemento del primer conjunto se le asigna solo un elemento del segundo conjunto.", "A cada elemento del primer conjunto se le asignan varios elementos del segundo.", "A varios elementos del primer conjunto no se les asigna nada.", "No se encuentra definido para ningún conjunto."]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Cuál es el orden de la siguiente matriz? [1 2 3 1; 4 5 6 1; 7 8 9 1]",
    options: ["Orden: 3x4", "Orden: 4x3", "Orden: 7", "Orden: 3x4=12"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Cuál es el producto de las siguientes matrices A=[1 0 0; 0 1 1] y B=[2; 3] (si aplica)?",
    options: ["A*B=[] (No definido por dimensiones)", "B*A=(2 3 3)", "A*B=B*A", "B*A=[]"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Cuál es el punto de corte con el eje x en la función cuadrática y=x^2 + 2x + 1?",
    options: ["(-1,0)", "(1,0)", "(0,-1)", "(0,1)"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Cuál es el rango de una matriz?",
    options: ["Número de líneas de esa matriz (filas o columnas) que son linealmente independientes.", "Número de líneas que son linealmente dependientes.", "Número de líneas verticalmente dependientes.", "Número de líneas verticalmente independientes."]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Cuál es el valor de x en la función exponencial 2^(x-1) = 2^(3x)?",
    options: ["-1/2", "1/2", "1", "-1"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Cuál es el valor de y en la función logaritmica log(0.001) = y?",
    options: ["-3", "3", "1/3", "1"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Cuál es es el valor de la pendiente de la recta que pasa por los puntos A(2, 1), B(4, 7)?",
    options: ["3", "-3", "1", "-1"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Cuál es la concavidad de f(x)= 5x^2-8x?",
    options: ["Positiva", "Nula", "Negativa", "No existe"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Cómo se llama la forma abreviada de escribir un sistema de m ecuaciones lineales con n incógnitas?",
    options: ["Notación matricial", "Notación numérica", "Notación algebraica", "Notación real"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿En qué punto pasa por el eje de las ordenadas la función y = (3/2)x + 3?",
    options: ["(0,3)", "(0,-3)", "(3,0)", "(-3,0)"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Qué representa b en la función lineal de la forma y = mx + b?",
    options: ["Desplazamiento de la recta en el eje de las ordenadas.", "Pendiente", "Desplazamiento de la recta en el eje de las abscisas.", "Recta perpendicular al eje de las abscisas."]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Qué es necesario para sumar dos matrices?",
    options: ["Tengan la misma dimensión.", "Coincidan el número de filas solamente.", "Coincidan el nº de columnas solamente.", "Nada"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Qué letra representa las filas y cuál las columnas en una matriz de orden p x q?",
    options: ["p las filas y q las columnas", "p las columnas y q las filas", "p x q, el orden de la matriz", "p y q deben ser iguales"]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Qué nos indica la dimensión de una matriz?",
    options: ["El número de filas y columnas que tiene.", "El número de filas que tiene.", "El número de elementos que tiene.", "El número de columnas que tiene."]
  },
  {
    subject: "ALGEBRA Y TRIGONOMETRÍA",
    question: "¿Cuál es es el valor de la pendiente de la recta que pasa por los puntos A(1,2) B(1,7)?",
    options: ["No definida", "5", "-5", "1"]
  },

];

let filteredQuestions = [];
let currentIdx = 0;
let score = 0;
let totalAsked = 0;

// Elementos del DOM
const subjectFilter = document.getElementById('subject-filter');
const btnNext = document.getElementById('btn-next');

// Inicialización
function init() {
    // Cargar materias en el select
    const subjects = [...new Set(questionsDB.map(q => q.subject))];
    subjects.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s;
        opt.textContent = s;
        subjectFilter.appendChild(opt);
    });

    // Event Listeners
    subjectFilter.addEventListener('change', startQuiz);
    btnNext.addEventListener('click', nextQuestion);

    startQuiz();
}

function startQuiz() {
    const sub = subjectFilter.value;
    filteredQuestions = sub === 'all' ? [...questionsDB] : questionsDB.filter(q => q.subject === sub);
    filteredQuestions.sort(() => Math.random() - 0.5);
    currentIdx = 0;
    score = 0;
    totalAsked = 0;
    updateStats();
    loadQuestion();
}

function loadQuestion() {
    if (currentIdx >= filteredQuestions.length) {
        showResults();
        return;
    }

    const q = filteredQuestions[currentIdx];
    document.getElementById('subject-name').textContent = q.subject;
    document.getElementById('question-html').innerHTML = q.question;
    document.getElementById('feedback-area').style.display = 'none';
    btnNext.style.display = 'none';

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    const correctText = q.options[0];
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = opt;
        btn.onclick = () => checkAnswer(btn, opt === correctText, correctText);
        container.appendChild(btn);
    });

    if (window.MathJax) MathJax.typeset();
}

function checkAnswer(btn, isCorrect, correctText) {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    const feedback = document.getElementById('feedback-area');
    feedback.style.display = 'block';

    if (isCorrect) {
        btn.classList.add('correct');
        score++;
        feedback.textContent = "¡Correcto! Excelente.";
        feedback.style.backgroundColor = "#d4edda";
    } else {
        btn.classList.add('incorrect');
        allBtns.forEach(b => { if(b.innerHTML === correctText) b.classList.add('correct'); });
        feedback.textContent = "Incorrecto. Estudia un poco más este tema.";
        feedback.style.backgroundColor = "#f8d7da";
    }

    totalAsked++;
    updateStats();
    btnNext.style.display = 'block';
}

function nextQuestion() {
    currentIdx++;
    loadQuestion();
}

function updateStats() {
    document.getElementById('correct-count').textContent = score;
    document.getElementById('total-count').textContent = totalAsked;
}

function showResults() {
    document.getElementById('quiz-area').innerHTML = `
        <div style="text-align:center">
            <h2>🎉 ¡Repaso Finalizado!</h2>
            <p style="font-size:1.5rem">Tu puntaje: ${score} de ${totalAsked}</p>
            <button onclick="location.reload()" class="next-btn" style="display:block">Volver a intentar</button>
        </div>`;
}

window.onload = init;