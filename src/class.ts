class TeamClass {
    classScore() {
        console.log('GOAL');
    }
}

// const redWind =  new TeamClass('red Wings'); // it doesn't work here because it is in public not private
// redWind.classScore;

//Object oriented programming

class team {
    // teamName: string
    // public teamName: string; // this is same as above
    // private teamName: string;//prevents outside usage
    readonly teamName: string; //prevents from changed

    constructor(teamName: string) {
        this.teamName = teamName;
    }

    score(): string {
        console.log('GOAL');
        return 'goal';
    }
}

const barea = new team('Madagascar');
barea.score