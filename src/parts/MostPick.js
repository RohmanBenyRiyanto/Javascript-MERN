import React from "react";

export default function MostPick(_props) {
  return (
    <section className="container">
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {_props.data.map((item, index) => (
          <div className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}>
            <div className="card card-featured">
              <div className="tag">
                ${item.price}
                {/* <span className="font-weight-light">per {item.unit}</span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
