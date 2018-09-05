import {CallDeclarationFactory} from "./CallDeclarationFactory";
import {CallDeclaration} from "./CallDeclaration";
import {It} from "./It";
import {TestClass} from "./TestClass.spec";

describe("Given a CallDeclaration", () => {

    let factory: CallDeclarationFactory<TestClass>;
    let testDeclaration: CallDeclaration<TestClass>;

    beforeAll(() =>{
        const instance = new TestClass();
        factory = new CallDeclarationFactory<TestClass>(instance);
    });


    describe("When a the property name match and arguments are both null", () => {

        beforeEach(() =>{
            testDeclaration = factory.Create(x => x.getText);
        });

        it("Then the declarations are equal", ()=>{
            expect(testDeclaration.Equal(factory.Create(x => x.getText))).toBeTruthy()
        });
    });

    describe("When a the name doesn't match", () => {

        beforeEach(() =>{
            testDeclaration = factory.Create(x => x.getText());
        });

        it("Then the declarations are not equal", ()=>{
            expect(testDeclaration.Equal(factory.Create(x => x.getTitle()))).toBeFalsy();
        });
    });

    describe("When the number of arguments doesn't match", () => {

        beforeEach(() =>{
            testDeclaration = factory.Create(x => x.getText());
        });

        it("Then the declarations are not equal", ()=>{
            expect(testDeclaration.Equal(factory.Create(x => x.getText({})))).toBeFalsy();
        });
    });

    describe("When the the name matches but one is a property and one is a method", () => {

        beforeEach(() =>{
            testDeclaration = factory.Create(x => x.getText());
        });

        it("Then the declarations are not equal", ()=>{
            expect(testDeclaration.Equal(factory.Create(x => x.getText))).toBeFalsy();
        });
    });
});