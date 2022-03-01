import { typesProducts } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc, collection, getDocs, query, where, doc, deleteDoc, updateDoc } from "@firebase/firestore";

// REGISTRAR NUEVO PRODUCTO

export const registrarProductoAsincrono = (newProduct) => {

    return (dispatch) => {
        addDoc(collection(db,"bdProductos"),newProduct) 
        .then(resp => {
            dispatch(registrarProductoSincrono(newProduct)) 
            dispatch(mostrarProductosAsincrono()) 
        })
        .catch(error => {
            console.log(error);
        })
    }
 }

export const registrarProductoSincrono = (product) => {
    return{
        type: typesProducts.register,
        payload: product
    }
}

// LISTAR PRODUCTOS

export const mostrarProductosAsincrono = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "bdProductos")); 
        const productos = []; 
        querySnapshot.forEach((doc) => {
            productos.push({
                ...doc.data() 
            })
        });
        dispatch(mostrarProductosSincrono(productos)); 
    }
}

export const mostrarProductosSincrono = (prods) => {
    return {
        type: typesProducts.list,
        payload: prods
    }
}

// ELIMINAR PRODUCTOS

export const borrarProductoAsincrono = (producto) =>{
    return async(dispatch) => {

        const moviesCollection = collection(db,"bdProductos");
        const q = query(moviesCollection,where("product", "==", producto)) 
        const datos = await getDocs(q); 

        datos.forEach((docu) => {
            deleteDoc(doc(db,"bdProductos",docu.id));
        })
        dispatch(borrarProductoSincrono(producto));
    }
}

export const borrarProductoSincrono = (prod) => {
    return{
        type: typesProducts.delete,
        payload: prod
    }
}

// ACTUALIZAR INFORMACION PRODUCTOS 

export const editarProductoAsincrono = (data) => {
    console.log(data)
    return async(dispatch) => {
        console.log(data.url)
        const productsCollection = collection(db,"bdProductos");
        const q = query(productsCollection,where("product", "==" ,data.product)) 

        const datos = await getDocs(q); 

        datos.forEach((docu) => {
            updateDoc(doc(db,"bdProductos",docu.id), data);
        })
        dispatch(mostrarProductosAsincrono());
    }
}


