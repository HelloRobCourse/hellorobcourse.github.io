---
layout: default
title: Module 4 - HelloRob
parent: Modules
---

# Machine Learning
{: .no_toc .has-sub }

Module 4
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
| Machine Learning & Image Classification (Introduction) [[Lecture Video](https://youtu.be/5d-itzj9VuQ){:target="_blank"}, [Slides](https://drive.google.com/file/d/1E1piimfrlxakmYVVZ_Vumg2CBNy3qmvk/view?usp=share_link){:target="_blank"}] | |
| Intro to Python [[Lecture Video](https://youtu.be/RoEk_ahvRlc){:target="_blank"}, [Slides](https://drive.google.com/file/d/1XCQ6wULS40hukmis03TC-Gxs1a576WKU/view?usp=share_link){:target="_blank"}] | Python Pocket Calculator |
| Nearest Neighbors [[Lecture Video](https://youtu.be/jqY1ouWt2RA){:target="_blank"}, [Slides](https://drive.google.com/file/d/1VgvzoOLH4irS9f9wFgjQkdZFBieFy2kk/view?usp=share_link){:target="_blank"}] | |
| Python Matrices & NumPy [[Slides](https://drive.google.com/file/d/1Hh8oq1oInd9KDQFwF9caMX3M0sxhDChj/view?usp=drive_link){:target="_blank"}] | Image Distance <br/> *Practice:* [Intro to Colab and NumPy](https://colab.research.google.com/drive/1PWwaGG0HsoSmav2YHzMJtJh82cgIeKpF?usp=sharing){:target="_blank"} |
| Optimization & Neural Networks [[Lecture Video](https://youtu.be/vs1uMORf3TU){:target="_blank"}, [Slides](https://drive.google.com/file/d/1DI8RfWsfSRp1cqesB5TarNUJpF0ZP3wn/view?usp=share_link){:target="_blank"}]  | Contribute to the HelloRob Handwriting Dataset! <br/> [[Instructions](#the-hellorob-handwriting-dataset), [HelloRob Dataset Checker Tool](https://hellorob.org/digit-data-tool/){:target="_blank"}, [Submission Form](https://forms.gle/AMmUuPHZSMbdvA6M6){:target="_blank"}] |

---

## The HelloRob Handwriting Dataset
{: .line}

You may notice that the accuracies that we can achieve in [Project 4](/projects/p4) on the MNIST dataset are extremely high. Can we expect these results to transfer to the robot?

To see how well our learned models transfer to data *outside* of the MNIST dataset, we will collect our own dataset of handwriting samples and test on those. These will look a bit different from the MNIST images. Here is a sample of some images from Fall 2022 students:

![HelloRob Digit Dataset](/assets/images/p4/hellorob_digit_data.png){: .centered}

### Instructions for Contributing

1. Create an image of your handwriting sample for each digit from 0 to 9 and save them as individual images. You may use a tool like Paint or a similar drawing tool to create these images on a computer, tablet, or phone. The images must follow these rules:
  * Make the canvas a perfect square,
  * Use black ink on a white background,
  * Make sure the digit is well centered and takes up the full canvas,
  * Save the image as a JPEG file.

2. Use the [HelloRob Dataset Checker Tool](https://hellorob.org/digit-data-tool/){:target="_blank"} to visualize your images in the small form factor they will be converted to and make sure they look good **before submitting your images.**
3. Follow [this link](https://forms.gle/AMmUuPHZSMbdvA6M6){:target="_blank"} to submit your image samples. *Please use your school email when filling out the form!*

Please follow the instructions on the form carefully! If your images are not usable, they will have to be removed from the dataset.
