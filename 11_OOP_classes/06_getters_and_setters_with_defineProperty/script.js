//Constructor function
function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  Object.defineProperty(this, "firstName", {
    get: function () {
      return this.capitalizeFirst(this._firstName);
    },
    set: function (value) {
      this._firstName = this.capitalizeFirst(value);
    },
  });

  Object.defineProperty(this, "lastName", {
    get: function () {
      return this.capitalizeFirst(this._lastName);
    },
    set: function (value) {
      this._lastName = this.capitalizeFirst(value);
    },
  });
  Object.defineProperty(this, "fullName", {
    get: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  });
}

Person.prototype.capitalizeFirst = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

//Object literals

const PersonObj = {
  _firstName: "babi",
  _lastName: "mean",

  get firstName() {
    return Person.prototype.capitalizeFirst(this._firstName);
  },
  set firstName(value) {
    return (this._firstName = Person.prototype.capitalizeFirst(value));
  },
  get lastName() {
    return Person.prototype.capitalizeFirst(this._lastName);
  },
  set lastName(value) {
    return (this._lastName = Person.prototype.capitalizeFirst = value);
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const person1 = new Person("saba", "hussain");
console.log(person1.lastName);
console.log(person1.fullName);

const person2 = Object.create(PersonObj);
console.log(person2.fullName);
