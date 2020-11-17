// create the function for the initial data rendering
function init() {
    // select dropdown menu 
    var dropdown = d3.select("#selDataset");

    // read the data 
    d3.json("data/samples.json").then((data) => {
        console.log(data)

    });
}

init();