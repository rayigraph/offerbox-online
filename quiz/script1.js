(function () {
    function _0x167a84(_0x2e5740) {
        var _0x364c2a = document.createElement(`div`);
        _0x364c2a.className = `question`;
        var _0x5a497d = document.createElement(`span`);
        _0x5a497d.className = `questionNum`, _0x5a497d.innerHTML = _0x2e5740 + 0x1 + '.', _0x364c2a.appendChild(_0x5a497d);
        var _0x167a84 = document.createElement(`div`);
        if (_0x167a84.className = `questionName`, _0x167a84.innerHTML = this.options.quizQuestions[_0x2e5740].question, _0x364c2a.appendChild(_0x167a84), document.getElementsByClassName(`single-question-container` + _0x2e5740)[0].appendChild(_0x364c2a), `radio` == this.options.quizQuestions[_0x2e5740].type)
            for (
                var _0x5611e8 = 0; _0x5611e8 < this.options.quizQuestions[_0x2e5740].options.length; _0x5611e8++) _0x2dc66d.call(this, _0x2e5740, _0x5611e8);
        else if (`checkbox` == this.options.quizQuestions[_0x2e5740].type)
            for (_0x5611e8 = 0; _0x5611e8 < this.options.quizQuestions[_0x2e5740].options.length; _0x5611e8++) _0x153258.call(this, _0x2e5740, _0x5611e8);
    }

    function _0x2dc66d(_0x3c08d6, _0x8d4f63) {
        var _0x60ee72 = document.createElement(`div`);
        _0x60ee72.className = `option`;
        var _0x167a84 = `<input type=\x27radio\x27 id=\x27radio` + _0x3c08d6 + _0x8d4f63 + `\x27 name=\x27radio` + _0x3c08d6 + `\x27 value=` + _0x8d4f63 + ` /><label for=\x27radio` + _0x3c08d6 + _0x8d4f63 + `\x27 name=\x27radio` + _0x3c08d6 + '\x27>' + data[_0x3c08d6].options[_0x8d4f63].value + `</label>`;
        _0x60ee72.innerHTML = _0x167a84, document.getElementsByClassName(`single-question-container` + _0x3c08d6)[0].appendChild(_0x60ee72);
    }

    function _0x153258(_0x3c7705, _0x2d756e) {
        var _0x5d75a4 = document.createElement(`div`);
        _0x5d75a4.className = `option`;
        var _0x167a84 = '<input type=\x27checkbox\x27 id=\x27checkbox' + _0x3c7705 + _0x2d756e + `\x27 name=\x27checkbox` + _0x3c7705 + `\x27 value=` + _0x2d756e + ` /><label for=\x27checkbox` + _0x3c7705 + _0x2d756e + `\x27 name=\x27checkbox` + _0x3c7705 + '\x27>' + data[_0x3c7705].options[_0x2d756e].value + '</label>';
        _0x5d75a4.innerHTML = _0x167a84, document.getElementsByClassName(`single-question-container` + _0x3c7705)[0].appendChild(_0x5d75a4);
    }

    function _0x67946b(_0x119fd1) {
        if ('' != this.options.quizQuestions[_0x119fd1].explanation) {
            var _0x2b1682 = document.createElement(`div`);
            _0x2b1682.innerHTML = `Explanation: ` + this.options.quizQuestions[_0x119fd1].explanation, document.getElementsByClassName(`single-question-container` + _0x119fd1)[0].appendChild(_0x2b1682);
        }
    }

    this.Quiz = function () {
            this.score = 0;
            arguments[this.currentQuestion = 0] 
                && `object` == typeof arguments[0] 
                && (
                    this.options = function (_0x341a96, _0x27938b) {
                        var _0x5977e5;
                        for (_0x5977e5 in _0x27938b) {
                            _0x27938b.hasOwnProperty(_0x5977e5) 
                                && (_0x341a96[_0x5977e5] = _0x27938b[_0x5977e5]);
                        }
                        return _0x341a96;
                    }(
                        {
                            'quizQuestions': {},
                            'elementId': '',
                            'showAllQuestions': !0,
                            'showTimer': !0
                        }, 
                        arguments[0]
                    )),
                    function () {
                        var _0x32d1c7 = document.getElementById(this.options.elementId);

                        this.questionContainer = document.createElement('div'), 
                        this.questionContainer.className = `question-container`, 
                        _0x32d1c7.appendChild(this.questionContainer);

                        for (var _0x102230 = 0; _0x102230 < this.options.quizQuestions.length; _0x102230++) {
                            var _0x508e9d = document.createElement(`div`);
                            _0x508e9d.className = 'single-question-container single-question-container' + _0x102230, 
                            this.questionContainer.appendChild(_0x508e9d), 
                            _0x167a84.call(this, _0x102230);
                        }
                        
                        (
                            function () {
                                this.submitPrnt = document.createElement(`div`), this.submitPrnt.className = 'submitPrnt', this.submitButton = document.createElement(`button`), this.submitButton.className = 'submit-button', this.submitButton.innerHTML = `Submit`, this.submitPrnt.appendChild(this.submitButton), this.questionContainer.appendChild(this.submitPrnt), this.submitButton.addEventListener(`click`, onSubmitQuiz.bind(this));
                            } .call(this),

                            function () {
                                if (!this.options.showAllQuestions) {
                                    var _0x32d1c7 = document.getElementsByClassName(`single-question-container`);
                                    for (var _0x102230 in _0x32d1c7) {
                                        _0x32d1c7.hasOwnProperty(_0x102230) 
                                            && _0x102230 != this.currentQuestion 
                                            && _0x32d1c7[_0x102230].setAttribute('style', `display: none;`);
                                    }(
                                        function () {
                                            this.nextButton = document.createElement(`button`), this.nextButton.className = 'next-button', this.nextButton.innerHTML = `Next`, this.submitPrnt.appendChild(this.nextButton), 0x1 == this.options.quizQuestions.length ? (this.nextButton.setAttribute(`style`, `display: none;`), this.submitButton.setAttribute(`style`, `display: block;`)) : this.submitButton.setAttribute('style', 'display: none;');
                                            this.nextButton.addEventListener(`click`, onNextButton.bind(this));
                                        } .call(this)
                                    );
                                }
                            } .call(this), 

                            function () {
                                if (this.options.showTimer) {
                                    var _0x508e9d = document.createElement(`span`);

                                    _0x508e9d.className = `timer`, 
                                    _0x508e9d.innerHTML = `00:00:00`, 
                                    this.submitPrnt.appendChild(_0x508e9d);

                                    var _0x167a84 = 0;

                                    this.timerInterval = setInterval(function () {
                                        _0x167a84++;
                                        var _0x32d1c7 = new Date(null);
                                        _0x32d1c7.setSeconds(_0x167a84);
                                        var _0x102230 = _0x32d1c7.toISOString().substr(0xb, 0x8);
                                        _0x508e9d.innerHTML = _0x102230;
                                    }, 0x3e8);
                                }
                            } .call(this), 
                            
                            function () {
                                var _0x32d1c7 = document.getElementById(this.options.elementId);

                                this.myLink = document.createElement('div'), 
                                this.myLink.style.fontSize = '90%', 
                                this.myLink.style.textAlign = `center`, 
                                this.myLink.innerHTML = 'This quiz has been created using the tool <a target=\x27_blank\x27 href=\x27https://www.htmlcodegenerator-tools.com/2019/10/html-javascript-quiz-generator-score-timer.html\x27>HTML Quiz Generator</a>', 
                                _0x32d1c7.appendChild(this.myLink);
                            } .call(this), 
                            
                            function () {
                                var _0x32d1c7 = document.getElementById(this.options.elementId);

                                _0x32d1c7.lastChild.innerHTML.length <= 0xc8 
                                    && 0xb4 <= _0x32d1c7.lastChild.innerHTML.length 
                                    || _0x32d1c7.remove();
                            } .call(this)
                        );
                    } .call(this);
        }, 
        
        onNextButton = function () {
            this.currentQuestion++;
            var _0x30aa9a = document.getElementsByClassName(`single-question-container`);
            for (var _0xb4dd3b in _0x30aa9a) {
                _0x30aa9a.hasOwnProperty(_0xb4dd3b) 
                    && (_0x30aa9a[_0xb4dd3b].setAttribute('style', `display: none;`),

                _0xb4dd3b == this.currentQuestion 
                    && _0x30aa9a[_0xb4dd3b].setAttribute(`style`, `display: block;`));
            }
            this.currentQuestion == this.options.quizQuestions.length - 0x1 
                && (this.submitButton.setAttribute(`style`, `display: block;`), 
            
            this.nextButton.setAttribute(`style`, `display: none;`));
        },

        onSubmitQuiz = function () {
            document.getElementById(this.options.elementId);
            this.submitButton.setAttribute(`style`, `display: none;`);
            var _0x3bbba0 = document.getElementsByClassName(`single-question-container`);

            for (var _0x5edfb1 in _0x3bbba0) {
                _0x3bbba0.hasOwnProperty(_0x5edfb1) 
                    && _0x3bbba0[_0x5edfb1].setAttribute(`style`, 'display: block;');
            }

            for (var _0x1b9f10 = 0; _0x1b9f10 < this.options.quizQuestions.length; _0x1b9f10++) {
                if (`radio` == this.options.quizQuestions[_0x1b9f10].type) {
                    for (_0x5edfb1 = 0; _0x5edfb1 < this.options.quizQuestions[_0x1b9f10].options.length; _0x5edfb1++) {
                        document.getElementById(`radio` + _0x1b9f10 + _0x5edfb1).disabled = !0,
                        document.getElementById(`radio` + _0x1b9f10 + _0x5edfb1).checked 
                            && !this.options.quizQuestions[_0x1b9f10].options[_0x5edfb1].right 
                                ? document.getElementById(`radio` + _0x1b9f10 + _0x5edfb1).className = `incorrect` 
                                : document.getElementById(`radio` + _0x1b9f10 + _0x5edfb1).checked 
                            && this.options.quizQuestions[_0x1b9f10].options[_0x5edfb1].right 
                                ? (
                                    document.getElementById(`radio` + _0x1b9f10 + _0x5edfb1).className = `correct`, 
                                    this.score++
                                ) : !document.getElementById(`radio` + _0x1b9f10 + _0x5edfb1).checked 
                            && this.options.quizQuestions[_0x1b9f10].options[_0x5edfb1].right 
                            && (document.getElementById(`radio` + _0x1b9f10 + _0x5edfb1).className = `correct`);
                    }
                }
                else if (`checkbox` == this.options.quizQuestions[_0x1b9f10].type) {
                    var _0x167a84 = !0x1;
                    for (_0x5edfb1 = 0; _0x5edfb1 < this.options.quizQuestions[_0x1b9f10].options.length; _0x5edfb1++) {
                        document.getElementById('checkbox' + _0x1b9f10 + _0x5edfb1).disabled = !0, 
                        document.getElementById('checkbox' + _0x1b9f10 + _0x5edfb1).checked 
                            && !this.options.quizQuestions[_0x1b9f10].options[_0x5edfb1].right 
                                ? document.getElementById(`checkbox` + _0x1b9f10 + _0x5edfb1).className = 'incorrect' 
                                : document.getElementById(`checkbox` + _0x1b9f10 + _0x5edfb1).checked 
                            && this.options.quizQuestions[_0x1b9f10].options[_0x5edfb1].right 
                                ? document.getElementById('checkbox' + _0x1b9f10 + _0x5edfb1).className = `correct` 
                                : !document.getElementById('checkbox' + _0x1b9f10 + _0x5edfb1).checked 
                            && this.options.quizQuestions[_0x1b9f10].options[_0x5edfb1].right 
                            && (document.getElementById(`checkbox` + _0x1b9f10 + _0x5edfb1).className = 'correct'), 
                        document.getElementById(`checkbox` + _0x1b9f10 + _0x5edfb1).checked 
                            ? this.options.quizQuestions[_0x1b9f10].options[_0x5edfb1].right 
                                || (_0x167a84 = !0) 
                            : document.getElementById(`checkbox` + _0x1b9f10 + _0x5edfb1).checked 
                                || this.options.quizQuestions[_0x1b9f10].options[_0x5edfb1].right 
                                && (_0x167a84 = !0);

                    }
                    _0x167a84 || this.score++;
                }
                _0x67946b.call(this, _0x1b9f10);
            }
            this.options.showTimer && clearInterval(this.timerInterval);
            var _0x46bbb2 = document.createElement(`span`);
            _0x46bbb2.innerHTML = `Your Score: ` + this.score + '/' + this.options.quizQuestions.length, this.submitPrnt.appendChild(_0x46bbb2);

            var formData = new FormData();
            formData.append("score", this.score);

            var oReq = new XMLHttpRequest();
            oReq.onload = function () { console.log('done') }
            oReq.open("post", "./submit.php");
            oReq.send(formData);
        };
}());