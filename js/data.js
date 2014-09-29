angular.module('karmaMeter')
    .service('Data', function () {
        var karma = {
                good: 0,
                bad: 25
            },
            active = true;

        return {
            karma: karma,
            setKarma: function (newKarma) {
                if (newKarma < 0) {
                    karma.good = 0;
                    karma.bad = Math.abs(newKarma);
                } else {
                    karma.bad = 0;
                    karma.good = newKarma;
                }
            },
            active: active
        }
    });
