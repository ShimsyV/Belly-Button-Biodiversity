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

        //console.log(`ID: ${samples.otu_ids}`)

        // The bubble chart
        var trace1 = {
            x: samples.otu_ids,
            y: samples.sample_values,
            mode: "markers",
            text: samples.otu_labels,
            marker: {
                size: samples.sample_values,
                color: samples.otu_ids
            }
        };

        // creating data variable 
        var data1 = [trace1];

        // set the layout for the bubble plot
        var layout1 = {
            xaxis: { title: "OTU ID" },
            yaxis: { title: "Sample Values" },
            height: 600,
            width: 1200
        };

        // create the bubble plot
        Plotly.newPlot("bubble", data1, layout1);


    })


}

// create the function to get the necessary data for demographic panel
function getInfo(id) {
    // read the json file to get data
    d3.json("data/samples.json").then((data) => {

        // get the metadata info for the demographic panel
        var metadata = data.metadata;

        console.log(metadata)


    });
}

// create the function for the change event
function optionChanged(id) {
    getPlot(id);
    getInfo(id);
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