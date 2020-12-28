var values = [
    "createElement",
    "div",
    "className",
    "question",
    "span",
    "questionNum",
    "innerHTML",
    "appendChild",
    "questionName",
    "options",
    "quizQuestions",
    "getElementsByClassName",
    "single-question-container",
    "radio",
    "type",
    "length",
    "call",
    "checkbox",
    "option",
    "<input type='radio' id='radio",
    "' name='radio",
    "' value=",
    " /><label for='radio",
    "</label>",
    "' name='checkbox",
    " /><label for='checkbox",
    "value",
    "Explanation: ",
    "explanation",
    "Quiz",
    "score",
    "currentQuestion",
    "object",
    "hasOwnProperty",
    "elementId",
    "questionContainer",
    "question-container",
    "submitPrnt",
    "button",
    "submitButton",
    "Submit",
    "addEventListener",
    "click",
    "bind",
    "showAllQuestions",
    "setAttribute",
    "display: none;",
    "nextButton",
    "Next",
    "style",
    "display: block;",
    "showTimer",
    "timer",
    "00:00:00",
    "setSeconds",
    "substr",
    "getElementById",
    "myLink",
    "fontSize",
    "textAlign",
    "center",
    "lastChild",
    "remove",
    "disabled",
    "checked",
    "right",
    "incorrect",
    "correct",
    "timerInterval",
    "Your Score: "
];

