import {React, useState, useContext} from 'react';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Form = () => {
    const [value, setValue] = useState('')
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()

        if(value.trim()){
            firebase.addNote(value.trim())
            setValue('')
        }
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input 
                className="form-control" 
                type="text" 
                placeholder="Enter name for note"
                value={value}
                onChange={e => setValue(e.target.value)}
                /> 
            </div>
        </form>
    )
}