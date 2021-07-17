import React, {useState} from "react"

function App() {
    const [contactInputData, setContactInputData] = useState({firstName: '', lastName: ''})
    const [contactsData, setContactsData] = useState([])
    
    function handleInput(event) {
        const {name, value} = event.target
        setContactInputData(prevInputData => ({...prevInputData, [name]: value}))
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        setContactsData(prevContacts => [...prevContacts, inputData])
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="First Name"
                    name="firstName" 
                    value={contactInputData.firstName}
                    onChange={handleInput}
                />
                <input 
                    placeholder="Last Name"
                    name="lastName" 
                    value={contactInputData.lastName}
                    onChange={handleInput}
                />
                <br />
                <button>Add</button>
            </form>
            {contactsData.map(contact => <p key={contact.firstName}>{contact.firstName} {contact.lastName}</p>)}
        </div>
    )
}

export default App