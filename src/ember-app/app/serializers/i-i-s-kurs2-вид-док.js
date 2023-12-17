import { Serializer as ВидДокSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kurs2-вид-док';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВидДокSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
