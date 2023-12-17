import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  имя: DS.attr('string'),
  размер: DS.attr('number'),
  репозиторий: DS.attr('string'),
  едиИзм: DS.belongsTo('i-i-s-kurs2-еди-изм', { inverse: null, async: false }),
  расширение: DS.belongsTo('i-i-s-kurs2-расширение', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kurs2-экс-файлы.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-kurs2-экс-файлы.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  размер: {
    descriptionKey: 'models.i-i-s-kurs2-экс-файлы.validations.размер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  репозиторий: {
    descriptionKey: 'models.i-i-s-kurs2-экс-файлы.validations.репозиторий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  едиИзм: {
    descriptionKey: 'models.i-i-s-kurs2-экс-файлы.validations.едиИзм.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расширение: {
    descriptionKey: 'models.i-i-s-kurs2-экс-файлы.validations.расширение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЭксФайлыE', 'i-i-s-kurs2-экс-файлы', {
    дата: attr('Дата', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    репозиторий: attr('Репозиторий', { index: 2 }),
    размер: attr('Размер', { index: 3 }),
    едиИзм: belongsTo('i-i-s-kurs2-еди-изм', 'Еди изм', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' }),
    расширение: belongsTo('i-i-s-kurs2-расширение', 'Расширение', {
      наименование: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ЭксФайлыL', 'i-i-s-kurs2-экс-файлы', {
    дата: attr('Дата', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    репозиторий: attr('Репозиторий', { index: 2 }),
    размер: attr('Размер', { index: 3 }),
    едиИзм: belongsTo('i-i-s-kurs2-еди-изм', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true }),
    расширение: belongsTo('i-i-s-kurs2-расширение', 'Наименование', {
      наименование: attr('Наименование', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
