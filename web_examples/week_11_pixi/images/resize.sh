#!/bin/bash

for i in caltech101/**/*.jpg;
do convert $i -resize "64x64>" resized/"${i////_}";
done;