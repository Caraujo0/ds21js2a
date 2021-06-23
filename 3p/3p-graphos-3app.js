  var fromVertex = myVertices[0]; //{9}
for (var i=1; i<myVertices.length; i++){ //{10}
var toVertex = myVertices[i], //{11}
path = new Stack(); //{12}
for (var v=toVertex; v!== fromVertex;
v=shortestPathA.predecessors[v]) { //{13}
path.push(v); //{14}
}
path.push(fromVertex); //{15}
var s = path.pop(); //{16}
while (!path.isEmpty()){ //{17}
s += ' - ' + path.pop(); //{18}
}
console.log(s); //{19}
}
  