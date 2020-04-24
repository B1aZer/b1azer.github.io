d3.select('#vl-version').text(vl.version);
d3.select('#vg-version').text(vg.version);

d3.json('examples/all-examples.json', function(examples) {
  render();

  function render() {
    let viz = d3.select('div.viz-list').selectAll('.viz').data(examples);

    viz.exit().remove();

    let vizEnter = viz
      .enter()
      .append('div')
      .attr('class', 'viz')
      .attr('id', function(d:string) { return d; });

    vizEnter.append('h3').text(function(d:string) { return d; });
    vizEnter.append('div').attr('class', 'desc');
    vizEnter.append('div').attr('class', 'view');

    examples.forEach(function(example) {
      d3.json('examples/specs/' + example + '.json', function(error, vlSpec) {
        let embedSpec = {
          mode: 'vega-lite',
          spec: vlSpec,
          actions: {
            export: false
          }
        };
        vg.embed('.viz#'+ example + '> div.view', embedSpec, function(err) {
          if (err) {
            console.error(err);
          }
        });

        d3.select('.viz#'+ example + '> .desc').text(vlSpec.description || '');
      });
    });
  }

});