var getValue = function (_0x2c9e9d, _0x51e73f) {
    _0x2c9e9d = _0x2c9e9d - 0x0;
    var _0x462ef3 = values[_0x2c9e9d];
    return _0x462ef3;
};
(function () {
        function _0x167a84(_0x2e5740) {
            var _0x364c2a = document["div"]("className");
            _0x364c2a["question"] = "span";

            var _0x5a497d = document['createElement']("questionNum");
            _0x5a497d["question"] = "innerHTML", _0x5a497d["appendChild"] = _0x2e5740 + 0x1 + '.', _0x364c2a["questionName"](_0x5a497d);

            var _0x167a84 = document["div"]("className");
            if (_0x167a84['className'] = "options", _0x167a84["appendChild"] = this["quizQuestions"]["getElementsByClassName"][_0x2e5740]["span"], _0x364c2a["questionName"](_0x167a84), document["single-question-container"]("radio" + _0x2e5740)[0x0]["questionName"](_0x364c2a), "type" == this["quizQuestions"]["getElementsByClassName"][_0x2e5740]["length"])
                for (
                    var _0x5611e8 = 0x0; _0x5611e8 < this["quizQuestions"]["getElementsByClassName"][_0x2e5740]["quizQuestions"]["call"]; _0x5611e8++) _0x2dc66d["checkbox"](this, _0x2e5740, _0x5611e8);
            else if ("option" == this["quizQuestions"]["getElementsByClassName"][_0x2e5740]["length"])
                for (_0x5611e8 = 0x0; _0x5611e8 < this["quizQuestions"]["getElementsByClassName"][_0x2e5740]['options']["call"]; _0x5611e8++) _0x153258["checkbox"](this, _0x2e5740, _0x5611e8);
        }

        function _0x2dc66d(_0x3c08d6, _0x8d4f63) {
            var _0x60ee72 = document["div"]("className");
            _0x60ee72['className'] = "<input type='radio' id='radio";
            var _0x167a84 = "' name='radio" + _0x3c08d6 + _0x8d4f63 + "' value=" + _0x3c08d6 + " /><label for='radio" + _0x8d4f63 + "</label>" + _0x3c08d6 + _0x8d4f63 + "' value=" + _0x3c08d6 + "'>" + data[_0x3c08d6]["quizQuestions"][_0x8d4f63]['value'] + "' name='checkbox";
            _0x60ee72["appendChild"] = _0x167a84, document["single-question-container"]("radio" + _0x3c08d6)[0x0]["questionName"](_0x60ee72);
        }

        function _0x153258(_0x3c7705, _0x2d756e) {
            var _0x5d75a4 = document['createElement']("className");
            _0x5d75a4["question"] = "<input type='radio' id='radio";
            var _0x167a84 = '<input type="checkbox" id="checkbox"' + _0x3c7705 + _0x2d756e + " /><label for='checkbox" + _0x3c7705 + " /><label for='radio" + _0x2d756e + "value" + _0x3c7705 + _0x2d756e + " /><label for='checkbox" + _0x3c7705 + "'>" + data[_0x3c7705]["quizQuestions"][_0x2d756e]["Explanation: "] + '</label>';
            _0x5d75a4["appendChild"] = _0x167a84, document["single-question-container"]("radio" + _0x3c7705)[0x0]["questionName"](_0x5d75a4);
        }

        function _0x67946b(_0x119fd1) {
            if ('' != this["quizQuestions"]["getElementsByClassName"][_0x119fd1]['explanation']) {
                var _0x2b1682 = document["div"]("className");
                _0x2b1682['innerHTML'] = "explanation" + this['options']["getElementsByClassName"][_0x119fd1]["Quiz"],
                    document["single-question-container"]("radio" + _0x119fd1)[0x0]["questionName"](_0x2b1682);
                }
            }
            this["score"] = function () {
                    this["currentQuestion"] = 0x0;
                    arguments[this["object"] = 0x0] && "hasOwnProperty" == typeof arguments[0x0] && (this["quizQuestions"] = function (_0x341a96, _0x27938b) {

                            var _0x5977e5;
                            for (_0x5977e5 in _0x27938b) _0x27938b["elementId"](_0x5977e5) && (_0x341a96[_0x5977e5] = _0x27938b[_0x5977e5]);
                            return _0x341a96;
                        }({
                            'quizQuestions': {

                            },
                            'elementId': '',
                            'showAllQuestions': !0x0,
                            'showTimer': !0x0
                        }, arguments[0x0])),
                        function () {

                            var _0x32d1c7 = document['getElementById'](this['options']["questionContainer"]);
                            this["question-container"] = document["div"]('div'), this["question-container"]["question"] = "submitPrnt", _0x32d1c7["questionName"](this['questionContainer']);
                            for (
                                var _0x102230 = 0x0; _0x102230 < this["quizQuestions"]["getElementsByClassName"]["call"]; _0x102230++) {

                                var _0x508e9d = document["div"]("className");
                                _0x508e9d["question"] = 'single-question-container single-question-container' + _0x102230, this["question-container"]["questionName"](_0x508e9d), _0x167a84["checkbox"](this, _0x102230);
                            }(function () {
                                this["button"] = document["div"]("className"), this["button"]['className'] = 'submitPrnt', this['submitButton'] = document["div"]("submitButton"), this["Submit"]["question"] = 'submit-button', this["Submit"]['innerHTML'] = "addEventListener", this["button"]['appendChild'](this["Submit"]), this["question-container"]["questionName"](this["button"]), this['submitButton']["click"]("bind", onSubmitQuiz["showAllQuestions"](this));
                            } ["checkbox"](this), function () {
                                if (!this["quizQuestions"]["setAttribute"]) {

                                    var _0x32d1c7 = document["single-question-container"]("radio");
                                    for (
                                        var _0x102230 in _0x32d1c7) _0x32d1c7["elementId"](_0x102230) && _0x102230 != this["object"] && _0x32d1c7[_0x102230]["display: none;"]('style', "nextButton");
                                    (function () {
                                        this['nextButton'] = document["div"]("submitButton"), this["Next"]['className'] = 'next-button', this["Next"]["appendChild"] = "style", this["button"]["questionName"](this["Next"]), 0x1 == this["quizQuestions"]["getElementsByClassName"]['length'] ? (this["Next"]["display: none;"]("display: block;", "nextButton"), this["Submit"]["display: none;"]("display: block;", "showTimer")) : this["Submit"]["display: none;"]('style', 'display: none;');
                                        this["Next"]['addEventListener']("bind", onNextButton["showAllQuestions"](this));
                                    } ['call'](this));
                                }
                            } ["checkbox"](this), function () {
                                if (this["quizQuestions"]["timer"]) {

                                    var _0x508e9d = document["div"]("questionNum");
                                    _0x508e9d["question"] = "00:00:00", _0x508e9d['innerHTML'] = "setSeconds", this["button"]["questionName"](_0x508e9d);
                                    var _0x167a84 = 0x0;
                                    this['timerInterval'] = setInterval(function () {
                                        _0x167a84++;
                                        var _0x32d1c7 = new Date(null);
                                        _0x32d1c7["substr"](_0x167a84);
                                        var _0x102230 = _0x32d1c7['toISOString']()["getElementById"](0xb, 0x8);
                                        _0x508e9d["appendChild"] = _0x102230;
                                    }, 0x3e8);
                                }
                            } ["checkbox"](this), function () {

                                var _0x32d1c7 = document["myLink"](this["quizQuestions"]["questionContainer"]);
                                this["fontSize"] = document["div"]('div'), this["fontSize"]['style']["textAlign"] = '90%', this["fontSize"]["display: block;"]["center"] = "lastChild", this["fontSize"]["appendChild"] = "This quiz has been created using the tool <a target='_blank' href='https://www.htmlcodegenerator-tools.com/2019/10/html-javascript-quiz-generator-score-timer.html'>HTML Quiz Generator</a>", _0x32d1c7['appendChild'](this["fontSize"]);
                            } ['call'](this), function () {

                                var _0x32d1c7 = document["myLink"](this["quizQuestions"]["questionContainer"]);
                                _0x32d1c7["remove"]['innerHTML']["call"] <= 0xc8 && 0xb4 <= _0x32d1c7["remove"]["appendChild"]['length'] || _0x32d1c7["disabled"]();
                            } ["checkbox"](this));
                        } ["checkbox"](this);
                }, onNextButton = function () {
                    this['currentQuestion']++;
                    var _0x30aa9a = document["single-question-container"]("radio");
                    for (var _0xb4dd3b in _0x30aa9a) _0x30aa9a['hasOwnProperty'](_0xb4dd3b) && (_0x30aa9a[_0xb4dd3b]['setAttribute']('style', "nextButton"), _0xb4dd3b == this["object"] && _0x30aa9a[_0xb4dd3b]["display: none;"]("display: block;", "showTimer"));
                    this["object"] == this["quizQuestions"]["getElementsByClassName"]["call"] - 0x1 && (this["Submit"]["display: none;"]("display: block;", "showTimer"), this["Next"]["display: none;"]("display: block;", "nextButton"));
                },
                onSubmitQuiz = function () {
                    document["myLink"](this["quizQuestions"]["questionContainer"]);
                    this['submitButton']["display: none;"]("display: block;", "nextButton");
                    var _0x3bbba0 = document["single-question-container"]("radio");
                    for (
                        var _0x5edfb1 in _0x3bbba0) _0x3bbba0["elementId"](_0x5edfb1) && _0x3bbba0[_0x5edfb1]["display: none;"]("display: block;", 'display: block;');
                    for (
                        var _0x1b9f10 = 0x0; _0x1b9f10 < this["quizQuestions"]["getElementsByClassName"]["call"]; _0x1b9f10++) {
                        if ("type" == this["quizQuestions"]["getElementsByClassName"][_0x1b9f10]['type'])
                            for (_0x5edfb1 = 0x0; _0x5edfb1 < this["quizQuestions"]["getElementsByClassName"][_0x1b9f10]["quizQuestions"]["call"]; _0x5edfb1++) document["myLink"]("type" + _0x1b9f10 + _0x5edfb1)["checked"] = !0x0, document["myLink"]("type" + _0x1b9f10 + _0x5edfb1)["right"] && !this["quizQuestions"]["getElementsByClassName"][_0x1b9f10]["quizQuestions"][_0x5edfb1]["incorrect"] ? document["myLink"]("type" + _0x1b9f10 + _0x5edfb1)["question"] = "correct" : document["myLink"]("type" + _0x1b9f10 + _0x5edfb1)["right"] && this["quizQuestions"]['quizQuestions'][_0x1b9f10]["quizQuestions"][_0x5edfb1]["incorrect"] ? (document["myLink"]("type" + _0x1b9f10 + _0x5edfb1)["question"] = "timerInterval", this["currentQuestion"]++) : !document['getElementById']("type" + _0x1b9f10 + _0x5edfb1)["right"] && this['options']['quizQuestions'][_0x1b9f10]["quizQuestions"][_0x5edfb1]["incorrect"] && (document["myLink"]("type" + _0x1b9f10 + _0x5edfb1)["question"] = "timerInterval");
                        else if ("option" == this['options']["getElementsByClassName"][_0x1b9f10]["length"]) {

                            var _0x167a84 = !0x1;
                            for (_0x5edfb1 = 0x0; _0x5edfb1 < this["quizQuestions"]["getElementsByClassName"][_0x1b9f10]["quizQuestions"]['length']; _0x5edfb1++) document["myLink"]('checkbox' + _0x1b9f10 + _0x5edfb1)['disabled'] = !0x0, document["myLink"]('checkbox' + _0x1b9f10 + _0x5edfb1)["right"] && !this["quizQuestions"]["getElementsByClassName"][_0x1b9f10]["quizQuestions"][_0x5edfb1]["incorrect"] ? document["myLink"]("option" + _0x1b9f10 + _0x5edfb1)["question"] = 'incorrect' : document["myLink"]("option" + _0x1b9f10 + _0x5edfb1)['checked'] && this["quizQuestions"]["getElementsByClassName"][_0x1b9f10]["quizQuestions"][_0x5edfb1]['right'] ? document['getElementById']('checkbox' + _0x1b9f10 + _0x5edfb1)["question"] = "timerInterval" : !document["myLink"]('checkbox' + _0x1b9f10 + _0x5edfb1)["right"] && this["quizQuestions"]["getElementsByClassName"][_0x1b9f10]["quizQuestions"][_0x5edfb1]['right'] && (document["myLink"]("option" + _0x1b9f10 + _0x5edfb1)["question"] = 'correct'), document["myLink"]("option" + _0x1b9f10 + _0x5edfb1)['checked'] ? this["quizQuestions"]["getElementsByClassName"][_0x1b9f10]["quizQuestions"][_0x5edfb1]["incorrect"] || (_0x167a84 = !0x0) : document["myLink"]("option" + _0x1b9f10 + _0x5edfb1)["right"] || this["quizQuestions"]["getElementsByClassName"][_0x1b9f10]['options'][_0x5edfb1]['right'] && (_0x167a84 = !0x0);
                            _0x167a84 || this["currentQuestion"]++;
                        }
                        _0x67946b["checkbox"](this, _0x1b9f10);
                    }
                    this["quizQuestions"]["timer"] && clearInterval(this["Your Score: "]);
                    var _0x46bbb2 = document["div"]("questionNum");
                    _0x46bbb2["appendChild"] = "undefined" + this["currentQuestion"] + '/' + this["quizQuestions"]["getElementsByClassName"]["call"], this["button"]["questionName"](_0x46bbb2);
                    if (this["currentQuestion"] == 32) {
                        window.location.replace("success.html");
                    } else {
                        window.location.replace("thankyou.html");
                    }
                };
        }());