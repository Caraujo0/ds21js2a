class Graph {
    constructor(isDirected = false) {
      this.vertices = {};
      this.edges = {};
      this.isDirected = isDirected;
    }
     addVertex(newVertex) {
      this.vertices[newVertex.getKey()] = newVertex;
  
      return this;
    }
     getVertexByKey(vertexKey) {
      return this.vertices[vertexKey];
    }
     getNeighbors(vertex) {
      return vertex.getNeighbors();
    }
     getAllVertices() {
      return Object.values(this.vertices);
    }
       getAllEdges() {
      return Object.values(this.edges);
    }
       addEdge(edge) {
      // Try to find and end start vertices.
      let startVertex = this.getVertexByKey(edge.startVertex.getKey());
      let endVertex = this.getVertexByKey(edge.endVertex.getKey());
         // Insert start vertex if it wasn't inserted.
      if (!startVertex) {
        this.addVertex(edge.startVertex);
        startVertex = this.getVertexByKey(edge.startVertex.getKey());
      }
          // Insert end vertex if it wasn't inserted.
      if (!endVertex) {
        this.addVertex(edge.endVertex);
        endVertex = this.getVertexByKey(edge.endVertex.getKey());
      }
           // Check if edge has been already added.
      if (this.edges[edge.getKey()]) {
        throw new Error('Edge has already been added before');
      } else {
        this.edges[edge.getKey()] = edge;
      }
  // Add edge to the vertices.
      if (this.isDirected) {
        // If graph IS directed then add the edge only to start vertex.
        startVertex.addEdge(edge);
      } else {
        // If graph ISN'T directed then add the edge to both vertices.
        startVertex.addEdge(edge);
        endVertex.addEdge(edge);
      }
  
      return this;
    }
       deleteEdge(edge) {
      // Delete edge from the list of edges.
      if (this.edges[edge.getKey()]) {
        delete this.edges[edge.getKey()];
      } else {
        throw new Error('Edge not found in graph');
      }
  
      // Try to find and end start vertices and delete edge from them.
      const startVertex = this.getVertexByKey(edge.startVertex.getKey());
      const endVertex = this.getVertexByKey(edge.endVertex.getKey());
  
      startVertex.deleteEdge(edge);
      endVertex.deleteEdge(edge);
    }
    }
    