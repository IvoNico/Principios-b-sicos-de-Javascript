class Usuario{
    constructor(nombre, apellido, mascota, libros){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascota = mascota;
        this.libros = libros;
    }
    addBook(libros){
        this.libros.push(libros)
    }
    getFullName(){
        console.log('Nombre:', this.nombre, 'Apellido:', this.apellido);
    }
    addMascota(mascotas){
        this.mascota.push(mascotas)
    }
    countMascotas(){
        console.log('Número de animales:',this.mascota.length)
    }
    
}

const pedroFernandez = new Usuario ('Pedro','Fernandez',[],[])
pedroFernandez.getFullName()
pedroFernandez.addMascota('perro')
pedroFernandez.addMascota('gato')
pedroFernandez.countMascotas()
pedroFernandez.addBook({titulo:'Harry Potter', autor:'harry'})
pedroFernandez.addBook({titulo: 'Padre Rico', autor: 'Robert Kiyosaki'})

console.log(pedroFernandez)
