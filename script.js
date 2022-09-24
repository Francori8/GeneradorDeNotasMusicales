

var idi = 0
var idiB = 0 
var idN = 0
var idS = 0
var it = 0

const context = new (window.AudioContext || window.webkitAudioContext)



function permitir(){
    document.addEventListener("keydown",function(event){
     let teclas = event.key
    
        teclado(teclas)
    })
    let permiso = document.getElementById("permiso")
    permiso.style.display = "none"

}

function teclado(teclas){ 
    switch(teclas){
        case "z" :
            Sonido(0)
        break;
        case "Z":
            Sonido(12)
        break;
        case "s":
            Sonido(1)
        break;
        case "S":
            Sonido(13)
        break;
        case "x" :
            Sonido(2)
        break;
        case "X" :
            Sonido(14)
        break;
        case "d" :
            Sonido(3)
        break;
        case "D" :
            Sonido(15)
        break;
        case "c" :
            Sonido(4)
        break;
        case "C" :
            Sonido(16)
        break;
        case "v" :
            Sonido(5)
        break;
        case "V" :
            Sonido(17)
        break;
        case "g" :
            Sonido(6)
        break;
        case "G":
            Sonido(18)
        break;
        case "b" :
            Sonido(7)
        break;
        case "B" :
            Sonido(19)
        break;
        case "h" :
            Sonido(8)
        break;
        case "H" :
            Sonido(20)
        break;
        case "n" :
            Sonido(9)
        break;
        case "N" :
            Sonido(21)
        break;
        case "j" :
            Sonido(10)
        break;
        case "J" :
            Sonido(22)
        break;
        case "m" :
            Sonido(11)
        break;
        case "M" :
            Sonido(23)
        break;
    }
}

function Sonido(nota){

        //contiene la vibración por segundo de la nota
    //posición en el arreglo: do=0,do#=1,re=2........

    // en teoria esa constante consigue los microtonos
    const m =  1.0293022366434920287823718007739
    let frecuencias = [261.626,277.183,293.665,311.127,329.628,349.228,369.994,391.995,415.305,440.000,466.164,493.883]
   
    let Sonidos
    let esc = document.getElementById("escala")
    let escFre = Math.pow(2,esc.value)

    frecuencias = frecuencias.map(function(e){
        return e*escFre
    })
    
  

    if(nota<=11){
    Sonidos = frecuencias
   } else {
    nota = nota-12
    Sonidos = frecuencias.map(function(element){
        return element*m
    })
   }
    //creamos contexto
    
    const osc = context.createOscillator()
    //sacado de https://hdeleon.net/crear-sonido-con-el-navegador-con-javascript-html5-sin-mp3-ni-wav/
    //creamos oscilador
    
    let estilo = document.getElementById("tipo")
    let g = context.createGain()
   

   
    osc.connect(g)
    // admite: sine, square, sawtooth, triangle
    
    osc.type = estilo.options[estilo.selectedIndex].value

 
    osc.frequency.value=Sonidos[nota]
    


    //asignamos el destino para el sonido
     g.connect(context.destination)
    //osc.connect(context.destination)
    
    //iniciamos la nota
    osc.start(0)
    //detenemos la nota medio segundo despues


   g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5)

  
    
  
}


 
function generar(){
    
    // let array1 = new Array(11)
    let formato = document.querySelector("input[name=eleccion]:checked")

    // restricciones(array1)

    let arrayM = new Array(11)
    
    
    for(let i = 0;i<= 11;i++){
    arrayM[i] = Math.floor(Math.random()*formato.value)
    
    }
  
    
    arrayM = notas(arrayM)
    escribir(arrayM)
    }


// function restricciones(a){
    
  
// }    
function borrarTodo(){
    
    let contenedor = document.getElementById("Cuerpo")
    hijos = contenedor.getElementsByClassName("conjunto")    
 
    let len = hijos.length
    for (let i = len-1; i>= 0 ;i--){
        hijos[i].parentNode.removeChild(hijos[i])
    }
    idi = 0
    idiB = 0
    idN = 0
    idS = 0
}



