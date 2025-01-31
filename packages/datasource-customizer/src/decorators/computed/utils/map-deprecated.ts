import { TCollectionName, TSchema } from '../../../templates';
import { ComputedDefinition, DeprecatedComputedDefinition } from '../types';

/**
 * transforms deprecated computed fields into their new definition
 * @param definition the deprecated definition
 * @returns
 */
export default function mapDeprecated<
  S extends TSchema = TSchema,
  N extends TCollectionName<S> = TCollectionName<S>,
>(
  definition: DeprecatedComputedDefinition<S, N> | ComputedDefinition<S, N>,
): ComputedDefinition<S, N> {
  return {
    ...definition,
    columnType: definition.columnType === 'Timeonly' ? 'Time' : definition.columnType,
  };
}
