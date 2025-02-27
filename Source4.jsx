var value = prompt("Type in the name of the file"); 
var fuck=new Folder("D:/check/human/"+value)
fuck.create()
var folder2=new Folder('D:/BaiduYunDownload/new/new/new')



    var fileList = folder2.getFiles('*.bmp');
	
     for (var i = 0; i < fileList.length; i++) {
		 var file = fileList[i];
		 
         open(file)		 
		 var imgname=file.name.split('.')
		 
		 
var doc= activeDocument;
var jpgOptions = new JPEGSaveOptions();
jpgOptions.quality = 8; //enter number or create a variable to set quality
jpgOptions.embedColorProfile = true; 
jpgOptions.formatOptions = FormatOptions.STANDARDBASELINE;

if(jpgOptions.formatOptions == FormatOptions.PROGRESSIVE){
    jpgOptions.scans = 3}; //only used with Progressive
jpgOptions.matte = MatteType.NONE;
app.activeDocument.changeMode(ChangeMode.RGB);
activeDocument.saveAs(new File(fuck+"/" + imgname[0] + ".jpg"), jpgOptions ,true, Extension.LOWERCASE)
		 
		 
		 app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
		 file.remove
	} //built new image

	var loadLayersFromScript = true;
	// @include 'Load Files into Stack.jsx'


for (i=1;i<180;i++){
    

	
	
	var folder = Folder('D:/BaiduYunDownload/new/new/'+i);
	
    var fList =folder.getFiles('*.bmp');
	
	num=fList.length;
	
	if (num>1){
		loadLayers.intoStack(fList, false);
	//runLoadStack
	app.doAction("动作 6","组 1")
    
		
	
	
try{
var Path= activeDocument.path;
}catch(e){var Path = fuck;}
var Name = decodeURI(app.activeDocument.name).replace(/\.[^\.]+$/, '');
var layerName = app.activeDocument.activeLayer.name.replace(/[:\/\\*\?\"\<\>\|]/g, "_");

var saveFile=  File(Path + "/" + i + ".gif");
var rex = new RegExp(i+ ".gif");
var files = decodeURI(saveFile.fsName).replace(rex,"*.gif");
var cmd = 'C:/tmp/gifsicle.exe --batch --loop=forever −−careful ';
cmd += '\"' + files+ '\"';
SaveForWeb(saveFile);
app.system(cmd);


app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
//savegif}
	
}
else if(num==1){
	
	processImagesInFolder2(folder)
	}
else{
	
	alert(i-1)
	break


	
}

}






function SaveForWeb(saveFile) {
var sfwOptions = new ExportOptionsSaveForWeb();
   sfwOptions.quality=20;

activeDocument.exportDocument(saveFile, ExportType.SAVEFORWEB, sfwOptions);
};

function processImagesInFolder2(folder) {
    var fileList = folder.getFiles('*.bmp' || '*.jpg' || '*.png');
     for (var i = 0; i < fileList.length; i++) {
		 var file = fileList[i];
         open(file)		 
		 var imgname=file.name.split('.')
		 
		 
var doc= activeDocument;
var jpgOptions = new JPEGSaveOptions();
jpgOptions.quality = 8; //enter number or create a variable to set quality
jpgOptions.embedColorProfile = true; 
jpgOptions.formatOptions = FormatOptions.STANDARDBASELINE;

if(jpgOptions.formatOptions == FormatOptions.PROGRESSIVE){
    jpgOptions.scans = 3}; //only used with Progressive
jpgOptions.matte = MatteType.NONE;
app.activeDocument.changeMode(ChangeMode.RGB);
//app.doAction("動作 1","组 1")
//夏空的英仙座
activeDocument.saveAs(new File(fuck+"/" + imgname[0] + ".jpg"), jpgOptions ,true, Extension.LOWERCASE)
		 
		 
		 app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
		 file.remove
	} 
}

