import {CallDeclarationFactory} from "./CallDeclarationFactory";
import {CallDeclaration} from "./CallDeclaration";
import {TestClass} from "./TestClass.spec";


describe("Given a CallDeclarationFactory", () => {

    let factory: CallDeclarationFactory<TestClass>;

    beforeAll(() =>{
        const instance = new TestClass();
        factory = new CallDeclarationFactory<TestClass>(instance);
    });

    describe("When passing in a property", () =>{

        let declaration: CallDeclaration<TestClass>;
        beforeEach(() =>{
            declaration = factory.Create(x => x.text);
        });

        it("Then the property name is text",() => {
            expect(declaration.MemberName).toEqual('text');
        });

        it("Then the arguments are null", () => {
            expect(declaration.Arguments).toBeNull();
        });
    });

    describe("When passing in a method with no arguments", () =>{

        let declaration: CallDeclaration<TestClass>;
        beforeEach(() =>{
            declaration = factory.Create(x => x.noArguments());
        });

        it("Then the method name is noArguments",() => {
            expect(declaration.MemberName).toEqual('noArguments');
        });

        it("Then the arguments are empty", () => {
            expect(declaration.Arguments.length).toEqual(0);
        });
    });

    describe("When passing in a method with a single parameter", () =>{

        const arg = {};

        let declaration: CallDeclaration<TestClass>;
        beforeEach(() =>{
            declaration = factory.Create(x => x.singleArgument(arg));
        });

        it("Then the method name is singleArgument",() => {
            expect(declaration.MemberName).toEqual('singleArgument');
        });

        it("Then there is a single argument", () => {
            expect(declaration.Arguments.length).toEqual(1);
        });

        it("Then the argument equals the arg", () => {
            expect(declaration.Arguments[0]).toEqual(arg);
        });
    });

    describe("When passing in a method with a multiple parameters", () =>{

        const arg1 = {};
        const arg2 = {};

        let declaration: CallDeclaration<TestClass>;
        beforeEach(() =>{
            declaration = factory.Create(x => x.multiArguments(arg1, arg2));
        });

        it("Then the method name is multiArguments",() => {
            expect(declaration.MemberName).toEqual('multiArguments');
        });

        it("Then there are 2 arguments", () => {
            expect(declaration.Arguments.length).toEqual(2);
        });

        it("Then arg1 is correct", () => {
            expect(declaration.Arguments[0]).toEqual(arg1);
        });

        it("Then arg2 is correct", () => {
            expect(declaration.Arguments[1]).toEqual(arg2);
        });
    });
});