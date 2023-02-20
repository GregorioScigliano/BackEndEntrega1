class ProductManager {
    constructor (){
    this.products = []
    }

    addProduct(product){
        if(product.title ==='' || product.description ==='' || product.code ===''){
            console.log("Error: Todos los campos son obligatorios")
            return
        }
        if(this.products.find(p => p.code === product.code )){
            console.log("Error: No puede haber dos productos con el mismo 'code'.")
            return
        }

        product.id = products.length()

        this.products.push(product)
    }

    getProducts(){
        console.log(this.products)
        return this.products
    }

    getProductById(id){
        // ESTOY PARADO EN EL ARREGLO PRODUCTS RECORRIENDO CON FIND LOS ELEMENTOS DEL ARREGLO. q se llama a los elementos del arreglo (en este caso productos con nombre, id, descrp, etc), yo quiero que el id de el producto sea igual al id que le estoy pasando por parametro, para buscarlo.
        const ElementoById = this.products.find(q => q.id === id );
        if(ElementoById === undefined){
            console.log('No se encuentra el ID') 
        }
        return ElementoById;
    }
}


