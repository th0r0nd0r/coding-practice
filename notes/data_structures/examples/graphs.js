// this graph is undirected
// the methods on the class assume that the graph is not empty and that there are no unconnected vertices

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

  // feed this fn the data for the new node, and an array of the node #s to connect to
  // maybe a better way to implement would be to either pass an array of node.data, or have each GraphNode store it's vertex # internally
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

  recursiveDFS(value) {
    const visited = new Set();
    const startNode = this.vertices[0];

    const traverseChildren = (vIdx) => {
      visited.add(vIdx);
      const children = this.adjList[vIdx];
      for (let i = 0; i < children.length; i++) {
        const childIdx = children[i];
        if (!visited.has(childIdx)) {
          if (this.vertices[childIdx].data === value) {
            return childIdx;
          } else {
            visited.add(childIdx);
            return traverseChildren(childIdx);
          }
        }
      }

      return -1;
    };

    return traverseChildren(0);
  }
 }
 



//  function getRandomInt(max) {
//    return Math.floor(Math.random() * Math.floor(max));
//  }

//  const testGraph = new Graph();
 
//  const nodeData = [3,"hello",['a','b','c'],{3:"something"},43.5];
//  nodeData.forEach((data, i) => {
//    const connections = [];
//   [...Array(i).keys()].forEach(() => {
//     connections.push(getRandomInt(i - 1));
//   });

//   testGraph.addVertex(data,connections);
//  });

//  console.log("vertices: ", testGraph.vertices);
//  console.log("adjacency list: ", testGraph.adjList);