function numberanote(notaP){
    switch(notaP){
        case 0 :
        notaP = "Do"
        break;
        case 1 :
        notaP = "Do#"
        break;
        case 2 :
        notaP = "Re"
        break;
        case 3 :
        notaP = "Re#"
        break;
        case 4 :
        notaP ="Mi"
        break;
        case 5 :
        notaP = "Fa"
        break;
        case 6 :
        notaP = "Fa#"
        break;
        case 7 :
        notaP = "Sol"
        break;
        case 8 :
        notaP = "Sol#"
        break;
        case 9 :
        notaP = "La"
        break;
        case 10 :
        notaP = "La#"
        break;
        case 11 :
        notaP = "Si"
        break;
        case 12:
        notaP = "Do°"
        break;
        case 13:
        notaP = "Do#°"
        break;
        case 14:
        notaP = "Re°"
        break;
        case 15:
        notaP = "Re#°"
        break;
        case 16:
        notaP = "Mi°"
        break;
        case 17:
        notaP = "Fa°"
        break;
        case 18:
        notaP = "Fa#°"
        break;
        case 19:
        notaP = "Sol°"
        break;
        case 20:
        notaP = "Sol#°"
        break;
        case 21:
        notaP = "Fa°"
        break;
        case 22:
        notaP = "Fa#°"
        break;
        case 23:
        notaP = "Si°"
        break;
        case "Do" :
        notaP = 0
        break;
        case "Do°" :
        notaP = 12
        break;
        case "Do#" :
        notaP = 1
        break;
        case "Do#°" :
        notaP = 13
        break;
        case "Re" :
        notaP = 2
        break;
        case "Re°" :
        notaP = 14
        break;
        case "Re#" :
        notaP = 3
        break;
        case "Re#°" :
        notaP = 15
        break;
        case "Mi" :
        notaP = 4
        break;
        case "Mi°" :
        notaP = 16
        break;
        case "Fa" :
        notaP = 5
        break;
        case "Fa°" :
        notaP = 17
        break;
        case "Fa#" :
        notaP = 6
        break;
        case "Fa#°" :
        notaP = 18
        break;
        case "Sol" :
        notaP = 7
        break;
        case "Sol°" :
        notaP = 19
        break;
        case "Sol#" :
        notaP = 8
        break;
        case "Sol#°" :
        notaP = 20
        break;
        case "La" :
        notaP = 9
        break;
        case "La°" :
        notaP = 21
        break;
        case "La#":
        notaP = 10
        break;
        case "La#°" :
        notaP = 22
        break;
        case "Si":
        notaP = 11
        break;
        case "Si°" :
        notaP = 23
        break;
        
        
    }


    return notaP
}


function notas(a){
    for(let i = 0;i<12;i++){
         let notaP = a[i]  
         a[i] = numberanote(notaP) 
        
        }
  
    return a
}

function escribir(array){
    idi++
    idiB++
    idN++
    idS++   

    

    let nuevoDiv = document.createElement("div")
    nuevoDiv.classList.add("conjunto")
    nuevoDiv.setAttribute("id",idi)

    let notasDiv = document.createElement("div")
    notasDiv.classList.add("notas")
    notasDiv.innerHTML = array

    
    let nuevoBottom = document.createElement("button")
    nuevoBottom.setAttribute("id",idiB)
    nuevoBottom.setAttribute("onclick","borrar(this.id)")
    nuevoBottom.classList.add("borrar")
    nuevoBottom.innerHTML = "Borrar"

    let reproductor = document.createElement("button")
    reproductor.setAttribute("id", idN)
    reproductor.setAttribute("onclick","reproducir(this.id)")
    reproductor.classList.add("repro")
    reproductor.innerHTML = "▶"

    
    let cuerpoRef = document.getElementById("Cuerpo")
 
    nuevoDiv.appendChild(notasDiv)
    nuevoDiv.appendChild(nuevoBottom)
    nuevoDiv.appendChild(reproductor) 

    cuerpoRef.appendChild(nuevoDiv)
  
        
    
}

function borrar(id){
    document.getElementById(id).outerHTML=""   
    idiB--
    idi--
    idN--
    idS--
    }

function reproducir(id){
    let con = document.getElementById(id)
 
    let not = con.querySelector(".notas").textContent
    let notsep = not.split(",")
   
    notsep = notas(notsep)

    sonarIntervalor(notsep,500)
   
  

}

function sonarIntervalor(n,tempo){
   
    let contex = document.getElementById("pause")
 
    
    var t0 = setTimeout(Sonido,tempo*0,n[0])  
    var t1 = setTimeout(Sonido,tempo*1,n[1])
    var t2 = setTimeout(Sonido,tempo*2,n[2])
    var t3  =setTimeout(Sonido,tempo*3,n[3])
    var t4 =setTimeout(Sonido,tempo*4,n[4])
    var t5  =setTimeout(Sonido,tempo*5,n[5])
    var t6  =setTimeout(Sonido,tempo*6,n[6])
    var t7  =setTimeout(Sonido,tempo*7,n[7])
    var t8  =setTimeout(Sonido,tempo*8,n[8])
    var t9  =setTimeout(Sonido,tempo*9,n[9])
    var t10 =setTimeout(Sonido,tempo*10,n[10])
    var t11 =setTimeout(Sonido,tempo*11,n[11])

    
    contex.addEventListener("click",function(){stop(t0,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11)} 
    
)
    
}


       
function stop(t0,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11){
    clearTimeout(t0)
    clearTimeout(t1) 
    clearTimeout(t2) 
    clearTimeout(t3) 
    clearTimeout(t4) 
    clearTimeout(t5) 
    clearTimeout(t6) 
    clearTimeout(t7) 
    clearTimeout(t8) 
    clearTimeout(t9) 
    clearTimeout(t10)
    clearTimeout(t11)  
}


   
  