import React, {useState, useEffect} from 'react'
import List from './List'
import Alert from './Alert'


const handleSubmit = e => {
    e.preventDefault();
    console.log("hello")
}

function App() {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({show: false, msg: "", type: ""});


    return (
        <section className="section-center">
            <form className="grocery-form" onSubmit={handleSubmit}>
                {alert.show && <Alert/>}
            </form>
            <div className="grocery-container">
                <List/>
                <button className="clear-btn">Clear</button>
            </div>
        </section>
    )
}

export default App
