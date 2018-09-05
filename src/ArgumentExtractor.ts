export class ArgumentExtractor {
    public static ExtractArguments<T1, T2>(func: (T1) => T2, method: string): IArguments {

        let args: IArguments = null;
        const fake = {};

        fake[method] = function () {
            args = arguments;
        };

        func(fake);

        return args;
    }
}