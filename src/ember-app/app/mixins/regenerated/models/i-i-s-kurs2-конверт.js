import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имяДок: DS.attr('string'),
  видДок: DS.belongsTo('i-i-s-kurs2-вид-док', { inverse: null, async: false }),
  загрФайла: DS.belongsTo('i-i-s-kurs2-загр-файла', { inverse: null, async: false })
});

export let ValidationRules = {
  имяДок: {
    descriptionKey: 'models.i-i-s-kurs2-конверт.validations.имяДок.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  видДок: {
    descriptionKey: 'models.i-i-s-kurs2-конверт.validations.видДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  загрФайла: {
    descriptionKey: 'models.i-i-s-kurs2-конверт.validations.загрФайла.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонвертE', 'i-i-s-kurs2-конверт', {
    имяДок: attr('Имя док', { index: 0 }),
    загрФайла: belongsTo('i-i-s-kurs2-загр-файла', 'Загр файла', {
      путьФайла: attr('Путь файла', { index: 2, hidden: true }),
      эксФайлы: belongsTo('i-i-s-kurs2-экс-файлы', '', {
        имя: attr('Имя', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'путьФайла' }),
    видДок: belongsTo('i-i-s-kurs2-вид-док', 'Вид док', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('КонвертL', 'i-i-s-kurs2-конверт', {
    имяДок: attr('Имя док', { index: 0 }),
    загрФайла: belongsTo('i-i-s-kurs2-загр-файла', 'Имя', {
      эксФайлы: belongsTo('i-i-s-kurs2-экс-файлы', '', {
        имя: attr('Имя', { index: 1 })
      }, { index: -1, hidden: true }),
      путьФайла: attr('Путь файла', { index: 2 })
    }, { index: -1, hidden: true }),
    видДок: belongsTo('i-i-s-kurs2-вид-док', 'Вид документа', {
      наименование: attr('Вид документа', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
