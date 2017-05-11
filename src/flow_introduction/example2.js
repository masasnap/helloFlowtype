// @flow
// 返り値の例

// function f1(): string {
//   return Math.random() < 0.5 ? 'test': null;  // nullの場合があるでのエラー。返り値を string|null か ?string にする。後者はundefinedを許容する。
// }
// f1();

function f2(): string|null {
  return Math.random() < 0.5 ? 'test': null;
}
f2();

function f3(): ?string {
  return Math.random() < 0.5 ? 'test': null;
}
f3();
