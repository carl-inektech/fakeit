import {ArgumentChecker} from "./ArgumentChecker"
import {A} from "./A";
import {ArgumentExtractor} from "./ArgumentExtractor";
import {It} from "./It";

describe("Given a ArgumentChecker", () => {

    describe("When both arguments are null", () => {
        it("Then the arguments match", ()=>{
            expect(ArgumentChecker.ArgumentsMatch(null, null)).toBeTruthy();
        });
    });

    describe("When the second argument is null and the first isn't", () => {
        it("Then the arguments don't match", ()=>{
            expect(ArgumentChecker.ArgumentsMatch({} as IArguments, null)).toBeFalsy();
        });
    });

    describe("When the first argument is null and the second isn't", () => {
        it("Then the arguments don't match", ()=>{
            expect(ArgumentChecker.ArgumentsMatch(null, {} as IArguments)).toBeFalsy();
        });
    });

    describe("When the there are a different number of arguments", () => {
        it("Then the arguments don't match", ()=>{
            expect(ArgumentChecker.ArgumentsMatch({length:2} as IArguments, {length: 1} as IArguments)).toBeFalsy();
        });
    });

    describe("When the there are a different number of arguments", () => {

        it("Then the arguments don't match", ()=>{
            const args1 = ArgumentExtractor.ExtractArguments(x => x.test(1), 'test');
            const args2 = ArgumentExtractor.ExtractArguments(x => x.test(1,2), 'test');

            expect(ArgumentChecker.ArgumentsMatch(args1, args2)).toBeFalsy();
        });
    });

    describe("When the there are a different number of arguments", () => {

        it("Then the arguments don't match", ()=>{
            const args1 = ArgumentExtractor.ExtractArguments(x => x.test(1), 'test');
            const args2 = ArgumentExtractor.ExtractArguments(x => x.test(1,2), 'test');

            expect(ArgumentChecker.ArgumentsMatch(args1, args2)).toBeFalsy();
        });
    });

    describe("When the there are matching literal arguments", () => {

        it("Then the arguments match", ()=>{
            const args1 = ArgumentExtractor.ExtractArguments(x => x.test(1), 'test');
            const args2 = ArgumentExtractor.ExtractArguments(x => x.test(1), 'test');

            expect(ArgumentChecker.ArgumentsMatch(args1, args2)).toBeTruthy();
        });
    });

    describe("When the there are matching reference arguments", () => {

        it("Then the arguments match", ()=>{
            const refArg =  {};
            const args1 = ArgumentExtractor.ExtractArguments(x => x.test(refArg), 'test');
            const args2 = ArgumentExtractor.ExtractArguments(x => x.test(refArg), 'test');

            expect(ArgumentChecker.ArgumentsMatch(args1, args2)).toBeTruthy();
        });
    });

    describe("When the there are different reference arguments", () => {

        it("Then the arguments don't match", ()=>{
            const args1 = ArgumentExtractor.ExtractArguments(x => x.test({}), 'test');
            const args2 = ArgumentExtractor.ExtractArguments(x => x.test({}), 'test');

            expect(ArgumentChecker.ArgumentsMatch(args1, args2)).toBeFalsy();
        });
    });

    describe("When the first is an any argument", () => {

        it("Then the arguments match", ()=>{
            const args1 = ArgumentExtractor.ExtractArguments(x => x.test(It.IsAny()), 'test');
            const args2 = ArgumentExtractor.ExtractArguments(x => x.test({}), 'test');

            expect(ArgumentChecker.ArgumentsMatch(args1, args2)).toBeTruthy();
        });
    });

    describe("When the second is an any argument", () => {

        it("Then the arguments match", ()=>{
            const args1 = ArgumentExtractor.ExtractArguments(x => x.test({}), 'test');
            const args2 = ArgumentExtractor.ExtractArguments(x => x.test(It.IsAny()), 'test');

            expect(ArgumentChecker.ArgumentsMatch(args1, args2)).toBeTruthy();
        });
    });
});