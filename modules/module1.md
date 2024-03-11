---
layout: default
title: Module 1 - HelloRob
parent: Modules
lang-toggle: true
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

For these lectures, some checkpoints are run on the robot, and others are C++ checkpoints that can be run on your computer.
Watch the corresponding lecture before completing the checkpoint.

| Topic | Checkpoints |
| ------| ----------- |
| Feedback Control [[Lecture Video](https://youtu.be/yFcaiv0wIvU){:target="_blank"}, [Slides](https://drive.google.com/file/d/1mT4xoq5fWkaoWRUSRflYfRnUQ7a2Y_Tu/view?usp=drive_link){:target="_blank"}] | [Follow Me (1D)](#follow-me-1d) (on the robot) |
| Omnidrive Geometry [[Lecture Video](https://youtu.be/c04v1iEPJto){:target="_blank"}, [Slides](https://drive.google.com/file/d/1urDDViXqMxtSHxQDybJ_uTMAksDW9Agf/view?usp=drive_link){:target="_blank"}] | [Polar Ray Conversion](#polar-ray-conversion) (C++) <br/> [Drive Star](#drive-star) (on the robot) |
| Wall Following [[Lecture Video](https://youtu.be/6k1EWADWj_g){:target="_blank"}, [Slides](https://drive.google.com/file/d/1jMyjGNgmjF4-OH_yAPWLPCkvXuov9Cnt/view?usp=drive_link){:target="_blank"}] | [Find Minimum Value](#finding-the-minimum-value) (C++) <br/> [Follow Me (2D)](#follow-me-2d) (on the robot) |

---

## Guides & Tutorials
{: .line}

The following guides and tutorials will be helpful for completing the checkpoints for this module and Project 1.

1. [Robot Quick Start](/mbot/quick-start): Getting up and running using your robot.
    If this is the first time you are using your robot and it has not been set up, take a look at the setup guides in the [MBot Overview](/mbot/).
2. [Installing VSCode](/tutorials/setup): Setting up VSCode on your computer.
3. [GitHub](/tutorials/git): We will use GitHub to store all of the code for this course.
4. [Programming the Robot](/mbot/programming): You can program your robot from your computer using VSCode.
5. [The MBot Bridge API](/mbot/bridge-api): You will use these functions to read data from your robot and control it.

---

## Checkpoints: On the Robot
{: .line}

For this module, there are three checkpoints that you will complete on the robot:
1. [Follow Me! (1D)](#follow-me-1d): You will develop a feedback controller to make the robot maintain a fixed setpoint directly in front of it.
2. [Drive Star](#drive-star): You will write code to make the robot drive in a star-shaped pattern.
3. [Follow Me! (2D)](#follow-me-2d): You will develop a feedback controller to make the robot follow you in any direction.

Template code for all these checkpoints is in the same repository. Each checkpoint assumes that you have completed the [appropriate lecture](#lectures).

Read these instructions for:
{:style="margin-bottom: 0.5em;"}
<div class="switch">
<span id="cpp-label" class="active-lang">C++</span>
<label class="switch">
    <input type="checkbox" id="lang-toggle">
    <span class="slider round"></span>
</label>
<span id="python-label">Python</span>
</div>

---

### Prerequisites

Grab a robot with a fully charged battery.
Before you begin, you will need to have followed these guides on your laptop:
* Make sure your robot is setup by following the [Quick Start Guide](/mbot/quick-start)
* Install VSCode ([tutorial](/tutorials/setup.html))
* Connect to the MBot with VSCode remote ([tutorial](/mbot/programming))

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

#### Code Overview

We will use the [MBot Bridge API](/mbot/bridge-api) to control the robot. Review the documentation for instructions on how to use the provided functions.

<div class="cpp-content" markdown=1>
#### Compiling the Code
{: .no_toc }

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
{: .no_toc }

When you run `make` successfully, it will generate three executables: `follow_1D` is the 1D Follow Me code from the file `src/follow_1D.cpp`, `drive_star` is the Drive Star checkpoint code from the file `drive_star.cpp`, and `follow_2D` is the 2D Follow Me code from the file `src/follow_2D.cpp`.

Run them from the command line, in the `build/` folder, to test your code for the 1D or 2D follow me, or drive star (only run one of these):
```bash
./follow_1D
./drive_star
./follow_2D
```
</div>

<div class="python-content" markdown=1>
The template code contains two files:
* `follow_1D.py` for [Part 1 (1D)](#follow-me-1d) of this checkpoint,
* `follow_2D.py` for [Part 2 (2D)](#follow-me-2d) of this checkpoint.
</div>

---

### Follow Me! (1D)
{: .line}

In this checkpoint, you will program the robot using a feedback controller. This checkpoint will build foundational code that will help you complete [Project 1: Wall Following](/projects/p1).

We will write a program to make the robot maintain a fixed distance from the object in front of it. Edit the file `src/follow_1D.cpp`{: .cpp-content} `follow_1D.py`{: .python-content} to implement a Bang-Bang controller. When you're done, your code should look something like this:

<iframe style="max-width: 100%;" class="centered" width="560" height="315" src="https://www.youtube.com/embed/Y2b7c88kBR8?si=dsbJL7shes1BAtYB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br/>

You will use the [MBot Bridge API](/mbot/bridge-api) to program the robot. Review the functions available before getting started.

<ul class="todo">
    <li class="icon solid fa-laptop-code">
        Edit the file
        <span class="cpp-content"><code>src/follow_1D.cpp</code></span>
        <span class="python-content"><code>follow_1D.py</code></span>
        to implement a Bang-Bang controller.
        Commit and push your changes to GitHub.
    </li>
</ul>

<ul class="hint">
    <li class="icon solid fa-cogs"><strong>Hint:</strong> Use the <code>robot.drive(vx, vy, wz)</code> function to move the robot.</li>
    <li class="icon solid fa-cogs"><strong>Hint:</strong> You may want to try a P-controller instead! How do the two compare?</li>
</ul>

---

### Drive Star
{: .line}

In this checkpoint, we will practice driving the robot using the concepts of Omnidrive Geometry by driving in a star shape.

*Note: You might want to start by completing the [Ray Conversion C++ Checkpoint](#polar-ray-conversion) first.*

<ul class="todo">
    <li class="icon solid fa-laptop-code">
        Edit the code in the file <code>src/drive_star.cpp</code> so that the robot drives in a star pattern.
    </li>
</ul>

<ul class="hint">
    <li class="icon solid fa-cogs"><strong>Hint:</strong> First, you should work out what the correct commands should be for the robot to trace out a star shape (try drawing it out!). You might find it easiest to write down the distances and directions to trace out a star in polar coordinates. Remember that the robot drives using Cartesian coordinates, so make sure to convert your polar coordinate commands!</li>
    <li class="icon solid fa-cogs"><strong>Hint:</strong> You can use the <code>drive()</code> function together with the <span class="cpp-content"><code>sleepFor()</code></span><span class="python-content"><code>time.sleep()</code></span> function to make the robot drive in one direction for a certain amount of time. To drive in a star, you might drive along one line for one second, drive along the second line for one second, etc.</li>
    <li class="icon solid fa-cogs">Can you trace out more shapes with the robot?</li>
</ul>

---

### Follow Me! (2D)
{: .line}

For this part of the activity, you will be editing `src/follow_2D.cpp`{: .cpp-content} `follow_2D.py`{: .python-content}.
First, you will need to write the function `findMinDist()`{: .cpp-content} `find_min_dist()`{: .python-content}.
<span class="cpp-content">This function should take in a vector of Lidar range values, and return the *index* of the shortest ray in the scan.</span>
<span class="python-content">This function should take in a vector of Lidar range values and angles, and return the length and angle of the shortest ray in the scan.</span>
Invalid rays will have zero range. You should ignore any zeros when finding the shortest range.

*Note: You might want to start by completing the [Find Minimum Value C++ Checkpoint](#finding-the-minimum-value) first.*

When you have completed the checkpoint, your robot should be able to follow you, like this:

<iframe style="max-width: 100%;" class="centered" width="560" height="315" src="https://www.youtube.com/embed/Dg6IREtXIS0?si=4PyFbt7oCZn5iOkq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br/>

<ul class="todo">
    <li class="icon solid fa-laptop-code">
    <span class="cpp-content">
        Edit the function <code>findMinDist()</code> in the file <code>src/follow_2D.cpp</code> to return the index of the shortest ray.
    </span>
    <span class="python-content">
        Edit the function <code>find_min_dist()</code> in the file <code>follow_2D.py</code> to return the length and angle of the shortest ray.
    </span>
    </li>
</ul>

<ul class="hint">
    <li class="icon solid fa-cogs"><strong>Hint:</strong> Remember to ignore rays with zero range when finding the minimum range value. Rays with zero range are invalid. If you forget to check for invalid rays, the minimum range will always be zero.</li>
</ul>

Next, edit `src/follow_2D.cpp`{: .cpp-content} `follow_2D.py`{: .python-content} to maintain a setpoint distance to the nearest wall in any direction. You will use the function `findMinDist()`{: .cpp-content} `find_min_dist()`{: .python-content} to get the distance and angle to the nearest object. This is done for you in the code:
```cpp
// Get the distance to the wall.
float min_idx = findMinDist(ranges);
float dist_to_wall = ranges[min_idx];
float angle_to_wall = thetas[min_idx];
```
{: .cpp-content}

```python
# Get the distance and angle to the wall.
dist_to_wall, angle_to_wall = find_min_dist(ranges, thetas)
```
{: .python-content}

The variable `dist_to_wall` will then contain the *distance* to the nearest wall, and `angle_to_wall` will contain the *angle* to the wall. Your drive commands will now be in the direction of the nearest wall instead of just forward.

<ul class="todo">
    <li class="icon solid fa-laptop-code">
        Edit the main function in file
        <span class="cpp-content"><code>src/follow_2D.cpp</code></span>
        <span class="python-content"><code>follow_2D.py</code></span>
        to implement a Bang-Bang controller again, but this time maintaining the distance to the nearest wall.
    </li>
</ul>

---

## Checkpoints: C++
{: .line}

The following are C++ checkpoints related to the lectures for Module 1. These can be run on your computer (not the robot). Review instructions in [Module 0](/modules/m0) for instructions on writing C++ code.
Use the autograder tests provided in GitHub Classroom to make sure that your code is correct ([tutorial](/tutorials/github-classroom#autograder)).

You can compile the C++ file you are editing on the command line (make sure that you are in a terminal in the same directory that the file `my_code.cpp` is in!):
```bash
g++ my_code.cpp -o my_code
```
replacing `my_code.cpp` with the name of your file (for example, `ray_conv.cpp` for the [Polar Ray Conversion checkpoint](#polar-ray-conversion)). Then, run the executable you just created from the same folder:
```bash
./my_code
```
You can pick any name that you want to replace `my_code`.

### Polar Ray Conversion

In this checkpoint, you will convert polar coordinates to Cartesian coordinates. You will do this operation often to drive the Omnidrive robot!

<ul class="todo">
    <li class="icon solid fa-laptop-code">
        Edit the file <code>ray_conv.cpp</code> so that it asks the user for two float values (a distance in meters and an angle in radians), then converts them into <code>x</code> and <code>y</code> Cartesian values. Print out the <code>x</code> and <code>y</code> coordinates.
    </li>
</ul>

### Finding the Minimum Value

In this checkpoint, you will write code to find the smallest value in a vector. You will have to write a similar function in the [2D Follow Me checkpoint](#follow-me-2d) and in [Project 1](/projects/p1). You may want to review the lecture on C++ vectors in [Module 0](/modules/m0) before you begin.

<ul class="todo">
    <li class="icon solid fa-laptop-code">
        Edit the file <code>find_min.cpp</code> so that it finds the index of the minimum value in a vector. Print out the index of the value and the minimum value at that index.
    </li>
</ul>

<ul class="hint">
    <li class="icon solid fa-cogs"><strong>Hint:</strong> When you are testing, you can define the values of the vector <code>rays</code> to be whatever you would like. Before you push the code, uncomment the line <code>gather_user_input(rays);</code> which will allow the user to input a vector. The autograder uses this to input different vectors for testing.</li>
</ul>
