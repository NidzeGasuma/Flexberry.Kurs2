import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  путьФайла: DS.attr('string'),
  эксФайлы: DS.belongsTo('i-i-s-kurs2-экс-файлы', { inverse: null, async: false })
});

export let ValidationRules = {
  путьФайла: {
    descriptionKey: 'models.i-i-s-kurs2-загр-файла.validations.путьФайла.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  эксФайлы: {
    descriptionKey: 'models.i-i-s-kurs2-загр-файла.validations.эксФайлы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗагрФайлаE', 'i-i-s-kurs2-загр-файла', {
    эксФайлы: belongsTo('i-i-s-kurs2-экс-файлы', 'Дата', {
      дата: attr('Дата', { index: 0 }),
      репозиторий: attr('Репозиторий', { index: 1 }),
      имя: attr('Имя', { index: 3, hidden: true })
    }, { index: 2 }),
    путьФайла: attr('Путь файла', { index: 4 })
  });

  modelClass.defineProjection('ЗагрФайлаL', 'i-i-s-kurs2-загр-файла', {
    эксФайлы: belongsTo('i-i-s-kurs2-экс-файлы', 'Дата', {
      дата: attr('Дата', { index: 0 }),
      репозиторий: attr('Репозиторий', { index: 1 }),
      имя: attr('Имя', { index: 2 })
    }, { index: -1, hidden: true }),
    путьФайла: attr('Путь файла', { index: 3 })
  });
};
