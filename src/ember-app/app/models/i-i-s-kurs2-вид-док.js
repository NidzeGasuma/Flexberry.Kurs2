import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ВидДокMixin
} from '../mixins/regenerated/models/i-i-s-kurs2-вид-док';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ВидДокMixin, Validations, {
});

defineProjections(Model);

export default Model;
