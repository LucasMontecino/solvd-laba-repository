const { useState, useEffect } = React;

const RedLight = ({ active }) => (
  <div
    style={{
      width: "120px",
      height: "120px",
      backgroundColor: active ? "#DF4040" : "#5B5B5B",
      borderRadius: "60px",
    }}
  ></div>
);

const YellowLight = ({ active }) => (
  <div
    style={{
      width: "120px",
      height: "120px",
      backgroundColor: active ? "#E9EC6A" : "#5B5B5B",
      borderRadius: "60px",
    }}
  ></div>
);

const GreenLight = ({ active }) => (
  <div
    style={{
      width: "120px",
      height: "120px",
      backgroundColor: active ? "#04CA00" : "#5B5B5B",
      borderRadius: "60px",
    }}
  ></div>
);

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    const lights = ["red", "yellow", "green"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % lights.length;
      setCurrentLight(lights[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          height: "560px",
          width: "240px",
          borderRadius: "60px",
          backgroundColor: "#585F68",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "378px",
            borderRadius: "40px",
            backgroundColor: "#414447",
            position: "absolute",
            top: "-35px",
            left: "50%",
            marginLeft: "-60px",
            zIndex: "-1",
          }}
        ></div>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <RedLight active={currentLight === "red"} />
          <YellowLight active={currentLight === "yellow"} />
          <GreenLight active={currentLight === "green"} />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<TrafficLight />, document.getElementById("root"));
