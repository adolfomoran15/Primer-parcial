const recetas = [
    {
        id: "sopa-calabaza",
        nombre: "Sopa de calabaza",
        descripcion: "Cremosa, rápida y perfecta para el invierno.",
        categoria: "Sopas",
        tipoPlato: "entrada",
        teoria: "sopa",
        destacada: true,

        ingredientes: [
            { nombre: "Calabaza", cantidad: 150, unidad: "g" },
            { nombre: "Cebolla", cantidad: 0.25, unidad: "unidad" },
            { nombre: "Caldo de verduras", cantidad: 150, unidad: "ml" },
            { nombre: "Crema de leche", cantidad: 30, unidad: "ml" },
            { nombre: "Sal y pimienta", cantidad: "a gusto", unidad: "" }
        ],
        minutos: 20,
        imagen: "imagenes/Sopa-Calabaza.jpg",
        pasos: [
            "Pelar la calabaza y cortarla en cubos pequeños; picar la cebolla.",
            "Rehogar la cebolla en una ollita con un chorrito de aceite hasta que transparente.",
            "Agregar la calabaza y el caldo caliente. Cocinar tapado a fuego medio hasta que la calabaza esté tierna (unos 12-15 min).",
            "Retirar del fuego y procesar con mixer o licuadora hasta lograr una textura homogénea.",
            "Incorporar la crema de leche, ajustar con sal y pimienta, y calentar 1 minuto más antes de servir."
        ]
    },
    {
        id: "sandwich-milanesa",
        nombre: "Sándwich de milanesa",
        descripcion: "El clásico de fin de semana, a puro pan y milanesa.",
        categoria: "Sándwiches",
        tipoPlato: "principal",
        teoria: "sandwich",
        destacada: true,
        ingredientes: [
            { nombre: "Milanesa de carne cocida", cantidad: 1, unidad: "unidad" },
            { nombre: "Pan francés o baguette", cantidad: 0.5, unidad: "unidad" },
            { nombre: "Tomate", cantidad: 0.5, unidad: "unidad" },
            { nombre: "Hojas de lechuga", cantidad: 2, unidad: "hojas" },
            { nombre: "Mayonesa", cantidad: 1, unidad: "cucharada" }
        ],
        minutos: 15,
        imagen: "imagenes/Sandwitc-Milanesa.jpg",
        pasos: [
            "Cortar el pan al medio y tostar apenas la parte interior si se desea.",
            "Untar ambas caras de la miga con mayonesa.",
            "Lavar bien la lechuga y cortar el tomate en rodajas finas.",
            "Acomodar la milanesa tibia en la base, disponer encima el tomate y la lechuga, y cerrar el sándwich presionando ligeramente."
        ]
    },
    {
        id: "ensalada-cesar",
        nombre: "Ensalada César",
        descripcion: "Fresca, liviana y lista en menos de 15 minutos.",
        categoria: "Ensaladas",
        tipoPlato: "entrada",
        teoria: "ensalada",
        destacada: true,

        ingredientes: [
            { nombre: "Lechuga romana", cantidad: 0.25, unidad: "planta" },
            { nombre: "Pechuga de pollo a la plancha", cantidad: 100, unidad: "g" },
            { nombre: "Crutones de pan", cantidad: 25, unidad: "g" },
            { nombre: "Queso parmesano rallado", cantidad: 20, unidad: "g" },
            { nombre: "Aderezo César", cantidad: 1.5, unidad: "cucharadas" }
        ],
        minutos: 15,
        imagen: "imagenes/Ensalada-Cesar.jpg",
        pasos: [
            "Lavar y secar bien las hojas de lechuga romana, troceándolas con las manos en bocados medianos.",
            "Cortar el pollo ya cocido a la plancha en tiras o cubos.",
            "En un bol individual, disponer la lechuga como base, sumar el pollo y los crutones crocantes.",
            "Bañar con el aderezo César y coronar con las escamas o ralladura de queso parmesano."
        ]
    },
    {
        id: "guiso-lentejas",
        nombre: "Guiso de lentejas",
        descripcion: "Casero y abundante, de esos que se cocinan a fuego lento.",
        categoria: "Guisos",
        tipoPlato: "principal",
        teoria: "sopa",
        destacada: false,
        ingredientes: [
            { nombre: "Lentejas hidratadas", cantidad: 100, unidad: "g" },
            { nombre: "Chorizo colorado", cantidad: 0.25, unidad: "unidad" },
            { nombre: "Roast beef o panceta", cantidad: 60, unidad: "g" },
            { nombre: "Cebolla", cantidad: 0.25, unidad: "unidad" },
            { nombre: "Papa", cantidad: 0.5, unidad: "unidad" },
            { nombre: "Puré de tomate", cantidad: 75, unidad: "ml" },
            { nombre: "Caldo de carne", cantidad: 200, unidad: "ml" }
        ],
        minutos: 60,
        imagen: "imagenes/Guiso-Lentejas.jpg",
        pasos: [
            "Cortar la carne en cubos pequeños, el chorizo en rodajas y picar la cebolla.",
            "En una olla pequeña, sellar la carne y el chorizo hasta que suelten sus jugos.",
            "Sumar la cebolla y saltear hasta que esté dorada.",
            "Agregar el puré de tomate, las lentejas bien enjuagadas y el caldo de carne.",
            "Tapar y cocinar a fuego bajo durante 30 minutos.",
            "Incorporar la papa cortada en cubos y continuar la cocción unos 15 minutos más hasta que la papa esté blanda y el caldo haya espesado."
        ]
    },
    {
        id: "torta-chocolate",
        nombre: "Torta de chocolate",
        descripcion: "Bizcochuelo húmedo con relleno y cobertura de chocolate.",
        categoria: "Postres",
        tipoPlato: "postre",
        teoria: "sandwich",
        destacada: false,
        ingredientes: [
            { nombre: "Harina 0000", cantidad: 60, unidad: "g" },
            { nombre: "Cacao amargo en polvo", cantidad: 20, unidad: "g" },
            { nombre: "Azúcar", cantidad: 50, unidad: "g" },
            { nombre: "Huevo", cantidad: 1, unidad: "unidad" },
            { nombre: "Leche", cantidad: 40, unidad: "ml" },
            { nombre: "Aceite neutro", cantidad: 25, unidad: "ml" },
            { nombre: "Dulce de leche o ganache para rellenar", cantidad: 75, unidad: "g" }
        ],
        minutos: 45,
        imagen: "imagenes/Torta-Chocolate.jpg",
        pasos: [
            "Precalentar el horno a 180°C y enmantecar un molde individual o pequeño.",
            "Batir el huevo con el azúcar en un recipiente hasta que la mezcla espume y se aclare.",
            "Agregar el aceite neutro y la leche, integrando suavemente.",
            "Tamizar la harina junto con el cacao e incorporarlos con movimientos envolventes para no bajar el batido.",
            "Volcar la mezcla en el molde y hornear durante 25 a 30 minutos (verificar pinchando con un palillo).",
            "Dejar enfriar bien, desmoldar, cortar al medio y rellenar/cubrir con el dulce de leche o ganache."
        ]
    },
    {
        id: "chipa",
        nombre: "Chipa",
        descripcion: "Pancitos de queso y almidón de mandioca, típicos del litoral.",
        categoria: "Panadería",
        tipoPlato: "entrada",
        teoria: "sandwich",
        destacada: false,

        ingredientes: [
            { nombre: "Fécula de mandioca", cantidad: 125, unidad: "g" },
            { nombre: "Queso de cáscara colorada", cantidad: 50, unidad: "g" },
            { nombre: "Queso tipo sardo picado", cantidad: 40, unidad: "g" },
            { nombre: "Manteca pomada", cantidad: 25, unidad: "g" },
            { nombre: "Huevo", cantidad: 0.5, unidad: "unidad" },
            { nombre: "Leche", cantidad: 25, unidad: "ml" },
            { nombre: "Polvo de hornear", cantidad: 0.25, unidad: "cucharadita" }
        ],
        minutos: 30,
        imagen: "imagenes/Chipa.jpg",
        pasos: [
            "En un bol, integrar la fécula de mandioca, los quesos rallados/picados y el polvo de hornear.",
            "Hacer un hueco en el centro y colocar la manteca blanda, el medio huevo batido y un chorrito de leche.",
            "Unir los ingredientes con las manos agregando leche de a poco hasta formar una masa suave que no se pegue.",
            "Formar bollitos del tamaño de una nuez y disponerlos en una placa para horno sin amontonar.",
            "Llevar a horno bien caliente (200°C) durante 15 minutos hasta que estén levemente dorados por fuera."
        ]
    },
    {
        id: "pollo-papas",
        nombre: "Pollo al horno con papas",
        descripcion: "Dorado y jugoso, con papas al horno como acompañamiento.",
        categoria: "Platos principales",
        tipoPlato: "principal",
        teoria: "ensalada",
        destacada: false,

        ingredientes: [
            { nombre: "Presa de pollo (pata/muslo o pechuga)", cantidad: 1, unidad: "unidad (apx 350g)" },
            { nombre: "Papas grandes", cantidad: 1, unidad: "unidad" },
            { nombre: "Limón", cantidad: 0.25, unidad: "unidad" },
            { nombre: "Aceite de oliva", cantidad: 1, unidad: "cucharada" },
            { nombre: "Romero y tomillo", cantidad: "a gusto", unidad: "" },
            { nombre: "Ajo picado", cantidad: 0.5, unidad: "diente" }
        ],
        minutos: 60,
        imagen: "imagenes/Pollo-Papas.png",
        pasos: [
            "Pelar la papa y cortarla en cuñas o rodajas medianas.",
            "Acomodar el pollo y las papas en una asadera individual para horno.",
            "Condimentar todo con el ajo picado, romero, tomillo, sal, pimienta y el jugo de limón.",
            "Rociar generosamente con aceite de oliva.",
            "Hornear a 200°C por 45-50 minutos, dando vuelta la presa de pollo a mitad de cocción para que se dore de ambos lados."
        ]
    },
    {
        id: "bife-chorizo",
        nombre: "Bife de chorizo a la parrilla",
        descripcion: "Un corte clásico, a punto, con su costrita por fuera.",
        categoria: "Parrilla",
        tipoPlato: "principal",
        teoria: "ensalada",
        destacada: false,
        ingredientes: [
            { nombre: "Bife de chorizo de 3cm de grosor", cantidad: 250, unidad: "g" },
            { nombre: "Sal gruesa o parrillera", cantidad: "a gusto", unidad: "" },
            { nombre: "Pimienta negra recién molida", cantidad: "a gusto", unidad: "" }
        ],
        minutos: 25,
        imagen: "imagenes/Bife-Chorizo.jpg",
        pasos: [
            "Preparar la parrilla con brasas al rojo vivo y asegurar una temperatura media-alta (soportar 4-5 segundos la mano sobre el fierro).",
            "Salalar el bife de ambos lados justo antes de llevarlo a la parrilla.",
            "Cocinar durante 12 a 15 minutos sin moverlo hasta que empiecen a asomar gotitas de jugo en la superficie.",
            "Dar vuelta con pinza (sin pinchar) y cocinar por 8 a 10 minutos más para lograr un punto medio.",
            "Dejar reposar 2 minutos sobre una tabla antes de cortar para que se redistribuyan los jugos."
        ]
    },
    {
        id: "provoleta",
        nombre: "Provoleta",
        descripcion: "Queso derretido a la parrilla, con orégano y aceite de oliva.",
        categoria: "Entradas",
        tipoPlato: "entrada",
        teoria: "sopa",
        destacada: false,
        ingredientes: [
            { nombre: "Queso provolone para parrilla", cantidad: 1, unidad: "rodaja (100g)" },
            { nombre: "Orégano seco", cantidad: 0.5, unidad: "cucharadita" },
            { nombre: "Ají molido", cantidad: 0.25, unidad: "cucharadita" },
            { nombre: "Aceite de oliva", cantidad: 0.5, unidad: "cucharada" },
            { nombre: "Harina (para rebozar suavemente)", cantidad: 0.5, unidad: "cucharada" }
        ],
        minutos: 10,
        imagen: "imagenes/Provoleta.jpg",
        pasos: [
            "Pasar la rodaja de provolone por harina por ambas caras sacudiendo el exceso (ayuda a crear la costra crocante).",
            "Colocar directamente sobre la parrilla bien caliente o provoletera de hierro.",
            "Cocinar unos 4-5 minutos hasta que la base esté dorada y crujiente, dar vuelta con espátula, condimentar con orégano, ají molido y aceite de oliva, y cocinar 3 minutos más."
        ]
    },
    {
        id: "empanadas-carne",
        nombre: "Empanadas de carne",
        descripcion: "Repulgo casero, jugosas por dentro y doradas por fuera.",
        categoria: "Empanadas",
        tipoPlato: "entrada",
        teoria: "sandwich",
        destacada: false,
        ingredientes: [
            { nombre: "Tapas de empanada", cantidad: 2, unidad: "unidades" },
            { nombre: "Carne picada o cortada a cuchillo", cantidad: 100, unidad: "g" },
            { nombre: "Cebolla", cantidad: 100, unidad: "g" },
            { nombre: "Huevo duro picado", cantidad: 0.3, unidad: "unidad" },
            { nombre: "Aceitunas verdes picadas", cantidad: 10, unidad: "g" },
            { nombre: "Comino y pimentón dulce", cantidad: "a gusto", unidad: "" }
        ],
        minutos: 40,
        imagen: "imagenes/Empanadas.jpg",
        pasos: [
            "Picar la cebolla fina y rehogarla en una sartén con grasa o aceite hasta que transparente.",
            "Agregar la carne picada, salpimentar y condentar con comino y pimentón dulce. Cocinar solo hasta que pierda el color rojo.",
            "Retirar del fuego y dejar enfriar completamente el relleno en la heladera.",
            "Mezclar con el huevo duro y las aceitunas picadas.",
            "Repartir el relleno en las 2 tapas, humedecer los bordes, cerrar bien y hacer el repulgo.",
            "Pincelar con huevo batido y hornear a 220°C (horno bien fuerte) durante 12-15 minutos hasta dorar."
        ]
    },
    {
        id: "locro",
        nombre: "Locro",
        descripcion: "Maíz, zapallo y carne, cocidos a fuego lento por horas.",
        categoria: "Platos tradicionales",
        tipoPlato: "principal",
        teoria: "sopa",
        destacada: false,
        ingredientes: [
            { nombre: "Maíz blanco partido (remojado)", cantidad: 75, unidad: "g" },
            { nombre: "Porotos alubia (remojados)", cantidad: 50, unidad: "g" },
            { nombre: "Zapallo plomo / cabutia", cantidad: 125, unidad: "g" },
            { nombre: "Panceta salada", cantidad: 40, unidad: "g" },
            { nombre: "Faldata o pechito de cerdo", cantidad: 80, unidad: "g" },
            { nombre: "Chorizo colorado", cantidad: 0.25, unidad: "unidad" }
        ],
        minutos: 180,
        imagen: "imagenes/Locro.png",
        pasos: [
            "Dejar en remojo el maíz blanco y los porotos desde la noche anterior en recipientes separados.",
            "En una olla gruesa, colocar el maíz y los porotos con abundante agua limpia y llevar a ebullición a fuego medio.",
            "Incorporar las carnes, la panceta cortada en tiras y el chorizo en rodajas.",
            "Desespumar la superficie a medida que rompa el hervor.",
            "Agregar el zapallo cortado en cubos chicos; a medida que avance la cocción se irá deshaciendo y le dará espesor al caldo.",
            "Cocinar a fuego muy bajo revolviendo frecuentemente con cuchara de madera durante 2 a 3 horas hasta lograr un guiso cremoso y espeso.",
            "Servir muy caliente con salsita picante (quiquirimichi) opcional por encima."
        ]
    },
    {
        id: "milanesas-pure",
        nombre: "Milanesas con puré",
        descripcion: "El combo de toda la vida, crocante y cremoso.",
        categoria: "Platos principales",
        tipoPlato: "principal",
        teoria: "ensalada",
        destacada: false,
        ingredientes: [
            { nombre: "Nalga o bola de lomo para milanesa", cantidad: 150, unidad: "g" },
            { nombre: "Huevo batido con provenzal", cantidad: 0.5, unidad: "unidad" },
            { nombre: "Pan rallado", cantidad: 75, unidad: "g" },
            { nombre: "Papas para el puré", cantidad: 250, unidad: "g" },
            { nombre: "Leche entera", cantidad: 30, unidad: "ml" },
            { nombre: "Manteca", cantidad: 10, unidad: "g" }
        ],
        minutos: 35,
        imagen: "imagenes/Milanesas-Pure.png",
        pasos: [
            "Pelar las papas, cortarlas en trozos parejos y ponerlas a hervir en abundante agua con sal hasta que estén bien tiernas.",
            "Pasar la carne por el huevo batido condientado con provenzal y luego empanar presionando con firmeza.",
            "Freír la milanesa en abundante aceite caliente (o hornear a fuego fuerte) hasta que esté dorada de ambos lados.",
            "Colar las papas calientes, pisarlas inmediatamente e incorporar la manteca y la leche tibia hasta lograr un puré cremoso.",
            "Servir la milanesa crocante acompañada por la porción de puré salpimentado a gusto."
        ]
    }
];
let posicionCarrusel = 0;

