import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [filterListings, setfilterListings] = useState(listings)  
  const [sortBy, setSortBy] = useState('')
  const [addNew, setAddNew] = useState('')

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then(resp => resp.json())
    .then(data => setListings(data))
  }, [])

  const handleDelete = (deleteItem) => {
    fetch(`http://localhost:6001/listings/${deleteItem.id}`, {
      method: 'DELETE'
    })
    setListings(current => current.filter(listing => listing.id !== deleteItem.id))
  }

  const handleSubmit = (e, search) => {
    e.preventDefault()
    setfilterListings(search)
  }
  const filterItems = listings.filter(listing => listing.description.includes(filterListings))
  const compareItems = (item1,item2) => {
    if (sortBy === 'location'){
      if (item1.location < item2.location){
        return -1
      } else if (item1.location > item2.location){
        return 1
      }else {return 0}
    }
  }
  const handleSort = (sortBy) => {
    setSortBy(sortBy)
  }

  const handleSubmitForm = (newItem) => {
    fetch(`http://localhost:6001/listings`, {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(newItem)
    }).then(resp => resp.json())
    .then(data => setListings(data))
  }
  const itemstoDisplay = filterItems.sort(compareItems)
  return (
    <div className="app">
      <Header handleSubmit={handleSubmit} handleSort={handleSort}/>
      <ListingsContainer handleSubmitForm={handleSubmitForm} handleDelete={handleDelete} listings={itemstoDisplay} />
    </div>
  );
}

export default App;
