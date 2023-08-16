---
layout: default
title: Module 1 - HelloRob
parent: Modules
---

# Feedback Control
{: .no_toc .has-sub }

Module 1
{: .sub-head }

### Contents
{: .no_toc }

* TOC
{:toc}

---

## Lectures
{: .line}

Coming Soon!

---

## Checkpoints
{: .line}

Coming Soon!

---

### Checkpoint: Follow Me!
{: .line}

In this checkpoint, you will program the robot using a feedback controller. This checkpoint will build foundational code that will help you complete [Project 1: Wall Following](/projects/p1).

#### Prerequisites

Grab a robot with a fully charged battery.
Before you begin, you will need to have followed these guides on your laptop:
* Make sure your robot is setup by following the [Quick Start Guide](/mbot/quick-start)
* Install VSCode ([tutorial](/tutorials/setup.html))
* Connect to the MBot with VSCode remote ([tutorial](/mbot/programming))

---

#### Getting the Code

See the course website for the course at your home institution for links to the template and submission instructions for this checkpoint.

Once you have accepted the assignment, clone the repository you created on the robot. In a VSCode remote session connected to the robot ([tutorial](/mbot/programming)), open a new terminal. Then, type:
```bash
git clone <ADDRESS>
```
Substitute **&lt;ADDRESS&gt;** with the address for your repo, found on GitHub. You can get the address from your repo page on GitHub:

<span class="image centered"><img src="/assets/images/dtc/get-git-address.png" alt="" style="max-width:600px;"/></span>

Open the folder of the repository you just cloned in VSCode by cliking &quot;File&quot; &gt; &quot;Open Folder...&quot; then typing in the name of the repo you cloned:

<span class="image centered"><img src="/assets/images/dtc/open-project-folder.png" alt="" style="max-width:500px;"/></span>

---

#### Compiling the Code

We'll use a tool called **CMake** to compile the code. CMake finds all the code and external libraries we need and generates instructions to build the executable. To build the code, in a terminal, type:

```bash
cd ~/[my-code-dir]/build
cmake ..
make
```

Remember that the code should be cloned and compiled on the Raspberry Pi. This will fail on your computer!
You should replace `[my-code-dir]` with the name of your Follow Me directoy.

*You only need to run `cmake ..` once.* When you start writing code, you can compile it by typing `make` in the `build/` folder. (Calling CMake multiple times won't hurt, though!)

#### Running the Code

When you run `make` successfully, it will generate two executables: `follow_1D` is the 1D Follow Me code from the file `src/follow_1D.cpp`, and `follow_2D` is the 2D Follow Me code from the file `src/follow_2D.cpp`.

Run them from the command line, in the `build/` folder, to test your code for the 1D or 2D follow me:
```bash
./follow_1D
./follow_2D
```

---

#### 1D Follow Me

We will write a program to make the robot maintain a fixed distance from the object in front of it. Edit the file `src/follow_1D.cpp` to implement a Bang-Bang controller.

You will use the [MBot Bridge API](/mbot/bridge-api) to program the robot. Review the functions available before getting started.

<ul class="todo">
    <li class="icon solid fa-laptop-code">
        Edit the file <code>src/follow_1D.cpp</code> to implement a Bang-Bang controller.
        Commit and push your changes to GitHub.
    </li>
</ul>

<ul class="hint">
    <li class="icon solid fa-cogs"><strong>Hint:</strong> Use the <code>drive(vx, vy, wz)</code> function to move the robot.</li>
</ul>

#### 2D Follow Me

For this part of the activity, you will be editing `src/follow_2D.cpp`.
First, you will need to write the function `findMinDist()`. This function should take in a vector of Lidar range values, and return the *index* of the shortest ray in the scan. Invalid rays will have zero range. You should ignore any zeros when finding the shortest range.

<ul class="todo">
    <li class="icon solid fa-laptop-code">
        Edit the function <code>findMinDist()</code> in the file <code>src/follow_2D.cpp</code> to return the index of the shortest ray.
    </li>
</ul>

<ul class="hint">
    <li class="icon solid fa-cogs"><strong>Hint:</strong> Remember to ignore rays with zero range when finding the minimum range value. Rays with zero range are invalid. If you forget to check for invalid rays, the minimum range will always be zero.</li>
</ul>

Next, edit `src/follow_2D.cpp` to maintain a setpoint distance to the nearest wall in any direction. You will use the function `findMinDist()` to get the distance and angle to the nearest object. This is done for you in the code:
```cpp
// Get the distance to the wall.
float min_idx = findMinDist(ranges);
float dist_to_wall = ranges[min_idx];
float angle_to_wall = thetas[min_idx];
```
The variable `dist_to_wall` will then contain the *distance* to the nearest wall, and `angle_to_wall` will contain the *angle* to the wall. Your drive commands will now be in the direction of the nearest wall instead of just forward.

<ul class="todo">
    <li class="icon solid fa-laptop-code">
        Edit the main function in file <code>src/follow_2D.cpp</code> to implement a Bang-Bang controller again, but this time maintaining the distance to the nearest wall.
    </li>
</ul>
