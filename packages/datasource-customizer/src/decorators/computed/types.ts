import { ColumnType } from '@forestadmin/datasource-toolkit';

import CollectionCustomizationContext from '../../context/collection-context';
import { TCollectionName, TFieldName, TRow, TSchema } from '../../templates';

export interface ComputedDefinition<
  S extends TSchema = TSchema,
  N extends TCollectionName<S> = TCollectionName<S>,
  C extends TFieldName<S, N> = TFieldName<S, N>,
> {
  readonly columnType: ColumnType;
  readonly dependencies: C[];
  readonly defaultValue?: unknown;
  readonly enumValues?: string[];

  getValues(
    records: Pick<TRow<S, N>, C>[],
    context: CollectionCustomizationContext<S, N>,
  ): Promise<unknown[]> | unknown[];
}

export interface DeprecatedComputedDefinition<
  S extends TSchema = TSchema,
  N extends TCollectionName<S> = TCollectionName<S>,
  C extends TFieldName<S, N> = TFieldName<S, N>,
> extends Omit<ComputedDefinition<S, N, C>, 'columnType'> {
  readonly columnType: 'Timeonly';
}
