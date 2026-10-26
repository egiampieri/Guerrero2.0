// CLASE BASE (Herencia)
class EntidadJuego {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.activa = true; // Si es false, el motor la elimina
    }

    // Métodos "virtuales" a sobreescribir (Polimorfismo)
    actualizar(dt) {}
    dibujar(ctx) {}
}
