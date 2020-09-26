import { SET_DATA_CONTACT, UPDATE_CONTACT, SET_PROPINSI, SET_CONTACT } from "../actionTypes";

const initialState = {
    namaLengkap: null,
    foto: null,
    alamat: null,
    posisi: null,
    id : null,
    nama: null,
    propinsi: [],
    contacts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_DATA_CONTACT: {
      const { namaLengkap, foto, alamat, posisi, id, nama } = action.payload;
      return {
        ...state,
        namaLengkap,
        foto,
        alamat,
        posisi,
        id,
        nama, 
      };
    }

    case UPDATE_CONTACT: {
        const { namaLengkap, foto, alamat, posisi, id, nama } = action.payload;
        return {
          ...state,
          namaLengkap,
          foto,
          alamat,
          posisi,
          id,
          nama, 
        };
      }

    case SET_PROPINSI: {
        const { propinsi } = action.payload;
        return {
          ...state,
          propinsi
        };
    }
    
    case SET_CONTACT: {
        const { contacts } = action.payload;
        return {
          ...state,
          contacts
        };
    }  
    
    default:
      return state;
  }
}
