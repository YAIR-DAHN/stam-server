import counterController from '../controllers/counter-controler.js';
import DeviceDetector from "node-device-detector";
const counterLogin = async (req, res, next,) => {


    const detector = new DeviceDetector({
        clientIndexes: true,
        deviceIndexes: true,
        deviceAliasCode: false,
    });

    const useragent = req.headers['user-agent'];
    req.useragent = useragent;
    const result = detector.detect(useragent);
    // console.log('result parse', result);

    let userName = 'משתמש אנונימי';
    let userId = 0;

    let localStorageTest = () => {
        if (typeof req.body.firstName === "undefined" || req.body.firstName === null) {
            userName = 'משתמש אנונימי';
            userId = 0;
        }
        else {
            userName = req.body.first - name + ' ' + req.body.last - name;
            userId = req.body.id;
        }
    }
    localStorageTest();

    const userData = {
        loginDate: new Date(),
        loginBrowser: result.client.name,
        loginOs: result.os.name,
        loginDeviceType: result.device.type,
        loginTo: req.url,
        loginFrom: req.headers['referer'],
        loginUserName: userName,
        loginUserId: userId,
    };
    await counterController.create(userData);

    return next();

};

export default counterLogin;
