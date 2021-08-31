var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
];

var indice;




var htmlInicio = '<div id="inicio"><button onclick="login()">Iniciar sesión</button></div>'
var htmlbienvenida = '<p>Bienvenidos a Tu Banquero</p>'

document.getElementById("cajero").innerHTML = htmlInicio;
document.getElementById("texto").innerHTML = htmlbienvenida;

var HTMLoperaciones = '<div id="parrafo1"><p >Eliga la operacion a realizar:</p></div><div id="btn"><button type="button" onclick="consultarDisponible()">Consultar Saldo</button><button type="button" onclick="ingresar()">Ingresar Saldo</button><button type="button" onclick="retirar()">Retirar Saldo</button><button onclick="salir()">Salir</button></div>';




var volver = '<div id="volver"><button  type="button" onclick="operaciones()">Volver</button></div>';



function operaciones() {

    document.getElementById("cajero").innerHTML = HTMLoperaciones;
    document.getElementById("texto").innerHTML = "";
}



function login() {
    var nombreCuenta;
    for (var i = 0; i < cuentas.length; i++) {
        nombreCuenta = prompt("Ingrese su nombre de usuario:");

        if (nombreCuenta === cuentas[i].nombre) {
            var indiceCuenta = i;
            var pwCuenta;
            
            pwCuenta = prompt('Accediendo a la cuenta de "' + cuentas[indiceCuenta].nombre + '". Ingrese su contraseña:');

            if (pwCuenta === cuentas[indiceCuenta].password) {
                
                indice = indiceCuenta
                operaciones();
                

            }
            
            else {
                alert("La contraseña no es correcta. Intente nuevamente.");
            }
        }
        else {
            alert("No se ha encontrado un usuario con este nombre. Intente nuevamente.");
break
        };
        
    };
}


function consultarDisponible() {
    var text = `Su saldo disponible en la cuenta  de ` + cuentas[indice].nombre + ` es de ` + cuentas[indice].saldo;
    document.getElementById("texto").innerHTML = text;
    document.getElementById("cajero").innerHTML = volver;
}

function ingresar() {

    var saldoActual = cuentas[indice].saldo;
    var monto = prompt("Monto a ingresar:");
    if (monto === null) {
        operaciones()
    }

    else if (monto <= 0 || isNaN(monto) === true) {
        alert("Monto no valido");
    }


    else {
        var nuevoSaldo = parseInt(monto) + parseInt(saldoActual);
        if (nuevoSaldo > 999) {
            alert("Su saldo actual es de $" + nuevoSaldo + " al ingresar " + monto + " se superaría el màximo permitido. La operacíon no es vàñida")
        }
        else {
            var text = "El monto ingresado es de $" + monto + " y su nuevo saldo es de $" + nuevoSaldo;
            document.getElementById("texto").innerHTML = text;
            document.getElementById("cajero").innerHTML = volver;
            cuentas[indice].saldo = nuevoSaldo
        }

    }

}

function retirar() {
    var saldoActual = cuentas[indice].saldo;

    var retiro = prompt("Digite el dinero que quiera retirar")

    if (retiro === null) {
        operaciones()
    }

    else if (retiro <= 0 || isNaN(retiro) === true) {
        alert("El monto ingresado no es válido");
    }


    else if (retiro > cuentas[indice].saldo) {
        alert("el monto ingresado es superior al de su cuenta de :" + cuentas[indice].saldo);
    }

    else {
        var nuevoSaldo = saldoActual - retiro;
        if (nuevoSaldo < 10) {
            alert("Su nuevo saldo sería menor a $10 , lo que no es permitifo.Por favor , ingrese un monto válido")
        }

        else {
            var text = "El monsto ingresado es " + retiro + ".Y su nuevo saldo es de: " + nuevoSaldo;
            document.getElementById("texto").innerHTML = text;
            document.getElementById("cajero").innerHTML = volver;
            cuentas[indice].saldo = nuevoSaldo


        }
    }
}
function salir() {
    document.getElementById("cajero").innerHTML = htmlInicio;


}

