#!/bin/sh
which reduce 2>&1 || echo "needs reduce: gem install reduce ... see http://github.com/grosser/reduce"
reduce s3-slider.js > s3-slider.min.js
reduce s3-slider.css > s3-slider.min.css
