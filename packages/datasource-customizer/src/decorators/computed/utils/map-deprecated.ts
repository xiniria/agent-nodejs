import { TCollectionName, TFieldName, TSchema } from '../../../templates';
import { ComputedDefinition, DeprecatedComputedDefinition } from '../types';

/**
 * transforms deprecated computed fields into their new definition
 * @param definition the deprecated definition
 * @returns
 */
export default function mapDeprecated<
  S extends TSchema = TSchema,
  N extends TCollectionName<S> = TCollectionName<S>,
  C extends TFieldName<S, N> = TFieldName<S, N>,
>(
  definition: DeprecatedComputedDefinition<S, N, C> | ComputedDefinition<S, N, C>,
): ComputedDefinition<S, N, C> {
  return {
    ...definition,
    columnType: definition.columnType === 'Timeonly' ? 'Time' : definition.columnType,
  };
}
