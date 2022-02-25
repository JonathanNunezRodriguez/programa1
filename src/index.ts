import Programa1 from "./Programa1";
import Prompt from "./Prompt";
import ReadFile, { ProcessFileCallback } from "./ReadFile";

//.i
const main = async () => {

    const prompter = new Prompt();

    let repeat = true;

    let reader: any;

    let filename: string;

    while (repeat) {

        filename = await prompter.getVar();

        try {

            reader = new ReadFile(filename);

            repeat = false;
            
        } catch (error) {

            if (error.code === 'ENOENT')

                console.error('archivo no encontrado, vuelva a introducir el nombre del archivo o ctrl+c para salir');

            else 
                
                process.exit(1);            
        }
    }

    const programa = new Programa1(reader.filename);

    let isCommentBlock = false;

    //.i
    const processLine: ProcessFileCallback = (line) => {
        
        const trimmedLine = line.trim();

        if (!isCommentBlock) {

            if (trimmedLine === '') programa.addLine('empty');

            else if (trimmedLine.includes('//')) programa.addLine('comment');

            else if (trimmedLine.includes('/*')) {

                if (!trimmedLine.includes('*/'))

                    isCommentBlock = true;
                
                programa.addLine('comment')

            } else programa.addLine('code');
        } else {

            if (trimmedLine.includes('*/'))

                isCommentBlock = false;
            
            programa.addLine('comment');
        }
    };

    reader.processFile(processLine);

    programa.printWithFormat();

    await prompter.getVar('Press enter to exit...');

    prompter.closePrompt();
}

main();