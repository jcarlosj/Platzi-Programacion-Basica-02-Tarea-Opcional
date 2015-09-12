/* Curso de Programación Básica 
 * Variables, Matrices y Objetos en Javascript.
 * Matrices (Ejemplo: Campo Minado)
 */

function aleatorio ( minimo, maximo ) {
    return Math .floor( Math .random() * ( maximo - minimo + 1 ) + minimo );
}

function explosion() {
    alert("BOOM!!");
    document .write( "<h1>BOOM! Elegiste un area minada :(</h1>" );
}

function ganaste() {
    document .write( "Eres un ganador :)" );    
}

//-> Generamos tablero de juego.
function generarTablero( horizontal, vertical ) {

    var tablero = new Array();
    for ( var i = 0; i < horizontal; i++ ) {

        tablero[ i ] = new Array();
        for ( var j = 0; j < vertical; j++ ) {
            tablero[ i ][ j ] = aleatorio( 0, 1 ); //: Genera aleatoriamente las bombas y las inserta en el tablero.
            		                               //: 1 = Bomba / 0 = No hay bomba
        }
    }

    return tablero;
}

//-> Valida un número de acuerdo a un rango de enteros.
function validar( numero, min, max ) {

    if( !isNaN( numero ) ) {
        if( numero >= min && numero <= max ) {
            return true;
        }
        else {
            return false;    
        }
    }
    else {
        return false;
    }

}

//-> El juego inicia aqui.
function jugar( tablero ) {

	alert( "HEY! El juego comienza aqui" );

    var juega_x = prompt( 'Digita un valor en X entre 0 y ' + ( tablero .length - 1 ) , 0 ),
        juega_y = prompt( 'Digita un valor en Y entre 0 y ' + ( tablero[0] .length - 1 ) , 0 );

        
        if( validar( juega_x, 0, ( tablero .length - 1 ) ) && validar( juega_y, 0, ( tablero[0] .length - 1 ) ) ) {
            if( tablero[ parseInt( juega_x ) ][ parseInt( juega_y ) ] == 1 ) {
                ganaste();
            }
            else {
                explosion();
            }
        } 
        else {
            alert( 'Valor ingresado no es un número entero positivo.\n' );
            explosion();
        }

    console .log( tablero );
}


function inicio() {

    alert( 'Para jugar primero debemos generar el tablero de juego.' );
    
    //-> Dimensiones maximas para generar el tablero.
    var numeroMin = 1,      //: Para que sea mínimo de 1 x 1.
        numeroMax = 10,     //: Para que sea máximo de 10 x 10.

        //-> Captura para definir las dimiensiones del tablero de juego deseado.
        x = prompt( 'Digite la cantidad de casillas horizontales que tendrá el campo (entre ' + numeroMin + ' y 10): '),
        y = prompt( 'Digite la cantidad de casillas verticales que tendrá el campo (entre ' + numeroMin + ' y 10): '); 

    //-> Valida que los valores esten dentro del rango maximo permitido.    
    if( validar( x, numeroMin, numeroMax ) && validar( y, numeroMin, numeroMax ) ) {

        tablero = generarTablero( parseInt( x ), parseInt( y ) );
        // console .log( tablero );
        alert( 'Se ha generado el tablero de juego de ' + x + ' x ' + y + ' \nEl campo ha sido minado.\n\nAhora a jugar!!! :)' );
        jugar( tablero );

    }
    else {
        alert( 'Valor ingresado no es un número entero positivo.\n' );
        document .writeln( 'Si no se genera un tablero de juego es imposible jugar.' );
    }

}