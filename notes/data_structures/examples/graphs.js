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
        this.adjList[nodeIdx].push(this.vertices[this.vertices.length - 1]);
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

  adjacenttNodes(node) {

  }

  areConnected(n1, n2) {

  }

  data(nodeIdx) {
    return this.vertices[nodeIdx].data;
  }
 }