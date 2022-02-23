var dataset =[80,100,56,120,90,66,72,39];

var svgwidth=500;
var svgheight=300;
var barwidth=(svgwidth/dataset.length);

var svg=d3.select('svg')
    .attr("width",svgwidth)
    .attr("height",svgheight);

var xScale = d3.scaleLinear()
    .domain([0,d3.max(dataset)])
    .range([0,svgwidth]);

var yScale = d3.scaleLinear()
    .domain([0,d3.max(dataset)])
    .range([0,svgheight]);

var x_axis= d3.axisBottom().scale(xScale);

var y_axis= d3.axisLeft().scale(yScale);

svg.append("g")
    .attr("transform","translate(50,10)")
    .call(y_axis);

var xAxisTemplate = svgheight - 20;

svg.append("g")
    .attr("transform","translate(50,"+ xAxisTemplate +")")
    .call(x_axis);
