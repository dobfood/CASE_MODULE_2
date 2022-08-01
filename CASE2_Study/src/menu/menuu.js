"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menuu = void 0;
var Menuu = /** @class */ (function () {
    function Menuu() {
    }
    Menuu.prototype.menuu = function () {
        console.log('1.dang nhap bang tai khoang user');
        console.log('2.dang nhap bang tai khoang VIP');
    };
    Menuu.prototype.menuLogin = function () {
        console.log('1.Dang nhap');
        console.log('2 Dang Ky');
        console.log('0 Exit');
    };
    Menuu.prototype.menuVIP = function () {
        console.log('1.Boss');
        console.log('2 Coach');
        console.log('3 Investor');
        console.log('0 Exit');
    };
    Menuu.prototype.menuManager = function () {
        console.log('1. Players');
        console.log('2. Coach');
        console.log('3. Investor');
        console.log('4. Schedule');
        console.log('5. Timetable');
        console.log('5. Fund ');
        console.log('0. Exit');
    };
    Menuu.prototype.menuInvestor = function () {
        console.log('1. Show Players');
        console.log('2. Show Coach');
        console.log('3. Annual Profit ');
        console.log('4. Contract ');
        console.log('5. Show Schedule');
        console.log('0. Exit');
    };
    Menuu.prototype.menuCoach = function () {
        console.log('1. ShowPlayers');
        console.log('2. FindPlayers');
        console.log('3. SortPlayers');
        console.log('4. Timetable');
        console.log('5. Schedule');
        console.log('6. Contract');
        console.log('0. Exit');
    };
    Menuu.prototype.menuPlayer = function () {
        console.log('1. ShowCoach');
        console.log('2. Schedule');
        console.log('3. Timetable');
        console.log('4. Exit');
    };
    Menuu.prototype.menuFindPlayers = function () {
        console.log('1. Name');
        console.log('2. Age');
        console.log('3. Weight');
        console.log('4. Height');
        console.log('5. Nation');
        console.log('6. Clothersnumber');
        console.log('0. Exit');
    };
    Menuu.prototype.menuSortPlayer = function () {
        console.log('1. Age');
        console.log('2. Goals');
        console.log('3. Weight');
        console.log('4. Height');
        console.log('5. Salary');
        console.log('0. Exit');
    };
    Menuu.prototype.menuSortChangePlayer = function () {
        console.log('1. Ascending');
        console.log('2. Decrease');
        console.log('0. Exit');
    };
    Menuu.prototype.menuTimetable = function () {
        console.log('1. ShowTimetable');
        console.log('2. ADDTimetable');
        console.log('3. DeleteTimetable');
        console.log('4. UpdateTimetable');
        console.log('0. Exit');
    };
    Menuu.prototype.menuSchedule = function () {
        console.log('1. Show Schedule');
        console.log('2. ADD Schedule');
        console.log('3. Update Schedule');
        console.log('4. Delete Schedule');
        console.log('0. Exit');
    };
    Menuu.prototype.menuPlayerManager = function () {
        console.log('1. Show Players');
        console.log('2. ADD Players');
        console.log('3. Update Players');
        console.log('4. Delete Players');
        console.log('5. Schedule ');
        console.log('0. Exit');
    };
    Menuu.prototype.menuCoachManager = function () {
        console.log('1. Show Coach');
        console.log('2. ADD Coach');
        console.log('3. Update Coach');
        console.log('4. Delete Coach');
        console.log('5. Contract');
        console.log('0. Exit ');
    };
    Menuu.prototype.menuInvestorManager = function () {
        console.log('1. ShowInvestor');
        console.log('2. ADD Investor');
        console.log('3. Update Investor');
        console.log('4. Delete Investor');
        console.log('5. Contract');
        console.log('6. Profit');
        console.log('0. Exit');
    };
    Menuu.prototype.menuContract = function () {
        console.log('1. Show Contract');
        console.log('2. ADD Contract');
        console.log('3. Update Contract');
        console.log('4. Delete Contract');
        console.log('5. Exit Contract');
    };
    return Menuu;
}());
exports.Menuu = Menuu;
