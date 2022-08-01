"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.choiceInvestor = exports.choiceVIP = exports.choicePlayers = exports.choiceCoach = exports.choiceBoss = exports.choiceSorPlayers = exports.choiceFindPlayers = exports.choiceLogin = exports.choice = exports.choiceDAUS = void 0;
var choiceDAUS;
(function (choiceDAUS) {
    choiceDAUS[choiceDAUS["SHOW_LIST"] = 1] = "SHOW_LIST";
    choiceDAUS[choiceDAUS["ADD_LIST"] = 2] = "ADD_LIST";
    choiceDAUS[choiceDAUS["UPDATE_LIST"] = 3] = "UPDATE_LIST";
    choiceDAUS[choiceDAUS["DELETE_LIST"] = 4] = "DELETE_LIST";
    choiceDAUS[choiceDAUS["EXITS"] = 0] = "EXITS";
})(choiceDAUS = exports.choiceDAUS || (exports.choiceDAUS = {}));
var choice;
(function (choice) {
    choice[choice["CHOICE_LOGIN"] = 1] = "CHOICE_LOGIN";
    choice[choice["CHOICE_REGISTER"] = 2] = "CHOICE_REGISTER";
    choice[choice["EXITS"] = 0] = "EXITS";
})(choice = exports.choice || (exports.choice = {}));
var choiceLogin;
(function (choiceLogin) {
    choiceLogin[choiceLogin["CHOICE_USER"] = 1] = "CHOICE_USER";
    choiceLogin[choiceLogin["CHOICE_VIP"] = 2] = "CHOICE_VIP";
    choiceLogin[choiceLogin["EXITS"] = 0] = "EXITS";
})(choiceLogin = exports.choiceLogin || (exports.choiceLogin = {}));
var choiceFindPlayers;
(function (choiceFindPlayers) {
    choiceFindPlayers[choiceFindPlayers["FIND_NAME"] = 1] = "FIND_NAME";
    choiceFindPlayers[choiceFindPlayers["FIND_AGE"] = 2] = "FIND_AGE";
    choiceFindPlayers[choiceFindPlayers["FIND_WEIGHT"] = 3] = "FIND_WEIGHT";
    choiceFindPlayers[choiceFindPlayers["FIND_HEIGHT"] = 4] = "FIND_HEIGHT";
    choiceFindPlayers[choiceFindPlayers["FIND_NATION"] = 5] = "FIND_NATION";
    choiceFindPlayers[choiceFindPlayers["FIND_CLOTHERSNUMBER"] = 6] = "FIND_CLOTHERSNUMBER";
    choiceFindPlayers[choiceFindPlayers["EXITS"] = 0] = "EXITS";
})(choiceFindPlayers = exports.choiceFindPlayers || (exports.choiceFindPlayers = {}));
var choiceSorPlayers;
(function (choiceSorPlayers) {
    choiceSorPlayers[choiceSorPlayers["SORT_AGE"] = 1] = "SORT_AGE";
    choiceSorPlayers[choiceSorPlayers["SORT_GOALS"] = 2] = "SORT_GOALS";
    choiceSorPlayers[choiceSorPlayers["SORT_WEIGHT"] = 3] = "SORT_WEIGHT";
    choiceSorPlayers[choiceSorPlayers["SORT_HEIGHT"] = 4] = "SORT_HEIGHT";
    choiceSorPlayers[choiceSorPlayers["SORT_SALARY"] = 5] = "SORT_SALARY";
    choiceSorPlayers[choiceSorPlayers["EXITS"] = 0] = "EXITS";
})(choiceSorPlayers = exports.choiceSorPlayers || (exports.choiceSorPlayers = {}));
var choiceBoss;
(function (choiceBoss) {
    choiceBoss[choiceBoss["PLAYERS"] = 1] = "PLAYERS";
    choiceBoss[choiceBoss["COACH"] = 2] = "COACH";
    choiceBoss[choiceBoss["INVESTOR"] = 3] = "INVESTOR";
    choiceBoss[choiceBoss["SCHEDULE"] = 4] = "SCHEDULE";
    choiceBoss[choiceBoss["TIMETABLE"] = 5] = "TIMETABLE";
    choiceBoss[choiceBoss["FUND"] = 6] = "FUND";
    choiceBoss[choiceBoss["EXITS"] = 0] = "EXITS";
})(choiceBoss = exports.choiceBoss || (exports.choiceBoss = {}));
var choiceCoach;
(function (choiceCoach) {
    choiceCoach[choiceCoach["SHOW_PLAYERS"] = 1] = "SHOW_PLAYERS";
    choiceCoach[choiceCoach["FIND_PLAYERS"] = 2] = "FIND_PLAYERS";
    choiceCoach[choiceCoach["SORT_PLAYERS"] = 3] = "SORT_PLAYERS";
    choiceCoach[choiceCoach["TIMETABLE"] = 4] = "TIMETABLE";
    choiceCoach[choiceCoach["SCHEDULE"] = 5] = "SCHEDULE";
    choiceCoach[choiceCoach["CONTRACT_COACH"] = 6] = "CONTRACT_COACH";
    choiceCoach[choiceCoach["EXITS"] = 0] = "EXITS";
})(choiceCoach = exports.choiceCoach || (exports.choiceCoach = {}));
var choicePlayers;
(function (choicePlayers) {
    choicePlayers[choicePlayers["SHOW_COACH"] = 1] = "SHOW_COACH";
    choicePlayers[choicePlayers["SCHEDULE"] = 2] = "SCHEDULE";
    choicePlayers[choicePlayers["TIMETABLE"] = 3] = "TIMETABLE";
    choicePlayers[choicePlayers["EXITS"] = 0] = "EXITS";
})(choicePlayers = exports.choicePlayers || (exports.choicePlayers = {}));
var choiceVIP;
(function (choiceVIP) {
    choiceVIP[choiceVIP["LOGIN_BOSS"] = 1] = "LOGIN_BOSS";
    choiceVIP[choiceVIP["LOGIN_COACH"] = 2] = "LOGIN_COACH";
    choiceVIP[choiceVIP["LOGIN_INVESTOR"] = 3] = "LOGIN_INVESTOR";
    choiceVIP[choiceVIP["EXITS"] = 0] = "EXITS";
})(choiceVIP = exports.choiceVIP || (exports.choiceVIP = {}));
var choiceInvestor;
(function (choiceInvestor) {
    choiceInvestor[choiceInvestor["SHOW_INVESTOR"] = 1] = "SHOW_INVESTOR";
    choiceInvestor[choiceInvestor["ADD_INVESTOR"] = 2] = "ADD_INVESTOR";
    choiceInvestor[choiceInvestor["UPDATE_INVESTOR"] = 3] = "UPDATE_INVESTOR";
    choiceInvestor[choiceInvestor["DELETE_INVESTOR"] = 4] = "DELETE_INVESTOR";
    choiceInvestor[choiceInvestor["CONTRACT"] = 5] = "CONTRACT";
    choiceInvestor[choiceInvestor["PROFIT"] = 6] = "PROFIT";
    choiceInvestor[choiceInvestor["EXITS"] = 0] = "EXITS";
})(choiceInvestor = exports.choiceInvestor || (exports.choiceInvestor = {}));
