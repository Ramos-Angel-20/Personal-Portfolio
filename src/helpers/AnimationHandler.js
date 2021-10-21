const toggleAnimationHandler = (ref, className, time, callback) => {

    /*
        recibimos como parámetro un ref y una función callback,
        este ref nos sirve para agregar la animación al botón
        menú o theme a traves de una clase de css, misma que 
        sera removida con la ayuda de un setTimeout con el 
        mismo tiempo que la duración de la animación, de esta 
        forma en lo que termina la animación se retira del ref 
        la clase que la activa. 
    */

    ref.current.classList.add(className);
    callback();

    setTimeout(() => {
        ref.current.classList.remove(className);
    }, time);
}

export default toggleAnimationHandler;