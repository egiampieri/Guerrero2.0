// ARMA: fábrica de proyectiles
class Arma {
    constructor(nombre, danio, colorProyectil, velProyectil, escala) {
        this.nombre = nombre;
        this.danio = danio;
        this.colorProyectil = colorProyectil;
        this.velProyectil = velProyectil;
        this.escala = escala;
    }

    obtenerNombre() {
        return this.nombre;
    }

    obtenerColor() {
        return this.colorProyectil;
    }

    crearProyectil(x, y) {
        return new Proyectil(
            x,
            y,
            this.velProyectil,
            this.colorProyectil,
            20 * this.escala,
            8 * this.escala
        );
    }
}
