angular.module('karmaMeter')
    .service('Timer', function (Data, $interval) {
        var active = {},
            timerInterval = 1000,
            timerPromiseHolder = {},
            historyWritten = false,
            timerBuffer = false,
            timerTick = function () {
                var now = new Date();
                if (historyWritten === false) { //first tick
                    historyWritten = true;
                    Data.addHistory({
                        id: active,
                        start: now
                    });
                    timerBuffer = {
                        value: Data.karma.good - Data.karma.bad
                    };
                    if (timerBuffer.value < 0) {
                        Data.active.bad = true;
                    } else {
                        Data.active.good = true;
                    }
                } else {
                    var timeDiff = (now.getTime() - timerBuffer.oldTime.getTime()) / 1000,
                        valueDiff = timeDiff/60 * active.multiplier,
                        goodBad = (active.good) ? 1 : -1,
                        oldValue = Math.round(timerBuffer.value),
                        newValue = Math.round(timerBuffer.value + goodBad * valueDiff);
                    if (oldValue != newValue) {
                        Data.setKarma(newValue);
                    }
                    timerBuffer.value += (goodBad * valueDiff);
                }
                timerBuffer.oldTime = now;
            };

        return {
            stop: function (id) {
                if (angular.isDefined(timerPromiseHolder.tp)) {
                    Data.active.good = false;
                    Data.active.bad = false;
                    var done = $interval.cancel(timerPromiseHolder.tp);
                    timerPromiseHolder.tp = undefined;
                    Data.addHistory({
                        id: active.id,
                        end: new Date()
                    });
                    active = false;
                    historyWritten = false;
                    timerBuffer = false;
                }
            },
            getActive: function() {return active;},
            start: function (id) {
                active = Data.getDeed(id);
                timerTick();
                timerPromiseHolder.tp = $interval(timerTick, timerInterval);
            }
        }
    });
