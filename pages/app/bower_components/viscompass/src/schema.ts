import {FieldDef} from 'vega-lite/src/fielddef';

export interface SchemaField extends FieldDef {
  selected?: boolean;
  _aggregate?: string;
  _raw?: boolean;
  _bin?: boolean;
  _timeUnit?: boolean;
}
