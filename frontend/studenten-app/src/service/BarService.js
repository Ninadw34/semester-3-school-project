import axios from "axios";

const BAR_API_BASE_URL = "http://localhost:8080/bar";
const headers = {
    'Access-Control-Allow-Origin' : '*'
};


class BarService {
    
    GetAllBarren(){
        return axios.get(BAR_API_BASE_URL, {
            mode: 'cors',
            headers: headers,
        });
    }

    DeleteBar(id) {
        return axios.delete(BAR_API_BASE_URL+`/delete/${id}`, {
            mode: 'cors',
            headers: headers,
        });
    }

    AddBar(data){
        return axios.post(BAR_API_BASE_URL+"/addbar", data, {
            mode: 'cors',
            headers: headers,
        });
    }
    GetBarByID(id){
        return axios.get(BAR_API_BASE_URL+`/${id}`, {
            mode: 'cors',
            headers: headers,
        });
    }
    UpdateBar(id, data){
        return axios.put(BAR_API_BASE_URL+`/updatebar/${id}`, data, {
            mode: 'cors',
            headers: headers,
        });
    }
}
export default new BarService();