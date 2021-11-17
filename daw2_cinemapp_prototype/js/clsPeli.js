

class clsPeli{
    constructor(id_peli,titulo_peli,ruta_peli){
        // params //
        this.id = id_peli ;
        this.sala1 ; this.sala1 ; this.sala2 ; this.sala3 ; this.sala4 ; this.sala5 ; this.sala6 ; this.sala7 ; this.sala8 ;
        this.titulo = titulo_peli ;
        this.ruta = ruta_peli ;
        this.celda_peli ;
        this.img_peli ;
        this.butt_peli ;
        this.grid_pelis = document.getElementById("grid_pelis"); //div//
        // methods //

    }
    borrarPeliz(){
        var panel = document.getElementById("panel");
        panel.innerHTML = "" ;
        this.grid_pelis.innerHTML = "" ;
    }

    drawPeli(){
        // DOM ELEMENT DECLARATION //
        this.celda_peli = document.createElement("div") ;
        this.celda_peli.className = "div_peli" ;
        this.celda_peli.id = "id_"+this.id ;


        this.img_peli = document.createElement("img");
        this.img_peli.className = "img_peli" ;
        this.img_peli.src = this.ruta ;
        this.img_peli.width = 190;
        this.img_peli.height = 250;

        this.celda_peli.append(this.img_peli) ;
        this.celda_peli.append(this.titulo);
        var br1 = document.createElement("br");
        var br2 = document.createElement("br");
        this.celda_peli.append(br1);
        this.celda_peli.append(br2);

        ///////////////LISTENERS////////////////////////

        this.celda_peli.addEventListener ("click",this.onclick.bind(this));

        return this.celda_peli ;

    }

    onclick(){
        console.log("click"+this.id);
        this.borrarPeliz() ;

    }

    //////////////////////////////////// SALAS ////////////////////////////////////////


    


}