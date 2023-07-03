function estNombrePremier(nombre) {
    if (nombre <= 1) {
        return false;
    }

    for (var i = 2; i < nombre; i++) {
        if (nombre % i === 0) {
            return false;
        }
    }

    return true;
}

function sommenombrespremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}
