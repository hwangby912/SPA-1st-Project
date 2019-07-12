var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    // get 방식으로 오는 경우, signup.ejs file로 객체의 값들을 넘겨줌
    res.render('signup', {
        loginState : req.session.loginState,
        loginID : req.session.userid,
        loginPW : req.session.userpw,
        loginName : req.session.name,
        loginEmail : req.session.email,
        loginPhone : req.session.phone,
    });
});

router.post('/', (req, res, next) => {
    // post 방식으로 오는 경우, req.body 안에 담긴 값들을 req.session 에 매칭되는 곳으로 넘겨줌
    req.session.userid = req.body.userid;
    req.session.userpw = req.body.userpw;
    req.session.name = req.body.name;
    req.session.email = req.body.email;
    req.session.phone = req.body.phone;

    const result = {
        txt : '회원 가입을 축하드립니다. ' + req.session.name + '님'
    };

    // result를 JSON 형태로 변경한 뒤 호출된 곳으로 넘겨줌
    res.json(JSON.stringify(result));
});

module.exports = router;