// Data array
var xArray = [ " Indonesia", "france", "canada", "USA","argentina"];
var yArray = [55, 49, 24, 15];

// Define Layout
var layout = {title:"word wide wine production"};

// Define Data
var data = [{labels:yArray, hole:.4, type:"pie"}];

// Display using plotly
Plotly.newPlot("myplot", data, layout);