# bagels
## a JavaScript version of bagels logic guessing game

Using p5js DOM library to select and handle elements. 

Here is an retro text based logic game, much like many games I played or coded in BASIC on the Commodore 64.

Jim Butterfield had many articles in computer magazines instructing kids how to code these types of games in BASIC and machine language.


https://www.atarimagazines.com/compute/issue39/245_1_MACHINE_LANGUAGE_A_BAGEL_BREAK.php

The logic of this version is very close to the logic of the Python code that Al Sweigart has in his great book

https://inventwithpython.com/chapter11.html

But as JavaScript and Python handle arrays and lists so differently, almost none of the code stays the same.

Each of the JavaScript functions have a similar 'function' to the Python code, but they are implemented in different ways.

Even the logic of the REPL of Python must be handled by the DOM in JavaScript so the game loop is completely different


play it live at:

https://greggelong.github.io/bagels


## Commodore 64 BASIC version

I have the binary .prg file which Vice c64 emulator will run

I have the human readable text of the c64 BASIC too

The programming style is very different from python or javascript. 

programming in BASIC is like water flowing down stream, conditionals are just like logs

using mid$() function to check user input

the three digit secret number is stored in 3 variables, to make the logic of checking for pico firmi bagels win more clear

link to the .prg running in an online editor 

at janieck co
[link to live](https://vice.janicek.co/c64/index.html#%7B%22controlPort2%22%3A%22joystick%22%2C%22primaryControlPort%22%3A2%2C%22keys%22%3A%7B%22SPACE%22%3A%22%22%2C%22RETURN%22%3A%22%22%2C%22F1%22%3A%22%22%2C%22F3%22%3A%22%22%2C%22F5%22%3A%22%22%2C%22F7%22%3A%22%22%7D%2C%22files%22%3A%7B%22bagels.prg%22%3A%22data%3Aapplication%2Foctet-stream%3Bbase64%2CAQgOCAoAjyBCQUdFTFMAHggUAI8gQzY0IEJBU0lDAEMIFQCPIFZBUklBQkxFIE5BTUVTIEFSRSBPTkxZIDJDSEFSUwBaCBYAjyBCRSBDQVJGVUwgTkFNSU5HAHwIHgCPKkdFVCBSQU5EIFNFQ1JFVCBOVU1CRVJTKioqKgCQCGQAUzEgsiC1KLsoMCmsMTApAKQIbgBTMiCyILUouygwKawxMCkAwAh4AIsgUzIgsiBTMSCnIDExMDqPIENIRUNLANQIggBTMyCyILUouygwKawxMCkA8giMAIsgUzMgsiBTMSCwIFMzILIgUzIgpyAxMzAA%2FAiWAJkikyI7AAoJlwCXIDUzMjgxLDAAFAmYAJkiHiI7ADUJmQCZIhzOzc7Ozs3Ozs7Nzs3Ozc7Nzs3Nzs7Ozs0iAD8JmgCZIh4iOwBgCaAAmSJJIEFNIFRISU5LSU5HIE9GIEEgTlVNQkVSIgB7CaoAmSJZT1UgSEFWRSAxMCBHVUVTU0VTIgCZCa8AmSJJIFdJTEwgR0lWRSBZT1UgQ0xVRVM6IgC%2FCbQAmSJQSUNPIC0gMSBESUdJVCBCVVQgV1JPTkcgT1JERVIiAOEJtgCZIkZFUk1JIC0gMSBESUdJVCBSSUdIVCBPUkRFUgD7CbcAmSJCQUdFTFMgLSBOTyBESUdJVFMiABwKuACZIhzOzc7Ozs3Ozs7Nzs3Ozc7Nzs3Nzs7Ozs0iACYKvQCZIh4iOwA8Cr4AjyAgUFJJTlQgUzEsUzIsUzMAUwrIAI8qR0VUIElOUFVUKioqKioqKgBkCtIAgSBJILIgMSCkIDEwAHkK%2BgCFIllPVVIgR1VFU1MiO0ckAI0KBAGZIkdVRVNTOiIsSSwgRyQAowosAY8qQ0hFQ0sqKioqKioqKioqALwKMQFIILIgMCA6II8gRk9SIEJBR0VMUwDQCjYBVDGyxSjKKEckLDEsMSkpAOQKQAFUMrLFKMooRyQsMiwxKSkA%2BApKAVQzssUoyihHJCwzLDEpKQAVC08BjyoqIFRFU1QgRk9SIFdJTioqKioqKioqAD4LVAGLIFQxILIgUzEgryBUMiCyIFMyIK8gVDMgsiBTMyCnIDEwMDAAWAtZAY8gVEVTVCBGT1IgRkVSTUkgUElDTwB3C14BiyBUMSCyIFMxIKcgmSJGRVJNSSI6SLJIqjEAowtoAYsgVDEgsiBTMiCwIFQxILIgUzMgpyCZICJQSUNPIjogSCCyIEiqMQDCC3IBiyBUMiCyIFMyIKcgmSJGRVJNSSI6SLJIqjEA7wt8AYsgVDIgsiBTMSCwIFQyILIgUzMgpyCZICJQSUNPIjogSCCyIEiqIDEADgyGAYsgVDMgsiBTMyCnIJkiRkVSTUkiOkiySKoxADkMkAGLIFQzILIgUzIgsCBUMyCyIFMxIKcgmSAiUElDTyIgOiBIskiqMQBPDJoBjyBURVNUIEZPUiBCQUdMRVMAaAykAYsgSCCyIDAgpyCZICJCQUdFTFMiAHAM8wGCIEkAiwyEA5kgIlRPTyBNQU5ZIEdVRVNTRVMhISIAogyOA5kgIlRIRSBBTlNXRVIgV0FTIgCxDJgDmSBTMTtTMjtTMwC3DKIDgADLDOgDmSAiWU9VIFdJTiEhISEiAAAA%22%7D%2C%22vice%22%3A%7B%22-autostart%22%3A%22bagels.prg%22%7D%7D)

