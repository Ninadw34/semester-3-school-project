import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/student";
const headers = {
    'Access-Control-Allow-Origin' : '*'
};


class StudentService {
    
    GetAllStudenten(){
        return axios.get(STUDENT_API_BASE_URL, {
            mode: 'cors',
            headers: headers,
        });
    }

    DeleteStudent(id) {
        return axios.delete(STUDENT_API_BASE_URL+`/delete/${id}`, {
            mode: 'cors',
            headers: headers,
        });
    }

    AddStudent(data){
        return axios.post(STUDENT_API_BASE_URL+"/addstudent", data, {
            mode: 'cors',
            headers: headers,
        });
    }
    GetStudentByID(id){
        return axios.get(STUDENT_API_BASE_URL+`/${id}`, {
            mode: 'cors',
            headers: headers,
        });
    }
    UpdateStudent(id, data){
        return axios.put(STUDENT_API_BASE_URL+`/update/${id}`, data, {
            mode: 'cors',
            headers: headers,
        });
    }
}
export default new StudentService();