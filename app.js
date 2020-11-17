// getting data from the json file
// creating function for data plotting 
function getPlot(id) {
    d3.json("data/samples.json").then((data) => {
        console.log(data)

    })

}