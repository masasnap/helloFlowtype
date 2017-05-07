# Note

## 00-untyped-a.js
- `convertUnit()` で m => km の変換テーブルを引いた値を返す
- 使い方は `convertUnit('m', 'km', 1000); // will return 1`
- `convertUnit('cm', 'm', 100);` という変換は未定義のため、実行時エラー

## 01-untyped-b.js
- `'m', 'km'` の代わりに `METER, KILOMETER` という定数を導入
- `convertUnit('cm', 'm', 100);` という不正な呼び出しはガードされておらず、実行時エラーのまま

## 02-basic-typed.js
- `convertUnit()` の引数に型指定を追加
```js
function convertUnit(from: string, to: string, value: number): number { ... }
```
- `convertUnit('cm', 'm', 100);` という不正な呼び出しはガードされておらず、実行時エラーのまま

## 03-dynamic-object-keys.js
- `type` で Unit 型を定義
- `convertUnit('cm', 'm', 100);` という不正な呼び出しは警告される
- 変換テーブルの戻り値は `Function` 型で定義してあって、まだ緩い

## 04-fn-type.js
- 変換テーブルの関数型を `type ConvertFn = (value: number) => number;` として定義
- 変換テーブルの関数で string を返すものを定義しようとすると、警告される

## 05-recap.js
- 関数の戻り値として UnitValue 型を定義
  - 関数の引数に明示的な型指定をしなくても、戻り値の型からチェックしてくれる

## 06-export.js

## 07-import.js

## 08-maybe-and-optionals.js

## 09-classes.js

## 10-promises.js

## 11-promises-error.js
