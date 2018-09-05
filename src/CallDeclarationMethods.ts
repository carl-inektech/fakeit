import {CallDeclaration} from "./CallDeclaration";
import {ArgumentChecker} from "./ArgumentChecker";

export class CallDeclarationMethods<T1, T2> {

    private callCount = 0;
    private returnValue: T2;

    constructor(private callspec: CallDeclaration<T1>) {
    }

    public Returns(value: T2) {

        if (this.callspec.Arguments) {
            this.returnValue = value;
            this.callspec.Instance[this.callspec.MemberName] = this.fakeFunction.bind(this);
        } else {
            this.callspec.Instance[this.callspec.MemberName] = value;
        }
    }

    //TODO: sure I can do this a better way
    private fakeFunction() {
        let ac = new ArgumentChecker();
        if (ArgumentChecker.ArgumentsMatch(this.callspec.Arguments, arguments)) {
            this.callCount++;
            return this.returnValue;
        }
    }

    public ShouldHaveHappened() {
        if (this.callCount == 0) {
            throw new Error(`${this.callspec.MemberName} should have been called but wasn't`);
        }
    }
}