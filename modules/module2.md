---
layout: default
title: Module 2 - HelloRob
parent: Modules
---

# Autonomous Navigation
{: .no_toc .has-sub }

Module 2
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
| State Machines & Bug Navigation [[Lecture Video](https://youtu.be/4wwOCFol9mQ){:target="_blank"}, [Slides](https://drive.google.com/file/d/1Dd67LYB47rOk8Soq7XubMR9GuhKUgfeM/view?usp=sharing){:target="_blank"}] | [Super Mario State Machine](#checkpoint-super-mario-state-machine) |
| Coordinate Frames [[Lecture Video](https://youtu.be/mgDlW3UxXts){:target="_blank"}, [Slides](https://drive.google.com/file/d/1W0i6nqkzXUWdTYAS6NN1-8ODAtk1-gMf/view?usp=drive_link){:target="_blank"}] | [P2.1: Robot Hits the Spot](/projects/p2#robot_hits_the_spot) |
| Odometry [[Lecture Video](https://youtu.be/NTM9kBL93Dw){:target="_blank"}, [Slides](https://drive.google.com/file/d/1z86z5lVRztW3tdrix1rrrX6iIBferN2H/view?usp=share_link){:target="_blank"}] |  |

---

## Guides & Tutorials
{: .line}

The following guides and tutorials will be helpful for completing the checkpoints for this module and Project 2.

1. [Robot Quick Start](/mbot/quick-start): Getting up and running using your robot.
2. [GitHub](/tutorials/git): We will use GitHub to store all of the code for this course.
3. [Programming the Robot](/mbot/programming): You can program your robot from your computer using VSCode.
4. [The MBot Bridge API](/mbot/bridge-api): You will use these functions to read data from your robot and control it.
5. [MBot Debugging Guide](/mbot/debug-tips): Something not working? Check out these debugging tips first!

---

## Checkpoint: Super Mario State Machine
{: .line}

In this checkpoint, we will write a Finite State Machine to transition Mario between states based on events in the game environment.
Mario has three states:
* Small Mario (represented as the `.` character or `0`)
* Regular Mario (represented as the `m` charater or `1`)
* Big Mario (represented as the `M` charater or `2`)
* Dead Mario (represented as the `x` charater or `-1`)

Mario starts off Regular Mario (`m`), and encounters events. Events are represented as `char` variables, and the whole game sequence is stored as a vector of events. Mario can encounter the following events:
* No event (an underscore, `_`): State states the same.
* A turtle (a minus sign, `-`): This makes Mario decrease to the next smallest size. If he is already Small Mario, this will terminate the game.
* A mushroom (a plus sign, `+`): This will make Mario increase to the next biggest size. If he is already Big Mario, he will stay the same size.

This is a Finite State Machine that can be visualized as follows:

![Super Mario FSM](/assets/images/m2/super_mario_fsm.jpg){:style="width:800px;" .centered .rd-corners}

### Compiling and Testing the Code

The template code for this checkpoint will animate the sequence of the Mario character with some random events by default. You can visually inspect the sequence and make sure that it follows the rules above.
Once you feel confident, push your code to GitHub and use the autograder tests provided in GitHub Classroom to make sure that your code is correct ([tutorial](/tutorials/github-classroom#autograder)).

You can compile the C++ file you are editing on the command line (make sure that you are in a terminal in the same directory that the file `super_mario.cpp` is in!):
```bash
g++ super_mario.cpp -o super_mario
```
Then, run the executable you just created from the same folder:
```bash
./super_mario
```
By default, this will create a random sequence of 50 events.

**To run the tests that the autograder will run**, add the path to one of the files in `test/` after the command. For example,
```bash
./super_mario test/no_events.txt
```
will run a sequence of 40 events with only the "No Event" character, `_`. Mario should stay the same size (`m`, or state `1`), and the sequence should run to the end, printing out the following at the end:
```
Final Mario state: m  Run length: 40
```

<ul class="todo">
    <li class="icon solid fa-laptop-code">
        Edit the file <code>super_mario.cpp</code> to implement a finite state machine describing the state transtitions above. The state should be correctly updated and stored in the variable <code>marioState</code>.
    </li>
</ul>

<ul class="hint">
    <li class="icon solid fa-cogs"><strong>Hint:</strong> Do not change the print statements at the end. This will ensure the tests run correctly.</li>
</ul>
