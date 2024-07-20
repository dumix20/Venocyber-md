//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255742862266";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUZyR0dnR2NRT0VZU1lwOGt2TUlGaVpHc3dZOUh5NU9kaVJHbVBZc3VVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2pOOUo0Njc1ejNCU29PZjZwVmlNclgzTnZ6b1NEQ2owUEdya0VPU016az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTnA4ZWFxcjhWYTNHUzhLWDNtaWI5SC9IU0RCRFgyVU9jaTRsNys4cWs0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5eEJQaUUxUTFLTWZ1R3VXNEUzS2NRSVlLMHZMQnhLZ0VqenRIcWsrMlI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktMUkNaTDV2clkrbjBGUEJta3ltT042WHF3T0RGZGpTMUNqRm90V3BkbjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNuVDhBUUJFODV2T1FzVXI5aWMzTWRoYWtGczZSOG9NSk1VUzlZZ1dHQWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09hM3MxYW4rdTJmWGl4RHF3amx4a3h6cE9SMnI4WStVdnlEd21odjRHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0wwcEkwRmFVWlRVMXowR2UxMWx2SXRPNEhkb3FTYmkrZzJSOVg3R0JuZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkEwYStmSGNlVGxqTEhvbVNiYU9uTGVxb0wva1AyQjd6RDJwZjhGdEpEazROZjRSVFZxMGxwU3VKN2tHZUloandJSUgrNUJObXdZcHpXWVl3d1hjWURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6ImNpaHhGM2d3NEVMcngrTElpaXhtc3FDQTVXQTUzenA1ZkpickorWmgrTU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NTM2NzIwNzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVCMkY0RTg4MjFEN0NCOEZCOTdBMUJBMDA0MkRFMTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTQ5NTI2OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMlFOdEg0ZWtTcEd0RTRMc05DZkR0dyIsInBob25lSWQiOiI1OGJhNTFhZS02YzkzLTRhY2MtOWMxZC1kNmRkNzljY2E5OWMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZE45aitLWDNvaitQb3pzL3BkbjhYN05vd2QwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRiM2RVODlhcWx1SDVNOGdQbmRxaUM5MzJkQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJZR0ZUSDFBSCIsIm1lIjp7ImlkIjoiOTQ3NTM2NzIwNzk6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJSVVNIIPCfh7Hwn4ewIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNWFB0ZVFERU5mZDc3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJtcUN0NEp2aFp0SEg1RkpXVFpEUXVhb2pWRGdVdG1oN3BCQ2JCUkt6cEdJPSIsImFjY291bnRTaWduYXR1cmUiOiJCam5SYm0xUUNmcDVtaE90RHNkd1cxWWpUQjdrTE1FbENZODAwYjBBdXdBamVwcVU1Q243bkNQVGJ6Qkg1VmQvTUtGMXdoaTJsL2NjTlZHYzhiYitDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoib1ZEMEVwQ3FMYWVCSEpaYmQwcEM0dkI1Y3MxcHZLQ1ltbEJ1Q05HZnBpZTZjMTE1OXFVY0V6Uk9JSmFtL2VMRytlNWhjTDdzZzF4VXJPaytiZlhnQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1MzY3MjA3OTo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpxZ3JlQ2I0V2JSeCtSU1ZrMlEwTG1xSTFRNEZMWm9lNlFRbXdVU3M2UmkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE0OTUyNjcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1l4In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
