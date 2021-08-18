import React from "react";
// import Button from "../components/Button";
import image from "../assets/hero.png";
import Modal from "../components/Modal";
import { TextField, Button, Checkbox } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

export default function Hero() {
  const [openContactForm, setOpenContactForm] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [formData, setFormData] = useState({});

  const changeFormData = (key) => (e) =>
    setFormData((p) => ({ ...p, [key]: e.target.value }));

  const send = async (e) => {
    e.preventDefault();
    console.log({ formData });
    const { data } = await axios.post(
      "https://getform.io/f/2b377a12-41da-4bc0-942f-374fe098eac4",
      formData
    );
    console.log(data);
    setFormData({});
    setTermsAgreed(false);
    setOpenContactForm(false);
  };

  const toggleOpenContactForm = () => setOpenContactForm((p) => !p);
  return (
    <>
      <section className="Hero">
        <div className="left">
          <div className="text">
            <h2>Award winning</h2>
            <h1>Digital Marketing Agency</h1>
            <p className="p">
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
              lacus nec risus finibus feugiat et fermentum
            </p>
            <Button
              onClick={toggleOpenContactForm}
              variant="contained"
              color="primary"
            >
              CONTACT US
            </Button>
          </div>
        </div>
        <div className="right">
          <img src={image} alt="HERO IMAGE" />
        </div>
      </section>
      <Modal open={openContactForm} handletoggle={toggleOpenContactForm}>
        <form action="submit" onSubmit={send}>
          <h3>Talk to us</h3>
          <TextField
            type="email"
            label="Work email"
            required
            value={formData.email}
            onChange={changeFormData("email")}
          />
          <div className="span">
            <TextField
              label="First name"
              required
              value={formData.firstName}
              onChange={changeFormData("firstName")}
            />
            <TextField
              label="Last name"
              required
              value={formData.lastName}
              onChange={changeFormData("lastName")}
            />
          </div>
          <div className="span">
            <Checkbox
              value={termsAgreed}
              onChange={(e) => setTermsAgreed(e.target.checked)}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <p>
              I agree to Fyle's terms and conditions, and provide consent to
              send me communication
            </p>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!termsAgreed}
          >
            Contact Us
          </Button>
        </form>
      </Modal>
    </>
  );
}
