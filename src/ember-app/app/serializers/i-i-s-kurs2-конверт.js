import { Serializer as КонвертSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kurs2-конверт';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КонвертSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
