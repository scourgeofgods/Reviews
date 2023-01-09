import React from "react";
import Review from "./Review";

function App() {
  return (
    <main>
      <section className="reviews">
        <div className="sec">
          <h2 className="sec-title">Our Reviews</h2>
          <p className="sec-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            minus.
            <span>Lorem ipsum dolor sit amet.</span>
          </p>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
