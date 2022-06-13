// const data = [
//   {
//     width: 200,
//     height: 100,
//     fill: "purple",
//   },
//   {
//     width: 100,
//     height: 60,
//     fill: "pink",
//   },
//   {
//     width: 50,
//     height: 30,
//     fill: "red",
//   },
// ];

// const svg = d3.select("svg");

// const rects = svg
//   .selectAll("rect")
//   .data(data)
//   .attr("width", (d) => d.width)
//   .attr("height", (d) => d.height)
//   .attr("fill", (d) => d.fill);

// rects
//   .enter()
//   .append("rect")
//   .attr("width", (d) => d.width)
//   .attr("height", (d) => d.height)
//   .attr("fill", (d) => d.fill);

//----------------------------------

const svg = d3.select("svg");

d3.json("planets.json").then((data) => {
  const circs = svg.selectAll("circle").data(data);

  //   Add attrs to circs already in DOM
  circs
    .attr("cy", 200)
    .attr("cx", (d) => d.distance)
    .attr("r", (d) => d.radius)
    .attr("fill", (d) => d.fill);

  circs
    .enter()
    .append("circle")
    .attr("cy", 200)
    .attr("cx", (d) => d.distance)
    .attr("r", (d) => d.radius)
    .attr("fill", (d) => d.fill);
});
