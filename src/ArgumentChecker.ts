export class ArgumentChecker {

    static ArgumentsMatch(args1: IArguments, args2: IArguments) {

        if (args1 == args2 && args1 == null) {
            return true;
        }

        if (args1 == null || args2 == null) {
            return false;
        }

        if (args1.length != args2.length) {
            return false;
        }

        for (let i = 0; i < args1.length; i++) {
            if (ArgumentChecker.argumentMatches(args1[i], args2[i])) {
                continue;
            }
            return false;
        }

        return true;
    }

    private static argumentMatches(arg1: any, arg2: any) {
        return ArgumentChecker.isAny(arg1) ||
            ArgumentChecker.isAny(arg2) ||
            arg1 == arg2;
    }

    private static isAny(arg: any) {
        return (arg.any && arg.any == "±any±");
    }
}