import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc } from "firebase/firestore"
import { db } from "../credenciales";

/* 1. CREAR & EXPORTAR TODOS LOS METODOS DEL CRUD */
export const onFindAll = async (collectionStr)=>{
    const result = await getDocs(query(collection( db, collectionStr )));
    return result;
};

export const onFindById = async (collectionStr, paramId) => {
    const result = await getDoc(doc(db, collectionStr, paramId));
    return result.data();
};

export const onInsert =  async (collectionStr, obj) => {
    await addDoc(collection(db, collectionStr), obj);
}

export const onUpdate = async (collectionStr, paramId, newObj) => {
    await updateDoc(doc(db, collectionStr, paramId), newObj);
}

export const onDelete = async (collectionStr, paramId) => {
    await deleteDoc(doc(db, collectionStr, paramId));
}

