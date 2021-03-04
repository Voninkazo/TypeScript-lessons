var TeamClass = /** @class */ (function () {
    function TeamClass() {
    }
    TeamClass.prototype.classScore = function () {
        console.log('GOAL');
    };
    return TeamClass;
}());
// const redWind =  new TeamClass('red Wings'); // it doesn't work here because it is in public not private
// redWind.classScore;
//Object oriented programming
var team = /** @class */ (function () {
    function team(teamName) {
        this.teamName = teamName;
    }
    team.prototype.score = function () {
        console.log('GOAL');
        return 'goal';
    };
    return team;
}());
var barea = new team('Madagascar');
barea.score;
