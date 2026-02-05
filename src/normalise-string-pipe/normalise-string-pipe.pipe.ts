import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NormaliseStringPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): string | number {
    console.log(value);
    console.log(metadata);
    if (value == 9) {
      return 10;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return value;
  }
}
