import axios from "axios";

const STUDENTENVERENIGING_API_BASE_URL = "http://localhost:8080/studentenvereniging";
const headers = {
    'Access-Control-Allow-Origin' : '*'
};

class StudentenVerenigingService {
    
    GetAllStudentenVerenigingen(){
        return axios.get(STUDENTENVERENIGING_API_BASE_URL, {
            mode: 'cors',
            headers: headers,
        });
    }
    DeleteStudentenVereniging(id) {
        return axios.delete(STUDENTENVERENIGING_API_BASE_URL+`/delete/${id}`, {
            mode: 'cors',
            headers: headers,
        });
    }
    AddStudentenVereniging(data){
        return axios.post(STUDENTENVERENIGING_API_BASE_URL+"/addstudentenvereniging", data, {
            mode: 'cors',
            headers: headers,
        });
    }
    GetStudentenVerenigingByID(id){
        return axios.get(STUDENTENVERENIGING_API_BASE_URL+`/${id}`, {
            mode: 'cors',
            headers: headers,
        });
    }
    UpdateStudentenVereniging(id, data){
        return axios.put(STUDENTENVERENIGING_API_BASE_URL+`/update/${id}`, data, {
            mode: 'cors',
            headers: headers,
        });
    }
}
export default new StudentenVerenigingService();