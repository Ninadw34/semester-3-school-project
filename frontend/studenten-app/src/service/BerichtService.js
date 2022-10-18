import axios from "axios";

const BERICHT_API_BASE_URL = "http://localhost:8080/bericht";
const headers = {
    'Access-Control-Allow-Origin' : '*'
};


class BerichtService {
    
    GetAllBerichten(){
        return axios.get(BERICHT_API_BASE_URL, {
            mode: 'cors',
            headers: headers,
        });
    }

    DeleteBericht(id) {
        return axios.delete(BERICHT_API_BASE_URL+`/delete/${id}`, {
            mode: 'cors',
            headers: headers,
        });
    }

    AddBericht(data){
        return axios.post(BERICHT_API_BASE_URL+"/addbericht", data, {
            mode: 'cors',
            headers: headers,
        });
    }
    GetBerichtByID(id){
        return axios.get(BERICHT_API_BASE_URL+`/${id}`, {
            mode: 'cors',
            headers: headers,
        });
    }
    UpdateBericht(id, data){
        return axios.put(BERICHT_API_BASE_URL+`/update/${id}`, data, {
            mode: 'cors',
            headers: headers,
        });
    }
}
export default new BerichtService();