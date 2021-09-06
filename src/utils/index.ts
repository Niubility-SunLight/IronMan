/*
 * @Author: your name
 * @Date: 2021-07-08 21:52:37
 * @LastEditTime: 2021-09-06 23:09:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\utils\index.ts
 */
class MiniAppKit {
//   static decryptData(sessionkey: string, encryptedData, iv) {
//     // base64 decode
//     const appId = this.app.config.appid;
//     const sessionKey = Buffer(sessionkey, 'base64');
//     encryptedData = Buffer(encryptedData, 'base64');
//     iv = Buffer(iv, 'base64');
//     let decoded;
//     try {
//       // 解密
//       const decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv);
//       // 设置自动 padding 为 true，删除填充补位
//       decipher.setAutoPadding(true);
//       decoded = decipher.update(encryptedData, 'binary', 'utf8');
//       decoded += decipher.final('utf8');
//       decoded = JSON.parse(decoded);
//     } catch (err) {
//       throw new Error('Illegal Buffer');
//     }

//     if (decoded.watermark.appid !== appId) {
//       throw new Error('Illegal Buffer');
//     }

//     return decoded;
//   }
}
