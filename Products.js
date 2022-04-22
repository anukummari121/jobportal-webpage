import React from "react";
import "./App.css";
class Products extends React.Component {
  render() {
    return (
      <main>
        <div class="mainBody">
          <div class="bannerBlock4">
            <div
              // style={{
              //   position: "absolute",
              //   right: "0px",
              //   width: "250px",
              //   height: "150px",
              //   backgroundimage: "url(images/Services.png)",
              //   backgroundposition: "-10px -50px",
              // }}
              style={{
                position: "absolute",
                right: "0px",
                width: "250px",
                height: "150px",
                //backgroundimage: "url(../images/product-xstraw.png)",
                backgroundposition: "-0px -100px",
              }}
            >
              <img src={require("./images/Services.png")} />{" "}
            </div>

            <div class="bannerContent">
              <div class="content1" style={{ width: "80%", margin: "auto" }}>
                <span
                  class="pageTitle"
                  style={{ fontsize: "30px", color: "white" }}
                >
                  PRODUCTS
                </span>
                <br />
                <span
                  class="subTitle"
                  style={{
                    display: "block",
                    lineHeight: "25px",
                    color: "#cdcdcd",
                    fontSize: "18px",
                    magintop: "20px",
                  }}
                >
                  We are passionate about building innovative <br />
                  and robust products
                </span>
              </div>
            </div>
          </div>

          <div class="content padSmall">
            <div class="proLogo">
              <div class="cLogo">
                <img
                  src={require("./images/product-xstraw.png")}
                  width="100%"
                />
              </div>
              <div class="pDesc">
                <span>
                  <b>XSTRAW</b>
                </span>
                <p>
                  Do you have a user group that needs to communicate on a
                  broadcast level but have content that you don’t want to share
                  outside of that user group? Do you need to dynamically change
                  meeting logistics or agenda? Do you run an organization in
                  addition to your primary job and find yourself not having
                  enough time to devote to the role? If so, XSTRAW is an
                  application to help improve the communication and efficiency
                  of your user group, allowing for multi-user collaboration in
                  an authenticated and controlled fashion. XSTRAW is designed
                  for a community of users is in need of open and dynamic
                  communication, but structured in a way that is easy to use and
                  easy to understand. XSTRAW provides capabilities to write and
                  share digital newsletters in a consistent and powerful way,
                  while maintaining flexibility.
                  <ul>
                    <li>
                      Share your team schedule with other parents of your
                      child’s team. Any coach or parent can easily own or manage
                      the schedule and the updates. Playing in a weekend
                      tournament where the schedule is fluid based on competing
                      fields and weather? Use XSTRAW!
                    </li>
                    <li>
                      Sending newsletters via email, but would like a more
                      collaborative approach? Use XSTRAW! You can upload
                      pictures, document them, and put in supporting content.
                      Want to put a narrative on that game picture about who,
                      when and where - XSTRAW can be used.
                    </li>
                    <li>
                      Don’t broadcast personal details around the web, use
                      XSTRAW and control with passcode who can and cannot see
                      your group’s information and plans.
                    </li>
                    <li>
                      LIke the format, but want to share with the world? No
                      problem, leave the passcode out and open it up. Tiered
                      access with an open level and a private level if desired.
                    </li>
                    <li>
                      Posting pictures is awesome, but posting pictures with the
                      rest of the story will help deliver your experience to
                      your audience
                    </li>
                  </ul>
                </p>
                <a
                  href="https://itunes.apple.com/us/app/minicash/id913387948?ls=1&mt=8"
                  target="_blank"
                >
                  <div class="productbutton">DOWNLOAD APP</div>
                </a>
                <a href="https://youtu.be/H1LwZWkDNZw" target="_blank">
                  <div class="productbutton">WATCH DEMO</div>
                </a>
              </div>
            </div>
            <br />
            <br />
            <br />

            <div class="proLogo">
              <div class="cLogo">
                <img
                  src={require("./images/product-minicash.png")}
                  width="100%"
                />
              </div>
              <div class="pDesc">
                <span style={{ fontsize: "25px" }}>
                  <b>MINICASH</b>
                </span>
                <p>
                  MiniCash not only keeps track of shared expenses across a
                  multitude of reasons, but also allows you to send a friendly
                  reminder to others that they need to return a borrowed item.
                  Our app has taken out the awkwardness and given you the power
                  to keep track of your money and personal belongings. Use
                  MiniCash
                  <ul>
                    <li>
                      {" "}
                      to track Monthly bills, vacation expenses, shared expenses
                      etc.,{" "}
                    </li>
                    <li> to track employee time-sheets, over time. </li>
                    <li>
                      {" "}
                      to save any type of transactions! export monthly to
                      text/csv files to print, share and analyze{" "}
                    </li>
                  </ul>
                </p>
                <a
                  href="https://itunes.apple.com/us/app/minicash/id913387948?ls=1&mt=8"
                  target="_blank"
                >
                  <div class="productbutton">DOWNLOAD APP</div>
                </a>
                <a href="https://youtu.be/kSLIGkzENtw" target="_blank">
                  <div class="productbutton">WATCH DEMO</div>
                </a>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
      </main>
    );
  }
}
export default Products;
