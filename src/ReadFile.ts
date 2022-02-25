import { readFileSync } from "fs";

export type ProcessFileCallback = (lines: string) => void;

class ReadFile {

    filename: string;

    lines: string[];

    //.i
    constructor(filename: string) {

        this.filename = filename;

        this.lines = this.readFile(filename);
    }

    //.i
    readFile = (filename: string) => {

        const lines = readFileSync(filename, 'utf-8').split(/\r?\n/);

        return lines;
    }

    //.i
    processFile = (callback: ProcessFileCallback) => {

        this.lines.forEach(callback);
    }
}

export default ReadFile;