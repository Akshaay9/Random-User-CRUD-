import React, { useState, useEffect } from "react";
import { results2 } from "./Data2";

function CompleteIds() {
  const [data, setData] = useState(results2);
  const [showModal, setShowModal] = useState(false);
  const [id, newId] = useState();
  // update states
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  //
  const deleteHandler = (id) => {
    console.log(typeof id);
    setData(data.filter((ele) => ele.login.uuid != id));
  };
  const preUpdateHandler = (id) => {
    newId(id);
    setShowModal(true);

    const getData = data.find((ele) => ele.login.uuid == id);

    setName(getData.name.first);
    setGender(getData.gender);
    setLocation(getData.location.street.name);
    setAge(getData.dob.age);
    setPhone(getData.phone);
    setEmail(getData.email);
  };

  const updateBtnHandler = () => {
    setShowModal(false);
    setData(
      data.map((ele) =>
        ele.login.uuid == id
          ? {
              ...ele,
                  name: {
                  ...ele.name,
                first: name,
              },
              gender: gender,
              location: {
                street: {
                  ...ele.location.street,
                  name: location,
                },
              },
                  dob: {
                  ...ele.dob,
                age: age,
              },
              phone: phone,
              email: email,
            }
          : ele
      )
    );
  };
  return (
    <>
      <div className={`container ${showModal ? "contain" : ""}`}>
        {data.map((ele) => (
          <div key={ele.login.uuid} className="cardss">
           
            <div className="bottom">
              <h3>{ele.name.first}</h3>
              <h6>Gender : {ele.gender}</h6>
              <h6>location : {ele.location.street.name}</h6>
              <h6>locationNum : {ele.location.street.number}</h6>
              <span>Age : {ele.dob.age}</span>
              <h6>phone : {ele.phone}</h6>
              <h6>email : {ele.email}</h6>
              <div className="btns">
                <button onClick={() => deleteHandler(ele.login.uuid)}>
                  Delete
                </button>
                <button onClick={() => preUpdateHandler(ele.login.uuid)}>
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`modall ${showModal ? "show" : "hide"}`}>
        <span className="delete" onClick={() => setShowModal(false)}>
          x
        </span>
        <h5>Update Value</h5>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name">gender</label>
        <input
          type="text"
          placeholder="enter gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="name">location</label>
        <input
          type="text"
          placeholder="enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="name">age</label>
        <input
          type="text"
          placeholder="enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="name">phone</label>
        <input
          type="text"
          placeholder="enter phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="name">email</label>
        <input
          type="text"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btns" onClick={() => updateBtnHandler()}>
          Update Value
        </button>
      </div>
    </>
  );
}

export default CompleteIds;
