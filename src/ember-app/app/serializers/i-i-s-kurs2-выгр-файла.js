import { Serializer as ВыгрФайлаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kurs2-выгр-файла';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВыгрФайлаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
