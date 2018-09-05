import {Fake} from "./Fake";

export class A {
    public static Fake<T>():Fake<T> {
        return new Fake<T>();
    }
}