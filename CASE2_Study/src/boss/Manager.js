"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
var Input_1 = require("../input/Input");
var Manager = /** @class */ (function () {
    function Manager() {
        this.timetableweek = [];
    }
    Manager.prototype.showAllPlayers = function () {
        return Manager.managerplayer;
    };
    Manager.prototype.addNewPlayer = function (player) {
        Manager.managerplayer.push(player);
    };
    Manager.prototype.updatePlayer = function (value, player) {
        Manager.managerplayer[value] = player;
    };
    Manager.prototype.deletePlayer = function (value) {
        Manager.managerplayer.splice(value, 1);
    };
    Manager.prototype.findPlayerName = function (name) {
        var index = -1;
        var flag = 0;
        Manager.managerplayer.forEach(function (value, index) {
            if (value.name == name) {
                console.table(Manager.managerplayer[index]);
                flag++;
            }
        });
        if (index == -1) {
            return 'Khong co cau thu can tim';
        }
    };
    Manager.prototype.findPlayerAge = function (age) {
        var index = -1;
        var flag = 0;
        Manager.managerplayer.forEach(function (value, index) {
            if (value.age == age) {
                console.table(Manager.managerplayer[index]);
                flag++;
            }
        });
        if (index == -1) {
            return 'Khong co cau thu can tim';
        }
    };
    Manager.prototype.findPlayerHeight = function (height) {
        var index = -1;
        var flag = 0;
        Manager.managerplayer.forEach(function (value, index) {
            if (value.height == height) {
                console.table(Manager.managerplayer[index]);
                flag++;
            }
        });
        if (index == -1) {
            return 'Khong co cau thu can tim';
        }
    };
    Manager.prototype.findPlayerWeight = function (weight) {
        var index = -1;
        var flag = 0;
        Manager.managerplayer.forEach(function (value, index) {
            if (value.weight == weight) {
                console.table(Manager.managerplayer[index]);
                flag++;
            }
        });
        if (index == -1) {
            return 'Khong co cau thu can tim';
        }
    };
    Manager.prototype.findPlayerClothersNumber = function (clothersnumber) {
        var index = -1;
        var flag = 0;
        Manager.managerplayer.forEach(function (value, index) {
            if (value.clothersnumber == clothersnumber) {
                console.table(Manager.managerplayer[index]);
                flag++;
            }
        });
        if (index == -1) {
            return 'Khong co cau thu can tim';
        }
    };
    Manager.prototype.findPlayerNations = function (nations) {
        var index = -1;
        var flag = 0;
        Manager.managerplayer.forEach(function (value, index) {
            if (value.nation == nations) {
                console.table(Manager.managerplayer[index]);
                flag++;
            }
        });
        if (index == -1) {
            return 'Khong co cau thu can tim';
        }
    };
    Manager.prototype.swap = function (j) {
        var temp = Manager.managerplayer[j];
        Manager.managerplayer[j] = Manager.managerplayer[j + 1];
        Manager.managerplayer[j + 1] = temp;
    };
    Manager.prototype.sortPlayersAgeAscending = function () {
        var n = Manager.managerplayer.length;
        for (var i = 1; i < n; i++) {
            var key = Manager.managerplayer[i].age;
            var j = i - 1;
            while (j >= 0 && Manager.managerplayer[j].age > key) {
                this.swap(j);
                j = j - 1;
            }
            Manager.managerplayer[j + 1].age = key;
        }
        return Manager.managerplayer;
    };
    Manager.prototype.sortPlayersAgeDecrease = function () {
        var n = Manager.managerplayer.length;
        for (var i = 1; i < n; i++) {
            var key = Manager.managerplayer[i].age;
            var j = i - 1;
            while (j >= 0 && Manager.managerplayer[j].age < key) {
                this.swap(j);
                j = j - 1;
            }
            Manager.managerplayer[j + 1].age = key;
        }
        return Manager.managerplayer;
    };
    Manager.prototype.sortPlayersGoalsAscending = function () {
        var n = Manager.managerplayer.length;
        for (var i = 1; i < n; i++) {
            var key = Manager.managerplayer[i].numbergoals;
            var j = i - 1;
            while (j >= 0 && Manager.managerplayer[j].numbergoals > key) {
                this.swap(j);
                j = j - 1;
            }
            Manager.managerplayer[j + 1].numbergoals = key;
        }
        return Manager.managerplayer;
    };
    Manager.prototype.sortPlayersGoalsDecrease = function () {
        var n = Manager.managerplayer.length;
        for (var i = 1; i < n; i++) {
            var key = Manager.managerplayer[i].numbergoals;
            var j = i - 1;
            while (j >= 0 && Manager.managerplayer[j].numbergoals < key) {
                this.swap(j);
                j = j - 1;
            }
            Manager.managerplayer[j + 1].numbergoals = key;
        }
        return Manager.managerplayer;
    };
    Manager.prototype.sortPlayersWeightAscending = function () {
        var n = Manager.managerplayer.length;
        for (var i = 1; i < n; i++) {
            var key = Manager.managerplayer[i].weight;
            var j = i - 1;
            while (j >= 0 && Manager.managerplayer[j].weight > key) {
                this.swap(j);
                j = j - 1;
            }
            Manager.managerplayer[j + 1].weight = key;
        }
        return Manager.managerplayer;
    };
    Manager.prototype.sortPlayersWeightDecrease = function () {
        var n = Manager.managerplayer.length;
        for (var i = 1; i < n; i++) {
            var key = Manager.managerplayer[i].weight;
            var j = i - 1;
            while (j >= 0 && Manager.managerplayer[j].weight < key) {
                this.swap(j);
                j = j - 1;
            }
            Manager.managerplayer[j + 1].weight = key;
        }
        return Manager.managerplayer;
    };
    Manager.prototype.sortPlayersHeightAscending = function () {
        var n = Manager.managerplayer.length;
        for (var i = 1; i < n; i++) {
            var key = Manager.managerplayer[i].height;
            var j = i - 1;
            while (j >= 0 && Manager.managerplayer[j].height > key) {
                this.swap(j);
                j = j - 1;
            }
            Manager.managerplayer[j + 1].height = key;
        }
        return Manager.managerplayer;
    };
    Manager.prototype.sortPlayersHeightDecrease = function () {
        var n = Manager.managerplayer.length;
        for (var i = 1; i < n; i++) {
            var key = Manager.managerplayer[i].height;
            var j = i - 1;
            while (j >= 0 && Manager.managerplayer[j].height < key) {
                this.swap(j);
                j = j - 1;
            }
            Manager.managerplayer[j + 1].height = key;
        }
        return Manager.managerplayer;
    };
    Manager.prototype.sortPlayersSalaryAscending = function () {
        var n = Manager.managerplayer.length;
        for (var i = 1; i < n; i++) {
            var key = Manager.managerplayer[i].salary;
            var j = i - 1;
            while (j >= 0 && Manager.managerplayer[j].salary > key) {
                this.swap(j);
                j = j - 1;
            }
            Manager.managerplayer[j + 1].salary = key;
        }
        return Manager.managerplayer;
    };
    Manager.prototype.sortPlayersSalaryDecrease = function () {
        var n = Manager.managerplayer.length;
        for (var i = 1; i < n; i++) {
            var key = Manager.managerplayer[i].salary;
            var j = i - 1;
            while (j >= 0 && Manager.managerplayer[j].salary < key) {
                this.swap(j);
                j = j - 1;
            }
            Manager.managerplayer[j + 1].salary = key;
        }
        return Manager.managerplayer;
    };
    Manager.prototype.addNewTimeTable = function (timetable) {
        this.timetableweek.push(timetable);
    };
    Manager.prototype.updateTimeTable = function (value, timetable) {
        Manager.managercalendar[value] = timetable;
    };
    Manager.prototype.deleteTimeTable = function (value) {
        Manager.managercalendar.splice(value, 1);
    };
    Manager.prototype.showTimeTable = function () {
        return this.timetableweek;
    };
    Manager.prototype.addNewSchedule = function (schedule) {
        Manager.managercalendar.push(schedule);
    };
    Manager.prototype.updateSchedule = function (value, schedule) {
        Manager.managercalendar[value] = schedule;
    };
    Manager.prototype.deleteSchedule = function (value) {
        Manager.managercalendar.splice(value, 1);
    };
    Manager.prototype.showSchedule = function () {
        return Manager.managercalendar;
    };
    Manager.prototype.addCoach = function (coach) {
        Manager.managercoach.push(coach);
    };
    Manager.prototype.updateCoach = function (value, coach) {
        Manager.managercoach[value] = coach;
    };
    Manager.prototype.deleteCoach = function (index) {
        Manager.managercoach.splice(index, 1);
    };
    Manager.prototype.showCoach = function () {
        return Manager.managercoach;
    };
    Manager.prototype.showContractsCoach = function () {
        return Manager.managercontractcoach;
    };
    Manager.prototype.addContractCoach = function (contractcoach) {
        Manager.managercontractcoach.push(contractcoach);
    };
    Manager.prototype.updateContractCoach = function (index, contractcoach) {
        Manager.managercontractcoach[index] = contractcoach;
    };
    Manager.prototype.deleteContractCoach = function (index) {
        Manager.managercontractcoach.splice(index, 1);
    };
    Manager.prototype.showInvestor = function () {
        return Manager.managerinvestors;
    };
    Manager.prototype.addInvestor = function (investor) {
        Manager.managerinvestors.push(investor);
    };
    Manager.prototype.updateInvestor = function (index, investor) {
        Manager.managerinvestors[index] = investor;
    };
    Manager.prototype.deleteInvestor = function (index) {
        Manager.managerinvestors.splice(index, 1);
    };
    Manager.prototype.showContractsInvestor = function () {
        return Manager.managercontractinvestor;
    };
    Manager.prototype.addContractInvestor = function (contractinvestor) {
        Manager.managercontractinvestor.push(contractinvestor);
    };
    Manager.prototype.updateContractInvestor = function (index, contractinvestor) {
        Manager.managercontractinvestor[index] = contractinvestor;
    };
    Manager.prototype.deleteContractInvestor = function (index) {
        Manager.managercontractinvestor.splice(index, 1);
    };
    Manager.prototype.allFund = function () {
        var inputMenu = new Input_1.Input();
        return Manager.fund = inputMenu.inputInvestor().investmentamount;
        console.log();
    };
    Manager.prototype.annualProfit = function (id) {
        var value = Manager.managercontractinvestor.findIndex(function (item) {
            return (item._investor._id == id);
        });
        if (value == -1) {
            return -1;
        }
        else {
            var profit = 1;
            // console.log(Manager.managercontractinvestor[value]._annualprofit);
            console.table(Manager.managercontractinvestor[value]);
            // console.log(value)
            profit = (((Manager.managercontractinvestor[value]._investor.investmentamount) * (Manager.managercontractinvestor[value].annualprofit)) / 100);
            return profit;
        }
    };
    Manager.managerplayer = [];
    Manager.managercalendar = [];
    Manager.managercoach = [];
    Manager.managerinvestors = [];
    Manager.managercontractcoach = [];
    Manager.managercontractinvestor = [];
    Manager.fund = 0;
    return Manager;
}());
exports.Manager = Manager;
