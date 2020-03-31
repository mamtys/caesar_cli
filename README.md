# This is [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher) Tool

**Usage**

CLI tool can accept 4 options (short alias and full name):

1. -s, --shift  \<number\>: a shift _Requred option_
1. -i, --input  \<string\>: an input file path
1. -o, --output \<string\>: an output file path
1. -a, --action \<string\>: an action encode/decode _Requred option_

In case of missing --input --output options standard streams used.

**Example:**

$ node caesar_cli -a encode -s 7 -i \<input path\> -o \<output path\>


