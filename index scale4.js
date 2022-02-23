var data=[
    {"platform": "android","percentage":40.11},
    {"platform": "windows","percentage":36.69},
    {"platform": "ios","percentage":13.06}
];

var svgwidth=500;
var svgheight=300;
var radius=Math.min(svgheight,svgwidth)/2;
var svg=d3.select('svg')
    .attr("width",svgwidth)
    .attr("height",svgheight);

var g=svg.append("g")
    .attr("transform","translate("+ radius + "," + radius + ")");

var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie = d3.pie().value(function(d){
    return d.percentage;
});

var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g");

arc.append("path")
    .attr("d",path)
    .attr("fill",function(d){ return color(d.data.percentage);});

var label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);