---
layout: default
permalink: /classes
---

# Classes

## Class 10 - 11/1

## Designing and engineering audio explorations

Further notes coming soon

Additional resources:

* [Kyle Mcdonald's Audio Notebooks](https://github.com/kylemcdonald/AudioNotebooks/blob/master/Generating%20Spectrograms.ipynb)
* [ml4a Audio t-SNE](https://github.com/ml4a/ml4a-guides/blob/master/notebooks/audio-tsne.ipynb)
* [ml4a Shortest Path Between Images](https://github.com/ml4a/ml4a-guides/blob/master/notebooks/image-path.ipynb)
* [Basecs - From Theory To Practice: Representing Graphs](https://medium.com/basecs/from-theory-to-practice-representing-graphs-cfd782c5be38)

## Class 7 - 10/11

## Feature extraction and exploration methodologies

What is feature extraction?

* In a multi layer neural network, the final layer is known as the softmax
* It takes a list of numbers from the network and “squashes” them into probabilities
* The layer before this final layer is known as the logits, or feature vector
* This is the “fingerprint” of the image, and can be used to compare images

KMeans Clustering

* KMeans clustering is an unsupervised machine learning method that allows us to "automatically" find clusters of similar data points. It requires that we know how many clusters we want ahead of time (this is our "K" value). 

* We can determine the optimal "K" value using the [elbow method](https://blog.cambridgespark.com/how-to-determine-the-optimal-number-of-clusters-for-k-means-clustering-14f27070048f) - does not necessarily apply to the work in this class

UMAP

* UMAP is a new dimensionality reduction method that outperforms t-SNE - the previous SOTA for dimensionality reduction and visualization

* Dimensionality reduction is about learning the "latent" features in your data

* A lot of the features are redundant or can be condensed

* For example - mnist has 784 dimension, we shouldn't need this many points to represent simple digits

Additional resources:

* Good in-depth explanations of feature extraction [here](https://observablehq.com/@nsthorat/how-to-build-a-teachable-machine-with-tensorflow-js) and [here](https://github.com/ml4a/ml4a-guides/blob/master/notebooks/image-search.ipynb)
* [How KMeans clustering works](https://www.youtube.com/watch?v=4b5d3muPQmA)
* [A very mathy discussion about UMAP](https://youtu.be/nq6iPZVUxZU)
* [UMAP](https://umap-learn.readthedocs.io/en/latest/)
* [If you're curious about t-SNE](https://distill.pub/2016/misread-tsne/)
* [Rasterfairy](https://github.com/Quasimondo/RasterFairy)

## Class 6 - 10/3

## Multilayer Perceptrons and Gradient Descent

what are we covering today?

Plain vanilla aka multilayer perceptron

We are going to use tensorflow 2.0 - just released!

mnist :
28 x 28 numbers - 784 total numbers

each one holds the grayscale value of that pixel (0 - 1)

general structure of the network:

input - > hidden layer -> output

so how does this work?

when the network sees some specific features, certain parts of it activate in response

just like our perceptron, we have weights for each connection

we take the weighted sum, and then calculate our activation. We want our activations to be between 0 and 1. In order to achieve this, we use the sigmoid function : 1 / (1 + e^-x). So the activation of the layer is a measure of how positive the weighted sum is.

Stochastic Gradient Descent:

* an optimization algorithm used to train machine learning algorithms, most notably artificial neural networks used in deep learning

* gradient refers to the calculation of an error gradient, or the "slope of error" and descent refers to moving down along that slope towards some minumum level of error

* we define some 'cost function' - a value that represents how "wrong" the network is with respect to it's weights

* instead of thinking of a massive function with tons of variables, we can consider one single function (inverted parabola) C(w)

* how do we find a weight value such that it is a minumum of this function? That's pretty easy for a function with just a few variables but with 40k variables, its a very difficult problem

* instead, we start at any old point and determine which direction we should move

* we calculate the slope of that function and use that to determine which direction to move

* we then take a bunch of small steps in that direction during each batch

Some terminology:

* sample - a single row of data that is fed into the algorithm and an output that is used to compare to the prediction. a training set consists of many samples

* batch size - a hyperparameter that defines the number of samples to work through before updating the internal model parameters

* epoch - hyperparameter that defines the number of times the algorithm will work through an entire dataset

* SGD - stochastic gradient descent, described above

Additional resources:

* [But what is a Neural Network? - Deep learning, chapter 1](https://youtu.be/aircAruvnKk)

* [Gradient descent, how neural networks learn - Deep learning, chapter 2](https://youtu.be/IHZwWFHWa-w)

* [NOC 10.4: Neural Networks: Multilayer Perceptron Part 1 - The Nature of Code](https://youtu.be/u5GAVdLQyIg)

* [NOC 10.5: Neural Networks: Multilayer Perceptron Part 2 - The Nature of Code](https://youtu.be/IlmNhFxre0w)

* [The Building Blocks of Interpretability](https://distill.pub/2018/building-blocks/)

* [Introduction to Multilayer Neural Networks with TensorFlow’s Keras API](https://towardsdatascience.com/introduction-to-multilayer-neural-networks-with-tensorflows-keras-api-abf4f813959)

* [ml4a Demo: MNIST input](https://ml4a.github.io/demos/f_mnist_input/) - this should clarify the difference between input and first layer

* [ml4a Demo: MNIST forward pass](https://ml4a.github.io/demos/forward_pass_mnist/) - try refreshing and look at the probability update

* [Jay Alamar - A Visual And Interactive Look at Basic Neural Network Math](http://jalammar.github.io/feedforward-neural-networks-visual-interactive/)

## Class 5 - 9/27

## Datasets and Scraping

What are datasets? How are they used?

Image Datasets:

* [MNIST](http://yann.lecun.com/exdb/mnist/)
* [Imagenet](http://www.image-net.org/)
* [Caltech 256](http://www.vision.caltech.edu/Image_Datasets/Caltech256/%29%C2%A0)

Recommendation Systems:

* [Jester](http://www.ieor.berkeley.edu/~goldberg/jester-data/)
* [Netflix](http://www.netflixprize.com/)

Music:

* [Million Song dataset](http://labrosa.ee.columbia.edu/millionsong/)

More [here](http://deeplearning.net/datasets/)

Other interesting datasets:

* [Macauly Library](https://www.macaulaylibrary.org/)
* [Project Gutenberg](https://www.gutenberg.org/)
* [Ebony Magazine Archive](https://www.theatlantic.com/entertainment/archive/2019/07/ebony-magazine-archives-sold-nmaahc-getty/595171/)
* [Watercolor World](https://www.watercolourworld.org/)
* [Filmgrab](https://film-grab.com/)

## Scraping datasets

Can't find a way to download what you want? First try seeing if anyone else has downloaded it yet. Is there a download functionality? Try contacting someone and seeing if they'll share the data.

[Is scraping legal?](https://www.theverge.com/2019/9/10/20859399/linkedin-hiq-data-scraping-cfaa-lawsuit-ninth-circuit-ruling)

You still need to keep copyright in mind - you could violate copyright by redisplaying content.

## Class 4 - 9/24

*note - this class was rescheduled to the evening of 9/24 due to the climate strike on 9/20*

## Perceptrons

Earlier we covered machine learning such as linear regression and KNN.

Supervised Machine Learning is all about ‘learning’ a function given a training set of examples.

Machine learning methods should derive a function that can generalize well to inputs not in the training set, since then we can actually apply it to inputs for which we do not have an output.

In this class we are going to cover the simplest model of an artificial neural network out there.

What is an artificial neural network (ANN)? What is a perceptron?

These all started as attempts mathematically model the neuron. The question generally was - what kind of computational systems can be made that are inspired by the biological neuron?

The perceptron is a form of supervised learning that can differentiate between linearly separable datasets.

Further material:

Watch:
* [10.1: Introduction to Neural Networks - The Nature of Code](https://youtu.be/XJ7HLz9VYz0)
* [10.2: Neural Networks: Perceptron Part 1 - The Nature of Code (first 12 minutes)](https://youtu.be/ntKn5TPHHAk)
* [3.1: Introduction to Session 3 - What is Machine Learning?](https://youtu.be/LvIa0-ZKCrc)

Read: 
* [A 'Brief' History of Neural Nets and Deep Learning](http://www.andreykurenkov.com/writing/ai/a-brief-history-of-neural-nets-and-deep-learning/)
* [Nature of Code Chapter 10. Neural Networks](https://natureofcode.com/book/chapter-10-neural-networks/)
* [A Quick Introduction to Neural Networks](https://ujjwalkarn.me/2016/08/09/quick-intro-neural-networks/)
* [Nature of Code Intelligence and learning - Week 4 Neural Networks](https://github.com/nature-of-code/NOC-S17-2-Intelligence-Learning/blob/master/week4-neural-networks/README.md)
* [A Visual and Interactive Guide to the Basics of Neural Networks (really great interactive)](http://jalammar.github.io/visual-interactive-guide-basics-neural-networks/)
* [Calculate the Decision Boundary of a Single Perceptron - Visualizing Linear Separability](https://medium.com/@thomascountz/calculate-the-decision-boundary-of-a-single-perceptron-visualizing-linear-separability-c4d77099ef38)


## Class 3 - 9/13

## Vectors and classification

### What is a vector?


* A vector has magnitude
* A vector has direction

A vector's magnitude is the length - the size. A vector is a set of instructions on how to get from the tail to the tip

### Why vectors?

  Vectors can be used for physics. Vectors can explain movement, static forces, and so many other things. Vectors can be used to describe position in a space. But when we talk about space we often think of 2d or 3d. Vectors can exist in many more dimenstions. And sometimes it makes sense to pair a bunch of numbers together! There are a bunch of operations we want to do on both numbers so we consider them together

Vector math we reviewed:

* Add/sub
* mult/div
* Magnitude
* Normalize

KNN

* "Tell me who your neighbor is, and I’ll tell you who you are"
* "K-Nearest Neighbor" is a machine learning algorithm used for both classification and regression. It is a "lazy learning" algorithm due to the fact that there is really is no learning at all. New data points are classified / valued according to a distance comparison with every data point in a training set. (source)[https://github.com/nature-of-code/NOC-S17-2-Intelligence-Learning/blob/master/week3-classification-regression/README.md]
* Nice interactive demo [here](https://observablehq.com/@nsthorat/how-to-build-a-teachable-machine-with-tensorflow-js) a bit further down the page

The notebook from the class should be listed on the "notebooks" page.

More reading:

* [CS231 - Python Numpy Tutorial](http://cs231n.github.io/python-numpy-tutorial/)
* [K-Nearest Neighbors Algorithm in Python and Scikit-Learn](https://stackabuse.com/k-nearest-neighbors-algorithm-in-python-and-scikit-learn/)
* [ml4a KNN Classification](https://github.com/ml4a/ml4a-guides/blob/master/notebooks/classification_kNN.ipynb)
* [Pandas](https://towardsdatascience.com/pandas-dataframe-a-lightweight-intro-680e3a212b96)
* [Pandas documentation](https://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html)
* [How to master Pandas](https://towardsdatascience.com/how-to-master-pandas-8514f33f00f6)


## Class 2 - 9/6

What is scripting?

* A scripting or script language is a programming language for a special run-time environment that automates the execution of tasks; the tasks could alternatively be executed one-by-one by a human operator. Scripting languages are often interpreted. - Wikipedia

Python is a scripting language that we will be using in this class. It is highly versatile, high-level, general-purpose programming language that is quickly becoming one of the most popular languages.

Before getting into Python, we covered the terminal:

[Quick guide here](https://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)

Import commands to be familiar with:
* pwd
* ls
* cd
* mkdir
* rmdir
* rm
* mv
* cp

Using the terminal, we installed [Homebrew](https://brew.sh/)

First, make sure you have Xcode command-line tools installed. Note - this is *not* the Xcode editor. These are separate tools that run from your command line. Run the commands below (without the `$` at the beginning of the line):

```console
$ xcode-select --install
```

Next, we install Homebrew by running the following command:

```console
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Run the following command once you’re done to ensure Homebrew is installed and working properly:

```console
$ brew doctor
```

Next, we install Python 

```console
$ brew install python
```

Check your install with the following command

```console
$ python --version
```

It should say report a version of python 3 or higher

Next we can use pip, pythons package manager, to install jupyter notebook and other dependencies:

```console
$ pip3 install jupyterlab
$ pip3 install matplotlib
```

We then run the command below to open a jupyter notebook. Make sure you are in the correct directory when you run this command.

```console
$ jupyter notebook
```

You can review the in class exercises we did here:

* [Intro to Python](https://github.com/channelstudio/fall2019designingml/blob/master/notebooks/Intro%20to%20Python.ipynb)

Some recommended resources:
* [learnpython.org](https://www.learnpython.org/)
* [Codecademy](https://www.codecademy.com/learn/learn-python-3)
* [Freecodecamp](https://guide.freecodecamp.org/python/)
* Learn Python 3 the Hard Way (book)

* [A good post on whitespace for those who are curious](https://stackoverflow.com/questions/13884499/what-is-python-whitespace-and-how-does-it-work)
* [Another good post on scoping for index variables - or why "fruit" persisted outside the scope of our for loop](https://eli.thegreenplace.net/2015/the-scope-of-index-variables-in-pythons-for-loops/)

## Class 1 - 8/30

Introductory class. We began by having everyone answer the following questions:

* Why are you taking this class?
* What is your background and experience? What are you interested in?
* What did you do this summer?

This class is about using machine learning to explore archives.

The data problem - we have more information now than ever before, and it is growing exponentially.

Cultural institutions are digitizing and open sourcing massive collections. Beyond this, what is a dataset? Perhaps shopping inventories are datasets? Movies are a dataset. Google photos is a dataset. 

There are growing datasets that we want to be able to search on a semantic basis.

At the same time, people expect better and better digital experiences. Companies like Google, Uber, etc are spending tons on design to create the best experiences they can. They are setting the bar for online experiences.

Design is about sorting/organizing/making information digestible. We are designing the experience of exploring a dataset using machine learning as a design tool.

A main concept for the class is using machine learning and AI to augment or facilitate, not to create.

We looked at the following references (the first six do not use ML):

* [Below the Surface](https://belowthesurface.amsterdam/en/vondsten)
* [Cooper Hewitt Collection](https://collection.cooperhewitt.org/)
* [Art Palette](https://artsexperiments.withgoogle.com/artpalette/colors/242726-886c5f-d04b18-dfb24a-d4c5aa)
* [Coins](https://uclab.fh-potsdam.de/coins/)
* [NYPL](http://publicdomain.nypl.org/pd-visualization/)
* [Navigating The Green Book](http://publicdomain.nypl.org/greenbook-map/)
* [Neural Neighbors: Capturing Image Similarity
](http://dhlab.yale.edu/projects/neural-neighbors/)
* [PixPlot](http://dhlab.yale.edu/projects/pixplot/)
* [The Norwegian National Museum](http://vy.nasjonalmuseet.no/)
* [Identifying art through machine learning
](https://www.moma.org/calendar/exhibitions/history/identifying-art)
* [Teachable Machine](https://experiments.withgoogle.com/teachable-machine)
* [Pattern Radio: Whale Songs](https://experiments.withgoogle.com/patternradio)
* [Talk to Books](https://experiments.withgoogle.com/talk-to-books)
* [Semantris](https://research.google.com/semantris/)
* [Font Map](https://experiments.withgoogle.com/font-map)
* [The Infinite Drum Machine](https://experiments.withgoogle.com/drum-machine)
* [Bird Sounds](https://experiments.withgoogle.com/bird-sounds)
* [Boil the Frog](http://static.echonest.com/BoilTheFrog/)
* [Every Noise at Once](http://everynoise.com/engenremap.html)
* [X Degrees of Separation](https://artsexperiments.withgoogle.com/xdegrees/8gHu5Z5RF4BsNg/BgHD_Fxb-V_K3A)
* [NASA’s Visual Universe](https://artsexperiments.withgoogle.com/nasasvisualuniverse)
* [NASA’s Visual Universe](https://experiments.withgoogle.com/business-of-fashion)
* [Curator Table](https://artsexperiments.withgoogle.com/curatortable/#0.00,1607.63,4473.41,0.00,-1.00,0.00)