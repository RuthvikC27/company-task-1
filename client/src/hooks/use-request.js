import { useState } from 'react';
import axios from 'axios';

export default ({ path, method, body, onSuccess }) => {
    const [ errors, setErrors ] = useState([]);

    const doRequest = async() => {
        try {
            setErrors(null);
            const response = await axios[method](path, body);

            if(onSuccess){
                onSuccess();
            }
            return response.data;

        } catch(err){
            console.log(err.response.data);
            setErrors([...err.response.data.errors]);
        }
    }

    return { doRequest, errors };
}
