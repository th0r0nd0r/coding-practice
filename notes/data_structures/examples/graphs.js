class GraphNode {
  constructor(data) {
    this.data = data || null;
  }
}

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = [];
  }

  addVertex(data, connections) {
    if (connections instanceof Array) {
      const vertex = new GraphNode(data);
      this.vertices.push(vertex);
      this.adjList.push(connections);
      connections.forEach((nodeIdx) => {
        this.adjList[nodeIdx].push(this.vertices.length - 1);
      });
    } else {
      throw "connections must be an array of integers";
    }
  }

  deleteVertex(nodeIdx) {
    const vertex = this.vertices[nodeIdx];
    const adjRow = this.adjList[nodeIdx];
    adjRow.forEach((vertexIdx, i) => {
      const adjVertex = this.adjList[vertexIdx];
      this.adjList[vertexIdx] = adjVertex.filter(n => n !== nodeIdx);
    });
    this.vertices[nodeIdx] = null;
    this.adjList[nodeIdx] = [];
  }

  adjacenttNodes(nodeIdx) {
    return this.adjList[nodeIdx];
  }

  areConnected(n1, n2) {
    return this.adjList[n1].includes(n2);
  }

  data(nodeIdx) {
    return this.vertices[nodeIdx].data;
  }
 }

 function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
 }

 const testGraph = new Graph();
 
 const nodeData = [3,"hello",['a','b','c'],{3:"something"},43.5];
 nodeData.forEach((data, i) => {
   const connections = [];
  [...Array(i).keys()].forEach(() => {
    connections.push(getRandomInt(i - 1));
  });

  testGraph.addVertex(data,connections);
 });

 console.log("vertices: ", testGraph.vertices);
 console.log("adjacency list: ", testGraph.adjList);