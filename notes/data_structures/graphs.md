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
- **Simple Graphs (Strict Graphs):** unweighted, undirected, containing no loops or parallel edges

### Paths/Circuits
- **Simple Path:** a path that uses edges at most once

#### Euler Paths/Circuits
- **Euler Path:** a path in a multigraph (includes regular graphs) that includes all edges exactly once
- **Euler Circuit:** an euler path whose start and end vertices are the same

- Circuits: A graph hsa an euler circuit *only* if all vertices have *even degree*
- Paths: all vertices have even degree *except* two that have odd degree
- No Euler path is possible if > 2 vertices have odd degree

#### Hamiltonian Paths/Circuits
- **Hamiltonian Path** visits every vertex exactly once
- **Hamiltonian Circuit:** Hamiltonian path that starts/ends on the same vertex 

- If you have a circuit, you have a path (just remove an edge)
- no general theorem to tell if a hamiltonian path is possible
- specific case (Dirac): a simple graph with n vertices (n >= 3) is Hamiltonian if every vertex has degree n / 2 or greater

### Common Algorithms

#### Dijkstra's
- algorithm to find the cheapest (or shortest, etc.) path between two points in a weighted graph