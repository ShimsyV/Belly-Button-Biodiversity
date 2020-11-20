# Belly-Button-Biodiversity
![](https://github.com/ShimsyV/Belly-Button-Biodiversity/blob/main/images/readme.jpg)

Build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

### Plotly

#### Horizontal Bar Chart

* Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* Use sample_values as the values for the bar chart.

* Use otu_ids as the labels for the bar chart.

* Use otu_labels as the hovertext for the chart.

![](https://github.com/ShimsyV/Belly-Button-Biodiversity/blob/main/images/Horizontal_bar.PNG)


#### Bubble Chart

* Use otu_ids for the x values.

* Use sample_values for the y values.

* Use sample_values for the marker size.

* Use otu_ids for the marker colors.

* Use otu_labels for the text values.

![](https://github.com/ShimsyV/Belly-Button-Biodiversity/blob/main/images/bubble_chart.PNG)

#### Demographic info

* Display the sample metadata, i.e., an individual's demographic information.

* Display each key-value pair from the metadata JSON object somewhere on the page.

![](https://github.com/ShimsyV/Belly-Button-Biodiversity/blob/main/images/demographic.PNG)

#### Update all of the plots any time that a new sample is selected.

Create a layout for your dashboard.

![](https://github.com/ShimsyV/Belly-Button-Biodiversity/blob/main/images/dashboard.PNG)

#### Gauge Chart (Bonus)

* Adapt the Gauge Chart to plot the weekly washing frequency of the individual.

* Modify the example gauge code to account for values ranging from 0 through 9.

* Update the chart whenever a new sample is selected.

![](https://github.com/ShimsyV/Belly-Button-Biodiversity/blob/main/images/gauge_chart.PNG)

### Deployment

Finally deploy your app to a free static page hosting service. 

Click [here](https://shimsyv.github.io/Belly-Button-Biodiversity/) for the static page

