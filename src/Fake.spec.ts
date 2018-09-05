import {A} from './A';
import {Fake} from "./Fake";
import {TestClass} from "./TestClass.spec";

describe("Given a Fake", () => {

    let fake: Fake<TestClass>;
    let object: TestClass;

    beforeEach(() =>{
        fake = A.Fake<TestClass>();
        object = fake.Instance();
    });

    describe("When registering a call to a property", () =>{
        beforeEach(() =>{
            fake.CallTo(x => x.text).Returns("bibble");
        });

        it('Then the property returns correctly', () => {
            expect(object.text).toEqual("bibble");
        });
    });

    describe("When registering a call to a method with an argument", () =>{
        beforeEach(() =>{
            fake.CallTo(x => x.getText("test")).Returns("jimbibble");
        });

        it('Then the method returns correctly', () => {
            expect(object.getText("test")).toEqual("jimbibble");
        });
    });

    describe("When registering a call to a method raw", () =>{
        beforeEach(() =>{
            fake.CallTo(x => x.getText()).Returns("bibble");
        });

        it('Then the method returns correctly', () => {
            expect(object.getText()).toEqual("bibble");
        });
    });
});