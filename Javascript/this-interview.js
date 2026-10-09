const dev={
    firstname:"steve",
    skills:['js','java','py'],
    details:function(){
        this.skills.forEach((skill) => {
            console.log(`${this.firstname} knows ${skill}`);
        });
    }
}
dev.details();