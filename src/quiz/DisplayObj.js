function Display({ obj }) {
  const format = (obj) => {
    if (typeof obj === "object" && !Array.isArray(obj)) {
      return Object.entries(obj).map(([key, value], index) => {
        return (
          <div key={index}>
            <strong>{key}</strong>
            <div style={{ marginLeft: "30px" }}>{format(value)}</div>
          </div>
        );
      });
    }
    if (Array.isArray(obj)) {
      return (
        <ul className=" border-y-4 border-green-300">
          {obj.map((item, i) => {
            return <li key={i}>{format(item)}</li>;
          })}
        </ul>
      );
    }
    return <div>{obj}</div>;
  };
  const formattedObject = format(obj);
  return <div>{formattedObject}</div>;
}

export default Display;
