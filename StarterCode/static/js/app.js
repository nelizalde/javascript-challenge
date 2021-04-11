// Level 1: Automatic Table and Date Search

// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Loop Through `tableData` and console.log each ufoSighting
tableData.forEach(function(ufoSighting){
    console.log(ufoSighting);

// Use D3 to append one table row `tr` to the table body
    var row = tbody.append("tr")

// Use `Object.entries` to console.log each ufoSighting value
Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
});
});
// -------------------------------------------------------------

// Filter table button
button = d3.select("#filter-btn");

// Use the `on` function 
button.on("click", function(){
    tbody.html("");

// Grab value input field
var inputValue = d3.select("#datetime").property("value");
console.log(inputValue);

// Filter Data 
var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
console.log(filteredData);

filteredData.forEach(function(selected) {

    console.log(selected);
    
    
// Append new row
var row = tbody.append("tr");

// `Object.entries` and console.log find each UFO Sighting value
Object.entries(selections).forEach(function([key, value]) {
console.log(key, value);

// Append cells to rows per value
var cell = row.append("td");
cell.text(value);


    });
});
});