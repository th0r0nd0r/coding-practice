// this graph is undirected
// the methods on the class assume that the graph is not empty and that there are no unconnected vertices
// dfs and bfs currently do not count 'effective' equivalency for Objects and arrays (e.g. {a: 'b'} !== {a: 'b'} and algos will return -1)

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

  // traversal algos will return the vertex # of the value if it exists, else return -1

  recursiveDFS(value) {
    const visited = new Set();

    const traverseChildren = (vIdx) => {
      visited.add(vIdx);
      const children = this.adjList[vIdx];
      for (let i = 0; i < children.length; i++) {
        const childNode = children[i];
        if (!visited.has(childNode)) {
          if (this.vertices[childNode].data === value) {
            return childNode;
          } else {
            visited.add(childNode);
            const branchRtn = traverseChildren(childNode);
            if (branchRtn > 0) {
              return branchRtn;
            }
          }
        }
      }

      return -1;
    };

    return traverseChildren(0);
  }

  iterativeDFS(value) {
    const visited = new Set();
    const stack = [0];

    while (stack.length > 0) {
      const currentNodeIdx = stack.pop();
      if (!visited.has(currentNodeIdx)) {
        visited.add(currentNodeIdx);
        if (this.vertices[currentNodeIdx].data === value) {
          return currentNodeIdx;
        }

        const children = this.adjList[currentNodeIdx];
        for (let i = 0; i < children.length; i++) {
          stack.push(children[i]);
        }
      }
    }

    return -1;
  }

  BFS(value) {
    
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
 console.log("DFS for 'hello': ", testGraph.iterativeDFS('hello'));
 console.log("DFS for 43.5: ", testGraph.iterativeDFS(43.5));
 console.log("DFS for 'b': ", testGraph.iterativeDFS('b'));