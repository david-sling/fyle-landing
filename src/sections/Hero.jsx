import React from "react";
// import Button from "../components/Button";
import image from "../assets/hero.png";
import Modal from "../components/Modal";
import { TextField, Button, Checkbox } from "@material-ui/core";
import { useState } from "react";

export default function Hero() {
  const [openContactForm, setOpenContactForm] = useState(false);
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
        <Modal open={openContactForm} handletoggle={toggleOpenContactForm}>
          <form action="submit">
            <h3>Talk to us</h3>
            <TextField label="Work email" required />
            <div className="span">
              <TextField label="First name" required />
              <TextField label="Last name" required />
            </div>
            <div className="span">
              <Checkbox inputProps={{ "aria-label": "primary checkbox" }} />
              <p>
                I agree to Fyle's terms and conditions, and provide consent to
                send me communication
              </p>
            </div>
            <Button variant="contained" color="primary">
              Contact Us
            </Button>
          </form>
        </Modal>
      </section>
    </>
  );
}
