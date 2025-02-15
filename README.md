# stam-server 📋
### שרת צד אחורי למערכת ניהול זמנים לסופרי סת"ם

<div dir="rtl">

## 🎯 סקירה כללית
שרת זה מהווה את הצד האחורי (Backend) של מערכת ניהול הזמנים לסופרי סת"ם. הוא מספק את כל השירותים, API והלוגיקה העסקית הנדרשים לתמיכה במערכת.

## 🛠 טכנולוגיות

- **Node.js** - סביבת הריצה של השרת
- **Express.js** - מסגרת העבודה לבניית ה-API
- **Sequelize** - ORM לניהול בסיס הנתונים
- **MySQL** - בסיס הנתונים
- **JWT** - לאימות ואבטחה
- **bcrypt** - להצפנת סיסמאות
- **nodemailer** - לשליחת מיילים
- **cors** - לניהול בקשות צד לקוח

## 🏗 מבנה הפרויקט

```
stam-server/
├── controllers/      # בקרים לניהול הלוגיקה העסקית
├── database/         # הגדרות ומודלים של בסיס הנתונים
├── middlewares/      # middleware לאבטחה ובקרת גישה
├── routers/          # הגדרת נתיבי ה-API
├── services/         # שירותים עסקיים
└── server.js         # קובץ הפעלת השרת הראשי
```

## 🚀 התקנה והפעלה

### דרישות מקדימות
- Node.js גרסה 14 ומעלה
- MySQL שרת
- npm (מנהל החבילות של Node.js)

### שלבי התקנה

1. **שכפול הפרויקט**
```bash
git clone https://github.com/YAIR-DAHN/stam-server.git
cd stam-server
```

2. **התקנת תלויות**
```bash
npm install
```

3. **הגדרת משתני סביבה**
צור קובץ `.env` בתיקיית הפרויקט והגדר את המשתנים הבאים:
```env
DB_HOST=localhost
DB_USER=your_username
DB_PASS=your_password
DB_NAME=your_database
JWT_SECRET=your_secret
```

4. **הפעלת השרת**
```bash
npm start
```

## 📡 נקודות קצה API עיקריות

### משתמשים
- `POST /api/users/register` - הרשמת משתמש חדש
- `POST /api/users/login` - התחברות משתמש
- `POST /api/users/forgot-password` - שחזור סיסמה

### פרויקטים וחישובים
- `GET /api/calculations` - קבלת חישובי זמנים
- `POST /api/calculations` - יצירת חישוב חדש
- `GET /api/products` - קבלת מוצרים
- `POST /api/products` - הוספת מוצר חדש

## 🔒 אבטחה
- שימוש ב-JWT לאימות משתמשים
- הצפנת סיסמאות עם bcrypt
- הגנה מפני CORS
- Middleware לאימות הרשאות מנהל

## 👥 תרומה לפרויקט
מוזמנים לתרום לפרויקט! אנא צרו Pull Request או פתחו Issue אם נתקלתם בבעיה.

## 📄 רישיון
כל הזכויות שמורות © 2024

</div>
