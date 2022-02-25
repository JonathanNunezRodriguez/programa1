export type LineType = 'empty' | 'comment' | 'code';

class Programa1 {

    emptyLines = 0;

    commentLines = 0;

    codeLines = 0;

    filename: string;

    //.i
    constructor(filename: string) {

        this.filename = filename;
    }
    
    //.i
    get totalLines() {

        return this.emptyLines + this.commentLines + this.codeLines;
    }

    //.i
    addLine = (type: LineType) => {

        if (type === 'empty') this.emptyLines++;

        if (type === 'comment') this.commentLines++;

        if (type === 'code') this.codeLines++;
    }

    //.i
    printWithFormat = () => {

        console.log(`Nombre del archivo: ${this.filename}`);

		console.log(`--------------------------------------------`);

		console.log(`Cantidad de líneas en blanco: ${this.emptyLines}`);

		console.log(`Cantidad de líneas con comentarios: ${this.commentLines}`);

		console.log(`Cantidad de líneas con código: ${this.codeLines}`);

		console.log(`--------------------------------------------`);

		console.log(`Cantidad total de líneas: ${this.totalLines}`);
    }
}

export default Programa1;