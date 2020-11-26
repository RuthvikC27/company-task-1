import { useState } from 'react';
import axios from 'axios';

const useRequest = ({ path, method, body, onSuccess }) => {
    const [ errors, setErrors ] = useState([]);

    const doRequest = async() => {
        try {
            setErrors(null);
            if(localStorage.getItem('token')){
                axios.defaults.headers.common['Authorize'] = 'Bearer' + localStorage.getItem('token');
            }

            const response = await axios[method](path, body);

            if(onSuccess){
                onSuccess();
            }
            return response;

        } catch(err){
            console.log(err.response.data);
            setErrors([...err.response.data.errors]);
        }
    }

    return { doRequest, errors };
}


export default useRequest;