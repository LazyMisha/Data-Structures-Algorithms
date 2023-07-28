class HashTable {

    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    // O(n)
    set(key, value) {
        const keyHash = this._hash(key);

        if (!this.data[keyHash]) {
            this.data[keyHash] = [];
        }

        this.data[keyHash].push([key, value]);
    }

    // O(n) if collisions
    // O(1) if no collisions
    get(key) {
        const keyHash = this._hash(key);
        const data = this.data[keyHash];

        const value = data?.find(([dataKey]) => dataKey === key);

        return value && value[1];
    }

    delete(key) {
        const keyHash = this._hash(key);
        const data = this.data[keyHash];

        if (!data) return false;

        this.data[keyHash] = data.filter(([dataKey]) => dataKey !== key);

        return true;
    }

    keys() {
        if (!this.data) {
            return [];
        }

        const result = [];

        for (let i = 0; i < this.data.length; i++) {
            const cell = this.data[i];

            if (cell?.length > 1) {
                for (let j = 0; j < cell.length; j++) {
                    result.push(cell[j][0]);
                }
            } else if (cell?.length) {
                result.push(cell[0][0]);
            }
        }

        return result;
    }

    values() {
        if (!this.data) {
            return [];
        }

        const result = [];

        for (let i = 0; i < this.data.length; i++) {
            const cell = this.data[i];

            if (cell?.length > 1) {
                for (let j = 0; j < cell.length; j++) {
                    result.push(cell[j][1]);
                }
            } else if (cell?.length) {
                result.push(cell[0][1]);
            }
        }

        return result;
    }
}

const t = new HashTable(100);
console.log('keys ', t.keys());
console.log('values ', t.values());
t.set('keyTest', 'valueTest');
t.set('keyTest1', 'valueTest1');
t.set('keyTest3', 'valueTest3');
console.log('keys ', t.keys());
console.log('values ', t.values());
t.delete('keyTest');
console.log('keys ', t.keys());
console.log('values ', t.values());
