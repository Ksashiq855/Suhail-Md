const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923344918302" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923344918302";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923344918302,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_17_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICA0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgxLFxuICAgICAgICA1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4LFxuICAgICAgICA3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMzLFxuICAgICAgICA3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDY0LFxuICAgICAgICA0MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMDEsXG4gICAgICAgIDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjksXG4gICAgICAgIDgxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDU0LFxuICAgICAgICA2NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMHFQOXdpVWdza3gxU24zTVVMZHBCUnljOXFIcGFVU0Rad2cxS0ZEeXhwVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzNDQ5MTgzMDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY4OTVFMEU5MDAxOThFNDQ0OTk3RDdGMjU0M0Q5Rjg3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDE1MzA3M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4bngtMWVXOVNpU2NqQzVrcjUzRHNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc5YjNiYTlkLWFkNWEtNDMyNi1hZDIzLWU4Mjc1NmUwYzgwMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICAxNzgsXG4gICAgICAxMDgsXG4gICAgICAyMjIsXG4gICAgICAyMDgsXG4gICAgICAyMzQsXG4gICAgICAxNyxcbiAgICAgIDE2MixcbiAgICAgIDEyNyxcbiAgICAgIDI0NCxcbiAgICAgIDIzMyxcbiAgICAgIDE5NCxcbiAgICAgIDE2NixcbiAgICAgIDE0OCxcbiAgICAgIDIyMixcbiAgICAgIDE3LFxuICAgICAgMjA0LFxuICAgICAgMSxcbiAgICAgIDI0NCxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDI1NCxcbiAgICAgIDc1LFxuICAgICAgMzEsXG4gICAgICAxOSxcbiAgICAgIDkyLFxuICAgICAgMSxcbiAgICAgIDksXG4gICAgICAyMTEsXG4gICAgICAyMDYsXG4gICAgICAxNDYsXG4gICAgICAxNzYsXG4gICAgICA4MyxcbiAgICAgIDY5LFxuICAgICAgMTMsXG4gICAgICAyMTEsXG4gICAgICAxMTEsXG4gICAgICAyMjgsXG4gICAgICAxMjQsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQjM3S1kyNlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM0NDkxODMwMjozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIktTIEFTSElRXCIsXG4gICAgXCJsaWRcIjogXCI1MDE5OTk0Njg4MzI0MjozMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOV3VxeGNRNXVlZHRBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjdjM3Y0YlJVMGUzSkdiakhyRE1GR2l2L0cwUHRTTU84RVlUbW0xeW9rVUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibTlTMm04aU5Pb3haQkJHTHpJR1N5QUkvWnlDRHBLUVZFdmE1YUdGa3h4SjNmUFRzSS81WU8rSHp4b0Zib0RLaW9DU1hiSUViZFZGdzQydFd6QmlUQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicVBQandtSlY1R1dPeVQ5OS9lSXlqWnp5NGdVVFdxVVFDRUhnQ2pndE9UOVdyQVNPd3N3VGVTNS9QRkx4akwvU3hlRFRsNnVIc2pISFRhaUpUZWVrRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzQ0OTE4MzAyOjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxNTMwNjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBSmNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFKYy5qc29uIjogIntcImtleURhdGFcIjpcImhjVWxjVFJ0UFZtSkUyOUVQR3JMYm5IaWk0TWZFeUo4UnRvZHVyYk5hNWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDg5NDQ5ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDA3NDYwMTgzOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "KS ASHIQ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
