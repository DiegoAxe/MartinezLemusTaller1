var btnEnviar = document.getElementById("Enviar");
var DivMensaje = document.getElementById("Mensaje");
var TableListado = document.getElementById("Listado");

TableListado.innerHTML = "<th> Tipo de Libro </th> <th> Tipo de Usuario </th> <th> Fecha de Devolución </th>";

function Sumatoria(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
}

btnEnviar.onclick = function(){
    const FechaActual = new Date();
    var TipoLibro = document.getElementById("Libro").value;
    var TipoUser = document.getElementById("Usuario").value;
    var Dias = 0;

    TableListado.innerHTML += "<tr>"

    if(TipoUser === "Docente"){

        if(TipoLibro === "Ciencias"){
            Dias = 6;
        } else if(TipoLibro === "Tesis"){
            Dias = 30;
        } else if(TipoLibro === "Obras"){
            Dias = 14;
        } else{
            Dias = 4;
        }

        var NuevaFecha = Sumatoria(FechaActual, Dias);
        
        DivMensaje.innerHTML = "<h3> Como usuario con carnet de Docente, ha pedido prestado un libro de tipo: " + TipoLibro + ". Debe entregarlo en " + Dias +" dias.</h3>";
        
        TableListado.innerHTML += "<td>" + TipoLibro + "</td>  <td> Carnet Docente </td> <td>" + NuevaFecha.toLocaleDateString() + "</td>";

    } else if (TipoUser === "Estudiante"){
        
        if(TipoLibro === "Ciencias"){
            Dias = 3;
        } else if(TipoLibro === "Tesis"){
            Dias = 15;
        } else if(TipoLibro === "Obras"){
            Dias = 7;
        } else{
            Dias = 2;
        }

        var NuevaFecha = Sumatoria(FechaActual, Dias);
        
        DivMensaje.innerHTML = "<h3> Como usuario con carnet de estudiante, ha pedido prestado un libro de tipo: " + TipoLibro + ". Debe entregarlo en " + Dias +" dias.</h3>";
        
        TableListado.innerHTML += "<td>" + TipoLibro + "</td>  <td> Carnet Estudiante </td> <td>" + NuevaFecha.toLocaleDateString() + "</td>";

    }else{

        DivMensaje.innerHTML = "<h3> Como usuario sin carnet, ha pedido prestado un libro de tipo: " + TipoLibro + ". Debe entregarlo este mismo dia.</h3>";
        
        TableListado.innerHTML += "<td>" + TipoLibro + "</td>  <td> Sin carnet </td> <td>" + FechaActual.toLocaleDateString() + "</td>";
    }

    TableListado.innerHTML += "</tr>";

}
