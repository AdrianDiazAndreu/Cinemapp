


class clsCine{
    constructor(){
        // params //
        this.peli_1 ;
        this.peli_2 ;
        this.peli_3 ;
        this.peli_4 ;
        this.peli_5 ;
        this.peli_6 ;
        this.titulos = ["Cruella","Free Guy","La Familia Adams 2",
                        "Shang-Chi","Sin tiempo para morir","Venom 2"] ;

        this.rutas = ["./imgs/films/cruella.jpg",
                      "./imgs/films/free_guy.jpg",
                      "./imgs/films/la-familia-addams-2.jpg",
                      "./imgs/films/shang-chi.jpg",
                      "./imgs/films/sin-tiempo-para-morir.jpg",
                      "./imgs/films/venom2.jpg"] ;

        this.grid_pelis = document.getElementById("grid_pelis");
        this.encabezado = document.getElementById("titulo").innerHTML = "Elige tu pelicula" ;
        // methods//
        this.crearPelis();
        this.appendPelis() ;
        
    }

    crearPelis(){
        /**params
         * id de la peli
         * titulo de la peli
         * ruta de la peli
        */
        this.peli_1 = new clsPeli(1,this.titulos[0],this.rutas[0]) ;
        this.peli_2 = new clsPeli(2,this.titulos[1],this.rutas[1]) ;
        this.peli_3 = new clsPeli(3,this.titulos[2],this.rutas[2]) ;
        this.peli_4 = new clsPeli(4,this.titulos[3],this.rutas[3]) ;
        this.peli_5 = new clsPeli(5,this.titulos[4],this.rutas[4]) ;
        this.peli_6 = new clsPeli(6,this.titulos[5],this.rutas[5]) ;
    }

    appendPelis(){
        
        var _1 = this.peli_1.drawPeli() ;
        var _2 = this.peli_2.drawPeli() ;
        var _3 = this.peli_3.drawPeli() ;
        var _4 = this.peli_4.drawPeli() ;
        var _5 = this.peli_5.drawPeli() ;
        var _6 = this.peli_6.drawPeli() ;


        this.grid_pelis.appendChild(_1)
        this.grid_pelis.appendChild(_2)
        this.grid_pelis.appendChild(_3)
        this.grid_pelis.appendChild(_4)
        this.grid_pelis.appendChild(_5)
        this.grid_pelis.appendChild(_6)
        
    }
}