const p1={
    Name:'virat',
    scores:[60,80,70],
    totalRuns:function(){
        let runs=0;
        for(let n of this.scores){
            runs+=n;
        }
        return runs;
    }
};
console.log(p1.totalRuns());