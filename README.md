# Compression-Algorithm
Experimenting with compression algorithms

This first experiment is based on a YouTube video from Computerfile

I am gathering repeated text and placing it into a dictionary.
The dictionary contains the raw text and indexes where the text should be in the raw data.

The indexes can get rather large so much that the dictionary is as large or larger than the compressed data...

That's NO GOOD.

Anyways I built a cypher to compress the indexes and now the data is GETTING closer to what I want.

It appears to compress at a minimum less than the raw data however, not by much in many cases. ( But this is just an excersize ).

The next step is to of course to explode the data using the dictionary...."will it work"? ...
