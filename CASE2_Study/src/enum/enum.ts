export enum choiceDAUS {
    SHOW_LIST = 1,
    ADD_LIST,
    UPDATE_LIST,
    DELETE_LIST,
    EXITS = 0
}

export enum choice {
    CHOICE_LOGIN = 1,
    CHOICE_REGISTER,
    EXITS = 0
}

export enum choiceLogin {
    CHOICE_USER = 1,
    CHOICE_VIP,
    EXITS=0
}


export enum choiceFindPlayers {
    FIND_NAME = 1,
    FIND_AGE,
    FIND_WEIGHT,
    FIND_HEIGHT,
    FIND_NATION,
    FIND_CLOTHERSNUMBER,
    EXITS=0
}

export enum choiceSorPlayers {
    SORT_AGE = 1,
    SORT_GOALS,
    SORT_WEIGHT,
    SORT_HEIGHT,
    SORT_SALARY,
    EXITS = 0
}

export enum choiceBoss {
    PLAYERS = 1,
    COACH,
    INVESTOR,
    SCHEDULE,
    TIMETABLE,
    EXITS = 0
}

export enum choiceCoach {
    SHOW_PLAYERS = 1,
    FIND_PLAYERS,
    SORT_PLAYERS,
    TIMETABLE,
    SCHEDULE,
    CONTRACT_COACH,
    EXITS=0
}

export enum choicePlayers {
    SHOW_COACH = 1,
    SCHEDULE,
    TIMETABLE,
    EXITS=0
}

export enum choiceVIP {
    LOGIN_BOSS = 1,
    LOGIN_COACH,
    LOGIN_INVESTOR,
    EXITS = 0
}
export enum choiceInvestor{
    SHOW_INVESTOR = 1,
    ADD_INVESTOR,
    UPDATE_INVESTOR,
    DELETE_INVESTOR,
    CONTRACT,
    PROFIT,
    EXITS = 0

}