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

    DeleteBerichten(id) {
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
}
export default new BerichtService();