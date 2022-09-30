// 数组之和
import './style.css';

import { from, reduce } from 'rxjs';
import { filter } from 'rxjs/operators';

const source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];

const source$ = from(source)
  .pipe(filter((item) => !isNaN(parseInt(item))))
  .pipe(
    reduce((a, b) => {
      return parseFloat(a) + parseFloat(b);
    }, '0')
  );

console.log(source$);

source$.subscribe(console.info);

// Open the console in the bottom right to see results.
