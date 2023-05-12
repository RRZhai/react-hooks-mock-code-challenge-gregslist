import React, { useState } from "react";

function Form({handleSubmitForm}){
    const initialForm = {
        description: "",
        image: "",
        location: ""
    }
    
    const [addItem, setAddItem] = useState(initialForm)
    const handleAdd = (e) => {
        setAddItem({...addItem, [e.target.name]:e.target.value})
    }
    return (
        <form onSubmit={(e)=>handleSubmitForm(addItem)}>
            <div>Description</div>
            <input onChange={handleAdd} name="description"></input>
            <div>Image</div>
            <input onChange={handleAdd} name="image"></input>
            <div>Location</div>
            <input onChange={handleAdd} name="location"></input>
            <button type="submit">Add</button>
        </form>

    )
}

export default Form;