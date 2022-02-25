import { createInterface, Interface, ReadLineOptions } from "readline";
import { promisify } from "util";

const interfaceOptions: ReadLineOptions = {
    input:  process.stdin,
    output:  process.stdout,
}

class Prompt {

    reader: Interface;

    question: (message: string) => Promise<string>

    //.i
    constructor() {

        this.reader = createInterface(interfaceOptions);

        this.question = promisify(this.reader.question).bind(this.reader);
    }

    //.i
    getVar = async (message = ''): Promise<string> =>  {

        try {

            const temp = await this.question(message);

            return temp;

        } catch (error) {

            console.error(error);

            throw error;            
        }
    }

    //.i
    closePrompt = () => {
        
        this.reader.close();
    }
}

export default Prompt;