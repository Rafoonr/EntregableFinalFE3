import React, { useContext } from "react";
import Card from "./Card";
import { ContextGlobal } from "./utils/global.context";

const Dentist = () => {
  const { state } = useContext(ContextGlobal);
  const { theme, data, loading, error } = state;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {data.length > 0 ? (
        <>
          {data.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              username={item.username}
              id={item.id}
              theme={theme} // Pass the theme explicitly as a prop
            />
          ))}
        </>
      ) : (
        <p>No dentists found.</p>
      )}
    </>
  );
}

export default Dentist;
