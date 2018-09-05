import {ArgumentChecker} from "./ArgumentChecker";
import {CallDeclarationMethods} from "./CallDeclarationMethods";

export class CallDeclaration<T> {
    constructor(
        public readonly MemberName: string,
        public readonly Arguments: IArguments,
        public readonly Instance: T) {
    }

    public Equal(callDeclaration: CallDeclaration<T>){

        if(this.MemberName != callDeclaration.MemberName){
            return false;
        }

        return ArgumentChecker.ArgumentsMatch(this.Arguments, callDeclaration.Arguments);
    }

    public Methods: CallDeclarationMethods<any,any>
}