/**
 * Carga las recetas destacadas en el carrusel
 * @method CargarDestacadas
 */
const CargarDestacadas = () => {
    const contenedor = document.getElementById("lista-destacadas");
    const recetasdestacadas = recetas.filter (
        receta => receta.destacada === true );

        contenedor.innerHTML = "";

for (let i = 0;i <recetasdestacadas.length; i++){
    const receta = recetasdestacadas[i];
    contenedor.innerHTML += `<article class="tarjeta-receta">
        <img src="${receta.imagen}" alt="${receta.nombre}">
        <h3>${receta.nombre}</h3>
        <p>${receta.descripcion}</p>
        <button 
            type="button" 
            class="boton-ver-receta-destacada"
            onclick="verReceta('${receta.id}')">
            Ver receta
        </button>
    </article>`;
}
};
CargarDestacadas();

/**
 * Mueve el carrusel de recetas destacadas
 * @method moverCarrusel
 * @param {string} direccion - Dirección en la que se moverá el carrusel
 */
const moverCarrusel = direccion => {
    const lista = document.getElementById("lista-destacadas");
    const ventana = document.getElementById("ventana-destacadas");
    const espacio = 24;
    const desplazamiento = ventana.offsetWidth + espacio;
    const cantidadRecetas = 3;

    if (direccion === "derecha"){
        posicionCarrusel++;
        if(posicionCarrusel >= cantidadRecetas){
        posicionCarrusel = 0;
    }
    }
    if (direccion === "izquierda"){
        posicionCarrusel--;

        if(posicionCarrusel < 0 ){
            posicionCarrusel = cantidadRecetas -1;
        }
    }
    lista.style.transform = `translateX(-${posicionCarrusel * desplazamiento}px)`;
};