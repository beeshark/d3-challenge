// @TODO: YOUR CODE HERE!
// create scatter plot between two of the data vairable such as `Healthcare vs. Poverty` or `Smokers vs. Age`
// reference hair metal activity

var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// create svg wrapper
var svg = d3
  .select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// 
//var chosenAxis = 

// interactive bits

// import csv 
d3.csv("data.csv").then(function(healthData, err) {
    if (err) throw err;

//parse data
healthData.forEach(function(data){
    data.income = +data.poverty
    data.smokes = +data.smokes;
});

 // xLinearScale function above csv import
 var xLinearScale = xScale(healthData, chosenXAxis);

 // Create y scale function
 var yLinearScale = d3.scaleLinear()
   .domain([0, d3.max(healthData, d => d.income)])
   .range([height, 0]);

 // Create initial axis functions
 var bottomAxis = d3.axisBottom(xLinearScale);
 var leftAxis = d3.axisLeft(yLinearScale);

 // append x axis
 var xAxis = chartGroup.append("g")
   .classed("x-axis", true)
   .attr("transform", `translate(0, ${height})`)
   .call(bottomAxis);

 // append y axis
 chartGroup.append("g")
   .call(leftAxis);
   

})

// make the circles
