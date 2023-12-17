import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kurs2-конвер-файлы', 'Unit | Model | i-i-s-kurs2-конвер-файлы', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kurs2-вид-док',
    'model:i-i-s-kurs2-выгр-файла',
    'model:i-i-s-kurs2-еди-изм',
    'model:i-i-s-kurs2-загр-файла',
    'model:i-i-s-kurs2-конвер-файлы',
    'model:i-i-s-kurs2-конверт',
    'model:i-i-s-kurs2-расширение',
    'model:i-i-s-kurs2-экс-файлы',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
