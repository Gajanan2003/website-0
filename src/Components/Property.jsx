import { style } from "./Home/Home";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Property = () => {
  // // for importing js
  const script = document.createElement("script");
  script.src = "/Search-filter.js";
  document.body.appendChild(script);
  // for importing style
  style.href = "/Property-style.css";
  const navigate = useNavigate();
  return (
    <div>
      <div class="curve">
        <img src="/curve.svg" alt="background" draggable="false" />
        <div className="form">
          <form autocomplete="off" action="/Property">
            <div className="autocomplete">
              <input
                id="myInput"
                type="text"
                name="city"
                placeholder="Search..."
                required
              />
              <button type="submit">
                <img src="/search-img.svg" alt="search" />
              </button>
            </div>
          </form>
        </div>
        <p class="exit_button" onClick={() => navigate(-1)}>
          <img src="icons8-enter-80.png" alt="Exit" id="exit_button" /> Back
        </p>

        <p class="add_button">
          <img src="addProp.png" alt="Exit" id="add_button" /> Add Property
        </p>
      </div>
      <div class="prop">
        <div>
          <p id="propName">Property Name</p>
          <p id="OwnedBy">Owned by</p>
          <p id="Desc">Desc </p>
        </div>

        <div class="container">
          <div>
            <button class="btn">
              <span class="btn__inner">
                <span class="btn__slide"></span>
                <span class="btn__content">
                  <img src="left.png" alt="left Click" />
                  <img
                    src="interior.png"
                    draggable="false"
                    id="image"
                    alt="Property photo"
                  />
                  <img src="right.png" alt="right click" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div class="rentBtn">
          <button id="rent_button">Rent</button>
        </div>
      </div>
    </div>
  );
};
