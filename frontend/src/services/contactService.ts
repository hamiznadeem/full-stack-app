import axios from "axios";

const API_URL  = "http://localhost:5000/api/contacts";

   //GET Contacts
   export const getContact = () => {
         return axios.get(API_URL);
   };

   //POST
   export const createContact = (contact : any) =>{
         return axios.post(API_URL, contact)
      };

   //PUT
   export const updateContact = (id:string , contact:any) =>{
         return axios.put(`${API_URL}/${id}`, contact);
   };

   //DELETE
   export const deleteContact = (id:string) =>{
         return axios.delete(`${API_URL}/${id}`);
   };