import axios from "axios";

const API_URL  = "http://localhost:5000/api/contacts";


//GET Contacts
export const getContact = () => {
      return axios.get(API_URL);
};

//POST   
export const createContact = (contact : FormData) =>{
      return axios.post(API_URL, contact, {
            headers: { "Content-Type": "multipart/form-data" }
      });
};

//PUT
export const updateContact = (id:string , contact : FormData) =>{
      return axios.put(`${API_URL}/${id}`, contact, {
            headers: { "Content-Type": "multipart/form-data" }
      });
};

//DELETE
export const deleteContact = (id:string) =>{
      return axios.delete(`${API_URL}/${id}`);
};