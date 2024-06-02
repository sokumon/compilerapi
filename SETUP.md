# How to setup the arm compiler 
### Run all these commands inside the compilerapi folder
- Get the compiler from the site
```
wget https://developer.arm.com/-/media/Files/downloads/gnu-rm/6_1-2017q1/gcc-arm-none-eabi-6-2017-q1-update-linux.tar.bz2?rev=6799a2bcea254e118a363f4bce1c06f7&revision=6799a2bc-ea25-4e11-8a36-3f4bce1c06f7?product=GNU%20Arm%20Embedded%20Toolchain%20Downloads,64-bit,,Linux,6-2017-q1-update
```

- Wait for the wget log to finish wait for atleast 2-3 minutes

- Rename the garbage download to .tar.bz2 file 

- run this command on the filename
```
tar -xf  gcc-arm-none-eabi-6-2017-q2-update-linux.tar.bz2
```

- Now you have a gcc-arm folder rename it 
mv gcc-arm-none-eabi-6-2017-q1-update gcc-arm

- Move it into pluto_project
```
mv gcc-arm-none-eabi-6-2017-q1-update CodeBuilder/pluto_project/
```