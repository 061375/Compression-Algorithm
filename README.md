# Compression-Algorithm
Experimenting with compression algorithms

This first experiment is based on a YouTube video from Computerfile.

https://www.youtube.com/watch?v=Lto-ajuqW3w

I am gathering repeated text and placing it into a dictionary.
The dictionary contains the raw text and indexes where the text should be in the raw data.

The indexes can get rather large so much that the dictionary is as large or larger than the compressed data...

That's NO GOOD.

Anyways I built a cypher to compress the indexes and now the data is GETTING closer to what I want.

It appears to compress at a minimum less than the raw data however, not by much in many cases. ( But this is just an excersize ).

The next step is to of course to explode the data using the dictionary...."will it work"? ...

Currently the stucture is a bit of a mess but I have it so that in the index.html file it's possible to specify the target which can be a local file or a URL. The program imports the raw HTML from a website.

The result post compression is saved locally with the extension .c.txt.

### Version 2.1.3 ###

Bugfix - Discovered that some of the characters I used were breaking when being passed to the server... I should re-engineer this in Python ( soon enough ). Anyways, I picked some different characters and now the program works with text.c.txt for decompression. In most cases the file is only compressing by about 1%. I'll optimize it once I get the bugs out.
The next step will be to decompress my homepage.

### Version 2.1.2 ###

Bugfix - The tests now succeed 100% for text2.c.txt but I am still seeing errors in text.c.txt. I wasn't really looking for any in that one as it's all Lorem Ipsum and .. I don't speak latin but, there are at least one or two errors I need to find and fix.

### Version 2.1.1 ###

The test against small.c.txt and medium.c.txt are fully successful however, the test against test2.c.txt is failing near the end at column 697. Obviously, everything after that is broken. But, this is just about 75% correct.

The compression is still AWEFUL...But, it's a work in progress.

### Version 2.1.0 ###

I am able to successfully extract the dictionary. The next step is to reoganize the data so that the program will loop the positions in order to add the repeat data to the final string.

Currently its adding the data to the correct index however, the indexes are out of order so a chunk may need to go at say 372 but a previous entry was added at say 104 breaking the order.

I think I need to loop the data from top to bottom for this to work correctly.

I also want to build a secondary index to hold the compressed text and reference it in the final loop.

This way I don't have large chunks of text repeated in an object.

## TODO ##

* Build an interface to display and run the compression
* Reorgnize the code into a better stuctured library.

Some ideas I have for further compression.

* Within the compressed data converting characters to numbers then dividing the number ( if possible ) and then adding a marker.
  In some cases this could shrink the data by half and it wouldn't require a dictionary. 
