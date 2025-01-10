// Clase base: Pago
export class Pago {
  procesarPago(): string {
    return "Procesando pago...";  // Mensaje por defecto
  }
}

// Clase hija: Pago con tarjeta
export class PagoConTarjeta extends Pago {
  override procesarPago(): string {
    return "Procesando pago con tarjeta";  // Mensaje personalizado
  }
}

// Clase hija: Pago con PayPal
export class PagoConPaypal extends Pago {
  override procesarPago(): string {
    return "Procesando pago con PayPal";  // Mensaje personalizado
  }
}
