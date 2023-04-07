#!/bin/bash

# Get the log file path from the command line argument
log_file_path=$1

# Check if the log file exists
if [ ! -f "$log_file_path" ]; then
    echo "Error: $log_file_path does not exist."
    exit 1
fi

# Create the backup archive
backup_filename="../../backup.tar.gz"
tar -czf $backup_filename $log_file_path

echo "$log_file_path backed up to $backup_filename."
