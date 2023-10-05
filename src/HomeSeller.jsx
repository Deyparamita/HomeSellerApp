import React, { useState } from "react";
import "./HomeSeller.css";
import { Navigate, useNavigate } from "react-router-dom";
import PropertyPage1 from "./PropertyPage/PropertyPage1";
import jsonData from "./mockData.json";

const HomeSeller = () => {
  const [lastThreeimg, setlastThreeimg] = useState(true);

  const [properties, setProperties] = useState(jsonData);

  function fun() {
    setlastThreeimg(!lastThreeimg);
  }

  const Navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>Featured Listed Property</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br /> Consequuntur eaque deserunt, repudiandae molestiae nemo
          aspernagnaatur assumenda mm,
        </p>
      </header>
      <nav>
        <ul className="ul1">
          <button>New York</button>
          <button>Mumbai</button>
          <button>Paris</button>
          <button>London</button>
        </ul>
        <ul className="ul2">
          <button onClick={() => console.log("Hello")}>View All</button>
        </ul>
      </nav>

      <main>
        <div className="card-wrapper">
          <div className="cardSet1">
            <div className="card">
              <div className="box">
                <img
                  src="https://images.pexels.com/photos/7245356/pexels-photo-7245356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="IMAGE"
                />

                <h3>
                  RCE Theaters -907 S,
                  <br />
                  NC 2576875
                </h3>
                <div className="details">ROOM BED</div>
                <div className="readmore">
                  <h1>Price: $89500</h1>
                  <button onClick={() => Navigate("/PropertyPage1")}>
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <img
                  src="https://images.pexels.com/photos/1693946/pexels-photo-1693946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="IMAGE"
                />
                <h3>
                  Costco Wholesale-1021 Oak Forest
                  <br />
                  Ln, Myrtle Beach, SC
                </h3>
                <div className="details">ROOM BED</div>

                <div className="readmore">
                  <h1>Price: $60000</h1>
                  <button onClick={() => Navigate("./PropertyPage2")}>
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <img
                  src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="IMAGE"
                />
                <h3>
                  Regal North Hills-4150 Main at North<br/>
        Hills St, Raleigh 
                </h3>
                <div className="details">ROOM BED</div>

                <div className="readmore">
                  <h1>Price: $50000</h1>
                  <button onClick={() => Navigate("./PropertyPage3")}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="cardSet2">
            <div className="card">
              <div className="box">
                <img
                  src="https://images.pexels.com/photos/2886284/pexels-photo-2886284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="IMAGE"
                />
                <h3>
                  Spring Lane Cinemas - 1351 Plaza<br/>
        Blvd, Sanford, NC 27330 
                </h3>
                <div className="details">ROOM BED</div>

                <div className="readmore">
                  <h1>Price:$65000</h1>
                  <button onClick={() => Navigate("./PropertyPage4")}>
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <img
                  src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="IMAGE"
                />
                <h3>
                  Dollar General-5416 Rock Quarry Rd,<br/>
        Raleigh, NC 27610 
                </h3>
                <div className="details">ROOM BED</div>

                <div className="readmore">
                  <h1>Price:$79600</h1>
                  <button onClick={() => Navigate("./PropertyPage5")}>
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <img
                  src="https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="IMAGE"
                />
                <h3>
                  RCE Theaters -907 S,<br/>
      Raleigh, NC 27610
                </h3>
                <div className="details">ROOM BED</div>

                <div className="readmore">
                  <h1>Price: $80000</h1>
                  <button onClick={() => Navigate("./PropertyPage6")}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="cardSet3">
            <div className="card" hidden={lastThreeimg}>
              <div className="box">
                <img
                  src="https://images.pexels.com/photos/10902419/pexels-photo-10902419.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="IMAGE"
                />
                <h3>
                  Dollar General-5416 Rock Quarry Rd,<br/>
        Raleigh, NC 27610
                </h3>
                <div className="details">ROOM BED</div>

                <div className="readmore">
                  <h1>Price:$20000</h1>
                  <button onClick={() => Navigate("./PropertyPage7")}>
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="card" hidden={lastThreeimg}>
              <div className="box">
                <img
                  src="https://images.pexels.com/photos/18394013/pexels-photo-18394013/free-photo-of-church-of-the-new-jerusalem-in-cambridge-in-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="IMAGE"
                />
                <h3>
                  Dollar General-5416 Rock Quarry Rd,<br/>
        Raleigh, NC 27610
                </h3>
                <div className="details">ROOM BED</div>

                <div className="readmore">
                  <h1>Price:$45000</h1>
                  <button onClick={() => Navigate("./PropertyPage8")}>
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="card" hidden={lastThreeimg}>
              <div className="box">
                <img
                  src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="IMAGE"
                />
                <h3>
                  Dollar General-5416 Rock Quarry Rd,<br/>
        Raleigh, NC 27610
                </h3>
                <div className="details">ROOM BED</div>

                <div className="readmore">
                  <h1>Price: $79000</h1>
                  <button onClick={() => Navigate("./PropertyPage9")}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <button onClick={fun}>
          {lastThreeimg ? `Show More` : `Show Less`}
        </button>
      </footer>
    </div>
  );
};

export default HomeSeller;
