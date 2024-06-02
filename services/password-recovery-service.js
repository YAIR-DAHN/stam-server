import { PasswordRecovery, User } from "../database/index.js";
import crypto from "crypto";
import nodeoutlook from "nodejs-nodemailer-outlook";
import fs from "fs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";


//איתור המשתמש, ויצירת קוד אימות
const findUser = async ({ userPhone, email, sender }) => {
    try {
        const user = await User.findOne({
            where: { userPhone: userPhone }
        });

        if (user) {
                console.log("user find", user);
            //יצירת קוד אימות
            const vCode = crypto.randomInt(100000, 999999); // 6 digit random number
            await PasswordRecovery.create({ userId: user.id, token: user.userToken, isUsed: false, verificationCode: vCode });

            //שליחת קוד אימות
            if (sender === "sms") {
                await sendSMS(userPhone, vCode); // שליחת קוד אימות באמצעות SMS
            }
            else if (sender === "whatsapp") {
                await sendWhatsApp(userPhone, vCode); // שליחת קוד אימות באמצעות WhatsApp
            }
            else if (sender === "email") {
                console.log(`user email: ${user.userEmail}`);
                await sendEmail(user.userEmail, vCode); // שליחת קוד אימות באמצעות Email
            }
            else if (sender === "voice") {
                await sendVoice(userPhone, vCode); // שליחת קוד אימות באמצעות שיחה קולית
            }
            let returnData = { user };
            return returnData;
        }
        return null;
    } catch (error) {
        console.log(error);
    }
}

//שליחת קוד האימות באמצעות SMS
const sendSMS = async (phone, vCode) => {
    try {
        await fetch(`https://www.call2all.co.il/ym/api/SendSms?
        token=${process.env.SMS_YEMOT_NUMBER}:${process.env.SMS_YEMOT_PASSWORD}&message=קוד האימות לאיפס הסיסמה לאתר הוא ${vCode}&phones=${phone}`)
            .then(res => res.json()).then(data => console.log(data));
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

//שליחת קוד האימות באמצעות WhatsApp
const sendWhatsApp = async (phone, vCode) => {
    try {
        let phoneNum = phone.substring(1);
        console.log(phoneNum);
        await fetch(`https://api.green-api.com/waInstance${process.env.WHATSAPP_ID_INSTANCE}/sendMessage/${process.env.WHATSAPP_TOKEN_INSTANCE}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ chatId: `972${phoneNum}@c.us`, message: `קוד האימות לאיפוס הסיסמה לאתר הוא ${vCode}` })
            }
        )
            .then(res => res.json()).then(data => console.log(data));
        // return data;
    }
    catch (error) {
        console.log(error);
    }
}

const sendVoice = async (phone, vCode) => {
    try {
        await fetch(`https://www.call2all.co.il/ym/api/SendTTS?
        token=${process.env.SMS_YEMOT_NUMBER}:${process.env.SMS_YEMOT_PASSWORD}&ttsMessage=קוד האימות לאיפס הסיסמה לאתר הוא ${vCode}&phones=${phone}&ttsRate=-10`)
            .then(res => res.json()).then(data => console.log(data));
        return true;
    }
    catch (error) {
        console.log(error);
    }
}


// שליחת אימות במייל
const sendEmail = async (email, vCode) => {
        nodeoutlook.sendEmail({
        auth: {
            user: process.env.OUTLOOK_EMAIL,
            pass: process.env.OUTLOOK_PASSWORD
        },
        from: process.env.OUTLOOK_EMAIL,
        to: email,
        subject: 'בקשה לאיפוס סיסמה ',
        html: `<h2>קוד האימות לאיפוס הסיסמה לאתר הוא </h2> <h1> ${vCode} </h1> `,
        text: `קוד האימות לאיפוס הסיסמה לאתר הוא ${vCode}`,
        replyTo: process.env.OUTLOOK_EMAIL,
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i)
    }
    
    
    );}


//טיפול בקבלת קוד האימות מהמשתמש
const verifyCode = async ({ code }) => {
    try {
        const user = await PasswordRecovery.findOne({
            where: {
                verificationCode: code,
                isUsed: false
            }
        });
        if (user) {
            //עדכון בדאטה שנעשה שימוש בקוד האימות
            await PasswordRecovery.update({ isUsed: true }, { where: { id: user.id } });
        }
        return user.userId;
    } catch (error) {
        console.log(error);
    }
}

//כניסה לאתר לאחר ביצוע האימות
const login = async (userId) => {
    try {
        const user = await User.findByPk(userId);

        if (user) {
            user.userToken = user.generateJWT();
            await user.save();
            console.log(user);
            return user;
        }
        return null;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}


export default { findUser, verifyCode, login };