import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'exponentialStrength' })

export class ExponentialStrengthPipe implements PipeTransform {
    transform(value: number, exponent = 1): number {
        return Math.pow(value, exponent);
    }
}

/**
 * 1- name.pipe.ts
 * 2- @Pipe({ name: PipeName })
 * 3- class implements PipeTransform
 * 4- tranform(value, argus)
 * 5- add pipe class in module in declrations
 * Pure [ simple pipe ] lowercase - uppercase - date
 * ImPure each excute on all changes [ complixed [ array - object ] ] slice - json - async
 * @Pipe({ name: PipeName: pure: true / false })
 */