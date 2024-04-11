import { action, computed, makeObservable, observable } from 'mobx';

import { IList } from 'entities/listModel';

type ListModelPrivateFields = '_keys' | '_entities';

/**
 * Model for lists of similar data
 *
 * @implements {IList<T, K>}
 * T — type of the source list element.
 * K — type of id (key) of each element.
 *
 * @param {T[]} items Source list of elements of type T
 * @param {(item: T) => K} getKeyForItem Function that receives an element and returns the key of this element
 */
export class ListModel<T, K extends string | number = string> implements IList<T, K> {
  private _keys: K[] = [];
  private _entities: Record<K, T> = {} as Record<K, T>;
  private readonly _getKeyForItem: (item: T) => K;

  constructor(items: T[], getKeyForItem: (item: T) => K) {
    this._getKeyForItem = getKeyForItem;

    this._normalize(items);

    makeObservable<ListModel<T, K>, ListModelPrivateFields>(this, {
      _keys: observable,
      _entities: observable,

      keys: computed,
      entities: computed,
      length: computed,
      items: computed,

      addEntity: action.bound,
      addEntities: action.bound,
      removeEntity: action.bound,
      removeEntities: action.bound,
      toStart: action.bound,
      reset: action.bound,
    });
  }

  private _normalize(items: T[]) {
    items.forEach((item) => {
      const key = this._getKeyForItem(item);

      this._keys.push(key);
      this._entities[key] = item;
    });
  }

  /** List of the keys */
  get keys(): K[] {
    return this._keys;
  }

  /**
   * Map in which the key of type K is the identifier
   * and the value of type T is the element of the source list
   */
  get entities(): Record<K, T> {
    return this._entities;
  }

  /** List of elements of type T */
  get items(): T[] {
    return this._keys.reduce((acc: T[], id: K) => {
      const item = this._entities[id];

      return item ? [...acc, item] : acc;
    }, []);
  }

  /** Amount of the elements */
  get length(): number {
    return this.items.length;
  }

  get firstEntity(): T | null {
    return this.items[0] ?? null;
  }

  get lastEntity(): T | null {
    return this.items[this.length - 1] ?? null;
  }

  /**
   * Returns an element by its id. If the element is not found, returns null.
   */
  getEntityByKey(key: K): T | null {
    if (!this._entities[key]) {
      return null;
    }

    return this._entities[key];
  }

  /**
   * Return an element by its index in the list. If the element is not found, returns null.
   */
  getEntityByIndex(index: number): T | null {
    const id = this.keys[index];

    return this.getEntityByKey(id);
  }

  /**
   * Returns an object containing an element and its index by the id of this element.
   * If the element is not found, returns null.
   */
  getEntityAndIndex(key: K): { item: T; index: number } | null {
    const index = this.keys.indexOf(key);

    if (index === -1) {
      return null;
    }

    const item = this.items[index];

    return item ? { item, index } : null;
  }

  /**
   * Adds a new record to the list. If the id of the new record already exists,
   * the record with this key is overwritten.
   * @param {boolean} isToStart Must the new record be placed at the beginning?
   */
  addEntity({ entity, isToStart }: { entity: T; isToStart?: boolean }): void {
    const key = this._getKeyForItem(entity);

    this._entities[key] = entity;

    if (this._keys.includes(key)) {
      return;
    }

    if (isToStart) {
      this._keys.unshift(key);
    } else {
      this._keys.push(key);
    }
  }

  /**
   * Adds multiple new records
   * @param {Object} param
   * @param {boolean} param.isInitial Must remove extisting records and add new ones?
   * @param {boolean} param.isToStart Must the new records be placed at the beginning?
   */
  addEntities({
    entities,
    isInitial,
    isToStart,
  }: {
    entities: T[];
    isInitial?: boolean;
    isToStart?: boolean;
  }): void {
    if (isInitial) {
      this.reset();
      this._normalize(entities);

      return;
    }

    const newEntities = isToStart ? entities.reverse() : entities;

    newEntities.forEach((entity) => {
      this.addEntity({ entity, isToStart });
    });
  }

  /** Removes the item with the concrete id */
  removeEntity(keyParam: K): void {
    this._keys = this._keys.filter((key) => key !== keyParam);
    delete this._entities[keyParam];
  }

  /** Removes multiple items with concrete ids */
  removeEntities(keys: K[]): void {
    keys.forEach(this.removeEntity);
  }

  /** Replace an item with concrete id to the beginning of the list */
  toStart(key: K): void {
    const foundIndex = this.keys.indexOf(key);

    if (foundIndex === -1) {
      return;
    }

    this.keys.splice(foundIndex, 1);
    this.keys.splice(0, 0, key);
  }

  /** Clear the list */
  reset(): void {
    this._keys = [];
    this._entities = {} as Record<K, T>;
  }
}
