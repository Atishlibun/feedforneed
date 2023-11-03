import React from "react";

function Contactus() {
  return (
    <div>
      <div>
        <div className="contactus">
          <h1
            className="h1 text-center font-weight-bolder"
            style={{ fontSize: "5vw", color: "white", paddingTop: "80px" }}
          >
            CONTACT US
          </h1>
          <h3
            className="h6 text-center"
            style={{ color: "white", padding: "90px" }}
          >
            Today, 690 million people around the world will go to bed on an
            empty stomach. But your gift means that one less child will be at
            risk of starvation tonight. Whether you decide to make a one-off
            donation or set up a monthly gift, you can change a life forever
            today. Often, one meal at the right time will be enough to make a
            difference between life and death. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Dignissimos quibusdam repellendus
            dolore adipisci, doloremque, distinctio fugit earum impedit ut et
            quisquam, laboriosam ex fugiat facilis nostrum omnis. Iste, est
            adipisci.
          </h3>
        </div>
        <section class="">
          <iframe
            className="embed-responsive embed-responsive-16by9"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36659.24160974579!2d85.81621540884782!3d20.232634100217545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1657294266113!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{
              border: "0",
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }}
          ></iframe>
        </section>
      </div>
      <form className="container" style={{marginTop:'20px'}}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Your Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Mobile Number</label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Number"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Enter Your Text</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary">Submit for contact</button>
      </form>

      <hr />
    </div>
  );
}

export default Contactus;
