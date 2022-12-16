#!/bin/bash

# Check if a file was provided as an argument
if [ $# -eq 0 ]; then
  echo "Error: No file provided"
  exit 1
fi

# Store the filename in a variable
file=$1

# Check if the file exists
if [ ! -f "$file" ]; then
  echo "Error: File not found"
  exit 1
fi

# Print the contents of the file to output.txt
cat "$file" > output.txt

# Confirm that the output has been written to the file
echo "Output written to output.txt"
