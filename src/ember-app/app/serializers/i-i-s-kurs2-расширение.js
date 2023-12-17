import { Serializer as РасширениеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kurs2-расширение';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РасширениеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
