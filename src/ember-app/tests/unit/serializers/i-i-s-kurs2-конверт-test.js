import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kurs2-конверт', 'Unit | Serializer | i-i-s-kurs2-конверт', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kurs2-конверт',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
