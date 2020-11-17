// Creating function for Data plotting (Bar, gauge, bubble)
function getPlot(id) {
    // get data from json file
    d3.json("data/samples.json").then((data) => {
        console.log(data)

        var wfreq = data.metadata.map(d => d.wfreq)
        console.log(`Washing Frequency: ${wfreq}`)
    })


}

//getPlot();

// create the function for the initial data rendering
function init() {
    // select dropdown menu 
    var dropdown = d3.select("#selDataset");

    // read the data 
    d3.json("data/samples.json").then((data) => {
        console.log(data)

        // get the id data to the dropdwown menu
        data.names.forEach(function (name) {
            dropdown.append("option").text(name).property("value");
        });

    });
}

init();