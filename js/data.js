angular.module('karmaMeter')
    .service('Data', function () {
        var karma = {
                good: 0,
                bad: 0
            },
            active = {
                good: false,
                bad: false
            },
            lastID = 2,
            deeds = {
                good: [
                    {
                        id: 1,
                        name: "work",
                        multiplier: 1
                    }
                ],
                bad: [
                    {
                        id: 2,
                        name: "play",
                        multiplier: 2
                    }

                ]
            },
            history = [ //TODO
                {
                    id: 2,
                    start: 1 //datetime
                },
                {
                    id: 2,
                    end: 1 //datetime
                },
            ],
            newGoodDeed = {
                name: "",
                multiplier: 1
            },
            newBadDeed = {
                name: "",
                multiplier: 1
            };

        return {
            karma: karma,
            setKarma: function (newKarma) {
                if (newKarma < 0) {
                    karma.good = 0;
                    karma.bad = Math.abs(newKarma);
                    active.good = false;
                    active.bad = true;
                } else {
                    karma.bad = 0;
                    karma.good = newKarma;
                    active.bad = false;
                    active.good = true;
                }
            },
            newGoodDeed: newGoodDeed,
            newBadDeed: newBadDeed,
            addDeed: function () {
                if (newGoodDeed.name != "") {
                    newGoodDeed.id = lastID + 1;
                    lastID += 1;
                    deeds.good.push(JSON.parse(JSON.stringify(newGoodDeed)));
                    newGoodDeed = {
                        name: "",
                        multiplier: 1
                    };
                } else if (newBadDeed.name != "") {
                    newBadDeed.id = lastID + 1;
                    lastID += 1;
                    deeds.bad.push(JSON.parse(JSON.stringify(newBadDeed)));
                    newBadDeed = {
                        name: "",
                        multiplier: 1
                    };
                }
            },
            active: active,
            deeds: deeds,
            history: history,
            getDeed: function (id) {
                for (var i in deeds.good) {
                    if (deeds.good[i].id == id) {
                        deeds.good[i].good = true;
                        return deeds.good[i];
                    }
                }
                for (var i in deeds.bad) {
                    if (deeds.bad[i].id == id) {
                        deeds.good[i].good = false;
                        return deeds.bad[i];
                    }
                }
                console.err("deed not found");
                return false; //this actually shouldn't happen
            }
        }
    }
)
;
