import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    let nodes_data =  [
      {"name": "Lillian", "sex": "F"},
      {"name": "Gordon", "sex": "M"},
      {"name": "Sylvester", "sex": "M"},
      {"name": "Mary", "sex": "F"},
      {"name": "Helen", "sex": "F"},
      {"name": "Jamie", "sex": "M"},
      {"name": "Jessie", "sex": "F"},
      {"name": "Ashton", "sex": "M"},
      {"name": "Duncan", "sex": "M"},
      {"name": "Evette", "sex": "F"},
      {"name": "Mauer", "sex": "M"},
      {"name": "Fray", "sex": "F"},
      {"name": "Duke", "sex": "M"},
      {"name": "Baron", "sex": "M"},
      {"name": "Infante", "sex": "M"},
      {"name": "Percy", "sex": "M"},
      {"name": "Cynthia", "sex": "F"},
      {"name": "Feyton", "sex": "M"},
      {"name": "Lesley", "sex": "F"},
      {"name": "Yvette", "sex": "F"},
      {"name": "Maria", "sex": "F"},
      {"name": "Lexy", "sex": "F"},
      {"name": "Peter", "sex": "M"},
      {"name": "Ashley", "sex": "F"},
      {"name": "Finkler", "sex": "M"},
      {"name": "Damo", "sex": "M"},
      {"name": "Imogen", "sex": "F"}
    ];
    let links_data = [
      {"source": "Sylvester", "target": "Gordon", "size":2 },
        {"source": "Sylvester", "target": "Lillian", "size":2 },
        {"source": "Sylvester", "target": "Mary", "size":2},
        {"source": "Sylvester", "target": "Jamie", "size":2},
        {"source": "Sylvester", "target": "Jessie", "size":2},
        {"source": "Sylvester", "target": "Helen", "size":2},
        {"source": "Helen", "target": "Gordon", "size":2},
        {"source": "Mary", "target": "Lillian", "size":2},
        {"source": "Ashton", "target": "Mary", "size":2},
        {"source": "Duncan", "target": "Jamie", "size":2},
        {"source": "Gordon", "target": "Jessie", "size":2},
        {"source": "Sylvester", "target": "Fray", "size":5},
        {"source": "Fray", "target": "Mauer", "size":2},
        {"source": "Fray", "target": "Cynthia", "size":2},
        {"source": "Fray", "target": "Percy", "size":2},
        {"source": "Percy", "target": "Cynthia", "size":2},
        {"source": "Infante", "target": "Duke", "size":2},
        {"source": "Duke", "target": "Gordon", "size":2},
        {"source": "Duke", "target": "Sylvester", "size":2},
        {"source": "Baron", "target": "Duke", "size":2},
        {"source": "Baron", "target": "Sylvester", "size":5},
        {"source": "Evette", "target": "Sylvester", "size":5},
        {"source": "Cynthia", "target": "Sylvester", "size":5},
        {"source": "Cynthia", "target": "Jamie", "size":5},
        {"source": "Mauer", "target": "Jessie", "size":5},
        {"source": "Duke", "target": "Lexy", "size":2},
        {"source": "Feyton", "target": "Lexy", "size":2},
        {"source": "Maria", "target": "Feyton", "size":2},
        {"source": "Baron", "target": "Yvette", "size":5},
        {"source": "Evette", "target": "Maria", "size":5},
        {"source": "Cynthia", "target": "Yvette", "size":5},
        {"source": "Maria", "target": "Jamie", "size":5},
        {"source": "Maria", "target": "Lesley", "size":5},
        {"source": "Ashley", "target": "Damo", "size":2},
        {"source": "Damo", "target": "Lexy", "size":2},
        {"source": "Maria", "target": "Feyton", "size":2},
        {"source": "Finkler", "target": "Ashley", "size":5},
        {"source": "Sylvester", "target": "Maria", "size":5},
        {"source": "Peter", "target": "Finkler", "size":5},
        {"source": "Ashley", "target": "Gordon", "size":5},
        {"source": "Maria", "target": "Imogen", "size":5}
    ];
    let link_force =  d3.forceLink(links_data).id(function(d:any) { return d.name; });
    let simulation = d3.forceSimulation().nodes(nodes_data);
    let svg = d3.select(".test");
    const width = Number(svg.attr("width"));
    const height = Number(svg.attr("height"));
    let charge_force = d3.forceManyBody().strength(-100);
    let center_force = d3.forceCenter(width / 2, height / 2);
    simulation
      .force("charge_force", charge_force)
      .force("center_force", center_force)
      .force("links", link_force)
      .force("collide", d3.forceCollide(5));
    let link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links_data)
      .enter().append("line")
      .attr("stroke", "rgb(111,150,0)")
      .attr("stroke-width", function(d:any) { return d.size; });
    let node_parent = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes_data);
    let node = node_parent
      .enter()
      .append("circle")
      .attr("r", 5)
      .attr("fill", "red");
    let node_text = node_parent
      .enter()
      .append("text")
      .text( function (d) { return d.name; });

    function tickActions() {
      //update circle positions to reflect node updates on each tick of the simulation 
      node_text
        .attr("x", function(d:any) { return d.x-10; })
        .attr("y", function(d:any) { return d.y-10; })
      node
        .attr("cx", function(d:any) { return d.x; })
        .attr("cy", function(d:any) { return d.y; })
      link
        .attr("x1", function(d:any) { return d.source.x; })
        .attr("y1", function(d:any) { return d.source.y; })
        .attr("x2", function(d:any) { return d.target.x; })
        .attr("y2", function(d:any) { return d.target.y; });
    }
    simulation.on("tick", tickActions );
    function drag_start(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
         d.fx = d.x;
         d.fy = d.y;
     }
     //make sure you can't drag the circle outside the box
     function drag_drag(d) {
       d.fx = d3.event.x;
       d.fy = d3.event.y;
     }
     function drag_end(d) {
       if (!d3.event.active) simulation.alphaTarget(0);
       d.fx = null;
       d.fy = null;
     }
    var drag_handler = d3.drag()
      .on("start", drag_start)
      .on("drag", drag_drag)
      .on("end", drag_end);	
    drag_handler(node);
  }

}
