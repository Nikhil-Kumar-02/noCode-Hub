  import React from "react"
  import Header from "./Header";
  import SideBar from "./SideBar";
  import WebsiteRenderedPage from "./WebsiteRenderedPage";

  const Build = (props) => {
      /**
     * TODO
     * -make it as the picture is  provided
     * -apply proper margin padding and positioning of the component (dont use css if present remove it)
     * -make it as responsive as possible
     * -test it on your benchmark to see if it is meeting expectations and then push it and raise pr
     */
    console.log("in this page")
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <div style={{ width: "100%", height: "10%", backgroundColor: "lightgray" }}>
          <Header />
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          <div
            style={{
              width: "10%",
              backgroundColor: "lightblue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SideBar />
          </div>
          <div style={{ flex: 1, backgroundColor: "lightgreen", padding: "10px" }}>
            <WebsiteRenderedPage />
          </div>
        </div>
      </div>
    )
  };

  export default Build;
