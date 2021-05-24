# Perceptron

As part of my Machine Learning studies, I follow Daniel Shiffman's course on neural networks. This repo contains a very
simple exercise in which I've built a one-node perceptron.

## Motivation

I find the field of machine learning very exciting. This is the start for me in diving into it, hence the simplicity of
the exercise. My node is able to take two inputs and categorize them, this being the first building block to a
multilayer perceptron.

## Technical considerations

I had a lot of fun coding this little AI. The "brain" part of it works as intended (I tested it by running my AI on
Shiffman's view layer). The visualisation of the process however is not complete. I didn't want to use p5.js - it would
have felt too much like doing a copy+paste - so I ended up using React as the view layer. I had some difficulty in
getting the component updates to work for me - React throws an error after 50 renders, thinks that I must be
in an infinite loop. I would need approx 2000 renders to fully illustrate the process.

I have found a library called [react-konva](https://github.com/konvajs/react-konva), which provides a react layer around
the HTML5 canvas. The code implementing this library can be found on the "with-konva" branch, but is incomplete.

## Improvements

- finish the work with react-konva
- continue with the course and create a multilayer perceptron
