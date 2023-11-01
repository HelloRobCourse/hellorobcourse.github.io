---
layout: default
title: Module 3 - HelloRob
parent: Modules
lang-toggle: true
---

# Graph Search
{: .no_toc .has-sub }

Module 3
{: .sub-head }

### Contents
{: .no_toc }

* TOC
{:toc}

---

## Lectures
{: .line}


| Topic | Checkpoints |
| ------| ----------- |
| C++ Structs (C++ only) [[Lecture Video](https://www.youtube.com/watch?v=4Hfr6zcVHFo){:target="_blank"}, [Slides](https://drive.google.com/file/d/1e5n7GW69icHEU6NihUd4I7p7vlNpd9zk/view?usp=sharing){:target="_blank"}] | |
| Mapping & Local Search [[Lecture Video](https://youtu.be/ACU7_aSSBnc){:target="_blank"}, [Slides](https://drive.google.com/file/d/1vSYmnAoEkw_4587LzA714smlD2CLblyM/view?usp=sharing){:target="_blank"}] | Make a map on the robot! ([tutorial](/mbot/mapping)) |
| Global Search: Breadth First Search & A-Star Path Planning [[Lecture Video](https://youtu.be/km2vORl0FQ4){:target="_blank"}, [Slides](https://drive.google.com/file/d/186VGjjpD9q911A5l3HfGSFjEiIDStErr/view?usp=sharing){:target="_blank"}] | [Planning in Michigan / DC / Kentucky](#checkpoint-planning-in-michigan--dc--kentucky) |

---

## Guides & Tutorials
{: .line}

The following guides and tutorials will be helpful for completing the checkpoints for this module and Project 3.

1. [Using the Navigation Web App](/tutorials/app): We have provided a web app that will help you test your planning algorithm on some maps without having to run your code on the robot.
2. [Replit](/tutorials/replit): Review how to use Replit, where you will program the checkpoint and test Project 3.
3. [Mapping on the MBot](/mbot/mapping): For this project, you will need to build a map on the robot before we can plan paths in it.
4. [The MBot Bridge API](/mbot/bridge-api): The API includes a function to have the robot follow a path.
5. [MBot Debugging Guide](/mbot/debug-tips): Something not working? Check out these debugging tips first!

---

## Checkpoint: Planning in Michigan / DC / Kentucky
{: .line}

Read these instructions for:
{:style="margin-bottom: 0.5em;"}
<div class="switch" style="margin-bottom: 1em;">
<span id="cpp-label" class="active-lang">C++</span>
<label class="switch">
    <input type="checkbox" id="lang-toggle">
    <span class="slider round"></span>
</label>
<span id="python-label">Python</span>
</div>

The goal of this checkpoint is to find a path using the Breadth First Search algorithm through a map. You will plan in one of these maps, which is customized based on where you are taking the course:

<div markdown=1 style="text-align: center;">
![DC Metro Map](/assets/images/p3/dc_metro_map.jpg){:style="max-width:400px;"}
![Michigan Map](/assets/images/p3/michigan.png){:style="max-width:400px;"}
</div>

The graph data is stored in a text file. It contains a list of nodes in the graph (metro stations or cities), followed by a list of edges between the nodes. The edges are denoted by the names of the two connected nodes, followed by the distance. For cities, this is the number of miles between the nodes, and for metro stations, this is the number of stops between the stations.

{: .hint .fa-ul }
* <span class="fa-li"><i class="fas fa-cogs"></i></span> **Hint:** You can modify the map (for example, add some nodes)!
  To do this, add the name of the station under where it says `NODES`.
  Add the edges connected to the new city under where it says `EDGES`, following this format (one line per edge):
  ```
  [my_new_node] [connected_node] [distance_between_nodes]
  ```
  Don't forget to update the numbers beside the headings `NODES` and `EDGES` to reflect the total number of nodes and edges, respectively.

<div class="cpp-content" markdown=1>
The map data is stored in a struct called `Graph`, defined for you, which looks like this:

```cpp
struct Graph
{
  std::vector<std::string> data;
  std::vector<std::vector<int>> edges;
  std::vector<std::vector<float>> edge_costs;

  // TODO: Add any members you need to the graph.
};
```

The function `createGraph("mi_graph.txt")` populates a struct of type `Graph` with the Michigan map data defined in `mi_graph.txt`. The struct contains a vector of strings `data`, which stores a list of all the cities. We will use the index of the city in this vector to identify the node. You can get the number of nodes in the graph using `data.size()`. You can use the function `nameToIdx("my_city", g.data)` to get the index of a city from its name.

The vectors `edges` and `edge_costs` store the edges connecting the node and the distances of those edges, respectively.
*You should not need to access these directly.*
Use functions `getNeighbors(idx, g)` to get a list of the indices of the neighbors of the node at index `idx`, and `getEdgeCosts(idx, g)` to get a list of the distances to the neighboring cities.

**Storing node data:** First, decide how to store the various node data that you need to access in the BFS algorithm. Add members to the `Graph` struct to store this data. Make sure you store the index of the parent node during the search. The final path will be found by tracing backward through the parents, starting from the goal node, using the function `tracePath(goal_idx, g)` (where `goal_idx` is the index of the goal node).

{: .todo .fa-ul }
* <span class="fa-li"><i class="fas fa-laptop-code"></i></span> Design a way to store node data needed in BFS. Add members to the `Graph` struct to store this data.

**Initializing node data:** You should start by initializing data for each node of the graph before the algorithm starts, so you can access and update it during your algorithm. This is done in the function `initGraph()`.

{: .todo .fa-ul }
* <span class="fa-li"><i class="fas fa-laptop-code"></i></span> Complete function `initGraph()`. It should create space to store data for each node in the graph and initialize any data you might need.

**Accessing node data:** For the function `tracePath()` to work, it should be able to use the function `getParent(idx, g)` to get the index of the parent of the node at `idx`. Complete the `getParent(idx, g)` function to access the parent of a node.

{: .todo .fa-ul }
* <span class="fa-li"><i class="fas fa-laptop-code"></i></span> Complete function `getParent()`. It should return the index of the parent node. If the node has no parent, it should return -1.

**Breadth First Search:** Complete the function `bfs()` to find a path from the start to the goal node. Maintain a visit list containing node indices as a queue data structure. Use the function `getNeighbors(idx, g)` to get the neighbors of the node with index `idx` within graph `g`. When the goal is found, use the following code to get the path as a vector of node indices. This should work as written if you have maintained the parents of the nodes correctly and implemented `getParent()`, assuming `goal_idx` is the index of the goal node.

```cpp
path = tracePath(goal_idx, g);
```

{: .todo .fa-ul }
* <span class="fa-li"><i class="fas fa-laptop-code"></i></span> Complete function `bfs(start, goal, g)`. It should perform Breadth First Search to find a path from node index `start` to `goal` within graph `g`.
</div>

<div class="python-content" markdown=1>
The map data is stored in a class called `Graph`, defined for you.
The function `load_graph("dc_metro.txt")` populates a class of type `Graph` with the DC Metro map data defined in the text file. The class contains a list of strings `nodes`, which stores a list of all the nodes. You can get the number of nodes in the graph using `Graph.num_nodes()`. You can use the function `Graph.get_node_name(node_idx)` to get the name of a node from its index. You can also get the index from the name as a string with `Graph.name_to_idx("my_node")`.

The list `edges` stores the edges connecting the nodes.
Use function `Graph.get_nbrs(idx)` to get a list of the indices of the neighbors of the node at index `idx`.

**Storing node data:** First, decide how to store the various node data that you need to access in the BFS algorithm. You can add members to the `Graph` struct to store this data if you would like. Make sure you store the index of the parent node during the search. You will need trace backwards from the goal to construct the final path at the end of the search.

<!-- {: .todo .fa-ul }
* <span class="fa-li"><i class="fas fa-laptop-code"></i></span> **P3.1.1:** Design a way to store node data needed in BFS. Add members to the `Graph` struct to store this data. -->

**Initializing node data:** You should start by initializing data for each node of the graph before the algorithm starts, so you can access and update it during your algorithm.

<!-- {: .todo .fa-ul }
* <span class="fa-li"><i class="fas fa-laptop-code"></i></span> **P3.1.2:** Initialize any data you might need. -->

<!-- **Accessing node data:** For the function `tracePath()` to work, it should be able to use the function `getParent(idx, g)` to get the index of the parent of the node at `idx`. Complete the `getParent(idx, g)` function to access the parent of a node. -->

<!-- {: .todo .fa-ul }
* <span class="fa-li"><i class="fas fa-laptop-code"></i></span> **P3.1.3:** Complete function `getParent()`. It should return the index of the parent node. If the node has no parent, it should return -1. -->

**Breadth First Search:** Complete the function `bfs()` to find a path from the start to the goal node. Maintain a visit list containing node indices as a queue data structure. Use the function `Graph.get_nbrs(idx)` to get the neighbors of the node with index `idx`.
</div>
