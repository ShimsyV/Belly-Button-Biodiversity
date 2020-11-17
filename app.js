// Creating function for Data plotting (Bar, gauge, bubble)
function getPlot(id) {
    // get data from json file
    d3.json("data/samples.json").then((data) => {
        console.log(data)

        var wfreq = data.metadata.map(d => d.wfreq)
        console.log(`Washing Frequency: ${wfreq}`)

        // filter sample values by id 
        var samples = data.samples.filter(s => s.id.toString() === id)[0];

        console.log(samples);

        // Getting the top 10 
        var samplevalues = samples.sample_values.slice(0, 10).reverse();

        // get only top 10 otu ids for the plot OTU and reversing it. 
        var OTU_top = (samples.otu_ids.slice(0, 10)).reverse();

        // get the otu id's to the desired form for the plot
        var OTU_id = OTU_top.map(d => "OTU " + d)

        //   console.log(`OTU IDS: ${OTU_id}`)

        // get the top 10 labels for the plot
        var labels = samples.otu_labels.slice(0, 10);

        //   console.log(`Sample Values: ${samplevalues}`)
        //   console.log(`Id Values: ${OTU_top}`)

        // create trace variable for the plot
        var trace = {
            x: samplevalues,
            y: OTU_id,
            text: labels,
            orientation: "h",
            type: "bar",

        };

        // create data variable
        var data = [trace];

        // create layout variable to set plots layout
        var layout = {
            title: "Top 10 OTU",
            yaxis: {
                tickmode: "linear",
                title: "OTU IDs"
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
            }
        };
        // create the bar plot
        Plotly.newPlot("bar", data, layout);


    })


}

// create the function for the change event
function optionChanged(id) {
    getPlot(id);
    // getInfo(id);
}

getPlot();

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