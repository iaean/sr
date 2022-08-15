#!/bin/sh

echo "${1}" > VERSION
sed -i -e "/^ENV VERSION=.*/s/.*/ENV VERSION=${1}/" Dockerfile
