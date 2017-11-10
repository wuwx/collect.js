'use strict';

module.exports = (it, expect, collect) => {
  it('should return whether the collection contains a given item', () => {
    const collection = collect({
      name: 'Steven Gerrard',
      number: 8,
    });

    const contains = collection.contains('name');

    expect(contains).to.eql(true);

    expect(collection.all()).to.eql({
      name: 'Steven Gerrard',
      number: 8,
    });

    const collection2 = collect({
      name: 'Steven Gerrard',
      number: 8,
    });

    const contains2 = collection2.contains('spouse');
    expect(contains2).to.eql(false);
    expect(collection2.all()).to.eql({
      name: 'Steven Gerrard',
      number: 8,
    });
  });

  it('should accept a key / value pair', () => {
    const collection = collect({
      name: 'Steven Gerrard',
      number: 8,
    });

    const contains = collection.contains('name', 'Steven Gerrard');
    expect(contains).to.eql(true);

    const contains2 = collection.contains('number', '8');
    expect(contains2).to.eql(false);

    const contains3 = collection.contains('number', 28);
    expect(contains3).to.eql(false);

    const contains4 = collection.contains('name', 'Steve Jobs');
    expect(contains4).to.eql(false);
  });

  it('should accept a closure', () => {
    const collection = collect([1, 2, 3, 4, 5]);

    const contains = collection.contains(value => value > 5);
    expect(contains).to.eql(false);

    const contains2 = collection.contains(value => value < 5);
    expect(contains2).to.eql(true);

    const collection3 = collect([1, 2, 3, 4]);
    expect(collection3.contains(4)).to.eql(true);
  });
};