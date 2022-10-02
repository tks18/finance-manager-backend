import dotProp from 'dot-prop';
import { modelIncludeMap } from '@models/model-map';
import {
  FindAttributeOptions,
  Includeable,
  Model,
  ModelStatic,
  WhereOptions,
} from 'sequelize';
import { handleFilter } from './handle-filter';

interface IMaptoModelResult {
  model?: ModelStatic<Model>;
  as?: string;
}

const mapToModel = (
  accessString: string,
  map: ReturnType<typeof modelIncludeMap>,
): IMaptoModelResult => {
  if (dotProp.has(map, accessString)) {
    const prop = dotProp.get(map, accessString) as IMaptoModelResult;
    return prop;
  } else {
    return {};
  }
};

interface IIncludeOptions {
  model: string;
  attributes?: FindAttributeOptions;
  filter?: WhereOptions;
  include?: IIncludeOptions[] | string[];
}

interface IIncludeResult {
  model?: ModelStatic<Model>;
  as?: string;
  attributes?: FindAttributeOptions;
  where?: WhereOptions;
  include?: Includeable[];
}

export const handleInclude = (
  includeOptions: IIncludeOptions[] | string[],
  map: ReturnType<typeof modelIncludeMap>,
): Includeable[] => {
  if (includeOptions) {
    const includeMap = includeOptions.map((includeVal) => {
      if (typeof includeVal === 'string') {
        return mapToModel(includeVal, map);
      } else if (typeof includeVal === 'object') {
        let newObj: IIncludeResult = {};
        if (includeVal.include) {
          newObj.include = handleInclude(includeVal.include, map);
        }
        if (includeVal.filter) {
          newObj.where = handleFilter(includeVal.filter);
        }
        if (includeVal.attributes) {
          newObj.attributes = includeVal.attributes;
        }
        newObj = {
          ...newObj,
          ...mapToModel(includeVal.model, map),
        };
        return newObj;
      } else {
        return {};
      }
    });
    return includeMap;
  } else {
    return [];
  }
};
