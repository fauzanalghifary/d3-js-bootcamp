const canvas = d3.select(".canvas");

const svg = canvas.append("svg").attr("height", 600).attr("width", 600);

const group = svg.append("g").attr("transform", "translate(50, 100)");

group
  .append("rect")
  .attr("width", 200)
  .attr("height", 100)
  .attr("fill", "blue")
  .attr("x", 20)
  .attr("y", 20);

group
  .append("circle")
  .attr("r", 50)
  .attr("cx", 300)
  .attr("cy", 70)
  .attr("fill", "pink");

svg
  .append("text")
  .attr("x", 20)
  .attr("y", 200)
  .attr("fill", "grey")
  .text("Hello, ninja")
  .style("font-family", "arial");
