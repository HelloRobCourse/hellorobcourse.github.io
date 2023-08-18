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
{: .line }

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

## Flashing the SD Card
{: .line }

To configure a new robot, you must first flash a new SD card with the robot's image. You will need:
1. A way to read and write to a Micro SD card (you can use a laptop with an SD card slot or a USB adapter),
2. The latest version of the [HelloRob RPi OS Image](https://drive.google.com/drive/folders/1NCLzH3KEpuqEV0LdHzwZG5OHd8vmD7jt?usp=drive_link){:target="_blank"} (check with your instructor to make sure they do not have a custom image for you to use).

To flash the image, follow these instructions:

1. **Download the image.** This might take some time because the file is large. Make sure you have about 4GB available.
2. **Download [Balena Etcher](https://etcher.balena.io/){:target="_blank"}.** This is a tool for flashing OS images onto SD cards.
3. **Flash your SD card.** Launch Etcher and insert the SD card into your laptop. Select the correct device from Etcher, and navigate to the image you downloaded. Then press "Flash!". This process can take up to 30 minutes.
    ![Flash the SD card](/assets/images/mbot/flash_sd.png){:style="width:500px;" .centered  .rd-corners}

If the flash is not successful, you should try again. If it continues to fail, you can try another SD card. If you are using an SD card adapter, ensure that the switch on the adapter is not in "Lock" mode, which will make the SD card read-only.

Next, proceed to the [MBot configuration instructions](#configuring-your-mbot).

---

## Configuring your MBot
{: .line }

The MBot configuration, including its name, WiFi connection, and IP registry configuration, is controlled by a file called `mbot_config.txt`, which can be accessed directly from its SD card. This makes it easy to update the robot's information on first boot or if something about your configuration changes, without needing to plug a monitor, keyboard, and mouse into your robot.

If you are configuring a new robot, you must [first flash a new SD card](#flashing-the-sd-card) with the robot's image.

You will need the following information:

1. Your robot's name (your course staff will tell you what your robot should be named to keep the fleet organized),
2. The WiFi connection information for your classroom or home (if applicable),
3. The IP registry information for your course.

Your course staff will provide this information to you. You will also need a way to read and write to a Micro SD card. You can use a laptop with an SD card slot or a USB adapter.

1. **Remove the SD card from your robot and plug it into your computer.** You may need an SD card adapter for this, depending on your laptop.
<ul class="hint">
    <li class="icon solid fa-cogs"><strong>Warning:</strong> If a message pops up telling you that there is a problem with the drive or asking you to "fix" the SD card, <strong>ignore it!!</strong></li>
</ul>

2. **Open the SD card device in your file explorer.** It will likely be called "bootfs".

    ![Open SD Card](/assets/images/mbot/sd_device.png){:style="width:500px;" .centered  .rd-corners}

3. **Open the file `mbot_config.txt`.** You can use any text editor for this.

    ![Open mbot_config.txt](/assets/images/mbot/mbot_config.png){:style="width:500px;" .centered  .rd-corners}

4. **Edit the file contents.** The file will look something like this:

    ![Open mbot_config.txt](/assets/images/mbot/mbot_config_contents.png){:style="width:600px;" .centered  .rd-corners}

    The following information is stored in the file:
    * `mbot_hostname`: The robot's name. This will be the name that it uses to publish to the IP registry and the one that is displayed in the webapp. This name should be unique. You should also label the physical robot with this name to identify it.
    * `mbot_ap_password`: This robot's access point password. If the robot cannot connect to WiFi, it will start an access point with the hostname as the name and this as the password, which you can connect to with your computer's network manager.

    **Wifi Information.** This is only for networks which can be joined with a name and password only. If you are at an institution with a special network configuration, you will have to configure the WiFi separately.
    * `new_wifi_ssid`: The name of the WiFi network you would like your robot to join.
    * `new_wifi_password`: The password for the network.

    **IP Registry Configuration.** Your course staff will tell you which IP registry your robot should use. This is where you will check for your robot's IP to access it when it turns on. It will publish using a GitHub account which must have write access to this registry.
    * `mbot_ip_list_url`: The URL for the IP registry on GitHub, ending with `.git`.
    * `mbot_ip_list_user`: The username of the GitHub account the robot uses to publish its IP.
    * `mbot_ip_list_token`: A token the robot can use to push to the registry (this is in place of using a password, which GitHub no longer supports).

---

## Calibrating your MBot
{: .line }

Each robot needs to be individually calibrated in order to control it. Once it's calibrated, the firmware can be flashed onto the robot. You will need to flash programs onto the Pico to calibrate and load the firmware onto your robot. To do this, you should connect to the robot using a program called NoMachine, that allows you to view the robot's desktop from your laptop.

You will need:
* The calibration script, `mbot_calibrate_omni.uf2`
* The MBot firmware, `mbot.uf2`
* NoMachine (download from [NoMachine website](https://www.nomachine.com/){:target="_blank"})
* Your robot's IP, from your course's MBot IP registry

1. **Get the Pico firmware.** *Note:* The firmware files you need are included on the desktop of the images for the course.
    1. Connect to the MBot in NoMachine. You will need the robot's IP, which you can get from the MBot IP registry from your course.
    2. Download the MBot firmware from [here](https://drive.google.com/drive/folders/1sVPw5HKwVrWMN5sYUofBw1tnrrkemnmz?usp=drive_link){:target="_blank"}. You will need the `mbot_calibrate_omni.uf2` and `mbot.uf2` files. Downloading the tests is optional.
    3. Drag and drop the two files from your laptop to the robot's desktop using NoMachine.

2. **Calibrate the MBot.** We will now flash the calibration script onto the Pico to calibrate it before we flash it.

    The calibration script detects the motor and encoder polarity and then calibrates the motor coefficients. The robot will move around for this step so you will need clear space on the floor (preferably on the same type of surface that you plan to use the robots on).

    *Do not run the calibration script with the MBot on a table!!*

    1. First, unplug the Robotics Control Board by disconnecting the barrel plug from the battery (leave the USB that powers the RPi plugged in). Also unplug the USB that connects the Pico to the Raspberry Pi.
    2. We will now put the Pico in flashing mode. Hold down the white `BOOTSEL` button on the Pico board (it's near the USB port). With the button held down, plug the Pico's USB cord back into the Raspberry Pi. Then release the button. The Pico should now show up as a device in NoMachine (see below).
        <span class="image centered"><img src="/assets/images/dtc/pop-up-plug-in.png" alt="" style="max-width:800px;"/></span>
    3. Plug the barrel plug that powers the Robotics Control Board back into the battery.
    4. Place the MBot on the floor in a spot with at least 2 feet of clear space all around the robot.
    5. Open the Pico device folder in NoMachine. Drag and drop the script `mbot_calibrate_omni.uf2` into the folder. The Pico will reboot automatically, and will then run its calibration routine. *Don't touch the robot while it does this procedure.*

3. **Flash the MBot Firmware onto the Pico.** The calibration script will have saved parameters onto the Pico's memory. We can now flash the firmware that will run on the Pico during operation. We will be repeating the flashing procedure.
    1. Repeat steps 1-3 from the calibration instructions to put the Pico into flashing mode.
    2. Open the Pico device folder in NoMachine. Drag and drop the script `mbot.uf2` into the folder. The Pico will reboot automatically.