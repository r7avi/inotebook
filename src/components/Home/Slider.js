import React from "react";
import "./Slider.css"; // Import the custom CSS for styling

export default function Slider() {
  return (
    <div>
      {/* {Section 1}
     <img src={`${process.env.PUBLIC_URL}/assets/images/sliders/1.jpg`} class="d-block w-100" alt="Slide 1"/>
      */}

      <div class="container mt-4">
        <div
          id="courseSlider"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={`https://picsum.photos/800/600?random=1`}
                class="d-block w-100"
                alt="Slide 1"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Welcome to Our Courses</h5>
                <p>Enhance your skills with our expert-led courses.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={`https://picsum.photos/800/600?random=2`}
                class="d-block w-100"
                alt="Slide 2"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Special Offers</h5>
                <p>Check out our latest offers and discounts on courses.</p>
                
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#courseSlider"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#courseSlider"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
