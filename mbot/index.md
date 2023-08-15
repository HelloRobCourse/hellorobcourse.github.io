---
layout: default
title: MBot Guides - HelloRob
parent: MBot
---

# MBot Overview
{: .no_toc .has-sub }

MBot Guide
{: .sub-head }

### Contents
{: .no_toc }

* TOC
{:toc}

### MBot Guides

For more details about the MBot, see the other guides available on this site:

- [Quick Start](/mbot/quick-start): Get up and running with the MBot on Day 1.
- [Programming your Robot](/mbot/programming): Learn how to connect to your robot in VSCode to program it.
- [The MBot Bridge API](/mbot/bridge-api): Control your robot in C++ or Python.
- [Mapping & Localization](/mbot/mapping): Map your robot's environment using the web app.
- [MBot Omni Debugging Tips](/mbot/debug-tips): Something not working right? Try these steps to fix it!

The default robot username and password are:

&emsp;&emsp;**Username:** `mbot` <br/>
&emsp;&emsp;**Password:** `i<3robots!`

Check with course staff to confirm the login information for your robot.

---

## Robot Care

### Turning the robot on

To turn the robot on, flick the switch on the power bank to ON. The red light on the Raspberry Pi should turn on.

### Turning the robot off

To turn the robot off, first type `sudo shutdown now` in the terminal of the robot. This will shut down the Raspberry Pi. Once the lidar stops spinning, flick the switch on the power bank to OFF.

### Robot network

Each robot should be marked with a unique, three-digit ID, plus a prefix (001, 002, etc.). When turned on, the robot will connect to the MWireless WiFi network. Please note that this will only work on campus.

### Robot battery care

- **Charging the batteries:** Plug the battery into the power supply and switch the battery to ON for charging. The power adapter will have a red light while charging, and it will turn green when done. Switch the battery to OFF for storage.
- Batteries are shared across all robots. There are bins labeled "CHARGED BATTERIES" and "UNCHARGED BATTERIES." Batteries should be placed in the appropriate bin.
- Always plug in uncharged batteries right away as they take a long time to charge.
- When a battery has three out of five green lights on, it should be replaced.
- **Tip:** When you aren't using the Lidar, unplug the Micro USB cord from its board to disconnect it from the Raspberry Pi. When it spins, it draws a lot of power and drains the battery quickly.

---

## Configuring your MBot

