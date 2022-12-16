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

# Filter the file for rows that contain "@amazon.com" in the email column
grep "@amazon.com\|@Amazon.com" "$file" > filtered.txt

# Extract the first and last names from the filtered file and print them to output.txt
cut -d',' -f3,2 filtered.txt > output.txt

# Clean up the temporary file
rm filtered.txt

# Confirm that the output has been written to the file
echo "Output written to output.txt"
