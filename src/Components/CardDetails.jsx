import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { ContextGlobal } from "./utils/global.context"
import dentistImage from "../Assets/doctor.jpg";

const CardDetails = () => {
  const { id } = useParams()
  const { state } = useContext(ContextGlobal)
  const { data, loading } = state
  const { theme } = state;

  if (loading) {
    return <p>Loading...</p>
  }

  const dentist = data.find((item) => item.id === parseInt(id))

  if (!dentist) {
    return <p>Error: Dentist details not found.</p>

  }

  const { name, email, username, address, website } = dentist

  return (
    <main className={theme === 'dark' ? 'dark' : 'light'}>
      <h1>Dentist details</h1>
      <div className="card-grid">
        <div className={`card ${theme === "dark" ? "dark" : "light"}`}>
          <img src={dentistImage} alt="" className="card__image" />
          <h3 className="card__title">{name}</h3>
          <p className="card__username">{username}</p>
          <p className="card__email">{username}</p>
          <p className="card__id">{id}</p>
          <p>Address: {address.street}, {address.city}</p>
          <p>Website: {website}</p>
        </div>
      </div>
    </main>
  );
};

export default CardDetails;
