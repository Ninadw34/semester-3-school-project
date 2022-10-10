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
}
export default new StudentenVerenigingService();