/*
 * Stack은 FIFO (First In First Out) 구조
 * How to: Psedoclassical
 * Type of storage: object
 */
const Stack = function() {
  this._storage = {};
  this.top = 0;
}

// push는 item을 넣는 method ------------------- //
Stack.prototype.push = function(item) {
  this._storage[this.top] = item;
  this.top ++;
}

// pop은 item을 꺼내는 method ------------------- //
Stack.prototype.pop = function() {
  let result = this._storage[this.top - 1];
  delete this._storage[this.top - 1];
  this.top --;
  return result;
}

// peek은 꺼내지 않고 top만 확인하는 method -------- //
Stack.prototype.peek = function() {
  if(this._storage) return this._storage[this.top - 1];
  else return null;
}

// empty는 비었는지 확인하는 method --------------- //
Stack.prototype.empty = function() {
  if(this.top === 0) return true;
  else return false;
}

// search는 해당 item이 있는지 확인하는 method ----- //
Stack.prototype.search = function(item) {
  let currentArray = Object.values(this._storage);
  if(currentArray.includes(item)) {
    for(let i = 0; i < currentArray.length; i++) {
      if(currentArray[i] === item) {
        return i;
      }
    }
  } else return -1;
}