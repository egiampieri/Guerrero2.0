// PROYECTIL: hereda de EntidadJuego
class Proyectil extends EntidadJuego {
    constructor(x, y, velocidad, color, ancho, alto) {
        super(x, y);
        this.velocidad = velocidad;
        this.color = color;
        this.ancho = ancho;
        this.alto = alto;
    }

    actualizar(dt) {
        // Movimiento rectilíneo uniforme basado en el tiempo
        this.x += this.velocidad * dt;

        // Si sale de la pantalla, se desactiva
        if (this.x > 800) {
            this.activa = false;
        }
    }

    dibujar(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.roundRect(this.x, this.y, this.ancho, this.alto, 5);
        ctx.fill();

        // Efecto de brillo
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fillRect(this.x, this.y + 2, this.ancho / 2, this.alto - 4);
    }
}
