import { SET_DATA_CONTACT, UPDATE_CONTACT, SET_PROPINSI, SET_CONTACT } from "./actionTypes";
import { contactApi } from '../Services/API'

export const setDataContact = (namaLengkap, foto, alamat, posisi, id, nama) => ({
  type: SET_DATA_CONTACT,
  payload: {
    namaLengkap,
    foto,
    alamat,
    posisi,
    id,
    nama,
  }
});

// export const setUpdateContact = (namaLengkap, foto, alamat, posisi, id, nama) => ({
//     type: UPDATE_CONTACT,
//     payload: {
//       namaLengkap,
//       foto,
//       alamat,
//       posisi,
//       id,
//       nama,
//     }
//   });

  export const setPropinsi = (propinsi) => ({
    type: SET_PROPINSI,
    payload: {
      propinsi
    }
  });

  export const setContact = (contacts) => ({
    type: SET_CONTACT,
    payload: {
        contacts
    }
  });

  export const getContact = () => {
    return (dispatch, getState) => {
        contactApi.getContact().then((res) => {
            console.log("getContact => ", res)
        })
    }
  }



