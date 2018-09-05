import {CallDeclaration} from "./CallDeclaration";
import {ArgumentExtractor} from "./ArgumentExtractor";

export class CallDeclarationFactory<T> {

    private readonly methodRegEx = /.*{.* \w\.(.*?)\(.*/;
    private readonly propertyRexEx = /.*{.*\.(.*);.*/;

    constructor(public readonly Instance: T) {
    }

    public Create<T1, T2>(func: (T1) => T2): CallDeclaration<T> {

        const declaration: string = func.toString();
        let propertyName: string;
        let args: IArguments = null;

        const methodMatch = declaration.match(this.methodRegEx);

        if (methodMatch) {
            propertyName = methodMatch[1];
            args = ArgumentExtractor.ExtractArguments(func, propertyName);
        } else {
            propertyName = declaration.match(this.propertyRexEx)[1];
        }

        return new CallDeclaration<T>(propertyName, args, this.Instance);
    }
}