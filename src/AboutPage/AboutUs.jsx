import React from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {Link} from "react-router-dom"


export default function AboutUs() {
  return (
    <>
      <div>
        <div className="container-fluid">
          <h1
            className="h1 text-center font-weight-bolder"
            style={{ fontSize: "5vw", color: "white", paddingTop: "80px" }}
          >
            ABOUT US AND OUR SOCIAL WORK
          </h1>
          <br />
          <br />
          <h3
            className="h2 text-center font-weight-bolder"
            style={{ color: "white" }}
          >
            Our Non Profitable Work Who Make us Happy
          </h3>
          <br />
          <br />
          <h3
            className="h6 text-center "
            style={{ color: "white", padding: "20px" }}
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
          <br />
          <br />
          <br />
        </div>
        <h1 className="h1 text-center font-weight-bolder">Our Global Work</h1>
        {/* <marquee><div className="container">
          <h3 className="h6 text-center">
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
        </div></marquee> */}
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://i.pinimg.com/736x/e3/25/70/e3257012197706c2421d602b376e8e3f.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://wirally.com/wp-content/uploads/2020/04/1-ngo.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://w.ndtvimg.com/sites/3/2022/10/18200623/2-7.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>

        <div className="container">
          <h1 className="h1 text-center font-weight-bolder">
            DONATE FOOD SAVE LIFE
          </h1>
          <h3 className="h6 text-center">
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
          <br />
          <div class="card-deck">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  YOUR DONATION WILL BE IMMEDIATELY PUT TO USE
                </h5>
                <p class="card-text">
                  As soon as you complete your donation, your gift will start
                  its journey. First your money will be turned into food, and
                  then sent to one of the over 80 countries where people are
                  most vulnerable. Every single day, FFN has 5,600 trucks, 30
                  ships and nearly 100 planes ready to deliver the food you
                  send. Because you can't go there and hand out the food
                  yourself, we do it for you. Please send food to save a life
                  today and join the fight against hunger.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">HUNGER</h5>
                <p class="card-text">
                  Hunger is defined as a condition in which a person does not
                  have the physical or financial capability to eat sufficient
                  food to meet basic nutritional needs for a sustained period.
                  In the field of hunger relief, the term hunger is used in a
                  sense that goes beyond the common desire for food that all
                  humans experience, also known as an appetite. The most extreme
                  form of hunger, when malnutrition is widespread, and when
                  people have started dying of starvation through lack of access
                  to sufficient, nutritious food, leads to a declaration of
                  famine
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">DONNER</h5>
                <p class="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Corporis quia tenetur nihil! Doloribus illum at vel deleniti.
                  Consectetur, delectus neque dolore provident voluptates
                  expedita! Temporibus voluptas hic laudantium sint natus
                  corporis provident exercitationem voluptatem quia. Esse,
                  asperiores? Vel, possimus dolore molestias sunt aspernatur
                  officia debitis rem autem harum? Sequi voluptatem, ad
                  doloribus similique amet sint eos earum distinctio porro.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br />
        <div className="container">
          <h1 className="h1 text-center font-weight-bolder">Our Aim</h1>
          <h3 className="h6 text-center">
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
        <br />
        <br />

        <div class="card-deck">
          <div class="card">
            <img
              src="https://d31nhj1t453igc.cloudfront.net/cloudinary/2021/Dec/27/h0rI8WXR21c45ij3Qk4i.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Stop Westing Food</h5>
              <p class="card-text">
                As soon as you complete your donation, your gift will start its
                journey. First your money will be turned into food, and then
                sent to one of the over 80 countries where people are most
                vulnerable. Every single day, FFN has 5,600 trucks, 30 ships and
                nearly 100 planes ready to deliver the food you send. Because
                you can't go there and hand out the food yourself, we do it for
                you. Please send food to save a life today and join the fight
                against hunger.
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/2/18/w600X390/poverty_in_india_-_AP_0.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">No One Slip With Empty Stomach</h5>
              <p class="card-text">
                Hunger is defined as a condition in which a person does not have
                the physical or financial capability to eat sufficient food to
                meet basic nutritional needs for a sustained period. In the
                field of hunger relief, the term hunger is used in a sense that
                goes beyond the common desire for food that all humans
                experience, also known as an appetite. The most extreme form of
                hunger, when malnutrition is widespread, and when people have
                started dying of starvation through lack of access to
                sufficient, nutritious food, leads to a declaration of famine
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2013/07/25/Photos/poverty_2--621x414.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Zero Hunger In the World</h5>
              <p class="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis quia tenetur nihil! Doloribus illum at vel deleniti.
                Consectetur, delectus neque dolore provident voluptates
                expedita! Temporibus voluptas hic laudantium sint natus corporis
                provident exercitationem voluptatem quia. Esse, asperiores? Vel,
                possimus dolore molestias sunt aspernatur officia debitis rem
                autem harum? Sequi voluptatem, ad doloribus similique amet sint
                eos earum distinctio porro.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <h1 className="h1 text-center font-weight-bolder">Our Happy User</h1>
          <h3 className="h6 text-center">
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
        <br />

        <div className="container text-center" style={{ padding: "20px" }}>
          <img
            src="https://iskcondwarka.org/wp-content/uploads/2022/06/Food-Donation-for-the-Poor-1600326877.jpg"
            class="img-fluid"
            alt="..."
          />
          <h1 className="h2 text-center font-weight-bold ">
            Donate Food to the Children <br />
            Anywhere From The World
          </h1>
        </div>
        <Link to="/doLogin">
          <button type="button" class="btn btn-primary btn-lg btn-block">
            Click Here To Donate Food
          </button>
        </Link>

        <br />
        <br />
        <hr />
      </div>
    </>
  );
}
