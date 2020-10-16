

exports.calcularInteresCompuesto = (capital, tasaInteres, plazo) => {
    let cuota = 0;
    let mes = 0;
    let interes = 0;
    let capitalDeudaPendiente;
    let tasaInteresDecimal = tasaInteres / 100;
    const cuotas = [];
  
    // Transformar los años en meses
    plazo = Math.round(plazo * 12);
  
    // Calcular la cuota
    cuota =
      (capital * tasaInteresDecimal) / (1 - (1 + tasaInteresDecimal) ** -plazo);
  
      cuota = cuota.toFixed(2);
      console.log(cuota);	
  
  
  
      while (mes != plazo) {
        // Obtener el interés por período
        interes = capital * tasaInteresDecimal;
        interes = interes.toFixed(2);
    
        // El capital que se amortiza en la cuota
        capitalAmortizar = cuota - interes;
        capitalAmortizar = capitalAmortizar.toFixed(2);
    
        // Actualizar el mes (período)
        mes++;
    
        // Actualizar la deuda
        capital -= capitalAmortizar;
        capital = capital.toFixed(2);
    
        // TODO: Verificar los cálculos con valores decimales
    
        // Almacenar los valores en el arreglo
        cuotas.push({
          mes,
          capitalAmortizar,
          interes,
          cuota,
          capital,
        });
      }
    
      return cuotas;
    };