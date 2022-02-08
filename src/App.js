import { useState } from 'react';
import './App.css';
import contactsArray from './contacts.json'
import trophy from './images/1f3c6.png'


function App() {

  const [contacts, setContacts] = useState(contactsArray.slice(0,5));

  const handleRandom =()=> {
    
    const addRandomContact = ()=>{
      let random = contactsArray[Math.floor(Math.random()* contactsArray.length)]
      if (contacts.includes(random.id)){
        random = contactsArray[Math.floor(Math.random()* contactsArray.length)]
      } else {
        setContacts([...contacts,random])
      }
      return random
    }
    addRandomContact()
  };
  
  const handleSortName = ()=>{

    const sorted = contacts.sort((a, b)=> a.name.localeCompare(b.name))
    setContacts([...sorted])    
    
  }
  const handleSortPopularity = ()=>{

    const sorted = contacts.sort((a, b)=> a.popularity - b.popularity)
    setContacts([...sorted])    
    
  }
  const handleDelete = (id) => {
    
    const notDeleted = contacts.filter(contact => contact.id !== id)
    console.log('not deleted:', notDeleted)
    setContacts([...notDeleted])
  }

  return <div className="App">
    <h1>IronContacts</h1>
    <button className="button" onClick={handleRandom}>Add new contact</button>
    <table className='table' >
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name<button className="button" onClick={handleSortName} >sort</button></th>
            <th>Popularity<button className="button" onClick={handleSortPopularity} >sort</button></th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
      {contacts.map(contact => {
      return (
        <tbody key={contact.id}>
          <tr>
            <td><img className='image' src={contact.pictureUrl} alt=""/></td>
            <td>{contact.name}</td> 
            <td>{contact.popularity.toFixed(2)}</td>
            <td>{contact.wonOscar ? <img className='image' src={trophy} alt=''/> : ''}</td>
            <td>{contact.wonEmmy ? <img className='image' src={trophy} alt=''/> :''}</td>
            <td><button className="button" onClick={()=> handleDelete(contact.id)} >delete</button></td>     
          </tr>
        </tbody>
      )
      })
    }
    </table>
  </div>;

}

export default App;
