import { Serializer as ЗагрФайлаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kurs2-загр-файла';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗагрФайлаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
