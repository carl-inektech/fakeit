import {CallDeclarationFactory} from "./CallDeclarationFactory";
import {CallDeclaration} from "./CallDeclaration";
import {CallDeclarationMethods} from "./CallDeclarationMethods";

export class Fake<T> {

    private readonly instance: T;
    private functionProcessor: CallDeclarationFactory<T>;
    private calls: CallDeclaration<T>[] = [];

    constructor() {
        this.instance = {} as T;
        this.functionProcessor = new CallDeclarationFactory<T>(this.instance);
    }
    
    public CallTo<T1, T2>(propertyDeclaration: (T1) => T2): CallDeclarationMethods<T, T2>{

        const callDeclaration = this.functionProcessor.Create<T1, T2>(propertyDeclaration);

        const existing = this.calls.filter(call => call.Equal(callDeclaration))[0];

        if(existing){
            return existing.Methods;
        }

        this.calls.push(callDeclaration);

        const result = new CallDeclarationMethods<T,T2>(callDeclaration);
        callDeclaration.Methods = result;
        return result;
    }

    public Instance(): T {
        return this.instance;
    }
}