class UnweightedGraphNode {
  constructor(data) {
    this.data = data || null;
  }
}

class UnweightedGraph {
  constructor() {
    this.vertices = [];
    this.adjList = [];
  }

  addVertex(data, connections) {
    const vertex = new UnweightedGraphNode(data);
    this.vertices.push(vertex);
  }

  deleteVertex() {

  }

  adjacenttNodes(node) {

  }

  areConnected(n1, n2) {

  }

  data(nodeIdx) {
    return this.vertices[nodeIdx].data;
  }
 }