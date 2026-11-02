function Player(name,runs){
    this.name=name;
    this.runs=runs;
    this.totalRuns=function(){
        return this.runs.reduce((acc,cv)=>{
            return acc + cv;
        }, 0);
    }
}
const p1=new Player('virat',[40,50,60]);
console.log(p1);
console.log(p1.totalRuns());

const p2=new Player('dhoini',[40,40,40]);
console.log(p2);
console.log(p2.totalRuns());