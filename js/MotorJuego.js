// MOTOR: gestiona el canvas, la lista de entidades y el game loop
class MotorJuego {
    constructor(ancho, alto) {
        this.entidades = [];
        this.ultimoTiempo = 0;

        this.construirDOM(ancho, alto);
        this.iniciar();
    }

    construirDOM(ancho, alto) {
        this.contenedor = document.createElement('div');

        this.canvas = document.createElement('canvas');
        this.canvas.width = ancho;
        this.canvas.height = alto;
        this.ctx = this.canvas.getContext('2d');

        const panelUI = document.createElement('div');
        panelUI.className = 'controles';

        this.btnAtacar = document.createElement('button');
        this.btnAtacar.textContent = '🔫 Disparar';

        this.btnCambiarArma = document.createElement('button');
        this.btnCambiarArma.textContent = '🔄 Cambiar Arma';

        this.hudTexto = document.createElement('div');
        this.hudTexto.id = 'info-hud';

        panelUI.appendChild(this.btnAtacar);
        panelUI.appendChild(this.btnCambiarArma);

        this.contenedor.appendChild(this.canvas);
        this.contenedor.appendChild(panelUI);
        this.contenedor.appendChild(this.hudTexto);
        document.body.appendChild(this.contenedor);
    }

    agregarEntidad(entidad) {
        this.entidades.push(entidad);
    }

    actualizarHUD(texto) {
        this.hudTexto.textContent = texto;
    }

    iniciar() {
        this.ultimoTiempo = performance.now();
        requestAnimationFrame((t) => this.buclePrincipal(t));
    }

    buclePrincipal(tiempoActual) {
        // 1. Delta time en segundos
        const dt = (tiempoActual - this.ultimoTiempo) / 1000;
        this.ultimoTiempo = tiempoActual;

        // 2. Limpiar pantalla y dibujar suelo
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "#d8e2dc";
        this.ctx.fillRect(0, this.canvas.height - 40, this.canvas.width, 40);

        // 3. Actualizar y dibujar entidades
        this.entidades.forEach(entidad => {
            if (entidad.activa) {
                entidad.actualizar(dt);
                entidad.dibujar(this.ctx);
            }
        });

        // 4. Eliminar entidades inactivas
        this.entidades = this.entidades.filter(entidad => entidad.activa);

        // 5. Siguiente cuadro
        requestAnimationFrame((t) => this.buclePrincipal(t));
    }
}
