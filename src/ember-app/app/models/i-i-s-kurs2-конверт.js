import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КонвертMixin
} from '../mixins/regenerated/models/i-i-s-kurs2-конверт';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КонвертMixin, Validations, {
});

defineProjections(Model);

export default Model;
