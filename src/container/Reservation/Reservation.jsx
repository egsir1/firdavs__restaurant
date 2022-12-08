import React, { Fragment, useRef, useState } from "react";
import "./Reservation.css";
import images from "../../constants/images";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const isEmpty = (value) => value.trim() === "";

const Reservation = () => {
  const nameInputRef = useRef();
  const numberInputRef = useRef();
  const emailInputRef = useRef();
  const guestsInputRef = useRef();
  const infoInputRef = useRef();
  const dateInputRef = useRef();
  const timeInputRef = useRef();
  const form = useRef();
  let formData;

  const [successMessage, setSuccessMessage] = useState(false);
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    email: true,
    number: true,
    guests: true,
    info: true,
    date: true,
    time: true,
  });

  /*  const messageHandler = useEffect(() => {
    const message = setTimeout(() => {
      <h3 className="headtext__cormorant">Successfully Reserved!</h3>;
    }, 2000);
    return () => clearTimeout(message);
  }, []); */

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const name = nameInputRef.current.value;
    const number = numberInputRef.current.value;
    const email = emailInputRef.current.value;
    const guests = guestsInputRef.current.value;
    const info = infoInputRef.current.value;
    const date = dateInputRef.current.value;
    const time = timeInputRef.current.value;

    const enteredEmailIsValid = isEmail(email);
    const enteredNumberIsValid = !isEmpty(number);
    const enteredNameIsValid = !isEmpty(name);
    const enteredGuestsIsValid = !isEmpty(guests);
    const enteredInfoIsValid = !isEmpty(info);
    const enteredDateIsValid = !isEmpty(date);
    const entereedTimeIsValid = !isEmpty(time);

    setFormInputsValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      number: enteredNumberIsValid,
      guests: enteredGuestsIsValid,
      info: enteredInfoIsValid,
      date: enteredDateIsValid,
      time: entereedTimeIsValid,
    });

    /* const formIsValid =
      enteredNameIsValid &&
      enteredNumberIsValid &&
      enteredEmailIsValid &&
      enteredGuestsIsValid &&
      enteredInfoIsValid &&
      enteredDateIsValid &&
      entereedTimeIsValid;

    if (!formIsValid) {
      return;
    } */

    formData = {
      name,
      number,
      email,
      guests,
      info,
      date,
      time,
    };

    await fetch(
      "https://bro-app-e3b89-default-rtdb.firebaseio.com/customers.json",
      {
        method: "POST",
        body: JSON.stringify({
          client: formData,
        }),
      }
    );
    console.log(formData);

    const sendEmail = () => {
      emailjs
        .sendForm(
          "service_fyhukkw",
          "template_ycv3116",
          form.current,
          "L44z88kRkpNXC22sl"
        )
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error.text);
          }
        );
      console.log(form.current);
    };
    sendEmail();

    setSuccessMessage(true);
    nameInputRef.current.value = "";
    console.log(formData);
  };

  return (
    <Fragment>
      {!successMessage && (
        <div className="head">
          <div className="info">
            <h3 className="headtext__cormorant">Reservation</h3>
            <p className="p__opensans">
              If you would like to book a table for today or for a larger group,
              please contact us on 010-3238-2555
            </p>
          </div>

          <div className="main">
            <form className="form" ref={form} onSubmit={onSubmitHandler}>
              <div className="control">
                <input
                  type="text"
                  required
                  id="name"
                  name="name"
                  placeholder="Name "
                  ref={nameInputRef}
                />
                {!formInputsValidity.name && <p>Please enter a valid name</p>}
              </div>
              <div className="control">
                <input
                  type="text"
                  required
                  id="phone"
                  name="number"
                  placeholder="Phone Number"
                  ref={numberInputRef}
                />
                {!formInputsValidity.number && (
                  <p>Please enter a valid phone umber</p>
                )}
              </div>
              <div className="control">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="E-mail Address "
                  ref={emailInputRef}
                />
                {!formInputsValidity.email && <p>Please enter a valid email</p>}
              </div>
              <div className="control">
                <input
                  type="number"
                  required
                  min="1"
                  id="guests"
                  name="guests"
                  placeholder="Number of Guests"
                  ref={guestsInputRef}
                />
                {!formInputsValidity.guests && (
                  <p>Please enter a valid amount</p>
                )}
              </div>
              <div className="control">
                <textarea
                  id="info"
                  name="info"
                  rows="5"
                  placeholder="Additional Information "
                  required
                  ref={infoInputRef}
                />
                {!formInputsValidity.info && <p>Please enter a valid data</p>}
              </div>
              <div className="control">
                <label htmlFor="date">Reservation Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  ref={dateInputRef}
                />
                {!formInputsValidity.date && <p>Please enter a valid date</p>}
              </div>
              <div className="control">
                <label htmlFor="time">Expected time of arrival</label>
                <input
                  type="time"
                  required
                  id="time"
                  name="time"
                  ref={timeInputRef}
                />
                {!formInputsValidity.time && <p>Please enter valid time</p>}
              </div>
              <div className="actions">
                <Link to="/">
                  <button className="cancel">Cancel</button>
                </Link>
                <button type="submit" className="book">
                  Book Now
                </button>
              </div>
            </form>

            {/*   {successMessage && messageHandler} */}
            <div className="reserved">
              <img src={images.reserve} alt="reserved" />
            </div>
          </div>
        </div>
      )}
      {successMessage && (
        <section className="sectionSuccess">
          <h3 className="headtext__cormorant success">
            Successfully Reserved!
          </h3>
          <p>
            The Firdavs Administration just received a message regarding your
            reservation. Our staff will contact with you soon, thank you!
          </p>
          <div className="actions">
            <Link to="/">
              <button
                style={{
                  marginLeft: "7rem",
                }}
                className="homePg book successbtn"
              >
                Confirm
              </button>
            </Link>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Reservation;
