import { Injectable } from '@angular/core';

@Injectable()
export class FooService {

    hello() {
        console.log('hello from foo service');
    }

}