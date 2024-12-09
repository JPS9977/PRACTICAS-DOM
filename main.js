const productos = [
    {
      nombre: "Galaxy S23 Ultra",
      marca: "Samsung",
      memoriaRam: "12 GB",
      almacenamiento: "512 GB",
      precio: 1200,
      camara: "200 MP + 12 MP + 10 MP (frontal 12 MP)",
      autonomia: "Hasta 36 horas de uso continuo",
      caracteristica: "Compatible con S-Pen",
      conectividad: "5G, Wi-Fi 6E, Bluetooth 5.3",
      img:"https://images.samsung.com/ar/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg"
    },
    {
      nombre: "iPhone 15 Pro Max",
      marca: "Apple",
      memoriaRam: "8 GB",
      almacenamiento: "1 TB",
      precio: 1400,
      camara: "48 MP + 12 MP (frontal 12 MP)",
      autonomia: "Hasta 29 horas de reproducción de video",
      caracteristica: "Cuerpo de titanio",
      conectividad: "5G, Wi-Fi 6E, Bluetooth 5.3",
      img: "https://i.guim.co.uk/img/media/18badfc0b64b09f917fd14bbe47d73fd92feeb27/189_335_5080_3048/master/5080.jpg?width=1200&quality=85&auto=format&fit=max&s=b22571000e55d1bbaa6ef55b5122a59e"
    },
    {
      nombre: "Xiaomi 13 Pro",
      marca: "Xiaomi",
      memoriaRam: "12 GB",
      almacenamiento: "256 GB",
      precio: 950,
      camara: "50.3 MP + 50 MP + 50 MP (frontal 32 MP)",
      autonomia: "Hasta 33 horas de uso moderado",
      caracteristica: "Carga rápida de 120W",
      conectividad: "5G, Wi-Fi 6, Bluetooth 5.2",
      img: "https://i.blogs.es/2da12d/img_1286/1366_2000.jpg"
    },
    {
      nombre: "Pixel 8 Pro",
      marca: "Google",
      memoriaRam: "12 GB",
      almacenamiento: "512 GB",
      precio: 1100,
      camara: "50 MP + 48 MP + 12 MP (frontal 10.5 MP)",
      autonomia: "Hasta 24 horas con batería adaptable",
      caracteristica: "Pantalla LTPO OLED con tasa de 120 Hz",
      conectividad: "5G, Wi-Fi 7, Bluetooth 5.3",
      img:"https://cdn.mos.cms.futurecdn.net/5Ay3BFLBgjZiWdqy6dxqng.jpg"
    },
    {
      nombre: "Sony Xperia 1 V",
      marca: "Sony",
      memoriaRam: "12 GB",
      almacenamiento: "256 GB",
      precio: 1300,
      camara: "52 MP + 12 MP + 12 MP (frontal 12 MP)",
      autonomia: "Hasta 30 horas de uso mixto",
      caracteristica: "Modo cine profesional",
      conectividad: "5G, Wi-Fi 6, Bluetooth 5.2",
      img: "https://i.blogs.es/c66c71/sony-xperia-1-v-analisis-33/1366_2000.jpeg"
    },
    {
      nombre: "OnePlus 11",
      marca: "OnePlus",
      memoriaRam: "16 GB",
      almacenamiento: "256 GB",
      precio: 799,
      camara: "50 MP + 48 MP + 32 MP (frontal 16 MP)",
      autonomia: "Hasta 29 horas con uso promedio",
      caracteristica: "Calibración de pantalla Hasselblad",
      conectividad: "5G, Wi-Fi 6E, Bluetooth 5.3",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvuQo3V30mYI78VtHoefI-kPY7-FKuBPm_A&s"
    },
    {
      nombre: "Moto Edge 40 Pro",
      marca: "Motorola",
      memoriaRam: "12 GB",
      almacenamiento: "512 GB",
      precio: 900,
      camara: "50 MP + 50 MP + 12 MP (frontal 60 MP)",
      autonomia: "Hasta 32 horas con carga completa",
      caracteristica: "Pantalla curva OLED",
      conectividad: "5G, Wi-Fi 6E, Bluetooth 5.3",
      img:"https://es.gizmodo.com/app/uploads/2023/04/3d7a1bbd44909e33b8ec3ce9b8da2082.jpg"
    },
    {
      nombre: "Asus ROG Phone 7",
      marca: "Asus",
      memoriaRam: "16 GB",
      almacenamiento: "512 GB",
      precio: 1000,
      camara: "50 MP + 13 MP + 5 MP (frontal 32 MP)",
      autonomia: "Hasta 40 horas de uso gaming",
      caracteristica: "Optimizado para gaming con enfriamiento avanzado",
      conectividad: "5G, Wi-Fi 7, Bluetooth 5.3",
      img:"https://cdn.dxomark.com/wp-content/uploads/medias/post-150836/Asus-ROG-Phone-7_-W_featured-image-packshot-review.jpg"
    }
  ];


  const container = document.querySelector('.container');

const card = document.createElement('div');
card.classList.add('card');


//   for(let producto of productos){
//     console.log(producto["marca"]);
//   }

// const producto1 = productos[0];

// const titulo = document.createElement('h3')
// titulo.textContent = producto1.nombre
// card.append(titulo)

//let precioInput = Number(prompt('Ingrese un valor que desee'))

for(let producto of productos){
    const card = document.createElement('div');
    card.classList.add('card');

    const titulo = document.createElement('h3')
    titulo.textContent = producto['nombre']
    card.append(titulo)
    delete producto['nombre']


    if(Object.hasOwn(producto, 'img')){
    const img = document.createElement('img');
    img.src = producto['img']
    img.classList.add('card-img')
    img.setAttribute('alt', `${titulo.textContent} - img`)
    card.append(img)
    delete producto['img']
    //console.log(img);
    }

    for(let keyProducto in producto){
        const p = document.createElement('p')
        parseArrayInStr(producto, keyProducto, p)

        // if(Array.isArray(producto[keyProducto])){
        //     const str = producto[keyProducto].join(' - ')
        //     p.innerHTML = `<span class="prop">${producto[keyProducto]}:</span>${str}`

        // }else{
        //     ofertarProducto(producto, keyProducto, p)
        // }
        card.append(p)
    }
    
    container.append(card)
}    

function parseArrayInStr(producto, key, elemento){
    if(Array.isArray(producto[key])){
        const str = producto[key].join(' - ')
        elemento.innerHTML = `<span class="prop">${producto[keyProducto]}:</span>${str}`
    }else{
        ofertarProducto(producto, key, elemento)
    }
}
function ofertarProducto(producto, key, elemento){

if(Number(producto['precio']) < 1600 && key === 'precio'){
    elemento.classList.add('oferta')
    elemento.innerHTML=`<span class="prop">${key}</span>: $${producto[key]} OFERTA!`
}else{
    elemento.innerHTML= `<span class="prop">${key}</span>: ${producto[key]}`
}
}


