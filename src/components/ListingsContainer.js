import React from "react";
import ListingCard from "./ListingCard";
import Form from './Form'

function ListingsContainer({listings, handleDelete, handleSubmitForm}) {
  return (
    <main>
      <Form handleSubmitForm={handleSubmitForm} />
      <ul className="cards">
        {listings.map(listing => <ListingCard key={listing.id} listing={listing} handleDelete={handleDelete} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
