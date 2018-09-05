export class It {

    //TODO: were not doing any type checking here, need to think about this. it may be that we don't really care in the grand scheme of things
    public static IsAny<T>(): T {
        const any = {} as T;
        any['any'] = "±any±";
        return any;
    }
}