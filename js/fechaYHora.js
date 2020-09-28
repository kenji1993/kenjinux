
        (function(){
            let actualizarHora = function() {
                let hoy = new Date();
                let dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

                let numeroDiaSemana = hoy.getDay();
                let fecha = hoy.getDate();
                let mes = hoy.getMonth();

                let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

                let horas = hoy.getHours();
                let minutos = hoy.getMinutes();
                
                document.getElementById('fechaYHora').innerHTML = dias[numeroDiaSemana] + ',' + fecha + ' de ' + meses[mes] + ',' + horas + ':' + minutos; 
                
                if(minutos < 10){minutos = "0" + minutos};
            };

                actualizarHora();
            let intervalo = setInterval(actualizarHora, 1000);
        }())
