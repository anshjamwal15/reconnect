export class AllotedModel {
    public name: string = "";
    public instruction: string = "";
    public date: Date;
    constructor(
        name: string,
        instruction: string,
        date: Date
    ) {
       this.name = name;
       this.instruction = instruction;
       this.date = date; 
    }
}