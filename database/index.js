// import sequelize from "./db-postgres.js"; //postgresDB
import sequelize from "./db-mysql.js"; //mysqlDB

import User from "./models/user-model.js"; //טבלת משתמשים
import LoginCounter from "./models/login-counter.js"; //טבלת מונה כניסות
import PasswordRecovery from "./models/password-recovery-model.js" //טבלת שחזור סיסמא
import Calculations from "./models/calculations-model.js"; //טבלת חישובים
import DailyProgress from "./models/daily-progress-model.js"; //טבלת התקדמות יומית


//connect to db and sync models
const syncModels = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");

        // await sequelize.sync({ force: true }); // מאפס את הטבלה בכל ריצה מחודשת של השרת 

        await sequelize.sync();  // אם הטבלה קיימת לא מאפס

        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

export { syncModels, User, LoginCounter, PasswordRecovery, Calculations, DailyProgress, sequelize };