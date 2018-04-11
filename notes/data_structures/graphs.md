# Graphs

### Definition

"A nonempty finite set of vertices **V** along with a set **E** of 2-element subsets of V. The elements of V are called vertices. The elements of E are called edges."

TL;DR- vertices connected by edges.

Ex:
- V: {V1, V2, V3, V4, V5, V6}
- E: {{V1,V2},{V1,V3},{V1,V4},{V4,V5},{V5,V6}}

### Terminology

- **Cardinality:** number of vertices in a graph
- **Degree** of a vertex Vn: number of edges connected to Vn
- **Isomorphic:** graphs with identical vertices and edges (can be drawn differently)
- **Parallel Edges:** multiple edges connecting the same two vertices
- **Simple Path:** a path that uses edges at most once
- **Euler Path:** a path in a multigraph (includes regular graphs) that includes all edges exactly once and has different start and end vertices
- **Euler Circuit:** an euler path whose start and end vertices are the same

### Representations

- **Adjacency List:** a key, value pairing of vertices with their connected neighbors.

Ex: {
  V1: (V2,V3,V4),
  V2: (V1),
  V3: (V1),
  V4: (V1,V3),
  V5: (V4, V6),
  V6: (V5)
}

- **Adjacency Matrix:** A binary matrix representing connected vertices. Gets used often.

Ex: 
[
  011100
  100000
  100000
  100010
  000101
  000010
] 

### Types of Graphs

_ **Trees:** graphs with no loops or circuits (the only way to get from a vertex Vn back to Vn is to backtrack)
- **Multigraphs:** graphs in which we allow loops and parallel edges

### Euler Paths/Circuits
- A graph hsa an euler circuit *only* if all vertices have *even degree*