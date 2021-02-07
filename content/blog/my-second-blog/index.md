---
title: Predicting Mobility Changes due to COVID-19
date: '2020-10-02T12:00:00.00Z'
description: 'Data analysis project with SQL, Python, and BigQuery'
---

## Examining Changes in Mobility Due To COVID-19 in SQL, BigQuery and Python

View the full Google Colaboratory [here](https://colab.research.google.com/drive/1rkUdkOyj0Up0-yVqdX-snS3yobNxy7jl?usp=sharing)

This was the final project for CS 145: Database Management and Systems. The project began as an open-ended exploration of how COVID-19 changed people's mobility worldwide. Ultimately, I built a logistic regression model to try and predict, based on factors like government restrictions, precipitation, and ICU capacities, whether or not people's mobility would decline.

One of the requirements for this project was to use BigQuery and SQL for as much of the process as possible - exploratory data analysis, creating constructed features, and making and testing the model - on at least fairly big data (the largest table I used had ~6 million rows). I used matplotlib for visualization throughout, as well as pandas in Python and data.table in R to clean and process the data before uploading it to BigQuery.

I learned how to write much more efficient SQL queries - writing them out with relational algebra to maximize efficiency, choosing joins that optimize for IO costs, and so on - as well as how to create a data analysis workflow almost entirely in BigQuery. I also learned which portions of my data analysis workflow are best conducted outside of BigQuery - in particular, setting up data splits, and training/evaluating models in BigQuery is substantially more finicky than just using Keras, or any other Python/R ML package of one's choice. However, setting these constraints still proved valuable, and an excellent lesson in the value of using the right tool for the job.
