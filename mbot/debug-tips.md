---
layout: default
title: Debugging Tips - HelloRob
parent: MBot
---

# Debugging Tips
{: .no_toc .has-sub }

MBot Guide
{: .sub-head }

This guide contains various tips for debugging common problems with the robot.

### Contents
{: .no_toc }

* TOC
{:toc}

---

## Common Problems
{: .line}

### One of the wheels is moving too slow

After you [calibrate your robot](/mbot/#calibrating-your-mbot), one problem could be that one or more wheels is driving *too slow*, causing your robot to drive crooked in one or more directions. If this happens, you might have a problem with how the wheels and motor casing are mounted, or a bad motor.

If you are seeing this behavior, [**check your motors**](#checking-motors), paying special attention to make sure everything is assembled correctly and screwed in tightly. Then try [calibrating your robot](/mbot/#calibrating-your-mbot) again. If you are still having problems, you may need to replace the problem motor. You should also [check your encoders](#checking-encoders) if the problem persists.

### One of the wheels is moving too fast

After you [calibrate your robot](/mbot/#calibrating-your-mbot), one problem could be that one or more wheels is driving *too fast*, causing your robot to drive crooked in one or more directions. For example, this video shows a robot being controlled via the web app where the back wheel is turning very fast, causing it to drive crooked when being driven left or right:

<iframe style="max-width: 100%;" class="centered" width="560" height="315" src="https://www.youtube.com/embed/4Az8Z5rkhyI?si=2e96PQCm0_3HrGIN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br/>

The most common cause of this is a *bad encoder reading*. During calibration, the wheel with the bad encoder spins, but the encoder doesn't register the movement. The calibration script then determines that it should spin the motor *really fast* to make it move, since it can't sense the movement. If you are seeing this behavior, [**check your encoders**](#checking-encoders), then try [calibrating your robot](/mbot/#calibrating-your-mbot) again.

### The robot won't drive

If you are trying to drive your robot and *no wheels are turning*, you might have a problem with the Robot Control Board. Check the USB connection from the board to the Raspberry Pi (try a different cable!), then try to [recalibrate the robot](/mbot/#calibrating-your-mbot). If you have verified that the cable is working **and** you either can't flash the calibration program on the board **or** the calibration program does not cause the wheels to spin, replace the Robot Control Board.

If you replace the Robot Control Board, you will have [recalibrate and reflash the new board](/mbot/#calibrating-your-mbot).

### Mapping isn't working

If you are toggling localization on and then it is immediately toggling off again, something is going wrong with SLAM. Check the following, in this order:
1. **Is your Lidar plugged in?** SLAM needs the Lidar scan to work!
2. **Can you drive your robot?** If not, it is likely that odometry is not working either, and SLAM needs odometry to work. See ["The robot won't drive"](#the-robot-wont-drive) to fix it.

Lidar spinning and Robot Control Board working but SLAM still isn't working? Try these steps:
3. **Restart your robot.** If any program got into a funny state or crashed, a reboot will fix it. If the problem persists, follow the next steps.
4. [**Check the logs and services**](#checking-service-status). These instructions also tell you how to get a log to send to course staff for help if your problems persist.
5. [**Check LCM channels**](#viewing-lcm-channels). If you can't find the issue in the services, you might check that all the correct data is being published. Do you see the Lidar scan and odometry data coming in?

---
## Hardware Issues
{: .line}

### Checking Motors

If for some reason your MBot is not moving correctly, ensure that you have properly carried out the [calibration steps](/mbot/#calibrating-your-mbot){:target="_blank"} in the MBot Calibration Guide. During the calibration process the MBot should spin on the spot, first counter-clock wise and then clockwise as show in this [video](https://youtu.be/Fl2M0zanTJc){:target="_blank"}. If you notice any other behavior follow these steps in order to determine the cause of the problem.

**NOTE**: Disconnect the Lidar USB cable from the Raspberry Pi before continuing.

1. **Verify Motor Mounts**: At times the motors might come loose from the mounts, for example like this:
    ![Loose motor](/assets/images/debug/loosemotor.gif){:style="width:200px;" .centered  .rd-corners}

    If this is the case, take the wheels off from the motor and tighten the screws that secure the motor in the mount.

    ![Motor screws](/assets/images/debug/motorscrews.jpg){:style="width:200px;" .centered  .rd-corners}

2. **Verify Wheel Hub Placement**: Ensure that there is a gap between the wheel hub and screws of the motor mount. Having no gap will cause the hub to rub against the screws hindering the motors from turning properly. If this is the case, you will have to loosen the screws on the hubs and pull out the wheels a little bit to create a gap.
    ![Wheel spacing](/assets/images/debug/wheelspacing.png){:style="width:600px;" .centered  .rd-corners}

3. **Verify Motor Harness Housing**: Sometimes the wires of the motor harness might come loose from the black housing. This will cause an open circuit in the motor harness causing the motors to behave improperly. If this is the case, disconnect the harness from the encoders and push in the loose wires back into the housing. Check all 3 motors harnesses before moving on.
    ![Loose wire harness](/assets/images/debug/loosewireharness.png){:style="width:600px;" .centered  .rd-corners}


4. **Tighten the Omniwheel Screws**: Ensure that the 4 screws holding the pair of omniwheels are secured properly. Do this for all 3 wheels.
    ![Loose wheel screws](/assets/images/debug/wheelscrews.jpg){:style="width:200px;" .centered  .rd-corners}

5. **Run Motor Test Program**: Download the `mbot_motor_test.uf2` file from [here](https://drive.google.com/drive/folders/1sVPw5HKwVrWMN5sYUofBw1tnrrkemnmz?usp=drive_link){:target="_blank"}. Flash this to the pico and place your MBot upside down. Instructions on how to flash the Pico can be found [here](/mbot/#calibrating-your-mbot). This program will test the functionality of 3 motors, one at a time by spining them back and forth like this:

    ![Motor test](/assets/images/debug/mbotmotortest.gif){:style="width:600px;" .centered  .rd-corners}

    If any of the motors fail to spin, you most likely have a faulty motor. Replace this motor and repeat the Motor Test Program step.


### Checking Encoders
If all the motors are working correctly and the MBot still does not move correctly, you might have a faulty encoder. Follow these steps in order to find out which encoder on your MBot is not working correctly.

1. **Verify Encoder & Magnet Placement**: Sometimes the Encoder on the back of the motors might bend causing the friction between the PCB and magnet. Ensure the ecoder is flat and that there is a small gap between the magnet and the PCB. You may have to use the pliers to pull out the magnets away from the PCB.

    ![Bent encoder](/assets/images/debug/bentencoder.png){:style="width:600px;" .centered  .rd-corners}

2. **Flashing Encoder Test Program**: Download the `mbot_encoder_test.uf2` file from [here](https://drive.google.com/drive/folders/1sVPw5HKwVrWMN5sYUofBw1tnrrkemnmz?usp=drive_link){:target="_blank"}. Flash this to the pico and place your MBot upside down. Instructions on how to flash the Pico can be found [here](/mbot/#calibrating-your-mbot).

3. **Open a Terminal in NoMachine**: Once you have logged into your MBot using NoMachine, open up a terminal. This is where we will test all the encoders.

4. **Start minicom**: In the terminal type `minicom -D /dev/mbot_tty` and press enter. This will bring up the following screen:

    ![Minicom](/assets/images/debug/minicomencoder.png){:style="width:600px;" .centered  .rd-corners}

5. **Reading Encoder Values**: You will notice there are 6 numbers on the screens. The first 3 numbers represent the delta values of each of the encoders i.e. the instantaneous change in the encoders values. While the last 3 numbers represent the total ticks for each of the encoders.

    ![Minicom encoder values](/assets/images/debug/minicomencodervalues.png){:style="width:600px;" .centered  .rd-corners}

6. **Testing the Delta values of the Encoders**: One by one, rotate each wheel manually and carefully observe the changing values in the terminal. As you rotate a wheel, you will notice that the delta value will change and then drop back to zero. If you rotate the wheel in the opposite direction, you will notice that the delta values increases in opposite (negative or positive) value before dropping to zero.

7. **Testing the total ticks of the Encoders**: Rotate the wheel again and notice the total ticks value. This value increase and accumulates as you continue to rotate, unlike the delta values. Now rotate the wheel in the opposite direction and you should see the value drecease (or increase) back to zero.

[You can watch this video](https://photos.app.goo.gl/475CXuh7fRVHMS9d8){:target="_blank"} which shows the behavior of steps 5 & 6. If you do not see this on your MBot, then you have a faulty encoder and you will have to replace the both the motor and the encoder.


---

## Viewing LCM Channels
{: .line}

If some function of the robot isn't working, it's often helpful to look at the *LCM channels* on the Raspberry Pi. If certain channels are missing, that provides a clue about which program might not be working.

To look at the channels, we can use a program provided by LCM called LCM Spy. We require a GUI to use the tool, so we must be connected to the Raspberry Pi using NoMachine or a monitor.

Open a terminal on the Raspberry Pi from NoMachine and type:
```bash
lcm-spy
```

You should see a window that looks like this:

![LCM Spy window](/assets/images/debug/lcm-spy.png){:style="width:600px;" .centered  .rd-corners}

You can also double click on a channel to see the data that's being published.

![LCM Spy data](/assets/images/debug/lcm-spy-details.png){:style="width:600px;" .centered  .rd-corners}

<ul class="hint">
    <li class="icon solid fa-cogs"><strong>Hint:</strong> If you don't see the types defined beside each of the channels in LCM Spy, your <code>CLASSPATH</code> variable might not be sent correctly. See the instructions in <a href="https://github.com/MBot-Project-Development/mbot_lcm_base" target="_blank">LCM base</a> repo for how to set it to find the messages.</li>
</ul>

---

## Checking Service Status
{: .line}

Background processes are run on the robot on startup using Linux *services*. If something is not working or not responding on the robot, you check whether the corresponding services are running. You can also check the service logs for any errors or messages of interest. To check the status of a service, do:
```bash
sudo systemctl status [SERVICE-NAME].service
```
where all of `[SERVICE-NAME]` is replaced with the name of the service. All relevant services should be `active`. The might have some information printed out. Make note of any warning or error messages.

You can look at the logs of a service with:
```bash
sudo journalctl -b -u [SERVICE-NAME].service
```
This will show you all the log messages for the service for the current boot (otherwise, it will show you logs from however many sessions it is storing).

<ul class="hint">
    <li class="icon solid fa-cogs"><strong>Hint:</strong> When seeking debugging help, run this command:
    <pre class="language-bash"><code>sudo journalctl -b > ~/Desktop/out.txt</code></pre>
    Then download file <code>~/Desktop/out.txt</code> onto your computer and send it to staff along with a description of your problem. This will contain all the system logs for your bot.</li>
</ul>

### Networking Services

The following services run *once* on startup, to set the networking. They should have exited successfully after running:
*  `mbot-start-network.service`
*  `mbot-publish-info.service`

These services also have additional logs generated which are stored in the directory `/var/log/mbot/`. If you have a problem with the IP publishing script or networking, also look at these logs.

### MBot Services

The following services run the code that the robot needs. The service of interest depends on your problem.

* `mbot-lcm-serial.service`: This runs the server that communicates between the RPi and the Pico. Check this service if the wheels aren't responding to drive commands or if you can't read the odometry.
* `mbot-rplidar-driver.service`: This controls the Lidar driver. Check this service if SLAM isn't working or if you can't read Lidar data.
* `mbot-bridge.service`: This runs the MBot Bridge server needed to use the [MBot Bridge API](/mbot/bridge-api). Check this service if you are getting errors about websocket connections when using the API.
* `mbot-slam.service`: This runs SLAM. Check this service if SLAM is not responding.
* `mbot-motion-controller.service`: This generates motion commands to follow paths. Check this if you are publishing a path but the robot is not following it correctly.
