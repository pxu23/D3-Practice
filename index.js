let dataset = [80,100,50,120,180,30,40,120,160];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth/dataset.length);
var svg = d3.select('svg')
            .attr("width",svgWidth)
            .attr("height",svgHeight);

var barChart = svg.selectAll("rect")
                  .data(dataset)
                  .enter()
                  .append("rect")
                  .attr("y",function(d) {
                        return svgHeight - d;
                    })
                  .attr("height",function(d) {
                        return d;
                    })
                  .attr("width",barWidth - barPadding)
                  .attr("transform",(d,i) => {
                        let translate = [barWidth * i, 0];
                        return `translate(${translate})`;
                    }); 

var textLabels = svg.selectAll("text")
                .data(dataset)
                .enter()
                .append("text")
                .text(d => d)
                .attr("y",(d,i) => svgHeight - d - 2)
                .attr("x",(d,i) => i * barWidth + 2)
                .attr("fill","green"); 

var yScale = d3.scaleLinear()
               .domain([0,d3.max(dataset)])
               .range([0,svgHeight]);

/*let dataset = [30,12,103,170,45,95,190,75];
let svgHeight= 200, svgWidth = 500, barSpacing = 5;
let totalBarWidth = (svgWidth/dataset.length);
let barWidth = totalBarWidth-barSpacing
let svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);
let barchart = svg.selectAll('rect')
                  .data(dataset)
                  .enter()
                  .append('rect')
                  .attr('y',d=>svgHeight-d)
                  .attr('height',d=>d)
                  .attr('width',barWidth)
                  .attr('transform', (d,i)=>{
                  let translate = [totalBarWidth*i, 0];
                      return `translate(${translate})`;
                  });*/
        