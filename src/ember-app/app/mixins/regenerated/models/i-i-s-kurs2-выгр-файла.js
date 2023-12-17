import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имяФайла: DS.attr('string'),
  конверт: DS.belongsTo('i-i-s-kurs2-конверт', { inverse: null, async: false })
});

export let ValidationRules = {
  имяФайла: {
    descriptionKey: 'models.i-i-s-kurs2-выгр-файла.validations.имяФайла.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  конверт: {
    descriptionKey: 'models.i-i-s-kurs2-выгр-файла.validations.конверт.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВыгрФайлаE', 'i-i-s-kurs2-выгр-файла', {
    имяФайла: attr('Имя файла', { index: 0 }),
    конверт: belongsTo('i-i-s-kurs2-конверт', 'Имя документа', {
      имяДок: attr('Имя документа', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'имяДок' })
  });

  modelClass.defineProjection('ВыгрФайлаL', 'i-i-s-kurs2-выгр-файла', {
    имяФайла: attr('Имя файла', { index: 0 }),
    конверт: belongsTo('i-i-s-kurs2-конверт', 'Имя документа', {
      имяДок: attr('Имя документа', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
