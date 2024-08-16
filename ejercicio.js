var saldo = 500;

let cuentaBancaria ={
    saldo: 500,
    transacciones: [],
    
    realizarDeposito(monto) {
        
        if (this.saldo + monto <= 990) {
        this.saldo += monto;
        const fecha = new Date();
        this.transacciones.push(`[${fecha.toLocaleString()}] Depósito de $${monto}`);
        return true;
        } else {
        alert("No puedes exceder el límite de $990.");
        return false;
        }
        },
    
      // Método para retirar dinero
    realizarRetiro(monto) {
        
        if (this.saldo - monto >= 10) {
        this.saldo -= monto;
        const fecha = new Date();
        this.transacciones.push(`[${fecha.toLocaleString()}] Retiro de $${monto}`);
        return true;
        } else {
        alert("No puedes tener menos de $10 en tu cuenta.");
        return false;
        }
        },
    
      // Método para consultar el saldo y las transacciones
        
        consultarSaldo() {
        alert(`Saldo actual: $${this.saldo}\nHistorial de transacciones:\n${this.transacciones.join('\n')}`);
        }
    };
    
    // Función principal para interactuar con el usuario
    function realizarOperacion() {
        
        const operacion = prompt("¿Qué deseas hacer? (depositar/retirar/consultar)");
    
        if (operacion === 'depositar') {
        const monto = parseFloat(prompt("Ingrese el monto a depositar:"));
        if (cuentaBancaria.realizarDeposito(monto)) {
            alert(`Se ha depositado $${monto}. Saldo actual: $${saldo+monto}`);
        //alert("Depósito realizado con éxito. Nuevo Saldo"//
            
        }
        } else if (operacion === 'retirar') {
        const monto = parseFloat(prompt("Ingrese el monto a retirar:"));
        if (cuentaBancaria.realizarRetiro(monto)) {
            alert(`Se ha retirado $${monto}. Saldo actual: $${saldo-monto}`);  
        //alert("Retiro realizado con éxito.");//
        }
        } else if (operacion === 'consultar') {
        cuentaBancaria.consultarSaldo();
        } else {
        alert("Opción inválida.");
        }
    }
    realizarOperacion();